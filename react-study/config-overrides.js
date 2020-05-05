const {override, fixBabelImports, addDecoratorsLegacy} = require("customize-cra");


// override 生成 webpack 配置对象
module.exports = override(
  // antd 按需加载
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  }),
  addDecoratorsLegacy() // 配置装饰器
);