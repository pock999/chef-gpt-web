# chef-gpt-web

Chef GPT Web

api repo: https://github.com/rinku-1998/chef-gpt-api

## Node 版本

- Node.js v18.19.0


## 使用指南

1. 安裝套件

- use npm
```shell
npm install
```

- use yarn
```shell
yarn
```

2. 設定 config
`src/config/config.json`

```ts
export const CONFIG = {
  tokenKey: '_token', // localStorage token 存放之 key
  apiUrl: 'http://localhost:8000', // API URL
};
```

3. 啟動服務

- use npm
```shell
npm start
```

- use yarn
```shell
yarn start
```

4. 打包 (build)
> 注意：src/config/* 的 config 要先改好再下 build 命令，此 config 不是靜態檔案

- use npm
```shell
npm run build
```

- use yarn
```shell
yarn build
```