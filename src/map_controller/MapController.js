
import {PMap, PMarker, PPolyline, PRectangle, PPolygon, PCircle, PSector} from "./p_map/PMap.js"
import _SectorUtil from "./b_map/_SectorUtil.js"

/**
 * 地图控件视图类
 */
export default class MapController {

  // 构造器
  constructor(mapModel, mapType) {
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
  };

  // 初始化地图
  _initMap() {
    this._mapItem = this.mapModel.getItemsByType("map")[0];
    if (this.mapType === "gis") {
      let mapOption = {
        minZoom: 3,
        maxZoom: 18,
        enableMapClick: false,
      }
      this.map = new BMap.Map(this._mapItem.domId, mapOption);
      this.map.centerAndZoom(new BMap.Point(this._mapItem.startPoint.lng, this._mapItem.startPoint.lat), this._mapItem.scale);
      this.map.enableScrollWheelZoom();
      // this.addMapTypeControl();
      // this.addMapNavigation();
      // this.addOverView();
    } else if (this.mapType === "picture") {
      this.map = new PMap(this._mapItem);
    }
  };
  // 初始化画图工具
  _initDrawingManager() {
    let styleOptions = {
      strokeColor: "#43FBEF",    //边线颜色。
      fillColor: "#25D298",      //填充颜色。当参数为空时，圆形将没有填充效果。
      strokeWeight: 1,       //边线的宽度，以像素为单位。
      strokeOpacity: 1,	   //边线透明度，取值范围0 - 1。
      fillOpacity: 0.4,      //填充的透明度，取值范围0 - 1。
      strokeStyle: 'dashed' //边线的样式，solid或dashed。
    };
    let lineStyleOptions = {
      strokeColor: "#777777",    //边线颜色。
      strokeWeight: 3,       //边线的宽度，以像素为单位。
      strokeOpacity: 1,	   //边线透明度，取值范围0 - 1。
      strokeStyle: 'solid' //边线的样式，solid或dashed。
    };
    this._drawingManager = new BMapLib.DrawingManager(this.map, {
      isOpen: false, //是否开启绘制模式
      enableDrawingTool: false, //是否显示工具栏
      drawingToolOptions: {
        anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
        offset: new BMap.Size(5, 5), //偏离值
      },
      circleOptions: styleOptions, //圆的样式
      polylineOptions: lineStyleOptions, //线的样式
      polygonOptions: styleOptions, //多边形的样式
      rectangleOptions: styleOptions //矩形的样式
    });
  };
  // 设置元素
  _setItem(item, modelIndex) {
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
    if (item.type === "marker" && (item.itemWebData.elementThirdType === "position_vibration_fiber")) {
      this._setFiberPolyline(item, modelIndex);
    }
  }
  // 设置点位元素
  _setMarker(markerItem, modelIndex) {
    let marker;
    if (this.mapType === "gis") {
      let pt = new BMap.Point(markerItem.point.lng, markerItem.point.lat);
      let myIcon = new BMap.Icon(markerItem.icon, new BMap.Size(40, 53));
      marker = new BMap.Marker(pt, { icon: myIcon, enableMassClear: false });
      marker.setOffset(new BMap.Size(0, -18));
    } else if (this.mapType === "picture") {
      marker = new PMarker(markerItem);
      marker.disableMassClear();
    }
    let itemViewObj = {
      overlay: marker,
      item: markerItem
    };
    this.itemMap.set(modelIndex, itemViewObj);
    this.map.addOverlay(itemViewObj.overlay);
    if (markerItem.itemInfo && markerItem.itemInfo.twinkleType && markerItem.itemWebData.channelInfo.alarmStatus === "alarm") {
      let flag = true;
      itemViewObj.timer = setInterval(() => {
        flag ? marker.hide() : marker.show()
        flag = !flag;
      }, 500);
    }
  }
  // 设置折线元素
  _setPolyline(polylineItem, modelIndex) {
    let polyline;
    if (this.mapType === "gis") {
      if (polylineItem.itemInfo.points && polylineItem.itemInfo.points.length !== 0) {
        let bmPointArr = [];
        for (let item of polylineItem.itemInfo.points) {
          bmPointArr.push(
            new BMap.Point(item.lng, item.lat),
          );
        }
        polyline = new BMap.Polyline(bmPointArr, {
          strokeColor: "#777777",
          strokeWeight: 4,
          strokeOpacity: 0.8,
          strokeStyle: 'solid'
        });
        polyline.disableMassClear();
        // polyline.disableEventListen();
      }
    } else if (this.mapType === "picture") {
      polyline = new PPolyline(polylineItem.itemInfo);
      polyline.disableMassClear();
    }
    let itemViewObj = {
      overlay: polyline,
      item: polylineItem
    };
    this.itemMap.set(modelIndex, itemViewObj);
    this.map.addOverlay(this.itemMap.get(modelIndex).overlay);
    let parentItem = this.getAllItemsData().find(v => v.itemId === polylineItem.parentItemId);
    if (parentItem && parentItem.itemInfo && parentItem.itemInfo.twinkleType && parentItem.itemWebData.channelInfo.alarmStatus === "alarm") {
      let flag = true;
      itemViewObj.timer = setInterval(() => {
        flag ? polyline.hide() : polyline.show()
        flag = !flag;
      }, 500);
    }
  };
  _findKeyIndex(points, currentIndex, flagType) {
    let indexObj = {
      beforeIndex: 0,
      nextIndex: 0,
    }
    for (let i = currentIndex - 1; i > 0; i--) {
      if (points[i][flagType] === "father") {
        indexObj.beforeIndex = i;
        break;
      }
    }
    for (let i = currentIndex + 1; i < points.length; i++) {
      if (points[i][flagType] === "father") {
        indexObj.nextIndex = i;
        break;
      }
    }
    return indexObj;
  }
  // 设置定位型振动光纤的防区
  _setFiberPolyline(item, modelIndex) {
    let parentFiber = null;
    for (let [i, v] of this.fiberArray.entries()) {
      if (v.fiber.deviceUuid === item.itemWebData.channelInfo.deviceUuid && v.fiber.fiberIndex === item.itemWebData.channelInfo.fiberIndex) {
        parentFiber = Vue.prototype.$common.copyObject(v.fiber, parentFiber);
      }
    }
    let pxInfoObj = this._getPxObj(parentFiber.points);
    parentFiber.points && parentFiber.points.forEach((v, i) => {
      v.flag = "father";
    });
    parentFiber.points.push({
      flag: "start",
      actualDistance: item.itemWebData.channelInfo.startPoint.actualDistance,
    });
    parentFiber.points.push({
      flag: "end",
      actualDistance: item.itemWebData.channelInfo.endPoint.actualDistance,
    });
    parentFiber.points.sort(this._compareUtil("actualDistance", "flag"));
    let startIndex, endIndex = 0;
    parentFiber.points.forEach((v, i) => {
      if (v.flag === "start") {
        startIndex = i;
      }
      if (v.flag === "end") {
        endIndex = i;
      }
    })
    let startKeyIndexObj = this._findKeyIndex(parentFiber.points, startIndex, "flag");
    let endKeyIndexObj = this._findKeyIndex(parentFiber.points, endIndex, "flag");
    let defenceStartPoint = this._getPointUtil(parentFiber.points, pxInfoObj.pxForOneM, startIndex, startKeyIndexObj.beforeIndex, startKeyIndexObj.nextIndex);
    let defenceEndPoint = this._getPointUtil(parentFiber.points, pxInfoObj.pxForOneM, endIndex, endKeyIndexObj.beforeIndex, endKeyIndexObj.nextIndex);
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
    let itemClone = null;
    itemClone = Vue.prototype.$common.copyObject(item, itemClone);
    this._setMarker(itemClone, modelIndex);
    itemClone = null;
    let start, end = 0;
    if (startIndex <= endIndex) {
      start = startIndex;
      end = endIndex;
    } else {
      end = startIndex;
      start = endIndex;
    }
    let defencePointsArr = parentFiber.points.slice(start, end + 1);
    let polyline = this._generateFiberLine(defencePointsArr, defenceStartPoint, defenceEndPoint, "flag", this._setDefenceColor(item.itemWebData.channelInfo));
    polyline.disableMassClear();
    this.map.addOverlay(polyline);
    this.fiberDefenceArr.push({
      channelUuid: item.itemWebData.resourceUuid,
      points: defencePointsArr,
      pxInfoObj,
      startFctualDistance: item.itemWebData.channelInfo.startPoint.actualDistance,
      polyline,
    })
    if (item.itemWebData.channelInfo.alarmStatus === "alarm" && item.itemWebData.fibersAlarmMessages && item.itemWebData.fibersAlarmMessages.length > 0) {
      item.itemWebData.fibersAlarmMessages.forEach(val => {
        this.updateFiberPartDefence(val);
      });
    }
  };
  // 计算光纤或者防区的总长度（米）和每米代表多少px
  _getPxObj(pointsArr) {
    if (pointsArr) {
      let obj = {};
      obj.actualDistanceTotal = Math.abs(pointsArr[pointsArr.length - 1].actualDistance - pointsArr[0].actualDistance);
      let pxTotal = 0;
      pointsArr.forEach((v, i) => {
        if (i > 0) {
          let pointObj = {};
          let nextPointObj = {};
          if (this.mapType === "gis") {
            pointObj = {
              lng: v.lng,
              lat: v.lat,
            }
            nextPointObj = {
              lng: pointsArr[i - 1].lng,
              lat: pointsArr[i - 1].lat,
            }
          } else {
            pointObj = {
              y: parseFloat(v.yCoord),
              x: parseFloat(v.xCoord),
            }
            nextPointObj = {
              y: parseFloat(pointsArr[i - 1].yCoord),
              x: parseFloat(pointsArr[i - 1].xCoord),
            }
          }
          pxTotal = pxTotal + Math.sqrt(
            Math.pow(Math.abs(this.pointToPixel(pointObj).y - this.pointToPixel(nextPointObj).y), 2) +
            Math.pow(Math.abs(this.pointToPixel(pointObj).x - this.pointToPixel(nextPointObj).x), 2))
        }
      });
      obj.pxTotal = pxTotal;
      obj.pxForOneM = obj.pxTotal / obj.actualDistanceTotal;
      return obj;
    }
  }
  // 排序工具
  _compareUtil(propertyName, secPropertyName) {
    return function (obj1, obj2) {
      let v1 = parseInt(obj1[propertyName]);
      let v2 = parseInt(obj2[propertyName]);
      if (v1 < v2) {
        return -1;
      } else if (v1 > v2) {
        return 1;
      } else {
        let o1 = obj1[secPropertyName];
        let o2 = obj2[secPropertyName];
        if ((o1 === "end" && o2 === "father") || (o1 === "father" && o2 === "start")) {
          return -1;
        } else if ((o1 === "father" && o2 === "end") || (o1 === "start" && o2 === "father")) {
          return 1;
        } else {
          return 0;
        }
      }
    };
  };
  // 防区折线颜色判断工具
  _setDefenceColor(channelInfo) {
    let lineColor = "#777777";
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
      }
      // if (channelInfo.alarmStatus && channelInfo.alarmStatus === "alarm") {
      //   lineColor = "#FF5F5F";
      // }
      if (
        channelInfo.onlineStatus &&
        channelInfo.onlineStatus === "offline"
      ) {
        lineColor = "#BBBBBB";
      }
    }
    return lineColor;
  };
  // 振动光纤防区报警
  updateFiberPartDefence(alarmData) {
    if (alarmData) {
      alarmData.begin = Math.abs(alarmData.begin);
      alarmData.end = Math.abs(alarmData.end);
    }
    setTimeout(() => {
      for (let [i, v] of this.alarmDefenceArr.entries()) {
        if (v.alarmData.channelUuid === alarmData.channelUuid && v.alarmData.begin === alarmData.begin && v.alarmData.end === alarmData.end) {
          this.map.removeOverlay(v.polyline);
          this.alarmDefenceArr.splice(i, 1);
        }
      }
      if (alarmData.alarmState === "generation") {
        let alarmFiberDef = null;
        for (let v of this.fiberDefenceArr) {
          if (v.channelUuid === alarmData.channelUuid) {
            alarmFiberDef = {
              channelUuid: v.channelUuid,
              points: v.points,
              pxInfoObj: v.pxInfoObj,
              startFctualDistance: v.startFctualDistance,
            };
          }
        }
        alarmFiberDef.points && alarmFiberDef.points.forEach((v, i) => {
          v.alarmFlag = "father";
        });
        alarmFiberDef.points.push({
          alarmFlag: "start",
          actualDistance: alarmData.begin + alarmFiberDef.startFctualDistance,
        });
        alarmFiberDef.points.push({
          alarmFlag: "end",
          actualDistance: alarmData.end + alarmFiberDef.startFctualDistance,
        });
        alarmFiberDef.points.sort(this._compareUtil("actualDistance", "alarmFlag"));
        let startIndex, endIndex = 0;
        alarmFiberDef.points.forEach((v, i) => {
          if (v.alarmFlag === "start") {
            startIndex = i;
          }
          if (v.alarmFlag === "end") {
            endIndex = i;
          }
        })
        let startKeyIndexObj = this._findKeyIndex(alarmFiberDef.points, startIndex, "alarmFlag");
        let endKeyIndexObj = this._findKeyIndex(alarmFiberDef.points, endIndex, "alarmFlag");
        let start, end = 0;
        let alarmStartPoint = this._getPointUtil(alarmFiberDef.points, alarmFiberDef.pxInfoObj.pxForOneM, startIndex, startKeyIndexObj.beforeIndex, startKeyIndexObj.nextIndex);
        let alarmEndPoint = this._getPointUtil(alarmFiberDef.points, alarmFiberDef.pxInfoObj.pxForOneM, endIndex, endKeyIndexObj.beforeIndex, endKeyIndexObj.nextIndex);
        if (startIndex <= endIndex) {
          start = startIndex;
          end = endIndex;
        } else {
          end = startIndex;
          start = endIndex;
        }
        let alarmDefPointsArr = alarmFiberDef.points.slice(start, end + 1);
        let polyline = this._generateFiberLine(alarmDefPointsArr, alarmStartPoint, alarmEndPoint, "alarmFlag", "#FF5F5F");
        polyline.disableMassClear();
        this.map.addOverlay(polyline);
        this.alarmDefenceArr.push({
          alarmData,
          polyline,
        });
      }
    }, 1000);
  };
  // 获取振动光纤报警起点和终点的坐标
  _getPointUtil(points, pxForOneM, currentIndex, beforeIndex, nextIndex) {
    let beforePoint = this.mapType === "gis" ? {
      lng: points[beforeIndex].lng,
      lat: points[beforeIndex].lat,
    } : {
        y: parseFloat(points[beforeIndex].yCoord),
        x: parseFloat(points[beforeIndex].xCoord)
      };
    let nextPoint = this.mapType === "gis" ? {
      lng: points[nextIndex].lng,
      lat: points[nextIndex].lat,
    } : {
        y: parseFloat(points[nextIndex].yCoord),
        x: parseFloat(points[nextIndex].xCoord)
      };
    let beforePixel = {
      x: this.pointToPixel(beforePoint).x,
      y: this.pointToPixel(beforePoint).y
    }
    let nextPixel = {
      x: this.pointToPixel(nextPoint).x,
      y: this.pointToPixel(nextPoint).y
    }
    let startAngle = Math.atan(
      Math.abs(nextPixel.y - beforePixel.y) /
      Math.abs(nextPixel.x - beforePixel.x)
    );
    let pxToBeforePoint = (points[currentIndex].actualDistance - points[beforeIndex].actualDistance) * pxForOneM;
    let xTemp = pxToBeforePoint * Math.cos(startAngle);
    let yTemp = pxToBeforePoint * Math.sin(startAngle);
    let alarmPixel = {
      x: nextPixel.x >= beforePixel.x ? beforePixel.x + xTemp : beforePixel.x - xTemp,
      y: nextPixel.y >= beforePixel.y ? beforePixel.y + yTemp : beforePixel.y - yTemp
    }
    let point = this.pixelToPoint(alarmPixel.x, alarmPixel.y);
    return point;
  }
  // 生成振动光纤上的防区或者防区上的报警段
  _generateFiberLine(pointsArr, startPoint, endPoint, flag, lineColor) {
    pointsArr.forEach((v, i) => {
      if (v[flag] === "start") {
        if (this.mapType === "gis") {
          v.lng = startPoint.lng;
          v.lat = startPoint.lat;
        } else {
          v.xCoord = startPoint.x;
          v.yCoord = startPoint.y;
        }
      } else if (v[flag] === "end") {
        if (this.mapType === "gis") {
          v.lng = endPoint.lng;
          v.lat = endPoint.lat;
        } else {
          v.xCoord = endPoint.x;
          v.yCoord = endPoint.y;
        }
      }
    })
    let polylinePoints = pointsArr.map(v => {
      let point = {};
      if (this.mapType === "gis") {
        point = new BMap.Point(v.lng, v.lat);
      } else {
        point = {
          x: parseFloat(v.xCoord),
          y: parseFloat(v.yCoord),
        }
      }
      return point;
    });
    let polyline;
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
  }
  // 设置扇形元素
  _setSector(sectorItem, modelIndex) {
    let sector;
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
    let itemViewObj = {
      overlay: sector,
      item: sectorItem
    };
    this.itemMap.set(modelIndex, itemViewObj);
  };
  // 为元素注册事件回调
  _setItemEventCallBack(itemViewObj, callBack) {
    let eventArray = [
      "click",
      "dblclick",
      "mouseover",
      "mouseout",
      "mousemove",
      "mousedown",
      "mouseup",
      "dragstart",
      "dragging",
      "dragmove",
      "dragend",
    ];
    if (this.mapType === "gis") {
      eventArray.push("rightclick");
    }
    let callBackInner = (e) => {
      let dataObj = {};
      dataObj.item = itemViewObj.item;
      if (this.mapType === "gis") {
        // e.domEvent.stopPropagation();
        dataObj.eventType = e.type;
        dataObj.x = e.pixel.x;
        dataObj.y = e.pixel.y;
      } else if (this.mapType === "picture") {
        let type = e.type;
        if (window.event.buttons === 2) {
          type = "rightclick";
        }
        dataObj.eventType = "on" + type;
        let layerX = e.evt.layerX;
        let layerY = e.evt.layerY;
        let offset = null;
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
        dataObj.x = layerX + this.map.canvas.offsetLeft;
        dataObj.y = layerY + this.map.canvas.offsetTop;
      }
      callBack(e, dataObj);
    };
    let sectorMarkerCall = (e) => {
      let dataObj = {};
      dataObj.eventType = "sectorDragend";
      dataObj.sectorInfo = itemViewObj.overlay.getSectorInfo();
      dataObj.item = itemViewObj.item;
      callBack(e, dataObj);
    };
    let polylineMarkerCall = (e) => {
      let dataObj = {};
      dataObj.item = itemViewObj.item;
      dataObj.eventType = "polylineDragend";
      if (e.type === 'onlineupdate') {
        dataObj.isDragLine = false;
        if (dataObj.item.itemInfo.points.length < e.target.getPath().length) {
          dataObj.isDragLine = true;
          dataObj.points = e.target.getPath();
        } else {
          let flag = false;
          e.target.getPath().forEach((v, i) => {
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
        itemViewObj.overlay.editMarkers.forEach(v => {
          v.marker.addEventListener("mouseup", polylineMarkerCall)
        });
      }
    } else {
      eventArray.forEach((eventType) => {
        itemViewObj.overlay.addEventListener(eventType, callBackInner);
      });
    }
  };
  // 创建所有元素的公用代码
  _createItemsCommon(callBack) {
    this.mapModel.dataMap.forEach((item, modelIndex) => {
      this._setItem(item, modelIndex);
    });
    this.itemMap.forEach((itemViewObj) => {
      if (this.mapType === "picture" && itemViewObj.item.type === "marker") {
        let timer = setInterval(() => {
          if (itemViewObj.overlay.isLoaded) {
            clearInterval(timer);
            this._setItemEventCallBack(itemViewObj, callBack);
          }
        }, 50);
      } else {
        this._setItemEventCallBack(itemViewObj, callBack);
      }
    });
  }

  // 添加视图切换
  addMapTypeControl() {
    if (this.mapType === "gis") {
      this.map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP],
          anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
          offset: new BMap.Size(10, 30)
        })
      );
    } else if (this.mapType === "picture") {
    }
  };
  // 添加方向盘和缩放比例
  addMapNavigation() {
    if (this.mapType === "gis") {
      this.navigation = new BMap.NavigationControl(
        {
          anchor: BMAP_ANCHOR_TOP_RIGHT,
          offset: new BMap.Size(10, 50),
          type: BMAP_NAVIGATION_CONTROL_SMALL
        }
      );
      this.map.addControl(
        this.navigation
      );
    } else if (this.mapType === "picture") {
    }
  };
  // 删除方向盘和缩放比例
  delMapNavigation() {
    if (this.mapType === "gis") {
      this.map.removeControl(
        this.navigation
      );
    } else if (this.mapType === "picture") {
    }
  };
  // 添加鸟瞰图
  addOverView() {
    if (this.mapType === "gis") {
      this.overViewOpen = new BMap.OverviewMapControl(
        {
          isOpen: true,
          anchor: BMAP_ANCHOR_BOTTOM_RIGHT
        }
      );
      this.map.addControl(
        this.overViewOpen
      );
    } else if (this.mapType === "picture") {
    }
  };
  // 删除鸟瞰图
  delOverView() {
    if (this.mapType === "gis") {
      this.map.removeControl(
        this.overViewOpen
      );
    } else if (this.mapType === "picture") {
    }
  };
  //设置地图样式
  setMapStyleV2() {
    this.map.setMapStyleV2({ styleJson: store.state.home.mapStyle });
  };
  // 设置居中
  setCenter() {
    if (this.mapType === "gis") {
      let point = new BMap.Point(this._mapItem.startPoint.lng, this._mapItem.startPoint.lat);
      this.map.setCenter(point);
    } else if (this.mapType === "picture") {
      this.map.setCenter();
    }
  };
  locationElement(center, panelCenter) {
    if (this.mapType === "gis") {
      let point = new BMap.Point(center.y, center.x);
      this.map.setCenter(point);
    } else if (this.mapType === "picture") {
      let centerPoint = this.pixelToPoint(panelCenter.x, panelCenter.y);
      this.map.setPosition(this.map.getStageInfo().x + (centerPoint.x - center.x) * this.map.getStageInfo().scale, this.map.getStageInfo().y + (centerPoint.y - center.y) * this.map.getStageInfo().scale);
    }
  };
  // 放大地图
  zoomIn() {
    this.map.zoomIn();
  };
  // 缩小地图
  zoomOut() {
    this.map.zoomOut();
  };
  // 框选并返回选中的点位数据
  rectangleSelect(callBack) {
    if (this.mapType === "gis") {
      let itemsArr = [];
      this._drawingManager.setDrawingMode(BMAP_DRAWING_RECTANGLE);
      this._drawingManager.open();
      let rectanglecomplete = (overlay) => {
        let bounds = overlay.getBounds();
        this.itemMap.forEach((itemViewObj) => {
          if (itemViewObj.item.type === "marker") {
            if (bounds.containsPoint(itemViewObj.overlay.getPosition())) {
              itemsArr.push(itemViewObj.item);
            }
          }
        });
        callBack(itemsArr, overlay);
        this._drawingManager.close();
        this._drawingManager.removeEventListener('rectanglecomplete', rectanglecomplete);
      };
      this._drawingManager.addEventListener('rectanglecomplete', rectanglecomplete);
    } else if (this.mapType === "picture") {
      let itemsArr = [];
      this.map.openDrawManger("rect", (rect, e) => {
        this.itemMap.forEach((itemViewObj) => {
          if (itemViewObj.item.type === "marker") {
            if (itemViewObj.item.point.x >= rect.option.x
              && itemViewObj.item.point.x <= rect.option.x + rect.option.width
              && itemViewObj.item.point.y >= rect.option.y
              && itemViewObj.item.point.y <= rect.option.y + rect.option.height) {
              itemsArr.push(itemViewObj.item);
            }
          }
        });
        callBack(itemsArr, rect);
      });
    }
  };
  // 圈选并返回选中的点位数据
  circleSelect(callBack) {
    if (this.mapType === "gis") {
      let itemsArr = [];
      this._drawingManager.setDrawingMode(BMAP_DRAWING_CIRCLE);
      this._drawingManager.open();
      let circlecomplete = (overlay) => {
        this.itemMap.forEach((itemViewObj) => {
          if (itemViewObj.item.type === "marker") {
            if (this.map.getDistance(overlay.getCenter(), itemViewObj.overlay.getPosition()) <= overlay.getRadius()) {
              itemsArr.push(itemViewObj.item);
            }
          }
        });
        callBack(itemsArr, overlay);
        this._drawingManager.close();
        this._drawingManager.removeEventListener('circlecomplete', circlecomplete);
      };
      this._drawingManager.addEventListener('circlecomplete', circlecomplete);
    } else if (this.mapType === "picture") {
      let itemsArr = [];
      this.map.openDrawManger("circle", (circle, e) => {
        this.itemMap.forEach((itemViewObj) => {
          if (itemViewObj.item.type === "marker") {
            if (Math.sqrt(Math.pow(Math.abs(itemViewObj.item.point.x - circle.option.x), 2)
              + Math.pow(Math.abs(itemViewObj.item.point.y - circle.option.y), 2))
              <= circle.option.radius) {
              itemsArr.push(itemViewObj.item);
            }
          }
        });
        callBack(itemsArr, circle);
      });
    }
  };
  // 多边形选并返回选中的点位数据
  polygonSelect(callBack) {
    if (this.mapType === "gis") {
      let itemsArr = [];
      this._drawingManager.setDrawingMode(BMAP_DRAWING_POLYGON);
      this._drawingManager.open();
      let polygoncomplete = (overlay) => {
        let polygonPts = [];
        overlay.getPath().forEach(v => {
          polygonPts.push(v)
        });
        let polygon = new BMap.Polygon(polygonPts);
        this.itemMap.forEach((itemViewObj) => {
          if (itemViewObj.item.type === "marker") {
            if (BMapLib.GeoUtils.isPointInPolygon(itemViewObj.overlay.getPosition(), polygon)) {
              itemsArr.push(itemViewObj.item);
            }
          }
        });
        callBack(itemsArr, overlay);
        this._drawingManager.close();
        this._drawingManager.removeEventListener('polygoncomplete', polygoncomplete);
      };
      this._drawingManager.addEventListener('polygoncomplete', polygoncomplete);
    } else if (this.mapType === "picture") {
      let itemsArr = [];
      this.map.openDrawManger("polygon", (polygon, e) => {
        this.itemMap.forEach((itemViewObj) => {
          if (itemViewObj.item.type === "marker") {
            let poly = [];
            for (let i = 2; i < polygon.shape.attrs.points.length; i = i + 2) {
              poly.push({
                x: polygon.shape.attrs.points[i],
                y: polygon.shape.attrs.points[i + 1]
              });
            }
            if (this._pointInPoly(itemViewObj.item.point, poly)) {
              itemsArr.push(itemViewObj.item);
            }
          }
        });
        callBack(itemsArr, polygon);
      });
    }
  };
  // 判断一个点是否在一个多边形内
  _pointInPoly(pt, poly) {
    for (let c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
      ((poly[i].y <= pt.y && pt.y < poly[j].y) || (poly[j].y <= pt.y && pt.y < poly[i].y))
        && (pt.x < (poly[j].x - poly[i].x) * (pt.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x)
        && (c = !c);
    return c;
  };
  // 清除覆盖物
  clearOverlays() {
    this.map.clearOverlays();
  };
  // 创建所有元素
  createItems(callBack) {
    if (this.mapType === "gis") {
      this._createItemsCommon(callBack);
    } else if (this.mapType === "picture") {
      let timer = setInterval(() => {
        if (this.map.isLoaded) {
          clearInterval(timer);
          this._createItemsCommon(callBack);
        }
      }, 50);
    }
  };
  // 编辑模式
  setEditState() {
    this.itemMap.forEach((v) => {
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
  };
  // 设置单个元素为可编辑模式
  setItemEditState(modelIndex) {
    this.itemMap.forEach((v, k) => {
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
  };
  // 退出编辑模式（测试用，正式环境退出编辑后应该直接重新获取数据并重绘地图所有显示）
  quitEditState() {
    this.itemMap.forEach((v) => {
      v.item.isEdit = false;
      if (v.item.type === "marker") {
        v.overlay.disableDragging();
      } else if (v.item.type === "polyline") {
        v.overlay.disableEditing();
      } else if (v.item.type === "sector") {
        v.overlay.disableEditing();
      }
    });
  };
  // 删除元素
  deleteItem(modelIndex) {
    this.itemMap.forEach((itemViewObj, k) => {
      if (k === modelIndex || itemViewObj.item.parentModelIndex === modelIndex) {
        if (itemViewObj.timer) {
          clearInterval(itemViewObj.timer);
          itemViewObj.timer = null;
        }
        if (itemViewObj.item.type !== "sector" || this.mapType === "picture") {
          this.map.removeOverlay(itemViewObj.overlay);
          if (itemViewObj.item.itemWebData.elementThirdType === "position_vibration_fiber") {
            for (let [i, v] of this.fiberDefenceArr.entries()) {
              if (v.channelUuid === itemViewObj.item.itemWebData.resourceUuid) {
                this.map.removeOverlay(v.polyline);
                this.fiberDefenceArr.splice(i, 1);
              }
            }
            for (let [i, v] of this.alarmDefenceArr.entries()) {
              if (v.alarmData.channelUuid === itemViewObj.item.itemWebData.resourceUuid) {
                this.map.removeOverlay(v.polyline);
                this.alarmDefenceArr.splice(i, 1);
              }
            }
          }
        } else {
          itemViewObj.overlay.deleteSector();
        }
        this.itemMap.delete(modelIndex);
      }
    });
  };
  // 更新元素(直接替换)
  updateItem(item, modelIndex, callBack) {
    this.itemMap.forEach((itemViewObj, k) => {
      if (k === modelIndex || itemViewObj.item.parentModelIndex === modelIndex) {
        if (itemViewObj.timer) {
          clearInterval(itemViewObj.timer);
          itemViewObj.timer = null;
        }
        if (itemViewObj.item.type !== "sector" || this.mapType === "picture") {
          this.map.removeOverlay(itemViewObj.overlay);
          if (itemViewObj.item.itemWebData.elementThirdType === "position_vibration_fiber") {
            for (let [i, v] of this.fiberDefenceArr.entries()) {
              if (v.channelUuid === itemViewObj.item.itemWebData.resourceUuid) {
                this.map.removeOverlay(v.polyline);
                this.fiberDefenceArr.splice(i, 1);
              }
            }
            for (let [i, v] of this.alarmDefenceArr.entries()) {
              if (v.alarmData.channelUuid === itemViewObj.item.itemWebData.resourceUuid) {
                this.map.removeOverlay(v.polyline);
                this.alarmDefenceArr.splice(i, 1);
              }
            }
          }
        } else {
          itemViewObj.overlay.deleteSector();
        }
        this._setItem(item, modelIndex);
        let modelItem = this.itemMap.get(modelIndex);
        if (!modelItem) {
          return;
        }
        if (this.mapType === "picture" && item.type === "marker") {
          let timer = setInterval(() => {
            if (modelItem.overlay.isLoaded) {
              this._setItemEventCallBack(modelItem, callBack);
              clearInterval(timer);
              timer = null;
              modelItem = null;
            }
          }, 50);
        } else {
          this._setItemEventCallBack(modelItem, callBack);
        }
      }
    });
  };
  // 添加新元素
  addItem(item, modelIndex, callBack, isCanEdit = true) {
    this._setItem(item, modelIndex);
    let modelItem = this.itemMap.get(modelIndex);
    if (!modelItem) {
      return;
    }
    if (this.mapType === "picture" && item.type === "marker") {
      let timer = setInterval(() => {
        if (modelItem.overlay.isLoaded) {
          this._setItemEventCallBack(modelItem, callBack);
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
      this._setItemEventCallBack(modelItem, callBack);
      // this.itemMap.get(modelIndex).overlay.enableDragging();
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
  };
  // 像素转坐标
  pixelToPoint(x, y, offset) {
    let point = null;
    if (this.mapType === "gis") {
      let pixel = new BMap.Pixel(x, y);
      point = this.map.pixelToPoint(pixel);
    } else if (this.mapType === "picture") {
      let stageInfo = this.map.getStageInfo();
      let pointX = (x - (stageInfo.x - (stageInfo.width * stageInfo.scale - stageInfo.width) / 2)) / stageInfo.scale;
      let pointY = (y - (stageInfo.y - (stageInfo.height * stageInfo.scale - stageInfo.height) / 2)) / stageInfo.scale;
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
  };
  // 坐标转像素
  pointToPixel(point) {
    let pixel = null;
    if (this.mapType === "gis") {
      let pt = new BMap.Point(point.lng, point.lat);
      pixel = this.map.pointToPixel(pt);
    } else {
      let stageInfo = this.map.getStageInfo();
      pixel = {
        x: 0,
        y: 0
      }
      pixel.x = point.x * stageInfo.scale + (stageInfo.x - (stageInfo.width * stageInfo.scale - stageInfo.width) / 2);
      pixel.y = point.y * stageInfo.scale + (stageInfo.y - (stageInfo.height * stageInfo.scale - stageInfo.height) / 2);
    }
    return pixel;
  }
  // 获取地图信息
  getMapInfo() {
    let mapInfo = {};
    if (this.mapType === "gis") {
      mapInfo.lng = this.map.getCenter().lng;
      mapInfo.lat = this.map.getCenter().lat;
      mapInfo.zoom = this.map.getZoom();
    } else if (this.mapType === "picture") {
      mapInfo = this.map.getStageInfo();
    }
    return mapInfo;
  };
  // 外部获取所有item的信息
  getAllItemsData() {
    let itemsData = [];
    if (this.itemMap) {
      this.itemMap.forEach(v => {
        itemsData.push(v.item);
      });
    }
    return itemsData;
  };
  // 外部根据id获取item的信息(含overlay)
  getItemData(itemId) {
    let itemData = null;
    if (this.itemMap) {
      this.itemMap.forEach(v => {
        if (v.item.itemId === itemId) {
          itemData = v;
        }
      });
    }
    return itemData;
  };
  //gis地图测距
  gisDistanceTool(action) {
    if (this.mapType === "picture") {
      return;
    }
    let myDis = new BMapLib.DistanceTool(this.map);
    if (action === "open") {
      myDis.open();
    } else {
      myDis.close();
    }
  };
  // gis地图测面
  gisAreaTool(action) {
    if (this.mapType === "picture") {
      return;
    }
    let measureAreaTool = createMeasureAreaTool(this.map);
    if (action === "open") {
      measureAreaTool.open();
    } else {
      measureAreaTool.close();
    }
  }
  // 点位显示，图层筛选功能
  filterMarker(filterArr) {
    this.itemMap.forEach((v, k) => {
      if (v.item.type === "marker") {
        if (this._filterUtil(v, filterArr)) {
          v.overlay.show();
        } else {
          v.overlay.hide();
        }
      } else if (v.item.type === "sector") {
        this.itemMap.forEach((v2, k2) => {
          if (v.item.parentModelIndex === k2) {
            if (this._filterUtil(v2, filterArr) && v.item.itemInfo.isShowSector) {
              v.overlay.showSector();
            } else {
              v.overlay.hideSector();
            }
          }
        })
      };
    });
  };
  // 图层筛选工具类
  _filterUtil(v, filterArr) {
    let bool = true;
    let typeBool = true;
    let chnBool = true;
    let onlineBool = true;
    let scanBool = true;
    filterArr.forEach((filterVal) => {
      if (v.item.itemWebData.elementSecondType === filterVal.typeStr) {
        if (!filterVal.selected) {
          typeBool = false;
        }
        filterVal.chn.forEach((filterVal2) => {
          if (!filterVal2.selected && v.item.itemWebData.elementThirdType === filterVal2.typeStr) {
            chnBool = false;
          }
        });
        filterVal.onlineStatus.forEach((filterVal2) => {
          if (!filterVal2.selected && v.item.itemWebData.channelInfo.onlineStatus === filterVal2.typeStr) {
            onlineBool = false;
          }
        });
        filterVal.scanCollectionList.forEach((filterVal2) => {
          if (!filterVal2.selected
            && v.item.itemWebData.channelInfo.scanCollectionList
            && v.item.itemWebData.channelInfo.scanCollectionList.some(v2 => v2 === filterVal2.typeStr)) {
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
  };
  // 根据通道类型筛选点位
  filterByChnType(chnType, isShow, hideItemCallBack = function () { }) {
    let hideitemArr = [];
    this.itemMap.forEach((v, k) => {
      if (v.item.type === "marker") {
        if (v.item.secondType === chnType) {
          isShow ? v.overlay.show() : v.overlay.hide();
          if (!isShow) {
            hideitemArr.push(v.item);
          } else {
            for (let [i, x] of hideitemArr.entries()) {
              if (x.itemId === v.item.itemId) {
                hideitemArr.splice(i, 1);
              }
            }
          }
        }
      } else if (v.item.type === "sector") {
        this.itemMap.forEach((v2, k2) => {
          if (v.item.parentModelIndex === k2) {
            if (v2.item.secondType === chnType) {
              isShow && v.item.itemInfo && v.item.itemInfo.isShowSector ? v.overlay.showSector() : v.overlay.hideSector();
            }
          }
        })
      };
    });
    hideItemCallBack(hideitemArr);
  };
  // 根据摄像机能力集筛选点位
  filterByScanCol(scanColTypeArr, hideItemCallBack = function () { }) {
    let hideitemArr = [];
    this.itemMap.forEach((v, k) => {
      if (v.item.secondType === "vc" && v.item.itemWebData && v.item.itemWebData.channelInfo && v.item.itemWebData.channelInfo.hasOwnProperty("scanCollectionList")) {
        if (v.item.itemWebData.channelInfo.scanCollectionList && v.item.itemWebData.channelInfo.scanCollectionList.length !== 0) {
          let flag = false;
          scanColTypeArr.forEach(x => {
            v.item.itemWebData.channelInfo.scanCollectionList.some(y => y === x) ? flag = true : "";
          });
          flag ? v.overlay.show() : v.overlay.hide();
          this.itemMap.forEach((v2, k2) => {
            if (v2.item.type === "sector" && v2.item.parentModelIndex === k) {
              flag && v2.item.itemInfo && v2.item.itemInfo.isShowSector ? v2.overlay.showSector() : v2.overlay.hideSector();
            }
          });
          if (!flag) {
            hideitemArr.push(v.item);
          } else {
            for (let [i, x] of hideitemArr.entries()) {
              if (x.itemId === v.item.itemId) {
                hideitemArr.splice(i, 1);
              }
            }
          }
        } else {
          scanColTypeArr.some(y => y === "normalSnap") ? v.overlay.show() : v.overlay.hide();
        }
      };
    });
    hideItemCallBack(hideitemArr);
  };
  // 显示所有点位
  showAll(callBack) {
    this.itemMap.forEach((v, k) => {
      if (v.item.type === "sector" && v.item.itemInfo && v.item.itemInfo.isShowSector) {
        v.overlay.showSector();
      } else {
        v.overlay.show();
      }
    });
    callBack("allShow");
  };
  // 隐藏所有点位
  hideAll(callBack) {
    this.itemMap.forEach((v, k) => {
      if (v.item.type === "sector") {
        v.overlay.hideSector();
      } else {
        v.overlay.hide();
      }
    });
    callBack("allHide");
  };
  // 设置上级平台的区域高亮
  setPlaceBoundStyle(placeName) {
    let areaBorderJson = store.state.home.areaMapBorder;
    if (!areaBorderJson) {
      return;
    }
    areaBorderJson.features.forEach(v => {
      if (v.properties.name === placeName) {
        let points = [];
        v.geometry.coordinates[v.geometry.coordinates.length - 1].forEach(x => {
          let ptTempArr = Vue.prototype.$coordtransform.gcj02tobd09(
            Vue.prototype.$coordtransform.wgs84togcj02(x[0], x[1])[0],
            Vue.prototype.$coordtransform.wgs84togcj02(x[0], x[1])[1]
          )
          points.push(new BMap.Point(ptTempArr[0], ptTempArr[1]));
        });
        let ply = new BMap.Polygon(points, {
          strokeColor: "#1FBEB3",    //边线颜色。
          fillColor: "#1FBEB3",      //填充颜色。当参数为空时，圆形将没有填充效果。
          strokeWeight: 1,       //边线的宽度，以像素为单位。
          strokeOpacity: 1,	   //边线透明度，取值范围0 - 1。
          fillOpacity: 0.3,      //填充的透明度，取值范围0 - 1。
          strokeStyle: 'solid', //边线的样式，solid或dashed。
          enableMassClear: false,
          enableEditing: false,
        }); //建立多边形覆盖物
        this.map.addOverlay(ply);  //添加覆盖物
        // this.map.setViewport(ply.getPath());    //调整视野
      }
    });
  };
  // 设置下级平台区域边界
  setAreaBlockStyle(areaData, callBack, plyCallBack) {
    if (!areaData) {
      return;
    }
    if (areaData.areaBoundPoints) {
      let points = [];
      areaData.areaBoundPoints.forEach(v => {
        points.push(new BMap.Point(v.lng, v.lat));
      });
      let ply = new BMap.Polygon(points, {
        strokeColor: "#3ADED4",    //边线颜色。
        fillColor: "#2FFAEE",      //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 1,       //边线的宽度，以像素为单位。
        strokeOpacity: 1,	   //边线透明度，取值范围0 - 1。
        fillOpacity: 0.3,      //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid', //边线的样式，solid或dashed。
        enableMassClear: false,
        enableEditing: false,
      }); //建立多边形覆盖物
      this.map.addOverlay(ply);  //添加覆盖物
      ply.hide();
      plyCallBack(ply);
      ply.addEventListener("click", (e) => {
        e.domEvent.stopPropagation();
        callBack(areaData, this.pointToPixel(ply.getBounds().getCenter()), ply);
      });
    }
  };
  // 添加防区
  addDefence(callBack) {
    if (this.mapType === "gis") {
      this._drawingManager.setDrawingMode(BMAP_DRAWING_POLYLINE);
      this._drawingManager.open();
      let overlaycomplete = (e) => {
        this._drawingManager.close();
        this._drawingManager.removeEventListener('overlaycomplete', overlaycomplete);
        if (e.drawingMode === "polyline") {
          e.overlay.enableEditing();
          e.overlay.disableMassClear();
          callBack(e.overlay.getPath(), e.overlay);
        }
      };
      this._drawingManager.addEventListener('overlaycomplete', overlaycomplete);
    } else if (this.mapType === "picture") {
      this.map.openDrawManger("polyline", (polyline) => {
        polyline.disableMassClear();
        callBack(polyline.shape.getPoints(), polyline);
      });
    }
  }
  // 改变防区颜色
  changeDefenceColor(parentId, color) {
    let defenceItem;
    this.itemMap.forEach(v => {
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
  }
  // 生成振动光纤
  buildFibers(fibersData, enableEdit, callBack = function () { }) {
    let fiberDataClone = [];
    fiberDataClone = Vue.prototype.$common.copyArray(fibersData, fiberDataClone);
    fiberDataClone && fiberDataClone.forEach(v => {
      v.points && v.points.forEach(x => {
        let ptTempArr = Vue.prototype.$coordtransform.gcj02tobd09(
          Vue.prototype.$coordtransform.wgs84togcj02(x.longitude, x.latitude)[0],
          Vue.prototype.$coordtransform.wgs84togcj02(x.longitude, x.latitude)[1]
        )
        x.lng = ptTempArr[0];
        x.lat = ptTempArr[1];
      });
      this.handelFiberCommon(v, enableEdit, callBack);
    });
  };
  // 更新振动光纤
  updateFiber(fiberData, enableEdit, callBack = function () { }, updateFiberDone = function () { }) {
    let fiberDataClone = null;
    fiberDataClone = Vue.prototype.$common.copyObject(fiberData, fiberDataClone);
    fiberDataClone.points && fiberDataClone.points.forEach(x => {
      let ptTempArr = Vue.prototype.$coordtransform.gcj02tobd09(
        Vue.prototype.$coordtransform.wgs84togcj02(x.longitude, x.latitude)[0],
        Vue.prototype.$coordtransform.wgs84togcj02(x.longitude, x.latitude)[1]
      )
      x.lng = ptTempArr[0];
      x.lat = ptTempArr[1];
    });
    this.handelFiberCommon(fiberDataClone, enableEdit, callBack, updateFiberDone);
    setTimeout(() => {
      fiberDataClone = null;
    }, 3000);
  }
  handelFiberCommon(v, enableEdit, callBack, updateFiberDone) {
    let webDataClone = null;
    webDataClone = Vue.prototype.$common.copyObject(v, webDataClone)
    let points = [];
    let polyline;
    webDataClone.points && webDataClone.points.forEach(v2 => {
      if (this.mapType === "gis") {
        points.push(new BMap.Point(v2.lng, v2.lat));
      } else {
        points.push({
          x: parseFloat(v2.xCoord),
          y: parseFloat(v2.yCoord),
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
        points,
        strokeWidth: 4,
        stroke: "#777777",
        noShowMidPoint: true
      });
    }
    let timer = setTimeout(() => {
      polyline.disableMassClear();
      this.map.addOverlay(polyline);
      if (enableEdit && this.mapType === "picture") {
        polyline.enableEditing();
        let polylineMarkerCall = (e) => {
          let dataObj = {
            item: {},
            eventType: ""
          };
          dataObj.item = webDataClone;
          dataObj.eventType = "polylineDragend";
          if (e.type === "mouseup") {
            let tempPoints = polyline.shape.getPoints();
            let pointsUtil = [];
            tempPoints.forEach((v, i) => {
              if (i % 2 !== 0) {
                pointsUtil.push({
                  xCoord: tempPoints[i - 1],
                  yCoord: tempPoints[i]
                });
              }
            });
            dataObj.item.points.forEach((v, i) => {
              v.xCoord = pointsUtil[i].xCoord.toString();
              v.yCoord = pointsUtil[i].yCoord.toString();
              v.longitude = v.longitude.toString();
              v.latitude = v.latitude.toString();
            });

          }
          callBack(e, dataObj);
        };
        polyline.editMarkers.forEach(v => {
          if (v.type !== "midpoint") {
            v.marker.addEventListener("mouseup", polylineMarkerCall)
          }
        });
      }
      if (this.fiberArray.some(v2 => v2.fiber.deviceUuid === webDataClone.deviceUuid && v2.fiber.fiberIndex === webDataClone.fiberIndex)) {
        let oldFiber = this.fiberArray.find(v2 => v2.fiber.deviceUuid === webDataClone.deviceUuid && v2.fiber.fiberIndex === webDataClone.fiberIndex)
        enableEdit && oldFiber.fiberPolyline.editMarkers.forEach(v => {
          if (v.type !== "midpoint") {
            v.marker.off("mouseup");
          }
        });
        this.map.removeOverlay(oldFiber.fiberPolyline);
        oldFiber.fiber = webDataClone;
        oldFiber.fiberPolyline = polyline;
        let deviceUuid = webDataClone.deviceUuid;
        let fiberIndex = webDataClone.fiberIndex;
        updateFiberDone(deviceUuid, fiberIndex);
      } else {
        this.fiberArray.push({
          fiber: webDataClone,
          fiberPolyline: polyline
        });
      }
      clearTimeout(timer);
      timer = null;
    }, 200);
  }
  deleteFibers(deviceUuid) {
    for (let [i, v] of this.fiberArray.entries()) {
      if (v.fiber.deviceUuid === deviceUuid) {
        this.map.removeOverlay(v.fiberPolyline);
        this.fiberArray.splice(i, 1);
      }
    }
  }
};