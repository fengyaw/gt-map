window.TILE_VERSION = {
  "ditu": {
    "normal": {
      "version": "088",
      "updateDate": "20191210"
    },
    "satellite": {
      "version": "009",
      "updateDate": "20191210"
    },
    "normalTraffic": {
      "version": "081",
      "updateDate": "20191210"
    },
    "satelliteTraffic": {
      "version": "083",
      "updateDate": "20191210"
    },
    "mapJS": {
      "version": "104",
      "updateDate": "20191210"
    },
    "satelliteStreet": {
      "version": "083",
      "updateDate": "20191210"
    },
    "earthVector": {
      "version": "001",
      "updateDate": "20191210"
    }
  },
  "webapp": {
    "high_normal": {
      "version": "001",
      "updateDate": "20191210"
    },
    "lower_normal": {
      "version": "002",
      "updateDate": "20191210"
    }
  },
  "api_for_mobile": {
    "vector": {
      "version": "002",
      "updateDate": "20191210"
    },
    "vectorIcon": {
      "version": "002",
      "updateDate": "20191210"
    }
  }
};
window.BMAP_AUTHENTIC_KEY = "EnRctIH3RAgwGZGN0P1xlyIoBaOVw86i"; (function () {
  function aa(a) {
    throw a;
  }
  var l = void 0,
    p = !0,
    s = null,
    t = !1;
  function u() {
    return function () { }
  }
  function ca(a) {
    return function (b) {
      this[a] = b
    }
  }
  function x(a) {
    return function () {
      return this[a]
    }
  }
  function ea(a) {
    return function () {
      return a
    }
  }
  var fa, ga = [];
  function ha(a) {
    return function () {
      return ga[a].apply(this, arguments)
    }
  }
  function ia(a, b) {
    return ga[a] = b
  }
  var ja, z = ja = z || {
    version: "1.3.4"
  };
  z.ea = "$BAIDU$";
  window[z.ea] = window[z.ea] || {};
  z.object = z.object || {};
  z.extend = z.object.extend = function (a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    return a
  };
  z.R = z.R || {};
  z.R.da = function (a) {
    return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : s
  };
  z.da = z.Ec = z.R.da;
  z.R.aa = function (a) {
    a = z.R.da(a);
    if (a === s) return a;
    a.style.display = "none";
    return a
  };
  z.aa = z.R.aa;
  z.lang = z.lang || {};
  z.lang.og = function (a) {
    return "[object String]" == Object.prototype.toString.call(a)
  };
  z.og = z.lang.og;
  z.lang.km = function (a) {
    if ("[object Object]" === Object.prototype.toString.call(a)) {
      for (var b in a) return t;
      return p
    }
    return t
  };
  z.km = z.lang.km;
  z.R.Dj = function (a) {
    return z.lang.og(a) ? document.getElementById(a) : a
  };
  z.Dj = z.R.Dj;
  z.R.getElementsByClassName = function (a, b) {
    var c;
    if (a.getElementsByClassName) c = a.getElementsByClassName(b);
    else {
      var e = a;
      e == s && (e = document);
      c = [];
      var e = e.getElementsByTagName("*"),
        f = e.length,
        g = RegExp("(^|\\s)" + b + "(\\s|$)"),
        i,
        k;
      for (k = i = 0; i < f; i++) g.test(e[i].className) && (c[k] = e[i], k++)
    }
    return c
  };
  z.getElementsByClassName = z.R.getElementsByClassName;
  z.R.contains = function (a, b) {
    var c = z.R.Dj,
      a = c(a),
      b = c(b);
    return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
  };
  z.fa = z.fa || {};
  /msie (\d+\.\d)/i.test(navigator.userAgent) && (z.fa.ma = z.ma = document.documentMode || +RegExp.$1);
  var ka = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    rowspan: "rowSpan",
    valign: "vAlign",
    usemap: "useMap",
    frameborder: "frameBorder"
  };
  8 > z.fa.ma ? (ka["for"] = "htmlFor", ka["class"] = "className") : (ka.htmlFor = "for", ka.className = "class");
  z.R.RF = ka;
  z.R.vE = function (a, b, c) {
    a = z.R.da(a);
    if (a === s) return a;
    if ("style" == b) a.style.cssText = c;
    else {
      b = z.R.RF[b] || b;
      a.setAttribute(b, c)
    }
    return a
  };
  z.vE = z.R.vE;
  z.R.wE = function (a, b) {
    a = z.R.da(a);
    if (a === s) return a;
    for (var c in b) z.R.vE(a, c, b[c]);
    return a
  };
  z.wE = z.R.wE;
  z.Hk = z.Hk || {}; (function () {
    var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
    z.Hk.trim = function (b) {
      return ("" + b).replace(a, "")
    }
  })();
  z.trim = z.Hk.trim;
  z.Hk.zo = function (a, b) {
    var a = "" + a,
      c = Array.prototype.slice.call(arguments, 1),
      e = Object.prototype.toString;
    if (c.length) {
      c = c.length == 1 ? b !== s && /\[object Array\]|\[object Object\]/.test(e.call(b)) ? b : c : c;
      return a.replace(/#\{(.+?)\}/g,
        function (a, b) {
          var i = c[b];
          "[object Function]" == e.call(i) && (i = i(b));
          return "undefined" == typeof i ? "" : i
        })
    }
    return a
  };
  z.zo = z.Hk.zo;
  z.R.tc = function (a, b) {
    a = z.R.da(a);
    if (a === s) return a;
    for (var c = a.className.split(/\s+/), e = b.split(/\s+/), f, g = e.length, i, k = 0; k < g; ++k) {
      i = 0;
      for (f = c.length; i < f; ++i) if (c[i] == e[k]) {
        c.splice(i, 1);
        break
      }
    }
    a.className = c.join(" ");
    return a
  };
  z.tc = z.R.tc;
  z.R.ex = function (a, b, c) {
    a = z.R.da(a);
    if (a === s) return a;
    var e;
    if (a.insertAdjacentHTML) a.insertAdjacentHTML(b, c);
    else {
      e = a.ownerDocument.createRange();
      b = b.toUpperCase();
      if (b == "AFTERBEGIN" || b == "BEFOREEND") {
        e.selectNodeContents(a);
        e.collapse(b == "AFTERBEGIN")
      } else {
        b = b == "BEFOREBEGIN";
        e[b ? "setStartBefore" : "setEndAfter"](a);
        e.collapse(b)
      }
      e.insertNode(e.createContextualFragment(c))
    }
    return a
  };
  z.ex = z.R.ex;
  z.R.show = function (a) {
    a = z.R.da(a);
    if (a === s) return a;
    a.style.display = "";
    return a
  };
  z.show = z.R.show;
  z.R.RC = function (a) {
    a = z.R.da(a);
    return a === s ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
  };
  z.R.eb = function (a, b) {
    a = z.R.da(a);
    if (a === s) return a;
    for (var c = b.split(/\s+/), e = a.className, f = " " + e + " ", g = 0, i = c.length; g < i; g++) f.indexOf(" " + c[g] + " ") < 0 && (e = e + (" " + c[g]));
    a.className = e;
    return a
  };
  z.eb = z.R.eb;
  z.R.UA = z.R.UA || {};
  z.R.Al = z.R.Al || [];
  z.R.Al.filter = function (a, b, c) {
    for (var e = 0,
      f = z.R.Al,
      g; g = f[e]; e++) if (g = g[c]) b = g(a, b);
    return b
  };
  z.Hk.FN = function (a) {
    return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g,
      function (a) {
        return a.charAt(1).toUpperCase()
      })
  };
  z.R.v_ = function (a) {
    z.R.zs(a, "expand") ? z.R.tc(a, "expand") : z.R.eb(a, "expand")
  };
  z.R.zs = function (a) {
    if (arguments.length <= 0 || typeof a === "function") return this;
    if (this.size() <= 0) return t;
    var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "),
      b = a.split(" "),
      c;
    z.forEach(this,
      function (a) {
        for (var a = a.className,
          f = 0; f < b.length; f++) if (!~(" " + a + " ").indexOf(" " + b[f] + " ")) {
            c = t;
            return
          }
        c !== t && (c = p)
      });
    return c
  };
  z.R.ng = function (a, b) {
    var c = z.R,
      a = c.da(a);
    if (a === s) return a;
    var b = z.Hk.FN(b),
      e = a.style[b];
    if (!e) var f = c.UA[b],
      e = a.currentStyle || (z.fa.ma ? a.style : getComputedStyle(a, s)),
      e = f && f.get ? f.get(a, e) : e[f || b];
    if (f = c.Al) e = f.filter(b, e, "get");
    return e
  };
  z.ng = z.R.ng;
  /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (z.fa.opera = +RegExp.$1);
  z.fa.uL = /webkit/i.test(navigator.userAgent);
  z.fa.SX = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
  z.fa.FD = "CSS1Compat" == document.compatMode;
  z.R.ja = function (a) {
    a = z.R.da(a);
    if (a === s) return a;
    var b = z.R.RC(a),
      c = z.fa,
      e = z.R.ng;
    c.SX > 0 && b.getBoxObjectFor && e(a, "position");
    var f = {
      left: 0,
      top: 0
    },
      g;
    if (a == (c.ma && !c.FD ? b.body : b.documentElement)) return f;
    if (a.getBoundingClientRect) {
      a = a.getBoundingClientRect();
      f.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
      f.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
      f.left = f.left - b.documentElement.clientLeft;
      f.top = f.top - b.documentElement.clientTop;
      a = b.body;
      b = parseInt(e(a, "borderLeftWidth"));
      e = parseInt(e(a, "borderTopWidth"));
      if (c.ma && !c.FD) {
        f.left = f.left - (isNaN(b) ? 2 : b);
        f.top = f.top - (isNaN(e) ? 2 : e)
      }
    } else {
      g = a;
      do {
        f.left = f.left + g.offsetLeft;
        f.top = f.top + g.offsetTop;
        if (c.uL > 0 && e(g, "position") == "fixed") {
          f.left = f.left + b.body.scrollLeft;
          f.top = f.top + b.body.scrollTop;
          break
        }
        g = g.offsetParent
      } while (g && g != a);
      if (c.opera > 0 || c.uL > 0 && e(a, "position") == "absolute") f.top = f.top - b.body.offsetTop;
      for (g = a.offsetParent; g && g != b.body;) {
        f.left = f.left - g.scrollLeft;
        if (!c.opera || g.tagName != "TR") f.top = f.top - g.scrollTop;
        g = g.offsetParent
      }
    }
    return f
  };
  /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (z.fa.Qe = +RegExp.$1);
  /BIDUBrowser/i.test(navigator.userAgent) && (z.fa.w1 = p);
  var la = navigator.userAgent;
  /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(la) && !/chrome/i.test(la) && (z.fa.Ox = +(RegExp.$1 || RegExp.$2));
  /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (z.fa.aw = +RegExp.$1);
  z.lc = z.lc || {};
  z.lc.Nb = function (a, b) {
    var c, e, f = a.length;
    if ("function" == typeof b) for (e = 0; e < f; e++) {
      c = a[e];
      c = b.call(a, c, e);
      if (c === t) break
    }
    return a
  };
  z.Nb = z.lc.Nb;
  z.lang.ea = function () {
    return "TANGRAM__" + (window[z.ea]._counter++).toString(36)
  };
  window[z.ea]._counter = window[z.ea]._counter || 1;
  window[z.ea]._instances = window[z.ea]._instances || {};
  z.lang.Js = function (a) {
    return "[object Function]" == Object.prototype.toString.call(a)
  };
  z.lang.Ga = function (a) {
    this.ea = a || z.lang.ea();
    window[z.ea]._instances[this.ea] = this
  };
  window[z.ea]._instances = window[z.ea]._instances || {};
  z.lang.Ga.prototype.Rh = ha(0);
  z.lang.Ga.prototype.toString = function () {
    return "[object " + (this.DP || "Object") + "]"
  };
  z.lang.bu = function (a, b) {
    this.type = a;
    this.returnValue = p;
    this.target = b || s;
    this.currentTarget = s
  };
  z.lang.Ga.prototype.addEventListener = function (a, b, c) {
    if (z.lang.Js(b)) {
      !b.Sk && (b.Sk = {}); !this.vi && (this.vi = {});
      var e = this.vi,
        f;
      if (typeof c == "string" && c) {
        / [ ^ \w\ - ] /.test(c) && aa("nonstandard key:" + c);
        f = b.Vw = c
      }
      a.indexOf("on") != 0 && (a = "on" + a);
      typeof e[a] != "object" && (e[a] = {});
      typeof b.Sk[a] != "object" && (b.Sk[a] = {});
      f = f || z.lang.ea();
      b.Sk[a].Vw = f;
      e[a][f] = b
    }
  };
  z.lang.Ga.prototype.removeEventListener = function (a, b) {
    a.indexOf("on") != 0 && (a = "on" + a);
    if (z.lang.Js(b)) {
      if (!b.Sk || !b.Sk[a]) return;
      b = b.Sk[a].Vw
    } else if (!z.lang.og(b)) return; !this.vi && (this.vi = {});
    var c = this.vi;
    c[a] && c[a][b] && delete c[a][b]
  };
  z.lang.Ga.prototype.dispatchEvent = function (a, b) {
    z.lang.og(a) && (a = new z.lang.bu(a)); !this.vi && (this.vi = {});
    var b = b || {},
      c;
    for (c in b) a[c] = b[c];
    var e = this.vi,
      f = a.type;
    a.target = a.target || this;
    a.currentTarget = this;
    f.indexOf("on") != 0 && (f = "on" + f);
    z.lang.Js(this[f]) && this[f].apply(this, arguments);
    if (typeof e[f] == "object") for (c in e[f]) e[f][c].apply(this, arguments);
    return a.returnValue
  };
  z.lang.wa = function (a, b, c) {
    var e, f, g = a.prototype;
    f = new Function;
    f.prototype = b.prototype;
    f = a.prototype = new f;
    for (e in g) f[e] = g[e];
    a.prototype.constructor = a;
    a.i_ = b.prototype;
    if ("string" == typeof c) f.DP = c
  };
  z.wa = z.lang.wa;
  z.lang.Mc = function (a) {
    return window[z.ea]._instances[a] || s
  };
  z.platform = z.platform || {};
  z.platform.nL = /macintosh/i.test(navigator.userAgent);
  z.platform.z3 = /MicroMessenger/i.test(navigator.userAgent);
  z.platform.vL = /windows/i.test(navigator.userAgent);
  z.platform.bY = /x11/i.test(navigator.userAgent);
  z.platform.jj = /android/i.test(navigator.userAgent);
  /android (\d+(\.\d)?)/i.test(navigator.userAgent) && (z.platform.nB = z.nB = RegExp.$1);
  z.platform.UX = /ipad/i.test(navigator.userAgent);
  z.platform.BD = /iphone/i.test(navigator.userAgent);
  function ma(a, b) {
    a.domEvent = b = window.event || b;
    a.clientX = b.clientX || b.pageX;
    a.clientY = b.clientY || b.pageY;
    a.offsetX = b.offsetX || b.layerX;
    a.offsetY = b.offsetY || b.layerY;
    a.screenX = b.screenX;
    a.screenY = b.screenY;
    a.ctrlKey = b.ctrlKey || b.metaKey;
    a.shiftKey = b.shiftKey;
    a.altKey = b.altKey;
    if (b.touches) {
      a.touches = [];
      for (var c = 0; c < b.touches.length; c++) a.touches.push({
        clientX: b.touches[c].clientX,
        clientY: b.touches[c].clientY,
        screenX: b.touches[c].screenX,
        screenY: b.touches[c].screenY,
        pageX: b.touches[c].pageX,
        pageY: b.touches[c].pageY,
        target: b.touches[c].target,
        identifier: b.touches[c].identifier
      })
    }
    if (b.changedTouches) {
      a.changedTouches = [];
      for (c = 0; c < b.changedTouches.length; c++) a.changedTouches.push({
        clientX: b.changedTouches[c].clientX,
        clientY: b.changedTouches[c].clientY,
        screenX: b.changedTouches[c].screenX,
        screenY: b.changedTouches[c].screenY,
        pageX: b.changedTouches[c].pageX,
        pageY: b.changedTouches[c].pageY,
        target: b.changedTouches[c].target,
        identifier: b.changedTouches[c].identifier
      })
    }
    if (b.targetTouches) {
      a.targetTouches = [];
      for (c = 0; c < b.targetTouches.length; c++) a.targetTouches.push({
        clientX: b.targetTouches[c].clientX,
        clientY: b.targetTouches[c].clientY,
        screenX: b.targetTouches[c].screenX,
        screenY: b.targetTouches[c].screenY,
        pageX: b.targetTouches[c].pageX,
        pageY: b.targetTouches[c].pageY,
        target: b.targetTouches[c].target,
        identifier: b.targetTouches[c].identifier
      })
    }
    a.rotation = b.rotation;
    a.scale = b.scale;
    return a
  }
  z.lang.tw = function (a) {
    var b = window[z.ea];
    b.JR && delete b.JR[a]
  };
  z.event = {};
  z.V = z.event.V = function (a, b, c) {
    if (!(a = z.da(a))) return a;
    b = b.replace(/^on/, "");
    a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c);
    return a
  };
  z.dd = z.event.dd = function (a, b, c) {
    if (!(a = z.da(a))) return a;
    b = b.replace(/^on/, "");
    a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c);
    return a
  };
  z.R.zs = function (a, b) {
    if (!a || !a.className || typeof a.className != "string") return t;
    var c = -1;
    try {
      c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
    } catch (e) {
      return t
    }
    return c > -1
  };
  z.ZJ = function () {
    function a(a) {
      document.addEventListener && (this.element = a, this.bK = this.qk ? "touchstart" : "mousedown", this.zC = this.qk ? "touchmove" : "mousemove", this.yC = this.qk ? "touchend" : "mouseup", this.fh = t, this.Ht = this.Gt = 0, this.element.addEventListener(this.bK, this, t), ja.V(this.element, "mousedown", u()), this.handleEvent(s))
    }
    a.prototype = {
      qk: "ontouchstart" in window || "createTouch" in document,
      start: function (a) {
        na(a);
        this.fh = t;
        this.Gt = this.qk ? a.touches[0].clientX : a.clientX;
        this.Ht = this.qk ? a.touches[0].clientY : a.clientY;
        this.element.addEventListener(this.zC, this, t);
        this.element.addEventListener(this.yC, this, t)
      },
      move: function (a) {
        oa(a);
        var c = this.qk ? a.touches[0].clientY : a.clientY;
        if (10 < Math.abs((this.qk ? a.touches[0].clientX : a.clientX) - this.Gt) || 10 < Math.abs(c - this.Ht)) this.fh = p
      },
      end: function (a) {
        oa(a);
        this.fh || (a = document.createEvent("Event"), a.initEvent("tap", t, p), this.element.dispatchEvent(a));
        this.element.removeEventListener(this.zC, this, t);
        this.element.removeEventListener(this.yC, this, t)
      },
      handleEvent: function (a) {
        if (a) switch (a.type) {
          case this.bK:
            this.start(a);
            break;
          case this.zC:
            this.move(a);
            break;
          case this.yC:
            this.end(a)
        }
      }
    };
    return function (b) {
      return new a(b)
    }
  }();
  var D = window.BMap || {};
  D.version = "3.0";
  D.n1 = 0.34 > Math.random();
  0 <= D.version.indexOf("#") && (D.version = "3.0");
  D.Yq = [];
  D.We = function (a) {
    this.Yq.push(a)
  };
  D.Oq = [];
  D.tm = function (a) {
    this.Oq.push(a)
  };
  D.XT = D.apiLoad || u();
  D.U_ = D.verify ||
    function () {
      D.version && D.version >= 1.5 && pa(D.nd + "?qt=verify&ak=" + qa,
        function (a) {
          if (a && a.error !== 0) {
            if (typeof map !== "undefined") {
              map.Ta().innerHTML = "";
              map.vi = {}
            }
            D = s;
            var b = "\u767e\u5ea6\u672a\u6388\u6743\u4f7f\u7528\u5730\u56feAPI\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
            switch (a.error) {
              case 101:
                b = "\u5f00\u53d1\u8005\u7981\u7528\u4e86\u8be5ak\u7684jsapi\u670d\u52a1\u6743\u9650\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                break;
              case 102:
                b = "\u5f00\u53d1\u8005Referer\u4e0d\u6b63\u786e\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002"
            }
            alert(b)
          }
        })
    };
  var qa = window.BMAP_AUTHENTIC_KEY;
  window.BMAP_AUTHENTIC_KEY = s;
  var sa = window.BMap_loadScriptTime,
    ta = (new Date).getTime(),
    ua = s,
    wa = p,
    xa = 5042,
    za = 5002,
    Aa = 5003,
    Ba = "load_mapclick",
    Ca = 5038,
    Da = 5041,
    Fa = 5047,
    Ga = 5036,
    Ha = 5039,
    Ia = 5037,
    Ja = 5040,
    Ka = 5011,
    Ma = 7E3;
  var Na = 0;
  function Oa(a, b) {
    if (a = z.da(a)) {
      var c = this;
      z.lang.Ga.call(c);
      b = b || {};
      c.U = {
        AB: 200,
        Wb: p,
        yw: t,
        oC: p,
        uo: p,
        wo: b.enableWheelZoom || t,
        XJ: p,
        rC: p,
        as: p,
        $r: p,
        vC: p,
        so: b.enable3DBuilding || t,
        Hc: 25,
        g0: 240,
        KT: 450,
        yc: H.yc,
        Gd: H.Gd,
        Ks: !!b.Ks,
        gc: Math.round(b.minZoom) || 1,
        pc: Math.round(b.maxZoom) || 19,
        Db: b.mapType || Pa,
        z4: t,
        UJ: b.drawer || Na,
        xw: p,
        ww: 500,
        OV: b.enableHighResolution !== t,
        qC: b.enableMapClick !== t,
        devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
        fF: 99,
        we: b.mapStyle || s,
        iY: b.logoControl === t ? t : p,
        dU: [],
        z1: b.beforeClickIcon || s,
        Xi: t,
        vo: t,
        no: t,
        $D: p,
        kC: b.enableBizAuthLogo === t ? t : p
      };
      c.U.we && (this.FX(c.U.we.controls), this.iL(c.U.we.geotableId));
      c.U.we && c.U.we.styleId && c.W2(c.U.we.styleId);
      c.U.DB = {
        dark: {
          backColor: "#2D2D2D",
          textColor: "#bfbfbf",
          iconUrl: "dicons"
        },
        normal: {
          backColor: "#F3F1EC",
          textColor: "#c61b1b",
          iconUrl: "icons"
        },
        light: {
          backColor: "#EBF8FC",
          textColor: "#017fb4",
          iconUrl: "licons"
        }
      };
      b.enableAutoResize && (c.U.$r = b.enableAutoResize);
      b.enableStreetEntrance === t && (c.U.vC = b.enableStreetEntrance);
      b.enableDeepZoom === t && (c.U.XJ = b.enableDeepZoom);
      var e = c.U.dU;
      if (I()) for (var f = 0,
        g = e.length; f < g; f++) if (z.fa[e[f]]) {
          c.U.devicePixelRatio = 1;
          break
        }
      e = -1 < navigator.userAgent.toLowerCase().indexOf("android");
      f = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
      if (- 1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || e && f) c.U.fF = 99;
      c.Ya = a;
      c.NA(a);
      a.unselectable = "on";
      a.innerHTML = "";
      a.appendChild(c.za());
      b.size && this.Ae(b.size);
      e = c.Hb();
      c.width = e.width;
      c.height = e.height;
      c.offsetX = 0;
      c.offsetY = 0;
      c.platform = a.firstChild;
      c.xe = c.platform.firstChild;
      c.xe.style.width = c.width + "px";
      c.xe.style.height = c.height + "px";
      c.Xd = {};
      c.pe = new J(0, 0);
      c.fc = new J(0, 0);
      c.Va = 3;
      c.Bc = 0;
      c.OB = s;
      c.NB = s;
      c.Vb = "";
      c.bw = "";
      c.Ah = {};
      c.Ah.custom = {};
      c.xi = {};
      c.Wa = 0;
      b.useWebGL === t && Qa(t);
      c.W = new Ra(a, {
        hf: "api",
        OR: p
      });
      c.W.aa();
      c.W.BE(c);
      b = b || {};
      e = c.Db = c.U.Db;
      c.Pc = e.nk();
      e === Sa && Ta(za);
      e === Va && Ta(Aa);
      e = c.U;
      e.YN = Math.round(b.minZoom);
      e.XN = Math.round(b.maxZoom);
      c.uu();
      c.$ = {
        Ic: t,
        mc: 0,
        Ps: 0,
        BL: 0,
        D3: 0,
        sB: t,
        kE: -1,
        re: []
      };
      c.platform.style.cursor = c.U.yc;
      for (f = 0; f < D.Yq.length; f++) D.Yq[f](c);
      c.$.kE = f;
      c.ga();
      K.load("map",
        function () {
          c.jb()
        });
      c.U.qC && (setTimeout(function () {
        Ta(Ba)
      },
        1E3), K.load("mapclick",
          function () {
            window.MPC_Mgr = window.MPC_Mgr || {};
            window.MPC_Mgr[c.ea] = new Wa(c)
          },
          p));
      Xa() && K.load("oppc",
        function () {
          c.ju()
        });
      I() && K.load("opmb",
        function () {
          c.ju()
        });
      a = s;
      c.aB = []
    }
  }
  z.lang.wa(Oa, z.lang.Ga, "Map");
  z.extend(Oa.prototype, {
    za: function () {
      var a = O("div"),
        b = a.style;
      b.overflow = "visible";
      b.position = "absolute";
      b.zIndex = "0";
      b.top = b.left = "0px";
      var b = O("div", {
        "class": "BMap_mask"
      }),
        c = b.style;
      c.position = "absolute";
      c.top = c.left = "0px";
      c.zIndex = "9";
      c.overflow = "hidden";
      c.WebkitUserSelect = "none";
      a.appendChild(b);
      return a
    },
    NA: function (a) {
      var b = a.style;
      b.overflow = "hidden";
      "absolute" !== Ya(a).position && (b.position = "relative", b.zIndex = 0);
      b.backgroundColor = "#F3F1EC";
      b.color = "#000";
      b.textAlign = "left"
    },
    ga: function () {
      var a = this;
      a.Sn = function () {
        var b = a.Hb();
        if (a.width !== b.width || a.height !== b.height) {
          var c = new P(a.width, a.height),
            e = new Q("onbeforeresize");
          e.size = c;
          a.dispatchEvent(e);
          a.Wj((b.width - a.width) / 2, (b.height - a.height) / 2);
          a.xe.style.width = (a.width = b.width) + "px";
          a.xe.style.height = (a.height = b.height) + "px";
          c = new Q("onresize");
          c.size = b;
          a.dispatchEvent(c)
        }
      };
      a.U.$r && (a.$.Kl = setInterval(a.Sn, 80))
    },
    Wj: function (a, b, c, e) {
      var f = this.va().dc(this.ka()),
        g = this.Pc,
        i = p;
      c && J.mL(c) && (this.pe = new J(c.lng, c.lat), i = t);
      if (c = c && e ? g.bi(c, this.Vb) : this.fc) if (this.fc = new J(c.lng + a * f, c.lat - b * f), (a = g.eh(this.fc, this.Vb)) && i) this.pe = a
    },
    yg: function (a, b) {
      if (Za(a) && (this.uu(), this.dispatchEvent(new Q("onzoomstart")), a = this.tn(a).zoom, a !== this.Va)) {
        this.Bc = this.Va;
        this.Va = a;
        var c;
        b ? c = b : this.$g() && (c = this.$g().ja());
        c && (c = this.Rb(c, this.Bc), this.Wj(this.width / 2 - c.x, this.height / 2 - c.y, this.Ib(c, this.Bc), p));
        this.dispatchEvent(new Q("onzoomstartcode"))
      }
    },
    Qc: function (a) {
      this.yg(a)
    },
    lF: function (a) {
      this.yg(this.Va + 1, a)
    },
    mF: function (a) {
      this.yg(this.Va - 1, a)
    },
    ji: function (a) {
      a instanceof J && (this.fc = this.Pc.bi(a, this.Vb), this.pe = J.mL(a) ? new J(a.lng, a.lat) : this.Pc.eh(this.fc, this.Vb))
    },
    tg: function (a, b) {
      a = Math.round(a) || 0;
      b = Math.round(b) || 0;
      this.Wj(- a, -b)
    },
    vr: function (a) {
      a && $a(a.Fe) && (a.Fe(this), this.dispatchEvent(new Q("onaddcontrol", a)))
    },
    NM: function (a) {
      a && $a(a.remove) && (a.remove(), this.dispatchEvent(new Q("onremovecontrol", a)))
    },
    Wn: function (a) {
      a && $a(a.xa) && (a.xa(this), this.dispatchEvent(new Q("onaddcontextmenu", a)))
    },
    cp: function (a) {
      a && $a(a.remove) && (this.dispatchEvent(new Q("onremovecontextmenu", a)), a.remove())
    },
    Pa: function (a) {
      a && $a(a.Fe) && (a.Fe(this), this.dispatchEvent(new Q("onaddoverlay", a)))
    },
    Sb: function (a) {
      a && $a(a.remove) && (a.remove(), this.dispatchEvent(new Q("onremoveoverlay", a)))
    },
    pJ: function () {
      this.dispatchEvent(new Q("onclearoverlays"))
    },
    Me: function (a) {
      a && this.dispatchEvent(new Q("onaddtilelayer", a))
    },
    Tf: function (a) {
      a && this.dispatchEvent(new Q("onremovetilelayer", a))
    },
    wg: function (a) {
      if (this.Db !== a) {
        var b = new Q("onsetmaptype");
        b.q4 = this.Db;
        this.Db = this.U.Db = a;
        this.Pc = this.Db.nk();
        this.Wj(0, 0, this.Bb(), p);
        this.uu();
        var c = this.tn(this.ka()).zoom;
        this.yg(c);
        this.dispatchEvent(b);
        b = new Q("onmaptypechange");
        b.Va = c;
        b.Db = a;
        this.dispatchEvent(b); (a === ab || a === Va) && Ta(Aa)
      }
    },
    pf: function (a) {
      var b = this;
      if (a instanceof J) b.ji(a, {
        noAnimation: p
      });
      else if (bb(a)) if (b.Db === Sa) {
        var c = H.wB[a];
        c && (pt = c.o, b.pf(pt))
      } else {
        var e = this.UG();
        e.wt(function (c) {
          0 === e.bm() && 2 === e.Ma.result.type && (b.pf(c.mk(0).point), Sa.ik(a) && b.yE(a))
        });
        e.search(a, {
          log: "center"
        })
      }
    },
    Ed: function (a, b) {
      "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
      D.Sp("cus.fire", "time", {
        z_loadscripttime: ta - sa
      });
      var c = this;
      if (bb(a)) if (c.Db === Sa) {
        var e = H.wB[a];
        e && (pt = e.o, c.Ed(pt, b))
      } else {
        var f = c.UG();
        f.wt(function (e) {
          if (0 === f.bm() && (2 === f.Ma.result.type || 11 === f.Ma.result.type)) {
            var e = e.mk(0).point,
              g = b || db.Cw(f.Ma.content.level, c);
            c.Ed(e, g);
            Sa.ik(a) && c.yE(a)
          }
        });
        f.search(a, {
          log: "center"
        })
      } else if (a instanceof J && b) {
        b = c.tn(b).zoom;
        c.Bc = c.Va || b;
        c.Va = b;
        e = c.pe;
        c.pe = new J(a.lng, a.lat);
        c.fc = c.Pc.bi(c.pe, c.Vb);
        c.OB = c.OB || c.Va;
        c.NB = c.NB || c.pe;
        var g = new Q("onload"),
          i = new Q("onloadcode");
        g.point = new J(a.lng, a.lat);
        g.pixel = c.Rb(c.pe, c.Va);
        g.zoom = b;
        c.loaded || (c.loaded = p, c.dispatchEvent(g), ua || (ua = eb()));
        c.dispatchEvent(i);
        g = new Q("onmoveend");
        g.iz = "centerAndZoom";
        e.oc(c.pe) || c.dispatchEvent(g);
        c.dispatchEvent(new Q("onmoveend"));
        c.Bc !== c.Va && (e = new Q("onzoomend"), e.iz = "centerAndZoom", c.dispatchEvent(e));
        c.U.so && c.so()
      }
    },
    UG: function () {
      this.$.NL || (this.$.NL = new fb(1));
      return this.$.NL
    },
    reset: function () {
      this.Ed(this.NB, this.OB, p)
    },
    enableDragging: function () {
      this.U.Wb = p
    },
    disableDragging: function () {
      this.U.Wb = t
    },
    enableInertialDragging: function () {
      this.U.xw = p
    },
    disableInertialDragging: function () {
      this.U.xw = t
    },
    enableScrollWheelZoom: function () {
      this.U.wo = p
    },
    disableScrollWheelZoom: function () {
      this.U.wo = t
    },
    enableContinuousZoom: function () {
      this.U.uo = p
    },
    disableContinuousZoom: function () {
      this.U.uo = t
    },
    enableDoubleClickZoom: function () {
      this.U.oC = p
    },
    disableDoubleClickZoom: function () {
      this.U.oC = t
    },
    enableKeyboard: function () {
      this.U.yw = p
    },
    disableKeyboard: function () {
      this.U.yw = t
    },
    enablePinchToZoom: function () {
      this.U.as = p
    },
    disablePinchToZoom: function () {
      this.U.as = t
    },
    enableAutoResize: function () {
      this.U.$r = p;
      this.Sn();
      this.$.Kl || (this.$.Kl = setInterval(this.Sn, 80))
    },
    disableAutoResize: function () {
      this.U.$r = t;
      this.$.Kl && (clearInterval(this.$.Kl), this.$.Kl = s)
    },
    enableBizAuthLogo: function () {
      this.U.kC = p;
      this.co && this.co.show()
    },
    disableBizAuthLogo: function () {
      this.U.kC = t;
      this.co && this.co.aa()
    },
    so: function () {
      this.U.so = p;
      this.bn || (this.bn = new BuildingLayer({
        g2: p
      }), this.Me(this.bn))
    },
    oV: function () {
      this.U.so = t;
      this.bn && (this.Tf(this.bn), this.bn = s, delete this.bn)
    },
    Hb: function () {
      return this.Nr && this.Nr instanceof P ? new P(this.Nr.width, this.Nr.height) : new P(this.Ya.clientWidth, this.Ya.clientHeight)
    },
    Ae: function (a) {
      a && a instanceof P ? (this.Nr = a, this.Ya.style.width = a.width + "px", this.Ya.style.height = a.height + "px") : this.Nr = s
    },
    Bb: x("pe"),
    ka: x("Va"),
    CU: function () {
      this.Sn()
    },
    tn: function (a) {
      var b = this.U.gc,
        c = this.U.pc,
        e = t,
        a = Math.round(a);
      a < b && (e = p, a = b);
      a > c && (e = p, a = c);
      return {
        zoom: a,
        AC: e
      }
    },
    Ta: x("Ya"),
    Rb: function (a, b) {
      b = b || this.ka();
      return this.Pc.Rb(a, b, this.fc, this.Hb(), this.Vb)
    },
    Ib: function (a, b) {
      b = b || this.ka();
      return this.Pc.Ib(a, b, this.fc, this.Hb(), this.Vb)
    },
    Ve: function (a, b) {
      if (a) {
        var c = this.Rb(new J(a.lng, a.lat), b);
        c.x -= this.offsetX;
        c.y -= this.offsetY;
        return c
      }
    },
    wM: function (a, b) {
      if (a) {
        var c = new R(a.x, a.y);
        c.x += this.offsetX;
        c.y += this.offsetY;
        return this.Ib(c, b)
      }
    },
    pointToPixelFor3D: function (a, b) {
      var c = map.Vb;
      this.Db === Sa && c && gb.vJ(a, this, b)
    },
    h4: function (a, b) {
      var c = map.Vb;
      this.Db === Sa && c && gb.uJ(a, this, b)
    },
    i4: function (a, b) {
      var c = this,
        e = map.Vb;
      c.Db === Sa && e && gb.vJ(a, c,
        function (a) {
          a.x -= c.offsetX;
          a.y -= c.offsetY;
          b && b(a)
        })
    },
    f4: function (a, b) {
      var c = map.Vb;
      this.Db === Sa && c && (a.x += this.offsetX, a.y += this.offsetY, gb.uJ(a, this, b))
    },
    te: function (a) {
      if (!this.hx()) return new hb;
      var b = a || {},
        a = b.margins || [0, 0, 0, 0],
        c = b.zoom || s,
        b = this.Ib({
          x: a[3],
          y: this.height - a[2]
        },
          c),
        a = this.Ib({
          x: this.width - a[1],
          y: a[0]
        },
          c);
      return new hb(b, a)
    },
    hx: function () {
      return !!this.loaded
    },
    SQ: function (a, b) {
      for (var c = this.va(), e = b.margins || [10, 10, 10, 10], f = b.zoomFactor || 0, g = e[1] + e[3], e = e[0] + e[2], i = c.aj(), k = c = c.Xh(); k >= i; k--) {
        var m = this.va().dc(k);
        if (a.XE().lng / m < this.width - g && a.XE().lat / m < this.height - e) break
      }
      k += f;
      k < i && (k = i);
      k > c && (k = c);
      return k
    },
    ys: function (a, b) {
      var c = {
        center: this.Bb(),
        zoom: this.ka()
      };
      if (!a || !a instanceof hb && 0 === a.length || a instanceof hb && a.lj()) return c;
      var e = [];
      a instanceof hb ? (e.push(a.Lf()), e.push(a.Se())) : e = a.slice(0);
      for (var b = b || {},
        f = [], g = 0, i = e.length; g < i; g++) f.push(this.Pc.bi(e[g], this.Vb));
      e = new hb;
      for (g = f.length - 1; 0 <= g; g--) e.extend(f[g]);
      if (e.lj()) return c;
      c = e.Bb();
      f = this.SQ(e, b);
      b.margins && (e = b.margins, g = (e[1] - e[3]) / 2, e = (e[0] - e[2]) / 2, i = this.va().dc(f), b.offset && (g = b.offset.width, e = b.offset.height), c.lng += i * g, c.lat += i * e);
      c = this.Pc.eh(c, this.Vb);
      return {
        center: c,
        zoom: f
      }
    },
    mh: function (a, b) {
      var c;
      c = a && a.center ? a : this.ys(a, b);
      var b = b || {},
        e = b.delay || 200;
      if (c.zoom === this.Va && b.enableAnimation !== t) {
        var f = this;
        setTimeout(function () {
          f.ji(c.center, {
            duration: 210
          })
        },
          e)
      } else this.Ed(c.center, c.zoom)
    },
    Mf: x("Xd"),
    $g: function () {
      return this.$.rb && this.$.rb.Za() ? this.$.rb : s
    },
    getDistance: function (a, b) {
      if (a && b) {
        if (a.oc(b)) return 0;
        var c = 0,
          c = S.Do(a, b);
        if (c === s || c === l) c = 0;
        return c
      }
    },
    Ow: function () {
      var a = [],
        b = this.Ba,
        c = this.Ce;
      if (b) for (var e in b) b[e] instanceof ib && a.push(b[e]);
      if (c) {
        e = 0;
        for (b = c.length; e < b; e++) a.push(c[e])
      }
      return a
    },
    va: x("Db"),
    fX: x("Cd"),
    ju: function () {
      for (var a = this.$.kE; a < D.Yq.length; a++) D.Yq[a](this);
      this.$.kE = a
    },
    yE: function (a) {
      this.Vb = Sa.ik(a);
      this.bw = Sa.qK(this.Vb);
      this.Db === Sa && this.Pc instanceof jb && (this.Pc.Ti = this.Vb)
    },
    setDefaultCursor: function (a) {
      this.U.yc = a;
      this.platform && (this.platform.style.cursor = this.U.yc)
    },
    getDefaultCursor: function () {
      return this.U.yc
    },
    setDraggingCursor: function (a) {
      this.U.Gd = a
    },
    getDraggingCursor: function () {
      return this.U.Gd
    },
    $w: function () {
      return this.U.OV && 1.5 <= this.U.devicePixelRatio
    },
    fB: function (a, b) {
      b ? this.Ah[b] || (this.Ah[b] = {}) : b = "custom";
      a.tag = b;
      a instanceof kb && (this.Ah[b][a.ea] = a, a.xa(this));
      var c = this;
      K.load("hotspot",
        function () {
          c.ju()
        },
        p)
    },
    dZ: function (a, b) {
      b || (b = "custom");
      this.Ah[b][a.ea] && delete this.Ah[b][a.ea]
    },
    ew: function (a) {
      a || (a = "custom");
      this.Ah[a] = {}
    },
    uu: function () {
      var a = this.Db.aj(),
        b = this.Db.Xh(),
        c = this.U;
      c.gc = c.YN || a;
      c.pc = c.XN || b;
      c.gc < a && (c.gc = a);
      c.pc > b && (c.pc = b)
    },
    setMinZoom: function (a) {
      a = Math.round(a);
      a > this.U.pc && (a = this.U.pc);
      this.U.YN = a;
      this.AI()
    },
    setMaxZoom: function (a) {
      a = Math.round(a);
      a < this.U.gc && (a = this.U.gc);
      this.U.XN = a;
      this.AI()
    },
    AI: function () {
      this.uu();
      var a = this.U;
      this.Va < a.gc ? this.Qc(a.gc) : this.Va > a.pc && this.Qc(a.pc);
      var b = new Q("onzoomspanchange");
      b.gc = a.gc;
      b.pc = a.pc;
      this.dispatchEvent(b)
    },
    Y2: x("aB"),
    getKey: function () {
      return qa
    },
    IZ: function (a) {
      function b(a) {
        c.e_ = a;
        // var b = D.nd + "custom/v2/mapstyle?ak=" + qa + "&callback=cb&",
        //   b = b + "is_all=true&is_new=1&" + ("styles=" + encodeURIComponent(c.PE(a, e)));
        if ("undefined" != typeof tilesReturnObj) {
          var b = tilesReturnObj.getMapInitStyleApi + "?ak=" + qa + "&cbakc=cb&styles=" + encodeURIComponent(c.PE(a, e));
        } else {
          var b = D.nd + "custom/v2/mapstyle?ak=" + qa + "&callback=cb&",
            b = b + "is_all=true&is_new=1&" + ("styles=" + encodeURIComponent(c.PE(a, e)));
        }
        pa(b)
      }
      var c = this;
      D.Sp("cus.fire", "count", "z_setmapstylev2count");
      this.jN(t);
      this.addEventListener("hidecopyright",
        function () {
          c.bk.aa();
          c.U.no = !!a.customEditor;
          c.U.no === t && c.xE(new P(1, 1))
        });
      c.bk && c.bk.aa();
      this.U.no = !!a.customEditor;
      this.U.O4 = !!a.sharing;
      this.U.u4 = !!a.preview;
      this.U.no === t && this.xE(new P(1, 1));
      K.load("hotspot",
        function () {
          c.ju()
        },
        p);
      window.qh = {};
      window.y5 = [];
      window.Wt = [];
      window.La = {};
      var e = this.ka(),
        f = {};
      z.extend(f, a);
      window.cb = function (a) {
        if (0 === a.status) {
          3 === a.data.style.length ? (window.bmap_baseFs || (window.bmap_baseFs = a.data.style), window.Mp = a.data.style[2]) : window.Mp = a.data.style;
          a = window.bmap_baseFs;
          if (z.km(window.qh)) window.l0 = a,
            c.cF(e);
          else {
            c.UN(window.Mp, e);
            c.cF(e);
            var a = c.vU(window.qh, e),
              b;
            for (b in a) {
              var g = {};
              z.extend(g, f);
              c.PW(b, g)
            }
          }
          c.MX()
        }
      };
      if (a.styleId) {
        var g = "jsapi";
        a.sharing ? g = "sharing" : a.preview && (g = "preview");
        this.DW(a.styleId, g, b)
      } else b(a.styleJson);
      window.iconSetInfo_high || pa(D.url.proto + D.url.domain.TILE_ONLINE_URLS[0] + "/sty/icons_na2x.js?udt=20190108&v=001&from=jsapi")
    },
    DW: function (a, b, c) {
      var e = this,
        f = (1E5 * Math.random()).toFixed(0);
      window["_cbk_si_phpui" + f] = function (a) {
        var b = [];
        a.result && (0 === a.result.error && a.content && 0 === a.content.status) && (b = e.Cx(a.content.data.json));
        c && c(b)
      };
      window["_cbk_si_api" + f] = function (a) {
        var b = [];
        0 === a.status && (b = a.info ? e.Cx(a.info.json) : e.Cx(a.data.json));
        c && c(b)
      };
      var g = "/apiconsole/custommap/";
      switch (b) {
        case "jsapi":
          g = D.nd + "?qt=custom_map&v=3.0";
          g += "&style_id=" + a + "&type=publish&ak=" + qa;
          g += "&callback=_cbk_si_phpui" + f;
          break;
        case "sharing":
          g = g + "getSharingJson" + ("?styleid=" + a + "&type=edit") + ("&ck=_cbk_si_api" + f);
          break;
        case "preview":
          g = g + "getJson" + ("?styleid=" + a + "&type=edit") + ("&ck=_cbk_si_api" + f)
      }
      pa(g)
    },
    iV: function () {
      Array.prototype.map || (Array.prototype.map = function (a, b) {
        var c, e, f;
        this == s && aa(new TypeError(" this is null or not defined"));
        var g = Object(this),
          i = g.length >>> 0;
        "[object Function]" != Object.prototype.toString.call(a) && aa(new TypeError(a + " is not a function"));
        b && (c = b);
        e = Array(i);
        for (f = 0; f < i;) {
          var k;
          f in g && (k = g[f], k = a.call(c, k, f, g), e[f] = k);
          f++
        }
        return e
      })
    },
    Cx: function (a) {
      if (a === s || "" === a) return [];
      this.iV();
      var b = {
        t: "featureType",
        e: "elementType",
        v: "visibility",
        c: "color",
        l: "lightness",
        s: "saturation",
        w: "weight",
        z: "level",
        h: "hue",
        f: "fontsize",
        zri: "curZoomRegionId",
        zr: "curZoomRegion"
      },
        c = {
          all: "all",
          g: "geometry",
          "g.f": "geometry.fill",
          "g.s": "geometry.stroke",
          l: "labels",
          "l.t.f": "labels.text.fill",
          "l.t.s": "labels.text.stroke",
          "l.t": "labels.text",
          "l.i": "labels.icon"
        };
      return a.split(",").map(function (a) {
        var a = a.split("|").map(function (a) {
          var e = b[a.split(":")[0]],
            a = c[a.split(":")[1]] ? c[a.split(":")[1]] : a.split(":")[1];
          switch (a) {
            case "poi":
              a = "poilabel";
              break;
            case "districtlabel":
              a = "districtlabel"
          }
          var f = {};
          f[e] = a;
          return f
        }),
          f = a[0],
          g = 1;
        a[1].elementType && (g = 2, z.extend(f, a[1]));
        for (var i = {}; g < a.length; g++) z.extend(i, a[g]);
        return z.extend(f, {
          stylers: i
        })
      })
    },
    kX: function () {
      return this.oh.Hg
    },
    PW: function (a, b) {
      var c = this,
        e = (1E5 * Math.random()).toFixed(0);
      window["_cbk" + e] = function (b) {
        b = 3 === b.data.style.length ? b.data.style[2] : b.data.style;
        c.UN(b, a);
        c.cF(a);
        b = new Q("onzoomfeatureload" + a);
        c.dispatchEvent(b);
        delete window["_cbk" + e]
      };
      // var f = D.nd + "custom/v2/mapstyle?ak=" + qa + "&callback=_cbk" + e + "&",
      // f = f + "is_all=true&is_new=1&";
      // b.styleJson ? f += "styles=" + encodeURIComponent(this.PE(b.styleJson, parseInt(a, 10))) : b.styleId && (f += "styles=" + encodeURIComponent(c.PE(c.e_, parseInt(a, 10))));
      if ("undefined" != typeof tilesReturnObj) {
        var f = tilesReturnObj.getMapInitStyleApi + "?ak=" + qa + "&cbakc=_cbk&styles=" + encodeURIComponent(this.PE(b.styleJson, parseInt(a, 10)));
      } else {
        var f = D.nd + "custom/v2/mapstyle?ak=" + qa + "&callback=_cbk" + e + "&",
          f = f + "is_all=true&is_new=1&";
        b.styleJson ? f += "styles=" + encodeURIComponent(this.PE(b.styleJson, parseInt(a, 10))) : b.styleId && (f += "styles=" + encodeURIComponent(c.PE(c.e_, parseInt(a, 10))));
      }
      pa(f)
    },
    xE: function (a, b) {
      var c = new Q("oncopyrightoffsetchange", {
        QD: a,
        XU: b
      });
      this.U.zJ = b;
      this.dispatchEvent(c)
    },
    nt: function (a) {
      var b = this;
      window.MPC_Mgr && window.MPC_Mgr[b.ea] && window.MPC_Mgr[b.ea].close();
      b.U.qC = t;
      D.Sp("cus.fire", "count", "z_setmapstylecount");
      if (a) {
        b = this;
        a.styleJson && (a.styleStr = b.f_(a.styleJson));
        I() && z.fa.Ox ? setTimeout(function () {
          b.U.we = a;
          b.dispatchEvent(new Q("onsetcustomstyles", a))
        },
          50) : (this.U.we = a, this.dispatchEvent(new Q("onsetcustomstyles", a)), this.iL(b.U.we.geotableId));
        var c = {
          style: a.style
        };
        a.features && 0 < a.features.length && (c.features = p);
        a.styleJson && 0 < a.styleJson.length && (c.styleJson = p);
        Ta(5050, c);
        a.style && (c = b.U.DB[a.style] ? b.U.DB[a.style].backColor : b.U.DB.normal.backColor) && (this.Ta().style.backgroundColor = c)
      }
    },
    FX: function (a) {
      this.controls || (this.controls = {
        navigationControl: new lb,
        scaleControl: new mb,
        overviewMapControl: new nb,
        mapTypeControl: new ob
      });
      var b = this,
        c;
      for (c in this.controls) b.NM(b.controls[c]);
      a = a || [];
      z.lc.Nb(a,
        function (a) {
          b.vr(b.controls[a])
        })
    },
    iL: function (a) {
      a ? this.Lr && this.Lr.xf === a || (this.Tf(this.Lr), this.Lr = new pb({
        geotableId: a
      }), this.Me(this.Lr)) : this.Tf(this.Lr)
    },
    Od: function () {
      var a = this.ka() >= this.U.fF && this.va() === Pa && 18 >= this.ka(),
        b = t;
      try {
        document.createElement("canvas").getContext("2d"),
          b = p
      } catch (c) {
        b = t
      }
      return a && b
    },
    getCurrentCity: function () {
      return {
        name: this.Tg,
        code: this.yr
      }
    },
    ss: function () {
      this.W.zn();
      return this.W
    },
    JX: function (a) {
      Pa.setMaxZoom(a.maxZoom || 19);
      var b = new Q("oninitindoorlayer");
      b.Te = a;
      this.dispatchEvent(b);
      this.U.Xi = t
    },
    MX: function (a) {
      if (this.U.Xi) {
        var b = new Q("onupdatestyles");
        this.dispatchEvent(b)
      } else b = new Q("oninitindoorlayer"),
        b.Te = a,
        this.dispatchEvent(b),
        this.U.Xi = p,
        this.U.vo = p
    },
    jN: function (a) {
      this.U.$D = a;
      this.oh.hc.parentElement.style.display = a ? "block" : "none"
    },
    setPanorama: function (a) {
      this.W = a;
      this.W.BE(this)
    },
    PE: function (a, b) {
      var c = {
        featureType: "t",
        elementType: "e",
        visibility: "v",
        color: "c",
        lightness: "l",
        saturation: "s",
        weight: "w",
        level: "z",
        hue: "h",
        fontsize: "f"
      },
        e = {
          all: "all",
          geometry: "g",
          "geometry.fill": "g.f",
          "geometry.stroke": "g.s",
          labels: "l",
          "labels.text.fill": "l.t.f",
          "labels.text.stroke": "l.t.s",
          "labels.text": "l.t",
          "labels.icon": "l.i"
        },
        f = [];
      window.La[b] = {};
      for (var g = 0,
        i; i = a[g]; g++) if (!this.VX(i) && (window.qh = this.oX(i, window.qh), this.WX(i, b))) {
          if (("land" === i.featureType || "all" === i.featureType || "background" === i.featureType) && "string" === typeof i.elementType && ("geometry" === i.elementType || "geometry.fill" === i.elementType || "all" === i.elementType) && i.stylers) if (i.stylers.color && (window.La[b].bmapLandColor = i.stylers.color, window.La[b].AL = p, window.bmapLandColor = i.stylers.color), i.stylers.visibility && "off" === i.stylers.visibility) window.La[b].bmapLandColor = "#00000000",
            window.La[b].AL = p,
            window.bmapLandColor = "#00000000";
          if ("railway" === i.featureType && "string" === typeof i.elementType && i.stylers) {
            if (i.stylers.color && ("geometry" === i.elementType && (window.bmapRailwayFillColor = i.stylers.color, window.bmapRailwayStrokeColor = i.stylers.color, window.La[b].bmapRailwayFillColor = i.stylers.color, window.La[b].bmapRailwayStrokeColor = i.stylers.color, window.La[b].JM = p, window.La[b].KM = p), "geometry.fill" === i.elementType && (window.bmapRailwayFillColor = i.stylers.color, window.La[b].bmapRailwayFillColor = i.stylers.color, window.La[b].JM = p), "geometry.stroke" === i.elementType)) window.bmapRailwayStrokeColor = i.stylers.color,
              window.La[b].bmapRailwayStrokeColor = i.stylers.color,
              window.La[b].KM = p;
            i.stylers.visibility && (window.bmapRailwayVisibility = i.stylers.visibility, window.La[b].bmapRailwayVisibility = i.stylers.visibility, window.La[b].aZ = p)
          }
          "roadarrow" === i.featureType && ("labels.icon" === i.elementType && i.stylers) && (window.bmapRoadarrowVisibility = i.stylers.visibility, window.La[b].bmapRoadarrowVisibility = i.stylers.visibility, window.La[b].kZ = p);
          var k = {};
          z.extend(k, i);
          i = k.stylers;
          delete k.stylers;
          z.extend(k, i);
          i = [];
          for (var m in c) if (k[m] && !this.RX(m)) if ("elementType" === m) i.push(c[m] + ":" + e[k[m]]);
          else {
            switch (k[m]) {
              case "poilabel":
                k[m] = "poi";
                break;
              case "districtlabel":
                k[m] = "label"
            }
            i.push(c[m] + ":" + k[m])
          }
          2 < i.length && f.push(i.join("|"))
        } !window.La[b].AL && window.La[b].bmapLandColor && delete window.La[b].bmapLandColor; !window.La[b].JM && window.La[b].bmapRailwayFillColor && delete window.La[b].bmapRailwayFillColor; !window.La[b].KM && window.La[b].bmapRailwayStrokeColor && delete window.La[b].bmapRailwayStrokeColor; !window.La[b].aZ && window.La[b].bmapRailwayVisibility && delete window.La[b].bmapRailwayVisibility; !window.La[b].kZ && window.La[b].bmapRoadarrowVisibility && delete window.La[b].bmapRoadarrowVisibility;
      return f.join(",")
    },
    f_: function (a) {
      for (var b = {
        featureType: "t",
        elementType: "e",
        visibility: "v",
        color: "c",
        lightness: "l",
        saturation: "s",
        weight: "w",
        zoom: "z",
        hue: "h"
      },
        c = {
          all: "all",
          geometry: "g",
          "geometry.fill": "g.f",
          "geometry.stroke": "g.s",
          labels: "l",
          "labels.text.fill": "l.t.f",
          "labels.text.stroke": "l.t.s",
          "lables.text": "l.t",
          "labels.icon": "l.i"
        },
        e = [], f = 0, g; g = a[f]; f++) {
        var i = g.stylers;
        delete g.stylers;
        z.extend(g, i);
        var i = [],
          k;
        for (k in b) if (g[k]) if ("elementType" === k) i.push(b[k] + ":" + c[g[k]]);
        else {
          switch (g[k]) {
            case "poilabel":
              g[k] = "poi";
              break;
            case "districtlabel":
              g[k] = "label"
          }
          i.push(b[k] + ":" + g[k])
        }
        2 < i.length && e.push(i.join("|"))
      }
      return e.join(",")
    },
    VX: function (a) {
      var b = {};
      z.extend(b, a.stylers);
      delete b.curZoomRegionId;
      delete b.curZoomRegion;
      delete b.level;
      return z.km(b) ? p : t
    },
    WX: function (a, b) {
      var c = a.stylers.level;
      return c === l ? p : c === b + "" ? p : t
    },
    RX: function (a) {
      return {
        curZoomRegionId: p,
        curZoomRegion: p
      }[a] ? p : t
    },
    oX: function (a, b) {
      var c = a.stylers.level,
        e = {};
      z.extend(e, b);
      c !== l && (e[parseInt(c, 10)] = p);
      return e
    },
    UN: function (a, b) {
      window.Wt[b] = a;
      if (!window.qh[b]) for (var c = this.Db.aj(), e = this.Db.Xh(); c <= e; c++) window.qh[c] || (window.Wt[c] = a)
    },
    cF: function (a) {
      if (!window.qh[a]) for (var b = this.Db.aj(), c = this.Db.Xh(); b <= c; b++) window.qh[b] || (window.La[b] || (window.La[b] = {}), window.La[b].bmapLandColor = window.La[a].bmapLandColor, window.La[b].bmapRailwayFillColor = window.La[a].bmapRailwayFillColor, window.La[b].bmapRailwayStrokeColor = window.La[a].bmapRailwayStrokeColor)
    },
    vU: function (a, b) {
      var c = {};
      z.extend(c, a);
      if (c[b]) {
        for (var e = this.Db.aj(), f = this.Db.Xh(); e <= f; e++) if (!c[e]) {
          c[e] = p;
          break
        }
        delete c[b]
      }
      return c
    },
    u3: function (a) {
      return a.Is || "0" === a.uid ? t : p
    },
    GU: function () {
      delete this.xi.TY
    },
    G1: function () {
      this.xi = {}
    },
    Vn: function (a, b, c) {
      if (!this.U.no) return t;
      a = a || "sp" + this.$.R4++;
      if (b && 0 !== b.length) return c = c || {},
        this.xi[a] = this.xi[a] || {
          polygon: [],
          polyline: []
        },
        this.xi = this.xi || {},
        this.xi[a][c.type].push({
          KE: b,
          Ub: c.Ub,
          type: c.type,
          style: c.style
        }),
        a
    }
  });
  function Ta(a, b) {
    if (a) {
      var b = b || {},
        c = "",
        e;
      for (e in b) c = c + "&" + e + "=" + encodeURIComponent(b[e]);
      var f = function (a) {
        a && (qb = p, setTimeout(function () {
          rb.src = D.nd + "images/blank.gif?" + a.src
        },
          50))
      },
        g = function () {
          var a = sb.shift();
          a && f(a)
        };
      e = (1E8 * Math.random()).toFixed(0);
      qb ? sb.push({
        src: "product=jsapi&sub_product=jsapi&v=" + D.version + "&sub_product_v=" + D.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c
      }) : f({
        src: "product=jsapi&sub_product=jsapi&v=" + D.version + "&sub_product_v=" + D.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c
      });
      tb || (z.V(rb, "load",
        function () {
          qb = t;
          g()
        }), z.V(rb, "error",
          function () {
            qb = t;
            g()
          }), tb = p)
    }
  }
  var qb, tb, sb = [],
    rb = new Image;
  Ta(5E3, {
    device_pixel_ratio: window.devicePixelRatio,
    platform: navigator.platform
  });
  D.cL = {
    TILE_BASE_URLS: ["gss0.bdstatic.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu"],
    TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
    TIlE_PERSPECT_URLS: ["gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],
    geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
    TILES_YUN_HOST: ["gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],
    traffic: "gsp0.baidu.com/7_AZsjOpB1gCo2Kml5_Y_DAcsMJiwa",
    iw_pano: "gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
    message: "gsp0.baidu.com/7vo0bSba2gU2pMbgoY3K",
    baidumap: "gsp0.baidu.com/80MWsjip0QIZ8tyhnq",
    wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
    pano: ["gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_"],
    main_domain_nocdn: {
      baidu: "gsp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3",
      other: "api.map.baidu.com"
    },
    main_domain_cdn: {
      baidu: ["gss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "gss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv", "gss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv"],
      other: ["api.map.baidu.com"],
      webmap: ["gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv"]
    },
    map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
    vector_traffic: "gss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a"
  };
  D.wX = {
    TILE_BASE_URLS: ["shangetu0.map.bdimg.com", "shangetu1.map.bdimg.com", "shangetu2.map.bdimg.com", "shangetu3.map.bdimg.com", "shangetu4.map.bdimg.com"],
    TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
    TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
    geolocControl: "loc.map.baidu.com",
    TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
    traffic: "its.map.baidu.com:8002",
    iw_pano: "pcsv0.map.bdimg.com",
    message: "j.map.baidu.com",
    baidumap: "map.baidu.com",
    wuxian: "wuxian.baidu.com",
    pano: ["pcsv0.map.bdimg.com", "pcsv1.map.bdimg.com", "pcsv2.map.bdimg.com"],
    main_domain_nocdn: {
      baidu: "api.map.baidu.com"
    },
    main_domain_cdn: {
      baidu: ["api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com"],
      webmap: ["webmap0.map.bdimg.com"]
    },
    map_click: "mapclick.map.baidu.com",
    vector_traffic: "or.map.bdimg.com"
  };
  D.K_ = {
    "0": {
      proto: "http://",
      domain: D.wX
    },
    1: {
      proto: "https://",
      domain: D.cL
    },
    2: {
      proto: "https://",
      domain: D.cL
    }
  };
  window.BMAP_PROTOCOL && "https" === window.BMAP_PROTOCOL && (window.HOST_TYPE = 2);
  D.Qt = window.HOST_TYPE || "0";
  D.url = D.K_[D.Qt];
  D.Wo = D.url.proto + D.url.domain.baidumap + "/";
  D.nd = D.url.proto + ("2" == D.Qt ? D.url.domain.main_domain_nocdn.other : D.url.domain.main_domain_nocdn.baidu) + "/";
  D.oa = D.url.proto + ("2" == D.Qt ? D.url.domain.main_domain_cdn.other[0] : D.url.domain.main_domain_cdn.baidu[0]) + "/";
  // D.Ri = D.url.proto + D.url.domain.main_domain_cdn.webmap[0] + "/";
  D.Ri = "";
  D.Yh = function (a, b) {
    var c, e, b = b || "";
    switch (a) {
      case "main_domain_nocdn":
        c = D.nd + b;
        break;
      case "main_domain_cdn":
        c = D.oa + b;
        break;
      default:
        e = D.url.domain[a],
          "[object Array]" == Object.prototype.toString.call(e) ? (c = [], z.lc.Nb(e,
            function (a, e) {
              c[e] = D.url.proto + a + "/" + b
            })) : c = D.url.proto + D.url.domain[a] + "/" + b
    }
    return c
  };
  function ub(a) {
    var b = {
      duration: 1E3,
      Hc: 30,
      po: 0,
      $b: vb.JL,
      Zs: u()
    };
    this.Wf = [];
    if (a) for (var c in a) b[c] = a[c];
    this.m = b;
    if (Za(b.po)) {
      var e = this;
      setTimeout(function () {
        e.start()
      },
        b.po)
    } else b.po != wb && this.start()
  }
  var wb = "INFINITE";
  ub.prototype.start = function () {
    this.lu = eb();
    this.hz = this.lu + this.m.duration;
    xb(this)
  };
  ub.prototype.add = function (a) {
    this.Wf.push(a)
  };
  function xb(a) {
    var b = eb();
    b >= a.hz ? ($a(a.m.za) && a.m.za(a.m.$b(1)), $a(a.m.finish) && a.m.finish(), 0 < a.Wf.length && (b = a.Wf[0], b.Wf = [].concat(a.Wf.slice(1)), b.start())) : (a.Px = a.m.$b((b - a.lu) / a.m.duration), $a(a.m.za) && a.m.za(a.Px), a.RE || (a.rr = setTimeout(function () {
      xb(a)
    },
      1E3 / a.m.Hc)))
  }
  ub.prototype.stop = function (a) {
    this.RE = p;
    for (var b = 0; b < this.Wf.length; b++) this.Wf[b].stop(),
      this.Wf[b] = s;
    this.Wf.length = 0;
    this.rr && (clearTimeout(this.rr), this.rr = s);
    this.m.Zs(this.Px);
    a && (this.hz = this.lu, xb(this))
  };
  ub.prototype.cancel = ha(1);
  var vb = {
    JL: function (a) {
      return a
    },
    reverse: function (a) {
      return 1 - a
    },
    iC: function (a) {
      return a * a
    },
    gC: function (a) {
      return Math.pow(a, 3)
    },
    Yr: function (a) {
      return - (a * (a - 2))
    },
    VJ: function (a) {
      return Math.pow(a - 1, 3) + 1
    },
    hC: function (a) {
      return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
    },
    W1: function (a) {
      return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
    },
    X1: function (a) {
      return (1 - Math.cos(Math.PI * a)) / 2
    }
  };
  vb["ease-in"] = vb.iC;
  vb["ease-out"] = vb.Yr;
  var H = {
    pF: 34,
    qF: 21,
    rF: new P(21, 32),
    nO: new P(10, 32),
    mO: new P(24, 36),
    lO: new P(12, 36),
    nF: new P(13, 1),
    sa: D.oa + "images/",
    o3: "http://api0.map.bdimg.com/images/",
    oF: D.oa + "images/markers_new.png",
    jO: 24,
    kO: 73,
    wB: {
      "\u5317\u4eac": {
        Fx: "bj",
        o: new J(116.403874, 39.914889)
      },
      "\u4e0a\u6d77": {
        Fx: "sh",
        o: new J(121.487899, 31.249162)
      },
      "\u6df1\u5733": {
        Fx: "sz",
        o: new J(114.025974, 22.546054)
      },
      "\u5e7f\u5dde": {
        Fx: "gz",
        o: new J(113.30765, 23.120049)
      }
    },
    fontFamily: "arial,sans-serif"
  };
  z.fa.Qe ? (z.extend(H, {
    HJ: "url(" + H.sa + "ruler.cur),crosshair",
    yc: "-moz-grab",
    Gd: "-moz-grabbing"
  }), z.platform.vL && (H.fontFamily = "arial,simsun,sans-serif")) : z.fa.aw || z.fa.Ox ? z.extend(H, {
    HJ: "url(" + H.sa + "ruler.cur) 2 6,crosshair",
    yc: "url(" + H.sa + "openhand.cur) 8 8,default",
    Gd: "url(" + H.sa + "closedhand.cur) 8 8,move"
  }) : z.extend(H, {
    HJ: "url(" + H.sa + "ruler.cur),crosshair",
    yc: "url(" + H.sa + "openhand.cur),default",
    Gd: "url(" + H.sa + "closedhand.cur),move"
  });
  function yb(a, b) {
    var c = a.style;
    c.left = b[0] + "px";
    c.top = b[1] + "px"
  }
  function zb(a) {
    0 < z.fa.ma ? a.unselectable = "on" : a.style.MozUserSelect = "none"
  }
  function Ab(a) {
    return a && a.parentNode && 11 !== a.parentNode.nodeType
  }
  function Bb(a, b) {
    z.R.ex(a, "beforeEnd", b);
    return a.lastChild
  }
  function Cb(a) {
    for (var b = {
      left: 0,
      top: 0
    }; a && a.offsetParent;) b.left += a.offsetLeft,
      b.top += a.offsetTop,
      a = a.offsetParent;
    return b
  }
  function na(a) {
    a = window.event || a;
    a.stopPropagation ? a.stopPropagation() : a.cancelBubble = p
  }
  function Db(a) {
    a = window.event || a;
    a.preventDefault ? a.preventDefault() : a.returnValue = t;
    return t
  }
  function oa(a) {
    na(a);
    return Db(a)
  }
  function Eb() {
    var a = document.documentElement,
      b = document.body;
    return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
  }
  function Fb(a, b) {
    if (a && b) return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
  }
  function Gb(a, b) {
    var c = [],
      b = b ||
        function (a) {
          return a
        },
      e;
    for (e in a) c.push(e + "=" + b(a[e]));
    return c.join("&")
  }
  function O(a, b, c) {
    var e = document.createElement(a);
    c && (e = document.createElementNS(c, a));
    return z.R.wE(e, b || {})
  }
  function Ya(a) {
    if (a.currentStyle) return a.currentStyle;
    if (a.ownerDocument && a.ownerDocument.defaultView) return a.ownerDocument.defaultView.getComputedStyle(a, s)
  }
  function $a(a) {
    return "function" === typeof a
  }
  function Za(a) {
    return "number" === typeof a
  }
  function bb(a) {
    return "string" == typeof a
  }
  function Hb(a) {
    return "undefined" != typeof a
  }
  function Ib(a) {
    return "object" == typeof a
  }
  var Jb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  function Kb(a) {
    for (var b = "",
      c = 0; c < a.length; c++) {
      var e = a.charCodeAt(c) << 1,
        f = e = e.toString(2);
      8 > e.length && (f = "00000000" + e, f = f.substr(e.length, 8));
      b += f
    }
    a = 5 - b.length % 5;
    e = [];
    for (c = 0; c < a; c++) e[c] = "0";
    b = e.join("") + b;
    f = [];
    for (c = 0; c < b.length / 5; c++) e = b.substr(5 * c, 5),
      f.push(String.fromCharCode(parseInt(e, 2) + 50));
    return f.join("") + a.toString()
  }
  function Lb(a) {
    var b = "",
      c, e, f = "",
      g, i = "",
      k = 0;
    g = /[^A-Za-z0-9\+\/\=]/g;
    if (!a || g.exec(a)) return a;
    a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    do c = Jb.indexOf(a.charAt(k++)),
      e = Jb.indexOf(a.charAt(k++)),
      g = Jb.indexOf(a.charAt(k++)),
      i = Jb.indexOf(a.charAt(k++)),
      c = c << 2 | e >> 4,
      e = (e & 15) << 4 | g >> 2,
      f = (g & 3) << 6 | i,
      b += String.fromCharCode(c),
      64 != g && (b += String.fromCharCode(e)),
      64 != i && (b += String.fromCharCode(f));
    while (k < a.length);
    return b
  }
  var Q = z.lang.bu;
  function I() {
    return !(!z.platform.BD && !z.platform.UX && !z.platform.jj)
  }
  function Xa() {
    return !(!z.platform.vL && !z.platform.nL && !z.platform.bY)
  }
  function eb() {
    return (new Date).getTime()
  }
  function Mb() {
    var a = document.body.appendChild(O("div"));
    a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
    var b = a.firstChild;
    if (!b.style) return t;
    b.style.behavior = "url(#default#VML)";
    b = b ? "object" === typeof b.adj : p;
    a.parentNode.removeChild(a);
    return b
  }
  function Nb() {
    return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
  }
  function Ob() {
    return !!O("canvas").getContext
  }
  function Pb(a) {
    return a * Math.PI / 180
  }
  D.hY = function () {
    var a = p,
      b = p,
      c = p,
      e = p,
      f = 0,
      g = 0,
      i = 0,
      k = 0;
    return {
      OP: function () {
        f += 1;
        a && (a = t, setTimeout(function () {
          Ta(5054, {
            pic: f
          });
          a = p;
          f = 0
        },
          1E4))
      },
      B0: function () {
        g += 1;
        b && (b = t, setTimeout(function () {
          Ta(5055, {
            move: g
          });
          b = p;
          g = 0
        },
          1E4))
      },
      D0: function () {
        i += 1;
        c && (c = t, setTimeout(function () {
          Ta(5056, {
            zoom: i
          });
          c = p;
          i = 0
        },
          1E4))
      },
      C0: function (a) {
        k += a;
        e && (e = t, setTimeout(function () {
          Ta(5057, {
            tile: k
          });
          e = p;
          k = 0
        },
          5E3))
      }
    }
  }();
  D.Hp = {
    EF: "#83a1ff",
    Jp: "#808080"
  };
  function Qb(a, b, c) {
    b.TD || (b.TD = [], b.handle = {});
    b.TD.push({
      filter: c,
      es: a
    });
    b.addEventListener || (b.addEventListener = function (a, c) {
      b.attachEvent("on" + a, c)
    });
    b.handle.click || (b.addEventListener("click",
      function (a) {
        for (var c = a.target || a.srcElement; c != b;) {
          Rb(b.TD,
            function (b, i) {
              RegExp(i.filter).test(c.getAttribute("filter")) && i.es.call(c, a, c.getAttribute("filter"))
            });
          c = c.parentNode
        }
      },
      t), b.handle.click = p)
  }
  function Rb(a, b) {
    for (var c = 0,
      e = a.length; c < e; c++) b(c, a[c])
  }
  void
    function (a, b, c) {
      void
        function (a, b, c) {
          function i(a) {
            if (!a.oo) {
              for (var c = p,
                e = [], g = a.gZ, k = 0; g && k < g.length; k++) {
                var m = g[k],
                  n = da[m] = da[m] || {};
                if (n.oo || n == a) e.push(n.Mc);
                else {
                  c = t;
                  if (!n.jV && (m = (va.get("alias") || {})[m] || m + ".js", !N[m])) {
                    N[m] = p;
                    var o = b.createElement("script"),
                      q = b.getElementsByTagName("script")[0];
                    o.async = p;
                    o.src = m;
                    q.parentNode.insertBefore(o, q)
                  }
                  n.iy = n.iy || {};
                  n.iy[a.name] = a
                }
              }
              if (c) {
                a.oo = p;
                a.CJ && (a.Mc = a.CJ.apply(a, e));
                for (var v in a.iy) i(a.iy[v])
              }
            }
          }
          function k(a) {
            return (a || new Date) - F
          }
          function m(a, b, c) {
            if (a) {
              "string" == typeof a && (c = b, b = a, a = L);
              try {
                a == L ? (M[b] = M[b] || [], M[b].unshift(c)) : a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c)
              } catch (e) { }
            }
          }
          function n(a, b, c) {
            if (a) {
              "string" == typeof a && (c = b, b = a, a = L);
              try {
                if (a == L) {
                  var e = M[b];
                  if (e) for (var f = e.length; f--;) e[f] === c && e.splice(f, 1)
                } else a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c)
              } catch (g) { }
            }
          }
          function o(a) {
            var b = M[a],
              c = 0;
            if (b) {
              for (var e = [], f = arguments, g = 1; g < f.length; g++) e.push(f[g]);
              for (g = b.length; g--;) b[g].apply(this, e) && c++;
              return c
            }
          }
          function q(a, b) {
            if (a && b) {
              var c = new Image(1, 1),
                e = [],
                f = "img_" + +new Date,
                g;
              for (g in b) b[g] && e.push(g + "=" + encodeURIComponent(b[g]));
              L[f] = c;
              c.onload = c.onerror = function () {
                L[f] = c = c.onload = c.onerror = s;
                delete L[f]
              };
              c.src = a + "?" + e.join("&")
            }
          }
          function v() {
            var a = arguments,
              b = a[0];
            if (this.BJ || /^(on|un|set|get|create)$/.test(b)) {
              for (var b = y.prototype[b], c = [], e = 1, f = a.length; e < f; e++) c.push(a[e]);
              "function" == typeof b && b.apply(this, c)
            } else this.aJ.push(a)
          }
          function w(a, b) {
            var c = {},
              e;
            for (e in a) a.hasOwnProperty(e) && (c[e] = a[e]);
            for (e in b) b.hasOwnProperty(e) && (c[e] = b[e]);
            return c
          }
          function y(a) {
            this.name = a;
            this.cs = {
              protocolParameter: {
                postUrl: s,
                protocolParameter: s
              }
            };
            this.aJ = [];
            this.alog = L
          }
          function A(a) {
            a = a || "default";
            if ("*" == a) {
              var a = [],
                b;
              for (b in T) a.push(T[b]);
              return a
            } (b = T[a]) || (b = T[a] = new y(a));
            return b
          }
          var B = c.alog;
          if (!B || !B.oo) {
            var C = b.all && a.attachEvent,
              F = B && B.KD || +new Date,
              E = a.G3 || (+ new Date).toString(36) + Math.random().toString(36).substr(2, 3),
              G = 0,
              N = {},
              L = function (a) {
                var b = arguments,
                  c, e, f, g;
                if ("define" == a || "require" == a) {
                  for (e = 1; e < b.length; e++) switch (typeof b[e]) {
                    case "string":
                      c = b[e];
                      break;
                    case "object":
                      f = b[e];
                      break;
                    case "function":
                      g = b[e]
                  }
                  "require" == a && (c && !f && (f = [c]), c = s);
                  c = !c ? "#" + G++ : c;
                  e = da[c] = da[c] || {};
                  e.oo || (e.name = c, e.gZ = f, e.CJ = g, "define" == a && (e.jV = p), i(e))
                } else "function" == typeof a ? a(L) : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/,
                  function (a, c, e) {
                    b[0] = e;
                    v.apply(L.aF(c), b)
                  })
              },
              M = {},
              T = {},
              da = {
                q1: {
                  name: "alog",
                  oo: p,
                  Mc: L
                }
              };
            y.prototype.start = y.prototype.create = function (a) {
              if (!this.BJ) {
                "object" == typeof a && this.set(a);
                this.BJ = new Date;
                for (this.ds("create", this); a = this.aJ.shift();) v.apply(this, a)
              }
            };
            y.prototype.send = function (a, b) {
              var c = w({
                ts: k().toString(36),
                t: a,
                sid: E
              },
                this.cs);
              if ("object" == typeof b) c = w(c, b);
              else {
                var e = arguments;
                switch (a) {
                  case "pageview":
                    e[1] && (c.page = e[1]);
                    e[2] && (c.title = e[2]);
                    break;
                  case "event":
                    e[1] && (c.eventCategory = e[1]);
                    e[2] && (c.eventAction = e[2]);
                    e[3] && (c.eventLabel = e[3]);
                    e[4] && (c.eventValue = e[4]);
                    break;
                  case "timing":
                    e[1] && (c.timingCategory = e[1]);
                    e[2] && (c.timingVar = e[2]);
                    e[3] && (c.timingValue = e[3]);
                    e[4] && (c.timingLabel = e[4]);
                    break;
                  case "exception":
                    e[1] && (c.exDescription = e[1]);
                    e[2] && (c.exFatal = e[2]);
                    break;
                  default:
                    return
                }
              }
              this.ds("send", c);
              var f;
              if (e = this.cs.protocolParameter) {
                var g = {};
                for (f in c) e[f] !== s && (g[e[f] || f] = c[f]);
                f = g
              } else f = c;
              q(this.cs.postUrl, f)
            };
            y.prototype.set = function (a, b) {
              if ("string" == typeof a) "protocolParameter" == a && (b = w({
                postUrl: s,
                protocolParameter: s
              },
                b)),
                this.cs[a] = b;
              else if ("object" == typeof a) for (var c in a) this.set(c, a[c])
            };
            y.prototype.get = function (a, b) {
              var c = this.cs[a];
              "function" == typeof b && b(c);
              return c
            };
            y.prototype.ds = function (a, b) {
              return L.ds(this.name + "." + a, b)
            };
            y.prototype.V = function (a, b) {
              L.V(this.name + "." + a, b)
            };
            y.prototype.dd = function (a, b) {
              L.dd(this.name + "." + a, b)
            };
            L.name = "alog";
            L.Ub = E;
            L.oo = p;
            L.timestamp = k;
            L.dd = n;
            L.V = m;
            L.ds = o;
            L.aF = A;
            L("init");
            var ba = y.prototype;
            U(ba, {
              start: ba.start,
              create: ba.create,
              send: ba.send,
              set: ba.set,
              get: ba.get,
              on: ba.V,
              un: ba.dd,
              fire: ba.ds
            });
            var va = A();
            va.set("protocolParameter", {
              p1: s
            });
            if (B) {
              ba = [].concat(B.xb || [], B.gt || []);
              B.xb = B.gt = s;
              for (var ya in L) L.hasOwnProperty(ya) && (B[ya] = L[ya]);
              L.xb = L.gt = {
                push: function (a) {
                  L.apply(L, a)
                }
              };
              for (B = 0; B < ba.length; B++) L.apply(L, ba[B])
            }
            c.alog = L;
            C && m(b, "mouseup",
              function (a) {
                a = a.target || a.srcElement;
                1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
              });
            var Ea = t;
            a.onerror = function (a, b, e, f) {
              var i = p; !b && /^script error/i.test(a) && (Ea ? i = t : Ea = p);
              i && c.alog("exception.send", "exception", {
                Vs: a,
                JD: b,
                Rs: e,
                Pl: f
              });
              return t
            };
            c.alog("exception.on", "catch",
              function (a) {
                c.alog("exception.send", "exception", {
                  Vs: a.Vs,
                  JD: a.path,
                  Rs: a.Rs,
                  method: a.method,
                  fK: "catch"
                })
              })
          }
        }(a, b, c);
      void
        function (a, b, c) {
          var i = "18_3";
          I() && (i = "18_4");
          var k = "http://static.tieba.baidu.com";
          "https:" === a.location.protocol && (k = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");
          var m = Math.random,
            k = k + "/tb/pms/img/st.gif",
            n = {
              kh: "0.1"
            },
            o = {
              kh: "0.1"
            },
            q = {
              kh: "0.1"
            },
            v = {
              kh: "0"
            };
          if (n && n.kh && m() < n.kh) {
            var w = c.alog.aF("monkey"),
              y,
              n = a.screen,
              A = b.referrer;
            w.set("ver", 5);
            w.set("pid", 241);
            n && w.set("px", n.width + "*" + n.height);
            w.set("ref", A);
            c.alog("monkey.on", "create",
              function () {
                y = c.alog.timestamp;
                w.set("protocolParameter", {
                  reports: s
                })
              });
            c.alog("monkey.on", "send",
              function (a) {
                "pageview" == a.t && (a.cmd = "open");
                a.now && (a.ts = y(a.now).toString(36), a.now = "")
              });
            c.alog("monkey.create", {
              page: i,
              pid: "241",
              p: "18",
              dv: 6,
              postUrl: k,
              reports: {
                refer: 1
              }
            });
            c.alog("monkey.send", "pageview", {
              now: +new Date
            })
          }
          if (o && o.kh && m() < o.kh) {
            var B = t;
            a.onerror = function (a, b, e, f) {
              var i = p; !b && /^script error/i.test(a) && (B ? i = t : B = p);
              i && c.alog("exception.send", "exception", {
                Vs: a,
                JD: b,
                Rs: e,
                Pl: f
              });
              return t
            };
            c.alog("exception.on", "catch",
              function (a) {
                c.alog("exception.send", "exception", {
                  Vs: a.Vs,
                  JD: a.path,
                  Rs: a.Rs,
                  method: a.method,
                  fK: "catch"
                })
              });
            c.alog("exception.create", {
              postUrl: k,
              dv: 7,
              page: i,
              pid: "170",
              p: "18"
            })
          }
          q && (q.kh && m() < q.kh) && (c.alog("cus.on", "time",
            function (a) {
              var b = {},
                e = t,
                f;
              if ("[object Object]" === a.toString()) {
                for (var i in a) "page" == i ? b.page = a[i] : (f = parseInt(a[i]), 0 < f && /^z_/.test(i) && (e = p, b[i] = f));
                e && c.alog("cus.send", "time", b)
              }
            }), c.alog("cus.on", "count",
              function (a) {
                var b = {},
                  e = t;
                "string" === typeof a && (a = [a]);
                if (a instanceof Array) for (var f = 0; f < a.length; f++) / ^z_ /.test(a[f]) ? (e = p, b[a[f]] = 1) : /^page:/.test(a[f]) && (b.page = a[f].substring(5));
                e && c.alog("cus.send", "count", b)
              }), c.alog("cus.create", {
                dv: 3,
                postUrl: k,
                page: i,
                p: "18"
              }));
          if (v && v.kh && m() < v.kh) {
            var C = ["Moz", "O", "ms", "Webkit"],
              F = ["-webkit-", "-moz-", "-o-", "-ms-"],
              E = function () {
                return typeof b.createElement !== "function" ? b.createElement(arguments[0]) : b.createElement.apply(b, arguments)
              },
              G = E("dpFeatureTest").style,
              N = function (a) {
                return L(a, l, l)
              },
              L = function (a, b, c) {
                var e = a.charAt(0).toUpperCase() + a.slice(1),
                  f = (a + " " + C.join(e + " ") + e).split(" ");
                if (typeof b === "string" || typeof b === "undefined") return M(f, b);
                f = (a + " " + C.join(e + " ") + e).split(" ");
                a: {
                  var a = f,
                    g;
                  for (g in a) if (a[g] in b) {
                    if (c === t) {
                      b = a[g];
                      break a
                    }
                    g = b[a[g]];
                    b = typeof g === "function" ? fnBind(g, c || b) : g;
                    break a
                  }
                  b = t
                }
                return b
              },
              M = function (a, b) {
                var c, e, f;
                e = a.length;
                for (c = 0; c < e; c++) {
                  f = a[c]; ~("" + f).indexOf("-") && (f = T(f));
                  if (G[f] !== l) return b == "pfx" ? f : p
                }
                return t
              },
              T = function (a) {
                return a.replace(/([a-z])-([a-z])/g,
                  function (a, b, c) {
                    return b + c.toUpperCase()
                  }).replace(/^-/, "")
              },
              da = function (a, b, c) {
                if (a.indexOf("@") === 0) return atRule(a);
                a.indexOf("-") != -1 && (a = T(a));
                return !b ? L(a, "pfx") : L(a, b, c)
              },
              ba = function () {
                var a = E("canvas");
                return !(!a.getContext || !a.getContext("2d"))
              },
              va = function () {
                var a = E("div");
                return "draggable" in a || "ondragstart" in a && "ondrop" in a
              },
              ya = function () {
                try {
                  localStorage.setItem("localStorage", "localStorage");
                  localStorage.removeItem("localStorage");
                  return p
                } catch (a) {
                  return t
                }
              },
              Ea = function () {
                return "content" in b.createElement("template")
              },
              ra = function () {
                return "createShadowRoot" in b.createElement("a")
              },
              Ua = function () {
                return "registerElement" in b
              },
              re = function () {
                return "import" in b.createElement("link")
              },
              Oc = function () {
                return "getItems" in b
              },
              Ei = function () {
                return "EventSource" in window
              },
              se = function (a, b) {
                var c = new Image;
                c.onload = function () {
                  b(a, c.width > 0 && c.height > 0)
                };
                c.onerror = function () {
                  b(a, t)
                };
                c.src = "data:image/webp;base64," + {
                  J3: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
                  I3: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
                  alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
                  Yj: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
                }[a]
              },
              te = function (a, b) {
                return Vb.Th["WebP-" + a] = b
              },
              Fi = function () {
                return "openDatabase" in a
              },
              Gi = function () {
                return "performance" in a && "timing" in a.performance
              },
              Hi = function () {
                return "performance" in a && "mark" in a.performance
              },
              Ii = function () {
                return !(!Array.prototype || !Array.prototype.every || !Array.prototype.filter || !Array.prototype.forEach || !Array.prototype.indexOf || !Array.prototype.lastIndexOf || !Array.prototype.map || !Array.prototype.some || !Array.prototype.reduce || !Array.prototype.reduceRight || !Array.isArray)
              },
              Ji = function () {
                return "Promise" in a && "cast" in a.Kp && "resolve" in a.Kp && "reject" in a.Kp && "all" in a.Kp && "race" in a.Kp &&
                  function () {
                    var b;
                    new a.Kp(function (a) {
                      b = a
                    });
                    return typeof b === "function"
                  }()
              },
              Ki = function () {
                var b = !!a.o0,
                  c = a.XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
                return !!a.s0 && b && c
              },
              Li = function () {
                return "geolocation" in navigator
              },
              Mi = function () {
                var b = E("canvas"),
                  c = "probablySupportsContext" in b ? "probablySupportsContext" : "supportsContext";
                return c in b ? b[c]("webgl") || b[c]("experimental-webgl") : "WebGLRenderingContext" in a
              },
              Ni = function () {
                return !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").L1
              },
              Oi = function () {
                return !!a.z0
              },
              Pi = function () {
                return "WebSocket" in a && a.w0.k0 === 2
              },
              Qi = function () {
                return !!b.createElement("video").canPlayType
              },
              Ri = function () {
                return !!b.createElement("audio").canPlayType
              },
              Si = function () {
                return !!(a.history && "pushState" in a.history)
              },
              Ti = function () {
                return !(!a.m0 || !a.n0)
              },
              Ui = function () {
                return "postMessage" in window
              },
              Vi = function () {
                return !!a.webkitNotifications || "Notification" in a && "permission" in a.GO && "requestPermission" in a.GO
              },
              Wi = function () {
                for (var b = ["webkit", "moz", "o", "ms"], c = a.requestAnimationFrame, f = 0; f < b.length && !c; ++f) c = a[b[f] + "RequestAnimationFrame"];
                return !!c
              },
              Xi = function () {
                return "JSON" in a && "parse" in JSON && "stringify" in JSON
              },
              Yi = function () {
                return !(!da("exitFullscreen", b, t) && !da("cancelFullScreen", b, t))
              },
              Zi = function () {
                return !!da("Intl", a)
              },
              $i = function () {
                return N("flexBasis")
              },
              aj = function () {
                return !!N("perspective")
              },
              bj = function () {
                return N("shapeOutside")
              },
              cj = function () {
                var a = E("div");
                a.style.cssText = F.join("filter:blur(2px); ");
                return !!a.style.length && (b.documentMode === l || b.documentMode > 9)
              },
              dj = function () {
                return "XMLHttpRequest" in a && "withCredentials" in new XMLHttpRequest
              },
              ej = function () {
                return E("progress").max !== l
              },
              fj = function () {
                return E("meter").max !== l
              },
              gj = function () {
                return "sendBeacon" in navigator
              },
              hj = function () {
                return N("borderRadius")
              },
              ij = function () {
                return N("boxShadow")
              },
              jj = function () {
                var a = E("div").style;
                a.cssText = F.join("opacity:.55;");
                return /^0.55$/.test(a.opacity)
              },
              kj = function () {
                return M(["textShadow"], l)
              },
              lj = function () {
                return N("animationName")
              },
              mj = function () {
                return N("transition")
              },
              nj = function () {
                return navigator.userAgent.indexOf("Android 2.") === -1 && N("transform")
              },
              Vb = {
                Th: {},
                ra: function (a, b, c) {
                  this.Th[a] = b.apply(this, [].slice.call(arguments, 2))
                },
                Dd: function (a, b) {
                  a.apply(this, [].slice.call(arguments, 1))
                },
                mZ: function () {
                  this.ra("bdrs", hj);
                  this.ra("bxsd", ij);
                  this.ra("opat", jj);
                  this.ra("txsd", kj);
                  this.ra("anim", lj);
                  this.ra("trsi", mj);
                  this.ra("trfm", nj);
                  this.ra("flex", $i);
                  this.ra("3dtr", aj);
                  this.ra("shpe", bj);
                  this.ra("fltr", cj);
                  this.ra("cavs", ba);
                  this.ra("dgdp", va);
                  this.ra("locs", ya);
                  this.ra("wctem", Ea);
                  this.ra("wcsdd", ra);
                  this.ra("wccse", Ua);
                  this.ra("wchti", re);
                  this.Dd(se, "lossy", te);
                  this.Dd(se, "lossless", te);
                  this.Dd(se, "alpha", te);
                  this.Dd(se, "animation", te);
                  this.ra("wsql", Fi);
                  this.ra("natm", Gi);
                  this.ra("ustm", Hi);
                  this.ra("arra", Ii);
                  this.ra("prms", Ji);
                  this.ra("xhr2", Ki);
                  this.ra("wbgl", Mi);
                  this.ra("geol", Li);
                  this.ra("svg", Ni);
                  this.ra("work", Oi);
                  this.ra("wbsk", Pi);
                  this.ra("vido", Qi);
                  this.ra("audo", Ri);
                  this.ra("hsty", Si);
                  this.ra("file", Ti);
                  this.ra("psmg", Ui);
                  this.ra("wknf", Vi);
                  this.ra("rqaf", Wi);
                  this.ra("json", Xi);
                  this.ra("flsc", Yi);
                  this.ra("i18n", Zi);
                  this.ra("cors", dj);
                  this.ra("prog", ej);
                  this.ra("metr", fj);
                  this.ra("becn", gj);
                  this.ra("mcrd", Oc);
                  this.ra("esrc", Ei)
                }
              },
              w = c.alog.aF("feature");
            w.V("commit",
              function () {
                Vb.mZ();
                var a = setInterval(function () {
                  if ("WebP-lossy" in Vb.Th && "WebP-lossless" in Vb.Th && "WebP-alpha" in Vb.Th && "WebP-animation" in Vb.Th) {
                    for (var b in Vb.Th) Vb.Th[b] = Vb.Th[b] ? "y" : "n";
                    w.send("feature", Vb.Th);
                    clearInterval(a)
                  }
                },
                  500)
              });
            c.alog("feature.create", {
              U1: 4,
              m4: k,
              page: i,
              xb: "18"
            });
            c.alog("feature.fire", "commit")
          }
        }(a, b, c)
    }(window, document, D);
  D.Sp = D.alog || u();
  D.alog("cus.fire", "count", "z_loadscriptcount");
  "https:" === location.protocol && D.alog("cus.fire", "count", "z_httpscount");
  function Sb(a) {
    var b = window.TILE_VERSION,
      c = "20170927";
    b && b.ditu && (b = b.ditu, b[a] && b[a].updateDate && (c = b[a].updateDate));
    return c
  };
  function pa(a, b) {
    if (b) {
      var c = (1E5 * Math.random()).toFixed(0);
      D._rd["_cbk" + c] = function (a) {
        b && b(a);
        delete D._rd["_cbk" + c]
      };
      a += "&callback=BMap._rd._cbk" + c
    }
    var e = O("script", {
      type: "text/javascript"
    });
    e.charset = "utf-8";
    e.src = a;
    e.addEventListener ? e.addEventListener("load",
      function (a) {
        a = a.target;
        a.parentNode.removeChild(a)
      },
      t) : e.attachEvent && e.attachEvent("onreadystatechange",
        function () {
          var a = window.event.srcElement;
          a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
        });
    setTimeout(function () {
      document.getElementsByTagName("head")[0].appendChild(e);
      e = s
    },
      1)
  };
  var Tb = {
    map: "xrejwd",
    common: "jhsxen",
    style: "mqdswt",
    tile: "p0pati",
    groundoverlay: "uvl0ac",
    pointcollection: "bbmk0e",
    marker: "gdlnc5",
    symbol: "d3jfwv",
    canvablepath: "c1rjaw",
    vmlcontext: "ljdkuw",
    markeranimation: "zx54lb",
    poly: "lzkyjv",
    draw: "r3rc2t",
    drawbysvg: "td4fpf",
    drawbyvml: "iva1wf",
    drawbycanvas: "ggyzyw",
    infowindow: "3qh3rl",
    oppc: "0ex0xh",
    opmb: "e5bjod",
    menu: "jdidsw",
    control: "bbhj1i",
    navictrl: "jrasgp",
    geoctrl: "pplbbd",
    copyrightctrl: "gdyep0",
    citylistcontrol: "o2n22l",
    scommon: "pprolj",
    local: "3xd2q3",
    route: "r45kkc",
    othersearch: "mbusah",
    mapclick: "02hrhi",
    buslinesearch: "svfucy",
    hotspot: "to3jb0",
    autocomplete: "bgtiqh",
    coordtrans: "pinkk0",
    coordtransutils: "4ynlvp",
    convertor: "hce02e",
    clayer: "qhk3rm",
    pservice: "xvp1p2",
    pcommon: "cmpqr2",
    panorama: "fofrmo",
    panoramaflash: "btooz2"
  };
  z.ay = function () {
    function a(a) {
      return e && !!c[b + a + "_" + Tb[a]]
    }
    var b = "BMap_",
      c = window.localStorage,
      e = "localStorage" in window && c !== s && c !== l;
    return {
      XX: e,
      set: function (a, g) {
        if (e) {
          for (var i = b + a + "_",
            k = c.length,
            m; k--;) m = c.key(k),
              -1 < m.indexOf(i) && c.removeItem(m);
          try {
            c.setItem(b + a + "_" + Tb[a], g)
          } catch (n) {
            c.clear()
          }
        }
      },
      get: function (f) {
        return e && a(f) ? c.getItem(b + f + "_" + Tb[f]) : t
      },
      mJ: a
    }
  }();
  function K() { }
  z.object.extend(K, {
    tj: {
      FF: -1,
      UO: 0,
      Dp: 1
    },
    tK: function () {
      var a = "canvablepath";
      if (!I() || !Ob()) Nb() || (Mb() ? a = "vmlcontext" : Ob());
      return {
        tile: ["style"],
        control: [],
        marker: ["symbol"],
        symbol: ["canvablepath", "common"],
        canvablepath: "canvablepath" === a ? [] : [a],
        vmlcontext: [],
        style: [],
        poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
        drawbysvg: ["draw"],
        drawbyvml: ["draw"],
        drawbycanvas: ["draw"],
        infowindow: ["common", "marker"],
        menu: [],
        oppc: [],
        opmb: [],
        scommon: [],
        local: ["scommon"],
        route: ["scommon"],
        othersearch: ["scommon"],
        autocomplete: ["scommon"],
        citylistcontrol: ["autocomplete"],
        mapclick: ["scommon"],
        buslinesearch: ["route"],
        hotspot: [],
        coordtransutils: ["coordtrans"],
        convertor: [],
        clayer: ["tile"],
        pservice: [],
        pcommon: ["style", "pservice"],
        panorama: ["pcommon"],
        panoramaflash: ["pcommon"]
      }
    },
    p4: {},
    xF: {
      cP: D.oa + "getmodules?v=3.0",
      zT: 5E3
    },
    PB: t,
    Qd: {
      jl: {},
      Wm: [],
      tv: []
    },
    load: function (a, b, c) {
      var e = this.lb(a);
      if (e.Ke == this.tj.Dp) c && b();
      else {
        if (e.Ke == this.tj.FF) {
          this.rJ(a);
          this.HM(a);
          var f = this;
          f.PB == t && (f.PB = p, setTimeout(function () {
            for (var a = [], b = 0, c = f.Qd.Wm.length; b < c; b++) {
              var e = f.Qd.Wm[b],
                n = "";
              ja.ay.mJ(e) ? n = ja.ay.get(e) : (n = "", a.push(e + "_" + Tb[e]));
              f.Qd.tv.push({
                ZL: e,
                XD: n
              })
            }
            f.PB = t;
            f.Qd.Wm.length = 0;
            // 0 == a.length ? f.aK() : pa(f.xF.cP + "&mod=" + a.join(","))
            0 == a.length ? f.aK() : pa("./static/utils/bmap_offline/modules.js")
          },
            1));
          e.Ke = this.tj.UO
        }
        e.qu.push(b)
      }
    },
    rJ: function (a) {
      if (a && this.tK()[a]) for (var a = this.tK()[a], b = 0; b < a.length; b++) this.rJ(a[b]),
        this.Qd.jl[a[b]] || this.HM(a[b])
    },
    HM: function (a) {
      for (var b = 0; b < this.Qd.Wm.length; b++) if (this.Qd.Wm[b] == a) return;
      this.Qd.Wm.push(a)
    },
    lZ: function (a, b) {
      var c = this.lb(a);
      try {
        eval(b)
      } catch (e) {
        return
      }
      c.Ke = this.tj.Dp;
      for (var f = 0,
        g = c.qu.length; f < g; f++) c.qu[f]();
      c.qu.length = 0
    },
    mJ: function (a, b) {
      var c = this;
      c.timeout = setTimeout(function () {
        c.Qd.jl[a].Ke != c.tj.Dp ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
      },
        c.xF.zT)
    },
    lb: function (a) {
      this.Qd.jl[a] || (this.Qd.jl[a] = {},
        this.Qd.jl[a].Ke = this.tj.FF, this.Qd.jl[a].qu = []);
      return this.Qd.jl[a]
    },
    remove: function (a) {
      delete this.lb(a)
    },
    zU: function (a, b) {
      for (var c = this.Qd.tv,
        e = p,
        f = 0,
        g = c.length; f < g; f++)"" == c[f].XD && (c[f].ZL == a ? c[f].XD = b : e = t);
      e && this.aK()
    },
    aK: function () {
      for (var a = this.Qd.tv,
        b = 0,
        c = a.length; b < c; b++) this.lZ(a[b].ZL, a[b].XD);
      this.Qd.tv.length = 0
    }
  });
  function R(a, b) {
    this.x = a || 0;
    this.y = b || 0;
    this.x = this.x;
    this.y = this.y
  }
  R.prototype.oc = function (a) {
    return a && a.x == this.x && a.y == this.y
  };
  function P(a, b) {
    this.width = a || 0;
    this.height = b || 0
  }
  P.prototype.oc = function (a) {
    return a && this.width == a.width && this.height == a.height
  };
  function kb(a, b) {
    a && (this.Lb = a, this.ea = "spot" + kb.ea++ , b = b || {},
      this.Pg = b.text || "", this.Zu = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5], this.ZA = b.userData || s, this.Ch = b.minZoom || s, this.Cf = b.maxZoom || s)
  }
  kb.ea = 0;
  z.extend(kb.prototype, {
    xa: function (a) {
      this.Ch == s && (this.Ch = a.U.gc);
      this.Cf == s && (this.Cf = a.U.pc)
    },
    ua: function (a) {
      a instanceof J && (this.Lb = a)
    },
    ja: x("Lb"),
    xt: ca("Pg"),
    gD: x("Pg"),
    setUserData: ca("ZA"),
    getUserData: x("ZA")
  });
  function Ub() {
    this.M = s;
    this.Mb = "control";
    this.Sa = this.fJ = p
  }
  z.lang.wa(Ub, z.lang.Ga, "Control");
  z.extend(Ub.prototype, {
    initialize: function (a) {
      this.M = a;
      if (this.P) return a.Ya.appendChild(this.P),
        this.P
    },
    Fe: function (a) {
      !this.P && (this.initialize && $a(this.initialize)) && (this.P = this.initialize(a));
      this.m = this.m || {
        vg: t
      };
      this.NA();
      this.hr();
      this.P && (this.P.Gq = this)
    },
    NA: function () {
      var a = this.P;
      if (a) {
        var b = a.style;
        b.position = "absolute";
        b.zIndex = this.nu || "10";
        b.MozUserSelect = "none";
        b.WebkitTextSizeAdjust = "none";
        this.m.vg || z.R.eb(a, "BMap_noprint");
        I() || z.V(a, "contextmenu", oa)
      }
    },
    remove: function () {
      this.M = s;
      this.P && (this.P.parentNode && this.P.parentNode.removeChild(this.P), this.P = this.P.Gq = s)
    },
    Ea: function () {
      this.P = Bb(this.M.Ya, "<div unselectable='on'></div>");
      this.Sa == t && z.R.aa(this.P);
      return this.P
    },
    hr: function () {
      this.uc(this.m.anchor)
    },
    uc: function (a) {
      if (this.r1 || !Za(a) || isNaN(a) || a < Wb || 3 < a) a = this.defaultAnchor;
      this.m = this.m || {
        vg: t
      };
      this.m.Da = this.m.Da || this.defaultOffset;
      var b = this.m.anchor;
      this.m.anchor = a;
      if (this.P) {
        var c = this.P,
          e = this.m.Da.width,
          f = this.m.Da.height;
        c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
        switch (a) {
          case Wb:
            c.style.top = f + "px";
            c.style.left = e + "px";
            break;
          case Xb:
            c.style.top = f + "px";
            c.style.right = e + "px";
            break;
          case Yb:
            c.style.bottom = f + "px";
            c.style.left = e + "px";
            break;
          case 3:
            c.style.bottom = f + "px",
              c.style.right = e + "px"
        }
        c = ["TL", "TR", "BL", "BR"];
        z.R.tc(this.P, "anchor" + c[b]);
        z.R.eb(this.P, "anchor" + c[a])
      }
    },
    JC: function () {
      return this.m.anchor
    },
    getContainer: x("P"),
    Ld: function (a) {
      a instanceof P && (this.m = this.m || {
        vg: t
      },
        this.m.Da = new P(a.width, a.height), this.P && this.uc(this.m.anchor))
    },
    cj: function () {
      return this.m.Da
    },
    Zc: x("P"),
    show: function () {
      this.Sa != p && (this.Sa = p, this.P && z.R.show(this.P))
    },
    aa: function () {
      this.Sa != t && (this.Sa = t, this.P && z.R.aa(this.P))
    },
    isPrintable: function () {
      return !!this.m.vg
    },
    Nc: function () {
      return !this.P && !this.M ? t : !!this.Sa
    }
  });
  var Wb = 0,
    Xb = 1,
    Yb = 2;
  function lb(a) {
    Ub.call(this);
    a = a || {};
    this.m = {
      vg: t,
      JE: a.showZoomInfo || p,
      anchor: a.anchor,
      Da: a.offset,
      type: a.type,
      NV: a.enableGeolocation || t
    };
    this.defaultAnchor = I() ? 3 : Wb;
    this.defaultOffset = new P(10, 10);
    this.uc(a.anchor);
    this.Gm(a.type);
    this.uf()
  }
  z.lang.wa(lb, Ub, "NavigationControl");
  z.extend(lb.prototype, {
    initialize: function (a) {
      this.M = a;
      return this.P
    },
    Gm: function (a) {
      this.m.type = Za(a) && 0 <= a && 3 >= a ? a : 0
    },
    Lo: function () {
      return this.m.type
    },
    uf: function () {
      var a = this;
      K.load("navictrl",
        function () {
          a.tf()
        })
    }
  });
  function Zb(a) {
    Ub.call(this);
    a = a || {};
    this.m = {
      anchor: a.anchor || Yb,
      Da: a.offset || new P(10, 30),
      VZ: a.showAddressBar !== t,
      Z1: a.enableAutoLocation || t,
      RL: a.locationIcon || s
    };
    var b = this;
    this.nu = 1200;
    b.N_ = [];
    this.ne = [];
    K.load("geoctrl",
      function () {
        (function e() {
          if (0 !== b.ne.length) {
            var a = b.ne.shift();
            b[a.method].apply(b, a.arguments);
            e()
          }
        })();
        b.bP()
      });
    Ta(Ma)
  }
  z.lang.wa(Zb, Ub, "GeolocationControl");
  z.extend(Zb.prototype, {
    location: function () {
      this.ne.push({
        method: "location",
        arguments: arguments
      })
    },
    getAddressComponent: ea(s)
  });
  function $b(a) {
    Ub.call(this);
    a = a || {};
    this.m = {
      vg: t,
      anchor: a.anchor,
      Da: a.offset
    };
    this.bc = [];
    this.defaultAnchor = Yb;
    this.defaultOffset = new P(5, 2);
    this.uc(a.anchor);
    this.fJ = t;
    this.uf()
  }
  z.lang.wa($b, Ub, "CopyrightControl");
  z.object.extend($b.prototype, {
    initialize: function (a) {
      this.M = a;
      return this.P
    },
    Pv: function (a) {
      if (a && Za(a.id) && !isNaN(a.id)) {
        var b = {
          bounds: s,
          content: ""
        },
          c;
        for (c in a) b[c] = a[c];
        if (a = this.Xl(a.id)) for (var e in b) a[e] = b[e];
        else this.bc.push(b)
      }
    },
    Xl: function (a) {
      for (var b = 0,
        c = this.bc.length; b < c; b++) if (this.bc[b].id == a) return this.bc[b]
    },
    QC: x("bc"),
    lE: function (a) {
      for (var b = 0,
        c = this.bc.length; b < c; b++) this.bc[b].id == a && (r = this.bc.splice(b, 1), b-- , c = this.bc.length)
    },
    uf: function () {
      var a = this;
      K.load("copyrightctrl",
        function () {
          a.tf()
        })
    }
  });
  function nb(a) {
    Ub.call(this);
    a = a || {};
    this.m = {
      vg: t,
      size: a.size || new P(150, 150),
      padding: 5,
      Za: a.isOpen === p ? p : t,
      e0: 4,
      Da: a.offset,
      anchor: a.anchor
    };
    this.defaultAnchor = 3;
    this.defaultOffset = new P(0, 0);
    this.Xp = this.Yp = 13;
    this.uc(a.anchor);
    this.Ae(this.m.size);
    this.uf()
  }
  z.lang.wa(nb, Ub, "OverviewMapControl");
  z.extend(nb.prototype, {
    initialize: function (a) {
      this.M = a;
      return this.P
    },
    uc: function (a) {
      Ub.prototype.uc.call(this, a)
    },
    qe: function () {
      this.qe.Hn = p;
      this.m.Za = !this.m.Za;
      this.P || (this.qe.Hn = t)
    },
    Ae: function (a) {
      a instanceof P || (a = new P(150, 150));
      a.width = 0 < a.width ? a.width : 150;
      a.height = 0 < a.height ? a.height : 150;
      this.m.size = a
    },
    Hb: function () {
      return this.m.size
    },
    Za: function () {
      return this.m.Za
    },
    uf: function () {
      var a = this;
      K.load("control",
        function () {
          a.tf()
        })
    }
  });
  function ac(a) {
    Ub.call(this);
    a = a || {};
    this.defaultAnchor = Wb;
    this.xU = a.canCheckSize === t ? t : p;
    this.Ti = "";
    this.defaultOffset = new P(10, 10);
    this.onChangeBefore = [];
    this.onChangeAfter = [];
    this.onChangeSuccess = [];
    this.m = {
      vg: t,
      Da: a.offset || this.defaultOffset,
      anchor: a.anchor || this.defaultAnchor,
      expand: !!a.expand
    };
    a.onChangeBefore && $a(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
    a.onChangeAfter && $a(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
    a.onChangeSuccess && $a(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
    this.uc(a.anchor);
    this.uf()
  }
  z.lang.wa(ac, Ub, "CityListControl");
  z.object.extend(ac.prototype, {
    initialize: function (a) {
      this.M = a;
      return this.P
    },
    uf: function () {
      var a = this;
      K.load("citylistcontrol",
        function () {
          a.tf()
        },
        p)
    }
  });
  function mb(a) {
    Ub.call(this);
    a = a || {};
    this.m = {
      vg: t,
      color: "black",
      ed: "metric",
      Da: a.offset
    };
    this.defaultAnchor = Yb;
    this.defaultOffset = new P(81, 18);
    this.uc(a.anchor);
    this.Kh = {
      metric: {
        name: "metric",
        tJ: 1,
        hL: 1E3,
        RN: "\u7c73",
        SN: "\u516c\u91cc"
      },
      us: {
        name: "us",
        tJ: 3.2808,
        hL: 5280,
        RN: "\u82f1\u5c3a",
        SN: "\u82f1\u91cc"
      }
    };
    this.Kh[this.m.ed] || (this.m.ed = "metric");
    this.$H = s;
    this.zH = {};
    this.uf()
  }
  z.lang.wa(mb, Ub, "ScaleControl");
  z.object.extend(mb.prototype, {
    initialize: function (a) {
      this.M = a;
      return this.P
    },
    Ak: function (a) {
      this.m.color = a + ""
    },
    v2: function () {
      return this.m.color
    },
    FE: function (a) {
      this.m.ed = this.Kh[a] && this.Kh[a].name || this.m.ed
    },
    jX: function () {
      return this.m.ed
    },
    uf: function () {
      var a = this;
      K.load("control",
        function () {
          a.tf()
        })
    }
  });
  var bc = 0;
  function ob(a) {
    Ub.call(this);
    a = a || {};
    this.defaultAnchor = Xb;
    this.defaultOffset = new P(10, 10);
    this.m = {
      vg: t,
      dh: [Pa, ab, Va, Sa],
      hV: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
      type: a.type || bc,
      Da: a.offset || this.defaultOffset,
      RV: p
    };
    this.uc(a.anchor);
    "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.m.dh = a.mapTypes.slice(0));
    this.uf()
  }
  z.lang.wa(ob, Ub, "MapTypeControl");
  z.object.extend(ob.prototype, {
    initialize: function (a) {
      this.M = a;
      return this.P
    },
    by: function (a) {
      this.M.xn = a
    },
    uf: function () {
      var a = this;
      K.load("control",
        function () {
          a.tf()
        },
        p)
    }
  });
  function cc(a) {
    Ub.call(this);
    a = a || {};
    this.m = {
      vg: t,
      Da: a.offset,
      anchor: a.anchor
    };
    this.Gi = t;
    this.xv = s;
    this.IH = new dc({
      hf: "api"
    });
    this.JH = new ec(s, {
      hf: "api"
    });
    this.defaultAnchor = Xb;
    this.defaultOffset = new P(10, 10);
    this.uc(a.anchor);
    this.uf();
    Ta(xa)
  }
  z.lang.wa(cc, Ub, "PanoramaControl");
  z.extend(cc.prototype, {
    initialize: function (a) {
      this.M = a;
      return this.P
    },
    uf: function () {
      var a = this;
      K.load("control",
        function () {
          a.tf()
        })
    }
  });
  function fc(a) {
    z.lang.Ga.call(this);
    this.m = {
      Ya: s,
      cursor: "default"
    };
    this.m = z.extend(this.m, a);
    this.Mb = "contextmenu";
    this.M = s;
    this.Aa = [];
    this.Ef = [];
    this.De = [];
    this.qw = this.Hr = s;
    this.Bh = t;
    var b = this;
    K.load("menu",
      function () {
        b.jb()
      })
  }
  z.lang.wa(fc, z.lang.Ga, "ContextMenu");
  z.object.extend(fc.prototype, {
    xa: function (a, b) {
      this.M = a;
      this.ol = b || s
    },
    remove: function () {
      this.M = this.ol = s
    },
    Qv: function (a) {
      if (a && !("menuitem" != a.Mb || "" == a.Pg || 0 >= a.Oi)) {
        for (var b = 0,
          c = this.Aa.length; b < c; b++) if (this.Aa[b] === a) return;
        this.Aa.push(a);
        this.Ef.push(a)
      }
    },
    removeItem: function (a) {
      if (a && "menuitem" == a.Mb) {
        for (var b = 0,
          c = this.Aa.length; b < c; b++) this.Aa[b] === a && (this.Aa[b].remove(), this.Aa.splice(b, 1), c--);
        b = 0;
        for (c = this.Ef.length; b < c; b++) this.Ef[b] === a && (this.Ef[b].remove(), this.Ef.splice(b, 1), c--)
      }
    },
    iB: function () {
      this.Aa.push({
        Mb: "divider",
        Aj: this.De.length
      });
      this.De.push({
        R: s
      })
    },
    nE: function (a) {
      if (this.De[a]) {
        for (var b = 0,
          c = this.Aa.length; b < c; b++) this.Aa[b] && ("divider" == this.Aa[b].Mb && this.Aa[b].Aj == a) && (this.Aa.splice(b, 1), c--),
            this.Aa[b] && ("divider" == this.Aa[b].Mb && this.Aa[b].Aj > a) && this.Aa[b].Aj--;
        this.De.splice(a, 1)
      }
    },
    Zc: x("P"),
    show: function () {
      this.Bh != p && (this.Bh = p)
    },
    aa: function () {
      this.Bh != t && (this.Bh = t)
    },
    AZ: function (a) {
      a && (this.m.cursor = a)
    },
    getItem: function (a) {
      return this.Ef[a]
    }
  });
  var gc = H.sa + "menu_zoom_in.png",
    hc = H.sa + "menu_zoom_out.png";
  function ic(a, b, c) {
    if (a && $a(b)) {
      z.lang.Ga.call(this);
      this.m = {
        width: 100,
        id: "",
        gm: ""
      };
      c = c || {};
      this.m.width = 1 * c.width ? c.width : 100;
      this.m.id = c.id ? c.id : "";
      this.m.gm = c.iconUrl ? c.iconUrl : "";
      this.Pg = a + "";
      this.Ly = b;
      this.M = s;
      this.Mb = "menuitem";
      this.or = this.Ou = this.P = this.wh = s;
      this.zh = p;
      var e = this;
      K.load("menu",
        function () {
          e.jb()
        })
    }
  }
  z.lang.wa(ic, z.lang.Ga, "MenuItem");
  z.object.extend(ic.prototype, {
    xa: function (a, b) {
      this.M = a;
      this.wh = b
    },
    remove: function () {
      this.M = this.wh = s
    },
    xt: function (a) {
      a && (this.Pg = a + "")
    },
    Tb: function (a) {
      a && (this.m.gm = a)
    },
    Zc: x("P"),
    enable: function () {
      this.zh = p
    },
    disable: function () {
      this.zh = t
    }
  });
  function hb(a, b) {
    a && !b && (b = a);
    this.Ge = this.Wd = this.Le = this.Yd = this.Bl = this.ml = s;
    a && (this.Bl = new J(a.lng, a.lat), this.ml = new J(b.lng, b.lat), this.Le = a.lng, this.Yd = a.lat, this.Ge = b.lng, this.Wd = b.lat)
  }
  z.object.extend(hb.prototype, {
    lj: function () {
      return !this.Bl || !this.ml
    },
    oc: function (a) {
      return !(a instanceof hb) || this.lj() ? t : this.Se().oc(a.Se()) && this.Lf().oc(a.Lf())
    },
    Se: x("Bl"),
    Lf: x("ml"),
    OU: function (a) {
      return !(a instanceof hb) || this.lj() || a.lj() ? t : a.Le > this.Le && a.Ge < this.Ge && a.Yd > this.Yd && a.Wd < this.Wd
    },
    Bb: function () {
      return this.lj() ? s : new J((this.Le + this.Ge) / 2, (this.Yd + this.Wd) / 2)
    },
    Gs: function (a) {
      if (!(a instanceof hb) || Math.max(a.Le, a.Ge) < Math.min(this.Le, this.Ge) || Math.min(a.Le, a.Ge) > Math.max(this.Le, this.Ge) || Math.max(a.Yd, a.Wd) < Math.min(this.Yd, this.Wd) || Math.min(a.Yd, a.Wd) > Math.max(this.Yd, this.Wd)) return s;
      var b = Math.max(this.Le, a.Le),
        c = Math.min(this.Ge, a.Ge),
        e = Math.max(this.Yd, a.Yd),
        a = Math.min(this.Wd, a.Wd);
      return new hb(new J(b, e), new J(c, a))
    },
    Dr: function (a) {
      return !(a instanceof J) || this.lj() ? t : a.lng >= this.Le && a.lng <= this.Ge && a.lat >= this.Yd && a.lat <= this.Wd
    },
    extend: function (a) {
      if (a instanceof J) {
        var b = a.lng,
          a = a.lat;
        this.Bl || (this.Bl = new J(0, 0));
        this.ml || (this.ml = new J(0, 0));
        if (!this.Le || this.Le > b) this.Bl.lng = this.Le = b;
        if (!this.Ge || this.Ge < b) this.ml.lng = this.Ge = b;
        if (!this.Yd || this.Yd > a) this.Bl.lat = this.Yd = a;
        if (!this.Wd || this.Wd < a) this.ml.lat = this.Wd = a
      }
    },
    XE: function () {
      return this.lj() ? new J(0, 0) : new J(Math.abs(this.Ge - this.Le), Math.abs(this.Wd - this.Yd))
    }
  });
  function J(a, b) {
    isNaN(a) && (a = Lb(a), a = isNaN(a) ? 0 : a);
    bb(a) && (a = parseFloat(a));
    isNaN(b) && (b = Lb(b), b = isNaN(b) ? 0 : b);
    bb(b) && (b = parseFloat(b));
    this.lng = a;
    this.lat = b
  }
  J.mL = function (a) {
    return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
  };
  J.prototype.oc = function (a) {
    return a && this.lat == a.lat && this.lng == a.lng
  };
  function jc() { }
  jc.prototype.qg = function () {
    aa("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
  };
  jc.prototype.oj = function () {
    aa("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
  };
  function kc() { };
  var gb = {
    vJ: function (a, b, c) {
      K.load("coordtransutils",
        function () {
          gb.$T(a, b, c)
        },
        p)
    },
    uJ: function (a, b, c) {
      K.load("coordtransutils",
        function () {
          gb.ZT(a, b, c)
        },
        p)
    }
  };
  function lc() {
    this.Ra = [];
    var a = this;
    K.load("convertor",
      function () {
        a.$O()
      })
  }
  z.wa(lc, z.lang.Ga, "Convertor");
  z.extend(lc.prototype, {
    translate: function (a, b, c, e) {
      this.Ra.push({
        method: "translate",
        arguments: [a, b, c, e]
      })
    }
  });
  U(lc.prototype, {
    translate: lc.prototype.translate
  });
  function S() { }
  S.prototype = new jc;
  z.extend(S, {
    xO: 6370996.81,
    JF: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
    eu: [86, 60, 45, 30, 15, 0],
    DO: [[1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7], [- 7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7], [- 3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [- 1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]],
    GF: [[- 0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [- 3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [- 3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
    B2: function (a, b) {
      if (!a || !b) return 0;
      var c, e, a = this.cc(a);
      if (!a) return 0;
      c = this.Jk(a.lng);
      e = this.Jk(a.lat);
      b = this.cc(b);
      return !b ? 0 : this.jf(c, this.Jk(b.lng), e, this.Jk(b.lat))
    },
    Do: function (a, b) {
      if (!a || !b) return 0;
      a.lng = this.XC(a.lng, -180, 180);
      a.lat = this.cD(a.lat, -74, 74);
      b.lng = this.XC(b.lng, -180, 180);
      b.lat = this.cD(b.lat, -74, 74);
      return this.jf(this.Jk(a.lng), this.Jk(b.lng), this.Jk(a.lat), this.Jk(b.lat))
    },
    cc: function (a) {
      if (a === s || a === l) return new J(0, 0);
      var b, c;
      b = new J(Math.abs(a.lng), Math.abs(a.lat));
      for (var e = 0; e < this.JF.length; e++) if (b.lat >= this.JF[e]) {
        c = this.DO[e];
        break
      }
      a = this.wJ(a, c);
      return a = new J(a.lng, a.lat)
    },
    Gb: function (a) {
      if (a === s || a === l || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat) return new J(0, 0);
      var b, c;
      a.lng = this.XC(a.lng, -180, 180);
      a.lat = this.cD(a.lat, -85, 85);
      b = new J(a.lng, a.lat);
      for (var e = 0; e < this.eu.length; e++) if (b.lat >= this.eu[e]) {
        c = this.GF[e];
        break
      }
      if (!c) for (e = 0; e < this.eu.length; e++) if (b.lat <= -this.eu[e]) {
        c = this.GF[e];
        break
      }
      a = this.wJ(a, c);
      return a = new J(a.lng, a.lat)
    },
    wJ: function (a, b) {
      if (a && b) {
        var c = b[0] + b[1] * Math.abs(a.lng),
          e = Math.abs(a.lat) / b[9],
          e = b[2] + b[3] * e + b[4] * e * e + b[5] * e * e * e + b[6] * e * e * e * e + b[7] * e * e * e * e * e + b[8] * e * e * e * e * e * e,
          c = c * (0 > a.lng ? -1 : 1),
          e = e * (0 > a.lat ? -1 : 1);
        return new J(c, e)
      }
    },
    jf: function (a, b, c, e) {
      return this.xO * Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(b - a))
    },
    Jk: function (a) {
      return Math.PI * a / 180
    },
    Y4: function (a) {
      return 180 * a / Math.PI
    },
    cD: function (a, b, c) {
      b != s && (a = Math.max(a, b));
      c != s && (a = Math.min(a, c));
      return a
    },
    XC: function (a, b, c) {
      for (; a > c;) a -= c - b;
      for (; a < b;) a += c - b;
      return a
    }
  });
  z.extend(S.prototype, {
    bi: function (a) {
      return S.Gb(a)
    },
    qg: function (a) {
      a = S.Gb(a);
      return new R(a.lng, a.lat)
    },
    eh: function (a) {
      return S.cc(a)
    },
    oj: function (a) {
      a = new J(a.x, a.y);
      return S.cc(a)
    },
    Rb: function (a, b, c, e, f) {
      if (a) return a = this.bi(a, f),
        b = this.dc(b),
        new R(Math.round((a.lng - c.lng) / b + e.width / 2), Math.round((c.lat - a.lat) / b + e.height / 2))
    },
    Ib: function (a, b, c, e, f) {
      if (a) return b = this.dc(b),
        this.eh(new J(c.lng + b * (a.x - e.width / 2), c.lat - b * (a.y - e.height / 2)), f)
    },
    dc: function (a) {
      return Math.pow(2, 18 - a)
    }
  });
  function jb() {
    this.Ti = "bj"
  }
  jb.prototype = new S;
  z.extend(jb.prototype, {
    bi: function (a, b) {
      return this.LP(b, S.Gb(a))
    },
    eh: function (a, b) {
      return S.cc(this.MP(b, a))
    },
    lngLatToPointFor3D: function (a, b) {
      var c = this,
        e = S.Gb(a);
      K.load("coordtrans",
        function () {
          var a = kc.aD(c.Ti || "bj", e),
            a = new R(a.x, a.y);
          b && b(a)
        },
        p)
    },
    pointToLngLatFor3D: function (a, b) {
      var c = this,
        e = new J(a.x, a.y);
      K.load("coordtrans",
        function () {
          var a = kc.YC(c.Ti || "bj", e),
            a = new J(a.lng, a.lat),
            a = S.cc(a);
          b && b(a)
        },
        p)
    },
    LP: function (a, b) {
      if (K.lb("coordtrans").Ke == K.tj.Dp) {
        var c = kc.aD(a || "bj", b);
        return new J(c.x, c.y)
      }
      K.load("coordtrans", u());
      return new J(0, 0)
    },
    MP: function (a, b) {
      if (K.lb("coordtrans").Ke == K.tj.Dp) {
        var c = kc.YC(a || "bj", b);
        return new J(c.lng, c.lat)
      }
      K.load("coordtrans", u());
      return new J(0, 0)
    },
    dc: function (a) {
      return Math.pow(2, 20 - a)
    }
  });
  function mc() {
    this.Mb = "overlay"
  }
  z.lang.wa(mc, z.lang.Ga, "Overlay");
  mc.pk = function (a) {
    a *= 1;
    return !a ? 0 : -1E5 * a << 1
  };
  z.extend(mc.prototype, {
    Fe: function (a) {
      if (!this.ba && $a(this.initialize) && (this.ba = this.initialize(a))) this.ba.style.WebkitUserSelect = "none";
      this.draw()
    },
    initialize: function () {
      aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
    },
    draw: function () {
      aa("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
    },
    remove: function () {
      this.ba && this.ba.parentNode && this.ba.parentNode.removeChild(this.ba);
      this.ba = s;
      this.dispatchEvent(new Q("onremove"))
    },
    aa: function () {
      this.ba && z.R.aa(this.ba)
    },
    show: function () {
      this.ba && z.R.show(this.ba)
    },
    Nc: function () {
      return !this.ba || "none" == this.ba.style.display || "hidden" == this.ba.style.visibility ? t : p
    }
  });
  D.We(function (a) {
    function b(a, b) {
      var c = O("div"),
        i = c.style;
      i.position = "absolute";
      i.top = i.left = i.width = i.height = "0";
      i.zIndex = b;
      a.appendChild(c);
      return c
    }
    var c = a.$;
    c.Oc = a.Oc = b(a.platform, 200);
    a.Xd.DC = b(c.Oc, 800);
    a.Xd.SD = b(c.Oc, 700);
    a.Xd.gK = b(c.Oc, 600);
    a.Xd.LD = b(c.Oc, 500);
    a.Xd.VL = b(c.Oc, 400);
    a.Xd.WL = b(c.Oc, 300);
    a.Xd.cO = b(c.Oc, 201);
    a.Xd.Ss = b(c.Oc, 200)
  });
  function ib() {
    z.lang.Ga.call(this);
    mc.call(this);
    this.map = s;
    this.Sa = p;
    this.Cb = s;
    this.tG = 0
  }
  z.lang.wa(ib, mc, "OverlayInternal");
  z.extend(ib.prototype, {
    initialize: function (a) {
      this.map = a;
      z.lang.Ga.call(this, this.ea);
      return s
    },
    Kw: x("map"),
    draw: u(),
    uj: u(),
    remove: function () {
      this.map = s;
      z.lang.tw(this.ea);
      mc.prototype.remove.call(this)
    },
    aa: function () {
      this.Sa !== t && (this.Sa = t)
    },
    show: function () {
      this.Sa !== p && (this.Sa = p)
    },
    Nc: function () {
      return !this.ba ? t : !!this.Sa
    },
    Ta: x("ba"),
    cN: function (a) {
      var a = a || {},
        b;
      for (b in a) this.K[b] = a[b]
    },
    rp: ca("zIndex"),
    Yi: function () {
      this.K.Yi = p
    },
    qV: function () {
      this.K.Yi = t
    },
    Wn: ca("dg"),
    cp: function () {
      this.dg = s
    }
  });
  function nc() {
    this.map = s;
    this.Ba = {};
    this.Ce = []
  }
  D.We(function (a) {
    var b = new nc;
    b.map = a;
    a.Ba = b.Ba;
    a.Ce = b.Ce;
    a.addEventListener("load",
      function (a) {
        b.draw(a)
      });
    a.addEventListener("moveend",
      function (a) {
        b.draw(a)
      });
    z.fa.ma && 8 > z.fa.ma || "BackCompat" === document.compatMode ? a.addEventListener("zoomend",
      function (a) {
        setTimeout(function () {
          b.draw(a)
        },
          20)
      }) : a.addEventListener("zoomend",
        function (a) {
          b.draw(a)
        });
    a.addEventListener("maptypechange",
      function (a) {
        b.draw(a)
      });
    a.addEventListener("addoverlay",
      function (a) {
        a = a.target;
        if (a instanceof ib) b.Ba[a.ea] || (b.Ba[a.ea] = a);
        else {
          for (var e = t,
            f = 0,
            g = b.Ce.length; f < g; f++) if (b.Ce[f] === a) {
              e = p;
              break
            }
          e || b.Ce.push(a)
        }
      });
    a.addEventListener("removeoverlay",
      function (a) {
        a = a.target;
        if (a instanceof ib) delete b.Ba[a.ea];
        else for (var e = 0,
          f = b.Ce.length; e < f; e++) if (b.Ce[e] === a) {
            b.Ce.splice(e, 1);
            break
          }
      });
    a.addEventListener("clearoverlays",
      function () {
        this.Xc();
        for (var a in b.Ba) b.Ba[a].K.Yi && (b.Ba[a].remove(), delete b.Ba[a]);
        a = 0;
        for (var e = b.Ce.length; a < e; a++) b.Ce[a].enableMassClear !== t && (b.Ce[a].remove(), b.Ce[a] = s, b.Ce.splice(a, 1), a-- , e--)
      });
    a.addEventListener("infowindowopen",
      function () {
        var a = this.Cb;
        a && (z.R.aa(a.zc), z.R.aa(a.Zb))
      });
    a.addEventListener("movestart",
      function () {
        this.$g() && this.$g().fI()
      });
    a.addEventListener("moveend",
      function () {
        this.$g() && this.$g().VH()
      })
  });
  nc.prototype.draw = function (a) {
    if (D.Gp) {
      var b = D.Gp.ks(this.map);
      "canvas" === b.Mb && b.canvas && b.GP(b.canvas.getContext("2d"))
    }
    for (var c in this.Ba) this.Ba[c].draw(a);
    z.lc.Nb(this.Ce,
      function (a) {
        a.draw()
      });
    this.map.$.rb && this.map.$.rb.ua();
    D.Gp && b.DE()
  };
  function oc(a) {
    ib.call(this);
    a = a || {};
    this.K = {
      strokeColor: a.strokeColor || "#3a6bdb",
      qc: a.strokeWeight || 5,
      td: a.strokeOpacity || 0.65,
      strokeStyle: a.strokeStyle || "solid",
      Yi: a.enableMassClear === t ? t : p,
      lk: s,
      $l: s,
      ff: a.enableEditing === p ? p : t,
      $L: 5,
      L_: t,
      cf: a.enableClicking === t ? t : p,
      $h: a.icons && 0 < a.icons.length ? a.icons : s
    };
    0 >= this.K.qc && (this.K.qc = 5);
    if (0 > this.K.td || 1 < this.K.td) this.K.td = 0.65;
    if (0 > this.K.lg || 1 < this.K.lg) this.K.lg = 0.65;
    "solid" != this.K.strokeStyle && "dashed" != this.K.strokeStyle && (this.K.strokeStyle = "solid");
    this.ba = s;
    this.mu = new hb(0, 0);
    this.af = [];
    this.rc = [];
    this.Ua = {}
  }
  z.lang.wa(oc, ib, "Graph");
  oc.Hw = function (a) {
    var b = [];
    if (!a) return b;
    bb(a) && z.lc.Nb(a.split(";"),
      function (a) {
        a = a.split(",");
        b.push(new J(a[0], a[1]))
      });
    "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
    return b
  };
  oc.cE = [0.09, 0.0050, 1.0E-4, 1.0E-5];
  z.extend(oc.prototype, {
    initialize: function (a) {
      this.map = a;
      return s
    },
    draw: u(),
    gr: function (a) {
      this.af.length = 0;
      this.na = oc.Hw(a).slice(0);
      this.th()
    },
    je: function (a) {
      this.gr(a)
    },
    th: function () {
      if (this.na) {
        var a = this;
        a.mu = new hb;
        z.lc.Nb(this.na,
          function (b) {
            a.mu.extend(b)
          })
      }
    },
    Re: x("na"),
    Fm: function (a, b) {
      b && this.na[a] && (this.af.length = 0, this.na[a] = new J(b.lng, b.lat), this.th())
    },
    setStrokeColor: function (a) {
      this.K.strokeColor = a
    },
    bX: function () {
      return this.K.strokeColor
    },
    qp: function (a) {
      0 < a && (this.K.qc = a)
    },
    JK: function () {
      return this.K.qc
    },
    op: function (a) {
      a == l || (1 < a || 0 > a) || (this.K.td = a)
    },
    cX: function () {
      return this.K.td
    },
    lt: function (a) {
      1 < a || 0 > a || (this.K.lg = a)
    },
    wW: function () {
      return this.K.lg
    },
    pp: function (a) {
      "solid" != a && "dashed" != a || (this.K.strokeStyle = a)
    },
    IK: function () {
      return this.K.strokeStyle
    },
    setFillColor: function (a) {
      this.K.fillColor = a || ""
    },
    vW: function () {
      return this.K.fillColor
    },
    te: x("mu"),
    remove: function () {
      this.map && this.map.removeEventListener("onmousemove", this.Lu);
      ib.prototype.remove.call(this);
      this.af.length = 0
    },
    ff: function () {
      if (!(2 > this.na.length)) {
        this.K.ff = p;
        var a = this;
        K.load("poly",
          function () {
            a.Gl()
          },
          p)
      }
    },
    pV: function () {
      this.K.ff = t;
      var a = this;
      K.load("poly",
        function () {
          a.$j()
        },
        p)
    },
    sW: function () {
      return this.K.ff
    }
  });
  function pc(a) {
    ib.call(this);
    this.ba = this.map = s;
    this.K = {
      width: 0,
      height: 0,
      Da: new P(0, 0),
      opacity: 1,
      background: "transparent",
      mx: 1,
      HL: "#000",
      gY: "solid",
      point: s
    };
    this.cN(a);
    this.point = this.K.point
  }
  z.lang.wa(pc, ib, "Division");
  z.extend(pc.prototype, {
    uj: function () {
      var a = this.K,
        b = this.content,
        c = ['<div class="BMap_Division" style="position:absolute;'];
      c.push("width:" + a.width + "px;display:block;");
      c.push("overflow:hidden;");
      "none" != a.borderColor && c.push("border:" + a.mx + "px " + a.gY + " " + a.HL + ";");
      c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
      c.push("background:" + a.background + ";");
      c.push('z-index:60;">');
      c.push(b);
      c.push("</div>");
      this.ba = Bb(this.map.Mf().SD, c.join(""))
    },
    initialize: function (a) {
      this.map = a;
      this.uj();
      this.ba && z.V(this.ba, I() ? "touchstart" : "mousedown",
        function (a) {
          na(a)
        });
      return this.ba
    },
    draw: function () {
      var a = this.map.Ve(this.K.point);
      this.K.Da = new P(- Math.round(this.K.width / 2) - Math.round(this.K.mx), -Math.round(this.K.height / 2) - Math.round(this.K.mx));
      this.ba.style.left = a.x + this.K.Da.width + "px";
      this.ba.style.top = a.y + this.K.Da.height + "px"
    },
    ja: function () {
      return this.K.point
    },
    R0: function () {
      return this.map.Rb(this.ja())
    },
    ua: function (a) {
      this.K.point = a;
      this.draw()
    },
    BZ: function (a, b) {
      this.K.width = Math.round(a);
      this.K.height = Math.round(b);
      this.ba && (this.ba.style.width = this.K.width + "px", this.ba.style.height = this.K.height + "px", this.draw())
    }
  });
  function qc(a, b, c) {
    a && b && (this.imageUrl = a, this.size = b, a = new P(Math.floor(b.width / 2), Math.floor(b.height / 2)), c = c || {},
      a = c.anchor || a, b = c.imageOffset || new P(0, 0), this.imageSize = c.imageSize, this.anchor = a, this.imageOffset = b, this.infoWindowAnchor = c.infoWindowAnchor || this.anchor, this.printImageUrl = c.printImageUrl || "")
  }
  z.extend(qc.prototype, {
    dN: function (a) {
      a && (this.imageUrl = a)
    },
    RZ: function (a) {
      a && (this.printImageUrl = a)
    },
    Ae: function (a) {
      a && (this.size = new P(a.width, a.height))
    },
    uc: function (a) {
      a && (this.anchor = new P(a.width, a.height))
    },
    mt: function (a) {
      a && (this.imageOffset = new P(a.width, a.height))
    },
    GZ: function (a) {
      a && (this.infoWindowAnchor = new P(a.width, a.height))
    },
    DZ: function (a) {
      a && (this.imageSize = new P(a.width, a.height))
    },
    toString: ea("Icon")
  });
  function rc(a, b) {
    if (a) {
      b = b || {};
      this.style = {
        anchor: b.anchor || new P(0, 0),
        fillColor: b.fillColor || "#000",
        lg: b.fillOpacity || 0,
        scale: b.scale || 1,
        rotation: b.rotation || 0,
        strokeColor: b.strokeColor || "#000",
        td: b.strokeOpacity || 1,
        qc: b.strokeWeight
      };
      this.Mb = "number" === typeof a ? a : "UserDefined";
      this.wi = this.style.anchor;
      this.Lq = new P(0, 0);
      this.anchor = s;
      this.AA = a;
      var c = this;
      K.load("symbol",
        function () {
          c.an()
        },
        p)
    }
  }
  z.extend(rc.prototype, {
    setPath: ca("AA"),
    setAnchor: function (a) {
      this.wi = this.style.anchor = a
    },
    setRotation: function (a) {
      this.style.rotation = a
    },
    setScale: function (a) {
      this.style.scale = a
    },
    setStrokeWeight: function (a) {
      this.style.qc = a
    },
    setStrokeColor: function (a) {
      a = z.Br.GB(a, this.style.td);
      this.style.strokeColor = a
    },
    setStrokeOpacity: function (a) {
      this.style.td = a
    },
    setFillOpacity: function (a) {
      this.style.lg = a
    },
    setFillColor: function (a) {
      this.style.fillColor = a
    }
  });
  function sc(a, b, c, e) {
    a && (this.ev = {},
      this.eK = e ? !!e : t, this.Uc = [], this.j_ = a instanceof rc ? a : s, this.OH = b === l ? p : !!(b.indexOf("%") + 1), this.Nj = isNaN(parseFloat(b)) ? 1 : this.OH ? parseFloat(b) / 100 : parseFloat(b), this.PH = !!(c.indexOf("%") + 1), this.repeat = c != l ? this.PH ? parseFloat(c) / 100 : parseFloat(c) : 0)
  };
  function tc(a, b) {
    z.lang.Ga.call(this);
    this.content = a;
    this.map = s;
    b = b || {};
    this.K = {
      width: b.width || 0,
      height: b.height || 0,
      maxWidth: b.maxWidth || 730,
      Da: b.offset || new P(0, 0),
      title: b.title || "",
      UD: b.maxContent || "",
      Xg: b.enableMaximize || t,
      Zr: b.enableAutoPan === t ? t : p,
      mC: b.enableCloseOnClick === t ? t : p,
      margin: b.margin || [10, 10, 40, 10],
      CB: b.collisions || [[10, 10], [10, 10], [10, 10], [10, 10]],
      zX: t,
      AY: b.onClosing || ea(p),
      YJ: t,
      sC: b.enableParano === p ? p : t,
      message: b.message,
      uC: b.enableSearchTool === p ? p : t,
      Ww: b.headerContent || "",
      nC: b.enableContentScroll || t
    };
    if (0 != this.K.width && (220 > this.K.width && (this.K.width = 220), 730 < this.K.width)) this.K.width = 730;
    if (0 != this.K.height && (60 > this.K.height && (this.K.height = 60), 650 < this.K.height)) this.K.height = 650;
    if (0 != this.K.maxWidth && (220 > this.K.maxWidth && (this.K.maxWidth = 220), 730 < this.K.maxWidth)) this.K.maxWidth = 730;
    this.ce = t;
    this.ri = H.sa;
    this.sb = s;
    var c = this;
    K.load("infowindow",
      function () {
        c.jb()
      })
  }
  z.lang.wa(tc, z.lang.Ga, "InfoWindow");
  z.extend(tc.prototype, {
    setWidth: function (a) {
      !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.K.width = a)
    },
    setHeight: function (a) {
      !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)), this.K.height = a)
    },
    hN: function (a) {
      !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.K.maxWidth = a)
    },
    Dc: function (a) {
      this.K.title = a
    },
    getTitle: function () {
      return this.K.title
    },
    cd: ca("content"),
    jk: x("content"),
    ot: function (a) {
      this.K.UD = a + ""
    },
    ie: u(),
    Zr: function () {
      this.K.Zr = p
    },
    disableAutoPan: function () {
      this.K.Zr = t
    },
    enableCloseOnClick: function () {
      this.K.mC = p
    },
    disableCloseOnClick: function () {
      this.K.mC = t
    },
    Xg: function () {
      this.K.Xg = p
    },
    vw: function () {
      this.K.Xg = t
    },
    show: function () {
      this.Sa = p
    },
    aa: function () {
      this.Sa = t
    },
    close: function () {
      this.aa()
    },
    px: function () {
      this.ce = p
    },
    restore: function () {
      this.ce = t
    },
    Nc: function () {
      return this.Za()
    },
    Za: ea(t),
    ja: function () {
      if (this.sb && this.sb.ja) return this.sb.ja()
    },
    cj: function () {
      return this.K.Da
    }
  });
  Oa.prototype.ad = function (a, b) {
    if (a instanceof tc && b instanceof J) {
      var c = this.$;
      c.nm ? c.nm.ua(b) : (c.nm = new V(b, {
        icon: new qc(H.sa + "blank.gif", {
          width: 1,
          height: 1
        }),
        offset: new P(0, 0),
        clickable: t
      }), c.nm.GQ = 1);
      this.Pa(c.nm);
      c.nm.ad(a)
    }
  };
  Oa.prototype.Xc = function () {
    var a = this.$.rb || this.$.dl;
    a && a.sb && a.sb.Xc()
  };
  ib.prototype.ad = function (a) {
    this.map && (this.map.Xc(), a.Sa = p, this.map.$.dl = a, a.sb = this, z.lang.Ga.call(a, a.ea))
  };
  ib.prototype.Xc = function () {
    this.map && this.map.$.dl && (this.map.$.dl.Sa = t, z.lang.tw(this.map.$.dl.ea), this.map.$.dl = s)
  };
  function uc(a, b) {
    ib.call(this);
    this.content = a;
    this.ba = this.map = s;
    b = b || {};
    this.K = {
      width: 0,
      Da: b.offset || new P(0, 0),
      wp: {
        backgroundColor: "#fff",
        border: "1px solid #f00",
        padding: "1px",
        whiteSpace: "nowrap",
        font: "12px " + H.fontFamily,
        zIndex: "80",
        MozUserSelect: "none"
      },
      position: b.position || s,
      Yi: b.enableMassClear === t ? t : p,
      cf: p
    };
    0 > this.K.width && (this.K.width = 0);
    Hb(b.enableClicking) && (this.K.cf = b.enableClicking);
    this.point = this.K.position;
    var c = this;
    K.load("marker",
      function () {
        c.jb()
      })
  }
  z.lang.wa(uc, ib, "Label");
  z.extend(uc.prototype, {
    ja: function () {
      return this.Tu ? this.Tu.ja() : this.point
    },
    ua: function (a) {
      a instanceof J && !this.Lw() && (this.point = this.K.position = new J(a.lng, a.lat))
    },
    cd: ca("content"),
    CE: function (a) {
      0 <= a && 1 >= a && (this.K.opacity = a)
    },
    Ld: function (a) {
      a instanceof P && (this.K.Da = new P(a.width, a.height))
    },
    cj: function () {
      return this.K.Da
    },
    Md: function (a) {
      a = a || {};
      this.K.wp = z.extend(this.K.wp, a)
    },
    mi: function (a) {
      return this.Md(a)
    },
    Dc: function (a) {
      this.K.title = a || ""
    },
    getTitle: function () {
      return this.K.title
    },
    gN: function (a) {
      this.point = (this.Tu = a) ? this.K.position = a.ja() : this.K.position = s
    },
    Lw: function () {
      return this.Tu || s
    },
    jk: x("content")
  });
  function vc(a, b) {
    if (0 !== arguments.length) {
      ib.apply(this, arguments);
      b = b || {};
      this.K = {
        fb: a,
        opacity: b.opacity || 1,
        Po: b.imageURL || "",
        Qr: b.displayOnMinLevel || 1,
        Yi: b.enableMassClear === t ? t : p,
        Pr: b.displayOnMaxLevel || 19,
        d_: b.stretch || t
      };
      0 === b.opacity && (this.K.opacity = 0);
      var c = this;
      K.load("groundoverlay",
        function () {
          c.jb()
        })
    }
  }
  z.lang.wa(vc, ib, "GroundOverlay");
  z.extend(vc.prototype, {
    setBounds: function (a) {
      this.K.fb = a
    },
    getBounds: function () {
      return this.K.fb
    },
    setOpacity: function (a) {
      this.K.opacity = a
    },
    getOpacity: function () {
      return this.K.opacity
    },
    setImageURL: function (a) {
      this.K.Po = a
    },
    getImageURL: function () {
      return this.K.Po
    },
    setDisplayOnMinLevel: function (a) {
      this.K.Qr = a
    },
    getDisplayOnMinLevel: function () {
      return this.K.Qr
    },
    setDisplayOnMaxLevel: function (a) {
      this.K.Pr = a
    },
    getDisplayOnMaxLevel: function () {
      return this.K.Pr
    }
  });
  var wc = 3,
    xc = 4;
  function yc() {
    var a = document.createElement("canvas");
    return !(!a.getContext || !a.getContext("2d"))
  }
  function zc(a, b) {
    var c = this;
    yc() && (a === l && aa(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")), "[object Array]" !== Object.prototype.toString.call(a) && aa(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")), b = b || {},
      ib.apply(c, arguments), c.ia = {
        na: a
      },
      c.K = {
        shape: b.shape || wc,
        size: b.size || xc,
        color: b.color || "#fa937e",
        Yi: p
      },
      this.xA = [], this.ne = [], K.load("pointcollection",
        function () {
          for (var a = 0,
            b; b = c.xA[a]; a++) c[b.method].apply(c, b.arguments);
          for (a = 0; b = c.ne[a]; a++) c[b.method].apply(c, b.arguments)
        }))
  }
  z.lang.wa(zc, ib, "PointCollection");
  z.extend(zc.prototype, {
    initialize: function (a) {
      this.xA && this.xA.push({
        method: "initialize",
        arguments: arguments
      })
    },
    setPoints: function (a) {
      this.ne && this.ne.push({
        method: "setPoints",
        arguments: arguments
      })
    },
    setStyles: function (a) {
      this.ne && this.ne.push({
        method: "setStyles",
        arguments: arguments
      })
    },
    clear: function () {
      this.ne && this.ne.push({
        method: "clear",
        arguments: arguments
      })
    },
    remove: function () {
      this.ne && this.ne.push({
        method: "remove",
        arguments: arguments
      })
    }
  });
  var Ac = new qc(H.sa + "marker_red_sprite.png", new P(19, 25), {
    anchor: new P(10, 25),
    infoWindowAnchor: new P(10, 0)
  }),
    Bc = new qc(H.sa + "marker_red_sprite.png", new P(20, 11), {
      anchor: new P(6, 11),
      imageOffset: new P(- 19, -13)
    });
  function V(a, b) {
    ib.call(this);
    b = b || {};
    this.point = a;
    this.Up = this.map = s;
    this.K = {
      Da: b.offset || new P(0, 0),
      ue: b.icon || Ac,
      Dk: Bc,
      title: b.title || "",
      label: s,
      dJ: b.baseZIndex || 0,
      cf: p,
      x5: t,
      GD: t,
      Yi: b.enableMassClear === t ? t : p,
      Wb: t,
      LM: b.raiseOnDrag === p ? p : t,
      TM: t,
      Gd: b.draggingCursor || H.Gd,
      rotation: b.rotation || 0
    };
    b.icon && !b.shadow && (this.K.Dk = s);
    b.enableDragging && (this.K.Wb = b.enableDragging);
    Hb(b.enableClicking) && (this.K.cf = b.enableClicking);
    var c = this;
    K.load("marker",
      function () {
        c.jb()
      })
  }
  V.hu = mc.pk(- 90) + 1E6;
  V.BF = V.hu + 1E6;
  z.lang.wa(V, ib, "Marker");
  z.extend(V.prototype, {
    Tb: function (a) {
      if (a instanceof qc || a instanceof rc) this.K.ue = a
    },
    Eo: function () {
      return this.K.ue
    },
    Ux: function (a) {
      a instanceof qc && (this.K.Dk = a)
    },
    getShadow: function () {
      return this.K.Dk
    },
    Dm: function (a) {
      this.K.label = a || s
    },
    WC: function () {
      return this.K.label
    },
    Wb: function () {
      this.K.Wb = p
    },
    VB: function () {
      this.K.Wb = t
    },
    ja: x("point"),
    ua: function (a) {
      a instanceof J && (this.point = new J(a.lng, a.lat))
    },
    ni: function (a, b) {
      this.K.GD = !!a;
      a && (this.WF = b || 0)
    },
    Dc: function (a) {
      this.K.title = a + ""
    },
    getTitle: function () {
      return this.K.title
    },
    Ld: function (a) {
      a instanceof P && (this.K.Da = a)
    },
    cj: function () {
      return this.K.Da
    },
    Cm: ca("Up"),
    np: function (a) {
      this.K.rotation = a
    },
    GK: function () {
      return this.K.rotation
    }
  });
  function Cc(a) {
    this.options = a || {};
    this.EY = this.options.paneName || "labelPane";
    this.zIndex = this.options.zIndex || 0;
    this.PU = this.options.contextType || "2d"
  }
  Cc.prototype = new mc;
  Cc.prototype.initialize = function (a) {
    this.M = a;
    var b = this.canvas = document.createElement("canvas"),
      c = this.canvas.getContext(this.PU);
    b.style.cssText = "position:absolute;left:0;top:0;z-index:" + this.zIndex + ";";
    Dc(this);
    Ec(c);
    a.getPanes()[this.EY].appendChild(b);
    var e = this;
    a.addEventListener("resize",
      function () {
        Dc(e);
        Ec(c);
        e.jb()
      });
    return this.canvas
  };
  function Dc(a) {
    var b = a.M.Hb(),
      a = a.canvas;
    a.width = b.width;
    a.height = b.height;
    a.style.width = a.width + "px";
    a.style.height = a.height + "px"
  }
  function Ec(a) {
    var b = (window.devicePixelRatio || 1) / (a.cU || a.s5 || a.Q3 || a.R3 || a.V3 || a.cU || 1),
      c = a.canvas.width,
      e = a.canvas.height;
    a.canvas.width = c * b;
    a.canvas.height = e * b;
    a.canvas.style.width = c + "px";
    a.canvas.style.height = e + "px";
    a.scale(b, b)
  }
  Cc.prototype.draw = function () {
    var a = this,
      b = arguments;
    clearTimeout(a.s_);
    a.s_ = setTimeout(function () {
      a.jb.apply(a, b)
    },
      15)
  };
  fa = Cc.prototype;
  fa.jb = function () {
    var a = this.M;
    this.canvas.style.left = -a.offsetX + "px";
    this.canvas.style.top = -a.offsetY + "px";
    this.dispatchEvent("draw");
    this.options.update && this.options.update.apply(this, arguments)
  };
  fa.Ta = x("canvas");
  fa.show = function () {
    this.canvas || this.M.Pa(this);
    this.canvas.style.display = "block"
  };
  fa.aa = function () {
    this.canvas.style.display = "none"
  };
  fa.rp = function (a) {
    this.canvas.style.zIndex = a
  };
  fa.pk = x("zIndex");
  function Fc(a, b) {
    oc.call(this, b);
    b = b || {};
    this.K.lg = b.fillOpacity ? b.fillOpacity : 0.65;
    this.K.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
    this.je(a);
    var c = this;
    K.load("poly",
      function () {
        c.jb()
      })
  }
  z.lang.wa(Fc, oc, "Polygon");
  z.extend(Fc.prototype, {
    je: function (a, b) {
      this.Qn = oc.Hw(a).slice(0);
      var c = oc.Hw(a).slice(0);
      1 < c.length && c.push(new J(c[0].lng, c[0].lat));
      oc.prototype.je.call(this, c, b)
    },
    Fm: function (a, b) {
      this.Qn[a] && (this.Qn[a] = new J(b.lng, b.lat), this.na[a] = new J(b.lng, b.lat), 0 == a && !this.na[0].oc(this.na[this.na.length - 1]) && (this.na[this.na.length - 1] = new J(b.lng, b.lat)), this.th())
    },
    Re: function () {
      var a = this.Qn;
      0 == a.length && (a = this.na);
      return a
    }
  });
  function Gc(a, b) {
    oc.call(this, b);
    this.gr(a);
    var c = this;
    K.load("poly",
      function () {
        c.jb()
      })
  }
  z.lang.wa(Gc, oc, "Polyline");
  function Hc(a, b, c) {
    this.point = a;
    this.Ca = Math.abs(b);
    Fc.call(this, [], c)
  }
  Hc.cE = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
  z.lang.wa(Hc, Fc, "Circle");
  z.extend(Hc.prototype, {
    initialize: function (a) {
      this.map = a;
      this.na = this.Gu(this.point, this.Ca);
      this.th();
      return s
    },
    Bb: x("point"),
    pf: function (a) {
      a && (this.point = a)
    },
    EK: x("Ca"),
    qf: function (a) {
      this.Ca = Math.abs(a)
    },
    Gu: function (a, b) {
      if (!a || !b || !this.map) return [];
      for (var c = [], e = b / 6378800, f = Math.PI / 180 * a.lat, g = Math.PI / 180 * a.lng, i = 0; 360 > i; i += 9) {
        var k = Math.PI / 180 * i,
          m = Math.asin(Math.sin(f) * Math.cos(e) + Math.cos(f) * Math.sin(e) * Math.cos(k)),
          k = new J(((g - Math.atan2(Math.sin(k) * Math.sin(e) * Math.cos(f), Math.cos(e) - Math.sin(f) * Math.sin(m)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI), m * (180 / Math.PI));
        c.push(k)
      }
      e = c[0];
      c.push(new J(e.lng, e.lat));
      return c
    }
  });
  var Ic = {};
  function Jc(a) {
    this.map = a;
    this.mm = [];
    this.Uf = [];
    this.xg = [];
    this.rU = 300;
    this.jE = 0;
    this.rg = {};
    this.Si = {};
    this.tk = 0;
    this.AD = p;
    this.eV = {};
    this.An = this.dq(1);
    this.hg = this.dq(2);
    this.nl = this.dq(3);
    this.Hg = this.dq(4);
    a.platform.appendChild(this.An);
    a.platform.appendChild(this.hg);
    a.platform.appendChild(this.nl);
    a.platform.appendChild(this.Hg);
    var b = 256 * Math.pow(2, 15),
      c = 3 * b,
      a = S.Gb(new J(180, 0)).lng,
      c = c - a,
      b = -3 * b,
      e = S.Gb(new J(- 180, 0)).lng;
    this.eA = a;
    this.fA = e;
    this.bA = c + (e - b);
    this.tH = a - e
  }
  D.We(function (a) {
    var b = new Jc(a);
    b.xa();
    a.oh = b
  });
  z.extend(Jc.prototype, {
    xa: function () {
      var a = this,
        b = a.map;
      b.addEventListener("loadcode",
        function () {
          a.Vo()
        });
      b.addEventListener("addtilelayer",
        function (b) {
          a.Me(b)
        });
      b.addEventListener("removetilelayer",
        function (b) {
          a.Tf(b)
        });
      b.addEventListener("setmaptype",
        function (b) {
          a.wg(b)
        });
      b.addEventListener("zoomstartcode",
        function (b) {
          a.Kc(b)
        });
      b.addEventListener("setcustomstyles",
        function (b) {
          a.nt(b.target);
          a.Rf(p)
        });
      b.addEventListener("initindoorlayer",
        function (b) {
          a.wD(b)
        })
    },
    Vo: function () {
      var a = this;
      if (z.fa.ma) try {
        document.execCommand("BackgroundImageCache", t, p)
      } catch (b) { }
      this.loaded || a.dx();
      a.Rf();
      this.loaded || (this.loaded = p, K.load("tile",
        function () {
          a.aP()
        }))
    },
    wD: function (a) {
      this.Rt = new Kc(this);
      this.Rt.Me(new Lc(this.map, this.Rt, a.Te))
    },
    dx: function () {
      for (var a = this.map.va().$e, b = 0; b < a.length; b++) {
        var c = new Mc;
        z.extend(c, a[b]);
        this.mm.push(c);
        c.xa(this.map, this.An)
      }
      this.nt()
    },
    dq: function (a) {
      var b = O("div");
      b.style.position = "absolute";
      b.style.overflow = "visible";
      b.style.left = b.style.top = "0";
      b.style.zIndex = a;
      return b
    },
    vf: function () {
      this.tk--;
      var a = this;
      this.AD && (this.map.dispatchEvent(new Q("onfirsttileloaded")), this.AD = t);
      0 == this.tk && (this.Bi && (clearTimeout(this.Bi), this.Bi = s), this.Bi = setTimeout(function () {
        if (a.tk == 0) {
          a.map.dispatchEvent(new Q("ontilesloaded"));
          a.AD = p
        }
        a.Bi = s
      },
        80))
    },
    hD: function (a, b) {
      return "TILE-" + b.ea + "-" + a[0] + "-" + a[1] + "-" + a[2]
    },
    Zw: function (a) {
      var b = a.Jb;
      b && Ab(b) && b.parentNode.removeChild(b);
      delete this.rg[a.name];
      a.loaded || (Nc(a), a.Jb = s, a.om = s)
    },
    OK: function (a, b, c) {
      var e = this.map,
        f = e.va(),
        g = e.Va,
        i = e.fc,
        k = f.dc(g),
        m = this.pW(),
        n = m[0],
        o = m[1],
        q = m[2],
        v = m[3],
        w = m[4],
        c = "undefined" != typeof c ? c : 0,
        f = f.Id(),
        m = e.ea.replace(/^TANGRAM_/, "");
      for (this.Be ? this.Be.length = 0 : this.Be = []; n < q; n++) for (var y = o; y < v; y++) {
        var A = n,
          B = y;
        this.Be.push([A, B]);
        A = m + "_" + b + "_" + A + "_" + B + "_" + g;
        this.eV[A] = A
      }
      this.Be.sort(function (a) {
        return function (b, c) {
          return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
        }
      }([w[0] - 1, w[1] - 1]));
      i = [Math.round(- i.lng / k), Math.round(i.lat / k)];
      n = -e.offsetY + e.height / 2;
      a.style.left = -e.offsetX + e.width / 2 + "px";
      a.style.top = n + "px";
      this.Ne ? this.Ne.length = 0 : this.Ne = [];
      n = 0;
      for (e = a.childNodes.length; n < e; n++) y = a.childNodes[n],
        y.Dq = t,
        this.Ne.push(y);
      if (n = this.rm) for (var C in n) delete n[C];
      else this.rm = {};
      this.Oe ? this.Oe.length = 0 : this.Oe = [];
      n = 0;
      for (e = this.Be.length; n < e; n++) {
        C = this.Be[n][0];
        k = this.Be[n][1];
        y = 0;
        for (o = this.Ne.length; y < o; y++) if (q = this.Ne[y], q.id == m + "_" + b + "_" + C + "_" + k + "_" + g) {
          q.Dq = p;
          this.rm[q.id] = q;
          break
        }
      }
      n = 0;
      for (e = this.Ne.length; n < e; n++) q = this.Ne[n],
        q.Dq || this.Oe.push(q);
      this.UE = [];
      y = (f + c) * this.map.U.devicePixelRatio;
      n = 0;
      for (e = this.Be.length; n < e; n++) C = this.Be[n][0],
        k = this.Be[n][1],
        v = C * f + i[0] - c / 2,
        w = (- 1 - k) * f + i[1] - c / 2,
        A = m + "_" + b + "_" + C + "_" + k + "_" + g,
        o = this.rm[A],
        q = s,
        o ? (q = o.style, q.left = v + "px", q.top = w + "px", o.jn || this.UE.push([C, k, o])) : (0 < this.Oe.length ? (o = this.Oe.shift(), o.getContext("2d").clearRect(- c / 2, -c / 2, y, y), q = o.style) : (o = document.createElement("canvas"), q = o.style, q.position = "absolute", q.width = f + c + "px", q.height = f + c + "px", this.$X() && (q.WebkitTransform = "scale(1.001)"), o.setAttribute("width", y), o.setAttribute("height", y), a.appendChild(o)), o.id = A, q.left = v + "px", q.top = w + "px", -1 < A.indexOf("bg") && (v = "#F3F1EC", this.map.U.aU && (v = this.map.U.aU), q.background = v ? v : ""), this.UE.push([C, k, o])),
        o.style.visibility = "";
      n = 0;
      for (e = this.Oe.length; n < e; n++) this.Oe[n].style.visibility = "hidden";
      return this.UE
    },
    $X: function () {
      return /M040/i.test(navigator.userAgent)
    },
    pW: function () {
      var a = this.map,
        b = a.va(),
        c = b.TK(a.Va),
        e = a.fc,
        f = Math.ceil(e.lng / c),
        g = Math.ceil(e.lat / c),
        b = b.Id(),
        c = [f, g, (e.lng - f * c) / c * b, (e.lat - g * c) / c * b];
      return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
    },
    YZ: function (a, b, c, e) {
      var f = this;
      f.E1 = b;
      var g = this.map.va(),
        i = f.hD(a, c),
        k = g.Id(),
        b = [a[0] * k + b[0], (- 1 - a[1]) * k + b[1]],
        m = this.rg[i];
      if (this.map.va() !== ab && this.map.va() !== Va) {
        var n = this.Wv(a[0], a[2]).offsetX;
        b[0] += n;
        b.Y0 = n
      }
      m && m.Jb ? (yb(m.Jb, b), e && (e = new R(a[0], a[1]), g = this.map.U.we ? this.map.U.we.style : "normal", e = c.getTilesUrl(e, a[2], g), m.loaded = t, Pc(m, e)), m.loaded ? this.vf() : Qc(m,
        function () {
          f.vf()
        })) : (m = this.Si[i]) && m.Jb ? (c.hc.insertBefore(m.Jb, c.hc.lastChild), this.rg[i] = m, yb(m.Jb, b), e && (e = new R(a[0], a[1]), g = this.map.U.we ? this.map.U.we.style : "normal", e = c.getTilesUrl(e, a[2], g), m.loaded = t, Pc(m, e)), m.loaded ? this.vf() : Qc(m,
          function () {
            f.vf()
          })) : (m = k * Math.pow(2, g.Xh() - a[2]), new J(a[0] * m, a[1] * m), e = new R(a[0], a[1]), g = this.map.U.we ? this.map.U.we.style : "normal", e = c.getTilesUrl(e, a[2], g), m = new Rc(this, e, b, a, c), Qc(m,
            function () {
              f.vf()
            }), m.zn(), this.rg[i] = m)
    },
    vf: function () {
      this.tk--;
      var a = this;
      0 == this.tk && (this.Bi && (clearTimeout(this.Bi), this.Bi = s), this.Bi = setTimeout(function () {
        if (a.tk == 0) {
          a.map.dispatchEvent(new Q("ontilesloaded"));
          if (wa) {
            if (sa && ta && ua) {
              var b = eb(),
                c = a.map.Hb();
              setTimeout(function () {
                Ta(5030, {
                  load_script_time: ta - sa,
                  load_tiles_time: b - ua,
                  map_width: c.width,
                  map_height: c.height,
                  map_size: c.width * c.height
                })
              },
                1E4);
              D.Sp("cus.fire", "time", {
                z_imgfirstloaded: b - ua
              })
            }
            wa = t
          }
        }
        a.Bi = s
      },
        80))
    },
    hD: function (a, b) {
      return this.map.va() === Sa ? "TILE-" + b.ea + "-" + this.map.bw + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.ea + "-" + a[0] + "-" + a[1] + "-" + a[2]
    },
    Zw: function (a) {
      var b = a.Jb;
      b && (Sc(b), Ab(b) && b.parentNode.removeChild(b));
      delete this.rg[a.name];
      a.loaded || (Sc(b), Nc(a), a.Jb = s, a.om = s)
    },
    Wv: function (a, b) {
      for (var c = 0,
        e = 6 * Math.pow(2, b - 3), f = e / 2 - 1, g = -e / 2; a > f;) a -= e,
          c -= this.bA;
      for (; a < g;) a += e,
        c += this.bA;
      c = Math.round(c / Math.pow(2, 18 - b));
      return {
        offsetX: c,
        Pl: a
      }
    },
    tU: function (a) {
      for (var b = a.lng; b > this.eA;) b -= this.tH;
      for (; b < this.fA;) b += this.tH;
      a.lng = b;
      return a
    },
    uU: function (a, b) {
      for (var c = 256 * Math.pow(2, 18 - b), e = Math.floor(this.eA / c), f = Math.floor(this.fA / c), c = Math.floor(this.bA / c), g = [], i = 0; i < a.length; i++) {
        var k = a[i],
          m = k[0],
          k = k[1];
        if (m >= e) {
          var m = m + c,
            n = "id_" + m + "_" + k + "_" + b;
          a[n] || (a[n] = p, g.push([m, k]))
        } else m <= f && (m -= c, n = "id_" + m + "_" + k + "_" + b, a[n] || (a[n] = p, g.push([m, k])))
      }
      for (i = 0; i < g.length; i++) a.push(g[i]);
      return a
    },
    Rf: function (a) {
      if (!this.map.U.Xi) {
        var b = this;
        if (b.map.va() == Sa) K.load("coordtrans",
          function () {
            b.map.Vb || (b.map.Vb = Sa.ik(b.map.Tg), b.map.bw = Sa.qK(b.map.Vb));
            b.vH()
          },
          p);
        else {
          if (a && a) for (var c in this.Si) delete this.Si[c];
          b.vH(a)
        }
      }
    },
    vH: function (a) {
      var b = this.mm.concat(this.Uf),
        c = b.length,
        e = this.map,
        f = e.va(),
        g = e.fc,
        i = e.width,
        i = e.va().dc(e.Va) * i,
        i = this.PX(g.lng - i / 2, g.lng + i / 2);
      this.map.va() !== ab && this.map.va() !== Va && (g = this.tU(g));
      for (var k = 0; k < c; k++) {
        var m = b[k];
        if (m.gc && e.Va < m.gc) break;
        if (m.Vv) {
          var n = this.hc = m.hc;
          if (a) {
            var o = n;
            if (o && o.childNodes) for (var q = o.childNodes.length,
              v = q - 1; 0 <= v; v--) q = o.childNodes[v],
                o.removeChild(q),
                q = s
          }
          if (this.map.Od()) {
            this.hg.style.display = "block";
            n.style.display = "none";
            this.map.dispatchEvent(new Q("vectorchanged"), {
              isvector: p
            });
            continue
          } else n.style.display = "block",
            this.hg.style.display = "none",
            this.map.dispatchEvent(new Q("vectorchanged"), {
              isvector: t
            })
        }
        if (!m.X0 && !(m.ix && !this.map.Od() || m.tL && this.map.Od())) {
          e = this.map;
          f = e.va();
          n = f.nk();
          q = e.Va;
          g = e.fc;
          f == Sa && g.oc(new J(0, 0)) && (g = e.fc = n.bi(e.pe, e.Vb));
          var w = f.dc(q),
            n = f.TK(q),
            o = Math.ceil(g.lng / n),
            y = Math.ceil(g.lat / n),
            A = f.Id(),
            n = [o, y, (g.lng - o * n) / n * A, (g.lat - y * n) / n * A],
            y = i ? 1.5 * (e.width / 2) : e.width / 2,
            v = n[0] - Math.ceil((y - n[2]) / A),
            o = n[1] - Math.ceil((e.height / 2 - n[3]) / A),
            y = n[0] + Math.ceil((y + n[2]) / A),
            B = 0;
          f === Sa && 15 == e.ka() && (B = 1);
          f = n[1] + Math.ceil((e.height / 2 + n[3]) / A) + B;
          this.ZI = new J(g.lng, g.lat);
          var C = this.rg,
            A = -this.ZI.lng / w,
            B = this.ZI.lat / w,
            g = [Math.ceil(A), Math.ceil(B)],
            w = e.ka(),
            F;
          for (F in C) {
            var E = C[F],
              G = E.info; (G[2] != w || G[2] == w && (v > G[0] || y <= G[0] || o > G[1] || f <= G[1])) && this.Zw(E)
          }
          C = -e.offsetX + e.width / 2;
          E = -e.offsetY + e.height / 2;
          m.hc && (m.hc.style.left = Math.ceil(A + C) - g[0] + "px", m.hc.style.top = Math.ceil(B + E) - g[1] + "px", m.hc.style.WebkitTransform = "translate3d(0,0,0)");
          A = [];
          for (e.aB = []; v < y; v++) for (B = o; B < f; B++) A.push([v, B]),
            e.aB.push({
              x: v,
              y: B
            });
          this.map.va() !== ab && this.map.va() !== Va && (A = this.uU(A, q));
          A.sort(function (a) {
            return function (b, c) {
              return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
            }
          }([n[0] - 1, n[1] - 1]));
          q = A.length;
          this.tk += q;
          for (v = 0; v < q; v++) this.YZ([A[v][0], A[v][1], w], g, m, a)
        }
      }
    },
    PX: function (a, b) {
      return a < this.fA || b > this.eA
    },
    Me: function (a) {
      var b = this,
        c = a.target;
      b.map.Od();
      c.Nm && this.map.Me(c.Nm);
      if (c.ix) {
        for (a = 0; a < b.xg.length; a++) if (b.xg[a] == c) return;
        K.load("vector",
          function () {
            c.xa(b.map, b.hg);
            b.xg.push(c)
          },
          p)
      } else {
        for (a = 0; a < b.Uf.length; a++) if (b.Uf[a] == c) return;
        c.xa(this.map, this.nl);
        b.Uf.push(c)
      }
    },
    Tf: function (a) {
      a = a.target;
      this.map.Od();
      a.Nm && this.map.Tf(a.Nm);
      if (a.ix) for (var b = 0,
        c = this.xg.length; b < c; b++) a == this.xg[b] && this.xg.splice(b, 1);
      else {
        b = 0;
        for (c = this.Uf.length; b < c; b++) a == this.Uf[b] && this.Uf.splice(b, 1)
      }
      a.remove()
    },
    wg: function () {
      for (var a = this.mm,
        b = 0,
        c = a.length; b < c; b++) a[b].remove();
      delete this.hc;
      this.mm = [];
      this.Si = this.rg = {};
      this.dx();
      this.Rf()
    },
    Kc: function () {
      var a = this;
      a.vd && z.R.aa(a.vd);
      setTimeout(function () {
        a.Rf();
        a.map.dispatchEvent(new Q("onzoomend"))
      },
        10)
    },
    l5: u(),
    nt: function (a) {
      var b = this.map.va();
      if (!this.map.Od() && (a ? this.map.U.g_ = a : a = this.map.U.g_, a)) for (var c = s,
        c = "2" == D.Qt ? [D.url.proto + D.url.domain.main_domain_cdn.other[0] + "/"] : [D.url.proto + D.url.domain.main_domain_cdn.baidu[0] + "/", D.url.proto + D.url.domain.main_domain_cdn.baidu[1] + "/", D.url.proto + D.url.domain.main_domain_cdn.baidu[2] + "/"], e = 0, f; f = this.mm[e]; e++) if (f.TZ == p) {
          b.m.pc = 18;
          f.getTilesUrl = function (b, e) {
            var f = b.x,
              f = this.map.oh.Wv(f, e).Pl,
              m = b.y,
              n = Sb("normal"),
              o = 1;
            this.map.$w() && (o = 2);
            n = "customimage/tile?&x=" + f + "&y=" + m + "&z=" + e + "&udt=" + n + "&scale=" + o + "&ak=" + qa;
            n = a.styleStr ? n + ("&styles=" + encodeURIComponent(a.styleStr)) : n + ("&customid=" + a.style);
            // return c[Math.abs(f + m) % c.length] + n
            if ("undefined" != typeof tilesReturnObj) {
              return tilesReturnObj.returnVal + "?styleType=2&level=" + e + "&pointX=" + f + "&pointY=" + m + "&supplier=" + tilesReturnObj.supplier + "&styles=" + encodeURIComponent(a.styleStr)
            } else {
              return c[Math.abs(f + m) % c.length] + n
            }
          };
          break
        }
    }
  });
  function Rc(a, b, c, e, f) {
    this.om = a;
    this.position = c;
    this.su = [];
    this.name = a.hD(e, f);
    this.info = e;
    this.zI = f.Ns();
    e = O("img");
    zb(e);
    e.jK = t;
    var g = e.style,
      a = a.map.va();
    g.position = "absolute";
    g.border = "none";
    g.width = a.Id() + "px";
    g.height = a.Id() + "px";
    g.left = c[0] + "px";
    g.top = c[1] + "px";
    g.maxWidth = "none";
    this.Jb = e;
    this.src = b;
    Tc && (this.Jb.style.opacity = 0);
    var i = this;
    this.Jb.onload = function () {
      D.hY.OP();
      i.loaded = p;
      if (i.om) {
        var a = i.om,
          b = a.Si;
        if (!b[i.name]) {
          a.jE++;
          b[i.name] = i
        }
        if (i.Jb && !Ab(i.Jb) && f.hc) {
          f.hc.appendChild(i.Jb);
          if (z.fa.ma <= 6 && z.fa.ma > 0 && i.zI) i.Jb.style.cssText = i.Jb.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + i.src + '",sizingMethod=scale);')
        }
        var c = a.jE - a.rU,
          e;
        for (e in b) {
          if (c <= 0) break;
          if (!a.rg[e]) {
            b[e].om = s;
            var g = b[e].Jb;
            if (g && g.parentNode) {
              g.parentNode.removeChild(g);
              Sc(g)
            }
            g = s;
            b[e].Jb = s;
            delete b[e];
            a.jE--;
            c--
          }
        }
        Tc && new ub({
          Hc: 20,
          duration: 200,
          za: function (a) {
            if (i.Jb && i.Jb.style) i.Jb.style.opacity = a * 1
          },
          finish: function () {
            i.Jb && i.Jb.style && delete i.Jb.style.opacity
          }
        });
        Nc(i)
      }
    };
    this.Jb.onerror = function () {
      Nc(i);
      if (i.om) {
        var a = i.om.map.va();
        if (a.m.xC) {
          i.error = p;
          i.Jb.src = a.m.xC;
          i.Jb && !Ab(i.Jb) && f.hc.appendChild(i.Jb)
        }
      }
    };
    e = s
  }
  function Qc(a, b) {
    a.su.push(b)
  }
  Rc.prototype.zn = function () {
    this.Jb.src = 0 < z.fa.ma && 6 >= z.fa.ma && this.zI ? H.sa + "blank.gif" : "" !== this.src && this.Jb.src == this.src ? this.src + "&t = " + Date.now() : this.src
  };
  function Nc(a) {
    for (var b = 0; b < a.su.length; b++) a.su[b]();
    a.su.length = 0
  }
  function Sc(a) {
    if (a) {
      a.onload = a.onerror = s;
      var b = a.attributes,
        c, e, f;
      if (b) {
        e = b.length;
        for (c = 0; c < e; c += 1) f = b[c].name,
          $a(a[f]) && (a[f] = s)
      }
      if (b = a.children) {
        e = b.length;
        for (c = 0; c < e; c += 1) Sc(a.children[c])
      }
    }
  }
  function Pc(a, b) {
    a.src = b;
    a.zn()
  }
  var Tc = !z.fa.ma || 8 < z.fa.ma;
  function Mc(a) {
    this.Te = a || {};
    this.RU = this.Te.copyright || s;
    this.H_ = this.Te.transparentPng || t;
    this.Vv = this.Te.baseLayer || t;
    this.zIndex = this.Te.zIndex || 0;
    this.ea = Mc.xR++
  }
  Mc.xR = 0;
  z.lang.wa(Mc, z.lang.Ga, "TileLayer");
  z.extend(Mc.prototype, {
    xa: function (a, b) {
      this.Vv && (this.zIndex = -100);
      this.map = a;
      if (!this.hc) {
        var c = O("div"),
          e = c.style;
        e.position = "absolute";
        e.overflow = "visible";
        e.zIndex = this.zIndex;
        e.left = Math.ceil(- a.offsetX + a.width / 2) + "px";
        e.top = Math.ceil(- a.offsetY + a.height / 2) + "px";
        b.appendChild(c);
        this.hc = c
      }
    },
    remove: function () {
      this.hc && this.hc.parentNode && (this.hc.innerHTML = "", this.hc.parentNode.removeChild(this.hc));
      delete this.hc
    },
    Ns: x("H_"),
    getTilesUrl: function (a, b) {
      if (this.map.va() !== ab && this.map.va() !== Va) var c = this.map.oh.Wv(a.x, b).Pl;
      var e = "";
      this.Te.tileUrlTemplate && (e = this.Te.tileUrlTemplate.replace(/\{X\}/, c), e = e.replace(/\{Y\}/, a.y), e = e.replace(/\{Z\}/, b));
      return e
    },
    Xl: x("RU"),
    va: function () {
      return this.Db || Pa
    }
  });
  function Uc(a) {
    Mc.call(this, a);
    this.m = a || {};
    this.tL = p;
    if (this.m.predictDate) {
      if (1 > this.m.predictDate.weekday || 7 < this.m.predictDate.weekday) this.m.predictDate = 1;
      if (0 > this.m.predictDate.hour || 23 < this.m.predictDate.hour) this.m.predictDate.hour = 0
    }
    this.yT = D.url.proto + D.url.domain.traffic + "/traffic/"
  }
  Uc.prototype = new Mc;
  Uc.prototype.xa = function (a, b) {
    Mc.prototype.xa.call(this, a, b);
    this.M = a
  };
  Uc.prototype.Ns = ea(p);
  Uc.prototype.getTilesUrl = function (a, b) {
    var c = "";
    this.m.predictDate ? c = "HistoryService?day=" + (this.m.predictDate.weekday - 1) + "&hour=" + this.m.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&", c += "label=web2D&v=016&");
    var c = this.yT + c + "level=" + b + "&x=" + a.x + "&y=" + a.y,
      e = 1;
    this.M.$w() && (e = 2);
    return (c + "&scaler=" + e).replace(/-(\d+)/gi, "M$1")
  };
  var Vc = [D.url.proto + D.url.domain.TILES_YUN_HOST[0] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[1] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[2] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[3] + "/georender/gss"],
    Wc = D.url.proto + D.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle",
    Xc = 100;
  function pb(a, b) {
    Mc.call(this);
    var c = this;
    this.tL = p;
    try {
      document.createElement("canvas").getContext("2d")
    } catch (e) { }
    Ib(a) ? b = a || {} : (c.hn = a, b = b || {});
    b.geotableId && (c.xf = b.geotableId);
    b.databoxId && (c.hn = b.databoxId);
    var f = D.nd + "geosearch";
    c.$a = {
      DM: b.pointDensity || Xc,
      uX: f + "/detail/",
      vX: f + "/v2/detail/",
      WI: b.age || 36E5,
      gt: b.q || "",
      r_: "png",
      l3: [5, 5, 5, 5],
      dY: {
        backgroundColor: "#FFFFD5",
        borderColor: "#808080"
      },
      mB: b.ak || qa,
      QE: b.tags || "",
      filter: b.filter || "",
      sN: b.sortby || "",
      oD: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0),
      eF: p
    };
    K.load("clayer",
      function () {
        c.Rd()
      })
  }
  pb.prototype = new Mc;
  pb.prototype.xa = function (a, b) {
    Mc.prototype.xa.call(this, a, b);
    this.M = a
  };
  pb.prototype.getTilesUrl = function (a, b) {
    var c = a.x,
      e = a.y,
      f = this.$a,
      c = Vc[Math.abs(c + e) % Vc.length] + "/image?grids=" + c + "_" + e + "_" + b + "&q=" + f.gt + "&tags=" + f.QE + "&filter=" + f.filter + "&sortby=" + f.sN + "&ak=" + this.$a.mB + "&age=" + f.WI + "&page_size=" + f.DM + "&format=" + f.r_;
    f.eF || (f = (1E5 * Math.random()).toFixed(0), c += "&timeStamp=" + f);
    this.xf ? c += "&geotable_id=" + this.xf : this.hn && (c += "&databox_id=" + this.hn);
    return c
  };
  pb.prototype.enableUseCache = function () {
    this.$a.eF = p
  };
  pb.prototype.disableUseCache = function () {
    this.$a.eF = t
  };
  pb.XS = /^point\(|\)$/ig;
  pb.YS = /\s+/;
  pb.$S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  var Yc = {};
  function Zc(a, b) {
    this.jd = a;
    this.dP = 18;
    this.m = {
      fy: 256,
      Pc: new S
    };
    z.extend(this.m, b || {})
  }
  var $c = [0, 0, 0, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0],
    ad = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608],
    bd = [0, 0, 0, 3, 5, 5, 7, 7, 9, 9, 10, 12, 12, 12, 15, 15, 17, 17, 19, 19, 19, 19],
    cd = [0, 0, 0, 256, 256, 512, 256, 512, 256, 512, 256, 256, 512, 1024, 256, 512, 512, 1024, 512, 1024, 2048, 4096];
  Zc.prototype = {
    getName: x("jd"),
    Id: function (a) {
      return "na" === this.jd ? cd[a] : this.m.fy
    },
    js: function (a) {
      return "na" === this.jd ? bd[a] : a
    },
    nk: function () {
      return this.m.Pc
    },
    dc: function (a) {
      return Math.pow(2, this.dP - a)
    },
    ZC: function (a) {
      return "na" === this.jd ? ad[$c[a]] : this.dc(a) * this.Id(a)
    }
  };
  var dd = {
    drawPoly: function (a, b, c, e, f, g) {
      var i = a[1];
      if (i) for (var a = a[6], k = 0; k < i.length; k++) {
        var m = i[k][0],
          n = f.hj(m, "polygon", c, g);
        if (n && n.length) for (var o = i[k][1], q = 0; q < o.length; q++) {
          var v = o[q][1];
          f.Nc(v[0], c) && (v["cache" + c] || (v["cache" + c] = f.um(v[1], c, e, a)), v = v["cache" + c], f.M.Vn(b.canvas.id, v, {
            type: "polygon",
            Ub: m,
            style: n
          }), this.HV(b, v, n, c))
        }
      }
    },
    HV: function (a, b, c, e) {
      c = c[0];
      if (!c.Ub || !(6 < e && (71013 === c.Ub || 71012 === c.Ub || 71011 === c.Ub) || 6 === e && (71011 === c.Ub || 71012 === c.Ub) || 5 === e && (71011 === c.Ub || 71013 === c.Ub) || 5 > e && (71012 === c.Ub || 71013 === c.Ub))) {
        a.fillStyle = c.Bw;
        a.beginPath();
        a.moveTo(b[0], b[1]);
        for (var e = 2,
          f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
        a.closePath();
        c.borderWidth && (a.strokeStyle = c.eo, a.lineWidth = c.borderWidth / 2, a.stroke());
        a.fill()
      }
    },
    drawGaoqingRoadBorder: function (a, b, c, e, f) {
      var g = a[1];
      if (g) for (var a = a[6], i = 0; i < g.length; i++) {
        var k = g[i][0],
          m = f.hj(k, "polygon", c);
        if (m && m.length && m[0].borderWidth) for (var n = g[i][1], o = 0; o < n.length; o++) {
          var q = n[o][1];
          f.Nc(q[0], c) && (q["cache" + c] || (q["cache" + c] = f.um(q[1], c, e, a)), q = q["cache" + c], f.M.Vn(b.canvas.id, q, {
            type: "polygon",
            Ub: k,
            style: m
          }), this.JV(b, q, m))
        }
      }
    },
    drawGaoqingRoadFill: function (a, b, c, e, f) {
      var g = a[1];
      if (g) for (var a = a[6], i = 0; i < g.length; i++) {
        var k = g[i][0],
          m = f.hj(k, "polygon", c);
        if (m && m.length) for (var n = g[i][1], o = 0; o < n.length; o++) {
          var q = n[o][1];
          f.Nc(q[0], c) && (q["cache" + c] || (q["cache" + c] = f.um(q[1], c, e, a)), q = q["cache" + c], f.M.Vn(b.canvas.id, q, {
            type: "polygon",
            Ub: k,
            style: m
          }), this.KV(b, q, m))
        }
      }
    },
    JV: function (a, b, c) {
      c = c[0];
      a.beginPath();
      a.moveTo(b[0], b[1]);
      for (var e = 2,
        f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
      a.closePath();
      a.strokeStyle = c.eo;
      a.lineWidth = c.borderWidth / 2;
      a.stroke()
    },
    KV: function (a, b, c) {
      a.fillStyle = c[0].Bw;
      a.beginPath();
      a.moveTo(b[0], b[1]);
      for (var c = 2,
        e = b.length; c < e; c += 2) a.lineTo(b[c], b[c + 1]);
      a.closePath();
      a.fill()
    }
  };
  var ed = {
    drawArrow: function (a, b, c, e, f, g) {
      b.lineWidth = 1.5;
      b.lineCap = "butt";
      b.lineJoin = "miter";
      b.strokeStyle = "rgba(153,153,153,1)";
      var i = a[7];
      if (i) {
        a = i[1];
        e = g.um(i[0], c, e);
        for (i = 0; i < a.length; i++) if (g.Nc(a[i], c)) {
          var k = e[4 * i],
            m = e[4 * i + 1],
            n = e[4 * i + 2],
            o = e[4 * i + 3],
            q = (k + n) / 2,
            v = (m + o) / 2,
            n = (k - n) / f,
            o = (m - o) / f,
            k = q + n / 2,
            n = q - n / 2,
            m = v + o / 2,
            o = v - o / 2;
          this.AV(b, k, m, n, o)
        }
      }
    },
    AV: function (a, b, c, e, f) {
      a.beginPath();
      a.moveTo(b, c);
      a.lineTo(e, f);
      a.stroke();
      c = this.sU([b, c], [e, f]);
      b = c[0];
      c = c[1];
      a.beginPath();
      a.moveTo(b[0], b[1]);
      a.lineTo(c[0], c[1]);
      a.lineTo(e, f);
      a.closePath();
      a.stroke()
    },
    sU: function (a, b) {
      var c = b[0] - a[0],
        e = b[1] - a[1],
        f = 1.8 * Math.sqrt(c * c + e * e),
        g = b[0] + 4.8410665352790705 * (c / f),
        f = b[1] + 4.8410665352790705 * (e / f),
        c = Math.atan2(e, c) + Math.PI;
      return [[g + 4.8410665352790705 * Math.cos(c - 0.3), f + 4.8410665352790705 * Math.sin(c - 0.3)], [g + 4.8410665352790705 * Math.cos(c + 0.3), f + 4.8410665352790705 * Math.sin(c + 0.3)]]
    }
  };
  var fd = {
    drawHregion: function (a, b, c, e, f) {
      var g = a[1];
      if (g) for (var a = a[6], i = 0; i < g.length; i++) {
        var k = g[i][0],
          m = f.hj(k, "polygon3d", c);
        if (m && m.length) for (var n = g[i][1], o = 0; o < n.length; o++) {
          var q = n[o][2];
          if (f.Nc(q[0], c)) {
            var v = q[2];
            q["cache" + c] || (q["cache" + c] = f.um(q[1], c, e, a));
            q = q["cache" + c];
            f.M.Vn(b.canvas.id, q, {
              type: "polygon",
              Ub: k,
              style: m
            });
            this.IV(b, q, v, m)
          }
        }
      }
    },
    IV: function (a, b, c, e) {
      e = e[0];
      if (!(c < e.filter)) {
        a.fillStyle = e.$V;
        a.beginPath();
        a.moveTo(b[0], b[1]);
        for (var c = 2,
          f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
        a.closePath();
        e.borderWidth && (a.strokeStyle = e.eo, a.lineWidth = e.borderWidth / 2, a.stroke());
        a.fill()
      }
    }
  };
  var gd = {
    parse: function (a, b, c, e, f) {
      for (var g = e.M,
        i = g.ka(), k = Math.pow(2, 18 - i), m = g.Pc.bi(g.Bb()), n = m.lng, o = m.lat, m = g.Hb(), q = m.width, v = m.height, m = [], w = 0; w < a.length; w++) {
        var y = [],
          A = a[w].p_;
        y.x = A[0];
        y.y = A[1];
        y.w5 = A[2];
        for (var B = (A[0] * c * k - n) / k + q / 2, C = (o - (A[1] + 1) * c * k) / k + v / 2, F = 0; F < a[w].length; F++) a[w][F].zL ? this.zM(a[w][F].zL, A, e, b, c, B, C, i, k, q, v, y) : a[w][F].BX ? this.zM(a[w][F].BX, A, e, b, c, B, C, i, k, q, v, y, p, window.p3) : this.KY(a[w][F].eY, A, e, b, c, B, C, i, k, q, v, y, f);
        m.push(y)
      }
      if (/collision=0/.test(location.search)) {
        a = [];
        for (w = 0; w < m.length; w++) for (F = 0; F < m[w].length; F++) a.push(m[w][F])
      } else a = this.XY(m, e.M.ka());
      g.GU();
      for (w = 0; w < a.length; w++) if (c = a[w], !c.Is) if (F = [c.Pf, c.Qf, c.Pf, c.fi, c.ei, c.fi, c.ei, c.Qf, c.Pf, c.Qf], c.style && g.Vn("poi", F, {
        type: "polygon",
        Ub: c.style.Ub,
        style: c.style
      }), "fixed" === c.type) {
        F = t;
        c.ue && (c.style && 4 === c.direction) && (F = p);
        if (c.ue) if (F) {
          var E = this;
          this.Xr(b, c, e, F,
            function (a) {
              for (var c = 0; c < a.rf.length; c++) E.SJ(b, a.rf[c].ae, a.rf[c].be, a.rf[c].text, a.style, e)
            })
        } else this.Xr(b, c, e);
        if (c.style && !F) for (F = 0; F < c.rf.length; F++) this.SJ(b, c.rf[F].ae, c.rf[F].be, c.rf[F].text, c.style, e)
      } else if ("line" === c.type) for (F = 0; F < c.hO.length; F++) f = c.hO[F],
        gd.DV(b, f.ae, f.be, f.WT, f.fO, f.width, f.height, c.style, e);
      return m
    },
    zM: function (a, b, c, e, f, g, i, k, m, n, o, q, v, w) {
      a = a[1];
      for (b = 0; b < a.length; b++) {
        var y = a[b],
          A = y[0],
          B = c.hj(A, "point", k, w),
          A = c.hj(A, "pointText", k, w),
          y = y[1],
          C = s,
          F = 100,
          E = 0,
          G = 0;
        B && B[0] && (B = B[0], C = B.ue, F = B.zoom || 100);
        A = A && A[0] ? A[0] : s;
        for (B = 0; B < y.length; B++) {
          var N = y[B][4];
          if (N && c.Nc(N[2], k)) {
            var L = Math.round(N[0] / 100) / m + g,
              M = f - Math.round(N[1] / 100) / m + i;
            if (v || !(- 50 > L || -50 > M || L > n + 50 || M > o + 50)) {
              var T = N[7] || "",
                da = {
                  type: "fixed",
                  uid: N[3] || "",
                  name: T,
                  Kx: N[4],
                  Ds: s,
                  rf: [],
                  yx: [L, M],
                  style: A
                };
              if (C) {
                var ba = window.iconSetInfo_high[C] || window.iconSetInfo_high["MapRes/" + C];
                if (!ba) {
                  var va = C.charCodeAt(0);
                  48 <= va && 57 >= va && (ba = window.iconSetInfo_high["_" + C])
                }
                ba && (E = ba[2], G = ba[3], E = E / 2 * F / 100, G = G / 2 * F / 100, da.Ds = {
                  ae: L - E / 2,
                  be: M - G / 2,
                  width: E,
                  height: G
                },
                  da.ue = C)
              }
              if (A) {
                N = N[5];
                "number" !== typeof N && (N = 0);
                var ya = ba = 0,
                  va = (A.fontSize || 12) / 2,
                  Ea = 0.2 * va;
                e.font = gd.Gw(A, c);
                var T = T.split("\\"),
                  ra = T.length;
                da.direction = N;
                for (var Ua = 0; Ua < ra; Ua++) {
                  var re = T[Ua],
                    Oc = e.measureText(re).width;
                  switch (N) {
                    case 3:
                      ya = M - va / 2 * ra - Ea * (ra - 1) / 2;
                      ba = L - Oc - E / 2;
                      ya = ya + va * Ua + Ea * Ua;
                      break;
                    case 1:
                      ya = M - va / 2 * ra - Ea * (ra - 1) / 2;
                      ba = L + E / 2;
                      ya = ya + va * Ua + Ea * Ua;
                      break;
                    case 2:
                      ya = M - G / 2 - va * ra - Ea * (ra - 1) - Ea;
                      ba = L - Oc / 2;
                      ya = ya + va * Ua + Ea * Ua;
                      break;
                    case 0:
                      ya = M + G / 2 + Ea / 2;
                      ba = L - Oc / 2;
                      ya = ya + va * Ua + Ea * Ua;
                      break;
                    case 4:
                      ya = M - va / 2 * ra - Ea * (ra - 1) / 2,
                        ba = L - Oc / 2,
                        ya = ya + va * Ua + Ea * Ua
                  }
                  da.rf.push({
                    ae: ba,
                    be: ya,
                    width: Oc,
                    height: va,
                    text: re
                  })
                }
              }
              q.push(da)
            }
          }
        }
      }
    },
    KY: function (a, b, c, e, f, g, i, k, m, n, o, q, v) {
      b = a[7].length;
      if ((n = c.hj(a[0], "pointText", k)) && n.length) {
        n = n[0];
        e.font = gd.Gw(n, c);
        for (var o = n.fontSize / 2,
          w = a[1], y = a[2], A = y.split("").length, B = a[4], C = B.slice(0, 2), F = 2; F < B.length; F += 2) C[F] = C[F - 2] + B[F],
            C[F + 1] = C[F - 1] + B[F + 1];
        for (F = 2; F < B.length; F += 2) 0 === F % (2 * A) || 1 === F % (2 * A) || (C[F] = C[F - 2] + B[F] / v, C[F + 1] = C[F - 1] + B[F + 1] / v);
        for (v = 0; v < b; v++) if (c.Nc(a[7][v], k)) {
          var F = [],
            E = l,
            G = l,
            N = l,
            L = l,
            M = y.split("");
          a[6][v] && M.reverse();
          for (var B = 2 * v * A,
            B = C.slice(B, B + 2 * A), T = 0; T < A; T++) {
            var da = a[5][A * v + T],
              ba = B[2 * T] / 100 / m + g,
              va = f - B[2 * T + 1] / 100 / m + i,
              ya = M[T],
              Ea = e.measureText(ya).width;
            if (E === l) E = ba - Ea / 2,
              G = va - o / 2,
              N = E + Ea,
              L = G + o;
            else {
              var ra = ba - Ea / 2,
                Ua = va - o / 2;
              ra < E && (E = ra);
              Ua < G && (G = Ua);
              ra + Ea > N && (N = ra + Ea);
              Ua + o > L && (L = Ua + o)
            }
            F.push({
              fO: ya,
              ae: ba,
              be: va,
              WT: da,
              width: Ea,
              height: o
            })
          }
          q.push({
            type: "line",
            Kx: w,
            style: n,
            hO: F,
            Pf: E,
            Qf: G,
            ei: N,
            fi: L
          })
        }
      }
    },
    Xr: function (a, b, c, e, f) {
      var g = b.ue;
      if ("lanche" !== g) if (gd.ax[g]) this.PJ(a, b, gd.ax[g], e, f);
      else {
        var c = c.xK(g),
          i = new Image;
        i.setAttribute("crossOrigin", "anonymous");
        var k = this;
        i.onload = function () {
          gd.ax[g] = this;
          k.PJ(a, b, this, e, f);
          i.onload = s
        };
        i.src = c
      }
    },
    PJ: function (a, b, c, e, f) {
      var g = b.Ds,
        i = g.ae,
        k = g.be,
        m = s,
        n = s,
        o = p,
        q = b.style ? b.style.Ub : s;
      if (b.style && 62203 === q) {
        for (var v = n = m = 0; v < b.rf.length; v++) m < b.rf[v].width && (m = b.rf[v].width),
          n += 20;
        m = Math.ceil(m) + 10
      }
      e && 519 === q && (o = t);
      m !== s && n !== s ? this.GV(a, b, c, 8, m, n) : e && o ? (m = Math.ceil(b.rf[0].width) + 6, this.zV(a, b, c, 12, m, c.height / 2)) : a.drawImage(c, i, k, g.width, g.height);
      f && f(b)
    },
    GV: function (a, b, c, e, f, g) {
      var i = b.yx[0] - f / 2,
        b = b.yx[1] - g / 2;
      0 < navigator.userAgent.indexOf("iPhone") && (b += 1);
      var k = e / 2;
      a.drawImage(c, 0, 0, e, e, i, b, k, k);
      a.drawImage(c, e, 0, 1, e, i + k, b, f - 2 * k, k);
      a.drawImage(c, c.width - e, 0, e, e, i + f - k, b, k, k);
      a.drawImage(c, 0, e, e, 1, i, b + k, k, g - 2 * k);
      a.drawImage(c, e, e, 1, 1, i + k, b + k, f - 2 * k, g - 2 * k);
      a.drawImage(c, c.width - e, e, e, 1, i + f - k, b + k, k, g - 2 * k);
      a.drawImage(c, 0, c.height - e, e, e, i, b + g - k, k, k);
      a.drawImage(c, e, c.height - e, 1, e, i + k, b + g - k, f - 2 * k, k);
      a.drawImage(c, c.width - e, c.height - e, e, e, i + f - k, b + g - k, k, k)
    },
    zV: function (a, b, c, e, f, g) {
      var i = b.yx[0] - f / 2,
        b = b.yx[1] - g / 2,
        g = e / 2;
      a.drawImage(c, 0, 0, e, c.height, i, b, g, c.height / 2);
      a.drawImage(c, e, 0, 1, c.height, i + g, b, f - 2 * g, c.height / 2);
      a.drawImage(c, c.width - e, 0, e, c.height, i + f - g, b, g, c.height / 2)
    },
    DV: function (a, b, c, e, f, g, i, k, m) {
      a.font = gd.Gw(k, m);
      a.fillStyle = k.hK;
      g /= 2;
      i /= 2;
      a.save();
      a.translate(b, c);
      a.rotate(- e / 180 * Math.PI);
      0 < k.Tw && (a.lineWidth = k.Tw, a.strokeStyle = k.YK, a.strokeText(f, -g, -i));
      a.fillText(f, -g, -i);
      a.restore()
    },
    SJ: function (a, b, c, e, f, g) {
      a.font = gd.Gw(f, g);
      a.fillStyle = f.hK;
      0 < f.Tw && (a.lineWidth = f.Tw, a.strokeStyle = f.YK, a.strokeText(e, b, c));
      a.fillText(e, b, c)
    },
    Gw: function (a, b) {
      var c = a.fontSize / 2,
        e = 10 * a.fontWeight;
      return e = b.BD ? e + " bold" + (" " + c + "px") + ' arial, "PingFang SC", sans-serif' : e + (" " + c + "px") + " arial, sans-serif"
    },
    XY: function (a, b) {
      var c = [],
        e = 0;
      5 === b && (e = 1);
      a.sort(function (a, b) {
        return a.x * a.y < b.x * b.y ? -1 : 1
      });
      for (var f = 0,
        g = a.length; f < g; f++) for (var i = a[f], k = 0, m = i.length; k < m; k++) {
          var n = i[k],
            o = l,
            q = l,
            v = l,
            w = l;
          if ("fixed" === n.type) {
            var y = n.Ds,
              A = n.rf;
            y && (o = y.ae, q = y.be, v = y.ae + y.width, w = y.be + y.height);
            for (y = 0; y < A.length; y++) {
              var B = A[y];
              o !== l ? (B.ae < o && (o = B.ae), B.be < q && (q = B.be), B.ae + B.width > v && (v = B.ae + B.width), B.be + B.height > w && (w = B.be + B.height)) : (o = B.ae, q = B.be, v = B.ae + B.width, w = B.be + B.height)
            }
          } else "line" === n.type ? (o = n.Pf, q = n.Qf, v = n.ei, w = n.fi) : "biaopai" === n.type && (w = n.l4, o = w.ae, q = w.be, v = w.ae + w.width, w = w.be + w.height);
          o !== l && (n.Pf = o, n.Qf = q, n.ei = v, n.fi = w, c.push(n))
        }
      c.sort(function (a, b) {
        return b.Kx - a.Kx || b.Pf - a.Pf || b.Qf - a.Qf
      });
      f = 0;
      for (g = c.length; f < g; f++) {
        m = c[f];
        m.Is = t;
        m.bJ = [];
        for (k = f + 1; k < g; k++) i = c[k],
          m.ei - e < i.Pf || (m.Pf > i.ei - e || m.fi - e < i.Qf || m.Qf > i.fi - e) || m.bJ.push(k)
      }
      f = 0;
      for (g = c.length; f < g; f++) if (k = c[f], k.Is === t) {
        e = k.bJ;
        k = 0;
        for (m = e.length; k < m; k++) c[e[k]].Is = p
      }
      return c
    },
    ax: {}
  };
  var hd = ["round", "butt", "square"],
    id = ["miter", "round", "bevel"],
    jd = {
      daojiao: [{
        stroke: "#FF6600",
        Ab: 1,
        yb: "round",
        zb: "round",
        sd: [4, 3]
      }],
      daojiao_bai: [{
        stroke: "#f5f3f0",
        Ab: 1,
        yb: "round",
        zb: "round",
        sd: [4, 3]
      }],
      junhuoxian: [{
        stroke: "#DB7093",
        Ab: 1,
        yb: "round",
        zb: "round",
        sd: [4, 3]
      }],
      lundu: [{
        stroke: "#5c91c5",
        Ab: 1,
        yb: "round",
        zb: "round",
        sd: [10, 11]
      }],
      shengjie: [{
        stroke: "#737373",
        Ab: 1,
        yb: "round",
        zb: "round",
        sd: [6, 3]
      }],
      weidingguojie: [{
        stroke: "#aea08a",
        Ab: 1,
        yb: "round",
        zb: "round",
        sd: [4, 3]
      }],
      weidingguojie_guowai: [{
        stroke: "#a29e96",
        Ab: 2,
        yb: "round",
        zb: "round",
        sd: [4, 3]
      }],
      weidingguojie_guonei: [{
        stroke: "#b5a37c",
        Ab: 2,
        yb: "round",
        zb: "round",
        sd: [4, 3]
      }]
    },
    kd = {};
  function ld(a, b) {
    if ("tielu" === a || "tielu_0" === a) {
      if ("off" === window.La[b].bmapRailwayVisibility) return [];
      var c = "#ffffff",
        e = "#949494";
      window.La[b].bmapRailwayStrokeColor && (c = window.La[b].bmapRailwayStrokeColor);
      window.La[b].bmapRailwayFillColor && (e = window.La[b].bmapRailwayFillColor);
      if (4 <= b && 9 >= b || 10 <= b && 16 >= b) return [{
        stroke: c,
        Ab: 1.5,
        yb: "butt",
        zb: "round",
        sd: [10, 11]
      },
      {
        stroke: e,
        Ab: 2,
        yb: "round",
        zb: "round"
      }];
      if (17 <= b && 18 >= b) return [{
        stroke: c,
        Ab: 2.5,
        yb: "butt",
        zb: "round",
        sd: [15, 16]
      },
      {
        stroke: e,
        Ab: 5,
        yb: "round",
        zb: "round"
      }];
      if (19 <= b && 20 >= b) return [{
        stroke: c,
        Ab: 4.5,
        yb: "butt",
        zb: "round",
        sd: [25, 26]
      },
      {
        stroke: e,
        Ab: 5,
        yb: "round",
        zb: "round"
      }]
    } else if (0 === a.indexOf("ditie_zj")) {
      if (12 <= b && 16 >= b) return [{
        stroke: "#868686",
        Ab: 1,
        yb: "round",
        zb: "round",
        sd: [7, 4]
      }];
      if (17 <= b && 18 >= b || 19 <= b && 20 >= b) return [{
        stroke: "#6e6e6e",
        Ab: 1,
        yb: "round",
        zb: "round",
        sd: [7, 4]
      }]
    } else if (/^tongdaomian/.test(a)) {
      if (17 === b) return [{
        stroke: "#e5e5e5",
        Ab: 4,
        yb: "square",
        zb: "round"
      },
      {
        stroke: "#a8a8a8",
        Ab: 6,
        yb: "square",
        zb: "round"
      }];
      if (18 === b) return [{
        stroke: "#e5e5e5",
        Ab: 6,
        yb: "square",
        zb: "round"
      },
      {
        stroke: "#a8a8a8",
        Ab: 8,
        yb: "square",
        zb: "round"
      }];
      if (19 <= b && 21 >= b) return [{
        stroke: "#e5e5e5",
        Ab: 8,
        yb: "square",
        zb: "round"
      },
      {
        stroke: "#a8a8a8",
        Ab: 10,
        yb: "square",
        zb: "round"
      }]
    } else if (/^jietizhongduan|^dixiatongdaojieti/.test(a)) {
      if (17 === b) return [{
        stroke: "#e5e5e5",
        Ab: 4,
        yb: "butt",
        zb: "round",
        sd: [2, 1]
      },
      {
        stroke: "#bebebe",
        Ab: 6,
        yb: "butt",
        zb: "round"
      }];
      if (18 === b) return [{
        stroke: "#e5e5e5",
        Ab: 6,
        yb: "butt",
        zb: "round",
        sd: [3, 1]
      },
      {
        stroke: "#bebebe",
        Ab: 8,
        yb: "butt",
        zb: "round"
      }];
      if (19 <= b && 21 >= b) return [{
        stroke: "#e5e5e5",
        Ab: 8,
        yb: "butt",
        zb: "round",
        sd: [4, 2]
      },
      {
        stroke: "#bebebe",
        Ab: 10,
        yb: "butt",
        zb: "round"
      }]
    } else if (/^guojietianqiao/.test(a)) return 18 === b ? [{
      stroke: "#ffffff",
      Ab: 6,
      yb: "butt",
      zb: "round",
      sd: [4, 2]
    },
    {
      stroke: "#bebebe",
      Ab: 8,
      yb: "butt",
      zb: "round"
    }] : [{
      stroke: "#ffffff",
      Ab: 8,
      yb: "butt",
      zb: "round",
      sd: [4, 2]
    },
    {
      stroke: "#bebebe",
      Ab: 10,
      yb: "butt",
      zb: "round"
    }];
    return jd[a]
  }
  var md = {
    drawLink: function (a, b, c, e, f) {
      var g = a[1];
      g && (a = a[6], this.QN(g, c, e, b, a, f, p), this.QN(g, c, e, b, a, f, t))
    },
    QN: function (a, b, c, e, f, g, i) {
      for (var k = 0; k < a.length; k++) {
        var m = a[k][0],
          n = g.hj(m, "line", b);
        if (n && n.length && (!i || n[0].borderWidth)) if (!n[0].yo || ld(n[0].yo, b)) for (var o = a[k][1], q = 0; q < o.length; q++) {
          var v = o[q][3];
          g.Nc(v[0], b) && (v["cache" + b] || (v["cache" + b] = g.um(v[1], b, c, f)), v = v["cache" + b], g.M.Vn(e.canvas.id, v, {
            type: "polyline",
            Ub: m,
            style: n
          }), this.EV(e, v, n, i, b))
        }
      }
    },
    drawSingleTexture: function (a, b, c, e, f) {
      var g = a[1];
      if (g) for (var a = a[6], i = 0; i < g.length; i++) {
        var k = f.hj(g[i][0], "line", c);
        if (k && k.length) for (var m = g[i][1], n = 0; n < m.length; n++) {
          var o = m[n][11];
          if (f.Nc(o[0], c)) {
            var q;
            o["cache" + c] || (o["cache" + c] = f.um(o[1], c, e, a));
            q = o["cache" + c];
            o = o[3];
            o *= Math.pow(2, c - f.d0[c].Lc);
            this.FV(b, q, k, o, f)
          }
        }
      }
    },
    FV: function (a, b, c, e, f) {
      var g = c[0].yo,
        i = this;
      if (kd[g]) i.Xr(b, e, a, kd[g]);
      else {
        var c = f.xK(g),
          k = new Image;
        k.onload = function () {
          kd[g] = k;
          i.Xr(b, e, a, k);
          k.onload = s
        };
        k.src = c
      }
    },
    Xr: function (a, b, c, e) {
      var f = [a[0], a[1]],
        g = [a[2], a[3]],
        a = g[0] - f[0],
        g = g[1] - f[1],
        f = [f[0] + a / 2, f[1] + g / 2],
        i = Math.sqrt(a * a + g * g),
        b = b / 10,
        a = Math.atan2(g, a);
      c.save();
      c.translate(f[0], f[1]);
      c.rotate(Math.PI / 2 + a);
      c.drawImage(e, -b / 2, -i / 2, b, i);
      c.restore()
    },
    EV: function (a, b, c, e, f) {
      c = c[0];
      if (!e && c.yo && ld(c.yo, f)) this.LV(a, b, c, ld(c.yo, f));
      else {
        a.beginPath();
        a.moveTo(b[0], b[1]);
        for (var f = 2,
          g = b.length; f < g; f += 2) a.lineTo(b[f], b[f + 1]);
        c.borderWidth && e ? (a.strokeStyle = c.eo, a.lineCap = hd[c.lU], a.lineJoin = id[1], a.lineWidth = c.borderWidth / 2, a.stroke()) : e || (a.strokeStyle = c.Bw, a.lineCap = hd[c.ZV], a.lineJoin = id[1], a.lineWidth = c.dK / 2, a.stroke())
      }
    },
    LV: function (a, b, c, e) {
      if (c = e[1]) {
        a.strokeStyle = c.stroke;
        a.lineCap = c.yb;
        a.lineJoin = c.zb;
        a.lineWidth = c.Ab;
        a.beginPath();
        a.moveTo(b[0], b[1]);
        for (var c = 2,
          f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
        a.stroke()
      }
      if (e = e[0]) if (e.sd) this.CV(a, b, e);
      else {
        a.strokeStyle = e.stroke;
        a.lineCap = e.yb;
        a.lineJoin = e.zb;
        a.lineWidth = e.Ab;
        a.beginPath();
        a.moveTo(b[0], b[1]);
        c = 2;
        for (f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
        a.stroke()
      }
    },
    CV: function (a, b, c) {
      a.strokeStyle = c.stroke;
      a.lineCap = c.yb;
      a.lineJoin = c.zb;
      a.lineWidth = c.Ab;
      var e = p,
        c = c.sd[0];
      a.beginPath();
      for (var f = 0; f < b.length - 2; f += 2) {
        var g = b[f],
          i = b[f + 1],
          k = b[f + 2] - g,
          m = b[f + 3] - i,
          n = 0 !== k ? m / k : 0 < m ? 1E15 : -1E15,
          m = Math.sqrt(k * k + m * m),
          o = c;
        for (a.moveTo(g, i); 0.1 <= m;) {
          o > m && (o = m);
          var q = Math.sqrt(o * o / (1 + n * n));
          0 > k && (q = -q);
          g += q;
          i += n * q;
          a[e ? "lineTo" : "moveTo"](g, i);
          m -= o;
          e = !e
        }
      }
      a.stroke()
    }
  };
  var nd = 3,
    od = 4,
    pd = 7,
    qd = 8,
    rd = 15,
    sd = 16,
    td = {},
    ud = {},
    vd = {},
    wd, xd = {
      3: {
        start: 3,
        Lc: 3
      },
      4: {
        start: 4,
        Lc: 5
      },
      5: {
        start: 4,
        Lc: 5
      },
      6: {
        start: 6,
        Lc: 7
      },
      7: {
        start: 6,
        Lc: 7
      },
      8: {
        start: 8,
        Lc: 9
      },
      9: {
        start: 8,
        Lc: 9
      },
      10: {
        start: 10,
        Lc: 10
      },
      11: {
        start: 11,
        Lc: 12
      },
      12: {
        start: 11,
        Lc: 12
      },
      13: {
        start: 11,
        Lc: 12
      },
      14: {
        start: 14,
        Lc: 15
      },
      15: {
        start: 14,
        Lc: 15
      },
      16: {
        start: 16,
        Lc: 17
      },
      17: {
        start: 16,
        Lc: 17
      },
      18: {
        start: 18,
        Lc: 19
      },
      19: {
        start: 18,
        Lc: 19
      },
      20: {
        start: 18,
        Lc: 19
      },
      21: {
        start: 18,
        Lc: 19
      }
    };
  function yd(a) {
    this.M = a;
    this.Vc = a.U.devicePixelRatio;
    this.d0 = xd
  }
  yd.prototype = {
    cC: function (a, b, c, e, f, g, i, k, m) {
      this.M.wN = {};
      var n = this;
      m || (m = 0);
      if (!(z.km(window.qh) ? window.Mp : window.Wt[f]) && 100 > m) setTimeout(function () {
        n.cC(a, b, c, e, f, g, i, k, m + 1)
      },
        100);
      else {
        wd || (wd = k);
        var o = b.getContext("2d"),
          q = b.parentNode;
        q.removeChild(b);
        o.clearRect(0, 0, g, g);
        q.appendChild(b);
        q = this.Vc;
        1 < q && !b._scale && (o.scale(q, q), b._scale = p);
        o.fillStyle = this.yM("#F5F3F0");
        window.La[f].bmapLandColor && (o.fillStyle = this.yM(window.La[f].bmapLandColor));
        q = b.style.width;
        b.style.width = "0px";
        b.style.width = q;
        o.fillRect(0, 0, g, g);
        if (a[0]) for (q = 0; q < a[0].length; q++) {
          var v = a[0][q];
          v[0] === pd && dd.drawPoly(v, o, f, g, this)
        }
        17 <= this.M.ka() ? (n.RJ(a, o, f, g, i, c, e), b.jn = p) : setTimeout(function () {
          if (!b.xG) {
            n.RJ(a, o, f, g, i, c, e);
            b.jn = p
          }
        },
          1)
      }
    },
    RJ: function (a, b, c, e) {
      if (a[0]) for (var f = 0; f < a[0].length; f++) {
        var g = a[0][f],
          i = g[0];
        i === od ? md.drawLink(g, b, c, e, this) : i === sd ? md.drawLink(g, b, c, e, this) : i === rd ? (dd.drawGaoqingRoadBorder(g, b, c, e, this), dd.drawGaoqingRoadFill(g, b, c, e, this)) : 18 === i ? "off" !== window.La[c].bmapRoadarrowVisibility && ed.drawArrow(g, b, c, e, Math.pow(2, c - xd[c].Lc), this) : i === qd ? fd.drawHregion(g, b, c, e, this) : 19 === i && md.drawSingleTexture(g, b, c, e, this)
      }
    },
    QJ: function (a, b, c, e, f, g, i) {
      var k = this;
      i || (i = 0); !(z.km(window.qh) ? window.Mp : window.Wt[g]) && 100 > i ? setTimeout(function () {
        k.QJ(a, b, c, e, f, g, i + 1)
      },
        100) : (wd || (wd = b), a.RY = gd.parse(a, c, e, this, f))
    },
    hj: function (a, b, c, e) {
      var f = a + "-" + b + "-" + c;
      if (e) return td[f] || (td[f] = this.ng(a, b, c, e)),
        td[f];
      this.M.wN[f] = this.ng(a, b, c);
      return this.M.wN[f]
    },
    ng: function (a, b, c, e) {
      var f;
      f = e || window.bmap_baseFs;
      var e = z.km(window.qh) ? window.Mp : window.Wt[c],
        g = f[2];
      if ("arrow" === b) return this.GY(g[2]);
      switch (b) {
        case "point":
          g = g[0];
          e = e[0] || {};
          break;
        case "pointText":
          g = g[1];
          e = e[1] || {};
          break;
        case "line":
          g = g[3];
          e = e[3] || {};
          break;
        case "polygon":
          g = g[4];
          e = e[4] || {};
          break;
        case "polygon3d":
          g = g[5],
            e = e[5] || {}
      }
      var i = [],
        c = f[1][c - 1][0][a];
      if (!c) return i;
      for (f = 0; f < c.length; f++) {
        var k = e[c[f]] || g[c[f]];
        if (k) {
          switch (b) {
            case "polygon":
              k = this.PY(k, a);
              break;
            case "line":
              k = this.LY(k, a);
              break;
            case "pointText":
              k = this.NY(k, a);
              break;
            case "point":
              k = this.MY(k, a);
              break;
            case "polygon3d":
              k = this.OY(k, a)
          }
          k.S4 = c[f];
          i[i.length] = k
        }
      }
      return i
    },
    NY: function (a, b) {
      return {
        Ub: b,
        hK: this.ug(a[0]),
        YK: this.ug(a[1]),
        v1: this.ug(a[2]),
        fontSize: a[3],
        Tw: a[4],
        fontWeight: a[5],
        fontStyle: a[6],
        lV: a[7]
      }
    },
    MY: function (a, b) {
      return {
        Ub: b,
        Kx: a[0],
        j5: a[1],
        ue: a[2],
        xX: a[3],
        T3: a[4],
        lV: a[5],
        zoom: a[6]
      }
    },
    LY: function (a, b) {
      return {
        Ub: b,
        eo: this.ug(a[0]),
        Bw: this.ug(a[1]),
        borderWidth: a[2],
        dK: a[3],
        lU: a[4],
        ZV: a[5],
        d3: a[6],
        e3: a[7],
        f3: a[8],
        w3: a[9],
        x3: a[10],
        mU: a[11],
        yo: a[12],
        nU: a[13],
        f2: a[14],
        v3: a[15],
        b3: a[16],
        S3: a[17],
        x4: a[18]
      }
    },
    PY: function (a, b) {
      return {
        Ub: b,
        Bw: this.ug(a[0]),
        eo: this.ug(a[1]),
        borderWidth: a[2],
        mU: a[3],
        nU: a[4],
        r5: a[5],
        a3: a[6],
        W4: a[7],
        X4: this.ug(a[8])
      }
    },
    OY: function (a, b) {
      return {
        Ub: b,
        filter: a[0],
        MM: a[1],
        c3: a[2],
        borderWidth: a[3],
        eo: this.ug(a[4]),
        $V: this.ug(a[5]),
        e2: this.ug(a[6]),
        j4: a[7]
      }
    },
    GY: function (a) {
      for (var b in a) return a = a[b],
        {
          color: this.ug(a[0]),
          xX: a[1],
          ue: a[2]
        }
    },
    ug: function (a) {
      var b = a;
      if (vd[b]) return vd[b];
      a >>>= 0;
      vd[b] = "rgba(" + (a & 255) + "," + (a >> 8 & 255) + "," + (a >> 16 & 255) + "," + (a >> 24 & 255) / 255 + ")";
      return vd[b]
    },
    yM: function (a) {
      a = a.replace("#", "");
      6 === a.length && (a += "ff");
      for (var b = "rgba(",
        c = 0; 8 > c; c += 2) b = 6 > c ? b + (parseInt(a.slice(c, c + 2), 16) + ",") : b + (parseInt(a.slice(c, c + 2), 16) / 255 + ")");
      return b
    },
    Nc: function (a, b) {
      var c;
      ud[a] || (c = a.toString(2), 8 > c.length && (c = Array(8 - c.length + 1).join("0") + c), ud[a] = c);
      c = ud[a];
      return "1" === c[b - xd[b].start]
    },
    um: function (a, b, c) {
      var e = [],
        b = Math.pow(2, b - xd[b].Lc) / 100,
        f = a[0] * b,
        g = a[1] * b;
      e[e.length] = f;
      e[e.length] = c - g;
      for (var i = 2; i < a.length; i += 2) f += a[i] * b,
        g += a[i + 1] * b,
        e[e.length] = f,
        e[e.length] = c - g;
      return e
    },
    xK: function (a) {
      var b = a.length % wd.length,
        c = this.zW();
      return wd[b] + a + ".png?v=" + c.gF + "&udt=" + c.bF
    },
    zW: function () {
      if (this.rD) return this.rD;
      var a = "undefined" !== typeof MSV ? MSV.L3 : {};
      return this.rD = {
        gF: a.version ? a.version : "001",
        bF: a.I_ ? a.I_ : "20150621"
      }
    }
  };
  Q = z.lang.bu;
  nd = 3;
  od = 4;
  pd = 7;
  qd = 8;
  rd = 15;
  sd = 16;
  function Lc(a, b, c) {
    c = c || {};
    this.M = a;
    this.Ev = b;
    this.Vc = b.MM;
    var styleApi = "http://online0.map.bdimg.com/pvd/?qt=vtile";
    if ("undefined" != typeof tilesReturnObj) {
      styleApi = tilesReturnObj.styleApiVal + "/?qt=vtile";
    } else {
      styleApi = "http://online0.map.bdimg.com/pvd/?qt=vtile"
    }
    this.$a = {
      q_: "na",
      zIndex: 0,
      CN: c.tileUrls || {
        http: [styleApi],
        https: ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss2.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss3.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv/pvd/?qt=vtile"]
      },
      qD: c.iconUrls || ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/", "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/"],
      HE: p
    };
    this.YA = "";
    this.VR = {};
    var c = c.urlOpts || {
      styles: "pl",
      extdata: 1,
      textimg: 0,
      mesh3d: 0,
      limit: 30
    },
      e;
    for (e in c) c.hasOwnProperty(e) && (this.YA = this.YA + "&" + e + "=" + c[e]);
    this.Ug = {};
    this.Ir = [];
    this.Os = 0;
    this.gx = t;
    this.ax = {};
    a = this.$a.q_;
    Yc[a] ? a = Yc[a] : (b = new Zc(a, l), a = Yc[a] = b);
    this.Cd = a;
    this.M.Cd = this.Cd
  }
  window.VectorIndoorTileLayer = "VectorIndoorTileLayer";
  fa = Lc.prototype;
  fa.xa = function () {
    var a = this.M,
      b = a.oh;
    if (!this.Rn) {
      var c = b.dq(this.$a.zIndex);
      c.style.WebkitTransform = "translate3d(0px, 0px, 0)";
      this.Rn = c
    }
    b.Hg.appendChild(this.Rn);
    b.q3 = c;
    if (this.$a.HE) {
      zd(this);
      var e = this;
      a.addEventListener("checkvectorclick",
        function (a) {
          var b;
          a: {
            b = a.offsetX;
            var c = a.offsetY,
              k = e.Ir.RY;
            if (k) for (var m = 0; m < k.length; m++) for (var n = k[m], o = 0; o < n.length; o++) if (a = n[o], !a.Is && a.Ds && b > a.Pf && b < a.ei && c > a.Qf && c < a.fi) {
              b = a.Ds;
              b = {
                type: 9,
                name: a.name,
                uid: a.uid,
                point: {
                  x: b.ae + b.width / 2,
                  y: b.be + 6
                }
              };
              break a
            }
            b = s
          }
          b && (a = new Q("onvectorclick"), a.m3 = b, a.hf = "base", this.dispatchEvent(a))
        })
    }
  };
  function zd(a) {
    var b = a.M,
      c = b.oh,
      e = a.Vc,
      f = b.Hb(),
      g = f.width,
      f = f.height,
      i = O("canvas");
    i.style.cssText = "position: absolute;left:0;top:0;width:" + g + "px;height:" + f + "px;z-index:2;";
    i.width = g * e;
    i.height = f * e;
    a.kx = i;
    a.So = i.getContext("2d");
    a.So.scale(e, e);
    a.So.textBaseline = "top";
    c.Hg.appendChild(i);
    b.ER = i
  }
  fa.fX = x("Cd");
  fa.update = function (a, b) {
    b = b || {};
    this.dF = b.dF;
    if (this.$a.HE && (b.ko && this.ko(), b.ZZ)) {
      var c = this.Vc,
        e = this.M.Hb(),
        f = e.width,
        e = e.height,
        g = this.kx,
        i = g.style;
      i.width = f + "px";
      i.height = e + "px";
      g.width = f * c;
      g.height = e * c;
      this.So.scale(c, c);
      this.So.textBaseline = "top"
    }
    if (b.m5) {
      c = this.Rn;
      f = 0;
      for (e = c.childNodes.length; f < e; f++) c.childNodes[f].jn = t
    }
    this.rw = a;
    this.Vo(a)
  };
  fa.Vo = function (a) {
    this.Ir = [];
    var b = this.M,
      c = b.ka(),
      e = b.Pc.bi(b.pe),
      f = this.Cd.dc(c),
      e = [Math.round(- e.lng / f), Math.round(e.lat / f)],
      f = this.Cd.Id(c),
      g = b.ea.replace(/^TANGRAM_/, ""),
      i = this.Cd.js(c),
      b = this.M,
      k = -b.offsetY + b.height / 2,
      m = this.Rn;
    m.style.left = -b.offsetX + b.width / 2 + "px";
    m.style.top = k + "px";
    this.Ne ? this.Ne.length = 0 : this.Ne = [];
    b = 0;
    for (k = m.childNodes.length; b < k; b++) {
      var n = m.childNodes[b];
      n.Dq = t;
      this.Ne.push(n)
    }
    if (b = this.rm) for (var o in b) delete b[o];
    else this.rm = {};
    this.Oe ? this.Oe.length = 0 : this.Oe = [];
    b = 0;
    for (k = a.length; b < k; b++) {
      var n = a[b][0],
        q = a[b][1];
      o = 0;
      for (var v = this.Ne.length; o < v; o++) {
        var w = this.Ne[o];
        if (w.id === g + "_" + n + "_" + q + "_" + i + "_" + c) {
          w.Dq = p;
          this.rm[w.id] = w;
          break
        }
      }
    }
    b = 0;
    for (k = this.Ne.length; b < k; b++) w = this.Ne[b],
      w.Dq || (w.bB = s, delete w.bB, w.jn = t, this.Oe.push(w));
    o = [];
    v = f * this.Vc;
    b = 0;
    for (k = a.length; b < k; b++) {
      var n = a[b][0],
        q = a[b][1],
        w = n * f + e[0],
        y = (- 1 - q) * f + e[1],
        A = g + "_" + n + "_" + q + "_" + i + "_" + c,
        B = this.rm[A],
        C = s;
      if (B) C = B.style,
        C.left = w + "px",
        C.top = y + "px",
        C.width = f + "px",
        C.height = f + "px",
        B.jn ? B.TE && B.TE && this.Ir.push(B.TE) : (B.xG = p, B.bB = s, delete B.bB, o.push([n, q, B]));
      else {
        if (0 < this.Oe.length) {
          var B = this.Oe.shift(),
            F = B.getContext("2d");
          B.getAttribute("width") !== v && (B._scale = t);
          B.setAttribute("width", v);
          B.setAttribute("height", v);
          C = B.style;
          C.width = f + "px";
          C.height = f + "px";
          F.clearRect(0, 0, v, v)
        } else B = document.createElement("canvas"),
          C = B.style,
          C.position = "absolute",
          this.$a.backgroundColor && (C.background = this.$a.backgroundColor),
          C.width = f + "px",
          C.height = f + "px",
          B.setAttribute("width", v),
          B.setAttribute("height", v),
          m.appendChild(B);
        B.id = A;
        C.left = w + "px";
        C.top = y + "px";
        o.push([n, q, B])
      }
      B.style.visibility = ""
    }
    b = 0;
    for (k = this.Oe.length; b < k; b++) this.Oe[b].style.visibility = "hidden";
    if (0 === o.length) {
      Ad(this);
      a = this.M.ea.replace(/^TANGRAM_/, "");
      c = this.M.ka();
      e = this.Cd.js(c);
      f = {};
      for (g = 0; g < this.rw.length; g++) i = this.rw[g],
        i = a + "_" + i[0] + "_" + i[1] + "_" + e + "_" + c,
        this.Ug[i] && (f[i] = this.Ug[i], this.dF && this.Ev.dC.cC(this.Ug[i].V_, this.Ug[i].o_, this.Ug[i].Pl, this.Ug[i].Am, this.Ug[i].RD, this.Cd.Id(this.Ug[i].RD), this.Cd.ZC(this.Ug[i].RD), this.$a.qD));
      this.Ug = f
    } else {
      this.Os = o.length;
      this.gx = t;
      c = this.Cd.js(this.M.ka());
      for (e = 0; e < a.length; e++) a[e][3] = c;
      for (e = 0; e < o.length; e++) a = o[e][2],
        f = o[e][0],
        g = o[e][1],
        o[e][3] = c,
        a.jn = t,
        a.xG = t,
        Bd(this, f, g, c, a)
    }
  };
  function Bd(a, b, c, e, f) {
    var g = b + "_" + c + "_" + e,
      i = a.VR;
    if (i[g]) {
      if ("loading" === i[g].status) return
    } else i[g] = {
      status: "init",
      UM: 0
    };
    var k = a,
      m = k.M,
      n = [],
      n = "0" === D.Qt ? k.$a.CN.http : k.$a.CN.https,
      o = Math.abs(b + c) % n.length,
      q = "x=" + b + "&y=" + c + "&z=" + e,
      v = Cd(a.Ev),
      w = v.gF,
      v = v.bF,
      y = "_" + (0 > b ? "_" : "") + (0 > c ? "$" : "") + parseInt(Math.abs(b) + "" + Math.abs(c) + "" + e, 10).toString(36),
      q = q + a.YA + "v=" + w + "&udt=" + v + "&fn=window." + y,
      w = n[o] + "&" + q,
      w = n[o] + "&param=" + window.encodeURIComponent(Kb(q));
    window[y] = function (a) {
      clearTimeout(i[g].Ik);
      i[g] = s;
      if (a) {
        var n = m.ka(),
          o;
        a: {
          for (o = 0; o < k.rw.length; o++) {
            var q = k.rw[o];
            if (q[0] === b && q[1] === c && q[3] === e) {
              o = p;
              break a
            }
          }
          o = t
        }
        if (o !== t) {
          o = new Q("updateindoor");
          o.IndoorCanvas = [];
          o.IndoorCanvas.push({
            canvasDom: f,
            data: a,
            canvasID: f.id,
            ratio: k.Vc
          });
          m.dispatchEvent(o);
          if (m.U.vo) {
            if (k.Ug[f.id] = {
              V_: a,
              o_: f,
              Pl: b,
              Am: c,
              RD: n
            },
              k.Ev.dC.cC(a, f, b, c, n, k.Cd.Id(n), k.Cd.ZC(n), k.$a.qD), k.$a.HE) {
              n = [];
              n.p_ = [b, c, e];
              if (a[0]) for (o = 0; o < a[0].length; o++) a[0][o][0] === nd && n.push({
                zL: a[0][o]
              });
              if (a[2]) for (o = 0; o < a[2].length; o++) n.push({
                eY: a[2][o]
              });
              f.TE = n;
              k.Ir.push(n);
              k.gx === t && k.Os--; (0 === k.Os || k.gx === p) && Ad(k)
            }
          } else k.Os-- ,
            (0 === k.Os || k.gx === p) && Ad(k);
          delete window[y]
        }
      }
    };
    pa(w);
    i[g].status = "loading";
    k = a;
    i[g].Ik = setTimeout(function () {
      3 > i[g].UM ? (i[g].UM++ , i[g].status = "init", Bd(k, b, c, e, f)) : i[g] = s
    },
      4E3)
  }
  function Ad(a) {
    if (a.kx) {
      var b = a.M;
      a.kx.style.left = -b.offsetX + "px";
      a.kx.style.top = -b.offsetY + "px";
      var c = new Q("updateindoorlabel");
      c.labelCanvasDom = b.ER;
      b.dispatchEvent(c);
      if (b.U.vo) {
        a.ko();
        var c = a.Cd,
          e = b.ka(),
          b = c.js(b.ka());
        a.Ev.dC.QJ(a.Ir, a.$a.qD, a.So, c.Id(e), Math.pow(2, e - b), e)
      }
    }
  }
  fa.ko = function () {
    var a = this.M.Hb(),
      b = this.Vc;
    this.So.clearRect(0, 0, a.width * b, a.height * b)
  };
  fa.remove = function () {
    var a = this.M.oh;
    this.Rn && a.Hg.removeChild(this.Rn)
  };
  function Kc(a) {
    this.M = a.map;
    this.$e = [];
    this.qr = {};
    this.MM = this.M.U.devicePixelRatio;
    this.dC = new yd(this.M);
    this.xa()
  }
  window.VectorIndoorTileMgr = "VectorIndoorTileMgr";
  fa = Kc.prototype;
  fa.xa = function () {
    var a = this,
      b = this.M;
    b.addEventListener("addtilelayer",
      function (b) {
        a.Me(b.target)
      });
    b.addEventListener("removetilelayer",
      function (b) {
        a.Tf(b.target)
      });
    setTimeout(function () {
      b.addEventListener("onmoveend",
        function (b) {
          "centerAndZoom" !== b.iz && a.update()
        });
      b.addEventListener("onmoving",
        function () {
          a.update()
        });
      b.addEventListener("onzoomend",
        function (b) {
          "centerAndZoom" !== b.iz && a.update({
            ko: p
          })
        });
      b.addEventListener("centerandzoom",
        function () {
          a.update({
            ko: p
          })
        });
      b.addEventListener("onupdatestyles",
        function () {
          a.update({
            ko: p,
            dF: p
          });
          a.M.pf(a.M.Bb());
          setTimeout(function () {
            a.M.dispatchEvent(new Q("onvectordrawend"))
          },
            10)
        })
    },
      1);
    b.addEventListener("indoor_data_refresh", u());
    b.addEventListener("onresize",
      function () {
        a.update({
          ZZ: p
        })
      });
    a.update()
  };
  fa.Me = function (a) {
    if (a instanceof Lc) {
      for (var b = 0; b < this.$e.length; b++) if (this.$e[b] === a) return;
      this.$e.push(a);
      a.xa();
      this.M.loaded && this.update()
    }
  };
  fa.Tf = function (a) {
    if (a instanceof Lc) {
      for (var b = 0; b < this.$e.length; b++) if (this.$e[b] === a) {
        this.$e.splice(b, 1);
        break
      }
      a.remove()
    }
  };
  fa.OK = function (a) {
    var b = a.getName();
    if (this.qr[b]) return this.qr[b];
    var c = this.M,
      e = c.ka(),
      f = c.fc,
      g = a.ZC(e);
    c.ea.replace(/^TANGRAM_/, "");
    var i = Math.ceil(f.lng / g),
      k = Math.ceil(f.lat / g),
      a = a.Id(e),
      m = [i, k, (f.lng / g - i) * a, (f.lat / g - k) * a],
      e = m[0] - Math.ceil((c.width / 2 - m[2]) / a),
      f = m[1] - Math.ceil((c.height / 2 - m[3]) / a),
      g = m[0] + Math.ceil((c.width / 2 + m[2]) / a),
      c = m[1] + Math.ceil((c.height / 2 + m[3]) / a);
    this.Be ? this.Be.length = 0 : this.Be = [];
    for (a = e; a < g; a++) for (e = f; e < c; e++) this.Be.push([a, e]);
    this.Be.sort(function (a) {
      return function (b, c) {
        return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
      }
    }([i, k]));
    this.qr[b] = this.Be.slice(0);
    return this.qr[b]
  };
  function Cd(a) {
    if (a.hF) return a.hF;
    a.hF = {
      gF: "001",
      bF: Sb("normal")
    };
    return a.hF
  }
  fa.update = function (a) {
    this.qr = {};
    for (var b = 0; b < this.$e.length; b++) {
      var c = this.$e[b],
        e = this.OK(c.Cd);
      c.update(e, a)
    }
  };
  function Dd(a, b, c) {
    this.jd = a;
    this.$e = b instanceof Mc ? [b] : b.slice(0);
    c = c || {};
    this.m = {
      t_: c.tips || "",
      MD: "",
      gc: c.minZoom || 4,
      pc: c.maxZoom || 18,
      k3: c.minZoom || 4,
      j3: c.maxZoom || 18,
      fy: 256,
      SE: c.textColor || "black",
      xC: c.errorImageUrl || "",
      fb: new hb(new J(- 21364736, -16023552), new J(23855104, 19431424)),
      Pc: c.projection || new S
    };
    1 <= this.$e.length && (this.$e[0].Vv = p);
    z.extend(this.m, c)
  }
  z.extend(Dd.prototype, {
    getName: x("jd"),
    xs: function () {
      return this.m.t_
    },
    J2: function () {
      return this.m.MD
    },
    eX: function () {
      return this.$e[0]
    },
    X2: x("$e"),
    Id: function () {
      return this.m.fy
    },
    aj: function () {
      return this.m.gc
    },
    Xh: function () {
      return this.m.pc
    },
    setMaxZoom: function (a) {
      this.m.pc = a
    },
    dm: function () {
      return this.m.SE
    },
    nk: function () {
      return this.m.Pc
    },
    C2: function () {
      return this.m.xC
    },
    Id: function () {
      return this.m.fy
    },
    dc: function (a) {
      return Math.pow(2, 18 - a)
    },
    TK: function (a) {
      return this.dc(a) * this.Id()
    }
  });
  var Ed = [D.url.proto + D.url.domain.TILE_BASE_URLS[0] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[1] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[2] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[3] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[4] + "/it/"],
    Fd = [D.url.proto + D.url.domain.TILE_ONLINE_URLS[0] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[1] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[2] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[3] + "/tile/"],
    Gd = {
      dark: "dl",
      light: "ll",
      normal: "pl"
    },
    Hd = new Mc;
  Hd.TZ = p;
  Hd.getTilesUrl = function (a, b, c) {
    var e = a.x,
      a = a.y,
      f = Sb("normal"),
      g = 1,
      c = Gd[c];

    this.map.$w() && (g = 2);
    e = this.map.oh.Wv(e, b).Pl;
    if ("undefined" != typeof tilesReturnObj) {
      return tilesReturnObj.returnVal + "?styleType=1&level=" + b + "&pointX=" + e + "&pointY=" + a + "&supplier=" + tilesReturnObj.supplier;
    } else {
      return (Fd[Math.abs(e + a) % Fd.length] + "?qt=vtile&x=" + (e + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + c + "&scaler=" + g + (6 == z.fa.ma ? "&color_dep=32&colors=50" : "") + "&udt=" + f).replace(/-(\d+)/gi, "M$1")
    }
  };
  var Pa = new Dd("\u5730\u56fe", Hd, {
    tips: "\u663e\u793a\u666e\u901a\u5730\u56fe",
    maxZoom: 19
  }),
    Id = new Mc;
  Id.BN = [D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
  Id.getTilesUrl = function (a, b) {
    var c = a.x,
      e = a.y,
      f = 256 * Math.pow(2, 20 - b),
      e = Math.round((9998336 - f * e) / f) - 1;
    return url = this.BN[Math.abs(c + e) % this.BN.length] + this.map.Vb + "/" + this.map.bw + "/3/lv" + (21 - b) + "/" + c + "," + e + ".jpg"
  };
  var Sa = new Dd("\u4e09\u7ef4", Id, {
    tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
    minZoom: 15,
    maxZoom: 20,
    textColor: "white",
    projection: new jb
  });
  Sa.dc = function (a) {
    return Math.pow(2, 20 - a)
  };
  Sa.ik = function (a) {
    if (!a) return "";
    var b = H.wB,
      c;
    for (c in b) if (- 1 < a.search(c)) return b[c].Fx;
    return ""
  };
  Sa.qK = function (a) {
    return {
      bj: 2,
      gz: 1,
      sz: 14,
      sh: 4
    }[a]
  };
  var Jd = new Mc({
    Vv: p
  });
  Jd.getTilesUrl = function (a, b) {
    var c = a.x,
      e = a.y;
    return (Ed[Math.abs(c + e) % Ed.length] + "u=x=" + c + ";y=" + e + ";z=" + b + ";v=009;type=sate&fm=46&udt=" + Sb("satellite")).replace(/-(\d+)/gi, "M$1")
  };
  var ab = new Dd("\u536b\u661f", Jd, {
    tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
    minZoom: 4,
    maxZoom: 19,
    textColor: "white"
  }),
    Kd = new Mc({
      transparentPng: p
    });
  Kd.getTilesUrl = function (a, b) {
    var c = a.x,
      e = a.y,
      f = Sb("satelliteStreet");
    return (Fd[Math.abs(c + e) % Fd.length] + "?qt=vtile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (e + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == z.fa.ma ? "&color_dep=32&colors=50" : "") + "&udt=" + f).replace(/-(\d+)/gi, "M$1")
  };
  var Va = new Dd("\u6df7\u5408", [Jd, Kd], {
    tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
    labelText: "\u8def\u7f51",
    minZoom: 4,
    maxZoom: 19,
    textColor: "white"
  });
  var Ld = 1,
    W = {};
  window.h0 = W;
  function X(a, b) {
    z.lang.Ga.call(this);
    this.zd = {};
    this.Em(a);
    b = b || {};
    b.pa = b.renderOptions || {};
    this.m = {
      pa: {
        Oa: b.pa.panel || s,
        map: b.pa.map || s,
        Sg: b.pa.autoViewport || p,
        jt: b.pa.selectFirstResult,
        Bs: b.pa.highlightMode,
        Wb: b.pa.enableDragging || t
      },
      Ys: b.onSearchComplete || u(),
      oM: b.onMarkersSet || u(),
      nM: b.onInfoHtmlSet || u(),
      qM: b.onResultsHtmlSet || u(),
      mM: b.onGetBusListComplete || u(),
      lM: b.onGetBusLineComplete || u(),
      jM: b.onBusListHtmlSet || u(),
      iM: b.onBusLineHtmlSet || u(),
      aE: b.onPolylinesSet || u(),
      dp: b.reqFrom || ""
    };
    this.m.pa.Sg = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : p;
    this.m.pa.Oa = z.Ec(this.m.pa.Oa)
  }
  z.wa(X, z.lang.Ga);
  z.extend(X.prototype, {
    getResults: function () {
      return this.Gc ? this.yi : this.la
    },
    enableAutoViewport: function () {
      this.m.pa.Sg = p
    },
    disableAutoViewport: function () {
      this.m.pa.Sg = t
    },
    Em: function (a) {
      a && (this.zd.src = a)
    },
    wt: function (a) {
      this.m.Ys = a || u()
    },
    setMarkersSetCallback: function (a) {
      this.m.oM = a || u()
    },
    setPolylinesSetCallback: function (a) {
      this.m.aE = a || u()
    },
    setInfoHtmlSetCallback: function (a) {
      this.m.nM = a || u()
    },
    setResultsHtmlSetCallback: function (a) {
      this.m.qM = a || u()
    },
    bm: x("Ke")
  });
  var Md = {
    KF: D.nd,
    nb: function (a, b, c, e, f) {
      this.$Y(b);
      var g = (1E5 * Math.random()).toFixed(0);
      D._rd["_cbk" + g] = function (b) {
        b.result && b.result.error && 202 === b.result.error ? alert("\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01") : (c = c || {},
          a && a(b, c), delete D._rd["_cbk" + g])
      };
      e = e || "";
      b = c && c.M_ ? Gb(b, encodeURI) : Gb(b, encodeURIComponent);
      this.KF = c && c.$J ? c.SM ? c.SM : D.Wo : D.nd;
      e = this.KF + e + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
      f || (e += "&res=api");
      e = e + ("&callback=BMap._rd._cbk" + g) + ("&ak=" + qa);
      pa(e)
    },
    $Y: function (a) {
      if (a.qt) {
        var b = "";
        switch (a.qt) {
          case "bt":
            b = "z_qt|bt";
            break;
          case "nav":
            b = "z_qt|nav";
            break;
          case "walk":
            b = "z_qt|walk";
            break;
          case "bse":
            b = "z_qt|bse";
            break;
          case "nse":
            b = "z_qt|nse";
            break;
          case "drag":
            b = "z_qt|drag"
        }
        "" !== b && D.alog("cus.fire", "count", b)
      }
    }
  };
  window.v0 = Md;
  D._rd = {};
  var db = {};
  window.u0 = db;
  db.OM = function (a) {
    a = a.replace(/<\/?[^>]*>/g, "");
    return a = a.replace(/[ | ]* /g, " ")
  };
  db.HY = function (a) {
    return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
  };
  db.IY = function (a, b) {
    return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
  };
  var Nd = 2,
    Od = 6,
    Pd = 8,
    Qd = 2,
    Rd = 3,
    Sd = 6,
    Td = 0,
    Ud = "bt",
    Vd = "nav",
    Wd = "walk",
    Xd = "bl",
    Yd = "bsl",
    Zd = "ride",
    $d = 15,
    ae = 18;
  D.I = window.Instance = z.lang.Mc;
  function be(a, b, c) {
    z.lang.Ga.call(this);
    if (a) {
      this.Ya = "object" == typeof a ? a : z.Ec(a);
      this.page = 1;
      this.Jd = 100;
      this.$I = "pg";
      this.Sf = 4;
      this.iJ = b;
      this.update = p;
      a = {
        page: 1,
        c5: 100,
        Jd: 100,
        Sf: 4,
        $I: "pg",
        update: p
      };
      c || (c = a);
      for (var e in c) "undefined" != typeof c[e] && (this[e] = c[e]);
      this.za()
    }
  }
  z.extend(be.prototype, {
    za: function () {
      this.xa()
    },
    xa: function () {
      this.BU();
      this.Ya.innerHTML = this.$U()
    },
    BU: function () {
      isNaN(parseInt(this.page)) && (this.page = 1);
      isNaN(parseInt(this.Jd)) && (this.Jd = 1);
      1 > this.page && (this.page = 1);
      1 > this.Jd && (this.Jd = 1);
      this.page > this.Jd && (this.page = this.Jd);
      this.page = parseInt(this.page);
      this.Jd = parseInt(this.Jd)
    },
    O2: function () {
      location.search.match(RegExp("[?&]?" + this.$I + "=([^&]*)[&$]?", "gi"));
      this.page = RegExp.$1
    },
    $U: function () {
      var a = [],
        b = this.page - 1,
        c = this.page + 1;
      a.push('<p style="margin:0;padding:0;white-space:nowrap">');
      if (!(1 > b)) {
        if (this.page >= this.Sf) {
          var e;
          a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}", "BMap.I('" + this.ea + "').toPage(1);"))
        }
        a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}", "BMap.I('" + this.ea + "').toPage(" + b + ");"))
      }
      if (this.page < this.Sf) e = 0 == this.page % this.Sf ? this.page - this.Sf - 1 : this.page - this.page % this.Sf + 1,
        b = e + this.Sf - 1;
      else {
        e = Math.floor(this.Sf / 2);
        var f = this.Sf % 2 - 1,
          b = this.Jd > this.page + e ? this.page + e : this.Jd;
        e = this.page - e - f
      }
      this.page > this.Jd - this.Sf && this.page >= this.Sf && (e = this.Jd - this.Sf + 1, b = this.Jd);
      for (f = e; f <= b; f++) 0 < f && (f == this.page ? a.push('<span style="margin-right:3px">' + f + "</span>") : 1 <= f && f <= this.Jd && (e = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + f + "]</a></span>", a.push(e.replace("{temp3}", "BMap.I('" + this.ea + "').toPage(" + f + ");"))));
      c > this.Jd || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}", "BMap.I('" + this.ea + "').toPage(" + c + ");"));
      a.push("</p>");
      return a.join("")
    },
    toPage: function (a) {
      a = a ? a : 1;
      "function" == typeof this.iJ && (this.iJ(a), this.page = a);
      this.update && this.za()
    }
  });
  function fb(a, b) {
    X.call(this, a, b);
    b = b || {};
    b.renderOptions = b.renderOptions || {};
    this.mp(b.pageCapacity);
    "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.WB() : this.pC();
    this.Ba = [];
    this.sf = [];
    this.ob = -1;
    this.Ra = [];
    var c = this;
    K.load("local",
      function () {
        c.Oy()
      },
      p)
  }
  z.wa(fb, X, "LocalSearch");
  fb.Fp = 10;
  fb.q0 = 1;
  fb.Um = 100;
  fb.AF = 2E3;
  fb.IF = 1E5;
  z.extend(fb.prototype, {
    search: function (a, b) {
      this.Ra.push({
        method: "search",
        arguments: [a, b]
      })
    },
    Bm: function (a, b, c) {
      this.Ra.push({
        method: "searchInBounds",
        arguments: [a, b, c]
      })
    },
    jp: function (a, b, c, e) {
      this.Ra.push({
        method: "searchNearby",
        arguments: [a, b, c, e]
      })
    },
    Pe: function () {
      delete this.Ma;
      delete this.Ke;
      delete this.la;
      delete this.ya;
      this.ob = -1;
      this.Xa();
      this.m.pa.Oa && (this.m.pa.Oa.innerHTML = "")
    },
    em: u(),
    pC: function () {
      this.m.pa.jt = p
    },
    WB: function () {
      this.m.pa.jt = t
    },
    mp: function (a) {
      this.m.vk = "number" == typeof a && !isNaN(a) ? 1 > a ? fb.Fp : a > fb.Um ? fb.Fp : a : fb.Fp
    },
    kf: function () {
      return this.m.vk
    },
    toString: ea("LocalSearch")
  });
  var ce = fb.prototype;
  U(ce, {
    clearResults: ce.Pe,
    setPageCapacity: ce.mp,
    getPageCapacity: ce.kf,
    gotoPage: ce.em,
    searchNearby: ce.jp,
    searchInBounds: ce.Bm,
    search: ce.search,
    enableFirstResultSelection: ce.pC,
    disableFirstResultSelection: ce.WB
  });
  function de(a, b) {
    X.call(this, a, b)
  }
  z.wa(de, X, "BaseRoute");
  z.extend(de.prototype, {
    Pe: u()
  });
  function ee(a, b) {
    X.call(this, a, b);
    b = b || {};
    this.vt(b.policy);
    this.fN(b.intercityPolicy);
    this.oN(b.transitTypePolicy);
    this.mp(b.pageCapacity);
    this.Eb = Ud;
    this.Lp = Ld;
    this.Ba = [];
    this.ob = -1;
    this.m.mn = b.enableTraffic || t;
    this.Ra = [];
    var c = this;
    K.load("route",
      function () {
        c.Rd()
      })
  }
  ee.Um = 100;
  ee.yO = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
  ee.zO = [0, 3, 4, 0, 0, 0, 5];
  z.wa(ee, de, "TransitRoute");
  z.extend(ee.prototype, {
    vt: function (a) {
      this.m.he = 0 <= a && 5 >= a ? a : 0
    },
    fN: function (a) {
      this.m.jm = 0 <= a && 2 >= a ? a : 0
    },
    oN: function (a) {
      this.m.Km = 0 <= a && 2 >= a ? a : 0
    },
    Qz: function (a, b) {
      this.Ra.push({
        method: "_internalSearch",
        arguments: [a, b]
      })
    },
    search: function (a, b) {
      this.Ra.push({
        method: "search",
        arguments: [a, b]
      })
    },
    mp: function (a) {
      if ("string" === typeof a && (a = parseInt(a, 10), isNaN(a))) {
        this.m.vk = ee.Um;
        return
      }
      this.m.vk = "number" !== typeof a ? ee.Um : 1 <= a && a <= ee.Um ? Math.round(a) : ee.Um
    },
    toString: ea("TransitRoute"),
    g1: function (a) {
      return a.replace(/\(.*\)/, "")
    }
  });
  var fe = ee.prototype;
  U(fe, {
    _internalSearch: fe.Qz
  });
  function ge(a, b) {
    X.call(this, a, b);
    this.Ba = [];
    this.ob = -1;
    this.Ra = [];
    var c = this,
      e = this.m.pa;
    1 !== e.Bs && 2 !== e.Bs && (e.Bs = 1);
    this.Bu = this.m.pa.Wb ? p : t;
    K.load("route",
      function () {
        c.Rd()
      });
    this.yD && this.yD()
  }
  ge.NO = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
  z.wa(ge, de, "DWRoute");
  z.extend(ge.prototype, {
    search: function (a, b, c) {
      this.Ra.push({
        method: "search",
        arguments: [a, b, c]
      })
    }
  });
  function he(a, b) {
    ge.call(this, a, b);
    b = b || {};
    this.m.mn = b.enableTraffic || t;
    this.vt(b.policy);
    this.Eb = Vd;
    this.Lp = Rd
  }
  z.wa(he, ge, "DrivingRoute");
  he.prototype.vt = function (a) {
    this.m.he = 0 <= a && 5 >= a ? a : 0
  };
  function ie(a, b) {
    ge.call(this, a, b);
    this.Eb = Wd;
    this.Lp = Qd;
    this.Bu = t
  }
  z.wa(ie, ge, "WalkingRoute");
  function je(a, b) {
    ge.call(this, a, b);
    this.Eb = Zd;
    this.Lp = Sd;
    this.Bu = t
  }
  z.wa(je, ge, "RidingRoute");
  function ke(a, b) {
    z.lang.Ga.call(this);
    this.Of = [];
    this.wk = [];
    this.m = b;
    this.mj = a;
    this.map = this.m.pa.map || s;
    this.$M = this.m.$M;
    this.Cb = s;
    this.ck = 0;
    this.OE = "";
    this.gf = 1;
    this.wC = "";
    this.ep = [0, 0, 0, 0, 0, 0, 0];
    this.ML = [];
    this.Gr = [1, 1, 1, 1, 1, 1, 1];
    this.JN = [1, 1, 1, 1, 1, 1, 1];
    this.fp = [0, 0, 0, 0, 0, 0, 0];
    this.zm = [0, 0, 0, 0, 0, 0, 0];
    this.Kb = [{
      B: "",
      Dd: 0,
      Lm: 0,
      x: 0,
      y: 0,
      ra: -1
    },
    {
      B: "",
      Dd: 0,
      Lm: 0,
      x: 0,
      y: 0,
      ra: -1
    },
    {
      B: "",
      Dd: 0,
      Lm: 0,
      x: 0,
      y: 0,
      ra: -1
    },
    {
      B: "",
      Dd: 0,
      Lm: 0,
      x: 0,
      y: 0,
      ra: -1
    },
    {
      B: "",
      Dd: 0,
      Lm: 0,
      x: 0,
      y: 0,
      ra: -1
    },
    {
      B: "",
      Dd: 0,
      Lm: 0,
      x: 0,
      y: 0,
      ra: -1
    },
    {
      B: "",
      Dd: 0,
      Lm: 0,
      x: 0,
      y: 0,
      ra: -1
    }];
    this.Qh = -1;
    this.Lt = [];
    this.$E = [];
    K.load("route", u())
  }
  z.lang.wa(ke, z.lang.Ga, "RouteAddr");
  var le = navigator.userAgent;
  /ipad|iphone|ipod|iph/i.test(le);
  var ne = /android/i.test(le);
  function oe(a) {
    this.Te = a || {}
  }
  z.extend(oe.prototype, {
    ZM: function (a, b, c) {
      var e = this;
      K.load("route",
        function () {
          e.Rd(a, b, c)
        })
    }
  });
  function pe(a) {
    this.m = {};
    z.extend(this.m, a);
    this.Ra = [];
    var b = this;
    K.load("othersearch",
      function () {
        b.Rd()
      })
  }
  z.wa(pe, z.lang.Ga, "Geocoder");
  z.extend(pe.prototype, {
    am: function (a, b, c) {
      this.Ra.push({
        method: "getPoint",
        arguments: [a, b, c]
      })
    },
    Zl: function (a, b, c) {
      this.Ra.push({
        method: "getLocation",
        arguments: [a, b, c]
      })
    },
    toString: ea("Geocoder")
  });
  var qe = pe.prototype;
  U(qe, {
    getPoint: qe.am,
    getLocation: qe.Zl
  });
  function Geolocation(a) {
    a = a || {};
    this.U = {
      timeout: a.timeout || 1E4,
      maximumAge: a.maximumAge || 6E5,
      enableHighAccuracy: a.enableHighAccuracy || t,
      si: a.SDKLocation || t
    };
    this.ne = [];
    var b = this;
    K.load("othersearch",
      function () {
        for (var a = 0,
          e; e = b.ne[a]; a++) b[e.method].apply(b, e.arguments)
      })
  }
  z.extend(Geolocation.prototype, {
    getCurrentPosition: function (a, b) {
      this.ne.push({
        method: "getCurrentPosition",
        arguments: arguments
      })
    },
    getStatus: function () {
      return Nd
    },
    enableSDKLocation: function () {
      I() && (this.U.si = p)
    },
    disableSDKLocation: function () {
      this.U.si = t
    }
  });
  function ue(a) {
    a = a || {};
    a.pa = a.renderOptions || {};
    this.m = {
      pa: {
        map: a.pa.map || s
      }
    };
    this.Ra = [];
    var b = this;
    K.load("othersearch",
      function () {
        b.Rd()
      })
  }
  z.wa(ue, z.lang.Ga, "LocalCity");
  z.extend(ue.prototype, {
    get: function (a) {
      this.Ra.push({
        method: "get",
        arguments: [a]
      })
    },
    toString: ea("LocalCity")
  });
  function ve() {
    this.Ra = [];
    var a = this;
    K.load("othersearch",
      function () {
        a.Rd()
      })
  }
  z.wa(ve, z.lang.Ga, "Boundary");
  z.extend(ve.prototype, {
    get: function (a, b) {
      this.Ra.push({
        method: "get",
        arguments: [a, b]
      })
    },
    toString: ea("Boundary")
  });
  function we(a, b) {
    X.call(this, a, b);
    this.KO = Xd;
    this.MO = $d;
    this.JO = Yd;
    this.LO = ae;
    this.Ra = [];
    var c = this;
    K.load("buslinesearch",
      function () {
        c.Rd()
      })
  }
  we.Pu = H.sa + "iw_plus.gif";
  we.DR = H.sa + "iw_minus.gif";
  we.uT = H.sa + "stop_icon.png";
  z.wa(we, X);
  z.extend(we.prototype, {
    getBusList: function (a) {
      this.Ra.push({
        method: "getBusList",
        arguments: [a]
      })
    },
    getBusLine: function (a) {
      this.Ra.push({
        method: "getBusLine",
        arguments: [a]
      })
    },
    setGetBusListCompleteCallback: function (a) {
      this.m.mM = a || u()
    },
    setGetBusLineCompleteCallback: function (a) {
      this.m.lM = a || u()
    },
    setBusListHtmlSetCallback: function (a) {
      this.m.jM = a || u()
    },
    setBusLineHtmlSetCallback: function (a) {
      this.m.iM = a || u()
    },
    setPolylinesSetCallback: function (a) {
      this.m.aE = a || u()
    }
  });
  function xe(a) {
    X.call(this, a);
    a = a || {};
    this.$a = {
      input: a.input || s,
      pB: a.baseDom || s,
      types: a.types || [],
      Ys: a.onSearchComplete || u()
    };
    this.zd.src = a.location || "\u5168\u56fd";
    this.Pi = "";
    this.gg = s;
    this.hH = "";
    this.Fi();
    Ta(Ka);
    var b = this;
    K.load("autocomplete",
      function () {
        b.Rd()
      })
  }
  z.wa(xe, X, "Autocomplete");
  z.extend(xe.prototype, {
    Fi: u(),
    show: u(),
    aa: u(),
    EE: function (a) {
      this.$a.types = a
    },
    Em: function (a) {
      this.zd.src = a
    },
    search: ca("Pi"),
    Rx: ca("hH"),
    wt: function (a) {
      this.$a.Ys = a
    }
  });
  var Wa;
  function Ra(a, b) {
    function c() {
      f.m.visible ? ("inter" === f.Ie && f.m.haveBreakId && f.m.indoorExitControl === p ? z.R.show(f.Jz) : z.R.aa(f.Jz), this.m.closeControl && this.wf && this.M && this.M.Ta() === this.P ? z.R.show(f.wf) : z.R.aa(f.wf), this.m.forceCloseControl && z.R.show(f.wf)) : (z.R.aa(f.wf), z.R.aa(f.Jz))
    }
    this.P = "string" == typeof a ? z.da(a) : a;
    this.ea = ye++;
    this.m = {
      enableScrollWheelZoom: p,
      panoramaRenderer: "flash",
      swfSrc: D.Yh("main_domain_nocdn", "res/swf/") + "APILoader.swf",
      visible: p,
      indoorExitControl: p,
      indoorFloorControl: t,
      linksControl: p,
      clickOnRoad: p,
      navigationControl: p,
      closeControl: p,
      indoorSceneSwitchControl: p,
      albumsControl: t,
      albumsControlOptions: {},
      copyrightControlOptions: {},
      forceCloseControl: t,
      haveBreakId: t
    };
    var b = b || {},
      e;
    for (e in b) this.m[e] = b[e];
    b.closeControl === p && (this.m.forceCloseControl = p);
    b.useWebGL === t && Qa(t);
    this.Ha = {
      heading: 0,
      pitch: 0
    };
    this.yn = [];
    this.Lb = this.bb = s;
    this.Rj = this.yq();
    this.Ba = [];
    this.Kc = 1;
    this.Ie = this.bS = this.Wk = "";
    this.He = {};
    this.If = s;
    this.Lg = [];
    this.Qq = [];
    "cvsRender" == this.Rj || Qa() ? (this.Jj = 90, this.Lj = -90) : "cssRender" == this.Rj && (this.Jj = 45, this.Lj = -45);
    this.Uq = t;
    var f = this;
    this.zn = function () {
      this.Rj === "flashRender" ? K.load("panoramaflash",
        function () {
          f.Fi()
        },
        p) : K.load("panorama",
          function () {
            f.jb()
          },
          p);
      b.hf == "api" ? Ta(Ga) : Ta(Ha);
      this.zn = u()
    };
    this.m.OR !== p && (this.zn(), D.Sp("cus.fire", "count", "z_loadpanoramacount"));
    this.FS(this.P);
    this.addEventListener("id_changed",
      function () {
        Ta(Fa, {
          from: b.hf
        })
      });
    this.XO();
    this.addEventListener("indoorexit_options_changed", c);
    this.addEventListener("scene_type_changed", c);
    this.addEventListener("onclose_options_changed", c);
    this.addEventListener("onvisible_changed", c)
  }
  var ze = 4,
    Ae = 1,
    ye = 0;
  z.lang.wa(Ra, z.lang.Ga, "Panorama");
  z.extend(Ra.prototype, {
    XO: function () {
      var a = this,
        b = this.wf = O("div");
      b.className = "pano_close";
      b.style.cssText = "z-index: 1201;display: none";
      b.title = "\u9000\u51fa\u5168\u666f";
      b.onclick = function () {
        a.aa()
      };
      this.P.appendChild(b);
      var c = this.Jz = O("a");
      c.className = "pano_pc_indoor_exit";
      c.style.cssText = "z-index: 1201;display: none";
      c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
      c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
      c.onclick = function () {
        a.xo()
      };
      this.P.appendChild(c);
      window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor = "rgb(37,37,37)", c.style.backgroundColor = "rgb(37,37,37)")
    },
    xo: u(),
    FS: function (a) {
      var b, c;
      b = a.style;
      c = Ya(a).position;
      "absolute" != c && "relative" != c && (b.position = "relative", b.zIndex = 0);
      if ("absolute" === c || "relative" === c) if (a = Ya(a).zIndex, !a || "auto" === a) b.zIndex = 0
    },
    GW: x("yn"),
    Xb: x("bb"),
    gX: x("yv"),
    nN: x("yv"),
    ja: x("Lb"),
    Ia: x("Ha"),
    ka: x("Kc"),
    $i: x("Wk"),
    Q2: function () {
      return this.b1 || []
    },
    L2: x("bS"),
    ws: x("Ie"),
    Tx: function (a) {
      a !== this.Ie && (this.Ie = a, this.dispatchEvent(new Q("onscene_type_changed")))
    },
    Cc: function (a, b, c) {
      "object" === typeof b && (c = b, b = l);
      a != this.bb && (this.gl = this.bb, this.hl = this.Lb, this.bb = a, this.Ie = b || "street", this.Lb = s, c && c.pov && this.qd(c.pov))
    },
    ua: function (a) {
      a.oc(this.Lb) || (this.gl = this.bb, this.hl = this.Lb, this.Lb = a, this.bb = s)
    },
    qd: function (a) {
      a && (this.Ha = a, a = this.Ha.pitch, a > this.Jj ? a = this.Jj : a < this.Lj && (a = this.Lj), this.Uq = p, this.Ha.pitch = a)
    },
    OZ: function (a, b) {
      this.Lj = 0 <= a ? 0 : a;
      this.Jj = 0 >= b ? 0 : b
    },
    Qc: function (a) {
      a != this.Kc && (a > ze && (a = ze), a < Ae && (a = Ae), a != this.Kc && (this.Kc = a), "cssRender" === this.Rj && this.qd(this.Ha))
    },
    LA: function () {
      if (this.M) for (var a = this.M.Ow(), b = 0; b < a.length; b++)(a[b] instanceof V || a[b] instanceof uc) && a[b].point && this.Ba.push(a[b])
    },
    BE: ca("M"),
    ut: function (a) {
      this.If = a || "none"
    },
    Bk: function (a) {
      for (var b in a) {
        if ("object" == typeof a[b]) for (var c in a[b]) this.m[b][c] = a[b][c];
        else this.m[b] = a[b];
        a.closeControl === p && (this.m.forceCloseControl = p);
        a.closeControl === t && (this.m.forceCloseControl = t);
        switch (b) {
          case "linksControl":
            this.dispatchEvent(new Q("onlinks_visible_changed"));
            break;
          case "clickOnRoad":
            this.dispatchEvent(new Q("onclickonroad_changed"));
            break;
          case "navigationControl":
            this.dispatchEvent(new Q("onnavigation_visible_changed"));
            break;
          case "indoorSceneSwitchControl":
            this.dispatchEvent(new Q("onindoor_default_switch_mode_changed"));
            break;
          case "albumsControl":
            this.dispatchEvent(new Q("onalbums_visible_changed"));
            break;
          case "albumsControlOptions":
            this.dispatchEvent(new Q("onalbums_options_changed"));
            break;
          case "copyrightControlOptions":
            this.dispatchEvent(new Q("oncopyright_options_changed"));
            break;
          case "closeControl":
            this.dispatchEvent(new Q("onclose_options_changed"));
            break;
          case "indoorExitControl":
            this.dispatchEvent(new Q("onindoorexit_options_changed"));
            break;
          case "indoorFloorControl":
            this.dispatchEvent(new Q("onindoorfloor_options_changed"))
        }
      }
    },
    rk: function () {
      this.pl.style.visibility = "hidden"
    },
    Xx: function () {
      this.pl.style.visibility = "visible"
    },
    QV: function () {
      this.m.enableScrollWheelZoom = p
    },
    rV: function () {
      this.m.enableScrollWheelZoom = t
    },
    show: function () {
      this.m.visible = p
    },
    aa: function () {
      this.m.visible = t
    },
    yq: function () {
      return Xa() && !I() && "javascript" != this.m.panoramaRenderer ? "flashRender" : !I() && Ob() ? "cvsRender" : "cssRender"
    },
    Pa: function (a) {
      this.He[a.kd] = a
    },
    Sb: function (a) {
      delete this.He[a]
    },
    mD: function () {
      return this.m.visible
    },
    Yg: function () {
      return new P(this.P.clientWidth, this.P.clientHeight)
    },
    Ta: x("P"),
    nK: function () {
      var a = D.Yh("baidumap", "?"),
        b = this.Xb();
      if (b) {
        var b = {
          panotype: this.ws(),
          heading: this.Ia().heading,
          pitch: this.Ia().pitch,
          pid: b,
          panoid: b,
          from: "api"
        },
          c;
        for (c in b) a += c + "=" + b[c] + "&"
      }
      return a.slice(0, -1)
    },
    Xw: function () {
      this.Bk({
        copyrightControlOptions: {
          logoVisible: t
        }
      })
    },
    IE: function () {
      this.Bk({
        copyrightControlOptions: {
          logoVisible: p
        }
      })
    },
    hB: function (a) {
      function b(a, b) {
        return function () {
          a.Qq.push({
            YL: b,
            XL: arguments
          })
        }
      }
      for (var c = a.getPanoMethodList(), e = "", f = 0, g = c.length; f < g; f++) e = c[f],
        this[e] = b(this, e);
      this.Lg.push(a)
    },
    mE: function (a) {
      for (var b = this.Lg.length; b--;) this.Lg[b] === a && this.Lg.splice(b, 1)
    },
    AE: u()
  });
  var Be = Ra.prototype;
  U(Be, {
    setId: Be.Cc,
    setPosition: Be.ua,
    setPov: Be.qd,
    setZoom: Be.Qc,
    setOptions: Be.Bk,
    getId: Be.Xb,
    getPosition: Be.ja,
    getPov: Be.Ia,
    getZoom: Be.ka,
    getLinks: Be.GW,
    getBaiduMapUrl: Be.nK,
    hideMapLogo: Be.Xw,
    showMapLogo: Be.IE,
    enableDoubleClickZoom: Be.b2,
    disableDoubleClickZoom: Be.S1,
    enableScrollWheelZoom: Be.QV,
    disableScrollWheelZoom: Be.rV,
    show: Be.show,
    hide: Be.aa,
    addPlugin: Be.hB,
    removePlugin: Be.mE,
    getVisible: Be.mD,
    addOverlay: Be.Pa,
    removeOverlay: Be.Sb,
    getSceneType: Be.ws,
    setPanoramaPOIType: Be.ut,
    exitInter: Be.xo,
    setInteractiveState: Be.AE
  });
  U(window, {
    BMAP_PANORAMA_POI_HOTEL: "hotel",
    BMAP_PANORAMA_POI_CATERING: "catering",
    BMAP_PANORAMA_POI_MOVIE: "movie",
    BMAP_PANORAMA_POI_TRANSIT: "transit",
    BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
    BMAP_PANORAMA_POI_NONE: "none",
    BMAP_PANORAMA_INDOOR_SCENE: "inter",
    BMAP_PANORAMA_STREET_SCENE: "street"
  });
  function Ce() {
    z.lang.Ga.call(this);
    this.kd = "PanoramaOverlay_" + this.ea;
    this.W = s;
    this.Sa = p
  }
  z.lang.wa(Ce, z.lang.Ga, "PanoramaOverlayBase");
  z.extend(Ce.prototype, {
    M2: x("kd"),
    xa: function () {
      aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
    },
    remove: function () {
      aa("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
    },
    Hf: function () {
      aa("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }
  });
  function De(a, b) {
    Ce.call(this);
    var c = {
      position: s,
      altitude: 2,
      displayDistance: p
    },
      b = b || {},
      e;
    for (e in b) c[e] = b[e];
    this.Lb = c.position;
    this.yj = a;
    this.Tp = c.altitude;
    this.hQ = c.displayDistance;
    this.SE = c.color;
    this.aL = c.hoverColor;
    this.backgroundColor = c.backgroundColor;
    this.cJ = c.backgroundHoverColor;
    this.borderColor = c.borderColor;
    this.gJ = c.borderHoverColor;
    this.fontSize = c.fontSize;
    this.padding = c.padding;
    this.sD = c.imageUrl;
    this.size = c.size;
    this.ve = c.image;
    this.width = c.width;
    this.height = c.height;
    this.AX = c.imageData;
    this.borderWidth = c.borderWidth
  }
  z.lang.wa(De, Ce, "PanoramaLabel");
  z.extend(De.prototype, {
    r2: x("borderWidth"),
    getImageData: x("AX"),
    dm: x("SE"),
    G2: x("aL"),
    n2: x("backgroundColor"),
    o2: x("cJ"),
    p2: x("borderColor"),
    q2: x("gJ"),
    E2: x("fontSize"),
    N2: x("padding"),
    H2: x("sD"),
    Hb: x("size"),
    Iw: x("ve"),
    ua: function (a) {
      this.Lb = a;
      this.Hf("position", a)
    },
    ja: x("Lb"),
    cd: function (a) {
      this.yj = a;
      this.Hf("content", a)
    },
    jk: x("yj"),
    uE: function (a) {
      this.Tp = a;
      this.Hf("altitude", a)
    },
    Bo: x("Tp"),
    Ia: function () {
      var a = this.ja(),
        b = s,
        c = s;
      this.W && (c = this.W.ja());
      if (a && c) if (a.oc(c)) b = this.W.Ia();
      else {
        b = {};
        b.heading = Ee(a.lng - c.lng, a.lat - c.lat) || 0;
        var a = b,
          c = this.Bo(),
          e = this.qn();
        a.pitch = Math.round(180 * (Math.atan(c / e) / Math.PI)) || 0
      }
      return b
    },
    qn: function () {
      var a = 0,
        b, c;
      this.W && (b = this.W.ja(), (c = this.ja()) && !c.oc(b) && (a = S.Do(b, c)));
      return a
    },
    aa: function () {
      aa("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
    },
    show: function () {
      aa("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
    },
    Hf: u()
  });
  var Fe = De.prototype;
  U(Fe, {
    setPosition: Fe.ua,
    getPosition: Fe.ja,
    setContent: Fe.cd,
    getContent: Fe.jk,
    setAltitude: Fe.uE,
    getAltitude: Fe.Bo,
    getPov: Fe.Ia,
    show: Fe.show,
    hide: Fe.aa
  });
  function Ge(a, b) {
    Ce.call(this);
    var c = {
      icon: "",
      title: "",
      panoInfo: s,
      altitude: 2
    },
      b = b || {},
      e;
    for (e in b) c[e] = b[e];
    this.Lb = a;
    this.eH = c.icon;
    this.wI = c.title;
    this.Tp = c.altitude;
    this.sS = c.panoInfo;
    this.Ha = {
      heading: 0,
      pitch: 0
    }
  }
  z.lang.wa(Ge, Ce, "PanoramaMarker");
  z.extend(Ge.prototype, {
    ua: function (a) {
      this.Lb = a;
      this.Hf("position", a)
    },
    ja: x("Lb"),
    Dc: function (a) {
      this.wI = a;
      this.Hf("title", a)
    },
    Jo: x("wI"),
    Tb: function (a) {
      this.eH = icon;
      this.Hf("icon", a)
    },
    Eo: x("eH"),
    uE: function (a) {
      this.Tp = a;
      this.Hf("altitude", a)
    },
    Bo: x("Tp"),
    bD: x("sS"),
    Ia: function () {
      var a = s;
      if (this.W) {
        var a = this.W.ja(),
          b = this.ja(),
          a = Ee(b.lng - a.lng, b.lat - a.lat);
        isNaN(a) && (a = 0);
        a = {
          heading: a,
          pitch: 0
        }
      } else a = this.Ha;
      return a
    },
    Hf: u()
  });
  var He = Ge.prototype;
  U(He, {
    setPosition: He.ua,
    getPosition: He.ja,
    setTitle: He.Dc,
    getTitle: He.Jo,
    setAltitude: He.uE,
    getAltitude: He.Bo,
    getPanoInfo: He.bD,
    getIcon: He.Eo,
    setIcon: He.Tb,
    getPov: He.Ia
  });
  function Ee(a, b) {
    var c = 0;
    if (0 !== a && 0 !== b) {
      var c = 180 * (Math.atan(a / b) / Math.PI),
        e = 0;
      0 < a && 0 > b && (e = 90);
      0 > a && 0 > b && (e = 180);
      0 > a && 0 < b && (e = 270);
      c = (c + 90) % 90 + e
    } else 0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
    return Math.round(c)
  }
  function Qa(a) {
    if ("boolean" === typeof Ie) return Ie;
    if (a === t || !window.WebGLRenderingContext) return Ie = t;
    if (z.platform.jj) {
      a = 0;
      try {
        a = navigator.userAgent.split("Android ")[1].charAt(0)
      } catch (b) { }
      if (5 > a) return Ie = t
    }
    var a = document.createElement("canvas"),
      c = s;
    try {
      c = a.getContext("webgl")
    } catch (e) {
      Ie = t
    }
    return Ie = c === s ? t : p
  }
  var Ie;
  function Je() {
    if ("boolean" === typeof Ke) return Ke;
    Ke = p;
    if (z.platform.BD) return p;
    var a = navigator.userAgent;
    return - 1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? p : Ke = t
  }
  var Ke;
  function ec(a, b) {
    this.W = a || s;
    var c = this;
    c.W && c.ga();
    K.load("pservice",
      function () {
        c.BP()
      });
    "api" == (b || {}).hf ? Ta(Ia) : Ta(Ja);
    this.xd = {
      getPanoramaById: [],
      getPanoramaByLocation: [],
      getVisiblePOIs: [],
      getRecommendPanosById: [],
      getPanoramaVersions: [],
      checkPanoSupportByCityCode: [],
      getPanoramaByPOIId: [],
      getCopyrightProviders: []
    }
  }
  D.tm(function (a) {
    "flashRender" !== a.yq() && new ec(a, {
      hf: "api"
    })
  });
  z.extend(ec.prototype, {
    ga: function () {
      function a(a) {
        if (a) {
          if (a.id != b.yv) {
            b.nN(a.id);
            b.ia = a;
            Je() || b.dispatchEvent(new Q("onthumbnail_complete"));
            b.bb != s && (b.hl = b._position);
            for (var c in a) if (a.hasOwnProperty(c)) switch (b["_" + c] = a[c], c) {
              case "position":
                b.Lb = a[c];
                break;
              case "id":
                b.bb = a[c];
                break;
              case "links":
                b.yn = a[c];
                break;
              case "zoom":
                b.Kc = a[c]
            }
            if (b.hl) {
              var g = b.hl,
                i = b._position;
              c = g.lat;
              var k = i.lat,
                m = Pb(k - c),
                g = Pb(i.lng - g.lng);
              c = Math.sin(m / 2) * Math.sin(m / 2) + Math.cos(Pb(c)) * Math.cos(Pb(k)) * Math.sin(g / 2) * Math.sin(g / 2);
              b.uG = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
            }
            c = new Q("ondataload");
            c.data = a;
            b.dispatchEvent(c);
            b.dispatchEvent(new Q("onposition_changed"));
            b.dispatchEvent(new Q("onlinks_changed"));
            b.dispatchEvent(new Q("oncopyright_changed"), {
              copyright: a.copyright
            });
            a.Ml && b.m.closeControl ? z.R.show(b.AQ) : z.R.aa(b.AQ)
          }
        } else b.bb = b.gl,
          b.Lb = b.hl,
          b.dispatchEvent(new Q("onnoresult"))
      }
      var b = this.W,
        c = this;
      b.addEventListener("id_changed",
        function () {
          c.Ho(b.Xb(), a)
        });
      b.addEventListener("iid_changed",
        function () {
          c.Mg(ec.Rk + "qt=idata&iid=" + b.Fz + "&fn=",
            function (b) {
              if (b && b.result && 0 == b.result.error) {
                var b = b.content[0].interinfo,
                  f = {};
                f.Ml = b.BreakID;
                for (var g = b.Defaultfloor,
                  i = s,
                  k = 0; k < b.Floors.length; k++) if (b.Floors[k].Floor == g) {
                    i = b.Floors[k];
                    break
                  }
                f.id = i.StartID || i.Points[0].PID;
                c.Ho(f.id, a, f)
              }
            })
        });
      b.addEventListener("position_changed_inner",
        function () {
          c.dj(b.ja(), a)
        })
    },
    Ho: function (a, b) {
      this.xd.getPanoramaById.push(arguments)
    },
    dj: function (a, b, c) {
      this.xd.getPanoramaByLocation.push(arguments)
    },
    nD: function (a, b, c, e) {
      this.xd.getVisiblePOIs.push(arguments)
    },
    Rw: function (a, b) {
      this.xd.getRecommendPanosById.push(arguments)
    },
    Qw: function (a) {
      this.xd.getPanoramaVersions.push(arguments)
    },
    uB: function (a, b) {
      this.xd.checkPanoSupportByCityCode.push(arguments)
    },
    Pw: function (a, b) {
      this.xd.getPanoramaByPOIId.push(arguments)
    },
    rK: function (a) {
      this.xd.getCopyrightProviders.push(arguments)
    }
  });
  var Le = ec.prototype;
  U(Le, {
    getPanoramaById: Le.Ho,
    getPanoramaByLocation: Le.dj,
    getPanoramaByPOIId: Le.Pw
  });
  function dc(a) {
    Mc.call(this);
    "api" == (a || {}).hf ? Ta(Ca) : Ta(Da)
  }
  dc.OF = D.Yh("pano", "tile/");
  dc.prototype = new Mc;
  dc.prototype.getTilesUrl = function (a, b) {
    var c = dc.OF[(a.x + a.y) % dc.OF.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
    z.fa.ma && 6 >= z.fa.ma && (c += "&color_dep=32");
    return c
  };
  dc.prototype.Ns = ea(p);
  Me.Vd = new S;
  function Me() { }
  z.extend(Me, {
    sV: function (a, b, c) {
      c = z.lang.Mc(c);
      b = {
        data: b
      };
      "position_changed" == a && (b.data = Me.Vd.oj(new R(b.data.mercatorX, b.data.mercatorY)));
      c.dispatchEvent(new Q("on" + a), b)
    }
  });
  var Ne = Me;
  U(Ne, {
    dispatchFlashEvent: Ne.sV
  });
  var Oe = {
    BO: 50
  };
  Oe.fu = D.Yh("pano")[0];
  Oe.du = {
    width: 220,
    height: 60
  };
  z.extend(Oe, {
    jL: function (a, b, c, e) {
      if (!b || !c || !c.lngLat || !c.panoInstance) e();
      else {
        this.En === l && (this.En = new ec(s, {
          hf: "api"
        }));
        var f = this;
        this.En.uB(b,
          function (b) {
            b ? f.En.dj(c.lngLat, Oe.BO,
              function (b) {
                if (b && b.id) {
                  var g = b.id,
                    m = b.gh,
                    b = b.hh,
                    n = ec.Vd.qg(c.lngLat),
                    o = f.fR(n, {
                      x: m,
                      y: b
                    }),
                    m = f.CK(g, o, 0, Oe.du.width, Oe.du.height);
                  a.content = f.gR(a.content, m, c.titleTip, c.beforeDomId);
                  a.addEventListener("open",
                    function () {
                      ja.V(z.Ec("infoWndPano"), "click",
                        function () {
                          c.panoInstance.Cc(g);
                          c.panoInstance.show();
                          c.panoInstance.qd({
                            heading: o,
                            pitch: 0
                          })
                        })
                    })
                }
                e()
              }) : e()
          })
      }
    },
    gR: function (a, b, c, e) {
      var c = c || "",
        f; !e || !a.split(e)[0] ? (e = a, a = "") : (e = a.split(e)[0], f = e.lastIndexOf("<"), e = a.substring(0, f), a = a.substring(f));
      f = [];
      var g = Oe.du.width,
        i = Oe.du.height;
      f.push(e);
      f.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + i + "px;width:" + g + "px; margin-top: -19px;'>");
      f.push("<img class='pano_thumnail_img' width='" + g + "' height='" + i + "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + g + ", " + i + ");' />");
      f.push("<div class='panoInfoBoxTitleBg' style='width:" + g + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");
      f.push("</div>");
      f.push(a);
      return f.join("")
    },
    fR: function (a, b) {
      var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
      0 > c && (c += 360);
      return c
    },
    CK: function (a, b, c, e, f) {
      var g = {
        panoId: a,
        panoHeading: b || 0,
        panoPitch: c || 0,
        width: e,
        height: f
      };
      return (Oe.fu + "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}").replace(/\{(.*?)\}/g,
        function (a, b) {
          return g[b]
        })
    }
  });
  var Pe = document,
    Qe = Math,
    Re = Pe.createElement("div").style,
    Se;
  a: {
    for (var Te = ["t", "webkitT", "MozT", "msT", "OT"], Ue, Ve = 0, We = Te.length; Ve < We; Ve++) if (Ue = Te[Ve] + "ransform", Ue in Re) {
      Se = Te[Ve].substr(0, Te[Ve].length - 1);
      break a
    }
    Se = t
  }
  var Xe = Se ? "-" + Se.toLowerCase() + "-" : "",
    Ze = Ye("transform"),
    $e = Ye("transitionProperty"),
    af = Ye("transitionDuration"),
    bf = Ye("transformOrigin"),
    cf = Ye("transitionTimingFunction"),
    df = Ye("transitionDelay"),
    ne = /android/gi.test(navigator.appVersion),
    ef = /iphone|ipad/gi.test(navigator.appVersion),
    ff = /hp-tablet/gi.test(navigator.appVersion),
    gf = Ye("perspective") in Re,
    hf = "ontouchstart" in window && !ff,
    jf = Se !== t,
    kf = Ye("transition") in Re,
    lf = "onorientationchange" in window ? "orientationchange" : "resize",
    mf = hf ? "touchstart" : "mousedown",
    nf = hf ? "touchmove" : "mousemove",
    of = hf ? "touchend" : "mouseup",
    pf = hf ? "touchcancel" : "mouseup",
    qf = Se === t ? t : {
      "": "transitionend",
      webkit: "webkitTransitionEnd",
      Moz: "transitionend",
      O: "otransitionend",
      ms: "MSTransitionEnd"
    }[Se],
    rf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
      function (a) {
        return setTimeout(a, 1)
      },
    sf = window.cancelRequestAnimationFrame || window.t5 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout,
    tf = gf ? " translateZ(0)" : "";
  function uf(a, b) {
    var c = this,
      e;
    c.Pm = "object" == typeof a ? a : Pe.getElementById(a);
    c.Pm.style.overflow = "hidden";
    c.Ob = c.Pm.children[0];
    c.options = {
      No: p,
      Mm: p,
      x: 0,
      y: 0,
      fo: p,
      oU: t,
      qx: p,
      PD: p,
      Kk: p,
      pi: t,
      w_: 0,
      $v: t,
      Uw: p,
      Zh: p,
      qi: p,
      CC: ne,
      Yw: ef,
      YV: ef && gf,
      rE: "",
      zoom: t,
      Mk: 1,
      Bp: 4,
      uV: 2,
      gO: "scroll",
      Dt: t,
      $x: 1,
      pM: s,
      hM: function (a) {
        a.preventDefault()
      },
      sM: s,
      gM: s,
      rM: s,
      fM: s,
      xx: s,
      tM: s,
      kM: s,
      $o: s,
      uM: s,
      Zo: s
    };
    for (e in b) c.options[e] = b[e];
    c.x = c.options.x;
    c.y = c.options.y;
    c.options.Kk = jf && c.options.Kk;
    c.options.Zh = c.options.No && c.options.Zh;
    c.options.qi = c.options.Mm && c.options.qi;
    c.options.zoom = c.options.Kk && c.options.zoom;
    c.options.pi = kf && c.options.pi;
    c.options.zoom && ne && (tf = "");
    c.Ob.style[$e] = c.options.Kk ? Xe + "transform" : "top left";
    c.Ob.style[af] = "0";
    c.Ob.style[bf] = "0 0";
    c.options.pi && (c.Ob.style[cf] = "cubic-bezier(0.33,0.66,0.66,1)");
    c.options.Kk ? c.Ob.style[Ze] = "translate(" + c.x + "px," + c.y + "px)" + tf : c.Ob.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
    c.options.pi && (c.options.CC = p);
    c.refresh();
    c.ga(lf, window);
    c.ga(mf); !hf && "none" != c.options.gO && (c.ga("DOMMouseScroll"), c.ga("mousewheel"));
    c.options.$v && (c.AU = setInterval(function () {
      c.zP()
    },
      500));
    this.options.Uw && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function (a, b, c) {
      var e = Node.prototype.removeEventListener;
      a === "click" ? e.call(document.body, a, b.$K || b, c) : e.call(document.body, a, b, c)
    },
      document.body.addEventListener = function (a, b, c) {
        var e = Node.prototype.addEventListener;
        a === "click" ? e.call(document.body, a, b.$K || (b.$K = function (a) {
          a.ZY || b(a)
        }), c) : e.call(document.body, a, b, c)
      }), c.ga("click", document.body, p))
  }
  uf.prototype = {
    enabled: p,
    x: 0,
    y: 0,
    pj: [],
    scale: 1,
    KB: 0,
    LB: 0,
    Ue: [],
    of: [],
    oB: s,
    jy: 0,
    handleEvent: function (a) {
      switch (a.type) {
        case mf:
          if (!hf && 0 !== a.button) break;
          this.rv(a);
          break;
        case nf:
          this.dS(a);
          break;
        case of:
        case pf:
          this.Cu(a);
          break;
        case lf:
          this.EA();
          break;
        case "DOMMouseScroll":
        case "mousewheel":
          this.HT(a);
          break;
        case qf:
          this.DT(a);
          break;
        case "click":
          this.JP(a)
      }
    },
    zP: function () {
      !this.fh && (!this.Nk && !(this.Jl || this.Qx == this.Ob.offsetWidth * this.scale && this.ip == this.Ob.offsetHeight * this.scale)) && this.refresh()
    },
    iv: function (a) {
      var b;
      this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = Pe.createElement("div"), this.options.rE ? b.className = this.options.rE + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (this.qi ? "7" : "2") + "px" : "width:7px;bottom:" + (this.Zh ? "7" : "2") + "px;top:2px;right:1px"), b.style.cssText += ";pointer-events:none;" + Xe + "transition-property:opacity;" + Xe + "transition-duration:" + (this.options.YV ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.Yw ? "0" : "1"), this.Pm.appendChild(b), this[a + "ScrollbarWrapper"] = b, b = Pe.createElement("div"), this.options.rE || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + Xe + "background-clip:padding-box;" + Xe + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + Xe + "border-radius:3px;border-radius:3px"), b.style.cssText += ";pointer-events:none;" + Xe + "transition-property:" + Xe + "transform;" + Xe + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + Xe + "transition-duration:0;" + Xe + "transform: translate(0,0)" + tf, this.options.pi && (b.style.cssText += ";" + Xe + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), this[a + "ScrollbarWrapper"].appendChild(b), this[a + "ScrollbarIndicator"] = b), "h" == a ? (this.WK = this.XK.clientWidth, this.rX = Qe.max(Qe.round(this.WK * this.WK / this.Qx), 8), this.qX.style.width = this.rX + "px") : (this.ZN = this.$N.clientHeight, this.Q_ = Qe.max(Qe.round(this.ZN * this.ZN / this.ip), 8), this.P_.style.height = this.Q_ + "px"), this.FA(a, p)) : this[a + "ScrollbarWrapper"] && (jf && (this[a + "ScrollbarIndicator"].style[Ze] = ""), this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]), this[a + "ScrollbarWrapper"] = s, this[a + "ScrollbarIndicator"] = s)
    },
    EA: function () {
      var a = this;
      setTimeout(function () {
        a.refresh()
      },
        ne ? 200 : 0)
    },
    Tq: function (a, b) {
      this.Nk || (a = this.No ? a : 0, b = this.Mm ? b : 0, this.options.Kk ? this.Ob.style[Ze] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + tf : (a = Qe.round(a), b = Qe.round(b), this.Ob.style.left = a + "px", this.Ob.style.top = b + "px"), this.x = a, this.y = b, this.FA("h"), this.FA("v"))
    },
    FA: function (a, b) {
      var c = "h" == a ? this.x : this.y;
      this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"], 0 > c ? (this.options.CC || (c = this[a + "ScrollbarIndicatorSize"] + Qe.round(3 * c), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"), c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.CC ? c = this[a + "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - Qe.round(3 * (c - this[a + "ScrollbarMaxScroll"])), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px", c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))), this[a + "ScrollbarWrapper"].style[df] = "0", this[a + "ScrollbarWrapper"].style.opacity = b && this.options.Yw ? "0" : "1", this[a + "ScrollbarIndicator"].style[Ze] = "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + tf)
    },
    JP: function (a) {
      if (a.BQ === p) return this.dB = a.target,
        this.Aw = Date.now(),
        p;
      if (this.dB && this.Aw) {
        if (600 < Date.now() - this.Aw) return this.Aw = this.dB = s,
          p
      } else {
        for (var b = a.target; b != this.Ob && b != document.body;) b = b.parentNode;
        if (b == document.body) return p
      }
      for (b = a.target; 1 != b.nodeType;) b = b.parentNode;
      b = b.tagName.toLowerCase();
      if ("select" != b && "input" != b && "textarea" != b) return a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.ZY = p,
        a.stopPropagation(),
        a.preventDefault(),
        this.Aw = this.dB = s,
        t
    },
    rv: function (a) {
      var b = hf ? a.touches[0] : a,
        c,
        e;
      if (this.enabled) {
        this.options.hM && this.options.hM.call(this, a); (this.options.pi || this.options.zoom) && this.yI(0);
        this.Nk = this.Jl = this.fh = t;
        this.TB = this.SB = this.Kv = this.Jv = this.ZB = this.YB = 0;
        this.options.zoom && (hf && 1 < a.touches.length) && (e = Qe.abs(a.touches[0].pageX - a.touches[1].pageX), c = Qe.abs(a.touches[0].pageY - a.touches[1].pageY), this.y_ = Qe.sqrt(e * e + c * c), this.zx = Qe.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.jF) / 2 - this.x, this.Ax = Qe.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.kF) / 2 - this.y, this.options.$o && this.options.$o.call(this, a));
        if (this.options.qx && (this.options.Kk ? (c = getComputedStyle(this.Ob, s)[Ze].replace(/[^0-9\-.,]/g, "").split(","), e = +(c[12] || c[4]), c = +(c[13] || c[5])) : (e = +getComputedStyle(this.Ob, s).left.replace(/[^0-9-]/g, ""), c = +getComputedStyle(this.Ob, s).top.replace(/[^0-9-]/g, "")), e != this.x || c != this.y)) this.options.pi ? this.Zd(qf) : sf(this.oB),
          this.pj = [],
          this.Tq(e, c),
          this.options.xx && this.options.xx.call(this);
        this.Lv = this.x;
        this.Mv = this.y;
        this.Gt = this.x;
        this.Ht = this.y;
        this.gh = b.pageX;
        this.hh = b.pageY;
        this.startTime = a.timeStamp || Date.now();
        this.options.sM && this.options.sM.call(this, a);
        this.ga(nf, window);
        this.ga(of, window);
        this.ga(pf, window)
      }
    },
    dS: function (a) {
      var b = hf ? a.touches[0] : a,
        c = b.pageX - this.gh,
        e = b.pageY - this.hh,
        f = this.x + c,
        g = this.y + e,
        i = a.timeStamp || Date.now();
      this.options.gM && this.options.gM.call(this, a);
      if (this.options.zoom && hf && 1 < a.touches.length) f = Qe.abs(a.touches[0].pageX - a.touches[1].pageX),
        g = Qe.abs(a.touches[0].pageY - a.touches[1].pageY),
        this.x_ = Qe.sqrt(f * f + g * g),
        this.Nk = p,
        b = 1 / this.y_ * this.x_ * this.scale,
        b < this.options.Mk ? b = 0.5 * this.options.Mk * Math.pow(2, b / this.options.Mk) : b > this.options.Bp && (b = 2 * this.options.Bp * Math.pow(0.5, this.options.Bp / b)),
        this.To = b / this.scale,
        f = this.zx - this.zx * this.To + this.x,
        g = this.Ax - this.Ax * this.To + this.y,
        this.Ob.style[Ze] = "translate(" + f + "px," + g + "px) scale(" + b + ")" + tf,
        this.options.uM && this.options.uM.call(this, a);
      else {
        this.gh = b.pageX;
        this.hh = b.pageY;
        if (0 < f || f < this.ge) f = this.options.fo ? this.x + c / 2 : 0 <= f || 0 <= this.ge ? 0 : this.ge;
        if (g > this.mf || g < this.od) g = this.options.fo ? this.y + e / 2 : g >= this.mf || 0 <= this.od ? this.mf : this.od;
        this.YB += c;
        this.ZB += e;
        this.Jv = Qe.abs(this.YB);
        this.Kv = Qe.abs(this.ZB);
        6 > this.Jv && 6 > this.Kv || (this.options.PD && (this.Jv > this.Kv + 5 ? (g = this.y, e = 0) : this.Kv > this.Jv + 5 && (f = this.x, c = 0)), this.fh = p, this.Tq(f, g), this.SB = 0 < c ? -1 : 0 > c ? 1 : 0, this.TB = 0 < e ? -1 : 0 > e ? 1 : 0, 300 < i - this.startTime && (this.startTime = i, this.Gt = this.x, this.Ht = this.y), this.options.rM && this.options.rM.call(this, a))
      }
    },
    Cu: function (a) {
      if (!(hf && 0 !== a.touches.length)) {
        var b = this,
          c = hf ? a.changedTouches[0] : a,
          e,
          f,
          g = {
            Fa: 0,
            time: 0
          },
          i = {
            Fa: 0,
            time: 0
          },
          k = (a.timeStamp || Date.now()) - b.startTime;
        e = b.x;
        f = b.y;
        b.Zd(nf, window);
        b.Zd(of, window);
        b.Zd(pf, window);
        b.options.fM && b.options.fM.call(b, a);
        if (b.Nk) e = b.scale * b.To,
          e = Math.max(b.options.Mk, e),
          e = Math.min(b.options.Bp, e),
          b.To = e / b.scale,
          b.scale = e,
          b.x = b.zx - b.zx * b.To + b.x,
          b.y = b.Ax - b.Ax * b.To + b.y,
          b.Ob.style[af] = "200ms",
          b.Ob.style[Ze] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + tf,
          b.Nk = t,
          b.refresh(),
          b.options.Zo && b.options.Zo.call(b, a);
        else {
          if (b.fh) {
            if (300 > k && b.options.qx) {
              g = e ? b.uH(e - b.Gt, k, -b.x, b.Qx - b.Ut + b.x, b.options.fo ? b.Ut : 0) : g;
              i = f ? b.uH(f - b.Ht, k, -b.y, 0 > b.od ? b.ip - b.Qm + b.y - b.mf : 0, b.options.fo ? b.Qm : 0) : i;
              e = b.x + g.Fa;
              f = b.y + i.Fa;
              if (0 < b.x && 0 < e || b.x < b.ge && e < b.ge) g = {
                Fa: 0,
                time: 0
              };
              if (b.y > b.mf && f > b.mf || b.y < b.od && f < b.od) i = {
                Fa: 0,
                time: 0
              }
            }
            g.Fa || i.Fa ? (c = Qe.max(Qe.max(g.time, i.time), 10), b.options.Dt && (g = e - b.Lv, i = f - b.Mv, Qe.abs(g) < b.options.$x && Qe.abs(i) < b.options.$x ? b.scrollTo(b.Lv, b.Mv, 200) : (g = b.oI(e, f), e = g.x, f = g.y, c = Qe.max(g.time, c))), b.scrollTo(Qe.round(e), Qe.round(f), c)) : b.options.Dt ? (g = e - b.Lv, i = f - b.Mv, Qe.abs(g) < b.options.$x && Qe.abs(i) < b.options.$x ? b.scrollTo(b.Lv, b.Mv, 200) : (g = b.oI(b.x, b.y), (g.x != b.x || g.y != b.y) && b.scrollTo(g.x, g.y, g.time))) : b.Gn(200)
          } else {
            if (hf) if (b.JJ && b.options.zoom) clearTimeout(b.JJ),
              b.JJ = s,
              b.options.$o && b.options.$o.call(b, a),
              b.zoom(b.gh, b.hh, 1 == b.scale ? b.options.uV : 1),
              b.options.Zo && setTimeout(function () {
                b.options.Zo.call(b, a)
              },
                200);
            else if (this.options.Uw) {
              for (e = c.target; 1 != e.nodeType;) e = e.parentNode;
              f = e.tagName.toLowerCase();
              "select" != f && "input" != f && "textarea" != f ? (f = Pe.createEvent("MouseEvents"), f.initMouseEvent("click", p, p, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, s), f.BQ = p, e.dispatchEvent(f)) : e.focus()
            }
            b.Gn(400)
          }
          b.options.tM && b.options.tM.call(b, a)
        }
      }
    },
    Gn: function (a) {
      var b = 0 <= this.x ? 0 : this.x < this.ge ? this.ge : this.x,
        c = this.y >= this.mf || 0 < this.od ? this.mf : this.y < this.od ? this.od : this.y;
      if (b == this.x && c == this.y) {
        if (this.fh && (this.fh = t, this.options.xx && this.options.xx.call(this)), this.Zh && this.options.Yw && ("webkit" == Se && (this.XK.style[df] = "300ms"), this.XK.style.opacity = "0"), this.qi && this.options.Yw) "webkit" == Se && (this.$N.style[df] = "300ms"),
          this.$N.style.opacity = "0"
      } else this.scrollTo(b, c, a || 0)
    },
    HT: function (a) {
      var b = this,
        c, e;
      if ("wheelDeltaX" in a) c = a.wheelDeltaX / 12,
        e = a.wheelDeltaY / 12;
      else if ("wheelDelta" in a) c = e = a.wheelDelta / 12;
      else if ("detail" in a) c = e = 3 * -a.detail;
      else return;
      if ("zoom" == b.options.gO) {
        if (e = b.scale * Math.pow(2, 1 / 3 * (e ? e / Math.abs(e) : 0)), e < b.options.Mk && (e = b.options.Mk), e > b.options.Bp && (e = b.options.Bp), e != b.scale) !b.jy && b.options.$o && b.options.$o.call(b, a),
          b.jy++ ,
          b.zoom(a.pageX, a.pageY, e, 400),
          setTimeout(function () {
            b.jy--; !b.jy && b.options.Zo && b.options.Zo.call(b, a)
          },
            400)
      } else c = b.x + c,
        e = b.y + e,
        0 < c ? c = 0 : c < b.ge && (c = b.ge),
        e > b.mf ? e = b.mf : e < b.od && (e = b.od),
        0 > b.od && b.scrollTo(c, e, 0)
    },
    DT: function (a) {
      a.target == this.Ob && (this.Zd(qf), this.RA())
    },
    RA: function () {
      var a = this,
        b = a.x,
        c = a.y,
        e = Date.now(),
        f,
        g,
        i;
      a.Jl || (a.pj.length ? (f = a.pj.shift(), f.x == b && f.y == c && (f.time = 0), a.Jl = p, a.fh = p, a.options.pi) ? (a.yI(f.time), a.Tq(f.x, f.y), a.Jl = t, f.time ? a.ga(qf) : a.Gn(0)) : (i = function () {
        var k = Date.now(),
          m;
        if (k >= e + f.time) {
          a.Tq(f.x, f.y);
          a.Jl = t;
          a.options.zY && a.options.zY.call(a);
          a.RA()
        } else {
          k = (k - e) / f.time - 1;
          g = Qe.sqrt(1 - k * k);
          k = (f.x - b) * g + b;
          m = (f.y - c) * g + c;
          a.Tq(k, m);
          if (a.Jl) a.oB = rf(i)
        }
      },
        i()) : a.Gn(400))
    },
    yI: function (a) {
      a += "ms";
      this.Ob.style[af] = a;
      this.Zh && (this.qX.style[af] = a);
      this.qi && (this.P_.style[af] = a)
    },
    uH: function (a, b, c, e, f) {
      var b = Qe.abs(a) / b,
        g = b * b / 0.0012;
      0 < a && g > c ? (c += f / (6 / (6.0E-4 * (g / b))), b = b * c / g, g = c) : 0 > a && g > e && (e += f / (6 / (6.0E-4 * (g / b))), b = b * e / g, g = e);
      return {
        Fa: g * (0 > a ? -1 : 1),
        time: Qe.round(b / 6.0E-4)
      }
    },
    Nj: function (a) {
      for (var b = -a.offsetLeft,
        c = -a.offsetTop; a = a.offsetParent;) b -= a.offsetLeft,
          c -= a.offsetTop;
      a != this.Pm && (b *= this.scale, c *= this.scale);
      return {
        left: b,
        top: c
      }
    },
    oI: function (a, b) {
      var c, e, f;
      f = this.Ue.length - 1;
      c = 0;
      for (e = this.Ue.length; c < e; c++) if (a >= this.Ue[c]) {
        f = c;
        break
      }
      f == this.KB && (0 < f && 0 > this.SB) && f--;
      a = this.Ue[f];
      e = (e = Qe.abs(a - this.Ue[this.KB])) ? 500 * (Qe.abs(this.x - a) / e) : 0;
      this.KB = f;
      f = this.of.length - 1;
      for (c = 0; c < f; c++) if (b >= this.of[c]) {
        f = c;
        break
      }
      f == this.LB && (0 < f && 0 > this.TB) && f--;
      b = this.of[f];
      c = (c = Qe.abs(b - this.of[this.LB])) ? 500 * (Qe.abs(this.y - b) / c) : 0;
      this.LB = f;
      f = Qe.round(Qe.max(e, c)) || 200;
      return {
        x: a,
        y: b,
        time: f
      }
    },
    ga: function (a, b, c) {
      (b || this.Ob).addEventListener(a, this, !!c)
    },
    Zd: function (a, b, c) {
      (b || this.Ob).removeEventListener(a, this, !!c)
    },
    QB: ha(2),
    refresh: function () {
      var a, b, c, e = 0;
      b = 0;
      this.scale < this.options.Mk && (this.scale = this.options.Mk);
      this.Ut = this.Pm.clientWidth || 1;
      this.Qm = this.Pm.clientHeight || 1;
      this.mf = -this.options.w_ || 0;
      this.Qx = Qe.round(this.Ob.offsetWidth * this.scale);
      this.ip = Qe.round((this.Ob.offsetHeight + this.mf) * this.scale);
      this.ge = this.Ut - this.Qx;
      this.od = this.Qm - this.ip + this.mf;
      this.TB = this.SB = 0;
      this.options.pM && this.options.pM.call(this);
      this.No = this.options.No && 0 > this.ge;
      this.Mm = this.options.Mm && (!this.options.oU && !this.No || this.ip > this.Qm);
      this.Zh = this.No && this.options.Zh;
      this.qi = this.Mm && this.options.qi && this.ip > this.Qm;
      a = this.Nj(this.Pm);
      this.jF = -a.left;
      this.kF = -a.top;
      if ("string" == typeof this.options.Dt) {
        this.Ue = [];
        this.of = [];
        c = this.Ob.querySelectorAll(this.options.Dt);
        a = 0;
        for (b = c.length; a < b; a++) e = this.Nj(c[a]),
          e.left += this.jF,
          e.top += this.kF,
          this.Ue[a] = e.left < this.ge ? this.ge : e.left * this.scale,
          this.of[a] = e.top < this.od ? this.od : e.top * this.scale
      } else if (this.options.Dt) {
        for (this.Ue = []; e >= this.ge;) this.Ue[b] = e,
          e -= this.Ut,
          b++;
        this.ge % this.Ut && (this.Ue[this.Ue.length] = this.ge - this.Ue[this.Ue.length - 1] + this.Ue[this.Ue.length - 1]);
        b = e = 0;
        for (this.of = []; e >= this.od;) this.of[b] = e,
          e -= this.Qm,
          b++;
        this.od % this.Qm && (this.of[this.of.length] = this.od - this.of[this.of.length - 1] + this.of[this.of.length - 1])
      }
      this.iv("h");
      this.iv("v");
      this.Nk || (this.Ob.style[af] = "0", this.Gn(400))
    },
    scrollTo: function (a, b, c, e) {
      var f = a;
      this.stop();
      f.length || (f = [{
        x: a,
        y: b,
        time: c,
        bZ: e
      }]);
      a = 0;
      for (b = f.length; a < b; a++) f[a].bZ && (f[a].x = this.x - f[a].x, f[a].y = this.y - f[a].y),
        this.pj.push({
          x: f[a].x,
          y: f[a].y,
          time: f[a].time || 0
        });
      this.RA()
    },
    disable: function () {
      this.stop();
      this.Gn(0);
      this.enabled = t;
      this.Zd(nf, window);
      this.Zd(of, window);
      this.Zd(pf, window)
    },
    enable: function () {
      this.enabled = p
    },
    stop: function () {
      this.options.pi ? this.Zd(qf) : sf(this.oB);
      this.pj = [];
      this.Jl = this.fh = t
    },
    zoom: function (a, b, c, e) {
      var f = c / this.scale;
      this.options.Kk && (this.Nk = p, e = e === l ? 200 : e, a = a - this.jF - this.x, b = b - this.kF - this.y, this.x = a - a * f + this.x, this.y = b - b * f + this.y, this.scale = c, this.refresh(), this.x = 0 < this.x ? 0 : this.x < this.ge ? this.ge : this.x, this.y = this.y > this.mf ? this.mf : this.y < this.od ? this.od : this.y, this.Ob.style[af] = e + "ms", this.Ob.style[Ze] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + tf, this.Nk = t)
    }
  };
  function Ye(a) {
    if ("" === Se) return a;
    a = a.charAt(0).toUpperCase() + a.substr(1);
    return Se + a
  }
  Re = s;
  function vf(a) {
    this.m = {
      anchor: Yb,
      offset: new P(0, 0),
      maxWidth: "100%",
      imageHeight: 80
    };
    var a = a || {},
      b;
    for (b in a) this.m[b] = a[b];
    this.xl = new ec(s, {
      hf: "api"
    });
    this.Pj = [];
    this.W = s;
    this.ag = {
      height: this.m.imageHeight,
      width: this.m.imageHeight * wf
    };
    this.Rc = this.GA = this.Ml = this.Yc = s
  }
  var xf = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10],
    yf = "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(" ");
  D.tm(function (a) {
    var b = s;
    a.addEventListener("position_changed",
      function () {
        a.m.visible && a.m.albumsControl === p && (b ? b.Lx(a.Xb()) : (b = new vf(a.m.albumsControlOptions), b.xa(a)))
      });
    a.addEventListener("albums_visible_changed",
      function () {
        a.m.albumsControl === p ? (b ? b.Lx(a.Xb()) : (b = new vf(a.m.albumsControlOptions), b.xa(a)), b.show()) : b.aa()
      });
    a.addEventListener("albums_options_changed",
      function () {
        b && b.Bk(a.m.albumsControlOptions)
      });
    a.addEventListener("visible_changed",
      function () {
        b && (a.mD() ? a.m.albumsControl === p && (b.P.style.visibility = "visible") : b.P.style.visibility = "hidden")
      })
  });
  var wf = 1.8;
  I() && (wf = 1);
  z.extend(vf.prototype, {
    Bk: function (a) {
      for (var b in a) this.m[b] = a[b];
      a = this.m.imageHeight + "px";
      this.uc(this.m.anchor);
      this.P.style.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px";
      this.P.style.height = a;
      this.Uj.style.height = a;
      this.Ih.style.height = a;
      this.ag = {
        height: this.m.imageHeight,
        width: this.m.imageHeight * wf
      };
      this.Tj.style.height = this.ag.height - 6 + "px";
      this.Tj.style.width = this.ag.width - 6 + "px";
      this.Lx(this.W.Xb(), p)
    },
    xa: function (a) {
      this.W = a;
      this.Fr();
      this.hP();
      this.IX();
      this.Lx(a.Xb())
    },
    Fr: function () {
      var a = this.m.imageHeight + "px";
      this.P = O("div");
      var b = this.P.style;
      b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
      b.position = "absolute";
      b.zIndex = "2000";
      b.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px";
      b.padding = "8px 0";
      b.visibility = "hidden";
      b.height = a;
      this.Uj = O("div");
      b = this.Uj.style;
      b.position = "absolute";
      b.overflow = "hidden";
      b.width = "100%";
      b.height = a;
      this.Ih = O("div");
      b = this.Ih.style;
      b.height = a;
      this.Uj.appendChild(this.Ih);
      this.P.appendChild(this.Uj);
      this.W.P.appendChild(this.P);
      this.Tj = O("div", {
        "class": "pano_photo_item_seleted"
      });
      this.Tj.style.height = this.ag.height - 6 + "px";
      this.Tj.style.width = this.ag.width - 6 + "px";
      this.uc(this.m.anchor)
    },
    PG: function (a) {
      for (var b = this.Pj,
        c = b.length - 1; 0 <= c; c--) if (b[c].panoId == a) return c;
      return - 1
    },
    Lx: function (a, b) {
      if (b || !this.Pj[this.Yc] || !(this.Pj[this.Yc].panoId == a && 3 !== this.Pj[this.Yc].recoType)) {
        var c = this,
          e = this.PG(a); !b && -1 !== e && this.Pj[e] && 3 !== this.Pj[e].recoType ? this.lp(e) : this.WW(function (a) {
            for (var b = {},
              e, k, m = t,
              n = [], o = 0, q = a.length; o < q; o++) e = a[o].catlog,
                k = a[o].floor,
                l !== e && ("" === e && l !== k ? (m = p, b[k] || (b[k] = []), b[k].push(a[o])) : (b[xf[e]] || (b[xf[e]] = []), b[xf[e]].push(a[o])));
            for (var v in b) m ? n.push({
              data: v + "F",
              index: v
            }) : n.push({
              data: yf[v],
              index: v
            });
            c.iG = b;
            c.Di = n;
            c.ul(a);
            0 == a.length ? c.aa() : c.show()
          })
      }
    },
    aV: function () {
      if (!this.Ai) {
        var a = this.JW(this.Di),
          b = O("div");
        b.style.cssText = ["width:" + 134 * this.Di.length + "px;", "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"].join("");
        b.innerHTML = a;
        a = O("div");
        a.appendChild(b);
        a.style.cssText = "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
        new uf(a, {
          fo: t,
          qx: p,
          Zh: t,
          qi: t,
          Mm: t,
          PD: p,
          $v: p,
          Uw: p
        });
        this.P.appendChild(a);
        for (var c = this,
          e = b.getElementsByTagName("span"), f = 0, g = e.length; f < g; f++) b = e[f],
            z.V(b, "click",
              function () {
                if (this.getAttribute("dataindex")) {
                  c.ul(c.iG[this.getAttribute("dataindex")]);
                  for (var a = 0,
                    b = e.length; a < b; a++) e[a].style.color = "#FFFFFF";
                  this.style.color = "#3383FF"
                }
              });
        this.Ai = a
      }
    },
    YU: function () {
      if (this.Ai) a = this.pK(this.Di),
        this.xP.innerHTML = a;
      else {
        var a = this.pK(this.Di),
          b = O("ul"),
          c = this;
        b.style.cssText = "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
        b.innerHTML = a;
        z.V(b, "click",
          function (a) {
            if (a = (a.srcElement || a.target).getAttribute("dataindex")) {
              c.ul(c.iG[a]);
              for (var e = b.getElementsByTagName("li"), f = 0, g = e.length; f < g; f++) e[f].childNodes[0].getAttribute("dataindex") === a ? z.R.eb(e[f], "pano_catlogLiActive") : z.R.tc(e[f], "pano_catlogLiActive")
            }
          });
        var a = O("div"),
          e = O("a"),
          f = O("span"),
          g = O("a"),
          i = O("span"),
          k = ["background:url(" + H.sa + "panorama/catlog_icon.png) no-repeat;", "display:block;width:10px;height:7px;margin:0 auto;"].join("");
        f.style.cssText = k + "background-position:-18px 0;";
        e.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
        i.style.cssText = k + "background-position:0 0;";
        g.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
        g.style.top = this.m.imageHeight - 7 + "px";
        a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
        e.appendChild(f);
        g.appendChild(i);
        z.V(e, "mouseover",
          function () {
            var a = parseInt(b.style.top, 10);
            7 !== a && (f.style.backgroundPosition = "-27px 0");
            new ub({
              Hc: 60,
              $b: vb.Yr,
              duration: 300,
              za: function (c) {
                b.style.top = a + (7 - a) * c + "px"
              }
            })
          });
        z.V(e, "mouseout",
          function () {
            f.style.backgroundPosition = "-18px 0"
          });
        z.V(g, "mouseover",
          function () {
            var a = parseInt(b.style.top, 10),
              e = c.m.imageHeight - 14;
            if (!(parseInt(b.offsetHeight, 10) < e)) {
              var f = e - parseInt(b.offsetHeight, 10) + 7;
              f !== a && (i.style.backgroundPosition = "-9px 0");
              new ub({
                Hc: 60,
                $b: vb.Yr,
                duration: 300,
                za: function (c) {
                  b.style.top = a + (f - a) * c + "px"
                }
              })
            }
          });
        z.V(g, "mouseout",
          function () {
            i.style.backgroundPosition = "0 0"
          });
        a.appendChild(e);
        a.appendChild(g);
        e = O("div");
        e.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.m.imageHeight + "px;", "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"].join("");
        e.appendChild(b);
        e.appendChild(a);
        this.Ai = e;
        this.xP = b;
        this.P.appendChild(e)
      }
    },
    ZU: function () {
      if (this.Di && !(0 >= this.Di.length)) {
        var a = O("div");
        a.innerHTML = this.jz;
        a.style.cssText = "position:absolute;background:#252525";
        this.P.appendChild(a);
        this.bs = a;
        this.Rc.bg.style.left = this.ag.width + 8 + "px";
        this.Ai && (this.Ai.style.left = parseInt(this.Ai.style.left, 10) + this.ag.width + 8 + "px");
        var b = this;
        z.V(a, "click",
          function () {
            b.W.Cc(b.UV)
          })
      }
    },
    ul: function (a) {
      this.Pj = a;
      this.m.showCatalog && (0 < this.Di.length ? (Xa() ? this.YU() : this.aV(), this.Rc.offsetLeft = 60) : (this.bs && (this.P.removeChild(this.bs), this.bs = s, this.Rc.bg.style.left = "0px"), this.Ai && (this.P.removeChild(this.Ai), this.Ai = s), this.Rc.offsetLeft = 0));
      var b = this.BW(a);
      Xa() && (this.Di && 0 < this.Di.length && this.m.showExit && this.jz) && (this.Rc.offsetLeft += this.ag.width + 8, this.bs ? this.bs.innerHTML = this.jz : this.ZU());
      this.Ih.innerHTML = b;
      this.Ih.style.width = (this.ag.width + 8) * a.length + 8 + "px";
      a = this.P.offsetWidth;
      b = this.Ih.offsetWidth;
      this.Rc.is && (b += this.Rc.is());
      b < a - 2 * this.Rc.ti - this.Rc.offsetLeft ? this.P.style.width = b + this.Rc.offsetLeft + "px" : (this.P.style.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px", b < this.P.offsetWidth - 2 * this.Rc.ti - this.Rc.offsetLeft && (this.P.style.width = b + this.Rc.offsetLeft + "px"));
      this.Rc.refresh();
      this.GA = this.Ih.children;
      this.Ih.appendChild(this.Tj);
      this.Tj.style.left = "-100000px";
      a = this.PG(this.W.Xb(), this.f1); - 1 !== a && this.lp(a)
    },
    JW: function (a) {
      for (var b = "",
        c, e = 0,
        f = a.length; e < f; e++) c = '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' + a[e].index + '">' + a[e].data + "</span></div>",
          b += c;
      return b
    },
    pK: function (a) {
      for (var b = "",
        c, e = 0,
        f = a.length; e < f; e++) c = '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[e].index + '">' + a[e].data + "</span></li>",
          b += c;
      return b
    },
    BW: function (a) {
      for (var b, c, e, f, g = [], i = this.ag.height, k = this.ag.width, m = 0; m < a.length; m++) b = a[m],
        recoType = b.recoType,
        e = b.panoId,
        f = b.name,
        c = b.heading,
        b = b.pitch,
        c = Oe.CK(e, c, b, 198, 108),
        b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><span class="pano_photo_decs" data-index="' + m + '" style="width:' + k + "px;font-size:" + Math.floor(i / 6) + "px; line-height:" + Math.floor(i / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + f + "</span></a>",
        3 === recoType ? Xa() ? (this.jz = b, this.UV = e, a.splice(m, 1), m--) : (b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' + this.m.imageHeight + 'px;" data-index="' + m + '"><img src="' + H.sa + 'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' + m + '" alt=""/></div></a>', g.push(b)) : g.push(b);
      return g.join("")
    },
    WW: function (a) {
      var b = this,
        c = this.W.Xb();
      c && this.xl.Rw(c,
        function (e) {
          b.W.Xb() === c && a(e)
        })
    },
    uc: function (a) {
      if (!Za(a) || isNaN(a) || a < Wb || 3 < a) a = this.defaultAnchor;
      var b = this.P,
        c = this.m.offset.width,
        e = this.m.offset.height;
      b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
      switch (a) {
        case Wb:
          b.style.top = e + "px";
          b.style.left = c + "px";
          break;
        case Xb:
          b.style.top = e + "px";
          b.style.right = c + "px";
          break;
        case Yb:
          b.style.bottom = e + "px";
          b.style.left = c + "px";
          break;
        case 3:
          b.style.bottom = e + "px",
            b.style.right = c + "px"
      }
    },
    hP: function () {
      this.fP()
    },
    fP: function () {
      var a = this;
      z.V(this.P, "touchstart",
        function (a) {
          a.stopPropagation()
        });
      z.V(this.Uj, "click",
        function (b) {
          if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.Yc) a.lp(b),
            a.W.Cc(a.Pj[b].panoId)
        });
      z.V(this.Ih, "mouseover",
        function (b) {
          b = (b.srcElement || b.target).getAttribute("data-index");
          b !== s && a.sJ(b, p)
        });
      this.W.addEventListener("size_changed",
        function () {
          isNaN(Number(a.m.maxWidth)) && a.Bk({
            maxWidth: a.m.maxWidth
          })
        })
    },
    lp: function (a) {
      this.Tj.style.left = this.GA[a].offsetLeft + 8 + "px";
      this.Tj.setAttribute("data-index", this.GA[a].getAttribute("data-index"));
      this.Yc = a;
      this.sJ(a)
    },
    sJ: function (a, b) {
      var c = this.ag.width + 8,
        e = 0;
      this.Rc.is && (e = this.Rc.is() / 2);
      var f = this.Uj.offsetWidth - 2 * e,
        g = this.Ih.offsetLeft || this.Rc.x,
        g = g - e,
        i = -a * c;
      i > g && this.Rc.scrollTo(i + e);
      c = i - c;
      g -= f;
      c < g && (!b || b && 8 < i - g) && this.Rc.scrollTo(c + f + e)
    },
    IX: function () {
      this.Rc = I() ? new uf(this.Uj, {
        fo: t,
        qx: p,
        Zh: t,
        qi: t,
        Mm: t,
        PD: p,
        $v: p,
        Uw: p
      }) : new zf(this.Uj)
    },
    aa: function () {
      this.P.style.visibility = "hidden"
    },
    show: function () {
      this.P.style.visibility = "visible"
    }
  });
  function zf(a) {
    this.P = a;
    this.Og = a.children[0];
    this.jr = s;
    this.ti = 20;
    this.offsetLeft = 0;
    this.xa()
  }
  zf.prototype = {
    xa: function () {
      this.Og.style.position = "relative";
      this.refresh();
      this.Fr();
      this.qB()
    },
    refresh: function () {
      this.Cn = this.P.offsetWidth - this.is();
      this.dA = -(this.Og.offsetWidth - this.Cn - this.ti);
      this.Uu = this.ti + this.offsetLeft;
      this.Og.style.left = this.Uu + "px";
      this.Og.children[0] && (this.jr = this.Og.children[0].offsetWidth);
      this.bg && (this.bg.children[0].style.marginTop = this.$q.children[0].style.marginTop = this.bg.offsetHeight / 2 - this.bg.children[0].offsetHeight / 2 + "px")
    },
    is: function () {
      return 2 * this.ti
    },
    Fr: function () {
      this.jv = O("div");
      this.jv.innerHTML = '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
      this.bg = this.jv.children[0];
      this.$q = this.jv.children[1];
      this.P.appendChild(this.jv);
      this.bg.children[0].style.marginTop = this.$q.children[0].style.marginTop = this.bg.offsetHeight / 2 - this.bg.children[0].offsetHeight / 2 + "px"
    },
    qB: function () {
      var a = this;
      z.V(this.bg, "click",
        function () {
          a.scrollTo(a.Og.offsetLeft + a.Cn)
        });
      z.V(this.$q, "click",
        function () {
          a.scrollTo(a.Og.offsetLeft - a.Cn)
        })
    },
    ET: function () {
      z.R.tc(this.bg, "pano_arrow_disable");
      z.R.tc(this.$q, "pano_arrow_disable");
      var a = this.Og.offsetLeft;
      a >= this.Uu && z.R.eb(this.bg, "pano_arrow_disable");
      a - this.Cn <= this.dA && z.R.eb(this.$q, "pano_arrow_disable")
    },
    scrollTo: function (a) {
      a = a < this.Og.offsetLeft ? Math.ceil((a - this.ti - this.Cn) / this.jr) * this.jr + this.Cn + this.ti - 8 : Math.ceil((a - this.ti) / this.jr) * this.jr + this.ti;
      a < this.dA ? a = this.dA : a > this.Uu && (a = this.Uu);
      var b = this.Og.offsetLeft,
        c = this;
      new ub({
        Hc: 60,
        $b: vb.Yr,
        duration: 300,
        za: function (e) {
          c.Og.style.left = b + (a - b) * e + "px"
        },
        finish: function () {
          c.ET()
        }
      })
    }
  };
  D.Map = Oa;
  D.Hotspot = kb;
  D.MapType = Dd;
  D.Point = J;
  D.Pixel = R;
  D.Size = P;
  D.Bounds = hb;
  D.TileLayer = Mc;
  D.Projection = jc;
  D.MercatorProjection = S;
  D.PerspectiveProjection = jb;
  D.Copyright = function (a, b, c) {
    this.id = a;
    this.fb = b;
    this.content = c
  };
  D.Overlay = mc;
  D.Label = uc;
  D.GroundOverlay = vc;
  D.PointCollection = zc;
  D.Marker = V;
  D.CanvasLayer = Cc;
  D.Icon = qc;
  D.IconSequence = sc;
  D.Symbol = rc;
  D.Polyline = Gc;
  D.Polygon = Fc;
  D.InfoWindow = tc;
  D.Circle = Hc;
  D.Control = Ub;
  D.NavigationControl = lb;
  D.GeolocationControl = Zb;
  D.OverviewMapControl = nb;
  D.CopyrightControl = $b;
  D.ScaleControl = mb;
  D.MapTypeControl = ob;
  D.CityListControl = ac;
  D.PanoramaControl = cc;
  D.TrafficLayer = Uc;
  D.CustomLayer = pb;
  D.ContextMenu = fc;
  D.MenuItem = ic;
  D.LocalSearch = fb;
  D.TransitRoute = ee;
  D.DrivingRoute = he;
  D.WalkingRoute = ie;
  D.RidingRoute = je;
  D.Autocomplete = xe;
  D.RouteSearch = oe;
  D.Geocoder = pe;
  D.LocalCity = ue;
  D.Geolocation = Geolocation;
  D.Convertor = lc;
  D.BusLineSearch = we;
  D.Boundary = ve;
  D.Panorama = Ra;
  D.PanoramaLabel = De;
  D.PanoramaService = ec;
  D.PanoramaCoverageLayer = dc;
  D.PanoramaFlashInterface = Me;
  function U(a, b) {
    for (var c in b) a[c] = b[c]
  }
  U(window, {
    BMap: D,
    _jsload2: function (a, b) {
      ja.ay.XX && ja.ay.set(a, b);
      K.zU(a, b)
    },
    BMAP_API_VERSION: "2.0"
  });
  var Af = Oa.prototype;
  U(Af, {
    getBounds: Af.te,
    getCenter: Af.Bb,
    getMapType: Af.va,
    getSize: Af.Hb,
    setSize: Af.Ae,
    getViewport: Af.ys,
    getZoom: Af.ka,
    centerAndZoom: Af.Ed,
    panTo: Af.ji,
    panBy: Af.tg,
    setCenter: Af.pf,
    setCurrentCity: Af.yE,
    setMapType: Af.wg,
    setViewport: Af.mh,
    setZoom: Af.Qc,
    highResolutionEnabled: Af.$w,
    zoomTo: Af.yg,
    zoomIn: Af.lF,
    zoomOut: Af.mF,
    addHotspot: Af.fB,
    removeHotspot: Af.dZ,
    clearHotspots: Af.ew,
    checkResize: Af.CU,
    addControl: Af.vr,
    removeControl: Af.NM,
    getContainer: Af.Ta,
    addContextMenu: Af.Wn,
    removeContextMenu: Af.cp,
    addOverlay: Af.Pa,
    removeOverlay: Af.Sb,
    clearOverlays: Af.pJ,
    openInfoWindow: Af.ad,
    closeInfoWindow: Af.Xc,
    pointToOverlayPixel: Af.Ve,
    overlayPixelToPoint: Af.wM,
    getInfoWindow: Af.$g,
    getOverlays: Af.Ow,
    getPanes: function () {
      return {
        floatPane: this.Xd.DC,
        markerMouseTarget: this.Xd.SD,
        floatShadow: this.Xd.gK,
        labelPane: this.Xd.LD,
        markerPane: this.Xd.VL,
        markerShadow: this.Xd.WL,
        mapPane: this.Xd.Ss,
        vertexPane: this.Xd.cO
      }
    },
    addTileLayer: Af.Me,
    removeTileLayer: Af.Tf,
    pixelToPoint: Af.Ib,
    pointToPixel: Af.Rb,
    setFeatureStyle: Af.L4,
    selectBaseElement: Af.E4,
    setMapStyle: Af.nt,
    enable3DBuilding: Af.so,
    disable3DBuilding: Af.oV,
    getPanorama: Af.ss,
    initIndoorLayer: Af.JX,
    setNormalMapDisplay: Af.jN,
    setMapStyleV2: Af.IZ,
    setBMapCopyrightOffset: Af.xE,
    getVectorContainer: Af.kX
  });
  var Bf = Dd.prototype;
  U(Bf, {
    getTileLayer: Bf.eX,
    getMinZoom: Bf.aj,
    getMaxZoom: Bf.Xh,
    getProjection: Bf.nk,
    getTextColor: Bf.dm,
    getTips: Bf.xs
  });
  U(window, {
    BMAP_NORMAL_MAP: Pa,
    BMAP_PERSPECTIVE_MAP: Sa,
    BMAP_SATELLITE_MAP: ab,
    BMAP_HYBRID_MAP: Va
  });
  var Cf = S.prototype;
  U(Cf, {
    lngLatToPoint: Cf.qg,
    pointToLngLat: Cf.oj
  });
  var Df = jb.prototype;
  U(Df, {
    lngLatToPoint: Df.qg,
    pointToLngLat: Df.oj
  });
  var Ef = hb.prototype;
  U(Ef, {
    equals: Ef.oc,
    containsPoint: Ef.Dr,
    containsBounds: Ef.OU,
    intersects: Ef.Gs,
    extend: Ef.extend,
    getCenter: Ef.Bb,
    isEmpty: Ef.lj,
    getSouthWest: Ef.Se,
    getNorthEast: Ef.Lf,
    toSpan: Ef.XE
  });
  var Ff = mc.prototype;
  U(Ff, {
    isVisible: Ff.Nc,
    show: Ff.show,
    hide: Ff.aa
  });
  mc.getZIndex = mc.pk;
  var Gf = ib.prototype;
  U(Gf, {
    openInfoWindow: Gf.ad,
    closeInfoWindow: Gf.Xc,
    enableMassClear: Gf.Yi,
    disableMassClear: Gf.qV,
    show: Gf.show,
    hide: Gf.aa,
    getMap: Gf.Kw,
    addContextMenu: Gf.Wn,
    removeContextMenu: Gf.cp
  });
  var Hf = V.prototype;
  U(Hf, {
    setIcon: Hf.Tb,
    getIcon: Hf.Eo,
    setPosition: Hf.ua,
    getPosition: Hf.ja,
    setOffset: Hf.Ld,
    getOffset: Hf.cj,
    getLabel: Hf.WC,
    setLabel: Hf.Dm,
    setTitle: Hf.Dc,
    setTop: Hf.ni,
    enableDragging: Hf.Wb,
    disableDragging: Hf.VB,
    setZIndex: Hf.rp,
    getMap: Hf.Kw,
    setAnimation: Hf.Cm,
    setShadow: Hf.Ux,
    hide: Hf.aa,
    setRotation: Hf.np,
    getRotation: Hf.GK
  });
  U(window, {
    BMAP_ANIMATION_DROP: 1,
    BMAP_ANIMATION_BOUNCE: 2
  });
  var If = uc.prototype;
  U(If, {
    setStyle: If.Md,
    setStyles: If.mi,
    setContent: If.cd,
    setPosition: If.ua,
    getPosition: If.ja,
    setOffset: If.Ld,
    getOffset: If.cj,
    setTitle: If.Dc,
    setZIndex: If.rp,
    getMap: If.Kw,
    getContent: If.jk
  });
  var Jf = qc.prototype;
  U(Jf, {
    setImageUrl: Jf.dN,
    setSize: Jf.Ae,
    setAnchor: Jf.uc,
    setImageOffset: Jf.mt,
    setImageSize: Jf.DZ,
    setInfoWindowAnchor: Jf.GZ,
    setPrintImageUrl: Jf.RZ
  });
  var Kf = tc.prototype;
  U(Kf, {
    redraw: Kf.ie,
    setTitle: Kf.Dc,
    setContent: Kf.cd,
    getContent: Kf.jk,
    getPosition: Kf.ja,
    enableMaximize: Kf.Xg,
    disableMaximize: Kf.vw,
    isOpen: Kf.Za,
    setMaxContent: Kf.ot,
    maximize: Kf.px,
    enableAutoPan: Kf.Zr
  });
  var Lf = oc.prototype;
  U(Lf, {
    getPath: Lf.Re,
    setPath: Lf.je,
    setPositionAt: Lf.Fm,
    getStrokeColor: Lf.bX,
    setStrokeWeight: Lf.qp,
    getStrokeWeight: Lf.JK,
    setStrokeOpacity: Lf.op,
    getStrokeOpacity: Lf.cX,
    setFillOpacity: Lf.lt,
    getFillOpacity: Lf.wW,
    setStrokeStyle: Lf.pp,
    getStrokeStyle: Lf.IK,
    getFillColor: Lf.vW,
    getBounds: Lf.te,
    enableEditing: Lf.ff,
    disableEditing: Lf.pV,
    getEditing: Lf.sW
  });
  var Mf = Hc.prototype;
  U(Mf, {
    setCenter: Mf.pf,
    getCenter: Mf.Bb,
    getRadius: Mf.EK,
    setRadius: Mf.qf
  });
  var Nf = Fc.prototype;
  U(Nf, {
    getPath: Nf.Re,
    setPath: Nf.je,
    setPositionAt: Nf.Fm
  });
  var Of = kb.prototype;
  U(Of, {
    getPosition: Of.ja,
    setPosition: Of.ua,
    getText: Of.gD,
    setText: Of.xt
  });
  J.prototype.equals = J.prototype.oc;
  R.prototype.equals = R.prototype.oc;
  P.prototype.equals = P.prototype.oc;
  U(window, {
    BMAP_ANCHOR_TOP_LEFT: Wb,
    BMAP_ANCHOR_TOP_RIGHT: Xb,
    BMAP_ANCHOR_BOTTOM_LEFT: Yb,
    BMAP_ANCHOR_BOTTOM_RIGHT: 3
  });
  var Pf = Ub.prototype;
  U(Pf, {
    setAnchor: Pf.uc,
    getAnchor: Pf.JC,
    setOffset: Pf.Ld,
    getOffset: Pf.cj,
    show: Pf.show,
    hide: Pf.aa,
    isVisible: Pf.Nc,
    toString: Pf.toString
  });
  var Qf = lb.prototype;
  U(Qf, {
    getType: Qf.Lo,
    setType: Qf.Gm
  });
  U(window, {
    BMAP_NAVIGATION_CONTROL_LARGE: 0,
    BMAP_NAVIGATION_CONTROL_SMALL: 1,
    BMAP_NAVIGATION_CONTROL_PAN: 2,
    BMAP_NAVIGATION_CONTROL_ZOOM: 3
  });
  var Rf = nb.prototype;
  U(Rf, {
    changeView: Rf.qe,
    setSize: Rf.Ae,
    getSize: Rf.Hb
  });
  var Sf = mb.prototype;
  U(Sf, {
    getUnit: Sf.jX,
    setUnit: Sf.FE
  });
  U(window, {
    BMAP_UNIT_METRIC: "metric",
    BMAP_UNIT_IMPERIAL: "us"
  });
  var Tf = $b.prototype;
  U(Tf, {
    addCopyright: Tf.Pv,
    removeCopyright: Tf.lE,
    getCopyright: Tf.Xl,
    getCopyrightCollection: Tf.QC
  });
  U(window, {
    BMAP_MAPTYPE_CONTROL_HORIZONTAL: bc,
    BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
    BMAP_MAPTYPE_CONTROL_MAP: 2
  });
  var Uf = Mc.prototype;
  U(Uf, {
    getMapType: Uf.va,
    getCopyright: Uf.Xl,
    isTransparentPng: Uf.Ns
  });
  var Vf = fc.prototype;
  U(Vf, {
    addItem: Vf.Qv,
    addSeparator: Vf.iB,
    removeSeparator: Vf.nE
  });
  var Wf = ic.prototype;
  U(Wf, {
    setText: Wf.xt
  });
  var Xf = X.prototype;
  U(Xf, {
    getStatus: Xf.bm,
    setSearchCompleteCallback: Xf.wt,
    getPageCapacity: Xf.kf,
    setPageCapacity: Xf.mp,
    setLocation: Xf.Em,
    disableFirstResultSelection: Xf.WB,
    enableFirstResultSelection: Xf.pC,
    gotoPage: Xf.em,
    searchNearby: Xf.jp,
    searchInBounds: Xf.Bm,
    search: Xf.search
  });
  U(window, {
    BMAP_STATUS_SUCCESS: 0,
    BMAP_STATUS_CITY_LIST: 1,
    BMAP_STATUS_UNKNOWN_LOCATION: Nd,
    BMAP_STATUS_UNKNOWN_ROUTE: 3,
    BMAP_STATUS_INVALID_KEY: 4,
    BMAP_STATUS_INVALID_REQUEST: 5,
    BMAP_STATUS_PERMISSION_DENIED: Od,
    BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
    BMAP_STATUS_TIMEOUT: Pd
  });
  U(window, {
    BMAP_POI_TYPE_NORMAL: 0,
    BMAP_POI_TYPE_BUSSTOP: 1,
    BMAP_POI_TYPE_BUSLINE: 2,
    BMAP_POI_TYPE_SUBSTOP: 3,
    BMAP_POI_TYPE_SUBLINE: 4
  });
  U(window, {
    BMAP_TRANSIT_POLICY_RECOMMEND: 0,
    BMAP_TRANSIT_POLICY_LEAST_TIME: 4,
    BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 1,
    BMAP_TRANSIT_POLICY_LEAST_WALKING: 2,
    BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 3,
    BMAP_TRANSIT_POLICY_FIRST_SUBWAYS: 5,
    BMAP_LINE_TYPE_BUS: 0,
    BMAP_LINE_TYPE_SUBWAY: 1,
    BMAP_LINE_TYPE_FERRY: 2,
    BMAP_LINE_TYPE_TRAIN: 3,
    BMAP_LINE_TYPE_AIRPLANE: 4,
    BMAP_LINE_TYPE_COACH: 5
  });
  U(window, {
    BMAP_TRANSIT_TYPE_POLICY_TRAIN: 0,
    BMAP_TRANSIT_TYPE_POLICY_AIRPLANE: 1,
    BMAP_TRANSIT_TYPE_POLICY_COACH: 2
  });
  U(window, {
    BMAP_INTERCITY_POLICY_LEAST_TIME: 0,
    BMAP_INTERCITY_POLICY_EARLY_START: 1,
    BMAP_INTERCITY_POLICY_CHEAP_PRICE: 2
  });
  U(window, {
    BMAP_TRANSIT_TYPE_IN_CITY: 0,
    BMAP_TRANSIT_TYPE_CROSS_CITY: 1
  });
  U(window, {
    BMAP_TRANSIT_PLAN_TYPE_ROUTE: 0,
    BMAP_TRANSIT_PLAN_TYPE_LINE: 1
  });
  var Yf = de.prototype;
  U(Yf, {
    clearResults: Yf.Pe
  });
  fe = ee.prototype;
  U(fe, {
    setPolicy: fe.vt,
    toString: fe.toString,
    setPageCapacity: fe.mp,
    setIntercityPolicy: fe.fN,
    setTransitTypePolicy: fe.oN
  });
  U(window, {
    BMAP_DRIVING_POLICY_DEFAULT: 0,
    BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 3,
    BMAP_DRIVING_POLICY_AVOID_CONGESTION: 5,
    BMAP_DRIVING_POLICY_FIRST_HIGHWAYS: 4
  });
  U(window, {
    BMAP_MODE_DRIVING: "driving",
    BMAP_MODE_TRANSIT: "transit",
    BMAP_MODE_WALKING: "walking",
    BMAP_MODE_NAVIGATION: "navigation"
  });
  var Zf = oe.prototype;
  U(Zf, {
    routeCall: Zf.ZM
  });
  U(window, {
    BMAP_HIGHLIGHT_STEP: 1,
    BMAP_HIGHLIGHT_ROUTE: 2
  });
  U(window, {
    BMAP_ROUTE_TYPE_DRIVING: Rd,
    BMAP_ROUTE_TYPE_WALKING: Qd,
    BMAP_ROUTE_TYPE_RIDING: Sd
  });
  U(window, {
    BMAP_ROUTE_STATUS_NORMAL: Td,
    BMAP_ROUTE_STATUS_EMPTY: 1,
    BMAP_ROUTE_STATUS_ADDRESS: 2
  });
  var $f = he.prototype;
  U($f, {
    setPolicy: $f.vt
  });
  var ag = xe.prototype;
  U(ag, {
    show: ag.show,
    hide: ag.aa,
    setTypes: ag.EE,
    setLocation: ag.Em,
    search: ag.search,
    setInputValue: ag.Rx
  });
  U(pb.prototype, {});
  var cg = ve.prototype;
  U(cg, {
    get: cg.get
  });
  U(dc.prototype, {});
  U(window, {
    BMAP_POINT_DENSITY_HIGH: 200,
    BMAP_POINT_DENSITY_MEDIUM: Xc,
    BMAP_POINT_DENSITY_LOW: 50
  });
  U(window, {
    BMAP_POINT_SHAPE_STAR: 1,
    BMAP_POINT_SHAPE_WATERDROP: 2,
    BMAP_POINT_SHAPE_CIRCLE: wc,
    BMAP_POINT_SHAPE_SQUARE: 4,
    BMAP_POINT_SHAPE_RHOMBUS: 5
  });
  U(window, {
    BMAP_POINT_SIZE_TINY: 1,
    BMAP_POINT_SIZE_SMALLER: 2,
    BMAP_POINT_SIZE_SMALL: 3,
    BMAP_POINT_SIZE_NORMAL: xc,
    BMAP_POINT_SIZE_BIG: 5,
    BMAP_POINT_SIZE_BIGGER: 6,
    BMAP_POINT_SIZE_HUGE: 7
  });
  U(window, {
    BMap_Symbol_SHAPE_CAMERA: 11,
    BMap_Symbol_SHAPE_WARNING: 12,
    BMap_Symbol_SHAPE_SMILE: 13,
    BMap_Symbol_SHAPE_CLOCK: 14,
    BMap_Symbol_SHAPE_POINT: 9,
    BMap_Symbol_SHAPE_PLANE: 10,
    BMap_Symbol_SHAPE_CIRCLE: 1,
    BMap_Symbol_SHAPE_RECTANGLE: 2,
    BMap_Symbol_SHAPE_RHOMBUS: 3,
    BMap_Symbol_SHAPE_STAR: 4,
    BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
    BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
    BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
    BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
  });
  U(window, {
    BMAP_CONTEXT_MENU_ICON_ZOOMIN: gc,
    BMAP_CONTEXT_MENU_ICON_ZOOMOUT: hc
  });
  U(window, {
    BMAP_SYS_DRAWER: Na,
    BMAP_SVG_DRAWER: 1,
    BMAP_VML_DRAWER: 2,
    BMAP_CANVAS_DRAWER: 3,
    BMAP_SVG_DRAWER_FIRST: 4
  });
  D.XT();
  D.U_();
})()