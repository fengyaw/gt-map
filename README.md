## 说明

此为上海广拓专用的图片/百度地图专用控件，使用方式详见公司私有仓库。

## 下载方式

2. ```js
npm i gt-map -s
   ```
   
2. 在main.js中: 

   ```js
   import 'gt-map';
   ```

3. 使用：

   ```js
   this.mapModel = new GTMap.MapModel(this.mapData);
   this.MapController = new GTMap.MapView(this.mapModel, this.mapType);
   ```

4. 具体使用方式详见广拓文档仓库>前端地图控件api文档。

