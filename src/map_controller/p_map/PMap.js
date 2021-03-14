
const {PMarker, PPolyline, PRectangle, PPolygon, PCircle, PSector} = require("./PShapes.js")
/**
 * 图片地图类
 */
class PMap {
  // 构造器
  constructor(mapOption) {
    this.mapOption = mapOption;
    this.body = null;
    this.container = null;
    this.canvas = null;
    this.stage = null;
    this.img = null;
    this.isLoaded = false;
    this.overlayMap = new Map();
    this.create();
  };
  // 用js维护一套产生不重复id的机制
  _genModelIndex() {
    let idStr = Date.now().toString(36);
    idStr += Math.random().toString(36).substr(3);
    return idStr;
  };
  // 初始化图片地图
  create() {
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
    this.img.onload = () => {
      this.canvas.style.width = this.img.width + "px";
      this.canvas.style.height = this.img.height + "px";
      this.canvas.style.backgroundSize = `${this.img.width}px ${this.img.height}px`;
      // this.canvas.style.backgroundImage = 'url("' + Vue.prototype.$common.setPictureShow(this.img.src) + '")';
      this.canvas.style.backgroundImage = 'url("' + this.img.src + '")';
      this.canvas.style.position = "absolute";
      if (this.mapOption.startPoint) {
        this.canvas.style.top = this.mapOption.startPoint.y + "px";
        this.canvas.style.left = this.mapOption.startPoint.x + "px";
      }
      this.canvas.style.transform = "scale(" + this.mapOption.scale + ")";
      this.container.appendChild(this.canvas);
      this.canvas.oncontextmenu = (e) => {
        window.event.returnValue = false;
        return false;
      }
      this.canvas.ondragover = (e) => {
        e.preventDefault();
      }
      this.stage = new Kinetic.Stage({
        container: "stage",
        width: this.img.width,
        height: this.img.height
      });
      this.layer = new Kinetic.Layer();
      this.stage.add(this.layer);
      this.isLoaded = true;
    }
    this.enableCanvasDragging();
    this.enableScrollWheelZoom();
  };
  // 允许画布拖动
  enableCanvasDragging() {
    this.canvas.addEventListener("mousedown", (e) => {
      let disX = e.clientX - this.canvas.offsetLeft;
      let disY = e.clientY - this.canvas.offsetTop;
      e.preventDefault();
      this.body.onmousemove = (ev) => {
        ev.preventDefault();
        let x = ev.clientX - disX;
        let y = ev.clientY - disY;
        this.canvas.style.left = x + 'px';
        this.canvas.style.top = y + 'px';
      }
      // 鼠标弹起后停止移动
      this.body.onmouseup = () => {
        this.body.onmousemove = null;
        this.body.onmouseup = null;
      }
    });
  };
  // 设置画布在容器里居中
  setCenter() {
    this.canvas.style.top = "";
    this.canvas.style.left = "";
  };
  // 设置地图
  setPosition(left, top) {
    this.canvas.style.top = top + "px";
    this.canvas.style.left = left + "px";
  };
  // 允许滚轮缩放
  enableScrollWheelZoom() {
    this.container.onmousewheel = (e) => {
      let transform = this.canvas.style.transform;
      let scale = parseFloat(transform.substring(transform.indexOf('(') + 1, transform.indexOf(')'))) || 1;
      scale += e.wheelDelta / 1200;
      if (scale > 0) {
        this.canvas.style.transform = "scale(" + scale + ")";
      }
    }
  };
  // 放大地图
  zoomIn() {
    let transform = this.canvas.style.transform;
    let scale = parseFloat(transform.substring(transform.indexOf('(') + 1, transform.indexOf(')'))) || 1;
    scale = scale + 0.1;
    this.canvas.style.transform = "scale(" + scale + ")";
  };
  // 缩小地图
  zoomOut() {
    let transform = this.canvas.style.transform;
    let scale = parseFloat(transform.substring(transform.indexOf('(') + 1, transform.indexOf(')'))) || 1;
    if (scale > 0.1) {
      scale = scale - 0.1;
    }
    this.canvas.style.transform = "scale(" + scale + ")";
  };
  // 向图片地图添加覆盖物
  addOverlay(overlay) {
    overlay.create(this.stage, this.layer);
    let id = this._genModelIndex();
    this.overlayMap.set(id, overlay);
  };
  // 打开图形绘制模式
  openDrawManger(drawType, callBack = function () { }) {
    this.canvas.style.cursor = 'crosshair';
    if (drawType === "rect" || drawType === "circle") {
      this.stage.on("contentMousedown", (e) => {
        e.cancelBubble = true;
        if (window.event.stopPropagation) {
          window.event.stopPropagation();
        } else {
          window.event.cancelBubble = true;
        }
        let pointX = this.stage.getPointerPosition().x;
        let pointY = this.stage.getPointerPosition().y;
        if (drawType === "rect") {
          this._drawRect(pointX, pointY, callBack);
        } else if (drawType === "circle") {
          this._drawCircle(pointX, pointY, callBack);
        }
      });
    } else if (drawType === "polyline") {
      this._drawPolyline(callBack);
    } else if (drawType === "polygon") {
      this._drawPolygon(callBack);
    }
  };
  // 绘制矩形
  _drawRect(pointX, pointY, callBack) {
    let option = {
      x: pointX,
      y: pointY,
      width: 0,
      height: 0
    };
    let rect = new PRectangle(option);
    this.addOverlay(rect);
    this.stage.on("contentMousemove", (e) => {
      e.cancelBubble = true;
      if (window.event.stopPropagation) {
        window.event.stopPropagation();
      } else {
        window.event.cancelBubble = true;
      }
      let x = this.stage.getPointerPosition().x;
      let y = this.stage.getPointerPosition().y;
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
    this.stage.on("contentMouseup", (e) => {
      e.cancelBubble = true;
      if (window.event.stopPropagation) {
        window.event.stopPropagation();
      } else {
        window.event.cancelBubble = true;
      }
      this.canvas.style.cursor = 'default';
      this.stage.off("contentMousedown");
      this.stage.off("contentMousemove");
      this.stage.off("contentMouseup");
      callBack(rect, e);
    })
  };
  // 绘制圆形
  _drawCircle(pointX, pointY, callBack) {
    let option = {
      x: pointX,
      y: pointY,
      radius: 0,
    };
    let circle = new PCircle(option);
    this.addOverlay(circle);
    this.stage.on("contentMousemove", (e) => {
      e.cancelBubble = true;
      if (window.event.stopPropagation) {
        window.event.stopPropagation();
      } else {
        window.event.cancelBubble = true;
      }
      let x = this.stage.getPointerPosition().x;
      let y = this.stage.getPointerPosition().y;
      option.radius = Math.sqrt(Math.pow(x - pointX, 2) + Math.pow(y - pointY, 2));
      circle.shape.setRadius(option.radius);
      circle.layer.draw();
    });
    this.stage.on("contentMouseup", (e) => {
      e.cancelBubble = true;
      if (window.event.stopPropagation) {
        window.event.stopPropagation();
      } else {
        window.event.cancelBubble = true;
      }
      this.canvas.style.cursor = 'default';
      this.stage.off("contentMousedown");
      this.stage.off("contentMousemove");
      this.stage.off("contentMouseup");
      callBack(circle, e);
    })
  };
  // 绘制多边形
  _drawPolygon(callBack) {
    let option = {
      points: [0, 0]
    };
    let points = [];
    option.points.forEach((v) => {
      points.push(v.x);
      points.push(v.y);
    });
    let polygon = new PPolygon(option);
    this.addOverlay(polygon);
    this.stage.on("contentMousedown", (e) => {
      e.cancelBubble = true;
      if (window.event.stopPropagation) {
        window.event.stopPropagation();
      } else {
        window.event.cancelBubble = true;
      }
      let pointX = this.stage.getPointerPosition().x;
      let pointY = this.stage.getPointerPosition().y;
      points.forEach((v, i) => {
        if (i == points.length - 2) {
          points[i] = pointX;
        } else if (i == points.length - 1) {
          points[i] = pointY;
        }
      });
      points.push(pointX);
      points.push(pointY);
      this.stage.on("contentMousemove", (e) => {
        e.cancelBubble = true;
        if (window.event.stopPropagation) {
          window.event.stopPropagation();
        } else {
          window.event.cancelBubble = true;
        }
        let x = this.stage.getPointerPosition().x;
        let y = this.stage.getPointerPosition().y;
        points.forEach((v, i) => {
          if (i == points.length - 2) {
            points[i] = x;
          } else if (i == points.length - 1) {
            points[i] = y;
          }
        });
        polygon.shape.setPoints(points);
        polygon.layer.draw();
      });
      this.stage.on("contentDblclick", (e) => {
        e.cancelBubble = true;
        if (window.event.stopPropagation) {
          window.event.stopPropagation();
        } else {
          window.event.cancelBubble = true;
        }
        this.canvas.style.cursor = 'default';
        this.stage.off("contentMousedown");
        this.stage.off("contentMousemove");
        this.stage.off("contentDblclick");
        let timer = setTimeout(() => {
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
  };
  // 绘制折线
  _drawPolyline(callBack) {
    let option = {
      points: [
        {
          x: -20,
          y: -20
        }
      ]
    };
    let points = [];
    option.points.forEach((v) => {
      points.push(v.x);
      points.push(v.y);
    });
    let polyline = new PPolyline(option);
    this.addOverlay(polyline);
    this.stage.on("contentMousedown", (e) => {
      e.cancelBubble = true;
      if (window.event.stopPropagation) {
        window.event.stopPropagation();
      } else {
        window.event.cancelBubble = true;
      }
      let pointX = this.stage.getPointerPosition().x;
      let pointY = this.stage.getPointerPosition().y;
      points.forEach((v, i) => {
        if (i == points.length - 2) {
          points[i] = pointX;
        } else if (i == points.length - 1) {
          points[i] = pointY;
        }
      });
      points.push(pointX);
      points.push(pointY);
      this.stage.on("contentMousemove", (e) => {
        e.cancelBubble = true;
        if (window.event.stopPropagation) {
          window.event.stopPropagation();
        } else {
          window.event.cancelBubble = true;
        }
        let x = this.stage.getPointerPosition().x;
        let y = this.stage.getPointerPosition().y;
        points.forEach((v, i) => {
          if (i == points.length - 2) {
            points[i] = x;
          } else if (i == points.length - 1) {
            points[i] = y;
          }
        });
        polyline.shape.setPoints(points);
        polyline.layer.draw();
      });
      this.stage.on("contentDblclick", (e) => {
        e.cancelBubble = true;
        if (window.event.stopPropagation) {
          window.event.stopPropagation();
        } else {
          window.event.cancelBubble = true;
        }
        this.canvas.style.cursor = 'default';
        this.stage.off("contentMousedown");
        this.stage.off("contentMousemove");
        this.stage.off("contentDblclick");
        let timer = setTimeout(() => {
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
  };
  // 批量清除覆盖物
  clearOverlays() {
    this.overlayMap.forEach((v, k) => {
      if (v.enableMassClear) {
        v.remove();
        this.overlayMap.delete(k);
      }
    });
  };
  // 删除覆盖物
  removeOverlay(overlay) {
    overlay.remove();
  };
  // 获取舞台div信息
  getStageInfo() {
    let x = this.canvas.offsetLeft;
    let y = this.canvas.offsetTop;
    let width = this.canvas.offsetWidth;
    let height = this.canvas.offsetHeight;
    let transform = this.canvas.style.transform;
    let scale = parseFloat(transform.substring(transform.indexOf('(') + 1, transform.indexOf(')'))) || 1;
    return {
      x, y, width, height, scale
    }
  };
  // 覆盖物事件监听
  addEventListener(evType, callBack = function () { }) {
    if (evType === "dragstart") {
      this.canvas.addEventListener("mousedown", (e) => {
        let disX = e.clientX - this.canvas.offsetLeft;
        let disY = e.clientY - this.canvas.offsetTop;
        e.preventDefault();
        this.body.onmousemove = (ev) => {
          ev.preventDefault();
          let x = ev.clientX - disX;
          let y = ev.clientY - disY;
          this.canvas.style.left = x + 'px';
          this.canvas.style.top = y + 'px';
          callBack(ev);
        }
        // 鼠标弹起后停止移动
        this.body.onmouseup = () => {
          this.body.onmousemove = null;
          this.body.onmouseup = null;
        }
      });
    } else {
      this.canvas.addEventListener(evType, e => {
        callBack(e);
      });
    }
  };
}

export {
  PMap, PMarker, PPolyline, PRectangle, PPolygon, PCircle, PSector
}