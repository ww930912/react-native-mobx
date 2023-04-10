# react-native-mobx
init rn project: react-native 0.71.6、mobx 6.9.0、react-navigation 6.1.6

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
### 目录结构

```
my-app
├── android // 安卓项目
├── ios // iOS项目
├── node_modules // node包
├── patches // 修改node_modules源码包的代码注入patches
├── README.md // markdown当前项目的说明
├── package.json // 当前项目安装的包列表
├── .gitignore // git上传时忽略的目录或文件
├── .eslintrc.js // eslint配置
├── .prettierrc.js // prettier配置
├── babel.config.js // babel配置
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

![rn](https://images.vmartaw.com/2023/04/10/rn.gif)
