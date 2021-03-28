/**
 * 地图控件模型类
 */
export default class MapModel {

  // 构造器
  constructor(data) {
    this.dataMap = new Map();
    this._initData(data);
  };

  // 用js维护一套产生不重复id的机制
  _genModelIndex() {
    let idStr = Date.now().toString(36);
    idStr += Math.random().toString(36).substr(3);
    return idStr;
  };
  // 初始化数据
  _initData(data) {
    data.forEach((item) => {
      let modelIndex = this._genModelIndex();
      item.isEdit = false;
      this.dataMap.set(modelIndex, item);
      this.dataMap.get(modelIndex).modelIndex = modelIndex;
    });
    this.dataMap.forEach((item) => {
      item.parentModelIndex = this._setParentModelIndex(item);
    });
  };
  // 设置元素的父元素modelIndex
  _setParentModelIndex(item) {
    let parentModelIndex = null;
    let parentItem = this.getItemByItemId(item.parentItemId);
    if (parentItem) {
      parentModelIndex = parentItem.modelIndex;
    }
    return parentModelIndex;
  };

  // 更新元素（直接替换），并返回回调函数通知View
  updateItem(itemId, item, callBack = function () { }) {
    let modelIndex = this.getItemByItemId(itemId).modelIndex;
    this.dataMap.set(modelIndex, item);
    callBack(item, modelIndex);
  };

  // 根据modelIndex获取元素
  getItemByModelIndex(modelIndex) {
    return this.dataMap.get(modelIndex);
  };
  // 根据元素ID获取元素
  getItemByItemId(itemId) {
    let item = null;
    this.dataMap.forEach((v) => {
      if (v.itemId === itemId) {
        item = v;
      }
    });
    return item;
  };
  // 根据元素类型获取元素数组
  getItemsByType(type) {
    let itemArr = [];
    this.dataMap.forEach((item) => {
      if (item.type === type) {
        itemArr.push(item);
      }
    });
    return itemArr;
  };
  // 根据itemId删除元素，并返回回调函数通知View
  deleteItem(itemId, callBack = function () { }) {
    let modelIndex = this.getItemByItemId(itemId).modelIndex;
    this.dataMap.forEach((v, k) => {
      if (k === modelIndex || v.parentModelIndex === modelIndex) {
        this.dataMap.delete(modelIndex);
      }
    });
    callBack(modelIndex);
  };
  // 添加新元素
  addItem(item, callBack = function () { }) {
    let modelIndex = this._genModelIndex();
    item.isEdit = true;
    this.dataMap.set(modelIndex, item);
    this.dataMap.get(modelIndex).modelIndex = modelIndex;
    callBack(item, modelIndex);
  };
  // 清空所有元素，并返回回调函数通知View（是否有需要待定）
  clearItems(callBack = function () { }) {
    this.dataMap.clear();
    callBack();
  };

};