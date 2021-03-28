'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/*
 * KineticJS JavaScript Framework v5.1.0
 * http://www.kineticjs.com/
 * Copyright 2013, Eric Rowell
 * Licensed under the MIT or GPL Version 2 licenses.
 * Date: 2014-03-27
 *
 * Copyright (C) 2011 - 2013 by Eric Rowell
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ /**
 * @namespace Kinetic
 */ /*jshint -W079, -W020*/var Kinetic$1={};(function(root){var PI_OVER_180=Math.PI/180;Kinetic$1={// public
version:'5.1.0',// private
stages:[],idCounter:0,ids:{},names:{},shapes:{},listenClickTap:false,inDblClickWindow:false,// configurations
enableTrace:false,traceArrMax:100,dblClickWindow:400,pixelRatio:undefined,dragDistance:0,angleDeg:true,// user agent  
UA:function(){var userAgent=root.navigator&&root.navigator.userAgent||'';var ua=userAgent.toLowerCase(),// jQuery UA regex
match=/(chrome)[ \/]([\w.]+)/.exec(ua)||/(webkit)[ \/]([\w.]+)/.exec(ua)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)||/(msie) ([\w.]+)/.exec(ua)||ua.indexOf('compatible')<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)||[],// adding mobile flag as well
mobile=!!userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);return {browser:match[1]||'',version:match[2]||'0',// adding mobile flab
mobile:mobile};}(),/**
         * @namespace Filters
         * @memberof Kinetic
         */Filters:{},/**
         * Node constructor. Nodes are entities that can be transformed, layered,
         * and have bound events. The stage, layers, groups, and shapes all extend Node.
         * @constructor
         * @memberof Kinetic
         * @abstract
         * @param {Object} config
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
         */Node:function Node(config){this._init(config);},/**
         * Shape constructor.  Shapes are primitive objects such as rectangles,
         *  circles, text, lines, etc.
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.Node
         * @param {Object} config
         * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
         * @example
         * var customShape = new Kinetic.Shape({<br>
         *   x: 5,<br>
         *   y: 10,<br>
         *   fill: 'red',<br>
         *   // a Kinetic.Canvas renderer is passed into the drawFunc function<br>
         *   drawFunc: function(context) {<br>
         *     context.beginPath();<br>
         *     context.moveTo(200, 50);<br>
         *     context.lineTo(420, 80);<br>
         *     context.quadraticCurveTo(300, 100, 260, 170);<br>
         *     context.closePath();<br>
         *     context.fillStrokeShape(this);<br>
         *   }<br>
         *});
         */Shape:function Shape(config){this.__init(config);},/**
         * Container constructor.&nbsp; Containers are used to contain nodes or other containers
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.Node
         * @abstract
         * @param {Object} config
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
         * @param {Function} [config.clipFunc] clipping function

         */Container:function Container(config){this.__init(config);},/**
         * Stage constructor.  A stage is used to contain multiple layers
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.Container
         * @param {Object} config
         * @param {String|DomElement} config.container Container id or DOM element
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
         * @param {Function} [config.clipFunc] clipping function

         * @example
         * var stage = new Kinetic.Stage({<br>
         *   width: 500,<br>
         *   height: 800,<br>
         *   container: 'containerId'<br>
         * });
         */Stage:function Stage(config){this.___init(config);},/**
         * BaseLayer constructor. 
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.Container
         * @param {Object} config
         * @param {Boolean} [config.clearBeforeDraw] set this property to false if you don't want
         * to clear the canvas before each layer draw.  The default value is true.
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
         * @param {Function} [config.clipFunc] clipping function

         * @example
         * var layer = new Kinetic.Layer();
         */BaseLayer:function BaseLayer(config){this.___init(config);},/**
         * Layer constructor.  Layers are tied to their own canvas element and are used
         * to contain groups or shapes
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.Container
         * @param {Object} config
         * @param {Boolean} [config.clearBeforeDraw] set this property to false if you don't want
         * to clear the canvas before each layer draw.  The default value is true.
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
         * @param {Function} [config.clipFunc] clipping function

         * @example
         * var layer = new Kinetic.Layer();
         */Layer:function Layer(config){this.____init(config);},/**
         * FastLayer constructor.  Layers are tied to their own canvas element and are used
         * to contain groups or shapes
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.Container
         * @param {Object} config
         * @param {Boolean} [config.clearBeforeDraw] set this property to false if you don't want
         * to clear the canvas before each layer draw.  The default value is true.
         * @example
         * var layer = new Kinetic.FastLayer();
         */FastLayer:function FastLayer(config){this.____init(config);},/**
         * Group constructor.  Groups are used to contain shapes or other groups.
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.Container
         * @param {Object} config
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
         * @param {Function} [config.clipFunc] clipping function

         * @example
         * var group = new Kinetic.Group();
         */Group:function Group(config){this.___init(config);},/**
         * returns whether or not drag and drop is currently active
         * @method
         * @memberof Kinetic
         */isDragging:function isDragging(){var dd=Kinetic$1.DD;// if DD is not included with the build, then
// drag and drop is not even possible
if(!dd){return false;}// if DD is included with the build
else {return dd.isDragging;}},/**
        * returns whether or not a drag and drop operation is ready, but may
        *  not necessarily have started
        * @method
        * @memberof Kinetic
        */isDragReady:function isDragReady(){var dd=Kinetic$1.DD;// if DD is not included with the build, then
// drag and drop is not even possible
if(!dd){return false;}// if DD is included with the build
else {return !!dd.node;}},_addId:function _addId(node,id){if(id!==undefined){this.ids[id]=node;}},_removeId:function _removeId(id){if(id!==undefined){delete this.ids[id];}},_addName:function _addName(node,name){if(name!==undefined){if(this.names[name]===undefined){this.names[name]=[];}this.names[name].push(node);}},_removeName:function _removeName(name,_id){if(name!==undefined){var nodes=this.names[name];if(nodes!==undefined){for(var n=0;n<nodes.length;n++){var no=nodes[n];if(no._id===_id){nodes.splice(n,1);}}if(nodes.length===0){delete this.names[name];}}}},getAngle:function getAngle(angle){return this.angleDeg?angle*PI_OVER_180:angle;}};})(undefined);// Uses Node, AMD or browser globals to create a module.
// If you want something that will work in other stricter CommonJS environments,
// or if you need to create a circular dependency, see commonJsStrict.js
// Defines a module "returnExports" that depends another module called "b".
// Note that the name of the module is implied by the file name. It is best
// if the file name and the exported global have matching names.
// If the 'b' module also uses this type of boilerplate, then
// in the browser, it will create a global .b that is used below.
// If you do not want to support the browser global path, then you
// can remove the `root` use and the passing `this` as the first arg to
// the top function.
// if the module has no dependencies, the above pattern can be simplified to
(function(root,factory){if((typeof exports==="undefined"?"undefined":_typeof(exports))==='object'){// Node. Does not work with strict CommonJS, but
// only CommonJS-like enviroments that support module.exports,
// like Node.
var Canvas=require('canvas');var jsdom=require('jsdom').jsdom;var doc=jsdom('<!DOCTYPE html><html><head></head><body></body></html>');var KineticJS=factory();Kinetic$1.document=doc;Kinetic$1.window=Kinetic$1.document.createWindow();Kinetic$1.window.Image=Canvas.Image;Kinetic$1.root=root;Kinetic$1._nodeCanvas=Canvas;module.exports=KineticJS;return;}else if(typeof define==='function'&&define.amd){// AMD. Register as an anonymous module.
define(factory);}Kinetic$1.document=document;Kinetic$1.window=window;Kinetic$1.root=root;})((0, eval)('this'),function(){// Just return a value to define the module export.
// This example returns an object, but the module
// can return a function as the exported value.
return Kinetic$1;});(function(){/**
     * Collection constructor.  Collection extends
     *  Array.  This class is used in conjunction with {@link Kinetic.Container#get}
     * @constructor
     * @memberof Kinetic
     */Kinetic$1.Collection=function(){var args=[].slice.call(arguments),length=args.length,i=0;this.length=length;for(;i<length;i++){this[i]=args[i];}return this;};Kinetic$1.Collection.prototype=[];/**
     * iterate through node array and run a function for each node.
     *  The node and index is passed into the function
     * @method
     * @memberof Kinetic.Collection.prototype
     * @param {Function} func
     * @example
     * // get all nodes with name foo inside layer, and set x to 10 for each
     * layer.get('.foo').each(function(shape, n) {<br>
     *   shape.setX(10);<br>
     * });
     */Kinetic$1.Collection.prototype.each=function(func){for(var n=0;n<this.length;n++){func(this[n],n);}};/**
     * convert collection into an array
     * @method
     * @memberof Kinetic.Collection.prototype
     */Kinetic$1.Collection.prototype.toArray=function(){var arr=[],len=this.length,n;for(n=0;n<len;n++){arr.push(this[n]);}return arr;};/**
     * convert array into a collection
     * @method
     * @memberof Kinetic.Collection
     * @param {Array} arr
     */Kinetic$1.Collection.toCollection=function(arr){var collection=new Kinetic$1.Collection(),len=arr.length,n;for(n=0;n<len;n++){collection.push(arr[n]);}return collection;};// map one method by it's name
Kinetic$1.Collection._mapMethod=function(methodName){Kinetic$1.Collection.prototype[methodName]=function(){var len=this.length,i;var args=[].slice.call(arguments);for(i=0;i<len;i++){this[i][methodName].apply(this[i],args);}return this;};};Kinetic$1.Collection.mapMethods=function(constructor){var prot=constructor.prototype;for(var methodName in prot){Kinetic$1.Collection._mapMethod(methodName);}};/*
    * Last updated November 2011
    * By Simon Sarris
    * www.simonsarris.com
    * sarris@acm.org
    *
    * Free to use and distribute at will
    * So long as you are nice to people, etc
    */ /*
    * The usage of this class was inspired by some of the work done by a forked
    * project, KineticJS-Ext by Wappworks, which is based on Simon's Transform
    * class.  Modified by Eric Rowell
    */ /**
     * Transform constructor
     * @constructor
     * @param {Array} Optional six-element matrix
     * @memberof Kinetic
     */Kinetic$1.Transform=function(m){this.m=m&&m.slice()||[1,0,0,1,0,0];};Kinetic$1.Transform.prototype={/**
         * Copy Kinetic.Transform object
         * @method
         * @memberof Kinetic.Transform.prototype
         * @returns {Kinetic.Transform}
         */copy:function copy(){return new Kinetic$1.Transform(this.m);},/**
         * Transform point
         * @method
         * @memberof Kinetic.Transform.prototype
         * @param {Object} 2D point(x, y)
         * @returns {Object} 2D point(x, y)
         */point:function point(p){var m=this.m;return {x:m[0]*p.x+m[2]*p.y+m[4],y:m[1]*p.x+m[3]*p.y+m[5]};},/**
         * Apply translation
         * @method
         * @memberof Kinetic.Transform.prototype
         * @param {Number} x
         * @param {Number} y
         * @returns {Kinetic.Transform}
         */translate:function translate(x,y){this.m[4]+=this.m[0]*x+this.m[2]*y;this.m[5]+=this.m[1]*x+this.m[3]*y;return this;},/**
         * Apply scale
         * @method
         * @memberof Kinetic.Transform.prototype
         * @param {Number} sx
         * @param {Number} sy
         * @returns {Kinetic.Transform}
         */scale:function scale(sx,sy){this.m[0]*=sx;this.m[1]*=sx;this.m[2]*=sy;this.m[3]*=sy;return this;},/**
         * Apply rotation
         * @method
         * @memberof Kinetic.Transform.prototype
         * @param {Number} rad  Angle in radians
         * @returns {Kinetic.Transform}
         */rotate:function rotate(rad){var c=Math.cos(rad);var s=Math.sin(rad);var m11=this.m[0]*c+this.m[2]*s;var m12=this.m[1]*c+this.m[3]*s;var m21=this.m[0]*-s+this.m[2]*c;var m22=this.m[1]*-s+this.m[3]*c;this.m[0]=m11;this.m[1]=m12;this.m[2]=m21;this.m[3]=m22;return this;},/**
         * Returns the translation
         * @method
         * @memberof Kinetic.Transform.prototype
         * @returns {Object} 2D point(x, y)
         */getTranslation:function getTranslation(){return {x:this.m[4],y:this.m[5]};},/**
         * Apply skew
         * @method
         * @memberof Kinetic.Transform.prototype
         * @param {Number} sx
         * @param {Number} sy
         * @returns {Kinetic.Transform}
         */skew:function skew(sx,sy){var m11=this.m[0]+this.m[2]*sy;var m12=this.m[1]+this.m[3]*sy;var m21=this.m[2]+this.m[0]*sx;var m22=this.m[3]+this.m[1]*sx;this.m[0]=m11;this.m[1]=m12;this.m[2]=m21;this.m[3]=m22;return this;},/**
         * Transform multiplication
         * @method
         * @memberof Kinetic.Transform.prototype
         * @param {Kinetic.Transform} matrix
         * @returns {Kinetic.Transform}
         */multiply:function multiply(matrix){var m11=this.m[0]*matrix.m[0]+this.m[2]*matrix.m[1];var m12=this.m[1]*matrix.m[0]+this.m[3]*matrix.m[1];var m21=this.m[0]*matrix.m[2]+this.m[2]*matrix.m[3];var m22=this.m[1]*matrix.m[2]+this.m[3]*matrix.m[3];var dx=this.m[0]*matrix.m[4]+this.m[2]*matrix.m[5]+this.m[4];var dy=this.m[1]*matrix.m[4]+this.m[3]*matrix.m[5]+this.m[5];this.m[0]=m11;this.m[1]=m12;this.m[2]=m21;this.m[3]=m22;this.m[4]=dx;this.m[5]=dy;return this;},/**
         * Invert the matrix
         * @method
         * @memberof Kinetic.Transform.prototype
         * @returns {Kinetic.Transform}
         */invert:function invert(){var d=1/(this.m[0]*this.m[3]-this.m[1]*this.m[2]);var m0=this.m[3]*d;var m1=-this.m[1]*d;var m2=-this.m[2]*d;var m3=this.m[0]*d;var m4=d*(this.m[2]*this.m[5]-this.m[3]*this.m[4]);var m5=d*(this.m[1]*this.m[4]-this.m[0]*this.m[5]);this.m[0]=m0;this.m[1]=m1;this.m[2]=m2;this.m[3]=m3;this.m[4]=m4;this.m[5]=m5;return this;},/**
         * return matrix
         * @method
         * @memberof Kinetic.Transform.prototype
         */getMatrix:function getMatrix(){return this.m;},/**
         * set to absolute position via translation
         * @method
         * @memberof Kinetic.Transform.prototype
         * @returns {Kinetic.Transform}
         * @author ericdrowell
         */setAbsolutePosition:function setAbsolutePosition(x,y){var m0=this.m[0],m1=this.m[1],m2=this.m[2],m3=this.m[3],m4=this.m[4],m5=this.m[5],yt=(m0*(y-m5)-m1*(x-m4))/(m0*m3-m1*m2),xt=(x-m4-m2*yt)/m0;return this.translate(xt,yt);}};// CONSTANTS
var CONTEXT_2D='2d',OBJECT_ARRAY='[object Array]',OBJECT_NUMBER='[object Number]',OBJECT_STRING='[object String]',PI_OVER_DEG180=Math.PI/180,DEG180_OVER_PI=180/Math.PI,HASH='#',EMPTY_STRING='',ZERO='0',KINETIC_WARNING='Kinetic warning: ',KINETIC_ERROR='Kinetic error: ',RGB_PAREN='rgb(',COLORS={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},RGB_REGEX=/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;/**
     * @namespace Util
     * @memberof Kinetic
     */Kinetic$1.Util={/*
         * cherry-picked utilities from underscore.js
         */_isElement:function _isElement(obj){return !!(obj&&obj.nodeType==1);},_isFunction:function _isFunction(obj){return !!(obj&&obj.constructor&&obj.call&&obj.apply);},_isObject:function _isObject(obj){return !!obj&&obj.constructor==Object;},_isArray:function _isArray(obj){return Object.prototype.toString.call(obj)==OBJECT_ARRAY;},_isNumber:function _isNumber(obj){return Object.prototype.toString.call(obj)==OBJECT_NUMBER;},_isString:function _isString(obj){return Object.prototype.toString.call(obj)==OBJECT_STRING;},// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
_throttle:function _throttle(func,wait,options){var context,args,result;var timeout=null;var previous=0;options||(options={});var later=function later(){previous=options.leading===false?0:new Date().getTime();timeout=null;result=func.apply(context,args);context=args=null;};return function(){var now=new Date().getTime();if(!previous&&options.leading===false)previous=now;var remaining=wait-(now-previous);context=this;args=arguments;if(remaining<=0){clearTimeout(timeout);timeout=null;previous=now;result=func.apply(context,args);context=args=null;}else if(!timeout&&options.trailing!==false){timeout=setTimeout(later,remaining);}return result;};},/*
         * other utils
         */_hasMethods:function _hasMethods(obj){var names=[],key;for(key in obj){if(this._isFunction(obj[key])){names.push(key);}}return names.length>0;},createCanvasElement:function createCanvasElement(){var canvas=Kinetic$1.document.createElement('canvas');canvas.style=canvas.style||{};return canvas;},isBrowser:function isBrowser(){return (typeof exports==="undefined"?"undefined":_typeof(exports))!=='object';},_isInDocument:function _isInDocument(el){while(el=el.parentNode){if(el==Kinetic$1.document){return true;}}return false;},_simplifyArray:function _simplifyArray(arr){var retArr=[],len=arr.length,util=Kinetic$1.Util,n,val;for(n=0;n<len;n++){val=arr[n];if(util._isNumber(val)){val=Math.round(val*1000)/1000;}else if(!util._isString(val)){val=val.toString();}retArr.push(val);}return retArr;},/*
         * arg can be an image object or image data
         */_getImage:function _getImage(arg,callback){var imageObj,canvas;// if arg is null or undefined
if(!arg){callback(null);}// if arg is already an image object
else if(this._isElement(arg)){callback(arg);}// if arg is a string, then it's a data url
else if(this._isString(arg)){imageObj=new Kinetic$1.window.Image();imageObj.onload=function(){callback(imageObj);};imageObj.src=arg;}//if arg is an object that contains the data property, it's an image object
else if(arg.data){canvas=Kinetic$1.Util.createCanvasElement();canvas.width=arg.width;canvas.height=arg.height;var _context=canvas.getContext(CONTEXT_2D);_context.putImageData(arg,0,0);this._getImage(canvas.toDataURL(),callback);}else {callback(null);}},_getRGBAString:function _getRGBAString(obj){var red=obj.red||0,green=obj.green||0,blue=obj.blue||0,alpha=obj.alpha||1;return ['rgba(',red,',',green,',',blue,',',alpha,')'].join(EMPTY_STRING);},_rgbToHex:function _rgbToHex(r,g,b){return ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);},_hexToRgb:function _hexToRgb(hex){hex=hex.replace(HASH,EMPTY_STRING);var bigint=parseInt(hex,16);return {r:bigint>>16&255,g:bigint>>8&255,b:bigint&255};},/**
         * return random hex color
         * @method
         * @memberof Kinetic.Util.prototype
         */getRandomColor:function getRandomColor(){var randColor=(Math.random()*0xFFFFFF<<0).toString(16);while(randColor.length<6){randColor=ZERO+randColor;}return HASH+randColor;},/**
         * return value with default fallback
         * @method
         * @memberof Kinetic.Util.prototype
         */get:function get(val,def){if(val===undefined){return def;}else {return val;}},/**
         * get RGB components of a color
         * @method
         * @memberof Kinetic.Util.prototype
         * @param {String} color
         * @example
         * // each of the following examples return {r:0, g:0, b:255}<br>
         * var rgb = Kinetic.Util.getRGB('blue');<br>
         * var rgb = Kinetic.Util.getRGB('#0000ff');<br>
         * var rgb = Kinetic.Util.getRGB('rgb(0,0,255)');
         */getRGB:function getRGB(color){var rgb;// color string
if(color in COLORS){rgb=COLORS[color];return {r:rgb[0],g:rgb[1],b:rgb[2]};}// hex
else if(color[0]===HASH){return this._hexToRgb(color.substring(1));}// rgb string
else if(color.substr(0,4)===RGB_PAREN){rgb=RGB_REGEX.exec(color.replace(/ /g,''));return {r:parseInt(rgb[1],10),g:parseInt(rgb[2],10),b:parseInt(rgb[3],10)};}// default
else {return {r:0,g:0,b:0};}},// o1 takes precedence over o2
_merge:function _merge(o1,o2){var retObj=this._clone(o2);for(var key in o1){if(this._isObject(o1[key])){retObj[key]=this._merge(o1[key],retObj[key]);}else {retObj[key]=o1[key];}}return retObj;},cloneObject:function cloneObject(obj){var retObj={};for(var key in obj){if(this._isObject(obj[key])){retObj[key]=this.cloneObject(obj[key]);}else if(this._isArray(obj[key])){retObj[key]=this.cloneArray(obj[key]);}else {retObj[key]=obj[key];}}return retObj;},cloneArray:function cloneArray(arr){return arr.slice(0);},_degToRad:function _degToRad(deg){return deg*PI_OVER_DEG180;},_radToDeg:function _radToDeg(rad){return rad*DEG180_OVER_PI;},_capitalize:function _capitalize(str){return str.charAt(0).toUpperCase()+str.slice(1);},error:function error(str){throw new Error(KINETIC_ERROR+str);},warn:function warn(str){/*
             * IE9 on Windows7 64bit will throw a JS error
             * if we don't use window.console in the conditional
             */if(Kinetic$1.root.console&&console.warn){console.warn(KINETIC_WARNING+str);}},extend:function extend(c1,c2){for(var key in c2.prototype){if(!(key in c1.prototype)){c1.prototype[key]=c2.prototype[key];}}},/**
         * adds methods to a constructor prototype
         * @method
         * @memberof Kinetic.Util.prototype
         * @param {Function} constructor
         * @param {Object} methods
         */addMethods:function addMethods(constructor,methods){var key;for(key in methods){constructor.prototype[key]=methods[key];}},_getControlPoints:function _getControlPoints(x0,y0,x1,y1,x2,y2,t){var d01=Math.sqrt(Math.pow(x1-x0,2)+Math.pow(y1-y0,2)),d12=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)),fa=t*d01/(d01+d12),fb=t*d12/(d01+d12),p1x=x1-fa*(x2-x0),p1y=y1-fa*(y2-y0),p2x=x1+fb*(x2-x0),p2y=y1+fb*(y2-y0);return [p1x,p1y,p2x,p2y];},_expandPoints:function _expandPoints(p,tension){var len=p.length,allPoints=[],n,cp;for(n=2;n<len-2;n+=2){cp=Kinetic$1.Util._getControlPoints(p[n-2],p[n-1],p[n],p[n+1],p[n+2],p[n+3],tension);allPoints.push(cp[0]);allPoints.push(cp[1]);allPoints.push(p[n]);allPoints.push(p[n+1]);allPoints.push(cp[2]);allPoints.push(cp[3]);}return allPoints;},_removeLastLetter:function _removeLastLetter(str){return str.substring(0,str.length-1);}};})();(function(){// calculate pixel ratio
var canvas=Kinetic$1.Util.createCanvasElement(),context=canvas.getContext('2d'),// if using a mobile device, calculate the pixel ratio.  Otherwise, just use
// 1.  For desktop browsers, if the user has zoom enabled, it affects the pixel ratio
// and causes artifacts on the canvas.  As of 02/26/2014, there doesn't seem to be a way
// to reliably calculate the browser zoom for modern browsers, which is why we just set
// the pixel ratio to 1 for desktops
_pixelRatio=Kinetic$1.UA.mobile?function(){var devicePixelRatio=window.devicePixelRatio||1,backingStoreRatio=context.webkitBackingStorePixelRatio||context.mozBackingStorePixelRatio||context.msBackingStorePixelRatio||context.oBackingStorePixelRatio||context.backingStorePixelRatio||1;return devicePixelRatio/backingStoreRatio;}():1;/**
     * Canvas Renderer constructor
     * @constructor
     * @abstract
     * @memberof Kinetic
     * @param {Number} width
     * @param {Number} height
     * @param {Number} pixelRatio KineticJS automatically handles pixel ratio adustments in order to render crisp drawings 
     *  on all devices. Most desktops, low end tablets, and low end phones, have device pixel ratios
     *  of 1.  Some high end tablets and phones, like iPhones and iPads (not the mini) have a device pixel ratio 
     *  of 2.  Some Macbook Pros, and iMacs also have a device pixel ratio of 2.  Some high end Android devices have pixel 
     *  ratios of 2 or 3.  Some browsers like Firefox allow you to configure the pixel ratio of the viewport.  Unless otherwise
     *  specificed, the pixel ratio will be defaulted to the actual device pixel ratio.  You can override the device pixel
     *  ratio for special situations, or, if you don't want the pixel ratio to be taken into account, you can set it to 1.
     */Kinetic$1.Canvas=function(config){this.init(config);};Kinetic$1.Canvas.prototype={init:function init(config){config=config||{};var pixelRatio=config.pixelRatio||Kinetic$1.pixelRatio||_pixelRatio;this.pixelRatio=pixelRatio;this._canvas=Kinetic$1.Util.createCanvasElement();// set inline styles
this._canvas.style.padding=0;this._canvas.style.margin=0;this._canvas.style.border=0;this._canvas.style.background='transparent';this._canvas.style.position='absolute';this._canvas.style.top=0;this._canvas.style.left=0;},/**
         * get canvas context
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @returns {CanvasContext} context
         */getContext:function getContext(){return this.context;},/**
         * get pixel ratio
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @returns {Number} pixel ratio
         */getPixelRatio:function getPixelRatio(){return this.pixelRatio;},/**
         * get pixel ratio
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @param {Number} pixelRatio KineticJS automatically handles pixel ratio adustments in order to render crisp drawings 
         *  on all devices. Most desktops, low end tablets, and low end phones, have device pixel ratios
         *  of 1.  Some high end tablets and phones, like iPhones and iPads (not the mini) have a device pixel ratio 
         *  of 2.  Some Macbook Pros, and iMacs also have a device pixel ratio of 2.  Some high end Android devices have pixel 
         *  ratios of 2 or 3.  Some browsers like Firefox allow you to configure the pixel ratio of the viewport.  Unless otherwise
         *  specificed, the pixel ratio will be defaulted to the actual device pixel ratio.  You can override the device pixel
         *  ratio for special situations, or, if you don't want the pixel ratio to be taken into account, you can set it to 1.
         */setPixelRatio:function setPixelRatio(pixelRatio){this.pixelRatio=pixelRatio;this.setSize(this.getWidth(),this.getHeight());},/**
         * set width
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @param {Number} width
         */setWidth:function setWidth(width){// take into account pixel ratio
this.width=this._canvas.width=width*this.pixelRatio;this._canvas.style.width=width+'px';},/**
         * set height
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @param {Number} height
         */setHeight:function setHeight(height){// take into account pixel ratio
this.height=this._canvas.height=height*this.pixelRatio;this._canvas.style.height=height+'px';},/**
         * get width
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @returns {Number} width
         */getWidth:function getWidth(){return this.width;},/**
         * get height
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @returns {Number} height
         */getHeight:function getHeight(){return this.height;},/**
         * set size
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @param {Number} width
         * @param {Number} height
         */setSize:function setSize(width,height){this.setWidth(width);this.setHeight(height);},/**
         * to data url
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @param {String} mimeType
         * @param {Number} quality between 0 and 1 for jpg mime types
         * @returns {String} data url string
         */toDataURL:function toDataURL(mimeType,quality){try{// If this call fails (due to browser bug, like in Firefox 3.6),
// then revert to previous no-parameter image/png behavior
return this._canvas.toDataURL(mimeType,quality);}catch(e){try{return this._canvas.toDataURL();}catch(err){Kinetic$1.Util.warn('Unable to get data URL. '+err.message);return '';}}}};Kinetic$1.SceneCanvas=function(config){config=config||{};var width=config.width||0,height=config.height||0;Kinetic$1.Canvas.call(this,config);this.context=new Kinetic$1.SceneContext(this);this.setSize(width,height);};Kinetic$1.SceneCanvas.prototype={setWidth:function setWidth(width){var pixelRatio=this.pixelRatio,_context=this.getContext()._context;Kinetic$1.Canvas.prototype.setWidth.call(this,width);_context.scale(pixelRatio,pixelRatio);},setHeight:function setHeight(height){var pixelRatio=this.pixelRatio,_context=this.getContext()._context;Kinetic$1.Canvas.prototype.setHeight.call(this,height);_context.scale(pixelRatio,pixelRatio);}};Kinetic$1.Util.extend(Kinetic$1.SceneCanvas,Kinetic$1.Canvas);Kinetic$1.HitCanvas=function(config){config=config||{};var width=config.width||0,height=config.height||0;Kinetic$1.Canvas.call(this,config);this.context=new Kinetic$1.HitContext(this);this.setSize(width,height);};Kinetic$1.Util.extend(Kinetic$1.HitCanvas,Kinetic$1.Canvas);})();(function(){var COMMA=',',OPEN_PAREN='(',CLOSE_PAREN=')',OPEN_PAREN_BRACKET='([',CLOSE_BRACKET_PAREN='])',SEMICOLON=';',DOUBLE_PAREN='()',// EMPTY_STRING = '',
EQUALS='=',// SET = 'set',
CONTEXT_METHODS=['arc','arcTo','beginPath','bezierCurveTo','clearRect','clip','closePath','createLinearGradient','createPattern','createRadialGradient','drawImage','fill','fillText','getImageData','createImageData','lineTo','moveTo','putImageData','quadraticCurveTo','rect','restore','rotate','save','scale','setLineDash','setTransform','stroke','strokeText','transform','translate'];/**
     * Canvas Context constructor
     * @constructor
     * @abstract
     * @memberof Kinetic
     */Kinetic$1.Context=function(canvas){this.init(canvas);};Kinetic$1.Context.prototype={init:function init(canvas){this.canvas=canvas;this._context=canvas._canvas.getContext('2d');if(Kinetic$1.enableTrace){this.traceArr=[];this._enableTrace();}},/**
         * fill shape
         * @method
         * @memberof Kinetic.Context.prototype
         * @param {Kinetic.Shape} shape
         */fillShape:function fillShape(shape){if(shape.getFillEnabled()){this._fill(shape);}},/**
         * stroke shape
         * @method
         * @memberof Kinetic.Context.prototype
         * @param {Kinetic.Shape} shape
         */strokeShape:function strokeShape(shape){if(shape.getStrokeEnabled()){this._stroke(shape);}},/**
         * fill then stroke
         * @method
         * @memberof Kinetic.Context.prototype
         * @param {Kinetic.Shape} shape
         */fillStrokeShape:function fillStrokeShape(shape){var fillEnabled=shape.getFillEnabled();if(fillEnabled){this._fill(shape);}if(shape.getStrokeEnabled()){this._stroke(shape);}},/**
         * get context trace if trace is enabled
         * @method
         * @memberof Kinetic.Context.prototype
         * @param {Boolean} relaxed if false, return strict context trace, which includes method names, method parameters
         *  properties, and property values.  If true, return relaxed context trace, which only returns method names and
         *  properites.
         * @returns {String}
         */getTrace:function getTrace(relaxed){var traceArr=this.traceArr,len=traceArr.length,str='',n,trace,method,args;for(n=0;n<len;n++){trace=traceArr[n];method=trace.method;// methods
if(method){args=trace.args;str+=method;if(relaxed){str+=DOUBLE_PAREN;}else {if(Kinetic$1.Util._isArray(args[0])){str+=OPEN_PAREN_BRACKET+args.join(COMMA)+CLOSE_BRACKET_PAREN;}else {str+=OPEN_PAREN+args.join(COMMA)+CLOSE_PAREN;}}}// properties
else {str+=trace.property;if(!relaxed){str+=EQUALS+trace.val;}}str+=SEMICOLON;}return str;},/**
         * clear trace if trace is enabled
         * @method
         * @memberof Kinetic.Context.prototype
         */clearTrace:function clearTrace(){this.traceArr=[];},_trace:function _trace(str){var traceArr=this.traceArr,len;traceArr.push(str);len=traceArr.length;if(len>=Kinetic$1.traceArrMax){traceArr.shift();}},/**
         * reset canvas context transform
         * @method
         * @memberof Kinetic.Context.prototype
         */reset:function reset(){var pixelRatio=this.getCanvas().getPixelRatio();this.setTransform(1*pixelRatio,0,0,1*pixelRatio,0,0);},/**
         * get canvas
         * @method
         * @memberof Kinetic.Context.prototype
         * @returns {Kinetic.Canvas}
         */getCanvas:function getCanvas(){return this.canvas;},/**
         * clear canvas
         * @method
         * @memberof Kinetic.Context.prototype
         * @param {Object} [bounds]
         * @param {Number} [bounds.x]
         * @param {Number} [bounds.y]
         * @param {Number} [bounds.width]
         * @param {Number} [bounds.height]
         */clear:function clear(bounds){var canvas=this.getCanvas();if(bounds){this.clearRect(bounds.x||0,bounds.y||0,bounds.width||0,bounds.height||0);}else {this.clearRect(0,0,canvas.getWidth(),canvas.getHeight());}},_applyLineCap:function _applyLineCap(shape){var lineCap=shape.getLineCap();if(lineCap){this.setAttr('lineCap',lineCap);}},_applyOpacity:function _applyOpacity(shape){var absOpacity=shape.getAbsoluteOpacity();if(absOpacity!==1){this.setAttr('globalAlpha',absOpacity);}},_applyLineJoin:function _applyLineJoin(shape){var lineJoin=shape.getLineJoin();if(lineJoin){this.setAttr('lineJoin',lineJoin);}},setAttr:function setAttr(attr,val){this._context[attr]=val;},// context pass through methods
arc:function arc(){var a=arguments;this._context.arc(a[0],a[1],a[2],a[3],a[4],a[5]);},beginPath:function beginPath(){this._context.beginPath();},bezierCurveTo:function bezierCurveTo(){var a=arguments;this._context.bezierCurveTo(a[0],a[1],a[2],a[3],a[4],a[5]);},clearRect:function clearRect(){var a=arguments;this._context.clearRect(a[0],a[1],a[2],a[3]);},clip:function clip(){this._context.clip();},closePath:function closePath(){this._context.closePath();},createImageData:function createImageData(){var a=arguments;if(a.length===2){return this._context.createImageData(a[0],a[1]);}else if(a.length===1){return this._context.createImageData(a[0]);}},createLinearGradient:function createLinearGradient(){var a=arguments;return this._context.createLinearGradient(a[0],a[1],a[2],a[3]);},createPattern:function createPattern(){var a=arguments;return this._context.createPattern(a[0],a[1]);},createRadialGradient:function createRadialGradient(){var a=arguments;return this._context.createRadialGradient(a[0],a[1],a[2],a[3],a[4],a[5]);},drawImage:function drawImage(){var a=arguments,_context=this._context;if(a.length===3){_context.drawImage(a[0],a[1],a[2]);}else if(a.length===5){_context.drawImage(a[0],a[1],a[2],a[3],a[4]);}else if(a.length===9){_context.drawImage(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]);}},fill:function fill(){this._context.fill();},fillText:function fillText(){var a=arguments;this._context.fillText(a[0],a[1],a[2]);},getImageData:function getImageData(){var a=arguments;return this._context.getImageData(a[0],a[1],a[2],a[3]);},lineTo:function lineTo(){var a=arguments;this._context.lineTo(a[0],a[1]);},moveTo:function moveTo(){var a=arguments;this._context.moveTo(a[0],a[1]);},rect:function rect(){var a=arguments;this._context.rect(a[0],a[1],a[2],a[3]);},putImageData:function putImageData(){var a=arguments;this._context.putImageData(a[0],a[1],a[2]);},quadraticCurveTo:function quadraticCurveTo(){var a=arguments;this._context.quadraticCurveTo(a[0],a[1],a[2],a[3]);},restore:function restore(){this._context.restore();},rotate:function rotate(){var a=arguments;this._context.rotate(a[0]);},save:function save(){this._context.save();},scale:function scale(){var a=arguments;this._context.scale(a[0],a[1]);},setLineDash:function setLineDash(){var a=arguments,_context=this._context;// works for Chrome and IE11
if(this._context.setLineDash){_context.setLineDash(a[0]);}// verified that this works in firefox
else if('mozDash'in _context){_context.mozDash=a[0];}// does not currently work for Safari
else if('webkitLineDash'in _context){_context.webkitLineDash=a[0];}// no support for IE9 and IE10
},setTransform:function setTransform(){var a=arguments;this._context.setTransform(a[0],a[1],a[2],a[3],a[4],a[5]);},stroke:function stroke(){this._context.stroke();},strokeText:function strokeText(){var a=arguments;this._context.strokeText(a[0],a[1],a[2]);},transform:function transform(){var a=arguments;this._context.transform(a[0],a[1],a[2],a[3],a[4],a[5]);},translate:function translate(){var a=arguments;this._context.translate(a[0],a[1]);},_enableTrace:function _enableTrace(){var that=this,len=CONTEXT_METHODS.length,_simplifyArray=Kinetic$1.Util._simplifyArray,origSetter=this.setAttr,n,args;// to prevent creating scope function at each loop
var func=function func(methodName){var origMethod=that[methodName],ret;that[methodName]=function(){args=_simplifyArray(Array.prototype.slice.call(arguments,0));ret=origMethod.apply(that,arguments);that._trace({method:methodName,args:args});return ret;};};// methods
for(n=0;n<len;n++){func(CONTEXT_METHODS[n]);}// attrs
that.setAttr=function(){origSetter.apply(that,arguments);that._trace({property:arguments[0],val:arguments[1]});};}};Kinetic$1.SceneContext=function(canvas){Kinetic$1.Context.call(this,canvas);};Kinetic$1.SceneContext.prototype={_fillColor:function _fillColor(shape){var fill=shape.fill()||Kinetic$1.Util._getRGBAString({red:shape.fillRed(),green:shape.fillGreen(),blue:shape.fillBlue(),alpha:shape.fillAlpha()});this.setAttr('fillStyle',fill);shape._fillFunc(this);},_fillPattern:function _fillPattern(shape){var fillPatternImage=shape.getFillPatternImage(),fillPatternX=shape.getFillPatternX(),fillPatternY=shape.getFillPatternY(),fillPatternScale=shape.getFillPatternScale(),fillPatternRotation=Kinetic$1.getAngle(shape.getFillPatternRotation()),fillPatternOffset=shape.getFillPatternOffset(),fillPatternRepeat=shape.getFillPatternRepeat();if(fillPatternX||fillPatternY){this.translate(fillPatternX||0,fillPatternY||0);}if(fillPatternRotation){this.rotate(fillPatternRotation);}if(fillPatternScale){this.scale(fillPatternScale.x,fillPatternScale.y);}if(fillPatternOffset){this.translate(-1*fillPatternOffset.x,-1*fillPatternOffset.y);}this.setAttr('fillStyle',this.createPattern(fillPatternImage,fillPatternRepeat||'repeat'));this.fill();},_fillLinearGradient:function _fillLinearGradient(shape){var start=shape.getFillLinearGradientStartPoint(),end=shape.getFillLinearGradientEndPoint(),colorStops=shape.getFillLinearGradientColorStops(),grd=this.createLinearGradient(start.x,start.y,end.x,end.y);if(colorStops){// build color stops
for(var n=0;n<colorStops.length;n+=2){grd.addColorStop(colorStops[n],colorStops[n+1]);}this.setAttr('fillStyle',grd);this.fill();}},_fillRadialGradient:function _fillRadialGradient(shape){var start=shape.getFillRadialGradientStartPoint(),end=shape.getFillRadialGradientEndPoint(),startRadius=shape.getFillRadialGradientStartRadius(),endRadius=shape.getFillRadialGradientEndRadius(),colorStops=shape.getFillRadialGradientColorStops(),grd=this.createRadialGradient(start.x,start.y,startRadius,end.x,end.y,endRadius);// build color stops
for(var n=0;n<colorStops.length;n+=2){grd.addColorStop(colorStops[n],colorStops[n+1]);}this.setAttr('fillStyle',grd);this.fill();},_fill:function _fill(shape){var hasColor=shape.fill()||shape.fillRed()||shape.fillGreen()||shape.fillBlue(),hasPattern=shape.getFillPatternImage(),hasLinearGradient=shape.getFillLinearGradientColorStops(),hasRadialGradient=shape.getFillRadialGradientColorStops(),fillPriority=shape.getFillPriority();// priority fills
if(hasColor&&fillPriority==='color'){this._fillColor(shape);}else if(hasPattern&&fillPriority==='pattern'){this._fillPattern(shape);}else if(hasLinearGradient&&fillPriority==='linear-gradient'){this._fillLinearGradient(shape);}else if(hasRadialGradient&&fillPriority==='radial-gradient'){this._fillRadialGradient(shape);}// now just try and fill with whatever is available
else if(hasColor){this._fillColor(shape);}else if(hasPattern){this._fillPattern(shape);}else if(hasLinearGradient){this._fillLinearGradient(shape);}else if(hasRadialGradient){this._fillRadialGradient(shape);}},_stroke:function _stroke(shape){var dash=shape.dash(),strokeScaleEnabled=shape.getStrokeScaleEnabled();if(shape.hasStroke()){if(!strokeScaleEnabled){this.save();this.setTransform(1,0,0,1,0,0);}this._applyLineCap(shape);if(dash&&shape.dashEnabled()){this.setLineDash(dash);}this.setAttr('lineWidth',shape.strokeWidth());this.setAttr('strokeStyle',shape.stroke()||Kinetic$1.Util._getRGBAString({red:shape.strokeRed(),green:shape.strokeGreen(),blue:shape.strokeBlue(),alpha:shape.strokeAlpha()}));shape._strokeFunc(this);if(!strokeScaleEnabled){this.restore();}}},_applyShadow:function _applyShadow(shape){var util=Kinetic$1.Util,absOpacity=shape.getAbsoluteOpacity(),color=util.get(shape.getShadowColor(),'black'),blur=util.get(shape.getShadowBlur(),5),shadowOpacity=util.get(shape.getShadowOpacity(),1),offset=util.get(shape.getShadowOffset(),{x:0,y:0});if(shadowOpacity){this.setAttr('globalAlpha',shadowOpacity*absOpacity);}this.setAttr('shadowColor',color);this.setAttr('shadowBlur',blur);this.setAttr('shadowOffsetX',offset.x);this.setAttr('shadowOffsetY',offset.y);}};Kinetic$1.Util.extend(Kinetic$1.SceneContext,Kinetic$1.Context);Kinetic$1.HitContext=function(canvas){Kinetic$1.Context.call(this,canvas);};Kinetic$1.HitContext.prototype={_fill:function _fill(shape){this.save();this.setAttr('fillStyle',shape.colorKey);shape._fillFuncHit(this);this.restore();},_stroke:function _stroke(shape){if(shape.hasStroke()){this._applyLineCap(shape);this.setAttr('lineWidth',shape.strokeWidth());this.setAttr('strokeStyle',shape.colorKey);shape._strokeFuncHit(this);}}};Kinetic$1.Util.extend(Kinetic$1.HitContext,Kinetic$1.Context);})();/*jshint unused:false */(function(){// CONSTANTS
var GET='get',SET='set';Kinetic$1.Factory={addGetterSetter:function addGetterSetter(constructor,attr,def,validator,after){this.addGetter(constructor,attr,def);this.addSetter(constructor,attr,validator,after);this.addOverloadedGetterSetter(constructor,attr);},addGetter:function addGetter(constructor,attr,def){var method=GET+Kinetic$1.Util._capitalize(attr);constructor.prototype[method]=function(){var val=this.attrs[attr];return val===undefined?def:val;};},addSetter:function addSetter(constructor,attr,validator,after){var method=SET+Kinetic$1.Util._capitalize(attr);constructor.prototype[method]=function(val){if(validator){val=validator.call(this,val);}this._setAttr(attr,val);if(after){after.call(this);}return this;};},addComponentsGetterSetter:function addComponentsGetterSetter(constructor,attr,components,validator,after){var len=components.length,capitalize=Kinetic$1.Util._capitalize,getter=GET+capitalize(attr),setter=SET+capitalize(attr),n,component;// getter
constructor.prototype[getter]=function(){var ret={};for(n=0;n<len;n++){component=components[n];ret[component]=this.getAttr(attr+capitalize(component));}return ret;};// setter
constructor.prototype[setter]=function(val){var oldVal=this.attrs[attr],key;if(validator){val=validator.call(this,val);}for(key in val){this._setAttr(attr+capitalize(key),val[key]);}this._fireChangeEvent(attr,oldVal,val);if(after){after.call(this);}return this;};this.addOverloadedGetterSetter(constructor,attr);},addOverloadedGetterSetter:function addOverloadedGetterSetter(constructor,attr){var capitalizedAttr=Kinetic$1.Util._capitalize(attr),setter=SET+capitalizedAttr,getter=GET+capitalizedAttr;constructor.prototype[attr]=function(){// setting
if(arguments.length){this[setter](arguments[0]);return this;}// getting
else {return this[getter]();}};},backCompat:function backCompat(constructor,methods){var key;for(key in methods){constructor.prototype[key]=constructor.prototype[methods[key]];}},afterSetFilter:function afterSetFilter(){this._filterUpToDate=false;}};Kinetic$1.Validators={RGBComponent:function RGBComponent(val){if(val>255){return 255;}else if(val<0){return 0;}else {return Math.round(val);}},alphaComponent:function alphaComponent(val){if(val>1){return 1;}// chrome does not honor alpha values of 0
else if(val<0.0001){return 0.0001;}else {return val;}}};})();(function(){// CONSTANTS
var ABSOLUTE_OPACITY='absoluteOpacity',ABSOLUTE_TRANSFORM='absoluteTransform',CHANGE='Change',CHILDREN='children',DOT='.',EMPTY_STRING='',GET='get',ID='id',KINETIC='kinetic',LISTENING='listening',MOUSEENTER='mouseenter',MOUSELEAVE='mouseleave',NAME='name',SET='set',SHAPE='Shape',SPACE=' ',STAGE='stage',TRANSFORM='transform',UPPER_STAGE='Stage',VISIBLE='visible',CLONE_BLACK_LIST=['id'],TRANSFORM_CHANGE_STR=['xChange.kinetic','yChange.kinetic','scaleXChange.kinetic','scaleYChange.kinetic','skewXChange.kinetic','skewYChange.kinetic','rotationChange.kinetic','offsetXChange.kinetic','offsetYChange.kinetic','transformsEnabledChange.kinetic'].join(SPACE);Kinetic$1.Util.addMethods(Kinetic$1.Node,{_init:function _init(config){var that=this;this._id=Kinetic$1.idCounter++;this.eventListeners={};this.attrs={};this._cache={};this._filterUpToDate=false;this.setAttrs(config);// event bindings for cache handling
this.on(TRANSFORM_CHANGE_STR,function(){this._clearCache(TRANSFORM);that._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);});this.on('visibleChange.kinetic',function(){that._clearSelfAndDescendantCache(VISIBLE);});this.on('listeningChange.kinetic',function(){that._clearSelfAndDescendantCache(LISTENING);});this.on('opacityChange.kinetic',function(){that._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);});},_clearCache:function _clearCache(attr){if(attr){delete this._cache[attr];}else {this._cache={};}},_getCache:function _getCache(attr,privateGetter){var cache=this._cache[attr];// if not cached, we need to set it using the private getter method.
if(cache===undefined){this._cache[attr]=privateGetter.call(this);}return this._cache[attr];},/*
         * when the logic for a cached result depends on ancestor propagation, use this
         * method to clear self and children cache
         */_clearSelfAndDescendantCache:function _clearSelfAndDescendantCache(attr){this._clearCache(attr);if(this.children){this.getChildren().each(function(node){node._clearSelfAndDescendantCache(attr);});}},/**
        * clear cached canvas
        * @method
        * @memberof Kinetic.Node.prototype
        * @returns {Kinetic.Node}
        * @example
        * node.clearCache();
        */clearCache:function clearCache(){delete this._cache.canvas;this._filterUpToDate=false;return this;},/**
        * cache node to improve drawing performance, apply filters, or create more accurate
        *  hit regions
        * @method
        * @memberof Kinetic.Node.prototype
        * @param {Object} config
        * @param {Number} [config.x]
        * @param {Number} [config.y]
        * @param {Number} [config.width]
        * @param {Number} [config.height]
        * @param {Boolean} [config.drawBorder] when set to true, a red border will be drawn around the cached
        *  region for debugging purposes
        * @returns {Kinetic.Node}
        * @example
        * // cache a shape with the x,y position of the bounding box at the center and<br>
        * // the width and height of the bounding box equal to the width and height of<br>
        * // the shape obtained from shape.width() and shape.height()<br>
        * image.cache();<br><br>
        *
        * // cache a node and define the bounding box position and size<br>
        * node.cache({<br>
        *   x: -30,<br>
        *   y: -30,<br>
        *   width: 100,<br>
        *   height: 200<br>
        * });<br><br>
        *
        * // cache a node and draw a red border around the bounding box<br>
        * // for debugging purposes<br>
        * node.cache({<br>
        *   x: -30,<br>
        *   y: -30,<br>
        *   width: 100,<br>
        *   height: 200,<br>
        *   drawBorder: true<br>
        * });
        */cache:function cache(config){var conf=config||{},x=conf.x||0,y=conf.y||0,width=conf.width||this.width(),height=conf.height||this.height(),drawBorder=conf.drawBorder||false;this.getLayer();if(width===0||height===0){Kinetic$1.Util.warn('Width or height of caching configuration equals 0. Cache is ignored.');return;}var cachedSceneCanvas=new Kinetic$1.SceneCanvas({pixelRatio:1,width:width,height:height}),cachedFilterCanvas=new Kinetic$1.SceneCanvas({pixelRatio:1,width:width,height:height}),cachedHitCanvas=new Kinetic$1.HitCanvas({width:width,height:height});this.transformsEnabled();this.x();this.y();var sceneContext=cachedSceneCanvas.getContext(),hitContext=cachedHitCanvas.getContext();this.clearCache();sceneContext.save();hitContext.save();// this will draw a red border around the cached box for
// debugging purposes
if(drawBorder){sceneContext.save();sceneContext.beginPath();sceneContext.rect(0,0,width,height);sceneContext.closePath();sceneContext.setAttr('strokeStyle','red');sceneContext.setAttr('lineWidth',5);sceneContext.stroke();sceneContext.restore();}sceneContext.translate(x*-1,y*-1);hitContext.translate(x*-1,y*-1);if(this.nodeType==='Shape'){sceneContext.translate(this.x()*-1,this.y()*-1);hitContext.translate(this.x()*-1,this.y()*-1);}this.drawScene(cachedSceneCanvas,this);this.drawHit(cachedHitCanvas,this);sceneContext.restore();hitContext.restore();this._cache.canvas={scene:cachedSceneCanvas,filter:cachedFilterCanvas,hit:cachedHitCanvas};return this;},_drawCachedSceneCanvas:function _drawCachedSceneCanvas(context){context.save();this.getLayer()._applyTransform(this,context);context.drawImage(this._getCachedSceneCanvas()._canvas,0,0);context.restore();},_getCachedSceneCanvas:function _getCachedSceneCanvas(){var filters=this.filters(),cachedCanvas=this._cache.canvas,sceneCanvas=cachedCanvas.scene,filterCanvas=cachedCanvas.filter,filterContext=filterCanvas.getContext(),len,imageData,n,filter;if(filters){if(!this._filterUpToDate){try{len=filters.length;filterContext.clear();// copy cached canvas onto filter context
filterContext.drawImage(sceneCanvas._canvas,0,0);imageData=filterContext.getImageData(0,0,filterCanvas.getWidth(),filterCanvas.getHeight());// apply filters to filter context
for(n=0;n<len;n++){filter=filters[n];filter.call(this,imageData);filterContext.putImageData(imageData,0,0);}}catch(e){Kinetic$1.Util.warn('Unable to apply filter. '+e.message);}this._filterUpToDate=true;}return filterCanvas;}else {return sceneCanvas;}},_drawCachedHitCanvas:function _drawCachedHitCanvas(context){var cachedCanvas=this._cache.canvas,hitCanvas=cachedCanvas.hit;context.save();this.getLayer()._applyTransform(this,context);context.drawImage(hitCanvas._canvas,0,0);context.restore();},/**
         * bind events to the node. KineticJS supports mouseover, mousemove,
         *  mouseout, mouseenter, mouseleave, mousedown, mouseup, click, dblclick, touchstart, touchmove,
         *  touchend, tap, dbltap, dragstart, dragmove, and dragend events. The Kinetic Stage supports
         *  contentMouseover, contentMousemove, contentMouseout, contentMousedown, contentMouseup,
         *  contentClick, contentDblclick, contentTouchstart, contentTouchmove, contentTouchend, contentTap,
         *  and contentDblTap.  Pass in a string of events delimmited by a space to bind multiple events at once
         *  such as 'mousedown mouseup mousemove'. Include a namespace to bind an
         *  event by name such as 'click.foobar'.
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {String} evtStr e.g. 'click', 'mousedown touchstart', 'mousedown.foo touchstart.foo'
         * @param {Function} handler The handler function is passed an event object
         * @returns {Kinetic.Node}
         * @example
         * // add click listener<br>
         * node.on('click', function() {<br>
         *   console.log('you clicked me!');<br>
         * });<br><br>
         *
         * // get the target node<br>
         * node.on('click', function(evt) {<br>
         *   console.log(evt.target);<br>
         * });<br><br>
         *
         * // stop event propagation<br>
         * node.on('click', function(evt) {<br>
         *   evt.cancelBubble = true;<br>
         * });<br><br>
         *
         * // bind multiple listeners<br>
         * node.on('click touchstart', function() {<br>
         *   console.log('you clicked/touched me!');<br>
         * });<br><br>
         *
         * // namespace listener<br>
         * node.on('click.foo', function() {<br>
         *   console.log('you clicked/touched me!');<br>
         * });<br><br>
         *
         * // get the event type<br>
         * node.on('click tap', function(evt) {<br>
         *   var eventType = evt.type;<br>
         * });<br><br>
         *
         * // get native event object<br>
         * node.on('click tap', function(evt) {<br>
         *   var nativeEvent = evt.evt;<br>
         * });<br><br>
         *
         * // for change events, get the old and new val<br>
         * node.on('xChange', function(evt) {<br>
         *   var oldVal = evt.oldVal;<br>
         *   var newVal = evt.newVal;<br>
         * });
         */on:function on(evtStr,handler){var events=evtStr.split(SPACE),len=events.length,n,event,parts,baseEvent,name;/*
             * loop through types and attach event listeners to
             * each one.  eg. 'click mouseover.namespace mouseout'
             * will create three event bindings
             */for(n=0;n<len;n++){event=events[n];parts=event.split(DOT);baseEvent=parts[0];name=parts[1]||EMPTY_STRING;// create events array if it doesn't exist
if(!this.eventListeners[baseEvent]){this.eventListeners[baseEvent]=[];}this.eventListeners[baseEvent].push({name:name,handler:handler});// NOTE: this flag is set to true when any event handler is added, even non
// mouse or touch gesture events.  This improves performance for most
// cases where users aren't using events, but is still very light weight.  
// To ensure perfect accuracy, devs can explicitly set listening to false.
/*
                if (name !== KINETIC) {
                    this._listeningEnabled = true;
                    this._clearSelfAndAncestorCache(LISTENING_ENABLED);
                }
                */}return this;},/**
         * remove event bindings from the node. Pass in a string of
         *  event types delimmited by a space to remove multiple event
         *  bindings at once such as 'mousedown mouseup mousemove'.
         *  include a namespace to remove an event binding by name
         *  such as 'click.foobar'. If you only give a name like '.foobar',
         *  all events in that namespace will be removed.
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {String} evtStr e.g. 'click', 'mousedown touchstart', '.foobar'
         * @returns {Kinetic.Node}
         * @example
         * // remove listener<br>
         * node.off('click');<br><br>
         *
         * // remove multiple listeners<br>
         * node.off('click touchstart');<br><br>
         *
         * // remove listener by name<br>
         * node.off('click.foo');
         */off:function off(evtStr){var events=evtStr.split(SPACE),len=events.length,n,t,event,parts,baseEvent,name;for(n=0;n<len;n++){event=events[n];parts=event.split(DOT);baseEvent=parts[0];name=parts[1];if(baseEvent){if(this.eventListeners[baseEvent]){this._off(baseEvent,name);}}else {for(t in this.eventListeners){this._off(t,name);}}}return this;},// some event aliases for third party integration like HammerJS
dispatchEvent:function dispatchEvent(evt){var e={target:this,type:evt.type,evt:evt};this.fire(evt.type,e);},addEventListener:function addEventListener(type,handler){// we to pass native event to handler
this.on(type,function(evt){handler.call(this,evt.evt);});},/**
         * remove self from parent, but don't destroy
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Node}
         * @example
         * node.remove();
         */remove:function remove(){var parent=this.getParent();if(parent&&parent.children){parent.children.splice(this.index,1);parent._setChildrenIndices();delete this.parent;}// every cached attr that is calculated via node tree
// traversal must be cleared when removing a node
this._clearSelfAndDescendantCache(STAGE);this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);this._clearSelfAndDescendantCache(VISIBLE);this._clearSelfAndDescendantCache(LISTENING);this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);return this;},/**
         * remove and destroy self
         * @method
         * @memberof Kinetic.Node.prototype
         * @example
         * node.destroy();
         */destroy:function destroy(){// remove from ids and names hashes
Kinetic$1._removeId(this.getId());Kinetic$1._removeName(this.getName(),this._id);this.remove();},/**
         * get attr
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {String} attr
         * @returns {Integer|String|Object|Array}
         * @example
         * var x = node.getAttr('x');
         */getAttr:function getAttr(attr){var method=GET+Kinetic$1.Util._capitalize(attr);if(Kinetic$1.Util._isFunction(this[method])){return this[method]();}// otherwise get directly
else {return this.attrs[attr];}},/**
        * get ancestors
        * @method
        * @memberof Kinetic.Node.prototype
        * @returns {Kinetic.Collection}
        * @example
        * shape.getAncestors().each(function(node) {
        *   console.log(node.getId());
        * })
        */getAncestors:function getAncestors(){var parent=this.getParent(),ancestors=new Kinetic$1.Collection();while(parent){ancestors.push(parent);parent=parent.getParent();}return ancestors;},/**
         * get attrs object literal
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Object}
         */getAttrs:function getAttrs(){return this.attrs||{};},/**
         * set multiple attrs at once using an object literal
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} config object containing key value pairs
         * @returns {Kinetic.Node}
         * @example
         * node.setAttrs({<br>
         *   x: 5,<br>
         *   fill: 'red'<br>
         * });<br>
         */setAttrs:function setAttrs(config){var key,method;if(config){for(key in config){if(key===CHILDREN);else {method=SET+Kinetic$1.Util._capitalize(key);// use setter if available
if(Kinetic$1.Util._isFunction(this[method])){this[method](config[key]);}// otherwise set directly
else {this._setAttr(key,config[key]);}}}}return this;},/**
         * determine if node is listening for events by taking into account ancestors.
         *
         * Parent    | Self      | isListening
         * listening | listening | 
         * ----------+-----------+------------
         * T         | T         | T 
         * T         | F         | F
         * F         | T         | T 
         * F         | F         | F
         * ----------+-----------+------------
         * T         | I         | T
         * F         | I         | F
         * I         | I         | T
         *
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */isListening:function isListening(){return this._getCache(LISTENING,this._isListening);},_isListening:function _isListening(){var listening=this.getListening(),parent=this.getParent();// the following conditions are a simplification of the truth table above.
// please modify carefully
if(listening==='inherit'){if(parent){return parent.isListening();}else {return true;}}else {return listening;}},/**
         * determine if node is visible by taking into account ancestors.
         *
         * Parent    | Self      | isVisible
         * visible   | visible   | 
         * ----------+-----------+------------
         * T         | T         | T 
         * T         | F         | F
         * F         | T         | T 
         * F         | F         | F
         * ----------+-----------+------------
         * T         | I         | T
         * F         | I         | F
         * I         | I         | T

         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */isVisible:function isVisible(){return this._getCache(VISIBLE,this._isVisible);},_isVisible:function _isVisible(){var visible=this.getVisible(),parent=this.getParent();// the following conditions are a simplification of the truth table above.
// please modify carefully
if(visible==='inherit'){if(parent){return parent.isVisible();}else {return true;}}else {return visible;}},/**
         * determine if listening is enabled by taking into account descendants.  If self or any children
         * have _isListeningEnabled set to true, then self also has listening enabled.
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */shouldDrawHit:function shouldDrawHit(){var layer=this.getLayer();return layer&&layer.hitGraphEnabled()&&this.isListening()&&this.isVisible()&&!Kinetic$1.isDragging();},/**
         * show node
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Node}
         */show:function show(){this.setVisible(true);return this;},/**
         * hide node.  Hidden nodes are no longer detectable
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Node}
         */hide:function hide(){this.setVisible(false);return this;},/**
         * get zIndex relative to the node's siblings who share the same parent
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Integer}
         */getZIndex:function getZIndex(){return this.index||0;},/**
         * get absolute z-index which takes into account sibling
         *  and ancestor indices
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Integer}
         */getAbsoluteZIndex:function getAbsoluteZIndex(){var depth=this.getDepth(),that=this,index=0,nodes,len,n,child;function addChildren(children){nodes=[];len=children.length;for(n=0;n<len;n++){child=children[n];index++;if(child.nodeType!==SHAPE){nodes=nodes.concat(child.getChildren().toArray());}if(child._id===that._id){n=len;}}if(nodes.length>0&&nodes[0].getDepth()<=depth){addChildren(nodes);}}if(that.nodeType!==UPPER_STAGE){addChildren(that.getStage().getChildren());}return index;},/**
         * get node depth in node tree.  Returns an integer.<br><br>
         *  e.g. Stage depth will always be 0.  Layers will always be 1.  Groups and Shapes will always
         *  be >= 2
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Integer}
         */getDepth:function getDepth(){var depth=0,parent=this.parent;while(parent){depth++;parent=parent.parent;}return depth;},setPosition:function setPosition(pos){this.setX(pos.x);this.setY(pos.y);return this;},getPosition:function getPosition(){return {x:this.getX(),y:this.getY()};},/**
         * get absolute position relative to the top left corner of the stage container div
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Object}
         */getAbsolutePosition:function getAbsolutePosition(){var absoluteMatrix=this.getAbsoluteTransform().getMatrix(),absoluteTransform=new Kinetic$1.Transform(),offset=this.offset();// clone the matrix array
absoluteTransform.m=absoluteMatrix.slice();absoluteTransform.translate(offset.x,offset.y);return absoluteTransform.getTranslation();},/**
         * set absolute position
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} pos
         * @param {Number} pos.x
         * @param {Number} pos.y
         * @returns {Kinetic.Node}
         */setAbsolutePosition:function setAbsolutePosition(pos){var origTrans=this._clearTransform(),it;// don't clear translation
this.attrs.x=origTrans.x;this.attrs.y=origTrans.y;delete origTrans.x;delete origTrans.y;// unravel transform
it=this.getAbsoluteTransform();it.invert();it.translate(pos.x,pos.y);pos={x:this.attrs.x+it.getTranslation().x,y:this.attrs.y+it.getTranslation().y};this.setPosition({x:pos.x,y:pos.y});this._setTransform(origTrans);return this;},_setTransform:function _setTransform(trans){var key;for(key in trans){this.attrs[key]=trans[key];}this._clearCache(TRANSFORM);this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);},_clearTransform:function _clearTransform(){var trans={x:this.getX(),y:this.getY(),rotation:this.getRotation(),scaleX:this.getScaleX(),scaleY:this.getScaleY(),offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),skewX:this.getSkewX(),skewY:this.getSkewY()};this.attrs.x=0;this.attrs.y=0;this.attrs.rotation=0;this.attrs.scaleX=1;this.attrs.scaleY=1;this.attrs.offsetX=0;this.attrs.offsetY=0;this.attrs.skewX=0;this.attrs.skewY=0;this._clearCache(TRANSFORM);this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);// return original transform
return trans;},/**
         * move node by an amount relative to its current position
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} change
         * @param {Number} change.x
         * @param {Number} change.y
         * @returns {Kinetic.Node}
         * @example
         * // move node in x direction by 1px and y direction by 2px<br>
         * node.move({<br>
         *   x: 1,<br>
         *   y: 2)<br>
         * });
         */move:function move(change){var changeX=change.x,changeY=change.y,x=this.getX(),y=this.getY();if(changeX!==undefined){x+=changeX;}if(changeY!==undefined){y+=changeY;}this.setPosition({x:x,y:y});return this;},_eachAncestorReverse:function _eachAncestorReverse(func,top){var family=[],parent=this.getParent(),len,n;// if top node is defined, and this node is top node,
// there's no need to build a family tree.  just execute
// func with this because it will be the only node
if(top&&top._id===this._id){func(this);return true;}family.unshift(this);while(parent&&(!top||parent._id!==top._id)){family.unshift(parent);parent=parent.parent;}len=family.length;for(n=0;n<len;n++){func(family[n]);}},/**
         * rotate node by an amount in degrees relative to its current rotation
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Number} theta
         * @returns {Kinetic.Node}
         */rotate:function rotate(theta){this.setRotation(this.getRotation()+theta);return this;},/**
         * move node to the top of its siblings
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */moveToTop:function moveToTop(){if(!this.parent){Kinetic$1.Util.warn('Node has no parent. moveToTop function is ignored.');return;}var index=this.index;this.parent.children.splice(index,1);this.parent.children.push(this);this.parent._setChildrenIndices();return true;},/**
         * move node up
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */moveUp:function moveUp(){if(!this.parent){Kinetic$1.Util.warn('Node has no parent. moveUp function is ignored.');return;}var index=this.index,len=this.parent.getChildren().length;if(index<len-1){this.parent.children.splice(index,1);this.parent.children.splice(index+1,0,this);this.parent._setChildrenIndices();return true;}return false;},/**
         * move node down
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */moveDown:function moveDown(){if(!this.parent){Kinetic$1.Util.warn('Node has no parent. moveDown function is ignored.');return;}var index=this.index;if(index>0){this.parent.children.splice(index,1);this.parent.children.splice(index-1,0,this);this.parent._setChildrenIndices();return true;}return false;},/**
         * move node to the bottom of its siblings
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */moveToBottom:function moveToBottom(){if(!this.parent){Kinetic$1.Util.warn('Node has no parent. moveToBottom function is ignored.');return;}var index=this.index;if(index>0){this.parent.children.splice(index,1);this.parent.children.unshift(this);this.parent._setChildrenIndices();return true;}return false;},/**
         * set zIndex relative to siblings
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Integer} zIndex
         * @returns {Kinetic.Node}
         */setZIndex:function setZIndex(zIndex){if(!this.parent){Kinetic$1.Util.warn('Node has no parent. zIndex parameter is ignored.');return;}var index=this.index;this.parent.children.splice(index,1);this.parent.children.splice(zIndex,0,this);this.parent._setChildrenIndices();return this;},/**
         * get absolute opacity
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Number}
         */getAbsoluteOpacity:function getAbsoluteOpacity(){return this._getCache(ABSOLUTE_OPACITY,this._getAbsoluteOpacity);},_getAbsoluteOpacity:function _getAbsoluteOpacity(){var absOpacity=this.getOpacity();if(this.getParent()){absOpacity*=this.getParent().getAbsoluteOpacity();}return absOpacity;},/**
         * move node to another container
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Container} newContainer
         * @returns {Kinetic.Node}
         * @example
         * // move node from current layer into layer2<br>
         * node.moveTo(layer2);
         */moveTo:function moveTo(newContainer){Kinetic$1.Node.prototype.remove.call(this);newContainer.add(this);return this;},/**
         * convert Node into an object for serialization.  Returns an object.
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Object}
         */toObject:function toObject(){var type=Kinetic$1.Util,obj={},attrs=this.getAttrs(),key,val,getter,defaultValue;obj.attrs={};// serialize only attributes that are not function, image, DOM, or objects with methods
for(key in attrs){val=attrs[key];if(!type._isFunction(val)&&!type._isElement(val)&&!(type._isObject(val)&&type._hasMethods(val))){getter=this[key];// remove attr value so that we can extract the default value from the getter
delete attrs[key];defaultValue=getter?getter.call(this):null;// restore attr value
attrs[key]=val;if(defaultValue!==val){obj.attrs[key]=val;}}}obj.className=this.getClassName();return obj;},/**
         * convert Node into a JSON string.  Returns a JSON string.
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {String}}
         */toJSON:function toJSON(){return JSON.stringify(this.toObject());},/**
         * get parent container
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Node}
         */getParent:function getParent(){return this.parent;},/**
         * get layer ancestor
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Layer}
         */getLayer:function getLayer(){var parent=this.getParent();return parent?parent.getLayer():null;},/**
         * get stage ancestor
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Stage}
         */getStage:function getStage(){return this._getCache(STAGE,this._getStage);},_getStage:function _getStage(){var parent=this.getParent();if(parent){return parent.getStage();}else {return undefined;}},/**
         * fire event
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {String} eventType event type.  can be a regular event, like click, mouseover, or mouseout, or it can be a custom event, like myCustomEvent
         * @param {EventObject} [evt] event object
         * @param {Boolean} [bubble] setting the value to false, or leaving it undefined, will result in the event
         *  not bubbling.  Setting the value to true will result in the event bubbling.
         * @returns {Kinetic.Node}
         * @example
         * // manually fire click event<br>
         * node.fire('click');<br><br>
         *
         * // fire custom event<br>
         * node.fire('foo');<br><br>
         *
         * // fire custom event with custom event object<br>
         * node.fire('foo', {<br>
         *   bar: 10<br>
         * });<br><br>
         *
         * // fire click event that bubbles<br>
         * node.fire('click', null, true);
         */fire:function fire(eventType,evt,bubble){// bubble
if(bubble){this._fireAndBubble(eventType,evt||{});}// no bubble
else {this._fire(eventType,evt||{});}return this;},/**
         * get absolute transform of the node which takes into
         *  account its ancestor transforms
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Transform}
         */getAbsoluteTransform:function getAbsoluteTransform(top){// if using an argument, we can't cache the result.
if(top){return this._getAbsoluteTransform(top);}// if no argument, we can cache the result
else {return this._getCache(ABSOLUTE_TRANSFORM,this._getAbsoluteTransform);}},_getAbsoluteTransform:function _getAbsoluteTransform(top){var at=new Kinetic$1.Transform(),transformsEnabled,trans;// start with stage and traverse downwards to self
this._eachAncestorReverse(function(node){transformsEnabled=node.transformsEnabled();trans=node.getTransform();if(transformsEnabled==='all'){at.multiply(trans);}else if(transformsEnabled==='position'){at.translate(node.x(),node.y());}},top);return at;},/**
         * get transform of the node
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Transform}
         */getTransform:function getTransform(){return this._getCache(TRANSFORM,this._getTransform);},_getTransform:function _getTransform(){var m=new Kinetic$1.Transform(),x=this.getX(),y=this.getY(),rotation=Kinetic$1.getAngle(this.getRotation()),scaleX=this.getScaleX(),scaleY=this.getScaleY(),skewX=this.getSkewX(),skewY=this.getSkewY(),offsetX=this.getOffsetX(),offsetY=this.getOffsetY();if(x!==0||y!==0){m.translate(x,y);}if(rotation!==0){m.rotate(rotation);}if(skewX!==0||skewY!==0){m.skew(skewX,skewY);}if(scaleX!==1||scaleY!==1){m.scale(scaleX,scaleY);}if(offsetX!==0||offsetY!==0){m.translate(-1*offsetX,-1*offsetY);}return m;},/**
         * clone node.  Returns a new Node instance with identical attributes.  You can also override
         *  the node properties with an object literal, enabling you to use an existing node as a template
         *  for another node
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} attrs override attrs
         * @returns {Kinetic.Node}
         * @example
         * // simple clone<br>
         * var clone = node.clone();<br><br>
         *
         * // clone a node and override the x position<br>
         * var clone = rect.clone({<br>
         *   x: 5<br>
         * });
         */clone:function clone(obj){// instantiate new node
var className=this.getClassName(),attrs=Kinetic$1.Util.cloneObject(this.attrs),key,allListeners,len,n,listener;// filter black attrs
for(var i in CLONE_BLACK_LIST){var blockAttr=CLONE_BLACK_LIST[i];delete attrs[blockAttr];}// apply attr overrides
for(key in obj){attrs[key]=obj[key];}var node=new Kinetic$1[className](attrs);// copy over listeners
for(key in this.eventListeners){allListeners=this.eventListeners[key];len=allListeners.length;for(n=0;n<len;n++){listener=allListeners[n];/*
                     * don't include kinetic namespaced listeners because
                     *  these are generated by the constructors
                     */if(listener.name.indexOf(KINETIC)<0){// if listeners array doesn't exist, then create it
if(!node.eventListeners[key]){node.eventListeners[key]=[];}node.eventListeners[key].push(listener);}}}return node;},/**
         * Creates a composite data URL. If MIME type is not
         * specified, then "image/png" will result. For "image/jpeg", specify a quality
         * level as quality (range 0.0 - 1.0)
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} config
         * @param {String} [config.mimeType] can be "image/png" or "image/jpeg".
         *  "image/png" is the default
         * @param {Number} [config.x] x position of canvas section
         * @param {Number} [config.y] y position of canvas section
         * @param {Number} [config.width] width of canvas section
         * @param {Number} [config.height] height of canvas section
         * @param {Number} [config.quality] jpeg quality.  If using an "image/jpeg" mimeType,
         *  you can specify the quality from 0 to 1, where 0 is very poor quality and 1
         *  is very high quality
         * @returns {String}
         */toDataURL:function toDataURL(config){config=config||{};var mimeType=config.mimeType||null,quality=config.quality||null,stage=this.getStage(),x=config.x||0,y=config.y||0,canvas=new Kinetic$1.SceneCanvas({width:config.width||this.getWidth()||(stage?stage.getWidth():0),height:config.height||this.getHeight()||(stage?stage.getHeight():0),pixelRatio:1}),context=canvas.getContext();context.save();if(x||y){context.translate(-1*x,-1*y);}this.drawScene(canvas);context.restore();return canvas.toDataURL(mimeType,quality);},/**
         * converts node into an image.  Since the toImage
         *  method is asynchronous, a callback is required.  toImage is most commonly used
         *  to cache complex drawings as an image so that they don't have to constantly be redrawn
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} config
         * @param {Function} config.callback function executed when the composite has completed
         * @param {String} [config.mimeType] can be "image/png" or "image/jpeg".
         *  "image/png" is the default
         * @param {Number} [config.x] x position of canvas section
         * @param {Number} [config.y] y position of canvas section
         * @param {Number} [config.width] width of canvas section
         * @param {Number} [config.height] height of canvas section
         * @param {Number} [config.quality] jpeg quality.  If using an "image/jpeg" mimeType,
         *  you can specify the quality from 0 to 1, where 0 is very poor quality and 1
         *  is very high quality
         * @example
         * var image = node.toImage({<br>
         *   callback: function(img) {<br>
         *     // do stuff with img<br>
         *   }<br>
         * });
         */toImage:function toImage(config){Kinetic$1.Util._getImage(this.toDataURL(config),function(img){config.callback(img);});},setSize:function setSize(size){this.setWidth(size.width);this.setHeight(size.height);return this;},getSize:function getSize(){return {width:this.getWidth(),height:this.getHeight()};},/**
         * get width
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Integer}
         */getWidth:function getWidth(){return this.attrs.width||0;},/**
         * get height
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Integer}
         */getHeight:function getHeight(){return this.attrs.height||0;},/**
         * get class name, which may return Stage, Layer, Group, or shape class names like Rect, Circle, Text, etc.
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {String}
         */getClassName:function getClassName(){return this.className||this.nodeType;},/**
         * get the node type, which may return Stage, Layer, Group, or Node
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {String}
         */getType:function getType(){return this.nodeType;},getDragDistance:function getDragDistance(){// compare with undefined because we need to track 0 value
if(this.attrs.dragDistance!==undefined){return this.attrs.dragDistance;}else if(this.parent){return this.parent.getDragDistance();}else {return Kinetic$1.dragDistance;}},_get:function _get(selector){return this.nodeType===selector?[this]:[];},_off:function _off(type,name){var evtListeners=this.eventListeners[type],i,evtName;for(i=0;i<evtListeners.length;i++){evtName=evtListeners[i].name;// the following two conditions must be true in order to remove a handler:
// 1) the current event name cannot be kinetic unless the event name is kinetic
//    this enables developers to force remove a kinetic specific listener for whatever reason
// 2) an event name is not specified, or if one is specified, it matches the current event name
if((evtName!=='kinetic'||name==='kinetic')&&(!name||evtName===name)){evtListeners.splice(i,1);if(evtListeners.length===0){delete this.eventListeners[type];break;}i--;}}},_fireChangeEvent:function _fireChangeEvent(attr,oldVal,newVal){this._fire(attr+CHANGE,{oldVal:oldVal,newVal:newVal});},/**
         * set id
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {String} id
         * @returns {Kinetic.Node}
         */setId:function setId(id){var oldId=this.getId();Kinetic$1._removeId(oldId);Kinetic$1._addId(this,id);this._setAttr(ID,id);return this;},setName:function setName(name){var oldName=this.getName();Kinetic$1._removeName(oldName,this._id);Kinetic$1._addName(this,name);this._setAttr(NAME,name);return this;},/**
         * set attr
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {String} attr
         * @param {*} val
         * @returns {Kinetic.Node}
         * @example
         * node.setAttr('x', 5);
         */setAttr:function setAttr(){var args=Array.prototype.slice.call(arguments),attr=args[0],val=args[1],method=SET+Kinetic$1.Util._capitalize(attr),func=this[method];if(Kinetic$1.Util._isFunction(func)){func.call(this,val);}// otherwise set directly
else {this._setAttr(attr,val);}return this;},_setAttr:function _setAttr(key,val){var oldVal;if(val!==undefined){oldVal=this.attrs[key];this.attrs[key]=val;this._fireChangeEvent(key,oldVal,val);}},_setComponentAttr:function _setComponentAttr(key,component,val){var oldVal;if(val!==undefined){oldVal=this.attrs[key];if(!oldVal){// set value to default value using getAttr
this.attrs[key]=this.getAttr(key);}this.attrs[key][component]=val;this._fireChangeEvent(key,oldVal,val);}},_fireAndBubble:function _fireAndBubble(eventType,evt,compareShape){var okayToRun=true;if(evt&&this.nodeType===SHAPE){evt.target=this;}if(eventType===MOUSEENTER&&compareShape&&this._id===compareShape._id){okayToRun=false;}else if(eventType===MOUSELEAVE&&compareShape&&this._id===compareShape._id){okayToRun=false;}if(okayToRun){this._fire(eventType,evt);// simulate event bubbling
if(evt&&!evt.cancelBubble&&this.parent){if(compareShape&&compareShape.parent){this._fireAndBubble.call(this.parent,eventType,evt,compareShape.parent);}else {this._fireAndBubble.call(this.parent,eventType,evt);}}}},_fire:function _fire(eventType,evt){var events=this.eventListeners[eventType],i;evt.type=eventType;if(events){for(i=0;i<events.length;i++){events[i].handler.call(this,evt);}}},/**
         * draw both scene and hit graphs.  If the node being drawn is the stage, all of the layers will be cleared and redrawn
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Node}
         */draw:function draw(){this.drawScene();this.drawHit();return this;}});/**
     * create node with JSON string.  De-serializtion does not generate custom
     *  shape drawing functions, images, or event handlers (this would make the
     *  serialized object huge).  If your app uses custom shapes, images, and
     *  event handlers (it probably does), then you need to select the appropriate
     *  shapes after loading the stage and set these properties via on(), setDrawFunc(),
     *  and setImage() methods
     * @method
     * @memberof Kinetic.Node
     * @param {String} JSON string
     * @param {DomElement} [container] optional container dom element used only if you're
     *  creating a stage node
     */Kinetic$1.Node.create=function(json,container){return this._createNode(JSON.parse(json),container);};Kinetic$1.Node._createNode=function(obj,container){var className=Kinetic$1.Node.prototype.getClassName.call(obj),children=obj.children,no,len,n;// if container was passed in, add it to attrs
if(container){obj.attrs.container=container;}no=new Kinetic$1[className](obj.attrs);if(children){len=children.length;for(n=0;n<len;n++){no.add(this._createNode(children[n]));}}return no;};// =========================== add getters setters ===========================
Kinetic$1.Factory.addOverloadedGetterSetter(Kinetic$1.Node,'position');/**
     * get/set node position relative to parent
     * @name position
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Object} pos
     * @param {Number} pos.x
     * @param {Nubmer} pos.y
     * @returns {Object}
     * @example
     * // get position<br>
     * var position = node.position();<br><br>
     *
     * // set position<br>
     * node.position({<br>
     *   x: 5<br>
     *   y: 10<br>
     * });
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'x',0);/**
     * get/set x position
     * @name x
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} x
     * @returns {Object}
     * @example
     * // get x<br>
     * var x = node.x();<br><br>
     *
     * // set x<br>
     * node.x(5);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'y',0);/**
     * get/set y position
     * @name y
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} y
     * @returns {Integer}
     * @example
     * // get y<br>
     * var y = node.y();<br><br>
     *
     * // set y<br>
     * node.y(5);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'opacity',1);/**
     * get/set opacity.  Opacity values range from 0 to 1.
     *  A node with an opacity of 0 is fully transparent, and a node
     *  with an opacity of 1 is fully opaque
     * @name opacity
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Object} opacity
     * @returns {Number}
     * @example
     * // get opacity<br>
     * var opacity = node.opacity();<br><br>
     *
     * // set opacity<br>
     * node.opacity(0.5);
     */Kinetic$1.Factory.addGetter(Kinetic$1.Node,'name');Kinetic$1.Factory.addOverloadedGetterSetter(Kinetic$1.Node,'name');/**
     * get/set name
     * @name name
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {String} name
     * @returns {String}
     * @example
     * // get name<br>
     * var name = node.name();<br><br>
     *
     * // set name<br>
     * node.name('foo');
     */Kinetic$1.Factory.addGetter(Kinetic$1.Node,'id');Kinetic$1.Factory.addOverloadedGetterSetter(Kinetic$1.Node,'id');/**
     * get/set id
     * @name id
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {String} id
     * @returns {String}
     * @example
     * // get id<br>
     * var name = node.id();<br><br>
     *
     * // set id<br>
     * node.id('foo');
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'rotation',0);/**
     * get/set rotation in degrees
     * @name rotation
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} rotation
     * @returns {Number}
     * @example
     * // get rotation in degrees<br>
     * var rotation = node.rotation();<br><br>
     *
     * // set rotation in degrees<br>
     * node.rotation(45);
     */Kinetic$1.Factory.addComponentsGetterSetter(Kinetic$1.Node,'scale',['x','y']);/**
     * get/set scale
     * @name scale
     * @param {Object} scale
     * @param {Number} scale.x
     * @param {Number} scale.y
     * @method
     * @memberof Kinetic.Node.prototype
     * @returns {Object}
     * @example
     * // get scale<br>
     * var scale = node.scale();<br><br>
     *
     * // set scale <br>
     * shape.scale({<br>
     *   x: 2<br>
     *   y: 3<br>
     * });
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'scaleX',1);/**
     * get/set scale x
     * @name scaleX
     * @param {Number} x
     * @method
     * @memberof Kinetic.Node.prototype
     * @returns {Number}
     * @example
     * // get scale x<br>
     * var scaleX = node.scaleX();<br><br>
     *
     * // set scale x<br>
     * node.scaleX(2);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'scaleY',1);/**
     * get/set scale y
     * @name scaleY
     * @param {Number} y
     * @method
     * @memberof Kinetic.Node.prototype
     * @returns {Number}
     * @example
     * // get scale y<br>
     * var scaleY = node.scaleY();<br><br>
     *
     * // set scale y<br>
     * node.scaleY(2);
     */Kinetic$1.Factory.addComponentsGetterSetter(Kinetic$1.Node,'skew',['x','y']);/**
     * get/set skew
     * @name skew
     * @param {Object} skew
     * @param {Number} skew.x
     * @param {Number} skew.y
     * @method
     * @memberof Kinetic.Node.prototype
     * @returns {Object}
     * @example
     * // get skew<br>
     * var skew = node.skew();<br><br>
     *
     * // set skew <br>
     * node.skew({<br>
     *   x: 20<br>
     *   y: 10
     * });
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'skewX',0);/**
     * get/set skew x
     * @name skewX
     * @param {Number} x
     * @method
     * @memberof Kinetic.Node.prototype
     * @returns {Number}
     * @example
     * // get skew x<br>
     * var skewX = node.skewX();<br><br>
     *
     * // set skew x<br>
     * node.skewX(3);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'skewY',0);/**
     * get/set skew y
     * @name skewY
     * @param {Number} y
     * @method
     * @memberof Kinetic.Node.prototype
     * @returns {Number}
     * @example
     * // get skew y<br>
     * var skewY = node.skewY();<br><br>
     *
     * // set skew y<br>
     * node.skewY(3);
     */Kinetic$1.Factory.addComponentsGetterSetter(Kinetic$1.Node,'offset',['x','y']);/**
     * get/set offset.  Offsets the default position and rotation point
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Object} offset
     * @param {Number} offset.x
     * @param {Number} offset.y
     * @returns {Object}
     * @example
     * // get offset<br>
     * var offset = node.offset();<br><br>
     *
     * // set offset<br>
     * node.offset({<br>
     *   x: 20<br>
     *   y: 10<br>
     * });
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'offsetX',0);/**
     * get/set offset x
     * @name offsetX
     * @memberof Kinetic.Node.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get offset x<br>
     * var offsetX = node.offsetX();<br><br>
     *
     * // set offset x<br>
     * node.offsetX(3);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'offsetY',0);/**
     * get/set drag distance
     * @name dragDistance
     * @memberof Kinetic.Node.prototype
     * @param {Number} distance
     * @returns {Number}
     * @example
     * // get drag distance<br>
     * var dragDistance = node.dragDistance();<br><br>
     *
     * // set distance<br>
     * // node starts dragging only if pointer moved more then 3 pixels<br>
     * node.dragDistance(3);<br>
     * // or set globally<br>
     * Kinetic.dragDistance = 3;
     */Kinetic$1.Factory.addSetter(Kinetic$1.Node,'dragDistance');Kinetic$1.Factory.addOverloadedGetterSetter(Kinetic$1.Node,'dragDistance');/**
     * get/set offset y
     * @name offsetY
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get offset y<br>
     * var offsetY = node.offsetY();<br><br>
     *
     * // set offset y<br>
     * node.offsetY(3);
     */Kinetic$1.Factory.addSetter(Kinetic$1.Node,'width',0);Kinetic$1.Factory.addOverloadedGetterSetter(Kinetic$1.Node,'width');/**
     * get/set width
     * @name width
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} width
     * @returns {Number}
     * @example
     * // get width<br>
     * var width = node.width();<br><br>
     *
     * // set width<br>
     * node.width(100);
     */Kinetic$1.Factory.addSetter(Kinetic$1.Node,'height',0);Kinetic$1.Factory.addOverloadedGetterSetter(Kinetic$1.Node,'height');/**
     * get/set height
     * @name height
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} height
     * @returns {Number}
     * @example
     * // get height<br>
     * var height = node.height();<br><br>
     *
     * // set height<br>
     * node.height(100);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'listening','inherit');/**
     * get/set listenig attr.  If you need to determine if a node is listening or not
     *   by taking into account its parents, use the isListening() method  
     * @name listening
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Boolean|String} listening Can be "inherit", true, or false.  The default is "inherit".
     * @returns {Boolean|String}
     * @example
     * // get listening attr<br>
     * var listening = node.listening();<br><br>
     *
     * // stop listening for events<br>
     * node.listening(false);<br><br>
     *
     * // listen for events<br>
     * node.listening(true);<br><br>
     *
     * // listen to events according to the parent<br>
     * node.listening('inherit');
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'filters',undefined,function(val){this._filterUpToDate=false;return val;});/**
     * get/set filters.  Filters are applied to cached canvases
     * @name filters
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Array} filters array of filters
     * @returns {Array}
     * @example
     * // get filters<br>
     * var filters = node.filters();<br><br>
     *
     * // set a single filter<br>
     * node.cache();<br>
     * node.filters([Kinetic.Filters.Blur]);<br><br>
     *
     * // set multiple filters<br>
     * node.cache();<br>
     * node.filters([<br>
     *   Kinetic.Filters.Blur,<br>
     *   Kinetic.Filters.Sepia,<br>
     *   Kinetic.Filters.Invert<br>
     * ]);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'visible','inherit');/**
     * get/set visible attr.  Can be "inherit", true, or false.  The default is "inherit".
     *   If you need to determine if a node is visible or not
     *   by taking into account its parents, use the isVisible() method  
     * @name visible
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Boolean|String} visible
     * @returns {Boolean|String}
     * @example
     * // get visible attr<br>
     * var visible = node.visible();<br><br>
     *
     * // make invisible<br>
     * node.visible(false);<br><br>
     *
     * // make visible<br>
     * node.visible(true);<br><br>
     *
     * // make visible according to the parent<br>
     * node.visible('inherit');
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'transformsEnabled','all');/**
     * get/set transforms that are enabled.  Can be "all", "none", or "position".  The default
     *  is "all"
     * @name transformsEnabled
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {String} enabled
     * @returns {String}
     * @example
     * // enable position transform only to improve draw performance<br>
     * node.transformsEnabled('position');<br><br>
     *
     * // enable all transforms<br>
     * node.transformsEnabled('all');
     */ /**
     * get/set node size
     * @name size
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Object} size
     * @param {Number} size.width
     * @param {Number} size.height
     * @returns {Object}
     * @example
     * // get node size<br>
     * var size = node.size();<br>
     * var x = size.x;<br>
     * var y = size.y;<br><br>
     *
     * // set size<br>
     * node.size({<br>
     *   width: 100,<br>
     *   height: 200<br>
     * });
     */Kinetic$1.Factory.addOverloadedGetterSetter(Kinetic$1.Node,'size');Kinetic$1.Factory.backCompat(Kinetic$1.Node,{rotateDeg:'rotate',setRotationDeg:'setRotation',getRotationDeg:'getRotation'});Kinetic$1.Collection.mapMethods(Kinetic$1.Node);})();(function(){/**
     * Grayscale Filter
     * @function
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     */Kinetic$1.Filters.Grayscale=function(imageData){var data=imageData.data,len=data.length,i,brightness;for(i=0;i<len;i+=4){brightness=0.34*data[i]+0.5*data[i+1]+0.16*data[i+2];// red
data[i]=brightness;// green
data[i+1]=brightness;// blue
data[i+2]=brightness;}};})();(function(){/**
     * Brighten Filter.  
     * @function
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     */Kinetic$1.Filters.Brighten=function(imageData){var brightness=this.brightness()*255,data=imageData.data,len=data.length,i;for(i=0;i<len;i+=4){// red
data[i]+=brightness;// green
data[i+1]+=brightness;// blue
data[i+2]+=brightness;}};Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'brightness',0,null,Kinetic$1.Factory.afterSetFilter);/**
    * get/set filter brightness.  The brightness is a number between -1 and 1.&nbsp; Positive values 
    *  brighten the pixels and negative values darken them.
    * @name brightness
    * @method
    * @memberof Kinetic.Image.prototype
    * @param {Number} brightness value between -1 and 1
    * @returns {Number}
    */})();(function(){/**
     * Invert Filter
     * @function
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     */Kinetic$1.Filters.Invert=function(imageData){var data=imageData.data,len=data.length,i;for(i=0;i<len;i+=4){// red
data[i]=255-data[i];// green
data[i+1]=255-data[i+1];// blue
data[i+2]=255-data[i+2];}};})();/*
 the Gauss filter
 master repo: https://github.com/pavelpower/kineticjsGaussFilter/
*/(function(){/*

     StackBlur - a fast almost Gaussian Blur For Canvas

     Version:   0.5
     Author:    Mario Klingemann
     Contact:   mario@quasimondo.com
     Website:   http://www.quasimondo.com/StackBlurForCanvas
     Twitter:   @quasimondo

     In case you find this class useful - especially in commercial projects -
     I am not totally unhappy for a small donation to my PayPal account
     mario@quasimondo.de

     Or support me on flattr:
     https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

     Copyright (c) 2010 Mario Klingemann

     Permission is hereby granted, free of charge, to any person
     obtaining a copy of this software and associated documentation
     files (the "Software"), to deal in the Software without
     restriction, including without limitation the rights to use,
     copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the
     Software is furnished to do so, subject to the following
     conditions:

     The above copyright notice and this permission notice shall be
     included in all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
     OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
     HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
     WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
     OTHER DEALINGS IN THE SOFTWARE.
     */function BlurStack(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null;}var mul_table=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var shg_table=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function filterGaussBlurRGBA(imageData,radius){var pixels=imageData.data,width=imageData.width,height=imageData.height;var x,y,i,p,yp,yi,yw,r_sum,g_sum,b_sum,a_sum,r_out_sum,g_out_sum,b_out_sum,a_out_sum,r_in_sum,g_in_sum,b_in_sum,a_in_sum,pr,pg,pb,pa,rbs;var div=radius+radius+1,widthMinus1=width-1,heightMinus1=height-1,radiusPlus1=radius+1,sumFactor=radiusPlus1*(radiusPlus1+1)/2,stackStart=new BlurStack(),stackEnd=null,stack=stackStart,stackIn=null,stackOut=null,mul_sum=mul_table[radius],shg_sum=shg_table[radius];for(i=1;i<div;i++){stack=stack.next=new BlurStack();if(i==radiusPlus1){stackEnd=stack;}}stack.next=stackStart;yw=yi=0;for(y=0;y<height;y++){r_in_sum=g_in_sum=b_in_sum=a_in_sum=r_sum=g_sum=b_sum=a_sum=0;r_out_sum=radiusPlus1*(pr=pixels[yi]);g_out_sum=radiusPlus1*(pg=pixels[yi+1]);b_out_sum=radiusPlus1*(pb=pixels[yi+2]);a_out_sum=radiusPlus1*(pa=pixels[yi+3]);r_sum+=sumFactor*pr;g_sum+=sumFactor*pg;b_sum+=sumFactor*pb;a_sum+=sumFactor*pa;stack=stackStart;for(i=0;i<radiusPlus1;i++){stack.r=pr;stack.g=pg;stack.b=pb;stack.a=pa;stack=stack.next;}for(i=1;i<radiusPlus1;i++){p=yi+((widthMinus1<i?widthMinus1:i)<<2);r_sum+=(stack.r=pr=pixels[p])*(rbs=radiusPlus1-i);g_sum+=(stack.g=pg=pixels[p+1])*rbs;b_sum+=(stack.b=pb=pixels[p+2])*rbs;a_sum+=(stack.a=pa=pixels[p+3])*rbs;r_in_sum+=pr;g_in_sum+=pg;b_in_sum+=pb;a_in_sum+=pa;stack=stack.next;}stackIn=stackStart;stackOut=stackEnd;for(x=0;x<width;x++){pixels[yi+3]=pa=a_sum*mul_sum>>shg_sum;if(pa!==0){pa=255/pa;pixels[yi]=(r_sum*mul_sum>>shg_sum)*pa;pixels[yi+1]=(g_sum*mul_sum>>shg_sum)*pa;pixels[yi+2]=(b_sum*mul_sum>>shg_sum)*pa;}else {pixels[yi]=pixels[yi+1]=pixels[yi+2]=0;}r_sum-=r_out_sum;g_sum-=g_out_sum;b_sum-=b_out_sum;a_sum-=a_out_sum;r_out_sum-=stackIn.r;g_out_sum-=stackIn.g;b_out_sum-=stackIn.b;a_out_sum-=stackIn.a;p=yw+((p=x+radius+1)<widthMinus1?p:widthMinus1)<<2;r_in_sum+=stackIn.r=pixels[p];g_in_sum+=stackIn.g=pixels[p+1];b_in_sum+=stackIn.b=pixels[p+2];a_in_sum+=stackIn.a=pixels[p+3];r_sum+=r_in_sum;g_sum+=g_in_sum;b_sum+=b_in_sum;a_sum+=a_in_sum;stackIn=stackIn.next;r_out_sum+=pr=stackOut.r;g_out_sum+=pg=stackOut.g;b_out_sum+=pb=stackOut.b;a_out_sum+=pa=stackOut.a;r_in_sum-=pr;g_in_sum-=pg;b_in_sum-=pb;a_in_sum-=pa;stackOut=stackOut.next;yi+=4;}yw+=width;}for(x=0;x<width;x++){g_in_sum=b_in_sum=a_in_sum=r_in_sum=g_sum=b_sum=a_sum=r_sum=0;yi=x<<2;r_out_sum=radiusPlus1*(pr=pixels[yi]);g_out_sum=radiusPlus1*(pg=pixels[yi+1]);b_out_sum=radiusPlus1*(pb=pixels[yi+2]);a_out_sum=radiusPlus1*(pa=pixels[yi+3]);r_sum+=sumFactor*pr;g_sum+=sumFactor*pg;b_sum+=sumFactor*pb;a_sum+=sumFactor*pa;stack=stackStart;for(i=0;i<radiusPlus1;i++){stack.r=pr;stack.g=pg;stack.b=pb;stack.a=pa;stack=stack.next;}yp=width;for(i=1;i<=radius;i++){yi=yp+x<<2;r_sum+=(stack.r=pr=pixels[yi])*(rbs=radiusPlus1-i);g_sum+=(stack.g=pg=pixels[yi+1])*rbs;b_sum+=(stack.b=pb=pixels[yi+2])*rbs;a_sum+=(stack.a=pa=pixels[yi+3])*rbs;r_in_sum+=pr;g_in_sum+=pg;b_in_sum+=pb;a_in_sum+=pa;stack=stack.next;if(i<heightMinus1){yp+=width;}}yi=x;stackIn=stackStart;stackOut=stackEnd;for(y=0;y<height;y++){p=yi<<2;pixels[p+3]=pa=a_sum*mul_sum>>shg_sum;if(pa>0){pa=255/pa;pixels[p]=(r_sum*mul_sum>>shg_sum)*pa;pixels[p+1]=(g_sum*mul_sum>>shg_sum)*pa;pixels[p+2]=(b_sum*mul_sum>>shg_sum)*pa;}else {pixels[p]=pixels[p+1]=pixels[p+2]=0;}r_sum-=r_out_sum;g_sum-=g_out_sum;b_sum-=b_out_sum;a_sum-=a_out_sum;r_out_sum-=stackIn.r;g_out_sum-=stackIn.g;b_out_sum-=stackIn.b;a_out_sum-=stackIn.a;p=x+((p=y+radiusPlus1)<heightMinus1?p:heightMinus1)*width<<2;r_sum+=r_in_sum+=stackIn.r=pixels[p];g_sum+=g_in_sum+=stackIn.g=pixels[p+1];b_sum+=b_in_sum+=stackIn.b=pixels[p+2];a_sum+=a_in_sum+=stackIn.a=pixels[p+3];stackIn=stackIn.next;r_out_sum+=pr=stackOut.r;g_out_sum+=pg=stackOut.g;b_out_sum+=pb=stackOut.b;a_out_sum+=pa=stackOut.a;r_in_sum-=pr;g_in_sum-=pg;b_in_sum-=pb;a_in_sum-=pa;stackOut=stackOut.next;yi+=width;}}}/**
     * Blur Filter
     * @function
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     */Kinetic$1.Filters.Blur=function(imageData){var radius=Math.round(this.blurRadius());if(radius>0){filterGaussBlurRGBA(imageData,radius);}};Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'blurRadius',0,null,Kinetic$1.Factory.afterSetFilter);/**
    * get/set blur radius
    * @name blurRadius
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Integer} radius
    * @returns {Integer}
    */})();(function(){function pixelAt(idata,x,y){var idx=(y*idata.width+x)*4;var d=[];d.push(idata.data[idx++],idata.data[idx++],idata.data[idx++],idata.data[idx++]);return d;}function rgbDistance(p1,p2){return Math.sqrt(Math.pow(p1[0]-p2[0],2)+Math.pow(p1[1]-p2[1],2)+Math.pow(p1[2]-p2[2],2));}function rgbMean(pTab){var m=[0,0,0];for(var i=0;i<pTab.length;i++){m[0]+=pTab[i][0];m[1]+=pTab[i][1];m[2]+=pTab[i][2];}m[0]/=pTab.length;m[1]/=pTab.length;m[2]/=pTab.length;return m;}function backgroundMask(idata,threshold){var rgbv_no=pixelAt(idata,0,0);var rgbv_ne=pixelAt(idata,idata.width-1,0);var rgbv_so=pixelAt(idata,0,idata.height-1);var rgbv_se=pixelAt(idata,idata.width-1,idata.height-1);var thres=threshold||10;if(rgbDistance(rgbv_no,rgbv_ne)<thres&&rgbDistance(rgbv_ne,rgbv_se)<thres&&rgbDistance(rgbv_se,rgbv_so)<thres&&rgbDistance(rgbv_so,rgbv_no)<thres){// Mean color
var mean=rgbMean([rgbv_ne,rgbv_no,rgbv_se,rgbv_so]);// Mask based on color distance
var mask=[];for(var i=0;i<idata.width*idata.height;i++){var d=rgbDistance(mean,[idata.data[i*4],idata.data[i*4+1],idata.data[i*4+2]]);mask[i]=d<thres?0:255;}return mask;}}function applyMask(idata,mask){for(var i=0;i<idata.width*idata.height;i++){idata.data[4*i+3]=mask[i];}}function erodeMask(mask,sw,sh){var weights=[1,1,1,1,0,1,1,1,1];var side=Math.round(Math.sqrt(weights.length));var halfSide=Math.floor(side/2);var maskResult=[];for(var y=0;y<sh;y++){for(var x=0;x<sw;x++){var so=y*sw+x;var a=0;for(var cy=0;cy<side;cy++){for(var cx=0;cx<side;cx++){var scy=y+cy-halfSide;var scx=x+cx-halfSide;if(scy>=0&&scy<sh&&scx>=0&&scx<sw){var srcOff=scy*sw+scx;var wt=weights[cy*side+cx];a+=mask[srcOff]*wt;}}}maskResult[so]=a===255*8?255:0;}}return maskResult;}function dilateMask(mask,sw,sh){var weights=[1,1,1,1,1,1,1,1,1];var side=Math.round(Math.sqrt(weights.length));var halfSide=Math.floor(side/2);var maskResult=[];for(var y=0;y<sh;y++){for(var x=0;x<sw;x++){var so=y*sw+x;var a=0;for(var cy=0;cy<side;cy++){for(var cx=0;cx<side;cx++){var scy=y+cy-halfSide;var scx=x+cx-halfSide;if(scy>=0&&scy<sh&&scx>=0&&scx<sw){var srcOff=scy*sw+scx;var wt=weights[cy*side+cx];a+=mask[srcOff]*wt;}}}maskResult[so]=a>=255*4?255:0;}}return maskResult;}function smoothEdgeMask(mask,sw,sh){var weights=[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9];var side=Math.round(Math.sqrt(weights.length));var halfSide=Math.floor(side/2);var maskResult=[];for(var y=0;y<sh;y++){for(var x=0;x<sw;x++){var so=y*sw+x;var a=0;for(var cy=0;cy<side;cy++){for(var cx=0;cx<side;cx++){var scy=y+cy-halfSide;var scx=x+cx-halfSide;if(scy>=0&&scy<sh&&scx>=0&&scx<sw){var srcOff=scy*sw+scx;var wt=weights[cy*side+cx];a+=mask[srcOff]*wt;}}}maskResult[so]=a;}}return maskResult;}/**
	 * Mask Filter
	 * @function
	 * @memberof Kinetic.Filters
	 * @param {Object} imageData
	 */Kinetic$1.Filters.Mask=function(imageData){// Detect pixels close to the background color
var threshold=this.threshold(),mask=backgroundMask(imageData,threshold);if(mask){// Erode
mask=erodeMask(mask,imageData.width,imageData.height);// Dilate
mask=dilateMask(mask,imageData.width,imageData.height);// Gradient
mask=smoothEdgeMask(mask,imageData.width,imageData.height);// Apply mask
applyMask(imageData,mask);// todo : Update hit region function according to mask
}return imageData;};Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'threshold',0,null,Kinetic$1.Factory.afterSetFilter);})();(function(){/**
     * RGB Filter
     * @function
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     * @author ippo615
     */Kinetic$1.Filters.RGB=function(imageData){var data=imageData.data,nPixels=data.length,red=this.red(),green=this.green(),blue=this.blue(),i,brightness;for(i=0;i<nPixels;i+=4){brightness=(0.34*data[i]+0.5*data[i+1]+0.16*data[i+2])/255;data[i]=brightness*red;// r
data[i+1]=brightness*green;// g
data[i+2]=brightness*blue;// b
data[i+3]=data[i+3];// alpha
}};Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'red',0,function(val){this._filterUpToDate=false;if(val>255){return 255;}else if(val<0){return 0;}else {return Math.round(val);}});/**
    * get/set filter red value
    * @name red
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Integer} red value between 0 and 255
    * @returns {Integer}
    */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'green',0,function(val){this._filterUpToDate=false;if(val>255){return 255;}else if(val<0){return 0;}else {return Math.round(val);}});/**
    * get/set filter green value
    * @name green
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Integer} green value between 0 and 255
    * @returns {Integer}
    */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'blue',0,Kinetic$1.Validators.RGBComponent,Kinetic$1.Factory.afterSetFilter);/**
    * get/set filter blue value
    * @name blue
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Integer} blue value between 0 and 255
    * @returns {Integer}
    */})();(function(){/**
    * HSV Filter. Adjusts the hue, saturation and value
    * @function
    * @memberof Kinetic.Filters
    * @param {Object} imageData
    * @author ippo615
    */Kinetic$1.Filters.HSV=function(imageData){var data=imageData.data,nPixels=data.length,v=Math.pow(2,this.value()),s=Math.pow(2,this.saturation()),h=Math.abs(this.hue()+360)%360,i;// Basis for the technique used:
// http://beesbuzz.biz/code/hsv_color_transforms.php
// V is the value multiplier (1 for none, 2 for double, 0.5 for half)
// S is the saturation multiplier (1 for none, 2 for double, 0.5 for half)
// H is the hue shift in degrees (0 to 360)
// vsu = V*S*cos(H*PI/180);
// vsw = V*S*sin(H*PI/180);
//[ .299V+.701vsu+.168vsw    .587V-.587vsu+.330vsw    .114V-.114vsu-.497vsw ] [R]
//[ .299V-.299vsu-.328vsw    .587V+.413vsu+.035vsw    .114V-.114vsu+.292vsw ]*[G]
//[ .299V-.300vsu+1.25vsw    .587V-.588vsu-1.05vsw    .114V+.886vsu-.203vsw ] [B]
// Precompute the values in the matrix:
var vsu=v*s*Math.cos(h*Math.PI/180),vsw=v*s*Math.sin(h*Math.PI/180);// (result spot)(source spot)
var rr=0.299*v+0.701*vsu+0.167*vsw,rg=0.587*v-0.587*vsu+0.330*vsw,rb=0.114*v-0.114*vsu-0.497*vsw;var gr=0.299*v-0.299*vsu-0.328*vsw,gg=0.587*v+0.413*vsu+0.035*vsw,gb=0.114*v-0.114*vsu+0.293*vsw;var br=0.299*v-0.300*vsu+1.250*vsw,bg=0.587*v-0.586*vsu-1.050*vsw,bb=0.114*v+0.886*vsu-0.200*vsw;var r,g,b,a;for(i=0;i<nPixels;i+=4){r=data[i+0];g=data[i+1];b=data[i+2];a=data[i+3];data[i+0]=rr*r+rg*g+rb*b;data[i+1]=gr*r+gg*g+gb*b;data[i+2]=br*r+bg*g+bb*b;data[i+3]=a;// alpha
}};Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'hue',0,null,Kinetic$1.Factory.afterSetFilter);/**
    * get/set hsv hue in degrees
    * @name hue
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} hue value between 0 and 359
    * @returns {Number}
    */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'saturation',0,null,Kinetic$1.Factory.afterSetFilter);/**
    * get/set hsv saturation
    * @name saturation
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} saturation 0 is no change, -1.0 halves the saturation, 1.0 doubles, etc..
    * @returns {Number}
    */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'value',0,null,Kinetic$1.Factory.afterSetFilter);/**
    * get/set hsv value
    * @name value
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} value 0 is no change, -1.0 halves the value, 1.0 doubles, etc..
    * @returns {Number}
    */})();(function(){Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'hue',0,null,Kinetic$1.Factory.afterSetFilter);/**
    * get/set hsv hue in degrees
    * @name hue
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} hue value between 0 and 359
    * @returns {Number}
    */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'saturation',0,null,Kinetic$1.Factory.afterSetFilter);/**
    * get/set hsv saturation
    * @name saturation
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} saturation 0 is no change, -1.0 halves the saturation, 1.0 doubles, etc..
    * @returns {Number}
    */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'luminance',0,null,Kinetic$1.Factory.afterSetFilter);/**
    * get/set hsl luminance
    * @name value
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} value 0 is no change, -1.0 halves the value, 1.0 doubles, etc..
    * @returns {Number}
    */ /**
    * HSL Filter. Adjusts the hue, saturation and luminance (or lightness)
    * @function
    * @memberof Kinetic.Filters
    * @param {Object} imageData
    * @author ippo615
    */Kinetic$1.Filters.HSL=function(imageData){var data=imageData.data,nPixels=data.length,v=1,s=Math.pow(2,this.saturation()),h=Math.abs(this.hue()+360)%360,l=this.luminance()*127,i;// Basis for the technique used:
// http://beesbuzz.biz/code/hsv_color_transforms.php
// V is the value multiplier (1 for none, 2 for double, 0.5 for half)
// S is the saturation multiplier (1 for none, 2 for double, 0.5 for half)
// H is the hue shift in degrees (0 to 360)
// vsu = V*S*cos(H*PI/180);
// vsw = V*S*sin(H*PI/180);
//[ .299V+.701vsu+.168vsw    .587V-.587vsu+.330vsw    .114V-.114vsu-.497vsw ] [R]
//[ .299V-.299vsu-.328vsw    .587V+.413vsu+.035vsw    .114V-.114vsu+.292vsw ]*[G]
//[ .299V-.300vsu+1.25vsw    .587V-.588vsu-1.05vsw    .114V+.886vsu-.203vsw ] [B]
// Precompute the values in the matrix:
var vsu=v*s*Math.cos(h*Math.PI/180),vsw=v*s*Math.sin(h*Math.PI/180);// (result spot)(source spot)
var rr=0.299*v+0.701*vsu+0.167*vsw,rg=0.587*v-0.587*vsu+0.330*vsw,rb=0.114*v-0.114*vsu-0.497*vsw;var gr=0.299*v-0.299*vsu-0.328*vsw,gg=0.587*v+0.413*vsu+0.035*vsw,gb=0.114*v-0.114*vsu+0.293*vsw;var br=0.299*v-0.300*vsu+1.250*vsw,bg=0.587*v-0.586*vsu-1.050*vsw,bb=0.114*v+0.886*vsu-0.200*vsw;var r,g,b,a;for(i=0;i<nPixels;i+=4){r=data[i+0];g=data[i+1];b=data[i+2];a=data[i+3];data[i+0]=rr*r+rg*g+rb*b+l;data[i+1]=gr*r+gg*g+gb*b+l;data[i+2]=br*r+bg*g+bb*b+l;data[i+3]=a;// alpha
}};})();(function(){/**
     * Emboss Filter
     * @function
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     * Pixastic Lib - Emboss filter - v0.1.0
     * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
     * License: [http://www.pixastic.com/lib/license.txt]
     */Kinetic$1.Filters.Emboss=function(imageData){// pixastic strength is between 0 and 10.  I want it between 0 and 1
// pixastic greyLevel is between 0 and 255.  I want it between 0 and 1.  Also,
// a max value of greyLevel yields a white emboss, and the min value yields a black
// emboss.  Therefore, I changed greyLevel to whiteLevel
var strength=this.embossStrength()*10,greyLevel=this.embossWhiteLevel()*255,direction=this.embossDirection(),blend=this.embossBlend(),dirY=0,dirX=0,data=imageData.data,w=imageData.width,h=imageData.height,w4=w*4,y=h;switch(direction){case'top-left':dirY=-1;dirX=-1;break;case'top':dirY=-1;dirX=0;break;case'top-right':dirY=-1;dirX=1;break;case'right':dirY=0;dirX=1;break;case'bottom-right':dirY=1;dirX=1;break;case'bottom':dirY=1;dirX=0;break;case'bottom-left':dirY=1;dirX=-1;break;case'left':dirY=0;dirX=-1;break;}do{var offsetY=(y-1)*w4;var otherY=dirY;if(y+otherY<1){otherY=0;}if(y+otherY>h){otherY=0;}var offsetYOther=(y-1+otherY)*w*4;var x=w;do{var offset=offsetY+(x-1)*4;var otherX=dirX;if(x+otherX<1){otherX=0;}if(x+otherX>w){otherX=0;}var offsetOther=offsetYOther+(x-1+otherX)*4;var dR=data[offset]-data[offsetOther];var dG=data[offset+1]-data[offsetOther+1];var dB=data[offset+2]-data[offsetOther+2];var dif=dR;var absDif=dif>0?dif:-dif;var absG=dG>0?dG:-dG;var absB=dB>0?dB:-dB;if(absG>absDif){dif=dG;}if(absB>absDif){dif=dB;}dif*=strength;if(blend){var r=data[offset]+dif;var g=data[offset+1]+dif;var b=data[offset+2]+dif;data[offset]=r>255?255:r<0?0:r;data[offset+1]=g>255?255:g<0?0:g;data[offset+2]=b>255?255:b<0?0:b;}else {var grey=greyLevel-dif;if(grey<0){grey=0;}else if(grey>255){grey=255;}data[offset]=data[offset+1]=data[offset+2]=grey;}}while(--x);}while(--y);};Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'embossStrength',0.5,null,Kinetic$1.Factory.afterSetFilter);/**
    * get/set emboss strength
    * @name embossStrength
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} level between 0 and 1.  Default is 0.5
    * @returns {Number}
    */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'embossWhiteLevel',0.5,null,Kinetic$1.Factory.afterSetFilter);/**
    * get/set emboss white level
    * @name embossWhiteLevel
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} embossWhiteLevel between 0 and 1.  Default is 0.5
    * @returns {Number}
    */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'embossDirection','top-left',null,Kinetic$1.Factory.afterSetFilter);/**
    * get/set emboss direction
    * @name embossDirection
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {String} embossDirection can be top-left, top, top-right, right, bottom-right, bottom, bottom-left or left
    *   The default is top-left
    * @returns {String}
    */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'embossBlend',false,null,Kinetic$1.Factory.afterSetFilter);/**
    * get/set emboss blend
    * @name embossBlend
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Boolean} embossBlend
    * @returns {Boolean}
    */})();(function(){function remap(fromValue,fromMin,fromMax,toMin,toMax){// Compute the range of the data
var fromRange=fromMax-fromMin,toRange=toMax-toMin,toValue;// If either range is 0, then the value can only be mapped to 1 value
if(fromRange===0){return toMin+toRange/2;}if(toRange===0){return toMin;}// (1) untranslate, (2) unscale, (3) rescale, (4) retranslate
toValue=(fromValue-fromMin)/fromRange;toValue=toRange*toValue+toMin;return toValue;}/**
    * Enhance Filter. Adjusts the colors so that they span the widest
    *  possible range (ie 0-255). Performs w*h pixel reads and w*h pixel
    *  writes.
    * @function
    * @memberof Kinetic.Filters
    * @param {Object} imageData
    * @author ippo615
    */Kinetic$1.Filters.Enhance=function(imageData){var data=imageData.data,nSubPixels=data.length,rMin=data[0],rMax=rMin,r,gMin=data[1],gMax=gMin,g,bMin=data[2],bMax=bMin,b;data[3];var i;// If we are not enhancing anything - don't do any computation
var enhanceAmount=this.enhance();if(enhanceAmount===0){return;}// 1st Pass - find the min and max for each channel:
for(i=0;i<nSubPixels;i+=4){r=data[i+0];if(r<rMin){rMin=r;}else if(r>rMax){rMax=r;}g=data[i+1];if(g<gMin){gMin=g;}else if(g>gMax){gMax=g;}b=data[i+2];if(b<bMin){bMin=b;}else if(b>bMax){bMax=b;}//a = data[i + 3];
//if (a < aMin) { aMin = a; } else
//if (a > aMax) { aMax = a; }
}// If there is only 1 level - don't remap
if(rMax===rMin){rMax=255;rMin=0;}if(gMax===gMin){gMax=255;gMin=0;}if(bMax===bMin){bMax=255;bMin=0;}var rMid,rGoalMax,rGoalMin,gMid,gGoalMax,gGoalMin,bMid,bGoalMax,bGoalMin;// If the enhancement is positive - stretch the histogram 
if(enhanceAmount>0){rGoalMax=rMax+enhanceAmount*(255-rMax);rGoalMin=rMin-enhanceAmount*(rMin-0);gGoalMax=gMax+enhanceAmount*(255-gMax);gGoalMin=gMin-enhanceAmount*(gMin-0);bGoalMax=bMax+enhanceAmount*(255-bMax);bGoalMin=bMin-enhanceAmount*(bMin-0);}else {rMid=(rMax+rMin)*0.5;rGoalMax=rMax+enhanceAmount*(rMax-rMid);rGoalMin=rMin+enhanceAmount*(rMin-rMid);gMid=(gMax+gMin)*0.5;gGoalMax=gMax+enhanceAmount*(gMax-gMid);gGoalMin=gMin+enhanceAmount*(gMin-gMid);bMid=(bMax+bMin)*0.5;bGoalMax=bMax+enhanceAmount*(bMax-bMid);bGoalMin=bMin+enhanceAmount*(bMin-bMid);}// Pass 2 - remap everything, except the alpha
for(i=0;i<nSubPixels;i+=4){data[i+0]=remap(data[i+0],rMin,rMax,rGoalMin,rGoalMax);data[i+1]=remap(data[i+1],gMin,gMax,gGoalMin,gGoalMax);data[i+2]=remap(data[i+2],bMin,bMax,bGoalMin,bGoalMax);//data[i + 3] = remap(data[i + 3], aMin, aMax, aGoalMin, aGoalMax);
}};Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'enhance',0,null,Kinetic$1.Factory.afterSetFilter);/**
    * get/set enhance
    * @name enhance
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Float} amount
    * @returns {Float}
    */})();(function(){/**
     * Posterize Filter. Adjusts the channels so that there are no more
     *  than n different values for that channel. This is also applied
     *  to the alpha channel.
     * @function
     * @author ippo615
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     */Kinetic$1.Filters.Posterize=function(imageData){// level must be between 1 and 255
var levels=Math.round(this.levels()*254)+1,data=imageData.data,len=data.length,scale=255/levels,i;for(i=0;i<len;i+=1){data[i]=Math.floor(data[i]/scale)*scale;}};Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'levels',0.5,null,Kinetic$1.Factory.afterSetFilter);/**
    * get/set levels.  Must be a number between 0 and 1
    * @name levels
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} level between 0 and 1
    * @returns {Number}
    */})();(function(){/**
     * Noise Filter. Randomly adds or substracts to the color channels
     * @function
     * @memberof Kinetic.Filters
     * @param {Object} imagedata
     * @author ippo615
     */Kinetic$1.Filters.Noise=function(imageData){var amount=this.noise()*255,data=imageData.data,nPixels=data.length,half=amount/2,i;for(i=0;i<nPixels;i+=4){data[i+0]+=half-2*half*Math.random();data[i+1]+=half-2*half*Math.random();data[i+2]+=half-2*half*Math.random();}};Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'noise',0.2,null,Kinetic$1.Factory.afterSetFilter);/**
    * get/set noise amount.  Must be a value between 0 and 1
    * @name noise
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} noise
    * @returns {Number}
    */})();(function(){/**
     * Pixelate Filter. Averages groups of pixels and redraws
     *  them as larger pixels
     * @function
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     * @author ippo615
     */Kinetic$1.Filters.Pixelate=function(imageData){var pixelSize=Math.ceil(this.pixelSize()),width=imageData.width,height=imageData.height,x,y,i,//pixelsPerBin = pixelSize * pixelSize,
red,green,blue,alpha,nBinsX=Math.ceil(width/pixelSize),nBinsY=Math.ceil(height/pixelSize),xBinStart,xBinEnd,yBinStart,yBinEnd,xBin,yBin,pixelsInBin;imageData=imageData.data;for(xBin=0;xBin<nBinsX;xBin+=1){for(yBin=0;yBin<nBinsY;yBin+=1){// Initialize the color accumlators to 0
red=0;green=0;blue=0;alpha=0;// Determine which pixels are included in this bin
xBinStart=xBin*pixelSize;xBinEnd=xBinStart+pixelSize;yBinStart=yBin*pixelSize;yBinEnd=yBinStart+pixelSize;// Add all of the pixels to this bin!
pixelsInBin=0;for(x=xBinStart;x<xBinEnd;x+=1){if(x>=width){continue;}for(y=yBinStart;y<yBinEnd;y+=1){if(y>=height){continue;}i=(width*y+x)*4;red+=imageData[i+0];green+=imageData[i+1];blue+=imageData[i+2];alpha+=imageData[i+3];pixelsInBin+=1;}}// Make sure the channels are between 0-255
red=red/pixelsInBin;green=green/pixelsInBin;blue=blue/pixelsInBin;// Draw this bin
for(x=xBinStart;x<xBinEnd;x+=1){if(x>=width){continue;}for(y=yBinStart;y<yBinEnd;y+=1){if(y>=height){continue;}i=(width*y+x)*4;imageData[i+0]=red;imageData[i+1]=green;imageData[i+2]=blue;imageData[i+3]=alpha;}}}}};Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'pixelSize',8,null,Kinetic$1.Factory.afterSetFilter);/**
    * get/set pixel size
    * @name pixelSize
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Integer} pixelSize
    * @returns {Integer}
    */})();(function(){/**
     * Threshold Filter. Pushes any value above the mid point to 
     *  the max and any value below the mid point to the min.
     *  This affects the alpha channel.
     * @function
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     * @author ippo615
     */Kinetic$1.Filters.Threshold=function(imageData){var level=this.threshold()*255,data=imageData.data,len=data.length,i;for(i=0;i<len;i+=1){data[i]=data[i]<level?0:255;}};Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'threshold',0.5,null,Kinetic$1.Factory.afterSetFilter);/**
    * get/set threshold.  Must be a value between 0 and 1
    * @name threshold
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} threshold
    * @returns {Number}
    */})();(function(){/**
     * Sepia Filter
     * Based on: Pixastic Lib - Sepia filter - v0.1.0
     * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
     * @function
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     * @author Jacob Seidelin <jseidelin@nihilogic.dk>
     * @license MPL v1.1 [http://www.pixastic.com/lib/license.txt]
     */Kinetic$1.Filters.Sepia=function(imageData){var data=imageData.data,w=imageData.width,y=imageData.height,w4=w*4,offsetY,x,offset,or,og,ob,r,g,b;do{offsetY=(y-1)*w4;x=w;do{offset=offsetY+(x-1)*4;or=data[offset];og=data[offset+1];ob=data[offset+2];r=or*0.393+og*0.769+ob*0.189;g=or*0.349+og*0.686+ob*0.168;b=or*0.272+og*0.534+ob*0.131;data[offset]=r>255?255:r;data[offset+1]=g>255?255:g;data[offset+2]=b>255?255:b;data[offset+3]=data[offset+3];}while(--x);}while(--y);};})();(function(){/**
     * Solarize Filter
     * @function
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     * Pixastic Lib - Solarize filter - v0.1.0
     * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
     * License: [http://www.pixastic.com/lib/license.txt]
     */Kinetic$1.Filters.Solarize=function(imageData){var data=imageData.data,w=imageData.width,h=imageData.height,w4=w*4,y=h;do{var offsetY=(y-1)*w4;var x=w;do{var offset=offsetY+(x-1)*4;var r=data[offset];var g=data[offset+1];var b=data[offset+2];if(r>127){r=255-r;}if(g>127){g=255-g;}if(b>127){b=255-b;}data[offset]=r;data[offset+1]=g;data[offset+2]=b;}while(--x);}while(--y);};})();/*jshint newcap:false */(function(){/*
   * ToPolar Filter. Converts image data to polar coordinates. Performs 
   *  w*h*4 pixel reads and w*h pixel writes. The r axis is placed along
   *  what would be the y axis and the theta axis along the x axis.
   * @function
   * @author ippo615
   * @memberof Kinetic.Filters
   * @param {ImageData} src, the source image data (what will be transformed)
   * @param {ImageData} dst, the destination image data (where it will be saved)
   * @param {Object} opt
   * @param {Number} [opt.polarCenterX] horizontal location for the center of the circle,
   *  default is in the middle
   * @param {Number} [opt.polarCenterY] vertical location for the center of the circle,
   *  default is in the middle
   */var ToPolar=function ToPolar(src,dst,opt){var srcPixels=src.data,dstPixels=dst.data,xSize=src.width,ySize=src.height,xMid=opt.polarCenterX||xSize/2,yMid=opt.polarCenterY||ySize/2,i,x,y,r=0,g=0,b=0,a=0;// Find the largest radius
var rad,rMax=Math.sqrt(xMid*xMid+yMid*yMid);x=xSize-xMid;y=ySize-yMid;rad=Math.sqrt(x*x+y*y);rMax=rad>rMax?rad:rMax;// We'll be uisng y as the radius, and x as the angle (theta=t)
var rSize=ySize,tSize=xSize,radius,theta;// We want to cover all angles (0-360) and we need to convert to
// radians (*PI/180)
var conversion=360/tSize*Math.PI/180,sin,cos;// var x1, x2, x1i, x2i, y1, y2, y1i, y2i, scale;
for(theta=0;theta<tSize;theta+=1){sin=Math.sin(theta*conversion);cos=Math.cos(theta*conversion);for(radius=0;radius<rSize;radius+=1){x=Math.floor(xMid+rMax*radius/rSize*cos);y=Math.floor(yMid+rMax*radius/rSize*sin);i=(y*xSize+x)*4;r=srcPixels[i+0];g=srcPixels[i+1];b=srcPixels[i+2];a=srcPixels[i+3];// Store it
//i = (theta * xSize + radius) * 4;
i=(theta+radius*xSize)*4;dstPixels[i+0]=r;dstPixels[i+1]=g;dstPixels[i+2]=b;dstPixels[i+3]=a;}}};/*
     * FromPolar Filter. Converts image data from polar coordinates back to rectangular.
     *  Performs w*h*4 pixel reads and w*h pixel writes.
     * @function
     * @author ippo615
     * @memberof Kinetic.Filters
     * @param {ImageData} src, the source image data (what will be transformed)
     * @param {ImageData} dst, the destination image data (where it will be saved)
     * @param {Object} opt
     * @param {Number} [opt.polarCenterX] horizontal location for the center of the circle,
     *  default is in the middle
     * @param {Number} [opt.polarCenterY] vertical location for the center of the circle,
     *  default is in the middle
     * @param {Number} [opt.polarRotation] amount to rotate the image counterclockwis,
     *  0 is no rotation, 360 degrees is a full rotation
     */var FromPolar=function FromPolar(src,dst,opt){var srcPixels=src.data,dstPixels=dst.data,xSize=src.width,ySize=src.height,xMid=opt.polarCenterX||xSize/2,yMid=opt.polarCenterY||ySize/2,i,x,y,dx,dy,r=0,g=0,b=0,a=0;// Find the largest radius
var rad,rMax=Math.sqrt(xMid*xMid+yMid*yMid);x=xSize-xMid;y=ySize-yMid;rad=Math.sqrt(x*x+y*y);rMax=rad>rMax?rad:rMax;// We'll be uisng x as the radius, and y as the angle (theta=t)
var rSize=ySize,tSize=xSize,radius,theta,phaseShift=opt.polarRotation||0;// We need to convert to degrees and we need to make sure
// it's between (0-360)
// var conversion = tSize/360*180/Math.PI;
//var conversion = tSize/360*180/Math.PI;
var x1,y1;for(x=0;x<xSize;x+=1){for(y=0;y<ySize;y+=1){dx=x-xMid;dy=y-yMid;radius=Math.sqrt(dx*dx+dy*dy)*rSize/rMax;theta=(Math.atan2(dy,dx)*180/Math.PI+360+phaseShift)%360;theta=theta*tSize/360;x1=Math.floor(theta);y1=Math.floor(radius);i=(y1*xSize+x1)*4;r=srcPixels[i+0];g=srcPixels[i+1];b=srcPixels[i+2];a=srcPixels[i+3];// Store it
i=(y*xSize+x)*4;dstPixels[i+0]=r;dstPixels[i+1]=g;dstPixels[i+2]=b;dstPixels[i+3]=a;}}};//Kinetic.Filters.ToPolar = Kinetic.Util._FilterWrapDoubleBuffer(ToPolar);
//Kinetic.Filters.FromPolar = Kinetic.Util._FilterWrapDoubleBuffer(FromPolar);
// create a temporary canvas for working - shared between multiple calls
var tempCanvas=Kinetic$1.Util.createCanvasElement();/*
     * Kaleidoscope Filter. 
     * @function
     * @author ippo615
     * @memberof Kinetic.Filters
     */Kinetic$1.Filters.Kaleidoscope=function(imageData){var xSize=imageData.width,ySize=imageData.height;var x,y,xoff,i,r,g,b,a,srcPos,dstPos;var power=Math.round(this.kaleidoscopePower());var angle=Math.round(this.kaleidoscopeAngle());var offset=Math.floor(xSize*(angle%360)/360);if(power<1){return;}// Work with our shared buffer canvas
tempCanvas.width=xSize;tempCanvas.height=ySize;var scratchData=tempCanvas.getContext('2d').getImageData(0,0,xSize,ySize);// Convert thhe original to polar coordinates
ToPolar(imageData,scratchData,{polarCenterX:xSize/2,polarCenterY:ySize/2});// Determine how big each section will be, if it's too small 
// make it bigger
var minSectionSize=xSize/Math.pow(2,power);while(minSectionSize<=8){minSectionSize=minSectionSize*2;power-=1;}minSectionSize=Math.ceil(minSectionSize);var sectionSize=minSectionSize;// Copy the offset region to 0
// Depending on the size of filter and location of the offset we may need
// to copy the section backwards to prevent it from rewriting itself
var xStart=0,xEnd=sectionSize,xDelta=1;if(offset+minSectionSize>xSize){xStart=sectionSize;xEnd=0;xDelta=-1;}for(y=0;y<ySize;y+=1){for(x=xStart;x!==xEnd;x+=xDelta){xoff=Math.round(x+offset)%xSize;srcPos=(xSize*y+xoff)*4;r=scratchData.data[srcPos+0];g=scratchData.data[srcPos+1];b=scratchData.data[srcPos+2];a=scratchData.data[srcPos+3];dstPos=(xSize*y+x)*4;scratchData.data[dstPos+0]=r;scratchData.data[dstPos+1]=g;scratchData.data[dstPos+2]=b;scratchData.data[dstPos+3]=a;}}// Perform the actual effect
for(y=0;y<ySize;y+=1){sectionSize=Math.floor(minSectionSize);for(i=0;i<power;i+=1){for(x=0;x<sectionSize+1;x+=1){srcPos=(xSize*y+x)*4;r=scratchData.data[srcPos+0];g=scratchData.data[srcPos+1];b=scratchData.data[srcPos+2];a=scratchData.data[srcPos+3];dstPos=(xSize*y+sectionSize*2-x-1)*4;scratchData.data[dstPos+0]=r;scratchData.data[dstPos+1]=g;scratchData.data[dstPos+2]=b;scratchData.data[dstPos+3]=a;}sectionSize*=2;}}// Convert back from polar coordinates
FromPolar(scratchData,imageData,{polarRotation:0});};/**
    * get/set kaleidoscope power
    * @name kaleidoscopePower
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Integer} power of kaleidoscope
    * @returns {Integer}
    */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'kaleidoscopePower',2,null,Kinetic$1.Factory.afterSetFilter);/**
    * get/set kaleidoscope angle
    * @name kaleidoscopeAngle
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Integer} degrees
    * @returns {Integer}
    */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'kaleidoscopeAngle',0,null,Kinetic$1.Factory.afterSetFilter);})();(function(){var BATCH_DRAW_STOP_TIME_DIFF=500;var now=function(){if(Kinetic$1.root.performance&&Kinetic$1.root.performance.now){return function(){return Kinetic$1.root.performance.now();};}else {return function(){return new Date().getTime();};}}();var RAF=function(){return Kinetic$1.root.requestAnimationFrame||Kinetic$1.root.webkitRequestAnimationFrame||Kinetic$1.root.mozRequestAnimationFrame||Kinetic$1.root.oRequestAnimationFrame||Kinetic$1.root.msRequestAnimationFrame||FRAF;}();function FRAF(callback){Kinetic$1.root.setTimeout(callback,1000/60);}function requestAnimFrame(){return RAF.apply(Kinetic$1.root,arguments);}/**
     * Animation constructor.  A stage is used to contain multiple layers and handle
     * @constructor
     * @memberof Kinetic
     * @param {Function} func function executed on each animation frame.  The function is passed a frame object, which contains
     *  timeDiff, lastTime, time, and frameRate properties.  The timeDiff property is the number of milliseconds that have passed
     *  since the last animation frame.  The lastTime property is time in milliseconds that elapsed from the moment the animation started
     *  to the last animation frame.  The time property is the time in milliseconds that ellapsed from the moment the animation started
     *  to the current animation frame.  The frameRate property is the current frame rate in frames / second
     * @param {Kinetic.Layer|Array} [layers] layer(s) to be redrawn on each animation frame. Can be a layer, an array of layers, or null.
     *  Not specifying a node will result in no redraw.
     * @example
     * // move a node to the right at 50 pixels / second<br>
     * var velocity = 50;<br><br>
     *
     * var anim = new Kinetic.Animation(function(frame) {<br>
     *   var dist = velocity * (frame.timeDiff / 1000);<br>
     *   node.move(dist, 0);<br>
     * }, layer);<br><br>
     *
     * anim.start();
     */Kinetic$1.Animation=function(func,layers){var Anim=Kinetic$1.Animation;this.func=func;this.setLayers(layers);this.id=Anim.animIdCounter++;this.frame={time:0,timeDiff:0,lastTime:now()};};/*
     * Animation methods
     */Kinetic$1.Animation.prototype={/**
         * set layers to be redrawn on each animation frame
         * @method
         * @memberof Kinetic.Animation.prototype
         * @param {Kinetic.Layer|Array} [layers] layer(s) to be redrawn.&nbsp; Can be a layer, an array of layers, or null.  Not specifying a node will result in no redraw.
         */setLayers:function setLayers(layers){var lays=[];// if passing in no layers
if(!layers){lays=[];}// if passing in an array of Layers
// NOTE: layers could be an array or Kinetic.Collection.  for simplicity, I'm just inspecting
// the length property to check for both cases
else if(layers.length>0){lays=layers;}// if passing in a Layer
else {lays=[layers];}this.layers=lays;},/**
         * get layers
         * @method
         * @memberof Kinetic.Animation.prototype
         */getLayers:function getLayers(){return this.layers;},/**
         * add layer.  Returns true if the layer was added, and false if it was not
         * @method
         * @memberof Kinetic.Animation.prototype
         * @param {Kinetic.Layer} layer
         */addLayer:function addLayer(layer){var layers=this.layers,len,n;if(layers){len=layers.length;// don't add the layer if it already exists
for(n=0;n<len;n++){if(layers[n]._id===layer._id){return false;}}}else {this.layers=[];}this.layers.push(layer);return true;},/**
         * determine if animation is running or not.  returns true or false
         * @method
         * @memberof Kinetic.Animation.prototype
         */isRunning:function isRunning(){var a=Kinetic$1.Animation,animations=a.animations,len=animations.length,n;for(n=0;n<len;n++){if(animations[n].id===this.id){return true;}}return false;},/**
         * start animation
         * @method
         * @memberof Kinetic.Animation.prototype
         */start:function start(){var Anim=Kinetic$1.Animation;this.stop();this.frame.timeDiff=0;this.frame.lastTime=now();Anim._addAnimation(this);},/**
         * stop animation
         * @method
         * @memberof Kinetic.Animation.prototype
         */stop:function stop(){Kinetic$1.Animation._removeAnimation(this);},_updateFrameObject:function _updateFrameObject(time){this.frame.timeDiff=time-this.frame.lastTime;this.frame.lastTime=time;this.frame.time+=this.frame.timeDiff;this.frame.frameRate=1000/this.frame.timeDiff;}};Kinetic$1.Animation.animations=[];Kinetic$1.Animation.animIdCounter=0;Kinetic$1.Animation.animRunning=false;Kinetic$1.Animation._addAnimation=function(anim){this.animations.push(anim);this._handleAnimation();};Kinetic$1.Animation._removeAnimation=function(anim){var id=anim.id,animations=this.animations,len=animations.length,n;for(n=0;n<len;n++){if(animations[n].id===id){this.animations.splice(n,1);break;}}};Kinetic$1.Animation._runFrames=function(){var layerHash={},animations=this.animations,anim,layers,func,n,i,layersLen,layer,key;/*
         * loop through all animations and execute animation
         *  function.  if the animation object has specified node,
         *  we can add the node to the nodes hash to eliminate
         *  drawing the same node multiple times.  The node property
         *  can be the stage itself or a layer
         */ /*
         * WARNING: don't cache animations.length because it could change while
         * the for loop is running, causing a JS error
         */for(n=0;n<animations.length;n++){anim=animations[n];layers=anim.layers;func=anim.func;anim._updateFrameObject(now());layersLen=layers.length;for(i=0;i<layersLen;i++){layer=layers[i];if(layer._id!==undefined){layerHash[layer._id]=layer;}}// if animation object has a function, execute it
if(func){func.call(anim,anim.frame);}}for(key in layerHash){layerHash[key].draw();}};Kinetic$1.Animation._animationLoop=function(){var Anim=Kinetic$1.Animation;if(Anim.animations.length){requestAnimFrame(Anim._animationLoop);Anim._runFrames();}else {Anim.animRunning=false;}};Kinetic$1.Animation._handleAnimation=function(){var that=this;if(!this.animRunning){this.animRunning=true;that._animationLoop();}};var moveTo=Kinetic$1.Node.prototype.moveTo;Kinetic$1.Node.prototype.moveTo=function(container){moveTo.call(this,container);};/**
     * batch draw
     * @method
     * @memberof Kinetic.Layer.prototype
     */Kinetic$1.Layer.prototype.batchDraw=function(){var that=this,Anim=Kinetic$1.Animation;if(!this.batchAnim){this.batchAnim=new Anim(function(){if(that.lastBatchDrawTime&&now()-that.lastBatchDrawTime>BATCH_DRAW_STOP_TIME_DIFF){that.batchAnim.stop();}},this);}this.lastBatchDrawTime=now();if(!this.batchAnim.isRunning()){this.draw();this.batchAnim.start();}};/**
     * batch draw
     * @method
     * @memberof Kinetic.Stage.prototype
     */Kinetic$1.Stage.prototype.batchDraw=function(){this.getChildren().each(function(layer){layer.batchDraw();});};})((0, eval)('this'));(function(){var blacklist={node:1,duration:1,easing:1,onFinish:1,yoyo:1},PAUSED=1,PLAYING=2,REVERSING=3,idCounter=0;/**
     * Tween constructor.  Tweens enable you to animate a node between the current state and a new state.
     *  You can play, pause, reverse, seek, reset, and finish tweens.  By default, tweens are animated using
     *  a linear easing.  For more tweening options, check out {@link Kinetic.Easings}
     * @constructor
     * @memberof Kinetic
     * @example
     * // instantiate new tween which fully rotates a node in 1 second
     * var tween = new Kinetic.Tween({<br>
     *   node: node,<br>
     *   rotationDeg: 360,<br>
     *   duration: 1,<br>
     *   easing: Kinetic.Easings.EaseInOut<br>
     * });<br><br>
     *
     * // play tween<br>
     * tween.play();<br><br>
     *
     * // pause tween<br>
     * tween.pause();
     */Kinetic$1.Tween=function(config){var that=this,node=config.node,nodeId=node._id,duration=config.duration||1,easing=config.easing||Kinetic$1.Easings.Linear,yoyo=!!config.yoyo,key;this.node=node;this._id=idCounter++;this.anim=new Kinetic$1.Animation(function(){that.tween.onEnterFrame();},node.getLayer());this.tween=new Tween(key,function(i){that._tweenFunc(i);},easing,0,1,duration*1000,yoyo);this._addListeners();// init attrs map
if(!Kinetic$1.Tween.attrs[nodeId]){Kinetic$1.Tween.attrs[nodeId]={};}if(!Kinetic$1.Tween.attrs[nodeId][this._id]){Kinetic$1.Tween.attrs[nodeId][this._id]={};}// init tweens map
if(!Kinetic$1.Tween.tweens[nodeId]){Kinetic$1.Tween.tweens[nodeId]={};}for(key in config){if(blacklist[key]===undefined){this._addAttr(key,config[key]);}}this.reset();// callbacks
this.onFinish=config.onFinish;this.onReset=config.onReset;};// start/diff object = attrs.nodeId.tweenId.attr
Kinetic$1.Tween.attrs={};// tweenId = tweens.nodeId.attr
Kinetic$1.Tween.tweens={};Kinetic$1.Tween.prototype={_addAttr:function _addAttr(key,end){var node=this.node,nodeId=node._id,start,diff,tweenId,n,len;// remove conflict from tween map if it exists
tweenId=Kinetic$1.Tween.tweens[nodeId][key];if(tweenId){delete Kinetic$1.Tween.attrs[nodeId][tweenId][key];}// add to tween map
start=node.getAttr(key);if(Kinetic$1.Util._isArray(end)){diff=[];len=end.length;for(n=0;n<len;n++){diff.push(end[n]-start[n]);}}else {diff=end-start;}Kinetic$1.Tween.attrs[nodeId][this._id][key]={start:start,diff:diff};Kinetic$1.Tween.tweens[nodeId][key]=this._id;},_tweenFunc:function _tweenFunc(i){var node=this.node,attrs=Kinetic$1.Tween.attrs[node._id][this._id],key,attr,start,diff,newVal,n,len;for(key in attrs){attr=attrs[key];start=attr.start;diff=attr.diff;if(Kinetic$1.Util._isArray(start)){newVal=[];len=start.length;for(n=0;n<len;n++){newVal.push(start[n]+diff[n]*i);}}else {newVal=start+diff*i;}node.setAttr(key,newVal);}},_addListeners:function _addListeners(){var that=this;// start listeners
this.tween.onPlay=function(){that.anim.start();};this.tween.onReverse=function(){that.anim.start();};// stop listeners
this.tween.onPause=function(){that.anim.stop();};this.tween.onFinish=function(){if(that.onFinish){that.onFinish();}};this.tween.onReset=function(){if(that.onReset){that.onReset();}};},/**
         * play
         * @method
         * @memberof Kinetic.Tween.prototype
         * @returns {Tween}
         */play:function play(){this.tween.play();return this;},/**
         * reverse
         * @method
         * @memberof Kinetic.Tween.prototype
         * @returns {Tween}
         */reverse:function reverse(){this.tween.reverse();return this;},/**
         * reset
         * @method
         * @memberof Kinetic.Tween.prototype
         * @returns {Tween}
         */reset:function reset(){this.node;this.tween.reset();return this;},/**
         * seek
         * @method
         * @memberof Kinetic.Tween.prototype
         * @param {Integer} t time in seconds between 0 and the duration
         * @returns {Tween}
         */seek:function seek(t){this.node;this.tween.seek(t*1000);return this;},/**
         * pause
         * @method
         * @memberof Kinetic.Tween.prototype
         * @returns {Tween}
         */pause:function pause(){this.tween.pause();return this;},/**
         * finish
         * @method
         * @memberof Kinetic.Tween.prototype
         * @returns {Tween}
         */finish:function finish(){this.node;this.tween.finish();return this;},/**
         * destroy
         * @method
         * @memberof Kinetic.Tween.prototype
         */destroy:function destroy(){var nodeId=this.node._id,thisId=this._id,attrs=Kinetic$1.Tween.tweens[nodeId],key;this.pause();for(key in attrs){delete Kinetic$1.Tween.tweens[nodeId][key];}delete Kinetic$1.Tween.attrs[nodeId][thisId];}};var Tween=function Tween(prop,propFunc,func,begin,finish,duration,yoyo){this.prop=prop;this.propFunc=propFunc;this.begin=begin;this._pos=begin;this.duration=duration;this._change=0;this.prevPos=0;this.yoyo=yoyo;this._time=0;this._position=0;this._startTime=0;this._finish=0;this.func=func;this._change=finish-this.begin;this.pause();};/*
     * Tween methods
     */Tween.prototype={fire:function fire(str){var handler=this[str];if(handler){handler();}},setTime:function setTime(t){if(t>this.duration){if(this.yoyo){this._time=this.duration;this.reverse();}else {this.finish();}}else if(t<0){if(this.yoyo){this._time=0;this.play();}else {this.reset();}}else {this._time=t;this.update();}},getTime:function getTime(){return this._time;},setPosition:function setPosition(p){this.prevPos=this._pos;this.propFunc(p);this._pos=p;},getPosition:function getPosition(t){if(t===undefined){t=this._time;}return this.func(t,this.begin,this._change,this.duration);},play:function play(){this.state=PLAYING;this._startTime=this.getTimer()-this._time;this.onEnterFrame();this.fire('onPlay');},reverse:function reverse(){this.state=REVERSING;this._time=this.duration-this._time;this._startTime=this.getTimer()-this._time;this.onEnterFrame();this.fire('onReverse');},seek:function seek(t){this.pause();this._time=t;this.update();this.fire('onSeek');},reset:function reset(){this.pause();this._time=0;this.update();this.fire('onReset');},finish:function finish(){this.pause();this._time=this.duration;this.update();this.fire('onFinish');},update:function update(){this.setPosition(this.getPosition(this._time));},onEnterFrame:function onEnterFrame(){var t=this.getTimer()-this._startTime;if(this.state===PLAYING){this.setTime(t);}else if(this.state===REVERSING){this.setTime(this.duration-t);}},pause:function pause(){this.state=PAUSED;this.fire('onPause');},getTimer:function getTimer(){return new Date().getTime();}};/*
    * These eases were ported from an Adobe Flash tweening library to JavaScript
    * by Xaric
    */ /**
     * @namespace Easings
     * @memberof Kinetic
     */Kinetic$1.Easings={/**
        * back ease in
        * @function
        * @memberof Kinetic.Easings
        */'BackEaseIn':function BackEaseIn(t,b,c,d){var s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},/**
        * back ease out
        * @function
        * @memberof Kinetic.Easings
        */'BackEaseOut':function BackEaseOut(t,b,c,d){var s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},/**
        * back ease in out
        * @function
        * @memberof Kinetic.Easings
        */'BackEaseInOut':function BackEaseInOut(t,b,c,d){var s=1.70158;if((t/=d/2)<1){return c/2*(t*t*(((s*=1.525)+1)*t-s))+b;}return c/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+b;},/**
        * elastic ease in
        * @function
        * @memberof Kinetic.Easings
        */'ElasticEaseIn':function ElasticEaseIn(t,b,c,d,a,p){// added s = 0
var s=0;if(t===0){return b;}if((t/=d)==1){return b+c;}if(!p){p=d*0.3;}if(!a||a<Math.abs(c)){a=c;s=p/4;}else {s=p/(2*Math.PI)*Math.asin(c/a);}return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},/**
        * elastic ease out
        * @function
        * @memberof Kinetic.Easings
        */'ElasticEaseOut':function ElasticEaseOut(t,b,c,d,a,p){// added s = 0
var s=0;if(t===0){return b;}if((t/=d)==1){return b+c;}if(!p){p=d*0.3;}if(!a||a<Math.abs(c)){a=c;s=p/4;}else {s=p/(2*Math.PI)*Math.asin(c/a);}return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},/**
        * elastic ease in out
        * @function
        * @memberof Kinetic.Easings
        */'ElasticEaseInOut':function ElasticEaseInOut(t,b,c,d,a,p){// added s = 0
var s=0;if(t===0){return b;}if((t/=d/2)==2){return b+c;}if(!p){p=d*(0.3*1.5);}if(!a||a<Math.abs(c)){a=c;s=p/4;}else {s=p/(2*Math.PI)*Math.asin(c/a);}if(t<1){return -0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;}return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*0.5+c+b;},/**
        * bounce ease out
        * @function
        * @memberof Kinetic.Easings
        */'BounceEaseOut':function BounceEaseOut(t,b,c,d){if((t/=d)<1/2.75){return c*(7.5625*t*t)+b;}else if(t<2/2.75){return c*(7.5625*(t-=1.5/2.75)*t+0.75)+b;}else if(t<2.5/2.75){return c*(7.5625*(t-=2.25/2.75)*t+0.9375)+b;}else {return c*(7.5625*(t-=2.625/2.75)*t+0.984375)+b;}},/**
        * bounce ease in
        * @function
        * @memberof Kinetic.Easings
        */'BounceEaseIn':function BounceEaseIn(t,b,c,d){return c-Kinetic$1.Easings.BounceEaseOut(d-t,0,c,d)+b;},/**
        * bounce ease in out
        * @function
        * @memberof Kinetic.Easings
        */'BounceEaseInOut':function BounceEaseInOut(t,b,c,d){if(t<d/2){return Kinetic$1.Easings.BounceEaseIn(t*2,0,c,d)*0.5+b;}else {return Kinetic$1.Easings.BounceEaseOut(t*2-d,0,c,d)*0.5+c*0.5+b;}},/**
        * ease in
        * @function
        * @memberof Kinetic.Easings
        */'EaseIn':function EaseIn(t,b,c,d){return c*(t/=d)*t+b;},/**
        * ease out
        * @function
        * @memberof Kinetic.Easings
        */'EaseOut':function EaseOut(t,b,c,d){return -c*(t/=d)*(t-2)+b;},/**
        * ease in out
        * @function
        * @memberof Kinetic.Easings
        */'EaseInOut':function EaseInOut(t,b,c,d){if((t/=d/2)<1){return c/2*t*t+b;}return -c/2*(--t*(t-2)-1)+b;},/**
        * strong ease in
        * @function
        * @memberof Kinetic.Easings
        */'StrongEaseIn':function StrongEaseIn(t,b,c,d){return c*(t/=d)*t*t*t*t+b;},/**
        * strong ease out
        * @function
        * @memberof Kinetic.Easings
        */'StrongEaseOut':function StrongEaseOut(t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},/**
        * strong ease in out
        * @function
        * @memberof Kinetic.Easings
        */'StrongEaseInOut':function StrongEaseInOut(t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t*t*t+b;}return c/2*((t-=2)*t*t*t*t+2)+b;},/**
        * linear
        * @function
        * @memberof Kinetic.Easings
        */'Linear':function Linear(t,b,c,d){return c*t/d+b;}};})();(function(){Kinetic$1.DD={// properties
anim:new Kinetic$1.Animation(),isDragging:false,offset:{x:0,y:0},node:null,// methods
_drag:function _drag(evt){var dd=Kinetic$1.DD,node=dd.node;if(node){if(!dd.isDragging){var pos=node.getStage().getPointerPosition();var dragDistance=node.dragDistance();var distance=Math.max(Math.abs(pos.x-dd.startPointerPos.x),Math.abs(pos.y-dd.startPointerPos.y));if(distance<dragDistance){return;}}node._setDragPosition(evt);if(!dd.isDragging){dd.isDragging=true;node.fire('dragstart',{type:'dragstart',target:node,evt:evt},true);}// execute ondragmove if defined
node.fire('dragmove',{type:'dragmove',target:node,evt:evt},true);}},_endDragBefore:function _endDragBefore(evt){var dd=Kinetic$1.DD,node=dd.node,layer;if(node){node.nodeType;layer=node.getLayer();dd.anim.stop();// only fire dragend event if the drag and drop
// operation actually started.
if(dd.isDragging){dd.isDragging=false;Kinetic$1.listenClickTap=false;if(evt){evt.dragEndNode=node;}}delete dd.node;(layer||node).draw();}},_endDragAfter:function _endDragAfter(evt){evt=evt||{};var dragEndNode=evt.dragEndNode;if(evt&&dragEndNode){dragEndNode.fire('dragend',{type:'dragend',target:dragEndNode,evt:evt},true);}}};// Node extenders
/**
     * initiate drag and drop
     * @method
     * @memberof Kinetic.Node.prototype
     */Kinetic$1.Node.prototype.startDrag=function(){var dd=Kinetic$1.DD,stage=this.getStage(),layer=this.getLayer(),pos=stage.getPointerPosition(),ap=this.getAbsolutePosition();if(pos){if(dd.node){dd.node.stopDrag();}dd.node=this;dd.startPointerPos=pos;dd.offset.x=pos.x-ap.x;dd.offset.y=pos.y-ap.y;dd.anim.setLayers(layer||this.getLayers());dd.anim.start();this._setDragPosition();}};Kinetic$1.Node.prototype._setDragPosition=function(evt){var dd=Kinetic$1.DD,pos=this.getStage().getPointerPosition(),dbf=this.getDragBoundFunc();if(!pos){return;}var newNodePos={x:pos.x-dd.offset.x,y:pos.y-dd.offset.y};if(dbf!==undefined){newNodePos=dbf.call(this,newNodePos,evt);}this.setAbsolutePosition(newNodePos);};/**
     * stop drag and drop
     * @method
     * @memberof Kinetic.Node.prototype
     */Kinetic$1.Node.prototype.stopDrag=function(){var dd=Kinetic$1.DD,evt={};dd._endDragBefore(evt);dd._endDragAfter(evt);};Kinetic$1.Node.prototype.setDraggable=function(draggable){this._setAttr('draggable',draggable);this._dragChange();};var origDestroy=Kinetic$1.Node.prototype.destroy;Kinetic$1.Node.prototype.destroy=function(){var dd=Kinetic$1.DD;// stop DD
if(dd.node&&dd.node._id===this._id){this.stopDrag();}origDestroy.call(this);};/**
     * determine if node is currently in drag and drop mode
     * @method
     * @memberof Kinetic.Node.prototype
     */Kinetic$1.Node.prototype.isDragging=function(){var dd=Kinetic$1.DD;return dd.node&&dd.node._id===this._id&&dd.isDragging;};Kinetic$1.Node.prototype._listenDrag=function(){var that=this;this._dragCleanup();if(this.getClassName()==='Stage'){this.on('contentMousedown.kinetic contentTouchstart.kinetic',function(evt){if(!Kinetic$1.DD.node){that.startDrag(evt);}});}else {this.on('mousedown.kinetic touchstart.kinetic',function(evt){if(!Kinetic$1.DD.node){that.startDrag(evt);}});}// listening is required for drag and drop
/*
        this._listeningEnabled = true;
        this._clearSelfAndAncestorCache('listeningEnabled');
        */};Kinetic$1.Node.prototype._dragChange=function(){if(this.attrs.draggable){this._listenDrag();}else {// remove event listeners
this._dragCleanup();/*
             * force drag and drop to end
             * if this node is currently in
             * drag and drop mode
             */var stage=this.getStage();var dd=Kinetic$1.DD;if(stage&&dd.node&&dd.node._id===this._id){dd.node.stopDrag();}}};Kinetic$1.Node.prototype._dragCleanup=function(){if(this.getClassName()==='Stage'){this.off('contentMousedown.kinetic');this.off('contentTouchstart.kinetic');}else {this.off('mousedown.kinetic');this.off('touchstart.kinetic');}};Kinetic$1.Factory.addGetterSetter(Kinetic$1.Node,'dragBoundFunc');/**
     * get/set drag bound function.  This is used to override the default
     *  drag and drop position
     * @name dragBoundFunc
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Function} dragBoundFunc
     * @returns {Function}
     * @example
     * // get drag bound function<br>
     * var dragBoundFunc = node.dragBoundFunc();<br><br>
     *
     * // create vertical drag and drop<br>
     * node.dragBoundFunc(function(){<br>
     *   return {<br>
     *     x: this.getAbsolutePosition().x,<br>
     *     y: pos.y<br>
     *   };<br>
     * });
     */Kinetic$1.Factory.addGetter(Kinetic$1.Node,'draggable',false);Kinetic$1.Factory.addOverloadedGetterSetter(Kinetic$1.Node,'draggable');/**
     * get/set draggable flag
     * @name draggable
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Boolean} draggable
     * @returns {Boolean}
     * @example
     * // get draggable flag<br>
     * var draggable = node.draggable();<br><br>
     *
     * // enable drag and drop<br>
     * node.draggable(true);<br><br>
     *
     * // disable drag and drop<br>
     * node.draggable(false);
     */var html=Kinetic$1.document.documentElement;html.addEventListener('mouseup',Kinetic$1.DD._endDragBefore,true);html.addEventListener('touchend',Kinetic$1.DD._endDragBefore,true);html.addEventListener('mouseup',Kinetic$1.DD._endDragAfter,false);html.addEventListener('touchend',Kinetic$1.DD._endDragAfter,false);})();(function(){Kinetic$1.Util.addMethods(Kinetic$1.Container,{__init:function __init(config){this.children=new Kinetic$1.Collection();Kinetic$1.Node.call(this,config);},/**
         * returns a {@link Kinetic.Collection} of direct descendant nodes
         * @method
         * @memberof Kinetic.Container.prototype
         * @param {Function} [filterFunc] filter function
         * @returns {Kinetic.Collection}
         * @example
         * // get all children<br>
         * var children = layer.getChildren();<br><br>
         *
         * // get only circles<br>
         * var circles = layer.getChildren(function(node){<br>
         *    return node.getClassName() === 'Circle';<br>
         * });
         */getChildren:function getChildren(predicate){if(!predicate){return this.children;}else {var results=new Kinetic$1.Collection();this.children.each(function(child){if(predicate(child)){results.push(child);}});return results;}},/**
         * determine if node has children
         * @method
         * @memberof Kinetic.Container.prototype
         * @returns {Boolean}
         */hasChildren:function hasChildren(){return this.getChildren().length>0;},/**
         * remove all children
         * @method
         * @memberof Kinetic.Container.prototype
         */removeChildren:function removeChildren(){var children=Kinetic$1.Collection.toCollection(this.children);var child;for(var i=0;i<children.length;i++){child=children[i];// reset parent to prevent many _setChildrenIndices calls
delete child.parent;child.index=0;if(child.hasChildren()){child.removeChildren();}child.remove();}children=null;this.children=new Kinetic$1.Collection();return this;},/**
         * destroy all children
         * @method
         * @memberof Kinetic.Container.prototype
         */destroyChildren:function destroyChildren(){var children=Kinetic$1.Collection.toCollection(this.children);var child;for(var i=0;i<children.length;i++){child=children[i];// reset parent to prevent many _setChildrenIndices calls
delete child.parent;child.index=0;child.destroy();}children=null;this.children=new Kinetic$1.Collection();return this;},/**
         * Add node or nodes to container.
         * @method
         * @memberof Kinetic.Container.prototype
         * @param {...Kinetic.Node} child
         * @returns {Container}
         * @example
         * layer.add(shape1, shape2, shape3);
         */add:function add(child){if(arguments.length>1){for(var i=0;i<arguments.length;i++){this.add(arguments[i]);}return;}if(child.getParent()){child.moveTo(this);return;}var children=this.children;this._validateAdd(child);child.index=children.length;child.parent=this;children.push(child);this._fire('add',{child:child});// chainable
return this;},destroy:function destroy(){// destroy children
if(this.hasChildren()){this.destroyChildren();}// then destroy self
Kinetic$1.Node.prototype.destroy.call(this);},/**
         * return a {@link Kinetic.Collection} of nodes that match the selector.  Use '#' for id selections
         * and '.' for name selections.  You can also select by type or class name. Pass multiple selectors
         * separated by a space.
         * @method
         * @memberof Kinetic.Container.prototype
         * @param {String} selector
         * @returns {Collection}
         * @example
         * // select node with id foo<br>
         * var node = stage.find('#foo');<br><br>
         *
         * // select nodes with name bar inside layer<br>
         * var nodes = layer.find('.bar');<br><br>
         *
         * // select all groups inside layer<br>
         * var nodes = layer.find('Group');<br><br>
         *
         * // select all rectangles inside layer<br>
         * var nodes = layer.find('Rect');<br><br>
         *
         * // select node with an id of foo or a name of bar inside layer<br>
         * var nodes = layer.find('#foo, .bar');
         */find:function find(selector){var retArr=[],selectorArr=selector.replace(/ /g,'').split(','),len=selectorArr.length,n,i,sel,arr,node,children,clen;for(n=0;n<len;n++){sel=selectorArr[n];// id selector
if(sel.charAt(0)==='#'){node=this._getNodeById(sel.slice(1));if(node){retArr.push(node);}}// name selector
else if(sel.charAt(0)==='.'){arr=this._getNodesByName(sel.slice(1));retArr=retArr.concat(arr);}// unrecognized selector, pass to children
else {children=this.getChildren();clen=children.length;for(i=0;i<clen;i++){retArr=retArr.concat(children[i]._get(sel));}}}return Kinetic$1.Collection.toCollection(retArr);},_getNodeById:function _getNodeById(key){var node=Kinetic$1.ids[key];if(node!==undefined&&this.isAncestorOf(node)){return node;}return null;},_getNodesByName:function _getNodesByName(key){var arr=Kinetic$1.names[key]||[];return this._getDescendants(arr);},_get:function _get(selector){var retArr=Kinetic$1.Node.prototype._get.call(this,selector);var children=this.getChildren();var len=children.length;for(var n=0;n<len;n++){retArr=retArr.concat(children[n]._get(selector));}return retArr;},// extenders
toObject:function toObject(){var obj=Kinetic$1.Node.prototype.toObject.call(this);obj.children=[];var children=this.getChildren();var len=children.length;for(var n=0;n<len;n++){var child=children[n];obj.children.push(child.toObject());}return obj;},_getDescendants:function _getDescendants(arr){var retArr=[];var len=arr.length;for(var n=0;n<len;n++){var node=arr[n];if(this.isAncestorOf(node)){retArr.push(node);}}return retArr;},/**
         * determine if node is an ancestor
         * of descendant
         * @method
         * @memberof Kinetic.Container.prototype
         * @param {Kinetic.Node} node
         */isAncestorOf:function isAncestorOf(node){var parent=node.getParent();while(parent){if(parent._id===this._id){return true;}parent=parent.getParent();}return false;},clone:function clone(obj){// call super method
var node=Kinetic$1.Node.prototype.clone.call(this,obj);this.getChildren().each(function(no){node.add(no.clone());});return node;},/**
         * get all shapes that intersect a point.  Note: because this method must clear a temporary
         * canvas and redraw every shape inside the container, it should only be used for special sitations
         * because it performs very poorly.  Please use the {@link Kinetic.Stage#getIntersection} method if at all possible
         * because it performs much better
         * @method
         * @memberof Kinetic.Container.prototype
         * @param {Object} pos
         * @param {Number} pos.x
         * @param {Number} pos.y
         * @returns {Array} array of shapes
         */getAllIntersections:function getAllIntersections(pos){var arr=[];this.find('Shape').each(function(shape){if(shape.isVisible()&&shape.intersects(pos)){arr.push(shape);}});return arr;},_setChildrenIndices:function _setChildrenIndices(){this.children.each(function(child,n){child.index=n;});},drawScene:function drawScene(can,top){var layer=this.getLayer(),canvas=can||layer&&layer.getCanvas(),context=canvas&&canvas.getContext(),cachedCanvas=this._cache.canvas,cachedSceneCanvas=cachedCanvas&&cachedCanvas.scene;if(this.isVisible()){if(cachedSceneCanvas){this._drawCachedSceneCanvas(context);}else {this._drawChildren(canvas,'drawScene',top);}}return this;},drawHit:function drawHit(can,top){var layer=this.getLayer(),canvas=can||layer&&layer.hitCanvas,context=canvas&&canvas.getContext(),cachedCanvas=this._cache.canvas,cachedHitCanvas=cachedCanvas&&cachedCanvas.hit;if(this.shouldDrawHit()){if(cachedHitCanvas){this._drawCachedHitCanvas(context);}else {this._drawChildren(canvas,'drawHit',top);}}return this;},_drawChildren:function _drawChildren(canvas,drawMethod,top){var layer=this.getLayer(),context=canvas&&canvas.getContext(),clipWidth=this.getClipWidth(),clipHeight=this.getClipHeight(),hasClip=clipWidth&&clipHeight,clipX,clipY;if(hasClip&&layer){clipX=this.getClipX();clipY=this.getClipY();context.save();layer._applyTransform(this,context);context.beginPath();context.rect(clipX,clipY,clipWidth,clipHeight);context.clip();context.reset();}this.children.each(function(child){child[drawMethod](canvas,top);});if(hasClip){context.restore();}}});Kinetic$1.Util.extend(Kinetic$1.Container,Kinetic$1.Node);// deprecated methods
Kinetic$1.Container.prototype.get=Kinetic$1.Container.prototype.find;// add getters setters
Kinetic$1.Factory.addComponentsGetterSetter(Kinetic$1.Container,'clip',['x','y','width','height']);/**
     * get/set clip
     * @method
     * @name clip
     * @memberof Kinetic.Container.prototype
     * @param {Object} clip
     * @param {Number} clip.x
     * @param {Number} clip.y
     * @param {Number} clip.width
     * @param {Number} clip.height
     * @returns {Object}
     * @example
     * // get clip<br>
     * var clip = container.clip();<br><br>
     *
     * // set clip<br>
     * container.setClip({<br>
     *   x: 20,<br>
     *   y: 20,<br>
     *   width: 20,<br>
     *   height: 20<br>
     * });
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Container,'clipX');/**
     * get/set clip x
     * @name clipX
     * @method
     * @memberof Kinetic.Container.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get clip x<br>
     * var clipX = container.clipX();<br><br>
     *
     * // set clip x<br>
     * container.clipX(10);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Container,'clipY');/**
     * get/set clip y
     * @name clipY
     * @method
     * @memberof Kinetic.Container.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get clip y<br>
     * var clipY = container.clipY();<br><br>
     *
     * // set clip y<br>
     * container.clipY(10);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Container,'clipWidth');/**
     * get/set clip width
     * @name clipWidth
     * @method
     * @memberof Kinetic.Container.prototype
     * @param {Number} width
     * @returns {Number}
     * @example
     * // get clip width<br>
     * var clipWidth = container.clipWidth();<br><br>
     *
     * // set clip width<br>
     * container.clipWidth(100);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Container,'clipHeight');/**
     * get/set clip height
     * @name clipHeight
     * @method
     * @memberof Kinetic.Container.prototype
     * @param {Number} height
     * @returns {Number}
     * @example
     * // get clip height<br>
     * var clipHeight = container.clipHeight();<br><br>
     *
     * // set clip height<br>
     * container.clipHeight(100);
     */Kinetic$1.Collection.mapMethods(Kinetic$1.Container);})();(function(){var HAS_SHADOW='hasShadow';function _fillFunc(context){context.fill();}function _strokeFunc(context){context.stroke();}function _fillFuncHit(context){context.fill();}function _strokeFuncHit(context){context.stroke();}function _clearHasShadowCache(){this._clearCache(HAS_SHADOW);}Kinetic$1.Util.addMethods(Kinetic$1.Shape,{__init:function __init(config){this.nodeType='Shape';this._fillFunc=_fillFunc;this._strokeFunc=_strokeFunc;this._fillFuncHit=_fillFuncHit;this._strokeFuncHit=_strokeFuncHit;// set colorKey
var shapes=Kinetic$1.shapes;var key;while(true){key=Kinetic$1.Util.getRandomColor();if(key&&!(key in shapes)){break;}}this.colorKey=key;shapes[key]=this;// call super constructor
Kinetic$1.Node.call(this,config);this.on('shadowColorChange.kinetic shadowBlurChange.kinetic shadowOffsetChange.kinetic shadowOpacityChange.kinetic shadowEnabledChange.kinetic',_clearHasShadowCache);},hasChildren:function hasChildren(){return false;},getChildren:function getChildren(){return [];},/**
         * get canvas context tied to the layer
         * @method
         * @memberof Kinetic.Shape.prototype
         * @returns {Kinetic.Context}
         */getContext:function getContext(){return this.getLayer().getContext();},/**
         * get canvas renderer tied to the layer.  Note that this returns a canvas renderer, not a canvas element
         * @method
         * @memberof Kinetic.Shape.prototype
         * @returns {Kinetic.Canvas}
         */getCanvas:function getCanvas(){return this.getLayer().getCanvas();},/**
         * returns whether or not a shadow will be rendered
         * @method
         * @memberof Kinetic.Shape.prototype
         * @returns {Boolean}
         */hasShadow:function hasShadow(){return this._getCache(HAS_SHADOW,this._hasShadow);},_hasShadow:function _hasShadow(){return this.getShadowEnabled()&&this.getShadowOpacity()!==0&&!!(this.getShadowColor()||this.getShadowBlur()||this.getShadowOffsetX()||this.getShadowOffsetY());},/**
         * returns whether or not the shape will be filled
         * @method
         * @memberof Kinetic.Shape.prototype
         * @returns {Boolean}
         */hasFill:function hasFill(){return !!(this.getFill()||this.getFillPatternImage()||this.getFillLinearGradientColorStops()||this.getFillRadialGradientColorStops());},/**
         * returns whether or not the shape will be stroked
         * @method
         * @memberof Kinetic.Shape.prototype
         * @returns {Boolean}
         */hasStroke:function hasStroke(){return !!(this.stroke()||this.strokeRed()||this.strokeGreen()||this.strokeBlue());},_get:function _get(selector){return this.className===selector||this.nodeType===selector?[this]:[];},/**
         * determines if point is in the shape, regardless if other shapes are on top of it.  Note: because
         *  this method clears a temporary canvas and then redraws the shape, it performs very poorly if executed many times
         *  consecutively.  Please use the {@link Kinetic.Stage#getIntersection} method if at all possible
         *  because it performs much better
         * @method
         * @memberof Kinetic.Shape.prototype
         * @param {Object} point 
         * @param {Number} point.x
         * @param {Number} point.y
         * @returns {Boolean}
         */intersects:function intersects(pos){var stage=this.getStage(),bufferHitCanvas=stage.bufferHitCanvas,p;bufferHitCanvas.getContext().clear();this.drawScene(bufferHitCanvas);p=bufferHitCanvas.context.getImageData(Math.round(pos.x),Math.round(pos.y),1,1).data;return p[3]>0;},// extends Node.prototype.destroy 
destroy:function destroy(){Kinetic$1.Node.prototype.destroy.call(this);delete Kinetic$1.shapes[this.colorKey];},_useBufferCanvas:function _useBufferCanvas(){return (this.hasShadow()||this.getAbsoluteOpacity()!==1)&&this.hasFill()&&this.hasStroke()&&this.getStage();},drawScene:function drawScene(can,top){var layer=this.getLayer(),canvas=can||layer.getCanvas(),context=canvas.getContext(),cachedCanvas=this._cache.canvas,drawFunc=this.sceneFunc(),hasShadow=this.hasShadow(),stage,bufferCanvas,bufferContext;if(this.isVisible()){if(cachedCanvas){this._drawCachedSceneCanvas(context);}else if(drawFunc){context.save();// if buffer canvas is needed
if(this._useBufferCanvas()){stage=this.getStage();bufferCanvas=stage.bufferCanvas;bufferContext=bufferCanvas.getContext();bufferContext.clear();bufferContext.save();bufferContext._applyLineJoin(this);layer._applyTransform(this,bufferContext,top);drawFunc.call(this,bufferContext);bufferContext.restore();if(hasShadow){context.save();context._applyShadow(this);context.drawImage(bufferCanvas._canvas,0,0);context.restore();}context._applyOpacity(this);context.drawImage(bufferCanvas._canvas,0,0);}// if buffer canvas is not needed
else {context._applyLineJoin(this);layer._applyTransform(this,context,top);if(hasShadow){context.save();context._applyShadow(this);drawFunc.call(this,context);context.restore();}context._applyOpacity(this);drawFunc.call(this,context);}context.restore();}}return this;},drawHit:function drawHit(can,top){var layer=this.getLayer(),canvas=can||layer.hitCanvas,context=canvas.getContext(),drawFunc=this.hitFunc()||this.sceneFunc(),cachedCanvas=this._cache.canvas,cachedHitCanvas=cachedCanvas&&cachedCanvas.hit;if(this.shouldDrawHit()){if(cachedHitCanvas){this._drawCachedHitCanvas(context);}else if(drawFunc){context.save();context._applyLineJoin(this);layer._applyTransform(this,context,top);drawFunc.call(this,context);context.restore();}}return this;},/**
        * draw hit graph using the cached scene canvas
        * @method
        * @memberof Kinetic.Shape.prototype
        * @param {Integer} alphaThreshold alpha channel threshold that determines whether or not
        *  a pixel should be drawn onto the hit graph.  Must be a value between 0 and 255.  
        *  The default is 0
        * @returns {Kinetic.Shape}
        * @example
        * shape.cache();
        * shape.drawHitFromCache();
        */drawHitFromCache:function drawHitFromCache(alphaThreshold){var threshold=alphaThreshold||0,cachedCanvas=this._cache.canvas,sceneCanvas=this._getCachedSceneCanvas(),sceneContext=sceneCanvas.getContext(),hitCanvas=cachedCanvas.hit,hitContext=hitCanvas.getContext(),width=sceneCanvas.getWidth(),height=sceneCanvas.getHeight(),sceneImageData,sceneData,hitImageData,hitData,len,rgbColorKey,i,alpha;hitContext.clear();try{sceneImageData=sceneContext.getImageData(0,0,width,height);sceneData=sceneImageData.data;hitImageData=hitContext.getImageData(0,0,width,height);hitData=hitImageData.data;len=sceneData.length;rgbColorKey=Kinetic$1.Util._hexToRgb(this.colorKey);// replace non transparent pixels with color key
for(i=0;i<len;i+=4){alpha=sceneData[i+3];if(alpha>threshold){hitData[i]=rgbColorKey.r;hitData[i+1]=rgbColorKey.g;hitData[i+2]=rgbColorKey.b;hitData[i+3]=255;}}hitContext.putImageData(hitImageData,0,0);}catch(e){Kinetic$1.Util.warn('Unable to draw hit graph from cached scene canvas. '+e.message);}return this;}});Kinetic$1.Util.extend(Kinetic$1.Shape,Kinetic$1.Node);// add getters and setters
Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'stroke');/**
     * get/set stroke color
     * @name stroke
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} color
     * @returns {String}
     * @example
     * // get stroke color<br>
     * var stroke = shape.stroke();<br><br>
     *
     * // set stroke color with color string<br>
     * shape.stroke('green');<br><br>
     *
     * // set stroke color with hex<br>
     * shape.stroke('#00ff00');<br><br>
     *
     * // set stroke color with rgb<br>
     * shape.stroke('rgb(0,255,0)');<br><br>
     *
     * // set stroke color with rgba and make it 50% opaque<br>
     * shape.stroke('rgba(0,255,0,0.5');
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'strokeRed',0,Kinetic$1.Validators.RGBComponent);/**
     * get/set stroke red component
     * @name strokeRed
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} red
     * @returns {Integer}
     * @example
     * // get stroke red component<br>
     * var strokeRed = shape.strokeRed();<br><br>
     *
     * // set stroke red component<br>
     * shape.strokeRed(0);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'strokeGreen',0,Kinetic$1.Validators.RGBComponent);/**
     * get/set stroke green component
     * @name strokeGreen
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} green
     * @returns {Integer}
     * @example
     * // get stroke green component<br>
     * var strokeGreen = shape.strokeGreen();<br><br>
     *
     * // set stroke green component<br>
     * shape.strokeGreen(255);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'strokeBlue',0,Kinetic$1.Validators.RGBComponent);/**
     * get/set stroke blue component
     * @name strokeBlue
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} blue
     * @returns {Integer}
     * @example
     * // get stroke blue component<br>
     * var strokeBlue = shape.strokeBlue();<br><br>
     *
     * // set stroke blue component<br>
     * shape.strokeBlue(0);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'strokeAlpha',1,Kinetic$1.Validators.alphaComponent);/**
     * get/set stroke alpha component.  Alpha is a real number between 0 and 1.  The default
     *  is 1.
     * @name strokeAlpha
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} alpha
     * @returns {Number}
     * @example
     * // get stroke alpha component<br>
     * var strokeAlpha = shape.strokeAlpha();<br><br>
     *
     * // set stroke alpha component<br>
     * shape.strokeAlpha(0.5);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'strokeWidth',2);/**
     * get/set stroke width
     * @name strokeWidth
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} strokeWidth
     * @returns {Number}
     * @example
     * // get stroke width<br>
     * var strokeWidth = shape.strokeWidth();<br><br>
     *
     * // set stroke width<br>
     * shape.strokeWidth();
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'lineJoin');/**
     * get/set line join.  Can be miter, round, or bevel.  The
     *  default is miter
     * @name lineJoin
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} lineJoin
     * @returns {String}
     * @example
     * // get line join<br>
     * var lineJoin = shape.lineJoin();<br><br>
     *
     * // set line join<br>
     * shape.lineJoin('round');
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'lineCap');/**
     * get/set line cap.  Can be butt, round, or square
     * @name lineCap
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} lineCap
     * @returns {String}
     * @example
     * // get line cap<br>
     * var lineCap = shape.lineCap();<br><br>
     *
     * // set line cap<br>
     * shape.lineCap('round');
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'sceneFunc');/**
     * get/set scene draw function
     * @name sceneFunc
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Function} drawFunc drawing function
     * @returns {Function}
     * @example
     * // get scene draw function<br>
     * var sceneFunc = shape.sceneFunc();<br><br>
     *
     * // set scene draw function<br>
     * shape.sceneFunc(function(context) {<br>
     *   context.beginPath();<br>
     *   context.rect(0, 0, this.width(), this.height());<br>
     *   context.closePath();<br>
     *   context.fillStrokeShape(this);<br>
     * });
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'hitFunc');/**
     * get/set hit draw function
     * @name hitFunc
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Function} drawFunc drawing function
     * @returns {Function}
     * @example
     * // get hit draw function<br>
     * var hitFunc = shape.hitFunc();<br><br>
     *
     * // set hit draw function<br>
     * shape.hitFunc(function(context) {<br>
     *   context.beginPath();<br>
     *   context.rect(0, 0, this.width(), this.height());<br>
     *   context.closePath();<br>
     *   context.fillStrokeShape(this);<br>
     * });
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'dash');/**
     * get/set dash array for stroke.
     * @name dash
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Array} dash
     * @returns {Array}
     * @example
     *  // apply dashed stroke that is 10px long and 5 pixels apart<br>
     *  line.dash([10, 5]);<br><br>
     *  
     *  // apply dashed stroke that is made up of alternating dashed<br> 
     *  // lines that are 10px long and 20px apart, and dots that have<br> 
     *  // a radius of 5px and are 20px apart<br>
     *  line.dash([10, 20, 0.001, 20]);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'shadowColor');/**
     * get/set shadow color
     * @name shadowColor
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} color
     * @returns {String}
     * @example
     * // get shadow color<br>
     * var shadow = shape.shadowColor();<br><br>
     *
     * // set shadow color with color string<br>
     * shape.shadowColor('green');<br><br>
     *
     * // set shadow color with hex<br>
     * shape.shadowColor('#00ff00');<br><br>
     *
     * // set shadow color with rgb<br>
     * shape.shadowColor('rgb(0,255,0)');<br><br>
     *
     * // set shadow color with rgba and make it 50% opaque<br>
     * shape.shadowColor('rgba(0,255,0,0.5');
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'shadowRed',0,Kinetic$1.Validators.RGBComponent);/**
     * get/set shadow red component
     * @name shadowRed
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} red
     * @returns {Integer}
     * @example
     * // get shadow red component<br>
     * var shadowRed = shape.shadowRed();<br><br>
     *
     * // set shadow red component<br>
     * shape.shadowRed(0);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'shadowGreen',0,Kinetic$1.Validators.RGBComponent);/**
     * get/set shadow green component
     * @name shadowGreen
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} green
     * @returns {Integer}
     * @example
     * // get shadow green component<br>
     * var shadowGreen = shape.shadowGreen();<br><br>
     *
     * // set shadow green component<br>
     * shape.shadowGreen(255);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'shadowBlue',0,Kinetic$1.Validators.RGBComponent);/**
     * get/set shadow blue component
     * @name shadowBlue
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} blue
     * @returns {Integer}
     * @example
     * // get shadow blue component<br>
     * var shadowBlue = shape.shadowBlue();<br><br>
     *
     * // set shadow blue component<br>
     * shape.shadowBlue(0);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'shadowAlpha',1,Kinetic$1.Validators.alphaComponent);/**
     * get/set shadow alpha component.  Alpha is a real number between 0 and 1.  The default
     *  is 1.
     * @name shadowAlpha
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} alpha
     * @returns {Number}
     * @example
     * // get shadow alpha component<br>
     * var shadowAlpha = shape.shadowAlpha();<br><br>
     *
     * // set shadow alpha component<br>
     * shape.shadowAlpha(0.5);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'shadowBlur');/**
     * get/set shadow blur
     * @name shadowBlur
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} blur
     * @returns {Number}
     * @example
     * // get shadow blur<br>
     * var shadowBlur = shape.shadowBlur();<br><br>
     *
     * // set shadow blur<br>
     * shape.shadowBlur(10);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'shadowOpacity');/**
     * get/set shadow opacity.  must be a value between 0 and 1
     * @name shadowOpacity
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} opacity
     * @returns {Number}
     * @example
     * // get shadow opacity<br>
     * var shadowOpacity = shape.shadowOpacity();<br><br>
     *
     * // set shadow opacity<br>
     * shape.shadowOpacity(0.5);
     */Kinetic$1.Factory.addComponentsGetterSetter(Kinetic$1.Shape,'shadowOffset',['x','y']);/**
     * get/set shadow offset
     * @name shadowOffset
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} offset
     * @param {Number} offset.x
     * @param {Number} offset.y
     * @returns {Object}
     * @example
     * // get shadow offset<br>
     * var shadowOffset = shape.shadowOffset();<br><br>
     *
     * // set shadow offset<br>
     * shape.shadowOffset({<br>
     *   x: 20<br>
     *   y: 10<br>
     * });
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'shadowOffsetX',0);/**
     * get/set shadow offset x
     * @name shadowOffsetX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get shadow offset x<br>
     * var shadowOffsetX = shape.shadowOffsetX();<br><br>
     *
     * // set shadow offset x<br>
     * shape.shadowOffsetX(5);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'shadowOffsetY',0);/**
     * get/set shadow offset y
     * @name shadowOffsetY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get shadow offset y<br>
     * var shadowOffsetY = shape.shadowOffsetY();<br><br>
     *
     * // set shadow offset y<br>
     * shape.shadowOffsetY(5);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillPatternImage');/**
     * get/set fill pattern image
     * @name fillPatternImage
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Image} image object
     * @returns {Image}
     * @example
     * // get fill pattern image<br>
     * var fillPatternImage = shape.fillPatternImage();<br><br>
     *
     * // set fill pattern image<br>
     * var imageObj = new Image();<br>
     * imageObj.onload = function() {<br>
     *   shape.fillPatternImage(imageObj);<br>
     * };<br>
     * imageObj.src = 'path/to/image/jpg';
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fill');/**
     * get/set fill color
     * @name fill
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} color
     * @returns {String}
     * @example
     * // get fill color<br>
     * var fill = shape.fill();<br><br>
     *
     * // set fill color with color string<br>
     * shape.fill('green');<br><br>
     *
     * // set fill color with hex<br>
     * shape.fill('#00ff00');<br><br>
     *
     * // set fill color with rgb<br>
     * shape.fill('rgb(0,255,0)');<br><br>
     *
     * // set fill color with rgba and make it 50% opaque<br>
     * shape.fill('rgba(0,255,0,0.5');
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillRed',0,Kinetic$1.Validators.RGBComponent);/**
     * get/set fill red component
     * @name fillRed
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} red
     * @returns {Integer}
     * @example
     * // get fill red component<br>
     * var fillRed = shape.fillRed();<br><br>
     *
     * // set fill red component<br>
     * shape.fillRed(0);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillGreen',0,Kinetic$1.Validators.RGBComponent);/**
     * get/set fill green component
     * @name fillGreen
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} green
     * @returns {Integer}
     * @example
     * // get fill green component<br>
     * var fillGreen = shape.fillGreen();<br><br>
     *
     * // set fill green component<br>
     * shape.fillGreen(255);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillBlue',0,Kinetic$1.Validators.RGBComponent);/**
     * get/set fill blue component
     * @name fillBlue
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} blue
     * @returns {Integer}
     * @example
     * // get fill blue component<br>
     * var fillBlue = shape.fillBlue();<br><br>
     *
     * // set fill blue component<br>
     * shape.fillBlue(0);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillAlpha',1,Kinetic$1.Validators.alphaComponent);/**
     * get/set fill alpha component.  Alpha is a real number between 0 and 1.  The default
     *  is 1.
     * @name fillAlpha
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} alpha
     * @returns {Number}
     * @example
     * // get fill alpha component<br>
     * var fillAlpha = shape.fillAlpha();<br><br>
     *
     * // set fill alpha component<br>
     * shape.fillAlpha(0.5);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillPatternX',0);/**
     * get/set fill pattern x
     * @name fillPatternX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill pattern x<br>
     * var fillPatternX = shape.fillPatternX();<br><br>
     * 
     * // set fill pattern x<br>
     * shape.fillPatternX(20);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillPatternY',0);/**
     * get/set fill pattern y
     * @name fillPatternY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill pattern y<br>
     * var fillPatternY = shape.fillPatternY();<br><br>
     * 
     * // set fill pattern y<br>
     * shape.fillPatternY(20);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillLinearGradientColorStops');/**
     * get/set fill linear gradient color stops
     * @name fillLinearGradientColorStops
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Array} colorStops
     * @returns {Array} colorStops
     * @example
     * // get fill linear gradient color stops<br>
     * var colorStops = shape.fillLinearGradientColorStops();<br><br>
     *
     * // create a linear gradient that starts with red, changes to blue <br>
     * // halfway through, and then changes to green<br>
     * shape.fillLinearGradientColorStops(0, 'red', 0.5, 'blue', 1, 'green');
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillRadialGradientStartRadius',0);/**
     * get/set fill radial gradient start radius
     * @name fillRadialGradientStartRadius
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} radius
     * @returns {Number}
     * @example
     * // get radial gradient start radius<br>
     * var startRadius = shape.fillRadialGradientStartRadius();<br><br>
     *
     * // set radial gradient start radius<br>
     * shape.fillRadialGradientStartRadius(0);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillRadialGradientEndRadius',0);/**
     * get/set fill radial gradient end radius
     * @name fillRadialGradientEndRadius
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} radius
     * @returns {Number}
     * @example
     * // get radial gradient end radius<br>
     * var endRadius = shape.fillRadialGradientEndRadius();<br><br>
     *
     * // set radial gradient end radius<br>
     * shape.fillRadialGradientEndRadius(100);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillRadialGradientColorStops');/**
     * get/set fill radial gradient color stops
     * @name fillRadialGradientColorStops
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} colorStops
     * @returns {Array}
     * @example
     * // get fill radial gradient color stops<br>
     * var colorStops = shape.fillRadialGradientColorStops();<br><br>
     *
     * // create a radial gradient that starts with red, changes to blue <br>
     * // halfway through, and then changes to green<br>
     * shape.fillRadialGradientColorStops(0, 'red', 0.5, 'blue', 1, 'green');
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillPatternRepeat','repeat');/**
     * get/set fill pattern repeat.  Can be 'repeat', 'repeat-x', 'repeat-y', or 'no-repeat'.  The default is 'repeat'
     * @name fillPatternRepeat
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} repeat
     * @returns {String}
     * @example
     * // get fill pattern repeat<br>
     * var repeat = shape.fillPatternRepeat();<br><br>
     *
     * // repeat pattern in x direction only<br>
     * shape.fillPatternRepeat('repeat-x');<br><br>
     *
     * // do not repeat the pattern<br>
     * shape.fillPatternRepeat('no repeat');
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillEnabled',true);/**
     * get/set fill enabled flag
     * @name fillEnabled
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Boolean} enabled
     * @returns {Boolean}
     * @example
     * // get fill enabled flag<br>
     * var fillEnabled = shape.fillEnabled();<br><br>
     *
     * // disable fill<br>
     * shape.fillEnabled(false);<br><br>
     *
     * // enable fill<br>
     * shape.fillEnabled(true);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'strokeEnabled',true);/**
     * get/set stroke enabled flag
     * @name strokeEnabled
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Boolean} enabled
     * @returns {Boolean}
     * @example
     * // get stroke enabled flag<br>
     * var strokeEnabled = shape.strokeEnabled();<br><br>
     *
     * // disable stroke<br>
     * shape.strokeEnabled(false);<br><br>
     *
     * // enable stroke<br>
     * shape.strokeEnabled(true);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'shadowEnabled',true);/**
     * get/set shadow enabled flag
     * @name shadowEnabled
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Boolean} enabled
     * @returns {Boolean}
     * @example
     * // get shadow enabled flag<br>
     * var shadowEnabled = shape.shadowEnabled();<br><br>
     *
     * // disable shadow<br>
     * shape.shadowEnabled(false);<br><br>
     *
     * // enable shadow<br>
     * shape.shadowEnabled(true);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'dashEnabled',true);/**
     * get/set dash enabled flag
     * @name dashEnabled
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Boolean} enabled
     * @returns {Boolean}
     * @example
     * // get dash enabled flag<br>
     * var dashEnabled = shape.dashEnabled();<br><br>
     *
     * // disable dash<br>
     * shape.dashEnabled(false);<br><br>
     *
     * // enable dash<br>
     * shape.dashEnabled(true);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'strokeScaleEnabled',true);/**
     * get/set strokeScale enabled flag
     * @name strokeScaleEnabled
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Boolean} enabled
     * @returns {Boolean}
     * @example
     * // get stroke scale enabled flag<br>
     * var strokeScaleEnabled = shape.strokeScaleEnabled();<br><br>
     *
     * // disable stroke scale<br>
     * shape.strokeScaleEnabled(false);<br><br>
     *
     * // enable stroke scale<br>
     * shape.strokeScaleEnabled(true);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillPriority','color');/**
     * get/set fill priority.  can be color, pattern, linear-gradient, or radial-gradient.  The default is color.
     *   This is handy if you want to toggle between different fill types.
     * @name fillPriority
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} priority
     * @returns {String}
     * @example
     * // get fill priority<br>
     * var fillPriority = shape.fillPriority();<br><br>
     *
     * // set fill priority<br>
     * shape.fillPriority('linear-gradient');
     */Kinetic$1.Factory.addComponentsGetterSetter(Kinetic$1.Shape,'fillPatternOffset',['x','y']);/**
     * get/set fill pattern offset
     * @name fillPatternOffset
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} offset
     * @param {Number} offset.x
     * @param {Number} offset.y
     * @returns {Object}
     * @example
     * // get fill pattern offset<br>
     * var patternOffset = shape.fillPatternOffset();<br><br>
     *
     * // set fill pattern offset<br>
     * shape.fillPatternOffset({<br>
     *   x: 20<br>
     *   y: 10<br>
     * });
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillPatternOffsetX',0);/**
     * get/set fill pattern offset x
     * @name fillPatternOffsetX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill pattern offset x<br>
     * var patternOffsetX = shape.fillPatternOffsetX();<br><br>
     *
     * // set fill pattern offset x<br>
     * shape.fillPatternOffsetX(20);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillPatternOffsetY',0);/**
     * get/set fill pattern offset y
     * @name fillPatternOffsetY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill pattern offset y<br>
     * var patternOffsetY = shape.fillPatternOffsetY();<br><br>
     *
     * // set fill pattern offset y<br>
     * shape.fillPatternOffsetY(10);
     */Kinetic$1.Factory.addComponentsGetterSetter(Kinetic$1.Shape,'fillPatternScale',['x','y']);/**
     * get/set fill pattern scale
     * @name fillPatternScale
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} scale
     * @param {Number} scale.x
     * @param {Number} scale.y
     * @returns {Object}
     * @example
     * // get fill pattern scale<br>
     * var patternScale = shape.fillPatternScale();<br><br>
     *
     * // set fill pattern scale<br>
     * shape.fillPatternScale({<br>
     *   x: 2<br>
     *   y: 2<br>
     * });
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillPatternScaleX',1);/**
     * get/set fill pattern scale x
     * @name fillPatternScaleX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill pattern scale x<br>
     * var patternScaleX = shape.fillPatternScaleX();<br><br>
     *
     * // set fill pattern scale x<br>
     * shape.fillPatternScaleX(2);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillPatternScaleY',1);/**
     * get/set fill pattern scale y
     * @name fillPatternScaleY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill pattern scale y<br>
     * var patternScaleY = shape.fillPatternScaleY();<br><br>
     *
     * // set fill pattern scale y<br>
     * shape.fillPatternScaleY(2);
     */Kinetic$1.Factory.addComponentsGetterSetter(Kinetic$1.Shape,'fillLinearGradientStartPoint',['x','y']);/**
     * get/set fill linear gradient start point
     * @name fillLinearGradientStartPoint
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} startPoint
     * @param {Number} startPoint.x
     * @param {Number} startPoint.y
     * @returns {Object}
     * @example
     * // get fill linear gradient start point<br>
     * var startPoint = shape.fillLinearGradientStartPoint();<br><br>
     *
     * // set fill linear gradient start point<br>
     * shape.fillLinearGradientStartPoint({<br>
     *   x: 20<br>
     *   y: 10<br>
     * });
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillLinearGradientStartPointX',0);/**
     * get/set fill linear gradient start point x
     * @name fillLinearGradientStartPointX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill linear gradient start point x<br>
     * var startPointX = shape.fillLinearGradientStartPointX();<br><br>
     *
     * // set fill linear gradient start point x<br>
     * shape.fillLinearGradientStartPointX(20);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillLinearGradientStartPointY',0);/**
     * get/set fill linear gradient start point y
     * @name fillLinearGradientStartPointY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill linear gradient start point y<br>
     * var startPointY = shape.fillLinearGradientStartPointY();<br><br>
     *
     * // set fill linear gradient start point y<br>
     * shape.fillLinearGradientStartPointY(20);
     */Kinetic$1.Factory.addComponentsGetterSetter(Kinetic$1.Shape,'fillLinearGradientEndPoint',['x','y']);/**
     * get/set fill linear gradient end point
     * @name fillLinearGradientEndPoint
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} endPoint
     * @param {Number} endPoint.x
     * @param {Number} endPoint.y
     * @returns {Object}
     * @example
     * // get fill linear gradient end point<br>
     * var endPoint = shape.fillLinearGradientEndPoint();<br><br>
     *
     * // set fill linear gradient end point<br>
     * shape.fillLinearGradientEndPoint({<br>
     *   x: 20<br>
     *   y: 10<br>
     * });
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillLinearGradientEndPointX',0);/**
     * get/set fill linear gradient end point x
     * @name fillLinearGradientEndPointX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill linear gradient end point x<br>
     * var endPointX = shape.fillLinearGradientEndPointX();<br><br>
     *
     * // set fill linear gradient end point x<br>
     * shape.fillLinearGradientEndPointX(20);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillLinearGradientEndPointY',0);/**
     * get/set fill linear gradient end point y
     * @name fillLinearGradientEndPointY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill linear gradient end point y<br>
     * var endPointY = shape.fillLinearGradientEndPointY();<br><br>
     *
     * // set fill linear gradient end point y<br>
     * shape.fillLinearGradientEndPointY(20);
     */Kinetic$1.Factory.addComponentsGetterSetter(Kinetic$1.Shape,'fillRadialGradientStartPoint',['x','y']);/**
     * get/set fill radial gradient start point
     * @name fillRadialGradientStartPoint
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} startPoint
     * @param {Number} startPoint.x
     * @param {Number} startPoint.y
     * @returns {Object}
     * @example
     * // get fill radial gradient start point<br>
     * var startPoint = shape.fillRadialGradientStartPoint();<br><br>
     *
     * // set fill radial gradient start point<br>
     * shape.fillRadialGradientStartPoint({<br>
     *   x: 20<br>
     *   y: 10<br>
     * });
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillRadialGradientStartPointX',0);/**
     * get/set fill radial gradient start point x
     * @name fillRadialGradientStartPointX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill radial gradient start point x<br>
     * var startPointX = shape.fillRadialGradientStartPointX();<br><br>
     *
     * // set fill radial gradient start point x<br>
     * shape.fillRadialGradientStartPointX(20);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillRadialGradientStartPointY',0);/**
     * get/set fill radial gradient start point y
     * @name fillRadialGradientStartPointY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill radial gradient start point y<br>
     * var startPointY = shape.fillRadialGradientStartPointY();<br><br>
     *
     * // set fill radial gradient start point y<br>
     * shape.fillRadialGradientStartPointY(20);
     */Kinetic$1.Factory.addComponentsGetterSetter(Kinetic$1.Shape,'fillRadialGradientEndPoint',['x','y']);/**
     * get/set fill radial gradient end point
     * @name fillRadialGradientEndPoint
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} endPoint
     * @param {Number} endPoint.x
     * @param {Number} endPoint.y
     * @returns {Object}
     * @example
     * // get fill radial gradient end point<br>
     * var endPoint = shape.fillRadialGradientEndPoint();<br><br>
     *
     * // set fill radial gradient end point<br>
     * shape.fillRadialGradientEndPoint({<br>
     *   x: 20<br>
     *   y: 10<br>
     * });
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillRadialGradientEndPointX',0);/**
     * get/set fill radial gradient end point x
     * @name fillRadialGradientEndPointX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill radial gradient end point x<br>
     * var endPointX = shape.fillRadialGradientEndPointX();<br><br>
     *
     * // set fill radial gradient end point x<br>
     * shape.fillRadialGradientEndPointX(20);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillRadialGradientEndPointY',0);/**
     * get/set fill radial gradient end point y
     * @name fillRadialGradientEndPointY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill radial gradient end point y<br>
     * var endPointY = shape.fillRadialGradientEndPointY();<br><br>
     *
     * // set fill radial gradient end point y<br>
     * shape.fillRadialGradientEndPointY(20);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Shape,'fillPatternRotation',0);/**
     * get/set fill pattern rotation in degrees
     * @name fillPatternRotation
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} rotation
     * @returns {Kinetic.Shape}
     * @example
     * // get fill pattern rotation<br>
     * var patternRotation = shape.fillPatternRotation();<br><br>
     *
     * // set fill pattern rotation<br>
     * shape.fillPatternRotation(20);
     */Kinetic$1.Factory.backCompat(Kinetic$1.Shape,{dashArray:'dash',getDashArray:'getDash',setDashArray:'getDash',drawFunc:'sceneFunc',getDrawFunc:'getSceneFunc',setDrawFunc:'setSceneFunc',drawHitFunc:'hitFunc',getDrawHitFunc:'getHitFunc',setDrawHitFunc:'setHitFunc'});Kinetic$1.Collection.mapMethods(Kinetic$1.Shape);})();/*jshint unused:false */(function(){// CONSTANTS
var STAGE='Stage',STRING='string',PX='px',MOUSEOUT='mouseout',MOUSELEAVE='mouseleave',MOUSEOVER='mouseover',MOUSEENTER='mouseenter',MOUSEMOVE='mousemove',MOUSEDOWN='mousedown',MOUSEUP='mouseup',CLICK='click',DBL_CLICK='dblclick',TOUCHSTART='touchstart',TOUCHEND='touchend',TAP='tap',DBL_TAP='dbltap',TOUCHMOVE='touchmove',CONTENT_MOUSEOUT='contentMouseout',CONTENT_MOUSEOVER='contentMouseover',CONTENT_MOUSEMOVE='contentMousemove',CONTENT_MOUSEDOWN='contentMousedown',CONTENT_MOUSEUP='contentMouseup',CONTENT_CLICK='contentClick',CONTENT_DBL_CLICK='contentDblclick',CONTENT_TOUCHSTART='contentTouchstart',CONTENT_TOUCHEND='contentTouchend',CONTENT_DBL_TAP='contentDbltap',CONTENT_TOUCHMOVE='contentTouchmove',DIV='div',RELATIVE='relative',INLINE_BLOCK='inline-block',KINETICJS_CONTENT='kineticjs-content',SPACE=' ',UNDERSCORE='_',CONTAINER='container',EMPTY_STRING='',EVENTS=[MOUSEDOWN,MOUSEMOVE,MOUSEUP,MOUSEOUT,TOUCHSTART,TOUCHMOVE,TOUCHEND,MOUSEOVER],// cached variables
eventsLength=EVENTS.length;function addEvent(ctx,eventName){ctx.content.addEventListener(eventName,function(evt){ctx[UNDERSCORE+eventName](evt);},false);}Kinetic$1.Util.addMethods(Kinetic$1.Stage,{___init:function ___init(config){this.nodeType=STAGE;// call super constructor
Kinetic$1.Container.call(this,config);this._id=Kinetic$1.idCounter++;this._buildDOM();this._bindContentEvents();this._enableNestedTransforms=false;Kinetic$1.stages.push(this);},_validateAdd:function _validateAdd(child){if(child.getType()!=='Layer'){Kinetic$1.Util.error('You may only add layers to the stage.');}},/**
         * set container dom element which contains the stage wrapper div element
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {DomElement} container can pass in a dom element or id string
         */setContainer:function setContainer(container){if(_typeof(container)===STRING){var id=container;container=Kinetic$1.document.getElementById(container);if(!container){throw 'Can not find container in document with id '+id;}}this._setAttr(CONTAINER,container);return this;},shouldDrawHit:function shouldDrawHit(){return true;},draw:function draw(){Kinetic$1.Node.prototype.draw.call(this);return this;},/**
         * draw layer scene graphs
         * @name draw
         * @method
         * @memberof Kinetic.Stage.prototype
         */ /**
         * draw layer hit graphs
         * @name drawHit
         * @method
         * @memberof Kinetic.Stage.prototype
         */ /**
         * set height
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {Number} height
         */setHeight:function setHeight(height){Kinetic$1.Node.prototype.setHeight.call(this,height);this._resizeDOM();return this;},/**
         * set width
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {Number} width
         */setWidth:function setWidth(width){Kinetic$1.Node.prototype.setWidth.call(this,width);this._resizeDOM();return this;},/**
         * clear all layers
         * @method
         * @memberof Kinetic.Stage.prototype
         */clear:function clear(){var layers=this.children,len=layers.length,n;for(n=0;n<len;n++){layers[n].clear();}return this;},clone:function clone(obj){if(!obj){obj={};}obj.container=Kinetic$1.document.createElement(DIV);return Kinetic$1.Container.prototype.clone.call(this,obj);},/**
         * destroy stage
         * @method
         * @memberof Kinetic.Stage.prototype
         */destroy:function destroy(){var content=this.content;Kinetic$1.Container.prototype.destroy.call(this);if(content&&Kinetic$1.Util._isInDocument(content)){this.getContainer().removeChild(content);}var index=Kinetic$1.stages.indexOf(this);if(index>-1){Kinetic$1.stages.splice(index,1);}},/**
         * get pointer position which can be a touch position or mouse position
         * @method
         * @memberof Kinetic.Stage.prototype
         * @returns {Object}
         */getPointerPosition:function getPointerPosition(){return this.pointerPos;},getStage:function getStage(){return this;},/**
         * get stage content div element which has the
         *  the class name "kineticjs-content"
         * @method
         * @memberof Kinetic.Stage.prototype
         */getContent:function getContent(){return this.content;},/**
         * Creates a composite data URL and requires a callback because the composite is generated asynchronously.
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {Object} config
         * @param {Function} config.callback function executed when the composite has completed
         * @param {String} [config.mimeType] can be "image/png" or "image/jpeg".
         *  "image/png" is the default
         * @param {Number} [config.x] x position of canvas section
         * @param {Number} [config.y] y position of canvas section
         * @param {Number} [config.width] width of canvas section
         * @param {Number} [config.height] height of canvas section
         * @param {Number} [config.quality] jpeg quality.  If using an "image/jpeg" mimeType,
         *  you can specify the quality from 0 to 1, where 0 is very poor quality and 1
         *  is very high quality
         */toDataURL:function toDataURL(config){config=config||{};var mimeType=config.mimeType||null,quality=config.quality||null,x=config.x||0,y=config.y||0,canvas=new Kinetic$1.SceneCanvas({width:config.width||this.getWidth(),height:config.height||this.getHeight(),pixelRatio:1}),_context=canvas.getContext()._context,layers=this.children;if(x||y){_context.translate(-1*x,-1*y);}function drawLayer(n){var layer=layers[n],layerUrl=layer.toDataURL(),imageObj=new Kinetic$1.window.Image();imageObj.onload=function(){_context.drawImage(imageObj,0,0);if(n<layers.length-1){drawLayer(n+1);}else {config.callback(canvas.toDataURL(mimeType,quality));}};imageObj.src=layerUrl;}drawLayer(0);},/**
         * converts stage into an image.
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {Object} config
         * @param {Function} config.callback function executed when the composite has completed
         * @param {String} [config.mimeType] can be "image/png" or "image/jpeg".
         *  "image/png" is the default
         * @param {Number} [config.x] x position of canvas section
         * @param {Number} [config.y] y position of canvas section
         * @param {Number} [config.width] width of canvas section
         * @param {Number} [config.height] height of canvas section
         * @param {Number} [config.quality] jpeg quality.  If using an "image/jpeg" mimeType,
         *  you can specify the quality from 0 to 1, where 0 is very poor quality and 1
         *  is very high quality
         */toImage:function toImage(config){var cb=config.callback;config.callback=function(dataUrl){Kinetic$1.Util._getImage(dataUrl,function(img){cb(img);});};this.toDataURL(config);},/**
         * get visible intersection shape. This is the preferred
         *  method for determining if a point intersects a shape or not
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {Object} pos
         * @param {Number} pos.x
         * @param {Number} pos.y
         * @returns {Kinetic.Shape}
         */getIntersection:function getIntersection(pos){var layers=this.getChildren(),len=layers.length,end=len-1,n,shape;for(n=end;n>=0;n--){shape=layers[n].getIntersection(pos);if(shape){return shape;}}return null;},_resizeDOM:function _resizeDOM(){if(this.content){var width=this.getWidth(),height=this.getHeight(),layers=this.getChildren(),len=layers.length,n,layer;// set content dimensions
this.content.style.width=width+PX;this.content.style.height=height+PX;this.bufferCanvas.setSize(width,height);this.bufferHitCanvas.setSize(width,height);// set layer dimensions
for(n=0;n<len;n++){layer=layers[n];layer.getCanvas().setSize(width,height);layer.hitCanvas.setSize(width,height);layer.draw();}}},/**
         * add layer or layers to stage
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {...Kinetic.Layer} layer
         * @example
         * stage.add(layer1, layer2, layer3);
         */add:function add(layer){if(arguments.length>1){for(var i=0;i<arguments.length;i++){this.add(arguments[i]);}return;}Kinetic$1.Container.prototype.add.call(this,layer);layer._setCanvasSize(this.width(),this.height());// draw layer and append canvas to container
layer.draw();this.content.appendChild(layer.canvas._canvas);// chainable
return this;},getParent:function getParent(){return null;},getLayer:function getLayer(){return null;},/**
         * returns a {@link Kinetic.Collection} of layers
         * @method
         * @memberof Kinetic.Stage.prototype
         */getLayers:function getLayers(){return this.getChildren();},_bindContentEvents:function _bindContentEvents(){for(var n=0;n<eventsLength;n++){addEvent(this,EVENTS[n]);}},_mouseover:function _mouseover(evt){if(!Kinetic$1.UA.mobile){this._setPointerPosition(evt);this._fire(CONTENT_MOUSEOVER,{evt:evt});}},_mouseout:function _mouseout(evt){if(!Kinetic$1.UA.mobile){this._setPointerPosition(evt);var targetShape=this.targetShape;if(targetShape&&!Kinetic$1.isDragging()){targetShape._fireAndBubble(MOUSEOUT,{evt:evt});targetShape._fireAndBubble(MOUSELEAVE,{evt:evt});this.targetShape=null;}this.pointerPos=undefined;this._fire(CONTENT_MOUSEOUT,{evt:evt});}},_mousemove:function _mousemove(evt){if(!Kinetic$1.UA.mobile){this._setPointerPosition(evt);var dd=Kinetic$1.DD,shape=this.getIntersection(this.getPointerPosition());if(shape&&shape.isListening()){if(!Kinetic$1.isDragging()&&(!this.targetShape||this.targetShape._id!==shape._id)){if(this.targetShape){this.targetShape._fireAndBubble(MOUSEOUT,{evt:evt},shape);this.targetShape._fireAndBubble(MOUSELEAVE,{evt:evt},shape);}shape._fireAndBubble(MOUSEOVER,{evt:evt},this.targetShape);shape._fireAndBubble(MOUSEENTER,{evt:evt},this.targetShape);this.targetShape=shape;}else {shape._fireAndBubble(MOUSEMOVE,{evt:evt});}}/*
                 * if no shape was detected, clear target shape and try
                 * to run mouseout from previous target shape
                 */else {if(this.targetShape&&!Kinetic$1.isDragging()){this.targetShape._fireAndBubble(MOUSEOUT,{evt:evt});this.targetShape._fireAndBubble(MOUSELEAVE,{evt:evt});this.targetShape=null;}}// content event
this._fire(CONTENT_MOUSEMOVE,{evt:evt});if(dd){dd._drag(evt);}}// always call preventDefault for desktop events because some browsers
// try to drag and drop the canvas element
if(evt.preventDefault){evt.preventDefault();}},_mousedown:function _mousedown(evt){if(!Kinetic$1.UA.mobile){this._setPointerPosition(evt);var shape=this.getIntersection(this.getPointerPosition());Kinetic$1.listenClickTap=true;if(shape&&shape.isListening()){this.clickStartShape=shape;shape._fireAndBubble(MOUSEDOWN,{evt:evt});}// content event
this._fire(CONTENT_MOUSEDOWN,{evt:evt});}// always call preventDefault for desktop events because some browsers
// try to drag and drop the canvas element
if(evt.preventDefault){evt.preventDefault();}},_mouseup:function _mouseup(evt){if(!Kinetic$1.UA.mobile){this._setPointerPosition(evt);var shape=this.getIntersection(this.getPointerPosition()),clickStartShape=this.clickStartShape,fireDblClick=false;if(Kinetic$1.inDblClickWindow){fireDblClick=true;Kinetic$1.inDblClickWindow=false;}else {Kinetic$1.inDblClickWindow=true;}setTimeout(function(){Kinetic$1.inDblClickWindow=false;},Kinetic$1.dblClickWindow);if(shape&&shape.isListening()){shape._fireAndBubble(MOUSEUP,{evt:evt});// detect if click or double click occurred
if(Kinetic$1.listenClickTap&&clickStartShape&&clickStartShape._id===shape._id){shape._fireAndBubble(CLICK,{evt:evt});if(fireDblClick){shape._fireAndBubble(DBL_CLICK,{evt:evt});}}}// content events
this._fire(CONTENT_MOUSEUP,{evt:evt});if(Kinetic$1.listenClickTap){this._fire(CONTENT_CLICK,{evt:evt});if(fireDblClick){this._fire(CONTENT_DBL_CLICK,{evt:evt});}}Kinetic$1.listenClickTap=false;}// always call preventDefault for desktop events because some browsers
// try to drag and drop the canvas element
if(evt.preventDefault){evt.preventDefault();}},_touchstart:function _touchstart(evt){this._setPointerPosition(evt);var shape=this.getIntersection(this.getPointerPosition());Kinetic$1.listenClickTap=true;if(shape&&shape.isListening()){this.tapStartShape=shape;shape._fireAndBubble(TOUCHSTART,{evt:evt});// only call preventDefault if the shape is listening for events
if(shape.isListening()&&evt.preventDefault){evt.preventDefault();}}// content event
this._fire(CONTENT_TOUCHSTART,{evt:evt});},_touchend:function _touchend(evt){this._setPointerPosition(evt);var shape=this.getIntersection(this.getPointerPosition()),fireDblClick=false;if(Kinetic$1.inDblClickWindow){fireDblClick=true;Kinetic$1.inDblClickWindow=false;}else {Kinetic$1.inDblClickWindow=true;}setTimeout(function(){Kinetic$1.inDblClickWindow=false;},Kinetic$1.dblClickWindow);if(shape&&shape.isListening()){shape._fireAndBubble(TOUCHEND,{evt:evt});// detect if tap or double tap occurred
if(Kinetic$1.listenClickTap&&shape._id===this.tapStartShape._id){shape._fireAndBubble(TAP,{evt:evt});if(fireDblClick){shape._fireAndBubble(DBL_TAP,{evt:evt});}}// only call preventDefault if the shape is listening for events
if(shape.isListening()&&evt.preventDefault){evt.preventDefault();}}// content events
if(Kinetic$1.listenClickTap){this._fire(CONTENT_TOUCHEND,{evt:evt});if(fireDblClick){this._fire(CONTENT_DBL_TAP,{evt:evt});}}Kinetic$1.listenClickTap=false;},_touchmove:function _touchmove(evt){this._setPointerPosition(evt);var dd=Kinetic$1.DD,shape=this.getIntersection(this.getPointerPosition());if(shape&&shape.isListening()){shape._fireAndBubble(TOUCHMOVE,{evt:evt});// only call preventDefault if the shape is listening for events
if(shape.isListening()&&evt.preventDefault){evt.preventDefault();}}this._fire(CONTENT_TOUCHMOVE,{evt:evt});// start drag and drop
if(dd){dd._drag(evt);}},_setPointerPosition:function _setPointerPosition(evt){var contentPosition=this._getContentPosition(),offsetX=evt.offsetX,clientX=evt.clientX,x=null,y=null,touch;evt=evt?evt:window.event;// touch events
if(evt.touches!==undefined){// currently, only handle one finger
if(evt.touches.length>0){touch=evt.touches[0];// get the information for finger #1
x=touch.clientX-contentPosition.left;y=touch.clientY-contentPosition.top;}}// mouse events
else {// if offsetX is defined, assume that offsetY is defined as well
if(offsetX!==undefined){x=offsetX;y=evt.offsetY;}// we unforunately have to use UA detection here because accessing
// the layerX or layerY properties in newer veresions of Chrome
// throws a JS warning.  layerX and layerY are required for FF
// when the container is transformed via CSS.
else if(Kinetic$1.UA.browser==='mozilla'){x=evt.layerX;y=evt.layerY;}// if clientX is defined, assume that clientY is defined as well
else if(clientX!==undefined&&contentPosition){x=clientX-contentPosition.left;y=evt.clientY-contentPosition.top;}}if(x!==null&&y!==null){this.pointerPos={x:x,y:y};}},_getContentPosition:function _getContentPosition(){var rect=this.content.getBoundingClientRect?this.content.getBoundingClientRect():{top:0,left:0};return {top:rect.top,left:rect.left};},_buildDOM:function _buildDOM(){var container=this.getContainer();if(!container){if(Kinetic$1.Util.isBrowser()){throw 'Stage has not container. But container is required';}else {// automatically create element for jsdom in nodejs env
container=Kinetic$1.document.createElement(DIV);}}// clear content inside container
container.innerHTML=EMPTY_STRING;// content
this.content=Kinetic$1.document.createElement(DIV);this.content.style.position=RELATIVE;this.content.style.display=INLINE_BLOCK;this.content.className=KINETICJS_CONTENT;this.content.setAttribute('role','presentation');container.appendChild(this.content);// the buffer canvas pixel ratio must be 1 because it is used as an 
// intermediate canvas before copying the result onto a scene canvas.
// not setting it to 1 will result in an over compensation
this.bufferCanvas=new Kinetic$1.SceneCanvas({pixelRatio:1});this.bufferHitCanvas=new Kinetic$1.HitCanvas();this._resizeDOM();},_onContent:function _onContent(typesStr,handler){var types=typesStr.split(SPACE),len=types.length,n,baseEvent;for(n=0;n<len;n++){baseEvent=types[n];this.content.addEventListener(baseEvent,handler,false);}},// currently cache function is now working for stage, because stage has no its own canvas element
// TODO: may be it is better to cache all children layers?
cache:function cache(){Kinetic$1.Util.warn('Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.');return;},clearCache:function clearCache(){}});Kinetic$1.Util.extend(Kinetic$1.Stage,Kinetic$1.Container);// add getters and setters
Kinetic$1.Factory.addGetter(Kinetic$1.Stage,'container');Kinetic$1.Factory.addOverloadedGetterSetter(Kinetic$1.Stage,'container');/**
     * get container DOM element
     * @name container
     * @method
     * @memberof Kinetic.Stage.prototype
     * @returns {DomElement} container
     * @example
     * // get container<br>
     * var container = stage.container();<br><br>
     * 
     * // set container<br>
     * var container = document.createElement('div');<br>
     * body.appendChild(container);<br>
     * stage.container(container);
     */})();(function(){Kinetic$1.Util.addMethods(Kinetic$1.BaseLayer,{___init:function ___init(config){this.nodeType='Layer';Kinetic$1.Container.call(this,config);},createPNGStream:function createPNGStream(){return this.canvas._canvas.createPNGStream();},/**
         * get layer canvas
         * @method
         * @memberof Kinetic.BaseLayer.prototype
         */getCanvas:function getCanvas(){return this.canvas;},/**
         * get layer hit canvas
         * @method
         * @memberof Kinetic.BaseLayer.prototype
         */getHitCanvas:function getHitCanvas(){return this.hitCanvas;},/**
         * get layer canvas context
         * @method
         * @memberof Kinetic.BaseLayer.prototype
         */getContext:function getContext(){return this.getCanvas().getContext();},/**
         * clear scene and hit canvas contexts tied to the layer
         * @method
         * @memberof Kinetic.BaseLayer.prototype
         * @param {Object} [bounds]
         * @param {Number} [bounds.x]
         * @param {Number} [bounds.y]
         * @param {Number} [bounds.width]
         * @param {Number} [bounds.height]
         * @example
         * layer.clear();<br>
         * layer.clear(0, 0, 100, 100);
         */clear:function clear(bounds){this.getContext().clear(bounds);this.getHitCanvas().getContext().clear(bounds);return this;},// extend Node.prototype.setZIndex
setZIndex:function setZIndex(index){Kinetic$1.Node.prototype.setZIndex.call(this,index);var stage=this.getStage();if(stage){stage.content.removeChild(this.getCanvas()._canvas);if(index<stage.getChildren().length-1){stage.content.insertBefore(this.getCanvas()._canvas,stage.getChildren()[index+1].getCanvas()._canvas);}else {stage.content.appendChild(this.getCanvas()._canvas);}}return this;},// extend Node.prototype.moveToTop
moveToTop:function moveToTop(){Kinetic$1.Node.prototype.moveToTop.call(this);var stage=this.getStage();if(stage){stage.content.removeChild(this.getCanvas()._canvas);stage.content.appendChild(this.getCanvas()._canvas);}},// extend Node.prototype.moveUp
moveUp:function moveUp(){if(Kinetic$1.Node.prototype.moveUp.call(this)){var stage=this.getStage();if(stage){stage.content.removeChild(this.getCanvas()._canvas);if(this.index<stage.getChildren().length-1){stage.content.insertBefore(this.getCanvas()._canvas,stage.getChildren()[this.index+1].getCanvas()._canvas);}else {stage.content.appendChild(this.getCanvas()._canvas);}}}},// extend Node.prototype.moveDown
moveDown:function moveDown(){if(Kinetic$1.Node.prototype.moveDown.call(this)){var stage=this.getStage();if(stage){var children=stage.getChildren();stage.content.removeChild(this.getCanvas()._canvas);stage.content.insertBefore(this.getCanvas()._canvas,children[this.index+1].getCanvas()._canvas);}}},// extend Node.prototype.moveToBottom
moveToBottom:function moveToBottom(){if(Kinetic$1.Node.prototype.moveToBottom.call(this)){var stage=this.getStage();if(stage){var children=stage.getChildren();stage.content.removeChild(this.getCanvas()._canvas);stage.content.insertBefore(this.getCanvas()._canvas,children[1].getCanvas()._canvas);}}},getLayer:function getLayer(){return this;},remove:function remove(){var _canvas=this.getCanvas()._canvas;Kinetic$1.Node.prototype.remove.call(this);if(_canvas&&_canvas.parentNode&&Kinetic$1.Util._isInDocument(_canvas)){_canvas.parentNode.removeChild(_canvas);}return this;},getStage:function getStage(){return this.parent;}});Kinetic$1.Util.extend(Kinetic$1.BaseLayer,Kinetic$1.Container);// add getters and setters
Kinetic$1.Factory.addGetterSetter(Kinetic$1.BaseLayer,'clearBeforeDraw',true);/**
     * get/set clearBeforeDraw flag which determines if the layer is cleared or not
     *  before drawing
     * @name clearBeforeDraw
     * @method
     * @memberof Kinetic.BaseLayer.prototype
     * @param {Boolean} clearBeforeDraw
     * @returns {Boolean}
     * @example
     * // get clearBeforeDraw flag<br>
     * var clearBeforeDraw = layer.clearBeforeDraw();<br><br>
     *
     * // disable clear before draw<br>
     * layer.clearBeforeDraw(false);<br><br>
     *
     * // enable clear before draw<br>
     * layer.clearBeforeDraw(true);
     */Kinetic$1.Collection.mapMethods(Kinetic$1.BaseLayer);})();(function(){// constants
var HASH='#',BEFORE_DRAW='beforeDraw',DRAW='draw',/*
         * 2 - 3 - 4
         * |       |
         * 1 - 0   5
         *         |
         * 8 - 7 - 6     
         */INTERSECTION_OFFSETS=[{x:0,y:0},// 0
{x:-1,y:0},// 1
{x:-1,y:-1},// 2
{x:0,y:-1},// 3
{x:1,y:-1},// 4
{x:1,y:0},// 5
{x:1,y:1},// 6
{x:0,y:1},// 7
{x:-1,y:1}// 8
],INTERSECTION_OFFSETS_LEN=INTERSECTION_OFFSETS.length;Kinetic$1.Util.addMethods(Kinetic$1.Layer,{____init:function ____init(config){this.nodeType='Layer';this.canvas=new Kinetic$1.SceneCanvas();this.hitCanvas=new Kinetic$1.HitCanvas();// call super constructor
Kinetic$1.BaseLayer.call(this,config);},_setCanvasSize:function _setCanvasSize(width,height){this.canvas.setSize(width,height);this.hitCanvas.setSize(width,height);},_validateAdd:function _validateAdd(child){var type=child.getType();if(type!=='Group'&&type!=='Shape'){Kinetic$1.Util.error('You may only add groups and shapes to a layer.');}},/**
         * get visible intersection shape. This is the preferred
         * method for determining if a point intersects a shape or not
         * @method
         * @memberof Kinetic.Layer.prototype
         * @param {Object} pos
         * @param {Number} pos.x
         * @param {Number} pos.y
         * @returns {Kinetic.Shape}
         */getIntersection:function getIntersection(pos){var obj,i,intersectionOffset,shape;if(this.hitGraphEnabled()&&this.isVisible()){for(i=0;i<INTERSECTION_OFFSETS_LEN;i++){intersectionOffset=INTERSECTION_OFFSETS[i];obj=this._getIntersection({x:pos.x+intersectionOffset.x,y:pos.y+intersectionOffset.y});shape=obj.shape;if(shape){return shape;}else if(!obj.antialiased){return null;}}}else {return null;}},_getIntersection:function _getIntersection(pos){var p=this.hitCanvas.context._context.getImageData(pos.x,pos.y,1,1).data,p3=p[3],colorKey,shape;// fully opaque pixel
if(p3===255){colorKey=Kinetic$1.Util._rgbToHex(p[0],p[1],p[2]);shape=Kinetic$1.shapes[HASH+colorKey];return {shape:shape};}// antialiased pixel
else if(p3>0){return {antialiased:true};}// empty pixel
else {return {};}},drawScene:function drawScene(can,top){var layer=this.getLayer(),canvas=can||layer&&layer.getCanvas();this._fire(BEFORE_DRAW,{node:this});if(this.getClearBeforeDraw()){canvas.getContext().clear();}Kinetic$1.Container.prototype.drawScene.call(this,canvas,top);this._fire(DRAW,{node:this});return this;},// the apply transform method is handled by the Layer and FastLayer class
// because it is up to the layer to decide if an absolute or relative transform
// should be used
_applyTransform:function _applyTransform(shape,context,top){var m=shape.getAbsoluteTransform(top).getMatrix();context.transform(m[0],m[1],m[2],m[3],m[4],m[5]);},drawHit:function drawHit(can,top){var layer=this.getLayer(),canvas=can||layer&&layer.hitCanvas;if(layer&&layer.getClearBeforeDraw()){layer.getHitCanvas().getContext().clear();}Kinetic$1.Container.prototype.drawHit.call(this,canvas,top);return this;},/**
         * clear scene and hit canvas contexts tied to the layer
         * @method
         * @memberof Kinetic.Layer.prototype
         * @param {Object} [bounds]
         * @param {Number} [bounds.x]
         * @param {Number} [bounds.y]
         * @param {Number} [bounds.width]
         * @param {Number} [bounds.height]
         * @example
         * layer.clear();<br>
         * layer.clear(0, 0, 100, 100);
         */clear:function clear(bounds){this.getContext().clear(bounds);this.getHitCanvas().getContext().clear(bounds);return this;},// extend Node.prototype.setVisible
setVisible:function setVisible(visible){Kinetic$1.Node.prototype.setVisible.call(this,visible);if(visible){this.getCanvas()._canvas.style.display='block';this.hitCanvas._canvas.style.display='block';}else {this.getCanvas()._canvas.style.display='none';this.hitCanvas._canvas.style.display='none';}return this;},/**
         * enable hit graph
         * @name enableHitGraph
         * @method
         * @memberof Kinetic.Layer.prototype
         * @returns {Node}
         */enableHitGraph:function enableHitGraph(){this.setHitGraphEnabled(true);return this;},/**
         * disable hit graph
         * @name enableHitGraph
         * @method
         * @memberof Kinetic.Layer.prototype
         * @returns {Node}
         */disableHitGraph:function disableHitGraph(){this.setHitGraphEnabled(false);return this;}});Kinetic$1.Util.extend(Kinetic$1.Layer,Kinetic$1.BaseLayer);Kinetic$1.Factory.addGetterSetter(Kinetic$1.Layer,'hitGraphEnabled',true);/**
     * get/set hitGraphEnabled flag.  Disabling the hit graph will greatly increase
     *  draw performance because the hit graph will not be redrawn each time the layer is
     *  drawn.  This, however, also disables mouse/touch event detection
     * @name hitGraphEnabled
     * @method
     * @memberof Kinetic.Layer.prototype
     * @param {Boolean} enabled
     * @returns {Boolean}
     * @example
     * // get hitGraphEnabled flag<br>
     * var hitGraphEnabled = layer.hitGraphEnabled();<br><br>
     *
     * // disable hit graph<br>
     * layer.hitGraphEnabled(false);<br><br>
     *
     * // enable hit graph<br>
     * layer.hitGraphEnabled(true);
     */Kinetic$1.Collection.mapMethods(Kinetic$1.Layer);})();(function(){// constants
Kinetic$1.Util.addMethods(Kinetic$1.FastLayer,{____init:function ____init(config){this.nodeType='Layer';this.canvas=new Kinetic$1.SceneCanvas();// call super constructor
Kinetic$1.BaseLayer.call(this,config);},_validateAdd:function _validateAdd(child){var type=child.getType();if(type!=='Shape'){Kinetic$1.Util.error('You may only add shapes to a fast layer.');}},_setCanvasSize:function _setCanvasSize(width,height){this.canvas.setSize(width,height);},hitGraphEnabled:function hitGraphEnabled(){return false;},getIntersection:function getIntersection(){return null;},drawScene:function drawScene(can){var layer=this.getLayer(),canvas=can||layer&&layer.getCanvas();if(this.getClearBeforeDraw()){canvas.getContext().clear();}Kinetic$1.Container.prototype.drawScene.call(this,canvas);return this;},// the apply transform method is handled by the Layer and FastLayer class
// because it is up to the layer to decide if an absolute or relative transform
// should be used
_applyTransform:function _applyTransform(shape,context,top){if(!top||top._id!==this._id){var m=shape.getTransform().getMatrix();context.transform(m[0],m[1],m[2],m[3],m[4],m[5]);}},draw:function draw(){this.drawScene();return this;},/**
         * clear scene and hit canvas contexts tied to the layer
         * @method
         * @memberof Kinetic.FastLayer.prototype
         * @param {Object} [bounds]
         * @param {Number} [bounds.x]
         * @param {Number} [bounds.y]
         * @param {Number} [bounds.width]
         * @param {Number} [bounds.height]
         * @example
         * layer.clear();<br>
         * layer.clear(0, 0, 100, 100);
         */clear:function clear(bounds){this.getContext().clear(bounds);return this;},// extend Node.prototype.setVisible
setVisible:function setVisible(visible){Kinetic$1.Node.prototype.setVisible.call(this,visible);if(visible){this.getCanvas()._canvas.style.display='block';}else {this.getCanvas()._canvas.style.display='none';}return this;}});Kinetic$1.Util.extend(Kinetic$1.FastLayer,Kinetic$1.BaseLayer);Kinetic$1.Collection.mapMethods(Kinetic$1.FastLayer);})();(function(){Kinetic$1.Util.addMethods(Kinetic$1.Group,{___init:function ___init(config){this.nodeType='Group';// call super constructor
Kinetic$1.Container.call(this,config);},_validateAdd:function _validateAdd(child){var type=child.getType();if(type!=='Group'&&type!=='Shape'){Kinetic$1.Util.error('You may only add groups and shapes to groups.');}}});Kinetic$1.Util.extend(Kinetic$1.Group,Kinetic$1.Container);Kinetic$1.Collection.mapMethods(Kinetic$1.Group);})();(function(){/**
     * Rect constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} [config.cornerRadius]
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var rect = new Kinetic.Rect({<br>
     *   width: 100,<br>
     *   height: 50,<br>
     *   fill: 'red',<br>
     *   stroke: 'black',<br>
     *   strokeWidth: 5<br>
     * });
     */Kinetic$1.Rect=function(config){this.___init(config);};Kinetic$1.Rect.prototype={___init:function ___init(config){Kinetic$1.Shape.call(this,config);this.className='Rect';this.sceneFunc(this._sceneFunc);},_sceneFunc:function _sceneFunc(context){var cornerRadius=this.getCornerRadius(),width=this.getWidth(),height=this.getHeight();context.beginPath();if(!cornerRadius){// simple rect - don't bother doing all that complicated maths stuff.
context.rect(0,0,width,height);}else {// arcTo would be nicer, but browser support is patchy (Opera)
context.moveTo(cornerRadius,0);context.lineTo(width-cornerRadius,0);context.arc(width-cornerRadius,cornerRadius,cornerRadius,Math.PI*3/2,0,false);context.lineTo(width,height-cornerRadius);context.arc(width-cornerRadius,height-cornerRadius,cornerRadius,0,Math.PI/2,false);context.lineTo(cornerRadius,height);context.arc(cornerRadius,height-cornerRadius,cornerRadius,Math.PI/2,Math.PI,false);context.lineTo(0,cornerRadius);context.arc(cornerRadius,cornerRadius,cornerRadius,Math.PI,Math.PI*3/2,false);}context.closePath();context.fillStrokeShape(this);}};Kinetic$1.Util.extend(Kinetic$1.Rect,Kinetic$1.Shape);Kinetic$1.Factory.addGetterSetter(Kinetic$1.Rect,'cornerRadius',0);/**
     * get/set corner radius
     * @name cornerRadius
     * @method
     * @memberof Kinetic.Rect.prototype
     * @param {Number} cornerRadius
     * @returns {Number}
     * @example
     * // get corner radius<br>
     * var cornerRadius = rect.cornerRadius();<br><br>
     * 
     * // set corner radius<br>
     * rect.cornerRadius(10);
     */Kinetic$1.Collection.mapMethods(Kinetic$1.Rect);})();(function(){// the 0.0001 offset fixes a bug in Chrome 27
var PIx2=Math.PI*2-0.0001,CIRCLE='Circle';/**
     * Circle constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} config.radius
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * // create circle
     * var circle = new Kinetic.Circle({<br>
     *   radius: 40,<br>
     *   fill: 'red',<br>
     *   stroke: 'black'<br>
     *   strokeWidth: 5<br>
     * });
     */Kinetic$1.Circle=function(config){this.___init(config);};Kinetic$1.Circle.prototype={___init:function ___init(config){// call super constructor
Kinetic$1.Shape.call(this,config);this.className=CIRCLE;this.sceneFunc(this._sceneFunc);},_sceneFunc:function _sceneFunc(context){context.beginPath();context.arc(0,0,this.getRadius(),0,PIx2,false);context.closePath();context.fillStrokeShape(this);},// implements Shape.prototype.getWidth()
getWidth:function getWidth(){return this.getRadius()*2;},// implements Shape.prototype.getHeight()
getHeight:function getHeight(){return this.getRadius()*2;},// implements Shape.prototype.setWidth()
setWidth:function setWidth(width){Kinetic$1.Node.prototype.setWidth.call(this,width);this.setRadius(width/2);},// implements Shape.prototype.setHeight()
setHeight:function setHeight(height){Kinetic$1.Node.prototype.setHeight.call(this,height);this.setRadius(height/2);}};Kinetic$1.Util.extend(Kinetic$1.Circle,Kinetic$1.Shape);// add getters setters
Kinetic$1.Factory.addGetterSetter(Kinetic$1.Circle,'radius',0);/**
     * get/set radius
     * @name radius
     * @method
     * @memberof Kinetic.Circle.prototype
     * @param {Number} radius
     * @returns {Number}
     * @example
     * // get radius<br>
     * var radius = circle.radius();<br><br>
     *
     * // set radius<br>
     * circle.radius(10);<br>
     */Kinetic$1.Collection.mapMethods(Kinetic$1.Circle);})();(function(){// the 0.0001 offset fixes a bug in Chrome 27
var PIx2=Math.PI*2-0.0001,ELLIPSE='Ellipse';/**
     * Ellipse constructor
     * @constructor
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Object} config.radius defines x and y radius
     * @@ShapeParams
     * @@NodeParams
     * @example
     * var ellipse = new Kinetic.Ellipse({<br>
     *   radius : {<br>
     *     x : 50,<br>
     *     y : 50<br>
     *   },<br>
     *   fill: 'red'<br>
     * });
     */Kinetic$1.Ellipse=function(config){this.___init(config);};Kinetic$1.Ellipse.prototype={___init:function ___init(config){// call super constructor
Kinetic$1.Shape.call(this,config);this.className=ELLIPSE;this.sceneFunc(this._sceneFunc);},_sceneFunc:function _sceneFunc(context){var r=this.getRadius(),rx=r.x,ry=r.y;context.beginPath();context.save();if(rx!==ry){context.scale(1,ry/rx);}context.arc(0,0,rx,0,PIx2,false);context.restore();context.closePath();context.fillStrokeShape(this);},// implements Shape.prototype.getWidth()
getWidth:function getWidth(){return this.getRadius().x*2;},// implements Shape.prototype.getHeight()
getHeight:function getHeight(){return this.getRadius().y*2;},// implements Shape.prototype.setWidth()
setWidth:function setWidth(width){Kinetic$1.Node.prototype.setWidth.call(this,width);this.setRadius({x:width/2});},// implements Shape.prototype.setHeight()
setHeight:function setHeight(height){Kinetic$1.Node.prototype.setHeight.call(this,height);this.setRadius({y:height/2});}};Kinetic$1.Util.extend(Kinetic$1.Ellipse,Kinetic$1.Shape);// add getters setters
Kinetic$1.Factory.addComponentsGetterSetter(Kinetic$1.Ellipse,'radius',['x','y']);/**
     * get/set radius
     * @name radius
     * @method
     * @memberof Kinetic.Ellipse.prototype
     * @param {Object} radius
     * @param {Number} radius.x
     * @param {Number} radius.y
     * @returns {Object}
     * @example
     * // get radius<br>
     * var radius = ellipse.radius();<br><br>
     * 
     * // set radius<br>
     * ellipse.radius({<br>
     *   x: 200,<br>
     *   y: 100<br>
     * });
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Ellipse,'radiusX',0);/**
     * get/set radius x
     * @name radiusX
     * @method
     * @memberof Kinetic.Ellipse.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get radius x<br>
     * var radiusX = ellipse.radiusX();<br><br>
     * 
     * // set radius x<br>
     * ellipse.radiusX(200);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Ellipse,'radiusY',0);/**
     * get/set radius y
     * @name radiusY
     * @method
     * @memberof Kinetic.Ellipse.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get radius y<br>
     * var radiusY = ellipse.radiusY();<br><br>
     * 
     * // set radius y<br>
     * ellipse.radiusY(200);
     */Kinetic$1.Collection.mapMethods(Kinetic$1.Ellipse);})();(function(){// the 0.0001 offset fixes a bug in Chrome 27
var PIx2=Math.PI*2-0.0001;/**
     * Ring constructor
     * @constructor
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} config.innerRadius
     * @param {Number} config.outerRadius
     * @param {Boolean} [config.clockwise]
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var ring = new Kinetic.Ring({<br>
     *   innerRadius: 40,<br>
     *   outerRadius: 80,<br>
     *   fill: 'red',<br>
     *   stroke: 'black',<br>
     *   strokeWidth: 5<br>
     * });
     */Kinetic$1.Ring=function(config){this.___init(config);};Kinetic$1.Ring.prototype={___init:function ___init(config){// call super constructor
Kinetic$1.Shape.call(this,config);this.className='Ring';this.sceneFunc(this._sceneFunc);},_sceneFunc:function _sceneFunc(context){context.beginPath();context.arc(0,0,this.getInnerRadius(),0,PIx2,false);context.moveTo(this.getOuterRadius(),0);context.arc(0,0,this.getOuterRadius(),PIx2,0,true);context.closePath();context.fillStrokeShape(this);},// implements Shape.prototype.getWidth()
getWidth:function getWidth(){return this.getOuterRadius()*2;},// implements Shape.prototype.getHeight()
getHeight:function getHeight(){return this.getOuterRadius()*2;},// implements Shape.prototype.setWidth()
setWidth:function setWidth(width){Kinetic$1.Node.prototype.setWidth.call(this,width);this.setOuterRadius(width/2);},// implements Shape.prototype.setHeight()
setHeight:function setHeight(height){Kinetic$1.Node.prototype.setHeight.call(this,height);this.setOuterRadius(height/2);}};Kinetic$1.Util.extend(Kinetic$1.Ring,Kinetic$1.Shape);// add getters setters
Kinetic$1.Factory.addGetterSetter(Kinetic$1.Ring,'innerRadius',0);/**
     * get/set innerRadius
     * @name innerRadius
     * @method
     * @memberof Kinetic.Ring.prototype
     * @param {Number} innerRadius
     * @returns {Number}
     * @example
     * // get inner radius<br>
     * var innerRadius = ring.innerRadius();<br><br>
     *
     * // set inner radius<br>
     * ring.innerRadius(20);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Ring,'outerRadius',0);/**
     * get/set outerRadius
     * @name outerRadius
     * @method
     * @memberof Kinetic.Ring.prototype
     * @param {Number} outerRadius
     * @returns {Number}
     * @example
     * // get outer radius<br>
     * var outerRadius = ring.outerRadius();<br><br>
     *
     * // set outer radius<br>
     * ring.outerRadius(20);
     */Kinetic$1.Collection.mapMethods(Kinetic$1.Ring);})();(function(){/**
     * Wedge constructor
     * @constructor
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} config.angle in degrees
     * @param {Number} config.radius
     * @param {Boolean} [config.clockwise]
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * // draw a wedge that's pointing downwards<br>
     * var wedge = new Kinetic.Wedge({<br>
     *   radius: 40,<br>
     *   fill: 'red',<br>
     *   stroke: 'black'<br>
     *   strokeWidth: 5,<br>
     *   angleDeg: 60,<br>
     *   rotationDeg: -120<br>
     * });
     */Kinetic$1.Wedge=function(config){this.___init(config);};Kinetic$1.Wedge.prototype={___init:function ___init(config){// call super constructor
Kinetic$1.Shape.call(this,config);this.className='Wedge';this.sceneFunc(this._sceneFunc);},_sceneFunc:function _sceneFunc(context){context.beginPath();context.arc(0,0,this.getRadius(),0,Kinetic$1.getAngle(this.getAngle()),this.getClockwise());context.lineTo(0,0);context.closePath();context.fillStrokeShape(this);}};Kinetic$1.Util.extend(Kinetic$1.Wedge,Kinetic$1.Shape);// add getters setters
Kinetic$1.Factory.addGetterSetter(Kinetic$1.Wedge,'radius',0);/**
     * get/set radius
     * @name radius
     * @method
     * @memberof Kinetic.Wedge.prototype
     * @param {Number} radius
     * @returns {Number}
     * @example
     * // get radius<br>
     * var radius = wedge.radius();<br><br>
     *
     * // set radius<br>
     * wedge.radius(10);<br>
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Wedge,'angle',0);/**
     * get/set angle in degrees
     * @name angle
     * @method
     * @memberof Kinetic.Wedge.prototype
     * @param {Number} angle
     * @returns {Number}
     * @example
     * // get angle<br>
     * var angle = wedge.angle();<br><br>
     *
     * // set angle<br>
     * wedge.angle(20);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Wedge,'clockwise',false);/**
     * get/set clockwise flag
     * @name clockwise
     * @method
     * @memberof Kinetic.Wedge.prototype
     * @param {Number} clockwise
     * @returns {Number}
     * @example
     * // get clockwise flag<br>
     * var clockwise = wedge.clockwise();<br><br>
     *
     * // draw wedge counter-clockwise<br>
     * wedge.clockwise(false);<br><br>
     *
     * // draw wedge clockwise<br>
     * wedge.clockwise(true);
     */Kinetic$1.Factory.backCompat(Kinetic$1.Wedge,{angleDeg:'angle',getAngleDeg:'getAngle',setAngleDeg:'setAngle'});Kinetic$1.Collection.mapMethods(Kinetic$1.Wedge);})();(function(){/**
     * Arc constructor
     * @constructor
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} config.angle in degrees
     * @param {Number} config.innerRadius
     * @param {Number} config.outerRadius
     * @param {Boolean} [config.clockwise]
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * // draw a Arc that's pointing downwards<br>
     * var arc = new Kinetic.Arc({<br>
     *   innerRadius: 40,<br>
     *   outerRadius: 80,<br>
     *   fill: 'red',<br>
     *   stroke: 'black'<br>
     *   strokeWidth: 5,<br>
     *   angle: 60,<br>
     *   rotationDeg: -120<br>
     * });
     */Kinetic$1.Arc=function(config){this.___init(config);};Kinetic$1.Arc.prototype={___init:function ___init(config){// call super constructor
Kinetic$1.Shape.call(this,config);this.className='Arc';this.sceneFunc(this._sceneFunc);},_sceneFunc:function _sceneFunc(context){var angle=Kinetic$1.getAngle(this.angle()),clockwise=this.clockwise();context.beginPath();context.arc(0,0,this.getOuterRadius(),0,angle,clockwise);context.arc(0,0,this.getInnerRadius(),angle,0,!clockwise);context.closePath();context.fillStrokeShape(this);}};Kinetic$1.Util.extend(Kinetic$1.Arc,Kinetic$1.Shape);// add getters setters
Kinetic$1.Factory.addGetterSetter(Kinetic$1.Arc,'innerRadius',0);/**
     * get/set innerRadius
     * @name innerRadius
     * @method
     * @memberof Kinetic.Arc.prototype
     * @param {Number} innerRadius
     * @returns {Number}
     * @example
     * // get inner radius
     * var innerRadius = arc.innerRadius();
     *
     * // set inner radius
     * arc.innerRadius(20);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Arc,'outerRadius',0);/**
     * get/set outerRadius
     * @name outerRadius
     * @method
     * @memberof Kinetic.Arc.prototype
     * @param {Number} outerRadius
     * @returns {Number}
     * @example
     * // get outer radius<br>
     * var outerRadius = arc.outerRadius();<br><br>
     *
     * // set outer radius<br>
     * arc.outerRadius(20);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Arc,'angle',0);/**
     * get/set angle in degrees
     * @name angle
     * @method
     * @memberof Kinetic.Arc.prototype
     * @param {Number} angle
     * @returns {Number}
     * @example
     * // get angle<br>
     * var angle = arc.angle();<br><br>
     *
     * // set angle<br>
     * arc.angle(20);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Arc,'clockwise',false);/**
     * get/set clockwise flag
     * @name clockwise
     * @method
     * @memberof Kinetic.Arc.prototype
     * @param {Boolean} clockwise
     * @returns {Boolean}
     * @example
     * // get clockwise flag<br>
     * var clockwise = arc.clockwise();<br><br>
     *
     * // draw arc counter-clockwise<br>
     * arc.clockwise(false);<br><br>
     *
     * // draw arc clockwise<br>
     * arc.clockwise(true);
     */Kinetic$1.Collection.mapMethods(Kinetic$1.Arc);})();(function(){// CONSTANTS
var IMAGE='Image';/**
     * Image constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {ImageObject} config.image
     * @param {Object} [config.crop]
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var imageObj = new Image();<br>
     * imageObj.onload = function() {<br>
     *   var image = new Kinetic.Image({<br>
     *     x: 200,<br>
     *     y: 50,<br>
     *     image: imageObj,<br>
     *     width: 100,<br>
     *     height: 100<br>
     *   });<br>
     * };<br>
     * imageObj.src = '/path/to/image.jpg'
     */Kinetic$1.Image=function(config){this.___init(config);};Kinetic$1.Image.prototype={___init:function ___init(config){// call super constructor
Kinetic$1.Shape.call(this,config);this.className=IMAGE;this.sceneFunc(this._sceneFunc);this.hitFunc(this._hitFunc);},_useBufferCanvas:function _useBufferCanvas(){return (this.hasShadow()||this.getAbsoluteOpacity()!==1)&&this.hasStroke();},_sceneFunc:function _sceneFunc(context){var width=this.getWidth(),height=this.getHeight(),image=this.getImage(),crop,cropWidth,cropHeight,params;if(image){crop=this.getCrop();cropWidth=crop.width;cropHeight=crop.height;if(cropWidth&&cropHeight){params=[image,crop.x,crop.y,cropWidth,cropHeight,0,0,width,height];}else {params=[image,0,0,width,height];}}context.beginPath();context.rect(0,0,width,height);context.closePath();context.fillStrokeShape(this);if(image){context.drawImage.apply(context,params);}},_hitFunc:function _hitFunc(context){var width=this.getWidth(),height=this.getHeight();context.beginPath();context.rect(0,0,width,height);context.closePath();context.fillStrokeShape(this);},getWidth:function getWidth(){var image=this.getImage();return this.attrs.width||(image?image.width:0);},getHeight:function getHeight(){var image=this.getImage();return this.attrs.height||(image?image.height:0);}};Kinetic$1.Util.extend(Kinetic$1.Image,Kinetic$1.Shape);// add getters setters
Kinetic$1.Factory.addGetterSetter(Kinetic$1.Image,'image');/**
     * set image
     * @name setImage
     * @method
     * @memberof Kinetic.Image.prototype
     * @param {ImageObject} image
     */ /**
     * get image
     * @name getImage
     * @method
     * @memberof Kinetic.Image.prototype
     * @returns {ImageObject}
     */Kinetic$1.Factory.addComponentsGetterSetter(Kinetic$1.Image,'crop',['x','y','width','height']);/**
     * get/set crop
     * @method
     * @name crop
     * @memberof Kinetic.Image.prototype
     * @param {Object} crop 
     * @param {Number} crop.x
     * @param {Number} crop.y
     * @param {Number} crop.width
     * @param {Number} crop.height
     * @returns {Object}
     * @example
     * // get crop<br>
     * var crop = image.crop();<br><br>
     *
     * // set crop<br>
     * image.crop({<br>
     *   x: 20,<br>
     *   y: 20,<br>
     *   width: 20,<br>
     *   height: 20<br>
     * });
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Image,'cropX',0);/**
     * get/set crop x
     * @method
     * @name cropX
     * @memberof Kinetic.Image.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get crop x<br>
     * var cropX = image.cropX();<br><br>
     *
     * // set crop x<br>
     * image.cropX(20);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Image,'cropY',0);/**
     * get/set crop y
     * @name cropY
     * @method
     * @memberof Kinetic.Image.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get crop y<br>
     * var cropY = image.cropY();<br><br>
     *
     * // set crop y<br>
     * image.cropY(20);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Image,'cropWidth',0);/**
     * get/set crop width
     * @name cropWidth
     * @method
     * @memberof Kinetic.Image.prototype
     * @param {Number} width
     * @returns {Number}
     * @example
     * // get crop width<br>
     * var cropWidth = image.cropWidth();<br><br>
     *
     * // set crop width<br>
     * image.cropWidth(20);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Image,'cropHeight',0);/**
     * get/set crop height
     * @name cropHeight
     * @method
     * @memberof Kinetic.Image.prototype
     * @param {Number} height
     * @returns {Number}
     * @example
     * // get crop height<br>
     * var cropHeight = image.cropHeight();<br><br>
     *
     * // set crop height<br>
     * image.cropHeight(20);
     */Kinetic$1.Collection.mapMethods(Kinetic$1.Image);})();(function(){// constants
var AUTO='auto',//CANVAS = 'canvas',
CENTER='center',CHANGE_KINETIC='Change.kinetic',CONTEXT_2D='2d',DASH='-',EMPTY_STRING='',LEFT='left',TEXT='text',TEXT_UPPER='Text',MIDDLE='middle',NORMAL='normal',PX_SPACE='px ',SPACE=' ',RIGHT='right',WORD='word',CHAR='char',NONE='none',ATTR_CHANGE_LIST=['fontFamily','fontSize','fontStyle','fontVariant','padding','align','lineHeight','text','width','height','wrap'],// cached variables
attrChangeListLen=ATTR_CHANGE_LIST.length,dummyContext=Kinetic$1.Util.createCanvasElement().getContext(CONTEXT_2D);/**
     * Text constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {String} [config.fontFamily] default is Arial
     * @param {Number} [config.fontSize] in pixels.  Default is 12
     * @param {String} [config.fontStyle] can be normal, bold, or italic.  Default is normal
     * @param {String} [config.fontVariant] can be normal or small-caps.  Default is normal
     * @param {String} config.text
     * @param {String} [config.align] can be left, center, or right
     * @param {Number} [config.padding]
     * @param {Number} [config.width] default is auto
     * @param {Number} [config.height] default is auto
     * @param {Number} [config.lineHeight] default is 1
     * @param {String} [config.wrap] can be word, char, or none. Default is word
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var text = new Kinetic.Text({<br>
     *   x: 10,<br>
     *   y: 15,<br>
     *   text: 'Simple Text',<br>
     *   fontSize: 30,<br>
     *   fontFamily: 'Calibri',<br>
     *   fill: 'green'<br>
     * });
     */Kinetic$1.Text=function(config){this.___init(config);};function _fillFunc(context){context.fillText(this.partialText,0,0);}function _strokeFunc(context){context.strokeText(this.partialText,0,0);}Kinetic$1.Text.prototype={___init:function ___init(config){var that=this;if(config.width===undefined){config.width=AUTO;}if(config.height===undefined){config.height=AUTO;}// call super constructor
Kinetic$1.Shape.call(this,config);this._fillFunc=_fillFunc;this._strokeFunc=_strokeFunc;this.className=TEXT_UPPER;// update text data for certain attr changes
for(var n=0;n<attrChangeListLen;n++){this.on(ATTR_CHANGE_LIST[n]+CHANGE_KINETIC,that._setTextData);}this._setTextData();this.sceneFunc(this._sceneFunc);this.hitFunc(this._hitFunc);},_sceneFunc:function _sceneFunc(context){var p=this.getPadding(),textHeight=this.getTextHeight(),lineHeightPx=this.getLineHeight()*textHeight,textArr=this.textArr,textArrLen=textArr.length,totalWidth=this.getWidth(),n;context.setAttr('font',this._getContextFont());context.setAttr('textBaseline',MIDDLE);context.setAttr('textAlign',LEFT);context.save();context.translate(p,0);context.translate(0,p+textHeight/2);// draw text lines
for(n=0;n<textArrLen;n++){var obj=textArr[n],text=obj.text,width=obj.width;// horizontal alignment
context.save();if(this.getAlign()===RIGHT){context.translate(totalWidth-width-p*2,0);}else if(this.getAlign()===CENTER){context.translate((totalWidth-width-p*2)/2,0);}this.partialText=text;context.fillStrokeShape(this);context.restore();context.translate(0,lineHeightPx);}context.restore();},_hitFunc:function _hitFunc(context){var width=this.getWidth(),height=this.getHeight();context.beginPath();context.rect(0,0,width,height);context.closePath();context.fillStrokeShape(this);},setText:function setText(text){var str=Kinetic$1.Util._isString(text)?text:text.toString();this._setAttr(TEXT,str);return this;},/**
         * get width of text area, which includes padding
         * @method
         * @memberof Kinetic.Text.prototype
         * @returns {Number}
         */getWidth:function getWidth(){return this.attrs.width===AUTO?this.getTextWidth()+this.getPadding()*2:this.attrs.width;},/**
         * get the height of the text area, which takes into account multi-line text, line heights, and padding
         * @method
         * @memberof Kinetic.Text.prototype
         * @returns {Number}
         */getHeight:function getHeight(){return this.attrs.height===AUTO?this.getTextHeight()*this.textArr.length*this.getLineHeight()+this.getPadding()*2:this.attrs.height;},/**
         * get text width
         * @method
         * @memberof Kinetic.Text.prototype
         * @returns {Number}
         */getTextWidth:function getTextWidth(){return this.textWidth;},/**
         * get text height
         * @method
         * @memberof Kinetic.Text.prototype
         * @returns {Number}
         */getTextHeight:function getTextHeight(){return this.textHeight;},_getTextSize:function _getTextSize(text){var _context=dummyContext,fontSize=this.getFontSize(),metrics;_context.save();_context.font=this._getContextFont();metrics=_context.measureText(text);_context.restore();return {width:metrics.width,height:parseInt(fontSize,10)};},_getContextFont:function _getContextFont(){return this.getFontStyle()+SPACE+this.getFontVariant()+SPACE+this.getFontSize()+PX_SPACE+this.getFontFamily();},_addTextLine:function _addTextLine(line,width){return this.textArr.push({text:line,width:width});},_getTextWidth:function _getTextWidth(text){return dummyContext.measureText(text).width;},_setTextData:function _setTextData(){var lines=this.getText().split('\n'),fontSize=+this.getFontSize(),textWidth=0,lineHeightPx=this.getLineHeight()*fontSize,width=this.attrs.width,height=this.attrs.height,fixedWidth=width!==AUTO,fixedHeight=height!==AUTO,padding=this.getPadding(),maxWidth=width-padding*2,maxHeightPx=height-padding*2,currentHeightPx=0,wrap=this.getWrap(),shouldWrap=wrap!==NONE,wrapAtWord=wrap!==CHAR&&shouldWrap;this.textArr=[];dummyContext.save();dummyContext.font=this._getContextFont();for(var i=0,max=lines.length;i<max;++i){var line=lines[i],lineWidth=this._getTextWidth(line);if(fixedWidth&&lineWidth>maxWidth){/*
                     * if width is fixed and line does not fit entirely
                     * break the line into multiple fitting lines
                     */while(line.length>0){/*
                         * use binary search to find the longest substring that
                         * that would fit in the specified width
                         */var low=0,high=line.length,match='',matchWidth=0;while(low<high){var mid=low+high>>>1,substr=line.slice(0,mid+1),substrWidth=this._getTextWidth(substr);if(substrWidth<=maxWidth){low=mid+1;match=substr;matchWidth=substrWidth;}else {high=mid;}}/*
                         * 'low' is now the index of the substring end
                         * 'match' is the substring
                         * 'matchWidth' is the substring width in px
                         */if(match){// a fitting substring was found
if(wrapAtWord){// try to find a space or dash where wrapping could be done
var wrapIndex=Math.max(match.lastIndexOf(SPACE),match.lastIndexOf(DASH))+1;if(wrapIndex>0){// re-cut the substring found at the space/dash position
low=wrapIndex;match=match.slice(0,low);matchWidth=this._getTextWidth(match);}}this._addTextLine(match,matchWidth);textWidth=Math.max(textWidth,matchWidth);currentHeightPx+=lineHeightPx;if(!shouldWrap||fixedHeight&&currentHeightPx+lineHeightPx>maxHeightPx){/*
                                 * stop wrapping if wrapping is disabled or if adding
                                 * one more line would overflow the fixed height
                                 */break;}line=line.slice(low);if(line.length>0){// Check if the remaining text would fit on one line
lineWidth=this._getTextWidth(line);if(lineWidth<=maxWidth){// if it does, add the line and break out of the loop
this._addTextLine(line,lineWidth);currentHeightPx+=lineHeightPx;textWidth=Math.max(textWidth,lineWidth);break;}}}else {// not even one character could fit in the element, abort
break;}}}else {// element width is automatically adjusted to max line width
this._addTextLine(line,lineWidth);currentHeightPx+=lineHeightPx;textWidth=Math.max(textWidth,lineWidth);}// if element height is fixed, abort if adding one more line would overflow
if(fixedHeight&&currentHeightPx+lineHeightPx>maxHeightPx){break;}}dummyContext.restore();this.textHeight=fontSize;this.textWidth=textWidth;}};Kinetic$1.Util.extend(Kinetic$1.Text,Kinetic$1.Shape);// add getters setters
Kinetic$1.Factory.addGetterSetter(Kinetic$1.Text,'fontFamily','Arial');/**
     * get/set font family
     * @name fontFamily
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {String} fontFamily
     * @returns {String}
     * @example
     * // get font family<br>
     * var fontFamily = text.fontFamily();<br><br><br>
     *
     * // set font family<br>
     * text.fontFamily('Arial');
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Text,'fontSize',12);/**
     * get/set font size in pixels
     * @name fontSize
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {Number} fontSize
     * @returns {Number}
     * @example
     * // get font size<br>
     * var fontSize = text.fontSize();<br><br>
     *
     * // set font size to 22px<br>
     * text.fontSize(22);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Text,'fontStyle',NORMAL);/**
     * set font style.  Can be 'normal', 'italic', or 'bold'.  'normal' is the default.
     * @name fontStyle
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {String} fontStyle
     * @returns {String}
     * @example
     * // get font style<br>
     * var fontStyle = text.fontStyle();<br><br>
     *
     * // set font style<br>
     * text.fontStyle('bold');
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Text,'fontVariant',NORMAL);/**
     * set font variant.  Can be 'normal' or 'small-caps'.  'normal' is the default.
     * @name fontVariant
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {String} fontVariant
     * @returns {String}
     * @example
     * // get font variant<br>
     * var fontVariant = text.fontVariant();<br><br>
     *
     * // set font variant<br>
     * text.fontVariant('small-caps');
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Text,'padding',0);/**
     * set padding
     * @name padding
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {Number} padding
     * @returns {Number}
     * @example
     * // get padding<br>
     * var padding = text.padding();<br><br>
     * 
     * // set padding to 10 pixels<br>
     * text.padding(10);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Text,'align',LEFT);/**
     * get/set horizontal align of text.  Can be 'left', 'center', or 'right'
     * @name align
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {String} align
     * @returns {String}
     * @example
     * // get text align<br>
     * var align = text.align();<br><br>
     *
     * // center text<br>
     * text.align('center');<br><br>
     *
     * // align text to right<br>
     * text.align('right');
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Text,'lineHeight',1);/**
     * get/set line height.  The default is 1.
     * @name lineHeight
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {Number} lineHeight
     * @returns {Number}
     * @example 
     * // get line height<br>
     * var lineHeight = text.lineHeight();<br><br><br>
     *
     * // set the line height<br>
     * text.lineHeight(2);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Text,'wrap',WORD);/**
     * get/set wrap.  Can be word, char, or none. Default is word.
     * @name wrap
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {String} wrap
     * @returns {String}
     * @example
     * // get wrap<br>
     * var wrap = text.wrap();<br><br>
     *
     * // set wrap<br>
     * text.wrap('word');
     */Kinetic$1.Factory.addGetter(Kinetic$1.Text,'text',EMPTY_STRING);Kinetic$1.Factory.addOverloadedGetterSetter(Kinetic$1.Text,'text');/**
     * get/set text
     * @name getText
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {String} text
     * @returns {String}
     * @example
     * // get text<br>
     * var text = text.text();<br><br>
     * 
     * // set text<br>
     * text.text('Hello world!');
     */Kinetic$1.Collection.mapMethods(Kinetic$1.Text);})();(function(){/**
     * Line constructor.&nbsp; Lines are defined by an array of points and
     *  a tension
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Array} config.points
     * @param {Number} [config.tension] Higher values will result in a more curvy line.  A value of 0 will result in no interpolation.
     *   The default is 0
     * @param {Boolean} [config.closed] defines whether or not the line shape is closed, creating a polygon or blob 
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var line = new Kinetic.Line({<br>
     *   x: 100,<br>
     *   y: 50,<br>
     *   points: [73, 70, 340, 23, 450, 60, 500, 20],<br>
     *   stroke: 'red',<br>
     *   tension: 1<br>
     * });
     */Kinetic$1.Line=function(config){this.___init(config);};Kinetic$1.Line.prototype={___init:function ___init(config){// call super constructor
Kinetic$1.Shape.call(this,config);this.className='Line';this.on('pointsChange.kinetic tensionChange.kinetic closedChange.kinetic',function(){this._clearCache('tensionPoints');});this.sceneFunc(this._sceneFunc);},_sceneFunc:function _sceneFunc(context){var points=this.getPoints(),length=points.length,tension=this.getTension(),closed=this.getClosed(),tp,len,n;context.beginPath();context.moveTo(points[0],points[1]);// tension
if(tension!==0&&length>4){tp=this.getTensionPoints();len=tp.length;n=closed?0:4;if(!closed){context.quadraticCurveTo(tp[0],tp[1],tp[2],tp[3]);}while(n<len-2){context.bezierCurveTo(tp[n++],tp[n++],tp[n++],tp[n++],tp[n++],tp[n++]);}if(!closed){context.quadraticCurveTo(tp[len-2],tp[len-1],points[length-2],points[length-1]);}}// no tension
else {for(n=2;n<length;n+=2){context.lineTo(points[n],points[n+1]);}}// closed e.g. polygons and blobs
if(closed){context.closePath();context.fillStrokeShape(this);}// open e.g. lines and splines
else {context.strokeShape(this);}},getTensionPoints:function getTensionPoints(){return this._getCache('tensionPoints',this._getTensionPoints);},_getTensionPoints:function _getTensionPoints(){if(this.getClosed()){return this._getTensionPointsClosed();}else {return Kinetic$1.Util._expandPoints(this.getPoints(),this.getTension());}},_getTensionPointsClosed:function _getTensionPointsClosed(){var p=this.getPoints(),len=p.length,tension=this.getTension(),util=Kinetic$1.Util,firstControlPoints=util._getControlPoints(p[len-2],p[len-1],p[0],p[1],p[2],p[3],tension),lastControlPoints=util._getControlPoints(p[len-4],p[len-3],p[len-2],p[len-1],p[0],p[1],tension),middle=Kinetic$1.Util._expandPoints(p,tension),tp=[firstControlPoints[2],firstControlPoints[3]].concat(middle).concat([lastControlPoints[0],lastControlPoints[1],p[len-2],p[len-1],lastControlPoints[2],lastControlPoints[3],firstControlPoints[0],firstControlPoints[1],p[0],p[1]]);return tp;}};Kinetic$1.Util.extend(Kinetic$1.Line,Kinetic$1.Shape);// add getters setters
Kinetic$1.Factory.addGetterSetter(Kinetic$1.Line,'closed',false);/**
     * get/set closed flag.  The default is false
     * @name closed
     * @method
     * @memberof Kinetic.Line.prototype
     * @param {Boolean} closed
     * @returns {Boolean}
     * @example
     * // get closed flag<br>
     * var closed = line.closed();<br><br>
     *
     * // close the shape<br>
     * line.closed(true);<br><br>
     *
     * // open the shape<br>
     * line.closed(false);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Line,'tension',0);/**
     * get/set tension
     * @name tension
     * @method
     * @memberof Kinetic.Line.prototype
     * @param {Number} Higher values will result in a more curvy line.  A value of 0 will result in no interpolation.
     *   The default is 0
     * @returns {Number}
     * @example
     * // get tension<br>
     * var tension = line.tension();<br><br>
     *
     * // set tension<br>
     * line.tension(3);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Line,'points');/**
     * get/set points array
     * @name points
     * @method
     * @memberof Kinetic.Line.prototype
     * @param {Array} points
     * @returns {Array}
     * @example
     * // get points<br>
     * var points = line.points();<br><br>
     *
     * // set points<br>
     * line.points([10, 20, 30, 40, 50, 60]);<br><br>
     *
     * // push a new point<br>
     * line.points(line.points().concat([70, 80]));
     */Kinetic$1.Collection.mapMethods(Kinetic$1.Line);})();(function(){/**
     * Sprite constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {String} config.animation animation key
     * @param {Object} config.animations animation map
     * @param {Integer} [config.frameIndex] animation frame index
     * @param {Image} config.image image object
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var imageObj = new Image();<br>
     * imageObj.onload = function() {<br>
     *   var sprite = new Kinetic.Sprite({<br>
     *     x: 200,<br>
     *     y: 100,<br>
     *     image: imageObj,<br>
     *     animation: 'standing',<br>
     *     animations: {<br>
     *       standing: [<br>
     *         // x, y, width, height (6 frames)<br>
     *         0, 0, 49, 109,<br>
     *         52, 0, 49, 109,<br>
     *         105, 0, 49, 109,<br>
     *         158, 0, 49, 109,<br>
     *         210, 0, 49, 109,<br>
     *         262, 0, 49, 109<br>
     *       ],<br>
     *       kicking: [<br>
     *         // x, y, width, height (6 frames)<br>
     *         0, 109, 45, 98,<br>
     *         45, 109, 45, 98,<br>
     *         95, 109, 63, 98,<br>
     *         156, 109, 70, 98,<br>
     *         229, 109, 60, 98,<br>
     *         287, 109, 41, 98<br>
     *       ]<br>          
     *     },<br>
     *     frameRate: 7,<br>
     *     frameIndex: 0<br>
     *   });<br>
     * };<br>
     * imageObj.src = '/path/to/image.jpg'
     */Kinetic$1.Sprite=function(config){this.___init(config);};Kinetic$1.Sprite.prototype={___init:function ___init(config){// call super constructor
Kinetic$1.Shape.call(this,config);this.className='Sprite';this.anim=new Kinetic$1.Animation();this.on('animationChange.kinetic',function(){// reset index when animation changes
this.frameIndex(0);});// smooth change for frameRate
this.on('frameRateChange.kinetic',function(){if(!this.anim.isRunning()){return;}clearInterval(this.interval);this._setInterval();});this.sceneFunc(this._sceneFunc);this.hitFunc(this._hitFunc);},_sceneFunc:function _sceneFunc(context){var anim=this.getAnimation(),index=this.frameIndex(),ix4=index*4,set=this.getAnimations()[anim],x=set[ix4+0],y=set[ix4+1],width=set[ix4+2],height=set[ix4+3],image=this.getImage();if(image){context.drawImage(image,x,y,width,height,0,0,width,height);}},_hitFunc:function _hitFunc(context){var anim=this.getAnimation(),index=this.frameIndex(),ix4=index*4,set=this.getAnimations()[anim],width=set[ix4+2],height=set[ix4+3];context.beginPath();context.rect(0,0,width,height);context.closePath();context.fillShape(this);},_useBufferCanvas:function _useBufferCanvas(){return (this.hasShadow()||this.getAbsoluteOpacity()!==1)&&this.hasStroke();},_setInterval:function _setInterval(){var that=this;this.interval=setInterval(function(){that._updateIndex();},1000/this.getFrameRate());},/**
         * start sprite animation
         * @method
         * @memberof Kinetic.Sprite.prototype
         */start:function start(){var layer=this.getLayer();/*
             * animation object has no executable function because
             *  the updates are done with a fixed FPS with the setInterval
             *  below.  The anim object only needs the layer reference for
             *  redraw
             */this.anim.setLayers(layer);this._setInterval();this.anim.start();},/**
         * stop sprite animation
         * @method
         * @memberof Kinetic.Sprite.prototype
         */stop:function stop(){this.anim.stop();clearInterval(this.interval);},/**
         * determine if animation of sprite is running or not.  returns true or false
         * @method
         * @memberof Kinetic.Animation.prototype
         * @returns {Boolean}
         */isRunning:function isRunning(){return this.anim.isRunning();},_updateIndex:function _updateIndex(){var index=this.frameIndex(),animation=this.getAnimation(),animations=this.getAnimations(),anim=animations[animation],len=anim.length/4;if(index<len-1){this.frameIndex(index+1);}else {this.frameIndex(0);}}};Kinetic$1.Util.extend(Kinetic$1.Sprite,Kinetic$1.Shape);// add getters setters
Kinetic$1.Factory.addGetterSetter(Kinetic$1.Sprite,'animation');/**
     * get/set animation key
     * @name animation
     * @method
     * @memberof Kinetic.Sprite.prototype
     * @param {String} anim animation key
     * @returns {String}
     * @example
     * // get animation key<br>
     * var animation = sprite.animation();<br><br>
     *
     * // set animation key<br>
     * sprite.animation('kicking');
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Sprite,'animations');/**
     * get/set animations map
     * @name animations
     * @method
     * @memberof Kinetic.Sprite.prototype
     * @param {Object} animations
     * @returns {Object}
     * @example
     * // get animations map<br>
     * var animations = sprite.animations();<br><br>
     * 
     * // set animations map<br>
     * sprite.animations({<br>
     *   standing: [<br>
     *     // x, y, width, height (6 frames)<br>
     *     0, 0, 49, 109,<br>
     *     52, 0, 49, 109,<br>
     *     105, 0, 49, 109,<br>
     *     158, 0, 49, 109,<br>
     *     210, 0, 49, 109,<br>
     *     262, 0, 49, 109<br>
     *   ],<br>
     *   kicking: [<br>
     *     // x, y, width, height (6 frames)<br>
     *     0, 109, 45, 98,<br>
     *     45, 109, 45, 98,<br>
     *     95, 109, 63, 98,<br>
     *     156, 109, 70, 98,<br>
     *     229, 109, 60, 98,<br>
     *     287, 109, 41, 98<br>
     *   ]<br>          
     * });
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Sprite,'image');/**
     * get/set image
     * @name image
     * @method
     * @memberof Kinetic.Sprite.prototype
     * @param {Image} image
     * @returns {Image}
     * @example
     * // get image
     * var image = sprite.image();<br><br>
     *
     * // set image<br>
     * sprite.image(imageObj);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Sprite,'frameIndex',0);/**
     * set/set animation frame index
     * @name frameIndex
     * @method
     * @memberof Kinetic.Sprite.prototype
     * @param {Integer} frameIndex
     * @returns {Integer}
     * @example
     * // get animation frame index<br>
     * var frameIndex = sprite.frameIndex();<br><br>
     *
     * // set animation frame index<br>
     * sprite.frameIndex(3);
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Sprite,'frameRate',17);/**
     * get/set frame rate in frames per second.  Increase this number to make the sprite
     *  animation run faster, and decrease the number to make the sprite animation run slower
     *  The default is 17 frames per second
     * @name frameRate
     * @method
     * @memberof Kinetic.Sprite.prototype
     * @param {Integer} frameRate
     * @returns {Integer}
     * @example
     * // get frame rate<br>
     * var frameRate = sprite.frameRate();<br><br>
     *
     * // set frame rate to 2 frames per second<br>
     * sprite.frameRate(2);
     */Kinetic$1.Factory.backCompat(Kinetic$1.Sprite,{index:'frameIndex',getIndex:'getFrameIndex',setIndex:'setFrameIndex'});Kinetic$1.Collection.mapMethods(Kinetic$1.Sprite);})();(function(){/**
     * Path constructor.
     * @author Jason Follas
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {String} config.data SVG data string
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var path = new Kinetic.Path({<br>
     *   x: 240,<br>
     *   y: 40,<br>
     *   data: 'M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-17.185,4.352-22.33c7.451-5.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.821,23.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z',<br>
     *   fill: 'green',<br>
     *   scale: 2<br>
     * });
     */Kinetic$1.Path=function(config){this.___init(config);};Kinetic$1.Path.prototype={___init:function ___init(config){this.dataArray=[];var that=this;// call super constructor
Kinetic$1.Shape.call(this,config);this.className='Path';this.dataArray=Kinetic$1.Path.parsePathData(this.getData());this.on('dataChange.kinetic',function(){that.dataArray=Kinetic$1.Path.parsePathData(this.getData());});this.sceneFunc(this._sceneFunc);},_sceneFunc:function _sceneFunc(context){var ca=this.dataArray,closedPath=false;// context position
context.beginPath();for(var n=0;n<ca.length;n++){var c=ca[n].command;var p=ca[n].points;switch(c){case'L':context.lineTo(p[0],p[1]);break;case'M':context.moveTo(p[0],p[1]);break;case'C':context.bezierCurveTo(p[0],p[1],p[2],p[3],p[4],p[5]);break;case'Q':context.quadraticCurveTo(p[0],p[1],p[2],p[3]);break;case'A':var cx=p[0],cy=p[1],rx=p[2],ry=p[3],theta=p[4],dTheta=p[5],psi=p[6],fs=p[7];var r=rx>ry?rx:ry;var scaleX=rx>ry?1:rx/ry;var scaleY=rx>ry?ry/rx:1;context.translate(cx,cy);context.rotate(psi);context.scale(scaleX,scaleY);context.arc(0,0,r,theta,theta+dTheta,1-fs);context.scale(1/scaleX,1/scaleY);context.rotate(-psi);context.translate(-cx,-cy);break;case'z':context.closePath();closedPath=true;break;}}if(closedPath){context.fillStrokeShape(this);}else {context.strokeShape(this);}}};Kinetic$1.Util.extend(Kinetic$1.Path,Kinetic$1.Shape);Kinetic$1.Path.getLineLength=function(x1,y1,x2,y2){return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));};Kinetic$1.Path.getPointOnLine=function(dist,P1x,P1y,P2x,P2y,fromX,fromY){if(fromX===undefined){fromX=P1x;}if(fromY===undefined){fromY=P1y;}var m=(P2y-P1y)/(P2x-P1x+0.00000001);var run=Math.sqrt(dist*dist/(1+m*m));if(P2x<P1x){run*=-1;}var rise=m*run;var pt;if(P2x===P1x){// vertical line
pt={x:fromX,y:fromY+rise};}else if((fromY-P1y)/(fromX-P1x+0.00000001)===m){pt={x:fromX+run,y:fromY+rise};}else {var ix,iy;var len=this.getLineLength(P1x,P1y,P2x,P2y);if(len<0.00000001){return undefined;}var u=(fromX-P1x)*(P2x-P1x)+(fromY-P1y)*(P2y-P1y);u=u/(len*len);ix=P1x+u*(P2x-P1x);iy=P1y+u*(P2y-P1y);var pRise=this.getLineLength(fromX,fromY,ix,iy);var pRun=Math.sqrt(dist*dist-pRise*pRise);run=Math.sqrt(pRun*pRun/(1+m*m));if(P2x<P1x){run*=-1;}rise=m*run;pt={x:ix+run,y:iy+rise};}return pt;};Kinetic$1.Path.getPointOnCubicBezier=function(pct,P1x,P1y,P2x,P2y,P3x,P3y,P4x,P4y){function CB1(t){return t*t*t;}function CB2(t){return 3*t*t*(1-t);}function CB3(t){return 3*t*(1-t)*(1-t);}function CB4(t){return (1-t)*(1-t)*(1-t);}var x=P4x*CB1(pct)+P3x*CB2(pct)+P2x*CB3(pct)+P1x*CB4(pct);var y=P4y*CB1(pct)+P3y*CB2(pct)+P2y*CB3(pct)+P1y*CB4(pct);return {x:x,y:y};};Kinetic$1.Path.getPointOnQuadraticBezier=function(pct,P1x,P1y,P2x,P2y,P3x,P3y){function QB1(t){return t*t;}function QB2(t){return 2*t*(1-t);}function QB3(t){return (1-t)*(1-t);}var x=P3x*QB1(pct)+P2x*QB2(pct)+P1x*QB3(pct);var y=P3y*QB1(pct)+P2y*QB2(pct)+P1y*QB3(pct);return {x:x,y:y};};Kinetic$1.Path.getPointOnEllipticalArc=function(cx,cy,rx,ry,theta,psi){var cosPsi=Math.cos(psi),sinPsi=Math.sin(psi);var pt={x:rx*Math.cos(theta),y:ry*Math.sin(theta)};return {x:cx+(pt.x*cosPsi-pt.y*sinPsi),y:cy+(pt.x*sinPsi+pt.y*cosPsi)};};/*
     * get parsed data array from the data
     *  string.  V, v, H, h, and l data are converted to
     *  L data for the purpose of high performance Path
     *  rendering
     */Kinetic$1.Path.parsePathData=function(data){// Path Data Segment must begin with a moveTo
//m (x y)+  Relative moveTo (subsequent points are treated as lineTo)
//M (x y)+  Absolute moveTo (subsequent points are treated as lineTo)
//l (x y)+  Relative lineTo
//L (x y)+  Absolute LineTo
//h (x)+    Relative horizontal lineTo
//H (x)+    Absolute horizontal lineTo
//v (y)+    Relative vertical lineTo
//V (y)+    Absolute vertical lineTo
//z (closepath)
//Z (closepath)
//c (x1 y1 x2 y2 x y)+ Relative Bezier curve
//C (x1 y1 x2 y2 x y)+ Absolute Bezier curve
//q (x1 y1 x y)+       Relative Quadratic Bezier
//Q (x1 y1 x y)+       Absolute Quadratic Bezier
//t (x y)+    Shorthand/Smooth Relative Quadratic Bezier
//T (x y)+    Shorthand/Smooth Absolute Quadratic Bezier
//s (x2 y2 x y)+       Shorthand/Smooth Relative Bezier curve
//S (x2 y2 x y)+       Shorthand/Smooth Absolute Bezier curve
//a (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+     Relative Elliptical Arc
//A (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+  Absolute Elliptical Arc
// return early if data is not defined
if(!data){return [];}// command string
var cs=data;// command chars
var cc=['m','M','l','L','v','V','h','H','z','Z','c','C','q','Q','t','T','s','S','a','A'];// convert white spaces to commas
cs=cs.replace(new RegExp(' ','g'),',');// create pipes so that we can split the data
for(var n=0;n<cc.length;n++){cs=cs.replace(new RegExp(cc[n],'g'),'|'+cc[n]);}// create array
var arr=cs.split('|');var ca=[];// init context point
var cpx=0;var cpy=0;for(n=1;n<arr.length;n++){var str=arr[n];var c=str.charAt(0);str=str.slice(1);// remove ,- for consistency
str=str.replace(new RegExp(',-','g'),'-');// add commas so that it's easy to split
str=str.replace(new RegExp('-','g'),',-');str=str.replace(new RegExp('e,-','g'),'e-');var p=str.split(',');if(p.length>0&&p[0]===''){p.shift();}// convert strings to floats
for(var i=0;i<p.length;i++){p[i]=parseFloat(p[i]);}while(p.length>0){if(isNaN(p[0])){// case for a trailing comma before next command
break;}var cmd=null;var points=[];var startX=cpx,startY=cpy;// Move var from within the switch to up here (jshint)
var prevCmd,ctlPtx,ctlPty;// Ss, Tt
var rx,ry,psi,fa,fs,x1,y1;// Aa
// convert l, H, h, V, and v to L
switch(c){// Note: Keep the lineTo's above the moveTo's in this switch
case'l':cpx+=p.shift();cpy+=p.shift();cmd='L';points.push(cpx,cpy);break;case'L':cpx=p.shift();cpy=p.shift();points.push(cpx,cpy);break;// Note: lineTo handlers need to be above this point
case'm':var dx=p.shift();var dy=p.shift();cpx+=dx;cpy+=dy;cmd='M';// After closing the path move the current position 
// to the the first point of the path (if any). 
if(ca.length>2&&ca[ca.length-1].command==='z'){for(var idx=ca.length-2;idx>=0;idx--){if(ca[idx].command==='M'){cpx=ca[idx].points[0]+dx;cpy=ca[idx].points[1]+dy;break;}}}points.push(cpx,cpy);c='l';// subsequent points are treated as relative lineTo
break;case'M':cpx=p.shift();cpy=p.shift();cmd='M';points.push(cpx,cpy);c='L';// subsequent points are treated as absolute lineTo
break;case'h':cpx+=p.shift();cmd='L';points.push(cpx,cpy);break;case'H':cpx=p.shift();cmd='L';points.push(cpx,cpy);break;case'v':cpy+=p.shift();cmd='L';points.push(cpx,cpy);break;case'V':cpy=p.shift();cmd='L';points.push(cpx,cpy);break;case'C':points.push(p.shift(),p.shift(),p.shift(),p.shift());cpx=p.shift();cpy=p.shift();points.push(cpx,cpy);break;case'c':points.push(cpx+p.shift(),cpy+p.shift(),cpx+p.shift(),cpy+p.shift());cpx+=p.shift();cpy+=p.shift();cmd='C';points.push(cpx,cpy);break;case'S':ctlPtx=cpx;ctlPty=cpy;prevCmd=ca[ca.length-1];if(prevCmd.command==='C'){ctlPtx=cpx+(cpx-prevCmd.points[2]);ctlPty=cpy+(cpy-prevCmd.points[3]);}points.push(ctlPtx,ctlPty,p.shift(),p.shift());cpx=p.shift();cpy=p.shift();cmd='C';points.push(cpx,cpy);break;case's':ctlPtx=cpx;ctlPty=cpy;prevCmd=ca[ca.length-1];if(prevCmd.command==='C'){ctlPtx=cpx+(cpx-prevCmd.points[2]);ctlPty=cpy+(cpy-prevCmd.points[3]);}points.push(ctlPtx,ctlPty,cpx+p.shift(),cpy+p.shift());cpx+=p.shift();cpy+=p.shift();cmd='C';points.push(cpx,cpy);break;case'Q':points.push(p.shift(),p.shift());cpx=p.shift();cpy=p.shift();points.push(cpx,cpy);break;case'q':points.push(cpx+p.shift(),cpy+p.shift());cpx+=p.shift();cpy+=p.shift();cmd='Q';points.push(cpx,cpy);break;case'T':ctlPtx=cpx;ctlPty=cpy;prevCmd=ca[ca.length-1];if(prevCmd.command==='Q'){ctlPtx=cpx+(cpx-prevCmd.points[0]);ctlPty=cpy+(cpy-prevCmd.points[1]);}cpx=p.shift();cpy=p.shift();cmd='Q';points.push(ctlPtx,ctlPty,cpx,cpy);break;case't':ctlPtx=cpx;ctlPty=cpy;prevCmd=ca[ca.length-1];if(prevCmd.command==='Q'){ctlPtx=cpx+(cpx-prevCmd.points[0]);ctlPty=cpy+(cpy-prevCmd.points[1]);}cpx+=p.shift();cpy+=p.shift();cmd='Q';points.push(ctlPtx,ctlPty,cpx,cpy);break;case'A':rx=p.shift();ry=p.shift();psi=p.shift();fa=p.shift();fs=p.shift();x1=cpx;y1=cpy;cpx=p.shift();cpy=p.shift();cmd='A';points=this.convertEndpointToCenterParameterization(x1,y1,cpx,cpy,fa,fs,rx,ry,psi);break;case'a':rx=p.shift();ry=p.shift();psi=p.shift();fa=p.shift();fs=p.shift();x1=cpx;y1=cpy;cpx+=p.shift();cpy+=p.shift();cmd='A';points=this.convertEndpointToCenterParameterization(x1,y1,cpx,cpy,fa,fs,rx,ry,psi);break;}ca.push({command:cmd||c,points:points,start:{x:startX,y:startY},pathLength:this.calcLength(startX,startY,cmd||c,points)});}if(c==='z'||c==='Z'){ca.push({command:'z',points:[],start:undefined,pathLength:0});}}return ca;};Kinetic$1.Path.calcLength=function(x,y,cmd,points){var len,p1,p2,t;var path=Kinetic$1.Path;switch(cmd){case'L':return path.getLineLength(x,y,points[0],points[1]);case'C':// Approximates by breaking curve into 100 line segments
len=0.0;p1=path.getPointOnCubicBezier(0,x,y,points[0],points[1],points[2],points[3],points[4],points[5]);for(t=0.01;t<=1;t+=0.01){p2=path.getPointOnCubicBezier(t,x,y,points[0],points[1],points[2],points[3],points[4],points[5]);len+=path.getLineLength(p1.x,p1.y,p2.x,p2.y);p1=p2;}return len;case'Q':// Approximates by breaking curve into 100 line segments
len=0.0;p1=path.getPointOnQuadraticBezier(0,x,y,points[0],points[1],points[2],points[3]);for(t=0.01;t<=1;t+=0.01){p2=path.getPointOnQuadraticBezier(t,x,y,points[0],points[1],points[2],points[3]);len+=path.getLineLength(p1.x,p1.y,p2.x,p2.y);p1=p2;}return len;case'A':// Approximates by breaking curve into line segments
len=0.0;var start=points[4];// 4 = theta
var dTheta=points[5];// 5 = dTheta
var end=points[4]+dTheta;var inc=Math.PI/180.0;// 1 degree resolution
if(Math.abs(start-end)<inc){inc=Math.abs(start-end);}// Note: for purpose of calculating arc length, not going to worry about rotating X-axis by angle psi
p1=path.getPointOnEllipticalArc(points[0],points[1],points[2],points[3],start,0);if(dTheta<0){// clockwise
for(t=start-inc;t>end;t-=inc){p2=path.getPointOnEllipticalArc(points[0],points[1],points[2],points[3],t,0);len+=path.getLineLength(p1.x,p1.y,p2.x,p2.y);p1=p2;}}else {// counter-clockwise
for(t=start+inc;t<end;t+=inc){p2=path.getPointOnEllipticalArc(points[0],points[1],points[2],points[3],t,0);len+=path.getLineLength(p1.x,p1.y,p2.x,p2.y);p1=p2;}}p2=path.getPointOnEllipticalArc(points[0],points[1],points[2],points[3],end,0);len+=path.getLineLength(p1.x,p1.y,p2.x,p2.y);return len;}return 0;};Kinetic$1.Path.convertEndpointToCenterParameterization=function(x1,y1,x2,y2,fa,fs,rx,ry,psiDeg){// Derived from: http://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes
var psi=psiDeg*(Math.PI/180.0);var xp=Math.cos(psi)*(x1-x2)/2.0+Math.sin(psi)*(y1-y2)/2.0;var yp=-1*Math.sin(psi)*(x1-x2)/2.0+Math.cos(psi)*(y1-y2)/2.0;var lambda=xp*xp/(rx*rx)+yp*yp/(ry*ry);if(lambda>1){rx*=Math.sqrt(lambda);ry*=Math.sqrt(lambda);}var f=Math.sqrt((rx*rx*(ry*ry)-rx*rx*(yp*yp)-ry*ry*(xp*xp))/(rx*rx*(yp*yp)+ry*ry*(xp*xp)));if(fa===fs){f*=-1;}if(isNaN(f)){f=0;}var cxp=f*rx*yp/ry;var cyp=f*-ry*xp/rx;var cx=(x1+x2)/2.0+Math.cos(psi)*cxp-Math.sin(psi)*cyp;var cy=(y1+y2)/2.0+Math.sin(psi)*cxp+Math.cos(psi)*cyp;var vMag=function vMag(v){return Math.sqrt(v[0]*v[0]+v[1]*v[1]);};var vRatio=function vRatio(u,v){return (u[0]*v[0]+u[1]*v[1])/(vMag(u)*vMag(v));};var vAngle=function vAngle(u,v){return (u[0]*v[1]<u[1]*v[0]?-1:1)*Math.acos(vRatio(u,v));};var theta=vAngle([1,0],[(xp-cxp)/rx,(yp-cyp)/ry]);var u=[(xp-cxp)/rx,(yp-cyp)/ry];var v=[(-1*xp-cxp)/rx,(-1*yp-cyp)/ry];var dTheta=vAngle(u,v);if(vRatio(u,v)<=-1){dTheta=Math.PI;}if(vRatio(u,v)>=1){dTheta=0;}if(fs===0&&dTheta>0){dTheta=dTheta-2*Math.PI;}if(fs===1&&dTheta<0){dTheta=dTheta+2*Math.PI;}return [cx,cy,rx,ry,theta,dTheta,psi,fs];};// add getters setters
Kinetic$1.Factory.addGetterSetter(Kinetic$1.Path,'data');/**
     * set SVG path data string.  This method
     *  also automatically parses the data string
     *  into a data array.  Currently supported SVG data:
     *  M, m, L, l, H, h, V, v, Q, q, T, t, C, c, S, s, A, a, Z, z
     * @name setData
     * @method
     * @memberof Kinetic.Path.prototype
     * @param {String} SVG path command string
     */ /**
     * get SVG path data string
     * @name getData
     * @method
     * @memberof Kinetic.Path.prototype
     */Kinetic$1.Collection.mapMethods(Kinetic$1.Path);})();(function(){var EMPTY_STRING='',//CALIBRI = 'Calibri',
NORMAL='normal';/**
     * Path constructor.
     * @author Jason Follas
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {String} [config.fontFamily] default is Calibri
     * @param {Number} [config.fontSize] default is 12
     * @param {String} [config.fontStyle] can be normal, bold, or italic.  Default is normal
     * @param {String} [config.fontVariant] can be normal or small-caps.  Default is normal
     * @param {String} config.text
     * @param {String} config.data SVG data string
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var textpath = new Kinetic.TextPath({<br>
     *   x: 100,<br>
     *   y: 50,<br>
     *   fill: '#333',<br>
     *   fontSize: '24',<br>
     *   fontFamily: 'Arial',<br>
     *   text: 'All the world\'s a stage, and all the men and women merely players.',<br>
     *   data: 'M10,10 C0,0 10,150 100,100 S300,150 400,50'<br>
     * });
     */Kinetic$1.TextPath=function(config){this.___init(config);};function _fillFunc(context){context.fillText(this.partialText,0,0);}function _strokeFunc(context){context.strokeText(this.partialText,0,0);}Kinetic$1.TextPath.prototype={___init:function ___init(config){var that=this;this.dummyCanvas=Kinetic$1.Util.createCanvasElement();this.dataArray=[];// call super constructor
Kinetic$1.Shape.call(this,config);// overrides
// TODO: shouldn't this be on the prototype?
this._fillFunc=_fillFunc;this._strokeFunc=_strokeFunc;this._fillFuncHit=_fillFunc;this._strokeFuncHit=_strokeFunc;this.className='TextPath';this.dataArray=Kinetic$1.Path.parsePathData(this.attrs.data);this.on('dataChange.kinetic',function(){that.dataArray=Kinetic$1.Path.parsePathData(this.attrs.data);});// update text data for certain attr changes
this.on('textChange.kinetic textStroke.kinetic textStrokeWidth.kinetic',that._setTextData);that._setTextData();this.sceneFunc(this._sceneFunc);},_sceneFunc:function _sceneFunc(context){context.setAttr('font',this._getContextFont());context.setAttr('textBaseline','middle');context.setAttr('textAlign','left');context.save();var glyphInfo=this.glyphInfo;for(var i=0;i<glyphInfo.length;i++){context.save();var p0=glyphInfo[i].p0;context.translate(p0.x,p0.y);context.rotate(glyphInfo[i].rotation);this.partialText=glyphInfo[i].text;context.fillStrokeShape(this);context.restore();//// To assist with debugging visually, uncomment following
// context.beginPath();
// if (i % 2)
// context.strokeStyle = 'cyan';
// else
// context.strokeStyle = 'green';
// var p1 = glyphInfo[i].p1;
// context.moveTo(p0.x, p0.y);
// context.lineTo(p1.x, p1.y);
// context.stroke();
}context.restore();},/**
         * get text width in pixels
         * @method
         * @memberof Kinetic.TextPath.prototype
         */getTextWidth:function getTextWidth(){return this.textWidth;},/**
         * get text height in pixels
         * @method
         * @memberof Kinetic.TextPath.prototype
         */getTextHeight:function getTextHeight(){return this.textHeight;},/**
         * set text
         * @method
         * @memberof Kinetic.TextPath.prototype
         * @param {String} text
         */setText:function setText(text){Kinetic$1.Text.prototype.setText.call(this,text);},_getTextSize:function _getTextSize(text){var dummyCanvas=this.dummyCanvas;var _context=dummyCanvas.getContext('2d');_context.save();_context.font=this._getContextFont();var metrics=_context.measureText(text);_context.restore();return {width:metrics.width,height:parseInt(this.attrs.fontSize,10)};},_setTextData:function _setTextData(){var that=this;var size=this._getTextSize(this.attrs.text);this.textWidth=size.width;this.textHeight=size.height;this.glyphInfo=[];var charArr=this.attrs.text.split('');var p0,p1,pathCmd;var pIndex=-1;var currentT=0;var getNextPathSegment=function getNextPathSegment(){currentT=0;var pathData=that.dataArray;for(var i=pIndex+1;i<pathData.length;i++){if(pathData[i].pathLength>0){pIndex=i;return pathData[i];}else if(pathData[i].command=='M'){p0={x:pathData[i].points[0],y:pathData[i].points[1]};}}return {};};var findSegmentToFitCharacter=function findSegmentToFitCharacter(c){var glyphWidth=that._getTextSize(c).width;var currLen=0;var attempts=0;p1=undefined;while(Math.abs(glyphWidth-currLen)/glyphWidth>0.01&&attempts<25){attempts++;var cumulativePathLength=currLen;while(pathCmd===undefined){pathCmd=getNextPathSegment();if(pathCmd&&cumulativePathLength+pathCmd.pathLength<glyphWidth){cumulativePathLength+=pathCmd.pathLength;pathCmd=undefined;}}if(pathCmd==={}||p0===undefined){return undefined;}var needNewSegment=false;switch(pathCmd.command){case'L':if(Kinetic$1.Path.getLineLength(p0.x,p0.y,pathCmd.points[0],pathCmd.points[1])>glyphWidth){p1=Kinetic$1.Path.getPointOnLine(glyphWidth,p0.x,p0.y,pathCmd.points[0],pathCmd.points[1],p0.x,p0.y);}else {pathCmd=undefined;}break;case'A':var start=pathCmd.points[4];// 4 = theta
var dTheta=pathCmd.points[5];// 5 = dTheta
var end=pathCmd.points[4]+dTheta;if(currentT===0){currentT=start+0.00000001;}// Just in case start is 0
else if(glyphWidth>currLen){currentT+=Math.PI/180.0*dTheta/Math.abs(dTheta);}else {currentT-=Math.PI/360.0*dTheta/Math.abs(dTheta);}// Credit for bug fix: @therth https://github.com/ericdrowell/KineticJS/issues/249
// Old code failed to render text along arc of this path: "M 50 50 a 150 50 0 0 1 250 50 l 50 0"
if(dTheta<0&&currentT<end||dTheta>=0&&currentT>end){currentT=end;needNewSegment=true;}p1=Kinetic$1.Path.getPointOnEllipticalArc(pathCmd.points[0],pathCmd.points[1],pathCmd.points[2],pathCmd.points[3],currentT,pathCmd.points[6]);break;case'C':if(currentT===0){if(glyphWidth>pathCmd.pathLength){currentT=0.00000001;}else {currentT=glyphWidth/pathCmd.pathLength;}}else if(glyphWidth>currLen){currentT+=(glyphWidth-currLen)/pathCmd.pathLength;}else {currentT-=(currLen-glyphWidth)/pathCmd.pathLength;}if(currentT>1.0){currentT=1.0;needNewSegment=true;}p1=Kinetic$1.Path.getPointOnCubicBezier(currentT,pathCmd.start.x,pathCmd.start.y,pathCmd.points[0],pathCmd.points[1],pathCmd.points[2],pathCmd.points[3],pathCmd.points[4],pathCmd.points[5]);break;case'Q':if(currentT===0){currentT=glyphWidth/pathCmd.pathLength;}else if(glyphWidth>currLen){currentT+=(glyphWidth-currLen)/pathCmd.pathLength;}else {currentT-=(currLen-glyphWidth)/pathCmd.pathLength;}if(currentT>1.0){currentT=1.0;needNewSegment=true;}p1=Kinetic$1.Path.getPointOnQuadraticBezier(currentT,pathCmd.start.x,pathCmd.start.y,pathCmd.points[0],pathCmd.points[1],pathCmd.points[2],pathCmd.points[3]);break;}if(p1!==undefined){currLen=Kinetic$1.Path.getLineLength(p0.x,p0.y,p1.x,p1.y);}if(needNewSegment){needNewSegment=false;pathCmd=undefined;}}};for(var i=0;i<charArr.length;i++){// Find p1 such that line segment between p0 and p1 is approx. width of glyph
findSegmentToFitCharacter(charArr[i]);if(p0===undefined||p1===undefined){break;}var width=Kinetic$1.Path.getLineLength(p0.x,p0.y,p1.x,p1.y);// Note: Since glyphs are rendered one at a time, any kerning pair data built into the font will not be used.
// Can foresee having a rough pair table built in that the developer can override as needed.
var kern=0;// placeholder for future implementation
var midpoint=Kinetic$1.Path.getPointOnLine(kern+width/2.0,p0.x,p0.y,p1.x,p1.y);var rotation=Math.atan2(p1.y-p0.y,p1.x-p0.x);this.glyphInfo.push({transposeX:midpoint.x,transposeY:midpoint.y,text:charArr[i],rotation:rotation,p0:p0,p1:p1});p0=p1;}}};// map TextPath methods to Text
Kinetic$1.TextPath.prototype._getContextFont=Kinetic$1.Text.prototype._getContextFont;Kinetic$1.Util.extend(Kinetic$1.TextPath,Kinetic$1.Shape);// add setters and getters
Kinetic$1.Factory.addGetterSetter(Kinetic$1.TextPath,'fontFamily','Arial');/**
     * set font family
     * @name setFontFamily
     * @method
     * @memberof Kinetic.TextPath.prototype
     * @param {String} fontFamily
     */ /**
     * get font family
     * @name getFontFamily
     * @method
     * @memberof Kinetic.TextPath.prototype
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.TextPath,'fontSize',12);/**
     * set font size
     * @name setFontSize
     * @method
     * @memberof Kinetic.TextPath.prototype
     * @param {int} fontSize
     */ /**
     * get font size
     * @name getFontSize
     * @method
     * @memberof Kinetic.TextPath.prototype
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.TextPath,'fontStyle',NORMAL);/**
     * set font style.  Can be 'normal', 'italic', or 'bold'.  'normal' is the default.
     * @name setFontStyle
     * @method
     * @memberof Kinetic.TextPath.prototype
     * @param {String} fontStyle
     */ /**
     * get font style
     * @name getFontStyle
     * @method
     * @memberof Kinetic.TextPath.prototype
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.TextPath,'fontVariant',NORMAL);/**
     * set font variant.  Can be 'normal' or 'small-caps'.  'normal' is the default.
     * @name setFontVariant
     * @method
     * @memberof Kinetic.TextPath.prototype
     * @param {String} fontVariant
     */ /**
     * @get font variant
     * @name getFontVariant
     * @method
     * @memberof Kinetic.TextPath.prototype
     */Kinetic$1.Factory.addGetter(Kinetic$1.TextPath,'text',EMPTY_STRING);/**
     * get text
     * @name getText
     * @method
     * @memberof Kinetic.TextPath.prototype
     */Kinetic$1.Collection.mapMethods(Kinetic$1.TextPath);})();(function(){/**
     * RegularPolygon constructor.&nbsp; Examples include triangles, squares, pentagons, hexagons, etc.
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} config.sides
     * @param {Number} config.radius
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var hexagon = new Kinetic.RegularPolygon({<br>
     *   x: 100,<br>
     *   y: 200,<br>
     *   sides: 6,<br>
     *   radius: 70,<br>
     *   fill: 'red',<br>
     *   stroke: 'black',<br>
     *   strokeWidth: 4<br>
     * });
     */Kinetic$1.RegularPolygon=function(config){this.___init(config);};Kinetic$1.RegularPolygon.prototype={___init:function ___init(config){// call super constructor
Kinetic$1.Shape.call(this,config);this.className='RegularPolygon';this.sceneFunc(this._sceneFunc);},_sceneFunc:function _sceneFunc(context){var sides=this.attrs.sides,radius=this.attrs.radius,n,x,y;context.beginPath();context.moveTo(0,0-radius);for(n=1;n<sides;n++){x=radius*Math.sin(n*2*Math.PI/sides);y=-1*radius*Math.cos(n*2*Math.PI/sides);context.lineTo(x,y);}context.closePath();context.fillStrokeShape(this);}};Kinetic$1.Util.extend(Kinetic$1.RegularPolygon,Kinetic$1.Shape);// add getters setters
Kinetic$1.Factory.addGetterSetter(Kinetic$1.RegularPolygon,'radius',0);/**
     * set radius
     * @name setRadius
     * @method
     * @memberof Kinetic.RegularPolygon.prototype
     * @param {Number} radius
     */ /**
     * get radius
     * @name getRadius
     * @method
     * @memberof Kinetic.RegularPolygon.prototype
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.RegularPolygon,'sides',0);/**
     * set number of sides
     * @name setSides
     * @method
     * @memberof Kinetic.RegularPolygon.prototype
     * @param {int} sides
     */ /**
     * get number of sides
     * @name getSides
     * @method
     * @memberof Kinetic.RegularPolygon.prototype
     */Kinetic$1.Collection.mapMethods(Kinetic$1.RegularPolygon);})();(function(){/**
   * Polygon author: fyw_own.
   * @constructor
   * @memberof Kinetic
   * @augments Kinetic.Shape
   * @param {Object} config
   * @param {String} [config.fill] fill color
   * @param {Integer} [config.fillRed] set fill red component
   * @param {Integer} [config.fillGreen] set fill green component
   * @param {Integer} [config.fillBlue] set fill blue component
   * @param {Integer} [config.fillAlpha] set fill alpha component
   * @param {Image} [config.fillPatternImage] fill pattern image
   * @param {Number} [config.fillPatternX]
   * @param {Number} [config.fillPatternY]
   * @param {Object} [config.fillPatternOffset] object with x and y component
   * @param {Number} [config.fillPatternOffsetX] 
   * @param {Number} [config.fillPatternOffsetY] 
   * @param {Object} [config.fillPatternScale] object with x and y component
   * @param {Number} [config.fillPatternScaleX]
   * @param {Number} [config.fillPatternScaleY]
   * @param {Number} [config.fillPatternRotation]
   * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
   * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
   * @param {Number} [config.fillLinearGradientStartPointX]
   * @param {Number} [config.fillLinearGradientStartPointY]
   * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
   * @param {Number} [config.fillLinearGradientEndPointX]
   * @param {Number} [config.fillLinearGradientEndPointY]
   * @param {Array} [config.fillLinearGradientColorStops] array of color stops
   * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
   * @param {Number} [config.fillRadialGradientStartPointX]
   * @param {Number} [config.fillRadialGradientStartPointY]
   * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
   * @param {Number} [config.fillRadialGradientEndPointX] 
   * @param {Number} [config.fillRadialGradientEndPointY] 
   * @param {Number} [config.fillRadialGradientStartRadius]
   * @param {Number} [config.fillRadialGradientEndRadius]
   * @param {Array} [config.fillRadialGradientColorStops] array of color stops
   * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
   * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
   * @param {String} [config.stroke] stroke color
   * @param {Integer} [config.strokeRed] set stroke red component
   * @param {Integer} [config.strokeGreen] set stroke green component
   * @param {Integer} [config.strokeBlue] set stroke blue component
   * @param {Integer} [config.strokeAlpha] set stroke alpha component
   * @param {Number} [config.strokeWidth] stroke width
   * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
   * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
   * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
   *  is miter
   * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
   *  is butt
   * @param {String} [config.shadowColor]
   * @param {Integer} [config.shadowRed] set shadow color red component
   * @param {Integer} [config.shadowGreen] set shadow color green component
   * @param {Integer} [config.shadowBlue] set shadow color blue component
   * @param {Integer} [config.shadowAlpha] set shadow color alpha component
   * @param {Number} [config.shadowBlur]
   * @param {Object} [config.shadowOffset] object with x and y component
   * @param {Number} [config.shadowOffsetX]
   * @param {Number} [config.shadowOffsetY]
   * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
   *  between 0 and 1
   * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
   * @param {Array} [config.dash]
   * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
   * @param {Boolean} [config.visible]
   * @param {Boolean} [config.listening] whether or not the node is listening for events
   * @param {String} [config.id] unique id
   * @param {String} [config.name] non-unique name
   * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
   * @param {Object} [config.scale] set scale
   * @param {Number} [config.scaleX] set scale x
   * @param {Number} [config.scaleY] set scale y
   * @param {Number} [config.rotation] rotation in degrees
   * @param {Object} [config.offset] offset from center point and rotation point
   * @param {Number} [config.offsetX] set offset x
   * @param {Number} [config.offsetY] set offset y
   * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
   *  the entire stage by dragging any portion of the stage
   * @param {Number} [config.dragDistance]
   * @param {Function} [config.dragBoundFunc]
   * @param {Array} [config.points]
   * @example
   * var hexagon = new Kinetic.Polygon({<br>
   *   points: [12, 34],<br>
   *   fill: 'red',<br>
   *   stroke: 'black',<br>
   *   strokeWidth: 4<br>
   * });
   */Kinetic$1.Polygon=function(config){this.___init(config);};Kinetic$1.Polygon.prototype={___init:function ___init(config){// call super constructor
Kinetic$1.Shape.call(this,config);this.className='Polygon';this.sceneFunc(this._sceneFunc);},_sceneFunc:function _sceneFunc(context){var points=this.attrs.points;context.beginPath();for(var n=0;n<points.length;n=n+2){if(n==0){context.moveTo(points[0],points[1]);}else {var x=points[n];var y=points[n+1];context.lineTo(x,y);}}context.closePath();context.fillStrokeShape(this);}};Kinetic$1.Util.extend(Kinetic$1.Polygon,Kinetic$1.Shape);// add getters setters
Kinetic$1.Factory.addGetterSetter(Kinetic$1.Polygon,'points',[]);/**
   * set points
   * @name setPoints
   * @method
   * @memberof Kinetic.Polygon.prototype
   * @param {Array} points
   */ /**
   * get points
   * @name getPoints
   * @method
   * @memberof Kinetic.Polygon.prototype
   */Kinetic$1.Collection.mapMethods(Kinetic$1.Polygon);})();(function(){/**
     * Star constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Integer} config.numPoints
     * @param {Number} config.innerRadius
     * @param {Number} config.outerRadius
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var star = new Kinetic.Star({<br>
     *   x: 100,<br>
     *   y: 200,<br>
     *   numPoints: 5,<br>
     *   innerRadius: 70,<br>
     *   outerRadius: 70,<br>
     *   fill: 'red',<br>
     *   stroke: 'black',<br>
     *   strokeWidth: 4<br>
     * });
     */Kinetic$1.Star=function(config){this.___init(config);};Kinetic$1.Star.prototype={___init:function ___init(config){// call super constructor
Kinetic$1.Shape.call(this,config);this.className='Star';this.sceneFunc(this._sceneFunc);},_sceneFunc:function _sceneFunc(context){var innerRadius=this.innerRadius(),outerRadius=this.outerRadius(),numPoints=this.numPoints();context.beginPath();context.moveTo(0,0-outerRadius);for(var n=1;n<numPoints*2;n++){var radius=n%2===0?outerRadius:innerRadius;var x=radius*Math.sin(n*Math.PI/numPoints);var y=-1*radius*Math.cos(n*Math.PI/numPoints);context.lineTo(x,y);}context.closePath();context.fillStrokeShape(this);}};Kinetic$1.Util.extend(Kinetic$1.Star,Kinetic$1.Shape);// add getters setters
Kinetic$1.Factory.addGetterSetter(Kinetic$1.Star,'numPoints',5);/**
     * set number of points
     * @name setNumPoints
     * @method
     * @memberof Kinetic.Star.prototype
     * @param {Integer} points
     */ /**
     * get number of points
     * @name getNumPoints
     * @method
     * @memberof Kinetic.Star.prototype
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Star,'innerRadius',0);/**
     * set inner radius
     * @name setInnerRadius
     * @method
     * @memberof Kinetic.Star.prototype
     * @param {Number} radius
     */ /**
     * get inner radius
     * @name getInnerRadius
     * @method
     * @memberof Kinetic.Star.prototype
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Star,'outerRadius',0);/**
     * set outer radius
     * @name setOuterRadius
     * @method
     * @memberof Kinetic.Star.prototype
     * @param {Number} radius
     */ /**
     * get outer radius
     * @name getOuterRadius
     * @method
     * @memberof Kinetic.Star.prototype
     */Kinetic$1.Collection.mapMethods(Kinetic$1.Star);})();(function(){// constants
var ATTR_CHANGE_LIST=['fontFamily','fontSize','fontStyle','padding','lineHeight','text'],CHANGE_KINETIC='Change.kinetic',NONE='none',UP='up',RIGHT='right',DOWN='down',LEFT='left',LABEL='Label',// cached variables
attrChangeListLen=ATTR_CHANGE_LIST.length;/**
     * Label constructor.&nbsp; Labels are groups that contain a Text and Tag shape
     * @constructor
     * @memberof Kinetic
     * @param {Object} config
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * // create label
     * var label = new Kinetic.Label({<br>
     *   x: 100,<br>
     *   y: 100, <br>
     *   draggable: true<br>
     * });<br><br>
     *
     * // add a tag to the label<br>
     * label.add(new Kinetic.Tag({<br>
     *   fill: '#bbb',<br>
     *   stroke: '#333',<br>
     *   shadowColor: 'black',<br>
     *   shadowBlur: 10,<br>
     *   shadowOffset: [10, 10],<br>
     *   shadowOpacity: 0.2,<br>
     *   lineJoin: 'round',<br>
     *   pointerDirection: 'up',<br>
     *   pointerWidth: 20,<br>
     *   pointerHeight: 20,<br>
     *   cornerRadius: 5<br>
     * }));<br><br>
     *
     * // add text to the label<br>
     * label.add(new Kinetic.Text({<br>
     *   text: 'Hello World!',<br>
     *   fontSize: 50,<br>
     *   lineHeight: 1.2,<br>
     *   padding: 10,<br>
     *   fill: 'green'<br>
     *  }));
     */Kinetic$1.Label=function(config){this.____init(config);};Kinetic$1.Label.prototype={____init:function ____init(config){var that=this;this.className=LABEL;Kinetic$1.Group.call(this,config);this.on('add.kinetic',function(evt){that._addListeners(evt.child);that._sync();});},/**
         * get Text shape for the label.  You need to access the Text shape in order to update
         * the text properties
         * @name getText
         * @method
         * @memberof Kinetic.Label.prototype
         */getText:function getText(){return this.find('Text')[0];},/**
         * get Tag shape for the label.  You need to access the Tag shape in order to update
         * the pointer properties and the corner radius
         * @name getTag
         * @method
         * @memberof Kinetic.Label.prototype
         */getTag:function getTag(){return this.find('Tag')[0];},_addListeners:function _addListeners(text){var that=this,n;var func=function func(){that._sync();};// update text data for certain attr changes
for(n=0;n<attrChangeListLen;n++){text.on(ATTR_CHANGE_LIST[n]+CHANGE_KINETIC,func);}},getWidth:function getWidth(){return this.getText().getWidth();},getHeight:function getHeight(){return this.getText().getHeight();},_sync:function _sync(){var text=this.getText(),tag=this.getTag(),width,height,pointerDirection,pointerWidth,x,y,pointerHeight;if(text&&tag){width=text.getWidth();height=text.getHeight();pointerDirection=tag.getPointerDirection();pointerWidth=tag.getPointerWidth();pointerHeight=tag.getPointerHeight();x=0;y=0;switch(pointerDirection){case UP:x=width/2;y=-1*pointerHeight;break;case RIGHT:x=width+pointerWidth;y=height/2;break;case DOWN:x=width/2;y=height+pointerHeight;break;case LEFT:x=-1*pointerWidth;y=height/2;break;}tag.setAttrs({x:-1*x,y:-1*y,width:width,height:height});text.setAttrs({x:-1*x,y:-1*y});}}};Kinetic$1.Util.extend(Kinetic$1.Label,Kinetic$1.Group);Kinetic$1.Collection.mapMethods(Kinetic$1.Label);/**
     * Tag constructor.&nbsp; A Tag can be configured
     *  to have a pointer element that points up, right, down, or left
     * @constructor
     * @memberof Kinetic
     * @param {Object} config
     * @param {String} [config.pointerDirection] can be up, right, down, left, or none; the default
     *  is none.  When a pointer is present, the positioning of the label is relative to the tip of the pointer.
     * @param {Number} [config.pointerWidth]
     * @param {Number} [config.pointerHeight]
     * @param {Number} [config.cornerRadius]
     */Kinetic$1.Tag=function(config){this.___init(config);};Kinetic$1.Tag.prototype={___init:function ___init(config){Kinetic$1.Shape.call(this,config);this.className='Tag';this.sceneFunc(this._sceneFunc);},_sceneFunc:function _sceneFunc(context){var width=this.getWidth(),height=this.getHeight(),pointerDirection=this.getPointerDirection(),pointerWidth=this.getPointerWidth(),pointerHeight=this.getPointerHeight();//cornerRadius = this.getCornerRadius();
context.beginPath();context.moveTo(0,0);if(pointerDirection===UP){context.lineTo((width-pointerWidth)/2,0);context.lineTo(width/2,-1*pointerHeight);context.lineTo((width+pointerWidth)/2,0);}context.lineTo(width,0);if(pointerDirection===RIGHT){context.lineTo(width,(height-pointerHeight)/2);context.lineTo(width+pointerWidth,height/2);context.lineTo(width,(height+pointerHeight)/2);}context.lineTo(width,height);if(pointerDirection===DOWN){context.lineTo((width+pointerWidth)/2,height);context.lineTo(width/2,height+pointerHeight);context.lineTo((width-pointerWidth)/2,height);}context.lineTo(0,height);if(pointerDirection===LEFT){context.lineTo(0,(height+pointerHeight)/2);context.lineTo(-1*pointerWidth,height/2);context.lineTo(0,(height-pointerHeight)/2);}context.closePath();context.fillStrokeShape(this);}};Kinetic$1.Util.extend(Kinetic$1.Tag,Kinetic$1.Shape);Kinetic$1.Factory.addGetterSetter(Kinetic$1.Tag,'pointerDirection',NONE);/**
     * set pointer Direction
     * @name setPointerDirection
     * @method
     * @memberof Kinetic.Tag.prototype
     * @param {String} pointerDirection can be up, right, down, left, or none.  The
     *  default is none
     */ /**
     * get pointer Direction
     * @name getPointerDirection
     * @method
     * @memberof Kinetic.Tag.prototype
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Tag,'pointerWidth',0);/**
     * set pointer width
     * @name setPointerWidth
     * @method
     * @memberof Kinetic.Tag.prototype
     * @param {Number} pointerWidth
     */ /**
     * get pointer width
     * @name getPointerWidth
     * @method
     * @memberof Kinetic.Tag.prototype
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Tag,'pointerHeight',0);/**
     * set pointer height
     * @name setPointerHeight
     * @method
     * @memberof Kinetic.Tag.prototype
     * @param {Number} pointerHeight
     */ /**
     * get pointer height
     * @name getPointerHeight
     * @method
     * @memberof Kinetic.Tag.prototype
     */Kinetic$1.Factory.addGetterSetter(Kinetic$1.Tag,'cornerRadius',0);/**
     * set corner radius
     * @name setCornerRadius
     * @method
     * @memberof Kinetic.Tag.prototype
     * @param {Number} corner radius
     */ /**
     * get corner radius
     * @name getCornerRadius
     * @method
     * @memberof Kinetic.Tag.prototype
     */Kinetic$1.Collection.mapMethods(Kinetic$1.Tag);})();

/**
 * 图片地图覆盖物基类，不可直接实例化
 */
var POverlay = /*#__PURE__*/function () {
  // 构造器
  function POverlay(option) {
    _classCallCheck(this, POverlay);

    this.option = option;
    this.stage = null;
    this.config = {};
    this.shape = null;
    this.layer = null;
    this.enableMassClear = true;
    this.enableEventListen = true;
    this.mousedownX = 0;
    this.mousedownY = 0;
    this.mouseupX = 0;
    this.mouseupY = 0;
  }

  _createClass(POverlay, [{
    key: "create",
    value: // 覆盖物的舞台和图层的初始化
    function create(stage, layer) {
      this.stage = stage;
      this.layer = layer;
    }
  }, {
    key: "show",
    value: // 显示覆盖物
    function show() {
      this.shape.show();
      this.layer.draw();
    }
  }, {
    key: "hide",
    value: // 隐藏覆盖物
    function hide() {
      this.shape.hide();
      this.layer.draw();
    }
  }, {
    key: "enableDragging",
    value: // 允许覆盖物拖动
    function enableDragging() {
      var _this = this;

      this.shape.draggable(true);
      var eventArray = ["click", "mousedown", "mouseup", "dragstart", "dragmove", "dragend"];
      eventArray.forEach(function (eventType) {
        _this.addEventListener(eventType);
      });
    }
  }, {
    key: "disableDragging",
    value: // 禁止覆盖物拖动
    function disableDragging() {
      this.shape.draggable(false);
    }
  }, {
    key: "enableEventListen",
    value: // 允许覆盖物进行事件监听
    function enableEventListen() {
      this.enableEventListen = true;
    }
  }, {
    key: "disableEventListen",
    value: // 禁止覆盖物进行事件监听
    function disableEventListen() {
      this.enableEventListen = false;
    }
  }, {
    key: "addEventListener",
    value: // 覆盖物事件监听
    function addEventListener(eventType) {
      var _this2 = this;

      var callBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      if (this.shape && this.enableEventListen) {
        this.shape.on(eventType, function (e) {
          if (eventType === "mousedown") {
            _this2.mousedownX = e.evt.offsetX;
            _this2.mousedownY = e.evt.offsetY;
          }

          if (eventType === "mouseup") {
            _this2.mouseupX = e.evt.offsetX;
            _this2.mouseupY = e.evt.offsetY;

            if (_this2.mouseupX !== _this2.mousedownX || _this2.mouseupY !== _this2.mousedownY) {
              e.type = "dragend";
              e.initLayerX = _this2.mousedownX;
              e.initLayerY = _this2.mousedownY;
            }
          }

          e.evt.cancelBubble = true;
          callBack(e);
        });
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(eventType) {
      this.shape.off(eventType);
    }
  }, {
    key: "enableMassClear",
    value: // 允许批量清除
    function enableMassClear() {
      this.enableMassClear = true;
    }
  }, {
    key: "disableMassClear",
    value: // 不允许批量清除
    function disableMassClear() {
      this.enableMassClear = false;
    }
  }, {
    key: "remove",
    value: // 删除覆盖物
    function remove() {
      this.shape.remove();
      this.layer.draw();
    }
  }]);

  return POverlay;
}();

/**
 * 图片地图标记物类
 */

var PMarker = /*#__PURE__*/function (_POverlay) {
  _inherits(PMarker, _POverlay);

  var _super = _createSuper(PMarker);

  // 构造器
  function PMarker(option) {
    var _this;

    _classCallCheck(this, PMarker);

    _this = _super.call(this, option);
    _this.isLoaded = false;
    return _this;
  }

  _createClass(PMarker, [{
    key: "create",
    value: // 初始化标记物，将其添加到图层和舞台
    function create(stage, layer) {
      var _this2 = this;

      _get(_getPrototypeOf(PMarker.prototype), "create", this).call(this, stage, layer);

      this.config.x = this.option.point.x;
      this.config.y = this.option.point.y; // this.config.offset = { x: 22, y: 40 };

      this.config.detectionType = "pixel";
      this.config.visible = true;
      var img = new Image();

      img.onload = function () {
        _this2.config.image = img;
        _this2.shape = new Kinetic.Image(_this2.config);

        _this2.layer.add(_this2.shape);

        _this2.layer.draw(); // this.stage.add(this.layer);


        _this2.isLoaded = true;
        img.onload = null;
        img = null;
      };

      img.src = this.option.icon;
    }
  }]);

  return PMarker;
}(POverlay);
/**
 * 图片地图折线类
 */

var PPolyline = /*#__PURE__*/function (_POverlay2) {
  _inherits(PPolyline, _POverlay2);

  var _super2 = _createSuper(PPolyline);

  // 构造器
  function PPolyline(option) {
    var _this3;

    _classCallCheck(this, PPolyline);

    _this3 = _super2.call(this, option);
    _this3.midPointsArr = [];
    _this3.editMarkers = [];
    _this3.noShowMidPoint = option.noShowMidPoint || false;
    return _this3;
  }

  _createClass(PPolyline, [{
    key: "create",
    value: // 初始化折线，将其添加到图层和舞台
    function create(stage, layer) {
      var _this4 = this;

      _get(_getPrototypeOf(PPolyline.prototype), "create", this).call(this, stage, layer);

      this.config.detectionType = "pixel";
      this.config.stroke = this.option.stroke || "#777777";
      this.config.strokeWidth = this.option.strokeWidth || 4;
      this.config.points = [];
      this.option.points.forEach(function (v) {
        _this4.config.points.push(v.x);

        _this4.config.points.push(v.y);
      });
      this.shape = new Kinetic.Line(this.config);
      this.layer.add(this.shape);
      this.layer.draw(); // this.stage.add(this.layer);

      this._getMiddlePoint();

      this._setEditMarker(this._editEventCall.bind(this));

      this.disableEditing();
    }
  }, {
    key: "enableEditing",
    value: // 允许折线编辑
    function enableEditing() {
      var _this5 = this;

      this.editMarkers.forEach(function (v) {
        if (!_this5.noShowMidPoint) {
          v.marker.show();
        } else {
          if (v.type !== "midpoint") {
            v.marker.show();
          }
        }
      });
      this.layer.draw();
    }
  }, {
    key: "disableEditing",
    value: // 禁止折线编辑
    function disableEditing() {
      this.editMarkers.forEach(function (v) {
        v.marker.hide();
      });
      this.layer.draw();
    }
  }, {
    key: "_resetLinePath",
    value: // 编辑折线后重新绘制折线和操作点
    function _resetLinePath() {
      var _this6 = this;

      this.config.points = [];
      this.option.points.forEach(function (v) {
        _this6.config.points.push(v.x);

        _this6.config.points.push(v.y);
      });
      this.editMarkers.forEach(function (v) {
        if (v.type === "midpoint") {
          v.marker.remove();
        }
      });

      this._getMiddlePoint();

      this.midPointsArr.forEach(function (v) {
        if (!_this6.noShowMidPoint) {
          _this6._getEditMarker("midpoint", v, _this6._editEventCall.bind(_this6));
        }
      });
      this.shape.setPoints(this.config.points);
      this.layer.draw();
    }
  }, {
    key: "_getMiddlePoint",
    value: // 获取折线的所有中间操作点
    function _getMiddlePoint() {
      var _this7 = this;

      var lastPoint;
      this.midPointsArr = [];
      this.option.points.forEach(function (v, i) {
        if (i !== 0) {
          _this7.midPointsArr.push({
            x: lastPoint.x + (v.x - lastPoint.x) / 2,
            y: lastPoint.y + (v.y - lastPoint.y) / 2,
            index: i
          });
        }

        lastPoint = v;
      });
    }
  }, {
    key: "_setEditMarker",
    value: // 设置折线的所有操作点
    function _setEditMarker(callBack) {
      var _this8 = this;

      this.option.points.forEach(function (v) {
        _this8._getEditMarker("endpoint", v, callBack);
      });
      this.midPointsArr.forEach(function (v) {
        _this8._getEditMarker("midpoint", v, callBack);
      });
    }
  }, {
    key: "_getEditMarker",
    value: // 生成折线的所有操作点
    function _getEditMarker(type, point, callBack) {
      var fill;

      if (type === "endpoint") {
        fill = "white";
      } else if (type === "midpoint") {
        fill = "transparent";
      }

      var config = {
        x: point.x,
        y: point.y,
        width: 20,
        height: 20,
        offset: {
          x: 10,
          y: 10
        },
        fill: fill,
        stroke: "black",
        strokeWidth: 1,
        draggable: true
      };
      var marker = new Kinetic.Rect(config);
      var eventArray = ["click", "rightclick", "dblclick", "mousedown", "mouseup", "dragstart", "dragmove", "dragend"];
      eventArray.forEach(function (eventType) {
        marker.on(eventType, function (e) {
          e.cancelBubble = true;

          if (window.event.stopPropagation) {
            window.event.stopPropagation();
          } else {
            window.event.cancelBubble = true;
          }

          callBack(e, point);
        });
      });
      this.layer.add(marker);
      this.editMarkers.push({
        marker: marker,
        type: type
      });
      this.layer.draw();
    }
  }, {
    key: "_editEventCall",
    value: // 操作点操作时的事件监听回调
    function _editEventCall(e, point) {
      var pointX = point.x;
      var pointY = point.y;

      if (e.type === "dragmove") {
        var pointXNew = this.stage.getPointerPosition().x;
        var pointYNew = this.stage.getPointerPosition().y;

        var _iterator = _createForOfIteratorHelper(this.editMarkers),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var v = _step.value;

            if (v.marker._id === e.target._id) {
              if (v.type === "endpoint") {
                var _iterator2 = _createForOfIteratorHelper(this.option.points),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var item = _step2.value;

                    if (item.x === pointX && item.y === pointY) {
                      item.x = pointXNew;
                      item.y = pointYNew;
                      pointX = pointXNew;
                      pointY = pointYNew;
                      break;
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              } else if (v.type === "midpoint") {
                var _iterator3 = _createForOfIteratorHelper(this.midPointsArr),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var _item = _step3.value;

                    if (_item.x === pointX && _item.y === pointY) {
                      _item.x = pointXNew;
                      _item.y = pointYNew;
                      pointX = pointXNew;
                      pointY = pointYNew;
                      this.option.points.splice(_item.index, 0, _item);
                      v.type = "endpoint";
                      v.marker.setFill("white");
                      break;
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }

              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this._resetLinePath();
      }
    }
  }, {
    key: "updateEditMarker",
    value: // 更新编辑操作点
    function updateEditMarker() {
      var _this9 = this;

      var lastX;
      this.option.points = [];
      this.shape.getPoints().forEach(function (v, k) {
        if (k % 2 === 0) {
          lastX = v;
        } else {
          _this9.option.points.push({
            x: lastX,
            y: v
          });
        }
      });

      this._getMiddlePoint();

      this._setEditMarker(this._editEventCall.bind(this));
    }
  }, {
    key: "remove",
    value: // 删除元素
    function remove() {
      _get(_getPrototypeOf(PPolyline.prototype), "remove", this).call(this);

      this.editMarkers.forEach(function (v) {
        v.marker.remove();
      });
      this.layer.draw();
    }
  }]);

  return PPolyline;
}(POverlay);
/**
 * 图片地图矩形类
 */

var PRectangle = /*#__PURE__*/function (_POverlay3) {
  _inherits(PRectangle, _POverlay3);

  var _super3 = _createSuper(PRectangle);

  // 构造器
  function PRectangle(option) {
    _classCallCheck(this, PRectangle);

    return _super3.call(this, option);
  }

  _createClass(PRectangle, [{
    key: "create",
    value: // 初始化矩形，将其添加到图层和舞台
    function create(stage, layer) {
      _get(_getPrototypeOf(PRectangle.prototype), "create", this).call(this, stage, layer);

      this.config.x = this.option.x;
      this.config.y = this.option.y;
      this.config.fill = 'rgba(37,210,152,0.4)';
      this.config.stroke = '#43FBEF';
      this.config.strokeWidth = 1;
      this.config.lineJoin = 'round';
      this.config.dash = [4, 4];
      this.config.width = this.option.width;
      this.config.height = this.option.height;
      this.shape = new Kinetic.Rect(this.config);
      this.layer.add(this.shape);
      this.layer.draw(); // this.stage.add(this.layer);
    }
  }]);

  return PRectangle;
}(POverlay);
/**
 * 图片地图多边形类
 */

var PPolygon = /*#__PURE__*/function (_POverlay4) {
  _inherits(PPolygon, _POverlay4);

  var _super4 = _createSuper(PPolygon);

  // 构造器
  function PPolygon(option) {
    _classCallCheck(this, PPolygon);

    return _super4.call(this, option);
  }

  _createClass(PPolygon, [{
    key: "create",
    value: // 初始化多边形，将其添加到图层和舞台
    function create(stage, layer) {
      _get(_getPrototypeOf(PPolygon.prototype), "create", this).call(this, stage, layer);

      this.config.points = this.option.points;
      this.config.fill = 'rgba(37,210,152,0.4)';
      this.config.stroke = '#43FBEF';
      this.config.strokeWidth = 1;
      this.config.lineJoin = 'round';
      this.config.dash = [4, 4];
      this.shape = new Kinetic.Polygon(this.config);
      this.layer.add(this.shape);
      this.layer.draw(); // this.stage.add(this.layer);
    }
  }]);

  return PPolygon;
}(POverlay);
/**
 * 图片地图圆形类
 */

var PCircle = /*#__PURE__*/function (_POverlay5) {
  _inherits(PCircle, _POverlay5);

  var _super5 = _createSuper(PCircle);

  // 构造器
  function PCircle(option) {
    _classCallCheck(this, PCircle);

    return _super5.call(this, option);
  }

  _createClass(PCircle, [{
    key: "create",
    value: // 初始化圆形，将其添加到图层和舞台
    function create(stage, layer) {
      _get(_getPrototypeOf(PCircle.prototype), "create", this).call(this, stage, layer);

      this.config.x = this.option.x;
      this.config.y = this.option.y;
      this.config.fill = 'rgba(37,210,152,0.4)';
      this.config.stroke = '#43FBEF';
      this.config.strokeWidth = 1;
      this.config.lineJoin = 'round';
      this.config.dash = [4, 4];
      this.config.radius = this.option.radius;
      this.shape = new Kinetic.Circle(this.config);
      this.layer.add(this.shape);
      this.layer.draw(); // this.stage.add(this.layer);
    }
  }]);

  return PCircle;
}(POverlay);
/**
 * 图片地图扇形类
 */

var PSector = /*#__PURE__*/function (_POverlay6) {
  _inherits(PSector, _POverlay6);

  var _super6 = _createSuper(PSector);

  // 构造器
  function PSector(option) {
    var _this10;

    _classCallCheck(this, PSector);

    _this10 = _super6.call(this, option);
    _this10.sMarker = null;
    _this10.eMarker = null;
    _this10.mMarker = null;
    _this10.radius = option.radius || 0;
    _this10.sDegree = option.sDegree || 0;
    _this10.eDegree = option.eDegree || 0;
    return _this10;
  }

  _createClass(PSector, [{
    key: "create",
    value: // 初始化扇形，将其添加到图层和舞台
    function create(stage, layer) {
      _get(_getPrototypeOf(PSector.prototype), "create", this).call(this, stage, layer);

      this.config.x = this.option.center.x;
      this.config.y = this.option.center.y;
      this.config.radius = this.option.radius;
      this.config.fill = 'rgba(67,251,239,0.4)';
      this.config.stroke = '#43FBEF';
      this.config.strokeWidth = 1;
      this.config.angle = this.option.eDegree - this.option.sDegree;
      this.config.rotation = -this.option.eDegree;
      this.shape = new Kinetic.Wedge(this.config);
      this.layer.add(this.shape);
      this.layer.draw(); // this.stage.add(this.layer);

      this._setEditMarker(this._editEventCall.bind(this));

      this.disableEditing();
    }
  }, {
    key: "enableEditing",
    value: // 允许扇形编辑，即显示编辑操作点
    function enableEditing() {
      this.sMarker.show();
      this.eMarker.show();
      this.mMarker.show();
      this.layer.draw();
    }
  }, {
    key: "disableEditing",
    value: // 禁止扇形编辑，即隐藏编辑操作点
    function disableEditing() {
      this.sMarker.hide();
      this.eMarker.hide();
      this.mMarker.hide();
      this.layer.draw();
    }
  }, {
    key: "_setEditMarker",
    value: // 设置扇形编辑操作点
    function _setEditMarker(callBack) {
      this.sMarker = this._getEditMarker(this.option.center, this.option.radius, "start", this.option.sDegree, callBack);
      this.eMarker = this._getEditMarker(this.option.center, this.option.radius, "end", this.option.eDegree, callBack);
      this.mMarker = this._getEditMarker(this.option.center, this.option.radius, "middle", (this.option.eDegree - this.option.sDegree) / 2 + this.option.sDegree, callBack);
    }
  }, {
    key: "_getEditMarker",
    value: // 添加用于编辑扇形的三个操作点
    function _getEditMarker(center, radius, type, degree, callBack) {
      var point = this._getCurvePoint(center, radius, degree);

      var config = {
        x: point.x,
        y: point.y,
        fill: '#43FBEF',
        radius: 8,
        draggable: true
      };
      var marker = new Kinetic.Circle(config);
      var eventArray = ["click", "rightclick", "dblclick", "mousedown", "mouseup", "dragstart", "dragmove", "dragend"];
      eventArray.forEach(function (eventType) {
        marker.on(eventType, function (e) {
          e.cancelBubble = true;

          if (window.event.stopPropagation) {
            window.event.stopPropagation();
          } else {
            window.event.cancelBubble = true;
          }

          callBack(e, type);
        });
      });
      this.layer.add(marker);
      this.layer.draw(); // this.stage.add(this.layer);

      return marker;
    }
  }, {
    key: "_getCurvePoint",
    value: // 计算圆弧上指定点的坐标
    function _getCurvePoint(center, radius, degree) {
      var y = radius * Math.sin(degree * Math.PI / 180);
      var x = radius * Math.cos(degree * Math.PI / 180);
      return {
        x: center.x + x,
        y: center.y - y
      };
    }
  }, {
    key: "_resetSectorPath",
    value: // 重新绘制扇形和其编辑操作点
    function _resetSectorPath(radius, sDegree, eDegree) {
      this.shape.setAngle(eDegree - sDegree);
      this.shape.setRadius(radius);
      this.shape.setRotation(-eDegree);
      this.sMarker.setX(this._getCurvePoint(this.option.center, radius, sDegree).x);
      this.sMarker.setY(this._getCurvePoint(this.option.center, radius, sDegree).y);
      this.mMarker.setX(this._getCurvePoint(this.option.center, radius, (eDegree - sDegree) / 2 + sDegree).x);
      this.mMarker.setY(this._getCurvePoint(this.option.center, radius, (eDegree - sDegree) / 2 + sDegree).y);
      this.eMarker.setX(this._getCurvePoint(this.option.center, radius, eDegree).x);
      this.eMarker.setY(this._getCurvePoint(this.option.center, radius, eDegree).y);
      this.layer.draw();
    }
  }, {
    key: "_editEventCall",
    value: // 编辑操作点的事件回调
    function _editEventCall(e, type) {
      if (type === "start") {
        this._sMarkerEdit(e);
      } else if (type === "end") {
        this._eMarkerEdit(e);
      } else if (type === "middle") {
        this._mMarkerEdit(e);
      }
    }
  }, {
    key: "_sMarkerEdit",
    value: // 开始点的编辑事件
    function _sMarkerEdit(e) {
      if (e.type === "dragmove") {
        var y = this.stage.getPointerPosition().y - this.option.center.y;
        var x = this.stage.getPointerPosition().x - this.option.center.x;

        if (y > 0 && x > 0) {
          this.sDegree = 360 - Math.atan(Math.abs(y) / Math.abs(x)) * 180 / Math.PI;
        } else if (y > 0 && x < 0) {
          this.sDegree = 180 + Math.atan(Math.abs(y) / Math.abs(x)) * 180 / Math.PI;
        } else if (y < 0 && x < 0) {
          this.sDegree = 180 - Math.atan(Math.abs(y) / Math.abs(x)) * 180 / Math.PI;
        } else if (y < 0 && x > 0) {
          this.sDegree = Math.atan(Math.abs(y) / Math.abs(x)) * 180 / Math.PI;
        }

        if (this.sDegree > this.eDegree) {
          this.sDegree = -(360 - this.sDegree);
        }

        this._resetSectorPath(this.radius, this.sDegree, this.eDegree);
      }
    }
  }, {
    key: "_eMarkerEdit",
    value: // 结束点的编辑事件
    function _eMarkerEdit(e) {
      if (e.type === "dragmove") {
        var y = this.stage.getPointerPosition().y - this.option.center.y;
        var x = this.stage.getPointerPosition().x - this.option.center.x;

        if (y > 0 && x > 0) {
          this.eDegree = Math.atan(Math.abs(y) / Math.abs(x)) * 180 / Math.PI;
        } else if (y > 0 && x < 0) {
          this.eDegree = 180 - Math.atan(Math.abs(y) / Math.abs(x)) * 180 / Math.PI;
        } else if (y < 0 && x < 0) {
          this.eDegree = 180 + Math.atan(Math.abs(y) / Math.abs(x)) * 180 / Math.PI;
        } else if (y < 0 && x > 0) {
          this.eDegree = 360 - Math.atan(Math.abs(y) / Math.abs(x)) * 180 / Math.PI;
        }

        if (this.sDegree > this.eDegree) {
          this.eDegree = 360 + this.eDegree;
        }

        this.eDegree = 360 - this.eDegree;

        this._resetSectorPath(this.radius, this.sDegree, this.eDegree);
      }
    }
  }, {
    key: "_mMarkerEdit",
    value: // 中间点的编辑事件
    function _mMarkerEdit(e) {
      if (e.type === "dragmove") {
        this.radius = Math.sqrt(Math.pow(this.stage.getPointerPosition().x - this.option.center.x, 2) + Math.pow(this.stage.getPointerPosition().y - this.option.center.y, 2));

        this._resetSectorPath(this.radius, this.sDegree, this.eDegree);
      }
    }
  }, {
    key: "remove",
    value: // 删除元素
    function remove() {
      _get(_getPrototypeOf(PSector.prototype), "remove", this).call(this);

      this.sMarker.remove();
      this.mMarker.remove();
      this.eMarker.remove();
      this.layer.draw();
    }
  }, {
    key: "hideSector",
    value: function hideSector() {
      this.sMarker.hide();
      this.eMarker.hide();
      this.mMarker.hide();
      this.shape.hide();
      this.layer.draw();
    }
  }, {
    key: "showSector",
    value: function showSector(isCanEdit) {
      if (isCanEdit === "canEdit") {
        this.sMarker.show();
        this.eMarker.show();
        this.mMarker.show();
      }

      this.shape.show();
      this.layer.draw();
    }
  }, {
    key: "getSectorInfo",
    value: function getSectorInfo() {
      return {
        center: this.option.center,
        radius: this.radius,
        sDegree: this.sDegree,
        eDegree: this.eDegree
      };
    }
  }]);

  return PSector;
}(POverlay);

/**
 * 图片地图类
 */

var PMap = /*#__PURE__*/function () {
  // 构造器
  function PMap(mapOption) {
    _classCallCheck(this, PMap);

    this.mapOption = mapOption;
    this.body = null;
    this.container = null;
    this.canvas = null;
    this.stage = null;
    this.img = null;
    this.isLoaded = false;
    this.overlayMap = new Map();
    this.create();
  }

  _createClass(PMap, [{
    key: "_genModelIndex",
    value: // 用js维护一套产生不重复id的机制
    function _genModelIndex() {
      var idStr = Date.now().toString(36);
      idStr += Math.random().toString(36).substr(3);
      return idStr;
    }
  }, {
    key: "create",
    value: // 初始化图片地图
    function create() {
      var _this = this;

      this.body = document.getElementsByTagName('body')[0];
      this.container = document.getElementById(this.mapOption.domId);
      this.container.style.position = "relative";
      this.container.style.display = "flex";
      this.container.style.alignItems = "center";
      this.container.style.justifyContent = "center";
      this.container.style.overflow = "hidden";
      this.canvas = document.createElement("div");
      this.canvas.id = "stage";
      this.img = document.createElement('img');
      this.img.src = this.mapOption.picUrl;

      this.img.onload = function () {
        _this.canvas.style.width = _this.img.width + "px";
        _this.canvas.style.height = _this.img.height + "px";
        _this.canvas.style.backgroundSize = "".concat(_this.img.width, "px ").concat(_this.img.height, "px"); // this.canvas.style.backgroundImage = 'url("' + Vue.prototype.$common.setPictureShow(this.img.src) + '")';

        _this.canvas.style.backgroundImage = 'url("' + _this.img.src + '")';
        _this.canvas.style.position = "absolute";

        if (_this.mapOption.startPoint) {
          _this.canvas.style.top = _this.mapOption.startPoint.y + "px";
          _this.canvas.style.left = _this.mapOption.startPoint.x + "px";
        }

        _this.canvas.style.transform = "scale(" + _this.mapOption.scale + ")";

        _this.container.appendChild(_this.canvas);

        _this.canvas.oncontextmenu = function (e) {
          window.event.returnValue = false;
          return false;
        };

        _this.canvas.ondragover = function (e) {
          e.preventDefault();
        };

        _this.stage = new Kinetic.Stage({
          container: "stage",
          width: _this.img.width,
          height: _this.img.height
        });
        _this.layer = new Kinetic.Layer();

        _this.stage.add(_this.layer);

        _this.isLoaded = true;
      };

      this.enableCanvasDragging();
      this.enableScrollWheelZoom();
    }
  }, {
    key: "enableCanvasDragging",
    value: // 允许画布拖动
    function enableCanvasDragging() {
      var _this2 = this;

      this.canvas.addEventListener("mousedown", function (e) {
        var disX = e.clientX - _this2.canvas.offsetLeft;
        var disY = e.clientY - _this2.canvas.offsetTop;
        e.preventDefault();

        _this2.body.onmousemove = function (ev) {
          ev.preventDefault();
          var x = ev.clientX - disX;
          var y = ev.clientY - disY;
          _this2.canvas.style.left = x + 'px';
          _this2.canvas.style.top = y + 'px';
        }; // 鼠标弹起后停止移动


        _this2.body.onmouseup = function () {
          _this2.body.onmousemove = null;
          _this2.body.onmouseup = null;
        };
      });
    }
  }, {
    key: "setCenter",
    value: // 设置画布在容器里居中
    function setCenter() {
      this.canvas.style.top = "";
      this.canvas.style.left = "";
    }
  }, {
    key: "setPosition",
    value: // 设置地图
    function setPosition(left, top) {
      this.canvas.style.top = top + "px";
      this.canvas.style.left = left + "px";
    }
  }, {
    key: "enableScrollWheelZoom",
    value: // 允许滚轮缩放
    function enableScrollWheelZoom() {
      var _this3 = this;

      this.container.onmousewheel = function (e) {
        var transform = _this3.canvas.style.transform;
        var scale = parseFloat(transform.substring(transform.indexOf('(') + 1, transform.indexOf(')'))) || 1;
        scale += e.wheelDelta / 1200;

        if (scale > 0) {
          _this3.canvas.style.transform = "scale(" + scale + ")";
        }
      };
    }
  }, {
    key: "zoomIn",
    value: // 放大地图
    function zoomIn() {
      var transform = this.canvas.style.transform;
      var scale = parseFloat(transform.substring(transform.indexOf('(') + 1, transform.indexOf(')'))) || 1;
      scale = scale + 0.1;
      this.canvas.style.transform = "scale(" + scale + ")";
    }
  }, {
    key: "zoomOut",
    value: // 缩小地图
    function zoomOut() {
      var transform = this.canvas.style.transform;
      var scale = parseFloat(transform.substring(transform.indexOf('(') + 1, transform.indexOf(')'))) || 1;

      if (scale > 0.1) {
        scale = scale - 0.1;
      }

      this.canvas.style.transform = "scale(" + scale + ")";
    }
  }, {
    key: "addOverlay",
    value: // 向图片地图添加覆盖物
    function addOverlay(overlay) {
      overlay.create(this.stage, this.layer);

      var id = this._genModelIndex();

      this.overlayMap.set(id, overlay);
    }
  }, {
    key: "openDrawManger",
    value: // 打开图形绘制模式
    function openDrawManger(drawType) {
      var _this4 = this;

      var callBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      this.canvas.style.cursor = 'crosshair';

      if (drawType === "rect" || drawType === "circle") {
        this.stage.on("contentMousedown", function (e) {
          e.cancelBubble = true;

          if (window.event.stopPropagation) {
            window.event.stopPropagation();
          } else {
            window.event.cancelBubble = true;
          }

          var pointX = _this4.stage.getPointerPosition().x;

          var pointY = _this4.stage.getPointerPosition().y;

          if (drawType === "rect") {
            _this4._drawRect(pointX, pointY, callBack);
          } else if (drawType === "circle") {
            _this4._drawCircle(pointX, pointY, callBack);
          }
        });
      } else if (drawType === "polyline") {
        this._drawPolyline(callBack);
      } else if (drawType === "polygon") {
        this._drawPolygon(callBack);
      }
    }
  }, {
    key: "_drawRect",
    value: // 绘制矩形
    function _drawRect(pointX, pointY, callBack) {
      var _this5 = this;

      var option = {
        x: pointX,
        y: pointY,
        width: 0,
        height: 0
      };
      var rect = new PRectangle(option);
      this.addOverlay(rect);
      this.stage.on("contentMousemove", function (e) {
        e.cancelBubble = true;

        if (window.event.stopPropagation) {
          window.event.stopPropagation();
        } else {
          window.event.cancelBubble = true;
        }

        var x = _this5.stage.getPointerPosition().x;

        var y = _this5.stage.getPointerPosition().y;

        if (x - pointX > 0 && y - pointY > 0) {
          option.x = pointX;
          option.y = pointY;
        } else if (x - pointX > 0 && y - pointY < 0) {
          option.x = pointX;
          option.y = y;
        } else if (x - pointX < 0 && y - pointY < 0) {
          option.x = x;
          option.y = y;
        } else if (x - pointX < 0 && y - pointY > 0) {
          option.x = x;
          option.y = pointY;
        }

        option.width = Math.abs(x - pointX);
        option.height = Math.abs(y - pointY);
        rect.shape.setX(option.x);
        rect.shape.setY(option.y);
        rect.shape.setWidth(option.width);
        rect.shape.setHeight(option.height);
        rect.layer.draw();
      });
      this.stage.on("contentMouseup", function (e) {
        e.cancelBubble = true;

        if (window.event.stopPropagation) {
          window.event.stopPropagation();
        } else {
          window.event.cancelBubble = true;
        }

        _this5.canvas.style.cursor = 'default';

        _this5.stage.off("contentMousedown");

        _this5.stage.off("contentMousemove");

        _this5.stage.off("contentMouseup");

        callBack(rect, e);
      });
    }
  }, {
    key: "_drawCircle",
    value: // 绘制圆形
    function _drawCircle(pointX, pointY, callBack) {
      var _this6 = this;

      var option = {
        x: pointX,
        y: pointY,
        radius: 0
      };
      var circle = new PCircle(option);
      this.addOverlay(circle);
      this.stage.on("contentMousemove", function (e) {
        e.cancelBubble = true;

        if (window.event.stopPropagation) {
          window.event.stopPropagation();
        } else {
          window.event.cancelBubble = true;
        }

        var x = _this6.stage.getPointerPosition().x;

        var y = _this6.stage.getPointerPosition().y;

        option.radius = Math.sqrt(Math.pow(x - pointX, 2) + Math.pow(y - pointY, 2));
        circle.shape.setRadius(option.radius);
        circle.layer.draw();
      });
      this.stage.on("contentMouseup", function (e) {
        e.cancelBubble = true;

        if (window.event.stopPropagation) {
          window.event.stopPropagation();
        } else {
          window.event.cancelBubble = true;
        }

        _this6.canvas.style.cursor = 'default';

        _this6.stage.off("contentMousedown");

        _this6.stage.off("contentMousemove");

        _this6.stage.off("contentMouseup");

        callBack(circle, e);
      });
    }
  }, {
    key: "_drawPolygon",
    value: // 绘制多边形
    function _drawPolygon(callBack) {
      var _this7 = this;

      var option = {
        points: [0, 0]
      };
      var points = [];
      option.points.forEach(function (v) {
        points.push(v.x);
        points.push(v.y);
      });
      var polygon = new PPolygon(option);
      this.addOverlay(polygon);
      this.stage.on("contentMousedown", function (e) {
        e.cancelBubble = true;

        if (window.event.stopPropagation) {
          window.event.stopPropagation();
        } else {
          window.event.cancelBubble = true;
        }

        var pointX = _this7.stage.getPointerPosition().x;

        var pointY = _this7.stage.getPointerPosition().y;

        points.forEach(function (v, i) {
          if (i == points.length - 2) {
            points[i] = pointX;
          } else if (i == points.length - 1) {
            points[i] = pointY;
          }
        });
        points.push(pointX);
        points.push(pointY);

        _this7.stage.on("contentMousemove", function (e) {
          e.cancelBubble = true;

          if (window.event.stopPropagation) {
            window.event.stopPropagation();
          } else {
            window.event.cancelBubble = true;
          }

          var x = _this7.stage.getPointerPosition().x;

          var y = _this7.stage.getPointerPosition().y;

          points.forEach(function (v, i) {
            if (i == points.length - 2) {
              points[i] = x;
            } else if (i == points.length - 1) {
              points[i] = y;
            }
          });
          polygon.shape.setPoints(points);
          polygon.layer.draw();
        });

        _this7.stage.on("contentDblclick", function (e) {
          e.cancelBubble = true;

          if (window.event.stopPropagation) {
            window.event.stopPropagation();
          } else {
            window.event.cancelBubble = true;
          }

          _this7.canvas.style.cursor = 'default';

          _this7.stage.off("contentMousedown");

          _this7.stage.off("contentMousemove");

          _this7.stage.off("contentDblclick");

          var timer = setTimeout(function () {
            points.pop();
            points.pop();
            points.pop();
            points.pop();
            polygon.shape.setPoints(points);
            polygon.layer.draw();
            callBack(polygon, e);
            clearTimeout(timer);
            timer = null;
          }, 100);
        });
      });
    }
  }, {
    key: "_drawPolyline",
    value: // 绘制折线
    function _drawPolyline(callBack) {
      var _this8 = this;

      var option = {
        points: [{
          x: -20,
          y: -20
        }]
      };
      var points = [];
      option.points.forEach(function (v) {
        points.push(v.x);
        points.push(v.y);
      });
      var polyline = new PPolyline(option);
      this.addOverlay(polyline);
      this.stage.on("contentMousedown", function (e) {
        e.cancelBubble = true;

        if (window.event.stopPropagation) {
          window.event.stopPropagation();
        } else {
          window.event.cancelBubble = true;
        }

        var pointX = _this8.stage.getPointerPosition().x;

        var pointY = _this8.stage.getPointerPosition().y;

        points.forEach(function (v, i) {
          if (i == points.length - 2) {
            points[i] = pointX;
          } else if (i == points.length - 1) {
            points[i] = pointY;
          }
        });
        points.push(pointX);
        points.push(pointY);

        _this8.stage.on("contentMousemove", function (e) {
          e.cancelBubble = true;

          if (window.event.stopPropagation) {
            window.event.stopPropagation();
          } else {
            window.event.cancelBubble = true;
          }

          var x = _this8.stage.getPointerPosition().x;

          var y = _this8.stage.getPointerPosition().y;

          points.forEach(function (v, i) {
            if (i == points.length - 2) {
              points[i] = x;
            } else if (i == points.length - 1) {
              points[i] = y;
            }
          });
          polyline.shape.setPoints(points);
          polyline.layer.draw();
        });

        _this8.stage.on("contentDblclick", function (e) {
          e.cancelBubble = true;

          if (window.event.stopPropagation) {
            window.event.stopPropagation();
          } else {
            window.event.cancelBubble = true;
          }

          _this8.canvas.style.cursor = 'default';

          _this8.stage.off("contentMousedown");

          _this8.stage.off("contentMousemove");

          _this8.stage.off("contentDblclick");

          var timer = setTimeout(function () {
            points.pop();
            points.pop();
            points.pop();
            points.pop();
            polyline.shape.setPoints(points);
            polyline.layer.draw();
            polyline.updateEditMarker();
            callBack(polyline, e);
            clearTimeout(timer);
            timer = null;
          }, 100);
        });
      });
    }
  }, {
    key: "clearOverlays",
    value: // 批量清除覆盖物
    function clearOverlays() {
      var _this9 = this;

      this.overlayMap.forEach(function (v, k) {
        if (v.enableMassClear) {
          v.remove();

          _this9.overlayMap["delete"](k);
        }
      });
    }
  }, {
    key: "removeOverlay",
    value: // 删除覆盖物
    function removeOverlay(overlay) {
      overlay.remove();
    }
  }, {
    key: "getStageInfo",
    value: // 获取舞台div信息
    function getStageInfo() {
      var x = this.canvas.offsetLeft;
      var y = this.canvas.offsetTop;
      var width = this.canvas.offsetWidth;
      var height = this.canvas.offsetHeight;
      var transform = this.canvas.style.transform;
      var scale = parseFloat(transform.substring(transform.indexOf('(') + 1, transform.indexOf(')'))) || 1;
      return {
        x: x,
        y: y,
        width: width,
        height: height,
        scale: scale
      };
    }
  }, {
    key: "addEventListener",
    value: // 覆盖物事件监听
    function addEventListener(evType) {
      var _this10 = this;

      var callBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      if (evType === "dragstart") {
        this.canvas.addEventListener("mousedown", function (e) {
          var disX = e.clientX - _this10.canvas.offsetLeft;
          var disY = e.clientY - _this10.canvas.offsetTop;
          e.preventDefault();

          _this10.body.onmousemove = function (ev) {
            ev.preventDefault();
            var x = ev.clientX - disX;
            var y = ev.clientY - disY;
            _this10.canvas.style.left = x + 'px';
            _this10.canvas.style.top = y + 'px';
            callBack(ev);
          }; // 鼠标弹起后停止移动


          _this10.body.onmouseup = function () {
            _this10.body.onmousemove = null;
            _this10.body.onmouseup = null;
          };
        });
      } else {
        this.canvas.addEventListener(evType, function (e) {
          callBack(e);
        });
      }
    }
  }]);

  return PMap;
}();

/**
 * 百度地图扇形工具类
 */
var _SectorUtil = /*#__PURE__*/function () {
  // 构造器
  function _SectorUtil(option, map) {
    _classCallCheck(this, _SectorUtil);

    this.map = map;
    this.sector = null;
    this.center = new BMap.Point(option.center.lng, option.center.lat) || null;
    this.radius = option.radius || 0;
    this.sDegree = option.sDegree || 0;
    this.eDegree = option.eDegree || 0;
    this.sMarker = null;
    this.eMarker = null;
    this.mMarker = null;
    this.lngConv = 0; //1经度与原点的距离

    this.latConv = 0; //1纬度与原点的距离

    this._initSector();
  }

  _createClass(_SectorUtil, [{
    key: "_initSector",
    value: // 初始化扇形
    function _initSector() {
      var _this = this;

      this._computeConv(this.center);

      this._setSectorPath(this.center, this.radius, this.sDegree, this.eDegree);

      this._setEditMarker(this._editEventCall.bind(this));

      var timer = setTimeout(function () {
        _this._hideMarkers();

        clearTimeout(timer);
        timer = null;
      }, 10);
    }
  }, {
    key: "_computeConv",
    value: // 计算单位距离
    function _computeConv(center) {
      this.lngConv = this.map.getDistance(center, new BMap.Point(center.lng + 1, center.lat)); //计算1经度与原点的距离

      this.latConv = this.map.getDistance(center, new BMap.Point(center.lng, center.lat + 1)); //计算1纬度与原点的距离
    } // 设置用于编辑扇形的三个marker

  }, {
    key: "_setEditMarker",
    value: function _setEditMarker(callBack) {
      this.sMarker = this._getEditMarker(this.center, this.radius, "start", this.sDegree, callBack);
      this.eMarker = this._getEditMarker(this.center, this.radius, "end", this.eDegree, callBack);
      this.mMarker = this._getEditMarker(this.center, this.radius, "middle", (this.eDegree - this.sDegree) / 2 + this.sDegree, callBack);
    }
  }, {
    key: "_getEditMarker",
    value: // 添加用于编辑扇形的三个marker
    function _getEditMarker(center, radius, type, degree, callBack) {
      var point = this._getCurvePoint(center, radius, degree);

      var marker = new BMap.Marker(point, {
        enableDragging: true,
        enableMassClear: false
      });
      var myIcon = new BMap.Icon(require('utils/circle.png'), new BMap.Size(15, 15), {
        imageSize: new BMap.Size(15, 15)
      });
      var eventArray = ["click", "rightclick", "dblclick", "mousedown", "mouseup", "dragstart", "dragging", "dragend"];
      eventArray.forEach(function (eventType) {
        marker.addEventListener(eventType, function (e) {
          callBack(e, type);
        });
      });
      marker.setIcon(myIcon);
      var icon = marker.getIcon();
      marker.setShadow(icon);
      this.map.addOverlay(marker);
      return marker;
    }
  }, {
    key: "_hideMarkers",
    value: // 隐藏编辑用的三个marker
    function _hideMarkers() {
      this.sMarker.hide();
      this.eMarker.hide();
      this.mMarker.hide();
    }
  }, {
    key: "_showMarkers",
    value: // 显示编辑用的三个marker
    function _showMarkers() {
      this.sMarker.show();
      this.eMarker.show();
      this.mMarker.show();
    }
  }, {
    key: "_getSectorPoints",
    value: // 获取用于绘制扇形的所有点
    function _getSectorPoints(center, radius, sDegree, eDegree) {
      var points = []; //创建构成多边形的点数组

      var step = (eDegree - sDegree) / 30 || 30; //根据扇形的总夹角确定每步夹角度数，最大为10

      points.push(center);

      for (var i = sDegree; i < eDegree + 0.001; i += step) {
        //循环获取每步的圆弧上点的坐标，存入点数组
        points.push(this._getCurvePoint(center, radius, i));
      }

      points.push(center); // if(sDegree == eDegree) {}

      return points;
    }
  }, {
    key: "_getCurvePoint",
    value: // 使用数学的方法计算需要画扇形的圆弧上的点坐标
    function _getCurvePoint(center, radius, degree) {
      var lat = radius * Math.sin(degree * Math.PI / 180) / this.latConv; //正弦计算待获取的点的纬度与原点纬度差

      var lng = radius * Math.cos(degree * Math.PI / 180) / this.lngConv; //余弦计算待获取的点的经度与原点经度差

      return new BMap.Point(center.lng + lng, center.lat + lat);
    }
  }, {
    key: "_setSectorPath",
    value: // 绘制扇形
    function _setSectorPath(center, radius, sDegree, eDegree) {
      var styleOptions = {
        strokeColor: "#43FBEF",
        //边线颜色。
        fillColor: "#43FBEF",
        //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 1,
        //边线的宽度，以像素为单位。
        strokeOpacity: 1,
        //边线透明度，取值范围0 - 1。
        fillOpacity: 0.4,
        //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid',
        //边线的样式，solid或dashed。
        enableMassClear: false,
        enableEditing: false
      };
      this.sector = new BMap.Polygon(this._getSectorPoints(center, radius, sDegree, eDegree), styleOptions);
      this.map.addOverlay(this.sector);
    }
  }, {
    key: "_resetSectorPath",
    value: // 修改属性，重绘扇形
    function _resetSectorPath(center, radius, sDegree, eDegree) {
      this.sector.setPath(this._getSectorPoints(center, radius, sDegree, eDegree));
      this.sMarker.setPosition(this._getCurvePoint(center, radius, sDegree));
      this.eMarker.setPosition(this._getCurvePoint(center, radius, eDegree));
      this.mMarker.setPosition(this._getCurvePoint(center, radius, (this.eDegree - this.sDegree) / 2 + this.sDegree));
    }
  }, {
    key: "_editEventCall",
    value: // marker的事件回调
    function _editEventCall(e, type) {
      if (type === "start") {
        this._sMarkerEdit(e);
      } else if (type === "end") {
        this._eMarkerEdit(e);
      } else if (type === "middle") {
        this._mMarkerEdit(e);
      }
    }
  }, {
    key: "_sMarkerEdit",
    value: // 开始点的编辑事件
    function _sMarkerEdit(e) {
      if (e.type === "ondragging") {
        var y = (e.point.lat - this.center.lat) * this.latConv;
        var x = (e.point.lng - this.center.lng) * this.lngConv;

        if (y > 0 && x > 0) {
          this.sDegree = Math.atan(Math.abs(y) / Math.abs(x)) * 180 / Math.PI;
        } else if (y > 0 && x < 0) {
          this.sDegree = 180 - Math.atan(Math.abs(y) / Math.abs(x)) * 180 / Math.PI;
        } else if (y < 0 && x < 0) {
          this.sDegree = 180 + Math.atan(Math.abs(y) / Math.abs(x)) * 180 / Math.PI;
        } else if (y < 0 && x > 0) {
          this.sDegree = 360 - Math.atan(Math.abs(y) / Math.abs(x)) * 180 / Math.PI;
        }

        if (this.sDegree > this.eDegree) {
          this.sDegree = -(360 - this.sDegree);
        }

        this._resetSectorPath(this.center, this.radius, this.sDegree, this.eDegree);
      }
    }
  }, {
    key: "_eMarkerEdit",
    value: // 结束点的编辑事件
    function _eMarkerEdit(e) {
      if (e.type === "ondragging") {
        var y = (e.point.lat - this.center.lat) * this.latConv;
        var x = (e.point.lng - this.center.lng) * this.lngConv;

        if (y > 0 && x > 0) {
          this.eDegree = Math.atan(Math.abs(y) / Math.abs(x)) * 180 / Math.PI;
        } else if (y > 0 && x < 0) {
          this.eDegree = 180 - Math.atan(Math.abs(y) / Math.abs(x)) * 180 / Math.PI;
        } else if (y < 0 && x < 0) {
          this.eDegree = 180 + Math.atan(Math.abs(y) / Math.abs(x)) * 180 / Math.PI;
        } else if (y < 0 && x > 0) {
          this.eDegree = 360 - Math.atan(Math.abs(y) / Math.abs(x)) * 180 / Math.PI;
        }

        if (this.sDegree > this.eDegree) {
          this.eDegree = 360 + this.eDegree;
        }

        this._resetSectorPath(this.center, this.radius, this.sDegree, this.eDegree);
      }
    }
  }, {
    key: "_mMarkerEdit",
    value: // 中间点的编辑事件
    function _mMarkerEdit(e) {
      if (e.type === "ondragging") {
        this.radius = this.map.getDistance(this.center, e.point);

        this._resetSectorPath(this.center, this.radius, this.sDegree, this.eDegree);
      }
    }
  }, {
    key: "enableEditing",
    value: // 设置扇形为可编辑状态
    function enableEditing() {
      this._showMarkers();
    }
  }, {
    key: "disableEditing",
    value: // 设置扇形为不可编辑状态
    function disableEditing() {
      this._hideMarkers();
    }
  }, {
    key: "deleteSector",
    value: // 删除扇形
    function deleteSector() {
      this.map.removeOverlay(this.sector);
      this.map.removeOverlay(this.sMarker);
      this.map.removeOverlay(this.eMarker);
      this.map.removeOverlay(this.mMarker);
    }
  }, {
    key: "hideSector",
    value: function hideSector() {
      this._hideMarkers();

      this.sector.hide();
    }
  }, {
    key: "showSector",
    value: function showSector(isCanEdit) {
      if (isCanEdit === "canEdit") {
        this._showMarkers();
      }

      this.sector.show();
    }
  }, {
    key: "getSectorInfo",
    value: function getSectorInfo() {
      return {
        center: this.center,
        radius: this.radius,
        sDegree: this.sDegree,
        eDegree: this.eDegree
      };
    }
  }]);

  return _SectorUtil;
}();

/**
 * 地图控件视图类
 */

var MapController = /*#__PURE__*/function () {
  // 构造器
  function MapController(mapModel, mapType) {
    _classCallCheck(this, MapController);

    this.mapModel = mapModel;
    this.mapType = mapType;
    this.map = null;
    this.itemMap = new Map();
    this.fiberArray = [];
    this.fiberDefenceArr = [];
    this.alarmDefenceArr = [];
    this._drawingManager = null;
    this._mapItem = null;
    this._navigation = null;
    this._overViewOpen = null;

    this._initMap();

    if (this.mapType === "gis") {
      this._initDrawingManager();
    }
  }

  _createClass(MapController, [{
    key: "_initMap",
    value: // 初始化地图
    function _initMap() {
      this._mapItem = this.mapModel.getItemsByType("map")[0];

      if (this.mapType === "gis") {
        var mapOption = {
          minZoom: 3,
          maxZoom: 18,
          enableMapClick: false
        };
        this.map = new BMap.Map(this._mapItem.domId, mapOption);
        this.map.centerAndZoom(new BMap.Point(this._mapItem.startPoint.lng, this._mapItem.startPoint.lat), this._mapItem.scale);
        this.map.enableScrollWheelZoom(); // this.addMapTypeControl();
        // this.addMapNavigation();
        // this.addOverView();
      } else if (this.mapType === "picture") {
        this.map = new PMap(this._mapItem);
      }
    }
  }, {
    key: "_initDrawingManager",
    value: // 初始化画图工具
    function _initDrawingManager() {
      var styleOptions = {
        strokeColor: "#43FBEF",
        //边线颜色。
        fillColor: "#25D298",
        //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 1,
        //边线的宽度，以像素为单位。
        strokeOpacity: 1,
        //边线透明度，取值范围0 - 1。
        fillOpacity: 0.4,
        //填充的透明度，取值范围0 - 1。
        strokeStyle: 'dashed' //边线的样式，solid或dashed。

      };
      var lineStyleOptions = {
        strokeColor: "#777777",
        //边线颜色。
        strokeWeight: 3,
        //边线的宽度，以像素为单位。
        strokeOpacity: 1,
        //边线透明度，取值范围0 - 1。
        strokeStyle: 'solid' //边线的样式，solid或dashed。

      };
      this._drawingManager = new BMapLib.DrawingManager(this.map, {
        isOpen: false,
        //是否开启绘制模式
        enableDrawingTool: false,
        //是否显示工具栏
        drawingToolOptions: {
          anchor: BMAP_ANCHOR_TOP_RIGHT,
          //位置
          offset: new BMap.Size(5, 5) //偏离值

        },
        circleOptions: styleOptions,
        //圆的样式
        polylineOptions: lineStyleOptions,
        //线的样式
        polygonOptions: styleOptions,
        //多边形的样式
        rectangleOptions: styleOptions //矩形的样式

      });
    }
  }, {
    key: "_setItem",
    value: // 设置元素
    function _setItem(item, modelIndex) {
      item.modelIndex = modelIndex;

      if (item.type === "marker" && item.itemWebData.elementThirdType !== "position_vibration_fiber") {
        this._setMarker(item, modelIndex);
      }

      if (item.type === "polyline") {
        this._setPolyline(item, modelIndex);
      }

      if (item.type === "sector") {
        this._setSector(item, modelIndex);
      }

      if (item.type === "marker" && item.itemWebData.elementThirdType === "position_vibration_fiber") {
        this._setFiberPolyline(item, modelIndex);
      }
    } // 设置点位元素

  }, {
    key: "_setMarker",
    value: function _setMarker(markerItem, modelIndex) {
      var marker;

      if (this.mapType === "gis") {
        var pt = new BMap.Point(markerItem.point.lng, markerItem.point.lat);
        var myIcon = new BMap.Icon(markerItem.icon, new BMap.Size(40, 53));
        marker = new BMap.Marker(pt, {
          icon: myIcon,
          enableMassClear: false
        });
        marker.setOffset(new BMap.Size(0, -18));
      } else if (this.mapType === "picture") {
        marker = new PMarker(markerItem);
        marker.disableMassClear();
      }

      var itemViewObj = {
        overlay: marker,
        item: markerItem
      };
      this.itemMap.set(modelIndex, itemViewObj);
      this.map.addOverlay(itemViewObj.overlay);

      if (markerItem.itemInfo && markerItem.itemInfo.twinkleType && markerItem.itemWebData.channelInfo.alarmStatus === "alarm") {
        var flag = true;
        itemViewObj.timer = setInterval(function () {
          flag ? marker.hide() : marker.show();
          flag = !flag;
        }, 500);
      }
    } // 设置折线元素

  }, {
    key: "_setPolyline",
    value: function _setPolyline(polylineItem, modelIndex) {
      var polyline;

      if (this.mapType === "gis") {
        if (polylineItem.itemInfo.points && polylineItem.itemInfo.points.length !== 0) {
          var bmPointArr = [];

          var _iterator = _createForOfIteratorHelper(polylineItem.itemInfo.points),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              bmPointArr.push(new BMap.Point(item.lng, item.lat));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          polyline = new BMap.Polyline(bmPointArr, {
            strokeColor: "#777777",
            strokeWeight: 4,
            strokeOpacity: 0.8,
            strokeStyle: 'solid'
          });
          polyline.disableMassClear(); // polyline.disableEventListen();
        }
      } else if (this.mapType === "picture") {
        polyline = new PPolyline(polylineItem.itemInfo);
        polyline.disableMassClear();
      }

      var itemViewObj = {
        overlay: polyline,
        item: polylineItem
      };
      this.itemMap.set(modelIndex, itemViewObj);
      this.map.addOverlay(this.itemMap.get(modelIndex).overlay);
      var parentItem = this.getAllItemsData().find(function (v) {
        return v.itemId === polylineItem.parentItemId;
      });

      if (parentItem && parentItem.itemInfo && parentItem.itemInfo.twinkleType && parentItem.itemWebData.channelInfo.alarmStatus === "alarm") {
        var flag = true;
        itemViewObj.timer = setInterval(function () {
          flag ? polyline.hide() : polyline.show();
          flag = !flag;
        }, 500);
      }
    }
  }, {
    key: "_findKeyIndex",
    value: function _findKeyIndex(points, currentIndex, flagType) {
      var indexObj = {
        beforeIndex: 0,
        nextIndex: 0
      };

      for (var i = currentIndex - 1; i > 0; i--) {
        if (points[i][flagType] === "father") {
          indexObj.beforeIndex = i;
          break;
        }
      }

      for (var _i = currentIndex + 1; _i < points.length; _i++) {
        if (points[_i][flagType] === "father") {
          indexObj.nextIndex = _i;
          break;
        }
      }

      return indexObj;
    } // 设置定位型振动光纤的防区

  }, {
    key: "_setFiberPolyline",
    value: function _setFiberPolyline(item, modelIndex) {
      var _this = this;

      var parentFiber = null;

      var _iterator2 = _createForOfIteratorHelper(this.fiberArray.entries()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              i = _step2$value[0],
              v = _step2$value[1];

          if (v.fiber.deviceUuid === item.itemWebData.channelInfo.deviceUuid && v.fiber.fiberIndex === item.itemWebData.channelInfo.fiberIndex) {
            parentFiber = Vue.prototype.$common.copyObject(v.fiber, parentFiber);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var pxInfoObj = this._getPxObj(parentFiber.points);

      parentFiber.points && parentFiber.points.forEach(function (v, i) {
        v.flag = "father";
      });
      parentFiber.points.push({
        flag: "start",
        actualDistance: item.itemWebData.channelInfo.startPoint.actualDistance
      });
      parentFiber.points.push({
        flag: "end",
        actualDistance: item.itemWebData.channelInfo.endPoint.actualDistance
      });
      parentFiber.points.sort(this._compareUtil("actualDistance", "flag"));
      var startIndex,
          endIndex = 0;
      parentFiber.points.forEach(function (v, i) {
        if (v.flag === "start") {
          startIndex = i;
        }

        if (v.flag === "end") {
          endIndex = i;
        }
      });

      var startKeyIndexObj = this._findKeyIndex(parentFiber.points, startIndex, "flag");

      var endKeyIndexObj = this._findKeyIndex(parentFiber.points, endIndex, "flag");

      var defenceStartPoint = this._getPointUtil(parentFiber.points, pxInfoObj.pxForOneM, startIndex, startKeyIndexObj.beforeIndex, startKeyIndexObj.nextIndex);

      var defenceEndPoint = this._getPointUtil(parentFiber.points, pxInfoObj.pxForOneM, endIndex, endKeyIndexObj.beforeIndex, endKeyIndexObj.nextIndex);

      if (this.mapType === "gis") {
        item.point = {
          lng: defenceStartPoint.lng,
          lat: defenceStartPoint.lat
        };
      } else {
        item.point = {
          x: defenceStartPoint.x - 20,
          y: defenceStartPoint.y - 49
        };
      }

      var itemClone = null;
      itemClone = Vue.prototype.$common.copyObject(item, itemClone);

      this._setMarker(itemClone, modelIndex);

      itemClone = null;
      var start,
          end = 0;

      if (startIndex <= endIndex) {
        start = startIndex;
        end = endIndex;
      } else {
        end = startIndex;
        start = endIndex;
      }

      var defencePointsArr = parentFiber.points.slice(start, end + 1);

      var polyline = this._generateFiberLine(defencePointsArr, defenceStartPoint, defenceEndPoint, "flag", this._setDefenceColor(item.itemWebData.channelInfo));

      polyline.disableMassClear();
      this.map.addOverlay(polyline);
      this.fiberDefenceArr.push({
        channelUuid: item.itemWebData.resourceUuid,
        points: defencePointsArr,
        pxInfoObj: pxInfoObj,
        startFctualDistance: item.itemWebData.channelInfo.startPoint.actualDistance,
        polyline: polyline
      });

      if (item.itemWebData.channelInfo.alarmStatus === "alarm" && item.itemWebData.fibersAlarmMessages && item.itemWebData.fibersAlarmMessages.length > 0) {
        item.itemWebData.fibersAlarmMessages.forEach(function (val) {
          _this.updateFiberPartDefence(val);
        });
      }
    }
  }, {
    key: "_getPxObj",
    value: // 计算光纤或者防区的总长度（米）和每米代表多少px
    function _getPxObj(pointsArr) {
      var _this2 = this;

      if (pointsArr) {
        var obj = {};
        obj.actualDistanceTotal = Math.abs(pointsArr[pointsArr.length - 1].actualDistance - pointsArr[0].actualDistance);
        var pxTotal = 0;
        pointsArr.forEach(function (v, i) {
          if (i > 0) {
            var pointObj = {};
            var nextPointObj = {};

            if (_this2.mapType === "gis") {
              pointObj = {
                lng: v.lng,
                lat: v.lat
              };
              nextPointObj = {
                lng: pointsArr[i - 1].lng,
                lat: pointsArr[i - 1].lat
              };
            } else {
              pointObj = {
                y: parseFloat(v.yCoord),
                x: parseFloat(v.xCoord)
              };
              nextPointObj = {
                y: parseFloat(pointsArr[i - 1].yCoord),
                x: parseFloat(pointsArr[i - 1].xCoord)
              };
            }

            pxTotal = pxTotal + Math.sqrt(Math.pow(Math.abs(_this2.pointToPixel(pointObj).y - _this2.pointToPixel(nextPointObj).y), 2) + Math.pow(Math.abs(_this2.pointToPixel(pointObj).x - _this2.pointToPixel(nextPointObj).x), 2));
          }
        });
        obj.pxTotal = pxTotal;
        obj.pxForOneM = obj.pxTotal / obj.actualDistanceTotal;
        return obj;
      }
    } // 排序工具

  }, {
    key: "_compareUtil",
    value: function _compareUtil(propertyName, secPropertyName) {
      return function (obj1, obj2) {
        var v1 = parseInt(obj1[propertyName]);
        var v2 = parseInt(obj2[propertyName]);

        if (v1 < v2) {
          return -1;
        } else if (v1 > v2) {
          return 1;
        } else {
          var o1 = obj1[secPropertyName];
          var o2 = obj2[secPropertyName];

          if (o1 === "end" && o2 === "father" || o1 === "father" && o2 === "start") {
            return -1;
          } else if (o1 === "father" && o2 === "end" || o1 === "start" && o2 === "father") {
            return 1;
          } else {
            return 0;
          }
        }
      };
    }
  }, {
    key: "_setDefenceColor",
    value: // 防区折线颜色判断工具
    function _setDefenceColor(channelInfo) {
      var lineColor = "#777777";

      if (channelInfo) {
        if (channelInfo.armingStatus) {
          switch (channelInfo.armingStatus) {
            case "arming":
              lineColor = "#43FBEF";
              break;

            case "disarm":
              lineColor = "#0091FF";
              break;

            case "bypass":
            case "temp_pass":
              lineColor = "#FFB01B";
              break;
          }
        } // if (channelInfo.alarmStatus && channelInfo.alarmStatus === "alarm") {
        //   lineColor = "#FF5F5F";
        // }


        if (channelInfo.onlineStatus && channelInfo.onlineStatus === "offline") {
          lineColor = "#BBBBBB";
        }
      }

      return lineColor;
    }
  }, {
    key: "updateFiberPartDefence",
    value: // 振动光纤防区报警
    function updateFiberPartDefence(alarmData) {
      var _this3 = this;

      if (alarmData) {
        alarmData.begin = Math.abs(alarmData.begin);
        alarmData.end = Math.abs(alarmData.end);
      }

      setTimeout(function () {
        var _iterator3 = _createForOfIteratorHelper(_this3.alarmDefenceArr.entries()),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = _slicedToArray(_step3.value, 2),
                i = _step3$value[0],
                _v = _step3$value[1];

            if (_v.alarmData.channelUuid === alarmData.channelUuid && _v.alarmData.begin === alarmData.begin && _v.alarmData.end === alarmData.end) {
              _this3.map.removeOverlay(_v.polyline);

              _this3.alarmDefenceArr.splice(i, 1);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        if (alarmData.alarmState === "generation") {
          var alarmFiberDef = null;

          var _iterator4 = _createForOfIteratorHelper(_this3.fiberDefenceArr),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var v = _step4.value;

              if (v.channelUuid === alarmData.channelUuid) {
                alarmFiberDef = {
                  channelUuid: v.channelUuid,
                  points: v.points,
                  pxInfoObj: v.pxInfoObj,
                  startFctualDistance: v.startFctualDistance
                };
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          alarmFiberDef.points && alarmFiberDef.points.forEach(function (v, i) {
            v.alarmFlag = "father";
          });
          alarmFiberDef.points.push({
            alarmFlag: "start",
            actualDistance: alarmData.begin + alarmFiberDef.startFctualDistance
          });
          alarmFiberDef.points.push({
            alarmFlag: "end",
            actualDistance: alarmData.end + alarmFiberDef.startFctualDistance
          });
          alarmFiberDef.points.sort(_this3._compareUtil("actualDistance", "alarmFlag"));
          var startIndex,
              endIndex = 0;
          alarmFiberDef.points.forEach(function (v, i) {
            if (v.alarmFlag === "start") {
              startIndex = i;
            }

            if (v.alarmFlag === "end") {
              endIndex = i;
            }
          });

          var startKeyIndexObj = _this3._findKeyIndex(alarmFiberDef.points, startIndex, "alarmFlag");

          var endKeyIndexObj = _this3._findKeyIndex(alarmFiberDef.points, endIndex, "alarmFlag");

          var start,
              end = 0;

          var alarmStartPoint = _this3._getPointUtil(alarmFiberDef.points, alarmFiberDef.pxInfoObj.pxForOneM, startIndex, startKeyIndexObj.beforeIndex, startKeyIndexObj.nextIndex);

          var alarmEndPoint = _this3._getPointUtil(alarmFiberDef.points, alarmFiberDef.pxInfoObj.pxForOneM, endIndex, endKeyIndexObj.beforeIndex, endKeyIndexObj.nextIndex);

          if (startIndex <= endIndex) {
            start = startIndex;
            end = endIndex;
          } else {
            end = startIndex;
            start = endIndex;
          }

          var alarmDefPointsArr = alarmFiberDef.points.slice(start, end + 1);

          var polyline = _this3._generateFiberLine(alarmDefPointsArr, alarmStartPoint, alarmEndPoint, "alarmFlag", "#FF5F5F");

          polyline.disableMassClear();

          _this3.map.addOverlay(polyline);

          _this3.alarmDefenceArr.push({
            alarmData: alarmData,
            polyline: polyline
          });
        }
      }, 1000);
    }
  }, {
    key: "_getPointUtil",
    value: // 获取振动光纤报警起点和终点的坐标
    function _getPointUtil(points, pxForOneM, currentIndex, beforeIndex, nextIndex) {
      var beforePoint = this.mapType === "gis" ? {
        lng: points[beforeIndex].lng,
        lat: points[beforeIndex].lat
      } : {
        y: parseFloat(points[beforeIndex].yCoord),
        x: parseFloat(points[beforeIndex].xCoord)
      };
      var nextPoint = this.mapType === "gis" ? {
        lng: points[nextIndex].lng,
        lat: points[nextIndex].lat
      } : {
        y: parseFloat(points[nextIndex].yCoord),
        x: parseFloat(points[nextIndex].xCoord)
      };
      var beforePixel = {
        x: this.pointToPixel(beforePoint).x,
        y: this.pointToPixel(beforePoint).y
      };
      var nextPixel = {
        x: this.pointToPixel(nextPoint).x,
        y: this.pointToPixel(nextPoint).y
      };
      var startAngle = Math.atan(Math.abs(nextPixel.y - beforePixel.y) / Math.abs(nextPixel.x - beforePixel.x));
      var pxToBeforePoint = (points[currentIndex].actualDistance - points[beforeIndex].actualDistance) * pxForOneM;
      var xTemp = pxToBeforePoint * Math.cos(startAngle);
      var yTemp = pxToBeforePoint * Math.sin(startAngle);
      var alarmPixel = {
        x: nextPixel.x >= beforePixel.x ? beforePixel.x + xTemp : beforePixel.x - xTemp,
        y: nextPixel.y >= beforePixel.y ? beforePixel.y + yTemp : beforePixel.y - yTemp
      };
      var point = this.pixelToPoint(alarmPixel.x, alarmPixel.y);
      return point;
    } // 生成振动光纤上的防区或者防区上的报警段

  }, {
    key: "_generateFiberLine",
    value: function _generateFiberLine(pointsArr, startPoint, endPoint, flag, lineColor) {
      var _this4 = this;

      pointsArr.forEach(function (v, i) {
        if (v[flag] === "start") {
          if (_this4.mapType === "gis") {
            v.lng = startPoint.lng;
            v.lat = startPoint.lat;
          } else {
            v.xCoord = startPoint.x;
            v.yCoord = startPoint.y;
          }
        } else if (v[flag] === "end") {
          if (_this4.mapType === "gis") {
            v.lng = endPoint.lng;
            v.lat = endPoint.lat;
          } else {
            v.xCoord = endPoint.x;
            v.yCoord = endPoint.y;
          }
        }
      });
      var polylinePoints = pointsArr.map(function (v) {
        var point = {};

        if (_this4.mapType === "gis") {
          point = new BMap.Point(v.lng, v.lat);
        } else {
          point = {
            x: parseFloat(v.xCoord),
            y: parseFloat(v.yCoord)
          };
        }

        return point;
      });
      var polyline;

      if (this.mapType === "gis") {
        polyline = new BMap.Polyline(polylinePoints, {
          strokeColor: lineColor,
          strokeWeight: 4,
          strokeOpacity: 1,
          strokeStyle: 'solid'
        });
      } else {
        polyline = new PPolyline({
          points: polylinePoints,
          strokeWidth: 4,
          stroke: lineColor
        });
      }

      return polyline;
    } // 设置扇形元素

  }, {
    key: "_setSector",
    value: function _setSector(sectorItem, modelIndex) {
      var sector;

      if (this.mapType === "gis") {
        sector = new _SectorUtil(sectorItem.itemInfo, this.map);
      } else if (this.mapType === "picture") {
        sector = new PSector(sectorItem.itemInfo);
        sector.disableMassClear();
        this.map.addOverlay(sector);
      }

      if (!sectorItem.itemInfo || !sectorItem.itemInfo.isShowSector) {
        sector.hideSector();
      } else {
        sector.showSector();
      }

      var itemViewObj = {
        overlay: sector,
        item: sectorItem
      };
      this.itemMap.set(modelIndex, itemViewObj);
    }
  }, {
    key: "_setItemEventCallBack",
    value: // 为元素注册事件回调
    function _setItemEventCallBack(itemViewObj, callBack) {
      var _this5 = this;

      var eventArray = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "dragstart", "dragging", "dragmove", "dragend"];

      if (this.mapType === "gis") {
        eventArray.push("rightclick");
      }

      var callBackInner = function callBackInner(e) {
        var dataObj = {};
        dataObj.item = itemViewObj.item;

        if (_this5.mapType === "gis") {
          // e.domEvent.stopPropagation();
          dataObj.eventType = e.type;
          dataObj.x = e.pixel.x;
          dataObj.y = e.pixel.y;
        } else if (_this5.mapType === "picture") {
          var type = e.type;

          if (window.event.buttons === 2) {
            type = "rightclick";
          }

          dataObj.eventType = "on" + type;
          var layerX = e.evt.layerX;
          var layerY = e.evt.layerY;
          var offset = null;

          if (e.type === "dragend") {
            offset = {
              x: itemViewObj.item.point.x - e.initLayerX,
              y: itemViewObj.item.point.y - e.initLayerY
            };
          } else {
            offset = {
              x: itemViewObj.item.point.x - e.evt.offsetX,
              y: itemViewObj.item.point.y - e.evt.offsetY
            };
          }

          dataObj.offset = offset;
          dataObj.x = layerX + _this5.map.canvas.offsetLeft;
          dataObj.y = layerY + _this5.map.canvas.offsetTop;
        }

        callBack(e, dataObj);
      };

      var sectorMarkerCall = function sectorMarkerCall(e) {
        var dataObj = {};
        dataObj.eventType = "sectorDragend";
        dataObj.sectorInfo = itemViewObj.overlay.getSectorInfo();
        dataObj.item = itemViewObj.item;
        callBack(e, dataObj);
      };

      var polylineMarkerCall = function polylineMarkerCall(e) {
        var dataObj = {};
        dataObj.item = itemViewObj.item;
        dataObj.eventType = "polylineDragend";

        if (e.type === 'onlineupdate') {
          dataObj.isDragLine = false;

          if (dataObj.item.itemInfo.points.length < e.target.getPath().length) {
            dataObj.isDragLine = true;
            dataObj.points = e.target.getPath();
          } else {
            var flag = false;
            e.target.getPath().forEach(function (v, i) {
              if (dataObj.item.itemInfo.points[i].lng !== v.lng || dataObj.item.itemInfo.points[i].lat !== v.lat) {
                flag = true;
              }
            });

            if (flag) {
              dataObj.isDragLine = true;
              dataObj.points = e.target.getPath();
            }
          }
        }

        if (e.type === "mouseup") {
          dataObj.isDragLine = true;
          dataObj.points = itemViewObj.overlay.shape.getPoints();
        }

        callBack(e, dataObj);
      };

      if (itemViewObj.item.type === "sector") {
        itemViewObj.overlay.sMarker.addEventListener("dragend", sectorMarkerCall);
        itemViewObj.overlay.eMarker.addEventListener("dragend", sectorMarkerCall);
        itemViewObj.overlay.mMarker.addEventListener("dragend", sectorMarkerCall);
      } else if (itemViewObj.item.type === "polyline") {
        if (this.mapType === 'gis') {
          itemViewObj.overlay.addEventListener("lineupdate", polylineMarkerCall);
        } else {
          itemViewObj.overlay.editMarkers.forEach(function (v) {
            v.marker.addEventListener("mouseup", polylineMarkerCall);
          });
        }
      } else {
        eventArray.forEach(function (eventType) {
          itemViewObj.overlay.addEventListener(eventType, callBackInner);
        });
      }
    }
  }, {
    key: "_createItemsCommon",
    value: // 创建所有元素的公用代码
    function _createItemsCommon(callBack) {
      var _this6 = this;

      this.mapModel.dataMap.forEach(function (item, modelIndex) {
        _this6._setItem(item, modelIndex);
      });
      this.itemMap.forEach(function (itemViewObj) {
        if (_this6.mapType === "picture" && itemViewObj.item.type === "marker") {
          var timer = setInterval(function () {
            if (itemViewObj.overlay.isLoaded) {
              clearInterval(timer);

              _this6._setItemEventCallBack(itemViewObj, callBack);
            }
          }, 50);
        } else {
          _this6._setItemEventCallBack(itemViewObj, callBack);
        }
      });
    } // 添加视图切换

  }, {
    key: "addMapTypeControl",
    value: function addMapTypeControl() {
      if (this.mapType === "gis") {
        this.map.addControl(new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP],
          anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
          offset: new BMap.Size(10, 30)
        }));
      } else if (this.mapType === "picture") ;
    }
  }, {
    key: "addMapNavigation",
    value: // 添加方向盘和缩放比例
    function addMapNavigation() {
      if (this.mapType === "gis") {
        this.navigation = new BMap.NavigationControl({
          anchor: BMAP_ANCHOR_TOP_RIGHT,
          offset: new BMap.Size(10, 50),
          type: BMAP_NAVIGATION_CONTROL_SMALL
        });
        this.map.addControl(this.navigation);
      } else if (this.mapType === "picture") ;
    }
  }, {
    key: "delMapNavigation",
    value: // 删除方向盘和缩放比例
    function delMapNavigation() {
      if (this.mapType === "gis") {
        this.map.removeControl(this.navigation);
      } else if (this.mapType === "picture") ;
    }
  }, {
    key: "addOverView",
    value: // 添加鸟瞰图
    function addOverView() {
      if (this.mapType === "gis") {
        this.overViewOpen = new BMap.OverviewMapControl({
          isOpen: true,
          anchor: BMAP_ANCHOR_BOTTOM_RIGHT
        });
        this.map.addControl(this.overViewOpen);
      } else if (this.mapType === "picture") ;
    }
  }, {
    key: "delOverView",
    value: // 删除鸟瞰图
    function delOverView() {
      if (this.mapType === "gis") {
        this.map.removeControl(this.overViewOpen);
      } else if (this.mapType === "picture") ;
    }
  }, {
    key: "setMapStyleV2",
    value: //设置地图样式
    function setMapStyleV2() {
      this.map.setMapStyleV2({
        styleJson: store.state.home.mapStyle
      });
    }
  }, {
    key: "setCenter",
    value: // 设置居中
    function setCenter() {
      if (this.mapType === "gis") {
        var point = new BMap.Point(this._mapItem.startPoint.lng, this._mapItem.startPoint.lat);
        this.map.setCenter(point);
      } else if (this.mapType === "picture") {
        this.map.setCenter();
      }
    }
  }, {
    key: "locationElement",
    value: function locationElement(center, panelCenter) {
      if (this.mapType === "gis") {
        var point = new BMap.Point(center.y, center.x);
        this.map.setCenter(point);
      } else if (this.mapType === "picture") {
        var centerPoint = this.pixelToPoint(panelCenter.x, panelCenter.y);
        this.map.setPosition(this.map.getStageInfo().x + (centerPoint.x - center.x) * this.map.getStageInfo().scale, this.map.getStageInfo().y + (centerPoint.y - center.y) * this.map.getStageInfo().scale);
      }
    }
  }, {
    key: "zoomIn",
    value: // 放大地图
    function zoomIn() {
      this.map.zoomIn();
    }
  }, {
    key: "zoomOut",
    value: // 缩小地图
    function zoomOut() {
      this.map.zoomOut();
    }
  }, {
    key: "rectangleSelect",
    value: // 框选并返回选中的点位数据
    function rectangleSelect(callBack) {
      var _this7 = this;

      if (this.mapType === "gis") {
        var itemsArr = [];

        this._drawingManager.setDrawingMode(BMAP_DRAWING_RECTANGLE);

        this._drawingManager.open();

        var rectanglecomplete = function rectanglecomplete(overlay) {
          var bounds = overlay.getBounds();

          _this7.itemMap.forEach(function (itemViewObj) {
            if (itemViewObj.item.type === "marker") {
              if (bounds.containsPoint(itemViewObj.overlay.getPosition())) {
                itemsArr.push(itemViewObj.item);
              }
            }
          });

          callBack(itemsArr, overlay);

          _this7._drawingManager.close();

          _this7._drawingManager.removeEventListener('rectanglecomplete', rectanglecomplete);
        };

        this._drawingManager.addEventListener('rectanglecomplete', rectanglecomplete);
      } else if (this.mapType === "picture") {
        var _itemsArr = [];
        this.map.openDrawManger("rect", function (rect, e) {
          _this7.itemMap.forEach(function (itemViewObj) {
            if (itemViewObj.item.type === "marker") {
              if (itemViewObj.item.point.x >= rect.option.x && itemViewObj.item.point.x <= rect.option.x + rect.option.width && itemViewObj.item.point.y >= rect.option.y && itemViewObj.item.point.y <= rect.option.y + rect.option.height) {
                _itemsArr.push(itemViewObj.item);
              }
            }
          });

          callBack(_itemsArr, rect);
        });
      }
    }
  }, {
    key: "circleSelect",
    value: // 圈选并返回选中的点位数据
    function circleSelect(callBack) {
      var _this8 = this;

      if (this.mapType === "gis") {
        var itemsArr = [];

        this._drawingManager.setDrawingMode(BMAP_DRAWING_CIRCLE);

        this._drawingManager.open();

        var circlecomplete = function circlecomplete(overlay) {
          _this8.itemMap.forEach(function (itemViewObj) {
            if (itemViewObj.item.type === "marker") {
              if (_this8.map.getDistance(overlay.getCenter(), itemViewObj.overlay.getPosition()) <= overlay.getRadius()) {
                itemsArr.push(itemViewObj.item);
              }
            }
          });

          callBack(itemsArr, overlay);

          _this8._drawingManager.close();

          _this8._drawingManager.removeEventListener('circlecomplete', circlecomplete);
        };

        this._drawingManager.addEventListener('circlecomplete', circlecomplete);
      } else if (this.mapType === "picture") {
        var _itemsArr2 = [];
        this.map.openDrawManger("circle", function (circle, e) {
          _this8.itemMap.forEach(function (itemViewObj) {
            if (itemViewObj.item.type === "marker") {
              if (Math.sqrt(Math.pow(Math.abs(itemViewObj.item.point.x - circle.option.x), 2) + Math.pow(Math.abs(itemViewObj.item.point.y - circle.option.y), 2)) <= circle.option.radius) {
                _itemsArr2.push(itemViewObj.item);
              }
            }
          });

          callBack(_itemsArr2, circle);
        });
      }
    }
  }, {
    key: "polygonSelect",
    value: // 多边形选并返回选中的点位数据
    function polygonSelect(callBack) {
      var _this9 = this;

      if (this.mapType === "gis") {
        var itemsArr = [];

        this._drawingManager.setDrawingMode(BMAP_DRAWING_POLYGON);

        this._drawingManager.open();

        var polygoncomplete = function polygoncomplete(overlay) {
          var polygonPts = [];
          overlay.getPath().forEach(function (v) {
            polygonPts.push(v);
          });
          var polygon = new BMap.Polygon(polygonPts);

          _this9.itemMap.forEach(function (itemViewObj) {
            if (itemViewObj.item.type === "marker") {
              if (BMapLib.GeoUtils.isPointInPolygon(itemViewObj.overlay.getPosition(), polygon)) {
                itemsArr.push(itemViewObj.item);
              }
            }
          });

          callBack(itemsArr, overlay);

          _this9._drawingManager.close();

          _this9._drawingManager.removeEventListener('polygoncomplete', polygoncomplete);
        };

        this._drawingManager.addEventListener('polygoncomplete', polygoncomplete);
      } else if (this.mapType === "picture") {
        var _itemsArr3 = [];
        this.map.openDrawManger("polygon", function (polygon, e) {
          _this9.itemMap.forEach(function (itemViewObj) {
            if (itemViewObj.item.type === "marker") {
              var poly = [];

              for (var i = 2; i < polygon.shape.attrs.points.length; i = i + 2) {
                poly.push({
                  x: polygon.shape.attrs.points[i],
                  y: polygon.shape.attrs.points[i + 1]
                });
              }

              if (_this9._pointInPoly(itemViewObj.item.point, poly)) {
                _itemsArr3.push(itemViewObj.item);
              }
            }
          });

          callBack(_itemsArr3, polygon);
        });
      }
    }
  }, {
    key: "_pointInPoly",
    value: // 判断一个点是否在一个多边形内
    function _pointInPoly(pt, poly) {
      for (var _c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i) {
        (poly[i].y <= pt.y && pt.y < poly[j].y || poly[j].y <= pt.y && pt.y < poly[i].y) && pt.x < (poly[j].x - poly[i].x) * (pt.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x && (_c = !_c);
      }

      return c;
    }
  }, {
    key: "clearOverlays",
    value: // 清除覆盖物
    function clearOverlays() {
      this.map.clearOverlays();
    }
  }, {
    key: "createItems",
    value: // 创建所有元素
    function createItems(callBack) {
      var _this10 = this;

      if (this.mapType === "gis") {
        this._createItemsCommon(callBack);
      } else if (this.mapType === "picture") {
        var timer = setInterval(function () {
          if (_this10.map.isLoaded) {
            clearInterval(timer);

            _this10._createItemsCommon(callBack);
          }
        }, 50);
      }
    }
  }, {
    key: "setEditState",
    value: // 编辑模式
    function setEditState() {
      this.itemMap.forEach(function (v) {
        v.item.isEdit = true;

        if (v.item.type === "marker" && v.item.itemWebData.elementThirdType !== "position_vibration_fiber") {
          v.overlay.enableDragging();
        } else if (v.item.type === "polyline") {
          v.overlay.enableEditing();
        } else if (v.item.type === "sector") {
          if (!v.item.itemInfo || !v.item.itemInfo.isShowSector) {
            v.overlay.disableEditing();
          } else {
            v.overlay.enableEditing();
          }
        }
      });
    }
  }, {
    key: "setItemEditState",
    value: // 设置单个元素为可编辑模式
    function setItemEditState(modelIndex) {
      this.itemMap.forEach(function (v, k) {
        if (k === modelIndex) {
          if (v.item.type === "marker" && v.item.itemWebData.elementThirdType !== "position_vibration_fiber") {
            v.overlay.enableDragging();
          } else if (v.item.type === "polyline") {
            v.overlay.enableEditing();
          } else if (v.item.type === "sector") {
            if (!v.item.itemInfo || !v.item.itemInfo.isShowSector) {
              v.overlay.disableEditing();
            } else {
              v.overlay.enableEditing();
            }
          }
        }
      });
    }
  }, {
    key: "quitEditState",
    value: // 退出编辑模式（测试用，正式环境退出编辑后应该直接重新获取数据并重绘地图所有显示）
    function quitEditState() {
      this.itemMap.forEach(function (v) {
        v.item.isEdit = false;

        if (v.item.type === "marker") {
          v.overlay.disableDragging();
        } else if (v.item.type === "polyline") {
          v.overlay.disableEditing();
        } else if (v.item.type === "sector") {
          v.overlay.disableEditing();
        }
      });
    }
  }, {
    key: "deleteItem",
    value: // 删除元素
    function deleteItem(modelIndex) {
      var _this11 = this;

      this.itemMap.forEach(function (itemViewObj, k) {
        if (k === modelIndex || itemViewObj.item.parentModelIndex === modelIndex) {
          if (itemViewObj.timer) {
            clearInterval(itemViewObj.timer);
            itemViewObj.timer = null;
          }

          if (itemViewObj.item.type !== "sector" || _this11.mapType === "picture") {
            _this11.map.removeOverlay(itemViewObj.overlay);

            if (itemViewObj.item.itemWebData.elementThirdType === "position_vibration_fiber") {
              var _iterator5 = _createForOfIteratorHelper(_this11.fiberDefenceArr.entries()),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _step5$value = _slicedToArray(_step5.value, 2),
                      i = _step5$value[0],
                      v = _step5$value[1];

                  if (v.channelUuid === itemViewObj.item.itemWebData.resourceUuid) {
                    _this11.map.removeOverlay(v.polyline);

                    _this11.fiberDefenceArr.splice(i, 1);
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              var _iterator6 = _createForOfIteratorHelper(_this11.alarmDefenceArr.entries()),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var _step6$value = _slicedToArray(_step6.value, 2),
                      _i2 = _step6$value[0],
                      _v2 = _step6$value[1];

                  if (_v2.alarmData.channelUuid === itemViewObj.item.itemWebData.resourceUuid) {
                    _this11.map.removeOverlay(_v2.polyline);

                    _this11.alarmDefenceArr.splice(_i2, 1);
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
          } else {
            itemViewObj.overlay.deleteSector();
          }

          _this11.itemMap["delete"](modelIndex);
        }
      });
    }
  }, {
    key: "updateItem",
    value: // 更新元素(直接替换)
    function updateItem(item, modelIndex, callBack) {
      var _this12 = this;

      this.itemMap.forEach(function (itemViewObj, k) {
        if (k === modelIndex || itemViewObj.item.parentModelIndex === modelIndex) {
          if (itemViewObj.timer) {
            clearInterval(itemViewObj.timer);
            itemViewObj.timer = null;
          }

          if (itemViewObj.item.type !== "sector" || _this12.mapType === "picture") {
            _this12.map.removeOverlay(itemViewObj.overlay);

            if (itemViewObj.item.itemWebData.elementThirdType === "position_vibration_fiber") {
              var _iterator7 = _createForOfIteratorHelper(_this12.fiberDefenceArr.entries()),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _step7$value = _slicedToArray(_step7.value, 2),
                      i = _step7$value[0],
                      v = _step7$value[1];

                  if (v.channelUuid === itemViewObj.item.itemWebData.resourceUuid) {
                    _this12.map.removeOverlay(v.polyline);

                    _this12.fiberDefenceArr.splice(i, 1);
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }

              var _iterator8 = _createForOfIteratorHelper(_this12.alarmDefenceArr.entries()),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _step8$value = _slicedToArray(_step8.value, 2),
                      _i3 = _step8$value[0],
                      _v3 = _step8$value[1];

                  if (_v3.alarmData.channelUuid === itemViewObj.item.itemWebData.resourceUuid) {
                    _this12.map.removeOverlay(_v3.polyline);

                    _this12.alarmDefenceArr.splice(_i3, 1);
                  }
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }
          } else {
            itemViewObj.overlay.deleteSector();
          }

          _this12._setItem(item, modelIndex);

          var modelItem = _this12.itemMap.get(modelIndex);

          if (!modelItem) {
            return;
          }

          if (_this12.mapType === "picture" && item.type === "marker") {
            var timer = setInterval(function () {
              if (modelItem.overlay.isLoaded) {
                _this12._setItemEventCallBack(modelItem, callBack);

                clearInterval(timer);
                timer = null;
                modelItem = null;
              }
            }, 50);
          } else {
            _this12._setItemEventCallBack(modelItem, callBack);
          }
        }
      });
    }
  }, {
    key: "addItem",
    value: // 添加新元素
    function addItem(item, modelIndex, callBack) {
      var _this13 = this;

      var isCanEdit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      this._setItem(item, modelIndex);

      var modelItem = this.itemMap.get(modelIndex);

      if (!modelItem) {
        return;
      }

      if (this.mapType === "picture" && item.type === "marker") {
        var timer = setInterval(function () {
          if (modelItem.overlay.isLoaded) {
            _this13._setItemEventCallBack(modelItem, callBack);

            if (isCanEdit) {
              if (modelItem.item.type === "marker") {
                if (modelItem.item.itemWebData.elementThirdType !== "position_vibration_fiber") {
                  modelItem.overlay.enableDragging();
                }
              } else {
                modelItem.overlay.enableEditing();
              }
            }

            clearInterval(timer);
            modelItem = null;
          }
        }, 50);
      } else {
        this._setItemEventCallBack(modelItem, callBack); // this.itemMap.get(modelIndex).overlay.enableDragging();


        if (isCanEdit) {
          if (modelItem.item.type === "marker") {
            if (modelItem.item.itemWebData.elementThirdType !== "position_vibration_fiber") {
              modelItem.overlay.enableDragging();
            }
          } else {
            modelItem.overlay.enableEditing();
          }
        }
      }
    }
  }, {
    key: "pixelToPoint",
    value: // 像素转坐标
    function pixelToPoint(x, y, offset) {
      var point = null;

      if (this.mapType === "gis") {
        var pixel = new BMap.Pixel(x, y);
        point = this.map.pixelToPoint(pixel);
      } else if (this.mapType === "picture") {
        var stageInfo = this.map.getStageInfo();
        var pointX = (x - (stageInfo.x - (stageInfo.width * stageInfo.scale - stageInfo.width) / 2)) / stageInfo.scale;
        var pointY = (y - (stageInfo.y - (stageInfo.height * stageInfo.scale - stageInfo.height) / 2)) / stageInfo.scale;
        point = {
          x: pointX,
          y: pointY
        };

        if (offset) {
          point.x = point.x + offset.x;
          point.y = point.y + offset.y;
        }
      }

      return point;
    }
  }, {
    key: "pointToPixel",
    value: // 坐标转像素
    function pointToPixel(point) {
      var pixel = null;

      if (this.mapType === "gis") {
        var pt = new BMap.Point(point.lng, point.lat);
        pixel = this.map.pointToPixel(pt);
      } else {
        var stageInfo = this.map.getStageInfo();
        pixel = {
          x: 0,
          y: 0
        };
        pixel.x = point.x * stageInfo.scale + (stageInfo.x - (stageInfo.width * stageInfo.scale - stageInfo.width) / 2);
        pixel.y = point.y * stageInfo.scale + (stageInfo.y - (stageInfo.height * stageInfo.scale - stageInfo.height) / 2);
      }

      return pixel;
    } // 获取地图信息

  }, {
    key: "getMapInfo",
    value: function getMapInfo() {
      var mapInfo = {};

      if (this.mapType === "gis") {
        mapInfo.lng = this.map.getCenter().lng;
        mapInfo.lat = this.map.getCenter().lat;
        mapInfo.zoom = this.map.getZoom();
      } else if (this.mapType === "picture") {
        mapInfo = this.map.getStageInfo();
      }

      return mapInfo;
    }
  }, {
    key: "getAllItemsData",
    value: // 外部获取所有item的信息
    function getAllItemsData() {
      var itemsData = [];

      if (this.itemMap) {
        this.itemMap.forEach(function (v) {
          itemsData.push(v.item);
        });
      }

      return itemsData;
    }
  }, {
    key: "getItemData",
    value: // 外部根据id获取item的信息(含overlay)
    function getItemData(itemId) {
      var itemData = null;

      if (this.itemMap) {
        this.itemMap.forEach(function (v) {
          if (v.item.itemId === itemId) {
            itemData = v;
          }
        });
      }

      return itemData;
    }
  }, {
    key: "gisDistanceTool",
    value: //gis地图测距
    function gisDistanceTool(action) {
      if (this.mapType === "picture") {
        return;
      }

      var myDis = new BMapLib.DistanceTool(this.map);

      if (action === "open") {
        myDis.open();
      } else {
        myDis.close();
      }
    }
  }, {
    key: "gisAreaTool",
    value: // gis地图测面
    function gisAreaTool(action) {
      if (this.mapType === "picture") {
        return;
      }

      var measureAreaTool = createMeasureAreaTool(this.map);

      if (action === "open") {
        measureAreaTool.open();
      } else {
        measureAreaTool.close();
      }
    } // 点位显示，图层筛选功能

  }, {
    key: "filterMarker",
    value: function filterMarker(filterArr) {
      var _this14 = this;

      this.itemMap.forEach(function (v, k) {
        if (v.item.type === "marker") {
          if (_this14._filterUtil(v, filterArr)) {
            v.overlay.show();
          } else {
            v.overlay.hide();
          }
        } else if (v.item.type === "sector") {
          _this14.itemMap.forEach(function (v2, k2) {
            if (v.item.parentModelIndex === k2) {
              if (_this14._filterUtil(v2, filterArr) && v.item.itemInfo.isShowSector) {
                v.overlay.showSector();
              } else {
                v.overlay.hideSector();
              }
            }
          });
        }
      });
    }
  }, {
    key: "_filterUtil",
    value: // 图层筛选工具类
    function _filterUtil(v, filterArr) {
      var bool = true;
      var typeBool = true;
      var chnBool = true;
      var onlineBool = true;
      var scanBool = true;
      filterArr.forEach(function (filterVal) {
        if (v.item.itemWebData.elementSecondType === filterVal.typeStr) {
          if (!filterVal.selected) {
            typeBool = false;
          }

          filterVal.chn.forEach(function (filterVal2) {
            if (!filterVal2.selected && v.item.itemWebData.elementThirdType === filterVal2.typeStr) {
              chnBool = false;
            }
          });
          filterVal.onlineStatus.forEach(function (filterVal2) {
            if (!filterVal2.selected && v.item.itemWebData.channelInfo.onlineStatus === filterVal2.typeStr) {
              onlineBool = false;
            }
          });
          filterVal.scanCollectionList.forEach(function (filterVal2) {
            if (!filterVal2.selected && v.item.itemWebData.channelInfo.scanCollectionList && v.item.itemWebData.channelInfo.scanCollectionList.some(function (v2) {
              return v2 === filterVal2.typeStr;
            })) {
              scanBool = false;
            }
          });
        }
      });

      if (typeBool && chnBool && onlineBool && scanBool) {
        bool = true;
      } else {
        bool = false;
      }

      return bool;
    }
  }, {
    key: "filterByChnType",
    value: // 根据通道类型筛选点位
    function filterByChnType(chnType, isShow) {
      var _this15 = this;

      var hideItemCallBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      var hideitemArr = [];
      this.itemMap.forEach(function (v, k) {
        if (v.item.type === "marker") {
          if (v.item.secondType === chnType) {
            isShow ? v.overlay.show() : v.overlay.hide();

            if (!isShow) {
              hideitemArr.push(v.item);
            } else {
              var _iterator9 = _createForOfIteratorHelper(hideitemArr.entries()),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var _step9$value = _slicedToArray(_step9.value, 2),
                      i = _step9$value[0],
                      x = _step9$value[1];

                  if (x.itemId === v.item.itemId) {
                    hideitemArr.splice(i, 1);
                  }
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
            }
          }
        } else if (v.item.type === "sector") {
          _this15.itemMap.forEach(function (v2, k2) {
            if (v.item.parentModelIndex === k2) {
              if (v2.item.secondType === chnType) {
                isShow && v.item.itemInfo && v.item.itemInfo.isShowSector ? v.overlay.showSector() : v.overlay.hideSector();
              }
            }
          });
        }
      });
      hideItemCallBack(hideitemArr);
    }
  }, {
    key: "filterByScanCol",
    value: // 根据摄像机能力集筛选点位
    function filterByScanCol(scanColTypeArr) {
      var _this16 = this;

      var hideItemCallBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var hideitemArr = [];
      this.itemMap.forEach(function (v, k) {
        if (v.item.secondType === "vc" && v.item.itemWebData && v.item.itemWebData.channelInfo && v.item.itemWebData.channelInfo.hasOwnProperty("scanCollectionList")) {
          if (v.item.itemWebData.channelInfo.scanCollectionList && v.item.itemWebData.channelInfo.scanCollectionList.length !== 0) {
            var flag = false;
            scanColTypeArr.forEach(function (x) {
              v.item.itemWebData.channelInfo.scanCollectionList.some(function (y) {
                return y === x;
              }) ? flag = true : "";
            });
            flag ? v.overlay.show() : v.overlay.hide();

            _this16.itemMap.forEach(function (v2, k2) {
              if (v2.item.type === "sector" && v2.item.parentModelIndex === k) {
                flag && v2.item.itemInfo && v2.item.itemInfo.isShowSector ? v2.overlay.showSector() : v2.overlay.hideSector();
              }
            });

            if (!flag) {
              hideitemArr.push(v.item);
            } else {
              var _iterator10 = _createForOfIteratorHelper(hideitemArr.entries()),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var _step10$value = _slicedToArray(_step10.value, 2),
                      i = _step10$value[0],
                      x = _step10$value[1];

                  if (x.itemId === v.item.itemId) {
                    hideitemArr.splice(i, 1);
                  }
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }
          } else {
            scanColTypeArr.some(function (y) {
              return y === "normalSnap";
            }) ? v.overlay.show() : v.overlay.hide();
          }
        }
      });
      hideItemCallBack(hideitemArr);
    }
  }, {
    key: "showAll",
    value: // 显示所有点位
    function showAll(callBack) {
      this.itemMap.forEach(function (v, k) {
        if (v.item.type === "sector" && v.item.itemInfo && v.item.itemInfo.isShowSector) {
          v.overlay.showSector();
        } else {
          v.overlay.show();
        }
      });
      callBack("allShow");
    }
  }, {
    key: "hideAll",
    value: // 隐藏所有点位
    function hideAll(callBack) {
      this.itemMap.forEach(function (v, k) {
        if (v.item.type === "sector") {
          v.overlay.hideSector();
        } else {
          v.overlay.hide();
        }
      });
      callBack("allHide");
    }
  }, {
    key: "setPlaceBoundStyle",
    value: // 设置上级平台的区域高亮
    function setPlaceBoundStyle(placeName) {
      var _this17 = this;

      var areaBorderJson = store.state.home.areaMapBorder;

      if (!areaBorderJson) {
        return;
      }

      areaBorderJson.features.forEach(function (v) {
        if (v.properties.name === placeName) {
          var points = [];
          v.geometry.coordinates[v.geometry.coordinates.length - 1].forEach(function (x) {
            var ptTempArr = Vue.prototype.$coordtransform.gcj02tobd09(Vue.prototype.$coordtransform.wgs84togcj02(x[0], x[1])[0], Vue.prototype.$coordtransform.wgs84togcj02(x[0], x[1])[1]);
            points.push(new BMap.Point(ptTempArr[0], ptTempArr[1]));
          });
          var ply = new BMap.Polygon(points, {
            strokeColor: "#1FBEB3",
            //边线颜色。
            fillColor: "#1FBEB3",
            //填充颜色。当参数为空时，圆形将没有填充效果。
            strokeWeight: 1,
            //边线的宽度，以像素为单位。
            strokeOpacity: 1,
            //边线透明度，取值范围0 - 1。
            fillOpacity: 0.3,
            //填充的透明度，取值范围0 - 1。
            strokeStyle: 'solid',
            //边线的样式，solid或dashed。
            enableMassClear: false,
            enableEditing: false
          }); //建立多边形覆盖物

          _this17.map.addOverlay(ply); //添加覆盖物
          // this.map.setViewport(ply.getPath());    //调整视野

        }
      });
    }
  }, {
    key: "setAreaBlockStyle",
    value: // 设置下级平台区域边界
    function setAreaBlockStyle(areaData, callBack, plyCallBack) {
      var _this18 = this;

      if (!areaData) {
        return;
      }

      if (areaData.areaBoundPoints) {
        var points = [];
        areaData.areaBoundPoints.forEach(function (v) {
          points.push(new BMap.Point(v.lng, v.lat));
        });
        var ply = new BMap.Polygon(points, {
          strokeColor: "#3ADED4",
          //边线颜色。
          fillColor: "#2FFAEE",
          //填充颜色。当参数为空时，圆形将没有填充效果。
          strokeWeight: 1,
          //边线的宽度，以像素为单位。
          strokeOpacity: 1,
          //边线透明度，取值范围0 - 1。
          fillOpacity: 0.3,
          //填充的透明度，取值范围0 - 1。
          strokeStyle: 'solid',
          //边线的样式，solid或dashed。
          enableMassClear: false,
          enableEditing: false
        }); //建立多边形覆盖物

        this.map.addOverlay(ply); //添加覆盖物

        ply.hide();
        plyCallBack(ply);
        ply.addEventListener("click", function (e) {
          e.domEvent.stopPropagation();
          callBack(areaData, _this18.pointToPixel(ply.getBounds().getCenter()), ply);
        });
      }
    }
  }, {
    key: "addDefence",
    value: // 添加防区
    function addDefence(callBack) {
      var _this19 = this;

      if (this.mapType === "gis") {
        this._drawingManager.setDrawingMode(BMAP_DRAWING_POLYLINE);

        this._drawingManager.open();

        var overlaycomplete = function overlaycomplete(e) {
          _this19._drawingManager.close();

          _this19._drawingManager.removeEventListener('overlaycomplete', overlaycomplete);

          if (e.drawingMode === "polyline") {
            e.overlay.enableEditing();
            e.overlay.disableMassClear();
            callBack(e.overlay.getPath(), e.overlay);
          }
        };

        this._drawingManager.addEventListener('overlaycomplete', overlaycomplete);
      } else if (this.mapType === "picture") {
        this.map.openDrawManger("polyline", function (polyline) {
          polyline.disableMassClear();
          callBack(polyline.shape.getPoints(), polyline);
        });
      }
    } // 改变防区颜色

  }, {
    key: "changeDefenceColor",
    value: function changeDefenceColor(parentId, color) {
      var defenceItem;
      this.itemMap.forEach(function (v) {
        if (v.item.parentItemId === parentId) {
          defenceItem = v;
        }
      });

      if (defenceItem) {
        if (this.mapType === 'gis') {
          defenceItem.overlay.setStrokeColor(color);
        } else {
          defenceItem.overlay.shape.setStroke(color);
          defenceItem.overlay.layer.draw();
        }
      }
    } // 生成振动光纤

  }, {
    key: "buildFibers",
    value: function buildFibers(fibersData, enableEdit) {
      var _this20 = this;

      var callBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      var fiberDataClone = [];
      fiberDataClone = Vue.prototype.$common.copyArray(fibersData, fiberDataClone);
      fiberDataClone && fiberDataClone.forEach(function (v) {
        v.points && v.points.forEach(function (x) {
          var ptTempArr = Vue.prototype.$coordtransform.gcj02tobd09(Vue.prototype.$coordtransform.wgs84togcj02(x.longitude, x.latitude)[0], Vue.prototype.$coordtransform.wgs84togcj02(x.longitude, x.latitude)[1]);
          x.lng = ptTempArr[0];
          x.lat = ptTempArr[1];
        });

        _this20.handelFiberCommon(v, enableEdit, callBack);
      });
    }
  }, {
    key: "updateFiber",
    value: // 更新振动光纤
    function updateFiber(fiberData, enableEdit) {
      var callBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      var updateFiberDone = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
      var fiberDataClone = null;
      fiberDataClone = Vue.prototype.$common.copyObject(fiberData, fiberDataClone);
      fiberDataClone.points && fiberDataClone.points.forEach(function (x) {
        var ptTempArr = Vue.prototype.$coordtransform.gcj02tobd09(Vue.prototype.$coordtransform.wgs84togcj02(x.longitude, x.latitude)[0], Vue.prototype.$coordtransform.wgs84togcj02(x.longitude, x.latitude)[1]);
        x.lng = ptTempArr[0];
        x.lat = ptTempArr[1];
      });
      this.handelFiberCommon(fiberDataClone, enableEdit, callBack, updateFiberDone);
      setTimeout(function () {
        fiberDataClone = null;
      }, 3000);
    }
  }, {
    key: "handelFiberCommon",
    value: function handelFiberCommon(v, enableEdit, callBack, updateFiberDone) {
      var _this21 = this;

      var webDataClone = null;
      webDataClone = Vue.prototype.$common.copyObject(v, webDataClone);
      var points = [];
      var polyline;
      webDataClone.points && webDataClone.points.forEach(function (v2) {
        if (_this21.mapType === "gis") {
          points.push(new BMap.Point(v2.lng, v2.lat));
        } else {
          points.push({
            x: parseFloat(v2.xCoord),
            y: parseFloat(v2.yCoord)
          });
        }
      });

      if (this.mapType === "gis") {
        polyline = new BMap.Polyline(points, {
          strokeColor: "#777777",
          strokeWeight: 4,
          strokeOpacity: 1,
          strokeStyle: 'solid'
        });
      } else {
        polyline = new PPolyline({
          points: points,
          strokeWidth: 4,
          stroke: "#777777",
          noShowMidPoint: true
        });
      }

      var timer = setTimeout(function () {
        polyline.disableMassClear();

        _this21.map.addOverlay(polyline);

        if (enableEdit && _this21.mapType === "picture") {
          polyline.enableEditing();

          var polylineMarkerCall = function polylineMarkerCall(e) {
            var dataObj = {
              item: {},
              eventType: ""
            };
            dataObj.item = webDataClone;
            dataObj.eventType = "polylineDragend";

            if (e.type === "mouseup") {
              var tempPoints = polyline.shape.getPoints();
              var pointsUtil = [];
              tempPoints.forEach(function (v, i) {
                if (i % 2 !== 0) {
                  pointsUtil.push({
                    xCoord: tempPoints[i - 1],
                    yCoord: tempPoints[i]
                  });
                }
              });
              dataObj.item.points.forEach(function (v, i) {
                v.xCoord = pointsUtil[i].xCoord.toString();
                v.yCoord = pointsUtil[i].yCoord.toString();
                v.longitude = v.longitude.toString();
                v.latitude = v.latitude.toString();
              });
            }

            callBack(e, dataObj);
          };

          polyline.editMarkers.forEach(function (v) {
            if (v.type !== "midpoint") {
              v.marker.addEventListener("mouseup", polylineMarkerCall);
            }
          });
        }

        if (_this21.fiberArray.some(function (v2) {
          return v2.fiber.deviceUuid === webDataClone.deviceUuid && v2.fiber.fiberIndex === webDataClone.fiberIndex;
        })) {
          var oldFiber = _this21.fiberArray.find(function (v2) {
            return v2.fiber.deviceUuid === webDataClone.deviceUuid && v2.fiber.fiberIndex === webDataClone.fiberIndex;
          });

          enableEdit && oldFiber.fiberPolyline.editMarkers.forEach(function (v) {
            if (v.type !== "midpoint") {
              v.marker.off("mouseup");
            }
          });

          _this21.map.removeOverlay(oldFiber.fiberPolyline);

          oldFiber.fiber = webDataClone;
          oldFiber.fiberPolyline = polyline;
          var deviceUuid = webDataClone.deviceUuid;
          var fiberIndex = webDataClone.fiberIndex;
          updateFiberDone(deviceUuid, fiberIndex);
        } else {
          _this21.fiberArray.push({
            fiber: webDataClone,
            fiberPolyline: polyline
          });
        }

        clearTimeout(timer);
        timer = null;
      }, 200);
    }
  }, {
    key: "deleteFibers",
    value: function deleteFibers(deviceUuid) {
      var _iterator11 = _createForOfIteratorHelper(this.fiberArray.entries()),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var _step11$value = _slicedToArray(_step11.value, 2),
              i = _step11$value[0],
              v = _step11$value[1];

          if (v.fiber.deviceUuid === deviceUuid) {
            this.map.removeOverlay(v.fiberPolyline);
            this.fiberArray.splice(i, 1);
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }
  }]);

  return MapController;
}();

/**
 * 地图控件模型类
 */
var MapModel = /*#__PURE__*/function () {
  // 构造器
  function MapModel(data) {
    _classCallCheck(this, MapModel);

    this.dataMap = new Map();

    this._initData(data);
  }

  _createClass(MapModel, [{
    key: "_genModelIndex",
    value: // 用js维护一套产生不重复id的机制
    function _genModelIndex() {
      var idStr = Date.now().toString(36);
      idStr += Math.random().toString(36).substr(3);
      return idStr;
    }
  }, {
    key: "_initData",
    value: // 初始化数据
    function _initData(data) {
      var _this = this;

      data.forEach(function (item) {
        var modelIndex = _this._genModelIndex();

        item.isEdit = false;

        _this.dataMap.set(modelIndex, item);

        _this.dataMap.get(modelIndex).modelIndex = modelIndex;
      });
      this.dataMap.forEach(function (item) {
        item.parentModelIndex = _this._setParentModelIndex(item);
      });
    }
  }, {
    key: "_setParentModelIndex",
    value: // 设置元素的父元素modelIndex
    function _setParentModelIndex(item) {
      var parentModelIndex = null;
      var parentItem = this.getItemByItemId(item.parentItemId);

      if (parentItem) {
        parentModelIndex = parentItem.modelIndex;
      }

      return parentModelIndex;
    }
  }, {
    key: "updateItem",
    value: // 更新元素（直接替换），并返回回调函数通知View
    function updateItem(itemId, item) {
      var callBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      var modelIndex = this.getItemByItemId(itemId).modelIndex;
      this.dataMap.set(modelIndex, item);
      callBack(item, modelIndex);
    }
  }, {
    key: "getItemByModelIndex",
    value: // 根据modelIndex获取元素
    function getItemByModelIndex(modelIndex) {
      return this.dataMap.get(modelIndex);
    }
  }, {
    key: "getItemByItemId",
    value: // 根据元素ID获取元素
    function getItemByItemId(itemId) {
      var item = null;
      this.dataMap.forEach(function (v) {
        if (v.itemId === itemId) {
          item = v;
        }
      });
      return item;
    }
  }, {
    key: "getItemsByType",
    value: // 根据元素类型获取元素数组
    function getItemsByType(type) {
      var itemArr = [];
      this.dataMap.forEach(function (item) {
        if (item.type === type) {
          itemArr.push(item);
        }
      });
      return itemArr;
    }
  }, {
    key: "deleteItem",
    value: // 根据itemId删除元素，并返回回调函数通知View
    function deleteItem(itemId) {
      var _this2 = this;

      var callBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var modelIndex = this.getItemByItemId(itemId).modelIndex;
      this.dataMap.forEach(function (v, k) {
        if (k === modelIndex || v.parentModelIndex === modelIndex) {
          _this2.dataMap["delete"](modelIndex);
        }
      });
      callBack(modelIndex);
    }
  }, {
    key: "addItem",
    value: // 添加新元素
    function addItem(item) {
      var callBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      var modelIndex = this._genModelIndex();

      item.isEdit = true;
      this.dataMap.set(modelIndex, item);
      this.dataMap.get(modelIndex).modelIndex = modelIndex;
      callBack(item, modelIndex);
    }
  }, {
    key: "clearItems",
    value: // 清空所有元素，并返回回调函数通知View（是否有需要待定）
    function clearItems() {
      var callBack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      this.dataMap.clear();
      callBack();
    }
  }]);

  return MapModel;
}();

exports.MapController = MapController;
exports.MapModel = MapModel;
