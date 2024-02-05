import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// ------Cesium需要添加的内容
import { Cartesian3, createOsmBuildingsAsync, Ion, Math as CesiumMath, Terrain, Viewer } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";// 引入Cesium需要的css

// 使用自己的cesium ion的token，token获取地址：https://ion.cesium.com/signup/? 然后注册自己的账号，然后在Access Tokens里面将Default Token的token复制出来粘贴到这里就好了
// 这里的token是作者的，可以用于测试使用，建议自己注册
Ion.defaultAccessToken  =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMDNkYzY4ZS1hZjEyLTRjNzgtODUyOS1mZmQxNzNiYjYyZGYiLCJpZCI6MTkzNTM2LCJpYXQiOjE3MDY4NTk4NTB9.Mxm5tJiOp4hBStLfFSOFOD8o8Kcazg_Hz3d6H8UCDYY";
window.CESIUM_BASE_URL = "/libs/cesium/"; // 这个地方通常会ts报错
// -------------------------

createApp(App).mount("#app");
