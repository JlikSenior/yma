# 使用官方 Node 镜像作为基础镜像
# 使用 Nginx 作为基础镜像来托管构建的文件
FROM node:14

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 文件到工作目录
COPY package*.json ./

# 设置环境变量，指示 Vue 项目目录
ENV VUE_APP_DIR=/app

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 文件到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

#编译vue内容
RUN npm run build

# 复制所有文件到工作目录
COPY /dist .

# 设置环境变量，指示 Vue 项目目录
ENV VUE_APP_DIR=/app

# 第二阶段：使用 Nginx 提供服务
FROM nginx:alpine

# 复制构建的文件到 Nginx 的 html 目录
COPY --from=0 /app /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
