# 1. 使用官方的 Node.js 作為執行（編譯）環境的 Base Image
FROM node:18 as build

# 2. 設定工作目錄
WORKDIR /chef-gpt-web

# 3. 複製 package.json 跟 package-lock.json 到工作目錄
COPY package*.json ./

# 4. 安裝依賴套件
RUN npm install yarn
RUN yarn install

# 5. 複製專案內容到容器內
COPY . .

# 6. Build
RUN yarn build

# 7. 使用 Nginx 作為生產伺服器
FROM nginx:1.25.3
LABEL MAINTAINER="rinku"

# 8. 設定對外的 Port
EXPOSE 80
EXPOSE 443

# 9. 複製 dist 內容
COPY --from=build chef-gpt-web/dist /usr/share/nginx/html

# 10. 預設啟動指令
CMD ["nginx", "-g", "daemon off;"]