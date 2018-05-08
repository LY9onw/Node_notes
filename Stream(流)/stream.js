var fs = require('fs')

var data = 'www.github.com/YL9'

// 创建一个可以写入的流 写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt')

// 使用 UTF-8 编码写入数据
writerStream.write(data, 'UTF8')

// 标记文件尾部
writerStream.end()

// 处理流事件 --> data, end, error
writerStream.on('finish', function () {
  console.log('写入完毕')
})

writerStream.on('error', function (err) {
  console.log(err.stack)
})

console.log('程序执行完毕')
