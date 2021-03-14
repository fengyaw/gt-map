/**
 * 图片地图覆盖物基类，不可直接实例化
 */
export default class POverlay {
  // 构造器
  constructor(option) {
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
  };
  // 覆盖物的舞台和图层的初始化
  create(stage, layer) {
    this.stage = stage;
    this.layer = layer;
  };
  // 显示覆盖物
  show() {
    this.shape.show();
    this.layer.draw();
  };
  // 隐藏覆盖物
  hide() {
    this.shape.hide();
    this.layer.draw();
  };
  // 允许覆盖物拖动
  enableDragging() {
    this.shape.draggable(true);
    let eventArray = [
      "click",
      "mousedown",
      "mouseup",
      "dragstart",
      "dragmove",
      "dragend",
    ];
    eventArray.forEach((eventType) => {
      this.addEventListener(eventType);
    });
  };
  // 禁止覆盖物拖动
  disableDragging() {
    this.shape.draggable(false);
  };
  // 允许覆盖物进行事件监听
  enableEventListen() {
    this.enableEventListen = true;
  };
  // 禁止覆盖物进行事件监听
  disableEventListen() {
    this.enableEventListen = false;
  };
  // 覆盖物事件监听
  addEventListener(eventType, callBack = function () { }) {
    if (this.shape && this.enableEventListen) {
      this.shape.on(eventType, (e) => {
        if (eventType === "mousedown") {
          this.mousedownX = e.evt.offsetX;
          this.mousedownY = e.evt.offsetY;
        }
        if (eventType === "mouseup") {
          this.mouseupX = e.evt.offsetX;
          this.mouseupY = e.evt.offsetY;
          if (this.mouseupX !== this.mousedownX || this.mouseupY !== this.mousedownY) {
            e.type = "dragend";
            e.initLayerX = this.mousedownX;
            e.initLayerY = this.mousedownY;
          }
        }
        e.evt.cancelBubble = true;
        callBack(e);
      });
    }
  };
  removeEventListener(eventType) {
    this.shape.off(eventType);
  };
  // 允许批量清除
  enableMassClear() {
    this.enableMassClear = true;
  };
  // 不允许批量清除
  disableMassClear() {
    this.enableMassClear = false;
  };
  // 删除覆盖物
  remove() {
    this.shape.remove();
    this.layer.draw();
  };
};