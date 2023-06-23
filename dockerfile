# 使用官方Node.js镜像作为基础
FROM node:alpine

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./

# 安装依赖项
RUN npm install

# 复制项目文件到工作目录
COPY . .

# 构建应用程序
RUN npm run build

# 暴露3000端口
EXPOSE 3000

# 启动应用程序
CMD ["npm", "start"]
