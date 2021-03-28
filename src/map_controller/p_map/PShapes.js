
import POverlay from "./POverlay.js"

/**
 * 图片地图标记物类
 */
class PMarker extends POverlay {
  // 构造器
  constructor(option) {
    super(option);
    this.isLoaded = false;
  };
  // 初始化标记物，将其添加到图层和舞台
  create(stage, layer) {
    super.create(stage, layer);
    this.config.x = this.option.point.x;
    this.config.y = this.option.point.y;
    // this.config.offset = { x: 22, y: 40 };
    this.config.detectionType = "pixel";
    this.config.visible = true;
    let img = new Image();
    img.onload = () => {
      this.config.image = img;
      this.shape = new Kinetic.Image(this.config);
      this.layer.add(this.shape);
      this.layer.draw();
      // this.stage.add(this.layer);
      this.isLoaded = true;
      img.onload = null;
      img = null;
    }
    img.src = this.option.icon;
  };
};

/**
 * 图片地图折线类
 */
class PPolyline extends POverlay {
  // 构造器
  constructor(option) {
    super(option);
    this.midPointsArr = [];
    this.editMarkers = [];
    this.noShowMidPoint = option.noShowMidPoint || false;
  };
  // 初始化折线，将其添加到图层和舞台
  create(stage, layer) {
    super.create(stage, layer);
    this.config.detectionType = "pixel";
    this.config.stroke = this.option.stroke || "#777777";
    this.config.strokeWidth = this.option.strokeWidth || 4;
    this.config.points = [];
    this.option.points.forEach((v) => {
      this.config.points.push(v.x);
      this.config.points.push(v.y);
    });
    this.shape = new Kinetic.Line(this.config);
    this.layer.add(this.shape);
    this.layer.draw();
    // this.stage.add(this.layer);
    this._getMiddlePoint();
    this._setEditMarker(this._editEventCall.bind(this));
    this.disableEditing();
  };
  // 允许折线编辑
  enableEditing() {
    this.editMarkers.forEach((v) => {
      if (!this.noShowMidPoint) {
        v.marker.show();
      } else {
        if (v.type !== "midpoint") {
          v.marker.show();
        }
      }
    });
    this.layer.draw();
  };
  // 禁止折线编辑
  disableEditing() {
    this.editMarkers.forEach((v) => {
      v.marker.hide();
    });
    this.layer.draw();
  };
  // 编辑折线后重新绘制折线和操作点
  _resetLinePath() {
    this.config.points = [];
    this.option.points.forEach((v) => {
      this.config.points.push(v.x);
      this.config.points.push(v.y);
    });
    this.editMarkers.forEach((v) => {
      if (v.type === "midpoint") {
        v.marker.remove();
      }
    });
    this._getMiddlePoint();
    this.midPointsArr.forEach((v) => {
      if (!this.noShowMidPoint) {
        this._getEditMarker("midpoint", v, this._editEventCall.bind(this));
      }
    });
    this.shape.setPoints(this.config.points);
    this.layer.draw();
  };
  // 获取折线的所有中间操作点
  _getMiddlePoint() {
    let lastPoint;
    this.midPointsArr = [];
    this.option.points.forEach((v, i) => {
      if (i !== 0) {
        this.midPointsArr.push({
          x: lastPoint.x + (v.x - lastPoint.x) / 2,
          y: lastPoint.y + (v.y - lastPoint.y) / 2,
          index: i
        });
      }
      lastPoint = v;
    });
  };
  // 设置折线的所有操作点
  _setEditMarker(callBack) {
    this.option.points.forEach((v) => {
      this._getEditMarker("endpoint", v, callBack);
    });
    this.midPointsArr.forEach((v) => {
      this._getEditMarker("midpoint", v, callBack);
    });
  };
  // 生成折线的所有操作点
  _getEditMarker(type, point, callBack) {
    let fill;
    if (type === "endpoint") {
      fill = "white";
    } else if (type === "midpoint") {
      fill = "transparent";
    }
    let config = {
      x: point.x,
      y: point.y,
      width: 20,
      height: 20,
      offset: { x: 10, y: 10 },
      fill: fill,
      stroke: "black",
      strokeWidth: 1,
      draggable: true
    };
    let marker = new Kinetic.Rect(config);
    let eventArray = [
      "click",
      "rightclick",
      "dblclick",
      "mousedown",
      "mouseup",
      "dragstart",
      "dragmove",
      "dragend",
    ];
    eventArray.forEach((eventType) => {
      marker.on(eventType, (e) => {
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
      marker, type
    });
    this.layer.draw();
  };
  // 操作点操作时的事件监听回调
  _editEventCall(e, point) {
    let pointX = point.x;
    let pointY = point.y;
    if (e.type === "dragmove") {
      let pointXNew = this.stage.getPointerPosition().x;
      let pointYNew = this.stage.getPointerPosition().y;
      for (let v of this.editMarkers) {
        if (v.marker._id === e.target._id) {
          if (v.type === "endpoint") {
            for (let item of this.option.points) {
              if (item.x === pointX && item.y === pointY) {
                item.x = pointXNew;
                item.y = pointYNew;
                pointX = pointXNew;
                pointY = pointYNew;
                break;
              }
            }
          } else if (v.type === "midpoint") {
            for (let item of this.midPointsArr) {
              if (item.x === pointX && item.y === pointY) {
                item.x = pointXNew;
                item.y = pointYNew;
                pointX = pointXNew;
                pointY = pointYNew;
                this.option.points.splice(item.index, 0, item);
                v.type = "endpoint";
                v.marker.setFill("white");
                break;
              }
            }
          }
          break;
        }
      }
      this._resetLinePath();
    };
  };
  // 更新编辑操作点
  updateEditMarker() {
    let lastX;
    this.option.points = [];
    this.shape.getPoints().forEach((v, k) => {
      if (k % 2 === 0) {
        lastX = v;
      } else {
        this.option.points.push({
          x: lastX,
          y: v
        });
      }
    });
    this._getMiddlePoint();
    this._setEditMarker(this._editEventCall.bind(this));
  };
  // 删除元素
  remove() {
    super.remove();
    this.editMarkers.forEach((v) => {
      v.marker.remove();
    });
    this.layer.draw();
  }
};

/**
 * 图片地图矩形类
 */
class PRectangle extends POverlay {
  // 构造器
  constructor(option) {
    super(option);
  };
  // 初始化矩形，将其添加到图层和舞台
  create(stage, layer) {
    super.create(stage, layer);
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
    this.layer.draw();
    // this.stage.add(this.layer);
  };
};

/**
 * 图片地图多边形类
 */
class PPolygon extends POverlay {
  // 构造器
  constructor(option) {
    super(option);
  };
  // 初始化多边形，将其添加到图层和舞台
  create(stage, layer) {
    super.create(stage, layer);
    this.config.points = this.option.points;
    this.config.fill = 'rgba(37,210,152,0.4)';
    this.config.stroke = '#43FBEF';
    this.config.strokeWidth = 1;
    this.config.lineJoin = 'round';
    this.config.dash = [4, 4];
    this.shape = new Kinetic.Polygon(this.config);
    this.layer.add(this.shape);
    this.layer.draw();
    // this.stage.add(this.layer);
  };
};

/**
 * 图片地图圆形类
 */
class PCircle extends POverlay {
  // 构造器
  constructor(option) {
    super(option);
  };
  // 初始化圆形，将其添加到图层和舞台
  create(stage, layer) {
    super.create(stage, layer);
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
    this.layer.draw();
    // this.stage.add(this.layer);
  };
};

/**
 * 图片地图扇形类
 */
class PSector extends POverlay {
  // 构造器
  constructor(option) {
    super(option);
    this.sMarker = null;
    this.eMarker = null;
    this.mMarker = null;
    this.radius = option.radius || 0;
    this.sDegree = option.sDegree || 0;
    this.eDegree = option.eDegree || 0;
  };
  // 初始化扇形，将其添加到图层和舞台
  create(stage, layer) {
    super.create(stage, layer);
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
    this.layer.draw();
    // this.stage.add(this.layer);
    this._setEditMarker(this._editEventCall.bind(this));
    this.disableEditing();
  };
  // 允许扇形编辑，即显示编辑操作点
  enableEditing() {
    this.sMarker.show();
    this.eMarker.show();
    this.mMarker.show();
    this.layer.draw();
  };
  // 禁止扇形编辑，即隐藏编辑操作点
  disableEditing() {
    this.sMarker.hide();
    this.eMarker.hide();
    this.mMarker.hide();
    this.layer.draw();
  };
  // 设置扇形编辑操作点
  _setEditMarker(callBack) {
    this.sMarker = this._getEditMarker(this.option.center, this.option.radius, "start", this.option.sDegree, callBack);
    this.eMarker = this._getEditMarker(this.option.center, this.option.radius, "end", this.option.eDegree, callBack);
    this.mMarker = this._getEditMarker(this.option.center, this.option.radius, "middle", ((this.option.eDegree - this.option.sDegree) / 2 + this.option.sDegree), callBack);
  };
  // 添加用于编辑扇形的三个操作点
  _getEditMarker(center, radius, type, degree, callBack) {
    let point = this._getCurvePoint(center, radius, degree);
    let config = {
      x: point.x,
      y: point.y,
      fill: '#43FBEF',
      radius: 8,
      draggable: true
    };
    let marker = new Kinetic.Circle(config);
    let eventArray = [
      "click",
      "rightclick",
      "dblclick",
      "mousedown",
      "mouseup",
      "dragstart",
      "dragmove",
      "dragend",
    ];
    eventArray.forEach((eventType) => {
      marker.on(eventType, (e) => {
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
    this.layer.draw();
    // this.stage.add(this.layer);
    return marker;
  };
  // 计算圆弧上指定点的坐标
  _getCurvePoint(center, radius, degree) {
    let y = radius * Math.sin(degree * Math.PI / 180);
    let x = radius * Math.cos(degree * Math.PI / 180);
    return {
      x: center.x + x,
      y: center.y - y
    };
  };
  // 重新绘制扇形和其编辑操作点
  _resetSectorPath(radius, sDegree, eDegree) {
    this.shape.setAngle(eDegree - sDegree);
    this.shape.setRadius(radius);
    this.shape.setRotation(-eDegree);
    this.sMarker.setX(this._getCurvePoint(this.option.center, radius, sDegree).x);
    this.sMarker.setY(this._getCurvePoint(this.option.center, radius, sDegree).y);
    this.mMarker.setX(this._getCurvePoint(this.option.center, radius, ((eDegree - sDegree) / 2 + sDegree)).x);
    this.mMarker.setY(this._getCurvePoint(this.option.center, radius, ((eDegree - sDegree) / 2 + sDegree)).y);
    this.eMarker.setX(this._getCurvePoint(this.option.center, radius, eDegree).x);
    this.eMarker.setY(this._getCurvePoint(this.option.center, radius, eDegree).y);
    this.layer.draw();
  };
  // 编辑操作点的事件回调
  _editEventCall(e, type) {
    if (type === "start") {
      this._sMarkerEdit(e);
    } else if (type === "end") {
      this._eMarkerEdit(e);
    } else if (type === "middle") {
      this._mMarkerEdit(e);
    }
  };
  // 开始点的编辑事件
  _sMarkerEdit(e) {
    if (e.type === "dragmove") {
      let y = this.stage.getPointerPosition().y - this.option.center.y;
      let x = this.stage.getPointerPosition().x - this.option.center.x;
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
  };
  // 结束点的编辑事件
  _eMarkerEdit(e) {
    if (e.type === "dragmove") {
      let y = this.stage.getPointerPosition().y - this.option.center.y;
      let x = this.stage.getPointerPosition().x - this.option.center.x;
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
  };
  // 中间点的编辑事件
  _mMarkerEdit(e) {
    if (e.type === "dragmove") {
      this.radius = Math.sqrt(Math.pow(this.stage.getPointerPosition().x - this.option.center.x, 2) + Math.pow(this.stage.getPointerPosition().y - this.option.center.y, 2));
      this._resetSectorPath(this.radius, this.sDegree, this.eDegree);
    }
  };
  // 删除元素
  remove() {
    super.remove();
    this.sMarker.remove();
    this.mMarker.remove();
    this.eMarker.remove();
    this.layer.draw();
  };
  hideSector() {
    this.sMarker.hide();
    this.eMarker.hide();
    this.mMarker.hide();
    this.shape.hide();
    this.layer.draw();
  };
  showSector(isCanEdit) {
    if (isCanEdit === "canEdit") {
      this.sMarker.show();
      this.eMarker.show();
      this.mMarker.show();
    }
    this.shape.show();
    this.layer.draw();
  };
  getSectorInfo() {
    return {
      center: this.option.center,
      radius: this.radius,
      sDegree: this.sDegree,
      eDegree: this.eDegree
    };
  }
}

export {
  PMarker, PPolyline, PRectangle, PPolygon, PCircle, PSector
}