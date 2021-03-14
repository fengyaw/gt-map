/**
 * 百度地图扇形工具类
 */
export class _SectorUtil {
  // 构造器
  constructor(option, map) {
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
  };

  // 初始化扇形
  _initSector() {
    this._computeConv(this.center);
    this._setSectorPath(this.center, this.radius, this.sDegree, this.eDegree);
    this._setEditMarker(this._editEventCall.bind(this));
    let timer = setTimeout(() => {
      this._hideMarkers();
      clearTimeout(timer);
      timer = null;
    }, 10);
  };
  // 计算单位距离
  _computeConv(center) {
    this.lngConv = this.map.getDistance(center, new BMap.Point(center.lng + 1, center.lat)); //计算1经度与原点的距离
    this.latConv = this.map.getDistance(center, new BMap.Point(center.lng, center.lat + 1)); //计算1纬度与原点的距离
  }
  // 设置用于编辑扇形的三个marker
  _setEditMarker(callBack) {
    this.sMarker = this._getEditMarker(this.center, this.radius, "start", this.sDegree, callBack);
    this.eMarker = this._getEditMarker(this.center, this.radius, "end", this.eDegree, callBack);
    this.mMarker = this._getEditMarker(this.center, this.radius, "middle", ((this.eDegree - this.sDegree) / 2 + this.sDegree), callBack);
  };
  // 添加用于编辑扇形的三个marker
  _getEditMarker(center, radius, type, degree, callBack) {
    let point = this._getCurvePoint(center, radius, degree);
    let marker = new BMap.Marker(point, { enableDragging: true, enableMassClear: false });
    let myIcon = new BMap.Icon(require('@/assets/images/map/icon/circle.png'), new BMap.Size(15, 15), {
      imageSize: new BMap.Size(15, 15)
    });
    let eventArray = [
      "click",
      "rightclick",
      "dblclick",
      "mousedown",
      "mouseup",
      "dragstart",
      "dragging",
      "dragend",
    ];
    eventArray.forEach((eventType) => {
      marker.addEventListener(eventType, (e) => {
        callBack(e, type);
      });
    });
    marker.setIcon(myIcon);
    let icon = marker.getIcon();
    marker.setShadow(icon);
    this.map.addOverlay(marker);
    return marker;
  };
  // 隐藏编辑用的三个marker
  _hideMarkers() {
    this.sMarker.hide();
    this.eMarker.hide();
    this.mMarker.hide();
  };
  // 显示编辑用的三个marker
  _showMarkers() {
    this.sMarker.show();
    this.eMarker.show();
    this.mMarker.show();
  };
  // 获取用于绘制扇形的所有点
  _getSectorPoints(center, radius, sDegree, eDegree) {
    let points = []; //创建构成多边形的点数组
    let step = ((eDegree - sDegree) / 30) || 30; //根据扇形的总夹角确定每步夹角度数，最大为10
    points.push(center);
    for (let i = sDegree; i < eDegree + 0.001; i += step) { //循环获取每步的圆弧上点的坐标，存入点数组
      points.push(this._getCurvePoint(center, radius, i));
    }
    points.push(center);
    // if(sDegree == eDegree) {}
    return points;
  };
  // 使用数学的方法计算需要画扇形的圆弧上的点坐标
  _getCurvePoint(center, radius, degree) {
    let lat = radius * Math.sin(degree * Math.PI / 180) / this.latConv; //正弦计算待获取的点的纬度与原点纬度差
    let lng = radius * Math.cos(degree * Math.PI / 180) / this.lngConv; //余弦计算待获取的点的经度与原点经度差
    return new BMap.Point(center.lng + lng, center.lat + lat);
  };
  // 绘制扇形
  _setSectorPath(center, radius, sDegree, eDegree) {
    let styleOptions = {
      strokeColor: "#43FBEF",    //边线颜色。
      fillColor: "#43FBEF",      //填充颜色。当参数为空时，圆形将没有填充效果。
      strokeWeight: 1,       //边线的宽度，以像素为单位。
      strokeOpacity: 1,	   //边线透明度，取值范围0 - 1。
      fillOpacity: 0.4,      //填充的透明度，取值范围0 - 1。
      strokeStyle: 'solid', //边线的样式，solid或dashed。
      enableMassClear: false,
      enableEditing: false,
    };
    this.sector = new BMap.Polygon(this._getSectorPoints(center, radius, sDegree, eDegree), styleOptions);
    this.map.addOverlay(this.sector);
  };
  // 修改属性，重绘扇形
  _resetSectorPath(center, radius, sDegree, eDegree) {
    this.sector.setPath(this._getSectorPoints(center, radius, sDegree, eDegree));
    this.sMarker.setPosition(this._getCurvePoint(center, radius, sDegree));
    this.eMarker.setPosition(this._getCurvePoint(center, radius, eDegree));
    this.mMarker.setPosition(this._getCurvePoint(center, radius, ((this.eDegree - this.sDegree) / 2 + this.sDegree)));
  };
  // marker的事件回调
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
    if (e.type === "ondragging") {
      let y = (e.point.lat - this.center.lat) * this.latConv;
      let x = (e.point.lng - this.center.lng) * this.lngConv;
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
  };
  // 结束点的编辑事件
  _eMarkerEdit(e) {
    if (e.type === "ondragging") {
      let y = (e.point.lat - this.center.lat) * this.latConv;
      let x = (e.point.lng - this.center.lng) * this.lngConv;
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
  };
  // 中间点的编辑事件
  _mMarkerEdit(e) {
    if (e.type === "ondragging") {
      this.radius = this.map.getDistance(this.center, e.point);
      this._resetSectorPath(this.center, this.radius, this.sDegree, this.eDegree);
    }
  };

  // 设置扇形为可编辑状态
  enableEditing() {
    this._showMarkers();
  };
  // 设置扇形为不可编辑状态
  disableEditing() {
    this._hideMarkers();
  };
  // 删除扇形
  deleteSector() {
    this.map.removeOverlay(this.sector);
    this.map.removeOverlay(this.sMarker);
    this.map.removeOverlay(this.eMarker);
    this.map.removeOverlay(this.mMarker);
  };
  hideSector() {
    this._hideMarkers();
    this.sector.hide();
  };
  showSector(isCanEdit) {
    if (isCanEdit === "canEdit") {
      this._showMarkers();
    }
    this.sector.show();
  };
  getSectorInfo() {
    return {
      center: this.center,
      radius: this.radius,
      sDegree: this.sDegree,
      eDegree: this.eDegree
    };
  }
};