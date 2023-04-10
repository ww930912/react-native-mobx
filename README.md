# react-native-mobx
init rn project: react-native 0.71.6、mobx 6.9.0、react-navigation 6.1.6、typescript 4.8.4

---
### 依赖环境
```
node v18.15.0
jdk 11
ruby 2.7.6
Xcode Version 14.3 (14E222b)
Android Studio Giraffe | 2022.3.1 Canary 9
```

---
### 项目运行
```
// 1.安装依赖
yarn add

// 2.安装 cocoapods iOS依赖
cd ios && bundle exec pod install

// 将下面配置粘贴到info.plist：
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
</array>

// 3.配置 java 安卓依赖
// MainActivity.java
+ import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivity extends ReactActivity {

  + @Override
  + protected void onCreate(Bundle savedInstanceState) {
  +   super.onCreate(null);
  + }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "sredy_rn";
  }
  ...
}
// app/build.gradle
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle");

// 4.启动项目
npx react-native start
```

---
### 目录结构

```
my-app
├── android // 安卓项目
├── ios // iOS项目
├── node_modules // node包
├── patches // 修改node_modules源码包的代码注入patches
├── README.md // markdown当前项目的说明
├── package.json // 当前项目安装的包列表
├── .gitignore // git 上传时忽略的目录或文件
├── .eslintrc.js // eslint 配置
├── .prettierrc.js // prettier 配置
├── babel.config.js // babel 配置
├── tsconfig.config // ts 配置
├── .ruby-version // ruby指定版本
├── index.js // app入口
└── src
    ├── assets // 静态文件
    ├── components // 组件
    ├── pages // 页面
            ├── index.tsx // 主页面
            └── workbench // 每个页面声明
    ├── store // mobx 状态
            ├── index.tsx // 主状态
            └── workbench // 每个状态声明
    ├── typings // ts
            ├── styled.d.ts // styled-components 声明
            └── workbench // 业务 ts 声明
    ├── utils // 工具
            └── navigation.ts // react-navigation 路由
    └── App.tsx //根组件
```

---
### 项目效果

![rn](https://images.vmartaw.com/2023/04/10/rn.gif)
