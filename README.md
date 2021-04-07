
# H5地图控件类参考

## 一. 修订记录

| 版本 | 日期       | 修订人 | 说明 |
| ---- | ---------- | ------ | ---- |
| v1.0 | 2019-08-19 | fengyw | 创建 |



## 二. 类说明

### 地图模型类： MapModel

> 此类是地图控件的模型类，用于存储和处理从服务端接收的数据或页面操作自己新增的数据。

| 构造函数           | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| MapModel(dataList) | dataList为从服务端获取的数据，此dataList为一个大数组，包含地图所有元素的数据 |



| 公有方法                           | 返回值    | 描述                                              |
| ---------------------------------- | --------- | ------------------------------------------------- |
| updateItem(itemId, item, callBack) | none      | 更新元素，并返回回调函数callBack通知MapView视图层 |
| getItemByModelIndex(modelIndex)    | Item      | 根据modelIndex获取元素                            |
| getItemByItemId(itemId)            | Item      | 根据元素ID获取元素                                |
| getItemsByType(type)               | ItemArray | 根据元素类型获取元素数组                          |
| deleteItem(modelIndex, callBack)   | none      | 根据modelIndex删除元素，并返回回调函数通知View    |
| addItem(item, callBack)            | none      | 添加新元素，并返回回调函数通知View                |
| clearItems(callBack)               | none      | 清空所有元素，并返回回调函数通知View              |

----------

### 地图视图类： MapView

> 此类是地图控件的视图类，用于将从model里获取的数据展现到页面上。

| 构造函数                    | 描述                                                         |
| --------------------------- | ------------------------------------------------------------ |
| MapModel(mapModel, mapType) | mapModel为地图模型类实例；mapType为地图类型，分为图片地图和百度GIS地图（可选值为（字符串）：picture或gis） |

| 公有方法                               | 返回值 | 描述                                                         |
| -------------------------------------- | ------ | ------------------------------------------------------------ |
| addMapNavigation()                     | none   | 添加方向盘和缩放比例尺                                       |
| delMapNavigation()                     | none   | 删除方向盘和缩放比例尺                                       |
| addOverView()                          | none   | 添加鸟瞰图                                                   |
| delOverView()                          | none   | 删除鸟瞰图                                                   |
| setCenter()                            | none   | 设置居中                                                     |
| rectangleSelect(callBack)              | none   | 框选并通过回调函数返回选中的点位数据                         |
| circleSelect(callBack)                 | none   | 圈选并通过回调函数返回选中的点位数据                         |
| clearOverlays()                        | none   | 清除框选和圈选的所有覆盖物                                   |
| createItems(callBack)                  | none   | 创建所有元素,并返回回调函数，回调函数中包含所有元素的事件监听回调，回调参数中将包含元素所有数据 |
| setEditState()                         | none   | 设置地图为可编辑模式                                         |
| quitEditState()                        | none   | 退出地图编辑模式                                             |
| deleteItem(modelIndex)                 | none   | 通过模型index删除元素，此方法必须在模型类的实例mapModel的deleteItem方法的回调函数中使用 |
| updateItem(item, modelIndex, callBack) | none   | 更新元素，此方法必须在模型类的实例mapModel的updateItem方法的回调函数中使用，其自身的回调函数作用同createItems()的回调函数 |
| addItem(item, modelIndex, callBack)    | none   | 添加新元素，此方法必须在模型类的实例mapModel的addItem方法的回调函数中使用，其自身的回调函数作用同createItems()的回调函数 |

----------

## 三. 使用说明

#### 1、引入文件。

出于控件安全性的考虑，不建议直接在html中的head中引入，建议使用es6的方式在代码中引用控件：

``` javascript
import * as GTMap from '@/utils/GTMap.js';
```

#### 2、获取服务端数据。

如下一段模拟数据：

``` javascript
this.data = [
        {
          itemId: "q1ew23e3e3r34r4r",
          parentItemId: null,
          domId: "allmap",
          name: "测试GIS地图",
          nickName: "测试GIS地图",
          type: "map",
          picUrl: require("@/assets/images/map_pic.jpg"),
          startPoint: { // 如果是图片地图，坐标使用x、y，如果是GIS地图，坐标使用lng、lat
            y: 80,
            x: 500
          },
          scale: 1,
        },
        {
          itemId: "4f3i4fb34f794fhiu",
          parentItemId: "q1ew23e3e3r34r4r",
          name: "脉冲电子围栏001",
          nickName: "脉冲电子围栏001",
          type: "marker",
          markerType: "defanceArea",
          point: {
            x: 80,
            y: 200,
          },
          isOnline: true,
          icon: "static/img/def_online.png",
        }
];
```

#### 3、实例化模型类和视图类。

``` javascript
    this.mapModel = new GTMap.MapModel(this.data);
    this.mapView = new GTMap.MapView(this.mapModel, "picture");
```

#### 4、创建视图。

``` javascript
    this.mapView.createItems(this.itemEventCallBack);
    // 此为创建好元素后的回调
    itemEventCallBack(e, dataObj){
        //接下来即可根据元素的数据属性在页面上创建左键右键等页面和菜单
        console.log(e, dataObj);
    };
```

#### 5、根据需要调用接口。

创建好视图后，只需根据业务需求，调用【类参考】上面的接口方法就可以了。
