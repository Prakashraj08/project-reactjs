#node block

FROM node:alpine3.19 as nodework
WORKDIR /myapp
COPY package*.json .
RUN npm install
COPY . .
CMD  npm run build 



#nginx block
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
#COPY --from=builder /myapp/build .
ENTRYPOINT [ "nginx","-g","daemon off;" ]
