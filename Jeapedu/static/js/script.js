/* 鍏ㄧ珯琛ㄥ崟鍐呭show/hide澹版槑 */
function focusLabels() {
	if (!document.getElementsByTagName) return false;
	var labels = document.getElementsByTagName("label");
	for (var i = 0; i < labels.length; i++) {
		if (!labels[i].getAttribute("for")) continue;
		labels[i].onclick = function() {
			var id = this.getAttribute("for");
			if (!document.getElementById(id)) return false;
			var element = document.getElementById(id);
			element.focus()
		}
	}
}
function resetFields(whichform) {
	for (var i = 0; i < whichform.elements.length; i++) {
		var element = whichform.elements[i];
		if (element.type == "submit") continue;
		if (!element.defaultValue) continue;
		element.onfocus = function() {
			if (this.value == this.defaultValue) {
				this.value = ""
			}
		}
		element.onblur = function() {
			if (this.value == "") {
				this.value = this.defaultValue
			}
		}
	}
}
function prepareForms() {
	for (var i = 0; i < document.forms.length; i++) {
		var thisform = document.forms[i];
		resetFields(thisform);
		thisform.onsubmit = function() {
			return validateForm(this)
		}
	}
}

/* 鏃犲鐨勭劍鐐瑰浘鎵€闇€ */
function id(string) {
	return "string" == typeof string ? document.getElementById(string) : string;
}
function tag(e, p) {
	return p.getElementsByTagName(e)
}

/* 棣栭〉鐒︾偣鍥惧璞″師鍨嬪０鏄� */
var TINY = {};
TINY.slider = function() {
	function slide(n, p) {
		this.n = n;
		this.init(p)
	}
	slide.prototype.init = function(p) {
		var s = this.x = $('#'+p.id)[0],
		u = this.u = tag('ul', s)[0],
		c = this.m = tag('li', u),
		l = c.length,
		i = this.l = this.c = 0;

		this.b = 1;
		if (p.navid && p.activeclass) {
			this.g = tag('li', id(p.navid));
			this.s = p.activeclass;
		}
		this.a = p.auto || 0;
		this.p = p.resume || 0;
		this.r = p.rewind || 0;
		this.e = p.elastic || false;
		this.v = p.vertical || 0;
		s.style.overflow = 'hidden';
		for (i; i < l; i++) {
			if (c[i].parentNode == u) {
				this.l++
			}
		}
		if (this.v) {;
			u.style.top = 0;
			this.h = p.height || c[0].offsetHeight;
			u.style.height = (this.l * this.h) + 'px'
		} else {
			u.style.left = 0;
			this.w = p.width || c[0].offsetWidth;
			u.style.width = (this.l * this.w) + 'px'
		}
		this.nav(p.position || 0);
		if (p.position) {
			this.pos(p.position || 0, this.a ? 1: 0, 1)
		} else if (this.a) {
			this.auto()
		}
		if (p.left) {
			this.sel(p.left)
		}
		if (p.right) {
			this.sel(p.right)
		}
	},
	slide.prototype.auto = function() {
		this.x.ai = setInterval(new Function(this.n + '.move(1,1,1)'), this.a * 1000)
	},
	slide.prototype.move = function(d, a) {
		var n = this.c + d;
		if (this.r) {
			n = d == 1 ? n == this.l ? 0: n: n < 0 ? this.l - 1: n
		}
		this.pos(n, a, 1)
	},
	slide.prototype.pos = function(p, a, m) {
		var v = p;
		clearInterval(this.x.ai);
		clearInterval(this.x.si);
		if (!this.r) {
			if (m) {
				if (p == -1 || (p != 0 && Math.abs(p) % this.l == 0)) {
					this.b++;
					for (var i = 0; i < this.l; i++) {
						this.u.appendChild(this.m[i].cloneNode(1))
					}
					this.v ? this.u.style.height = (this.l * this.h * this.b) + 'px': this.u.style.width = (this.l * this.w * this.b) + 'px';
				}
				if (p == -1 || (p < 0 && Math.abs(p) % this.l == 0)) {
					this.v ? this.u.style.top = (this.l * this.h * -1) + 'px': this.u.style.left = (this.l * this.w * -1) + 'px';
					v = this.l - 1
				}
			} else if (this.c > this.l && this.b > 1) {
				v = (this.l * (this.b - 1)) + p;
				p = v
			}
		}
		var t = this.v ? v * this.h * -1: v * this.w * -1,
		d = p < this.c ? -1: 1;
		this.c = v;
		var n = this.c % this.l;
		this.nav(n);
		if (this.e) {
			t = t - (8 * d)
		}
		this.x.si = setInterval(new Function(this.n + '.slide(' + t + ',' + d + ',1,' + a + ')'), 10)
	},
	slide.prototype.nav = function(n) {
		if (this.g) {
			for (var i = 0; i < this.l; i++) {
				this.g[i].className = i == n ? this.s: ''
			}
		}
	},
	slide.prototype.slide = function(t, d, i, a) {
		var o = this.v ? parseInt(this.u.style.top) : parseInt(this.u.style.left);
		if (o == t) {
			clearInterval(this.x.si);
			if (this.e && i < 3) {
				this.x.si = setInterval(new Function(this.n + '.slide(' + (i == 1 ? t + (12 * d) : t + (4 * d)) + ',' + (i == 1 ? ( - 1 * d) : ( - 1 * d)) + ',' + (i == 1 ? 2: 3) + ',' + a + ')'), 10)
			} else {
				if (a || (this.a && this.p)) {
					this.auto()
				}
				if (this.b > 1 && this.c % this.l == 0) {
					this.clear()
				}
			}
		} else {
			var v = o - Math.ceil(Math.abs(t - o) * .1) * d + 'px';
			this.v ? this.u.style.top = v: this.u.style.left = v
		}
	},
	slide.prototype.clear = function() {
		var c = tag('li', this.u),
		t = i = c.length;
		this.v ? this.u.style.top = 0: this.u.style.left = 0;
		this.b = 1;
		this.c = 0;
		for (i; i > 0; i--) {
			var e = c[i - 1];
			if (t > this.l && e.parentNode == this.u) {
				this.u.removeChild(e);
				t--
			}
		}
	},
	slide.prototype.sel = function(i) {
		var e = id(i);
		e.onselectstart = e.onmousedown = function() {
			return false
		}
	}
	return {
		slide: slide
	}
} ();

/* 鍥炲埌椤堕儴鐨勫璞″師鍨嬪畾涔� */
var scrolltotop = {
		setting: {startline:20, scrollto:0, scrollduration:300, fadeduration:[500, 100]},
		controlHTML: '<img src="/statics/images/top.gif" style="width:53px; height:49px" />', 
		controlattrs: {offsetx:0, offsety:30},
		anchorkeyword: '#top',

		state: {isvisible:false, shouldvisible:false},

		scrollup:function(){
			if (!this.cssfixedsupport) 
				this.$control.css({opacity:0}) 
			var dest=isNaN(this.setting.scrollto)? this.setting.scrollto : parseInt(this.setting.scrollto)
			if (typeof dest=="string" && jQuery('#'+dest).length==1) 
				dest=jQuery('#'+dest).offset().top
			else
				dest=0
			this.$body.animate({scrollTop: dest}, this.setting.scrollduration);
		},

		keepfixed:function(){
			var $window=jQuery(window)
			var controlx=($window.scrollLeft() + $window.width())/2
			var controly=$window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety
			this.$control.css({left:controlx+'px', top:controly+'px'})
		},

		togglecontrol:function(){
			var scrolltop=jQuery(window).scrollTop()
			if (!this.cssfixedsupport)
				this.keepfixed()
			this.state.shouldvisible=(scrolltop>=this.setting.startline)? true : false
			if (this.state.shouldvisible && !this.state.isvisible){
				this.$control.stop().animate({opacity:'1',filter: 'Alpha(opacity=100)'}, this.setting.fadeduration[0])
				this.state.isvisible=true
			}
			else if (this.state.shouldvisible==false && this.state.isvisible){
				this.$control.stop().animate({opacity:'0', filter: 'Alpha(opacity=0)'}, this.setting.fadeduration[1])
				this.state.isvisible=false
			}
		},

		init:function(){
			jQuery(document).ready(function($){
				var mainobj=scrolltotop
				var iebrws=document.all
				mainobj.cssfixedsupport=!iebrws || iebrws && document.compatMode=="CSS1Compat" && window.XMLHttpRequest //not IE or IE7+ browsers in standards mode
				mainobj.$body=(window.opera)? (document.compatMode=="CSS1Compat"? $('html') : $('body')) : $('html,body')
				mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+'</div>')
					.css({position:mainobj.cssfixedsupport? 'fixed' : 'absolute', bottom:0, right:"0", opacity:'0', filter: 'Alpha(opacity=0)', cursor:'pointer'})
					.attr({title:'Scroll Back to Top'})
					.click(function(){mainobj.scrollup(); return false})
					.appendTo('body')
				if (document.all && !window.XMLHttpRequest && mainobj.$control.text()!='')
					mainobj.$control.css({width:mainobj.$control.width()})
				mainobj.togglecontrol()
				$('a[href="' + mainobj.anchorkeyword +'"]').click(function(){
					mainobj.scrollup()
					return false
				})
				$(window).bind('scroll resize', function(e){
					mainobj.togglecontrol()
				})
			})
		}
	}

/* 鎵撳紑鏂扮獥鍙� 鍑芥暟瀹氫箟 */
function OpenWin(pageURL, innerWidth, innerHeight) {
 var ScreenWidth = screen.availWidth
 var ScreenHeight = screen.availHeight
 var StartX = (ScreenWidth - innerWidth) / 2
 var StartY = (ScreenHeight - innerHeight) / 2
 wins = window.open(pageURL, 'OpenWin', 'left='+ StartX + ', top='+ StartY + ', Width=' + innerWidth +', height=' + innerHeight + ', resizable=no, scrollbars=yes, status=no, toolbar=no, menubar=no, location=no')
 wins.focus();
}

/* weibo鐨勫璞″師鍨嬪畾涔� */
var weiboClass = {
  create: function() {
	return function() {
	  this.initialize.apply(this, arguments);
	}
  }
}

Object.extend = function(destination, source) {
	for (var property in source) {
		destination[property] = source[property];
	}
	return destination;
}

function addEventHandler(oTarget, sEventType, fnHandler) {
	if (oTarget.addEventListener) {
		oTarget.addEventListener(sEventType, fnHandler, false);
	} else if (oTarget.attachEvent) {
		oTarget.attachEvent("on" + sEventType, fnHandler);
	} else {
		oTarget["on" + sEventType] = fnHandler;
	}
};


function check() {	
	var name = document.form1.name.value,
	tel = document.form1.phone.value,
	qq = document.form1.qq.value,
	email = document.form1.mail.value;	
    if(name=="") {	
        alert("濮撳悕涓哄繀濉�!");	
        document.form1.name.focus();
        return false;	
    }
    if (name.replace(/[^\x00-\xff]/g, "**").length > 8 || name.replace(/[^\x00-\xff]/g, "**").length <4 ){		
        alert("璇疯鐪熷～鍐欐偍鐨勫鍚�!");	
        document.form1.name.focus();
        return false;	
    }	

    if(tel==""){	
        alert("鐢佃瘽鑱旂郴鏂瑰紡涓哄繀濉�!");	
        document.form1.phone.focus();
        return false;	
    }	
    if (isNaN(tel) || tel.replace(/[^\x00-\xff]/g, "**").length > 18 || tel.replace(/[^\x00-\xff]/g, "**").length<8 ) {	
        alert("璇疯鐪熷～鐢佃瘽鑱旂郴鏂瑰紡!");
        document.form1.phone.focus();
        return false;
    }
    if(qq == '') {
        alert("璇峰～鍐橯Q鍙风爜");
        document.form1.qq.focus();
        return false;
    }
    if(isNaN(qq) || qq.replace(/[^\x00-\xff]/g, "**").length > 11 || qq.replace(/[^\x00-\xff]/g, "**").length<5  ) {
        alert("璇疯緭鍏ュ悎娉昋Q鍙风爜");
        document.form1.qq.focus();
        return false;
    }
        return true;
}

/* 鍒濆鍖栨樉绀� 鎬昏皟搴﹀嚱鏁� */
function initView() {
	/* 琛ㄥ崟鐨勫唴瀹圭殑鏄剧ず闅愯棌 */
	focusLabels();
	prepareForms();
	/* 椤堕儴鎼滅储妗嗙殑浜や簰鏁堟灉 */
	$(".searchtxt").bind({
		focus: function() {
			$(this).parent().parent().addClass("searchfocus")
		},
		blur: function() {
			$(this).parent().parent().removeClass("searchfocus")
		}
	});
	$("#searchsubmit").hover(
		function() {
			$(this).addClass("submit_f")
		},
		function() {
			$(this).removeClass("submit_f")
		}
	);
	$("#footer li").hover(
		function() {
			$(this).css({'background':'#F1F1F1'})
		},
		function() {
			$(this).css({'background':'#F9F9F9'})
		}
	);

	/* a杩炴帴鐨勮櫄绾垮鐞� */
	var aA = $('a')[0];
	for (var i = 0, len = aA.length; i < len; i++) add(aA[i]);
	function add(obj) {
		ppcAppendEventListener(obj, 'focus',
		function() {
			obj.blur();
		});
	}	
	//scrolltotop.init();/* 鍥炲埌椤堕儴 */
}

function initfocus_index() {
	if($("#focus")[0]) $('<script src="/statics/images/home.js" type="text/javascript"></script>').insertAfter("#Wrap");
}

function initmarquee_col() {
	if($("#ISL_Cont_1")[0]) $('<script src="/statics/images/marquee.js" type="text/javascript"></script>').insertAfter("#Wrap");
	if($("#phperName")[0]) $('<script src="/statics/images/Scroll.js" type="text/javascript"></script>').insertAfter("#Wrap");
}

/* 鍏抽棴JS 閿欒鎻愮ず 锛堥拡瀵箄ndefined鎻愮ず 锛�*/
/*  window.onerror=function(){return true;} /* 

/*= 棰勫姞杞藉鐞� 锛堝嚱鏁拌皟鐢級 =*/
$(document).ready(function() {
	initView();//鍒濆鍖栨樉绀�
	$('#modle_index dl').eq(0).html($('#section').html());//瀵艰埅鎺ㄨ崘
	/*
	if(guess_ul) guess.css({'display':'none'});//璇︾粏椤� 搴曢儴鎺ㄨ崘鎺у埗
	var guess = $('#guess');
	var guess_ul = $('#guess ul').eq(0)[0].innerHTML;
	(guess_ul.length <= 10) && guess.css({'display': 'none'});
	*/
})