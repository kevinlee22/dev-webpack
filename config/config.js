

module.exports = {
    dev:{
        // 项目开发html
        indexFile:"degula.index.html",
        port:8088,
        serverRoot:"/src",
        // 第三方库
        VENDOR:["jquery"]
    },
    build:{
        // 打包到文件夹下
        outPutProjectPath:"src\/html\/web\/draculaDinner",
        // prod.js 内再次打包需要删除的选项
        cleanLsit:["src/html/web/draculaDinner/css","src/html/web/draculaDinner/js","src/html/web/draculaDinner/index.html"]
    }
}