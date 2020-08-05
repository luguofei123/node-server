var express=require('express');
var app =express();
var AipOcrClient = require('baidu-aip-sdk').ocr

//form表单
// var multipart = require('connect-multiparty');
// var multipartMiddleware = multipart();

//json数据
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//设置跨域访问
// app.all('*', function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "X-Requested-With");
//    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//    res.header("X-Powered-By",' 3.2.1');
//    res.header("Content-Type", "application/json;charset=utf-8");
//    next();
// });
 
// var apiKey = 'bA3c5wQnHgtoU7R7zQizUTN1'
// var appId = '21695733'
// var clientSecret = '0h5rc9kVIQvIQUzAnG8DALbeBm890NDM'

var apiKey = 'OdWOKfnoTPhqqylucEc7Eg36'
var appId = '21720087'
var clientSecret = 'NY8MjoguZXPBMt9HPlR7cSvm7V0cWx9q'
      // 新建一个对象，建议只保存一个对象调用服务接口
var clientOcr = new AipOcrClient(appId, apiKey, clientSecret)


// var fs = require('fs');

// var image = fs.readFileSync("C:/Users/Administrator/Desktop/ppp/code.png").toString("base64");
// var str = 'iVBORw0KGgoAAAANSUhEUgAAAIsAAAAmCAYAAAD0m2jPAAADGUlEQVR4nO2aPZKjMBCF5066CwdwQpUPYRJOQEYI+QZcwCE3oGpOsNfoDRAgNfppCY8HvC94wViWRmp9ar1W+evP91+CIIm+fnsC0HUEWCCxAAskFmCBxAIskFiABRILsEBifR4sQ03q1lHvbH/SXZX0GN83n6ZSpKrn78flBTofLENNStXUpLZp9W1JRTu528eOikj/+KZP9Lgpug/CvmNHhVL+OUXUt+VpYHsZLH1bklIqWbugH4SlqfwbeSTwW9+J+vFJdyXPGH1bBrJdpO/YJf2v68DCAtJUKhAkzwk9BMs8pgVk1e0/s9oTNtz67kT9MM1rG+qsg2IemNzD9k6IfgyWpgos8NZR/1JY9EkPBi9+fQTn7BXzQLGrTl9LfB45We/dV9SPwLIGnS9k7KhYgxuCJW+z5itoHnfnEQR+pan83kK+MRET7QH+v4SlMRZgVQJDzU5hRmaJblJNzbcHlmCVFIdF0t8cx7eJ0epIdFjyTPrpYOHB3FI7X2AAlhwzONRWtbJsusQLLHNwX0MacD4vK0sy+dpCfaQQHqiszgvLekJKeoyGp5BcQxmwbFWQK7PIyt1dZjGvLusa00Y6kCH2GcST8STSPsdZPV4XlpruS+XhC+QCka5SsjzLbmwTRltFO4nfV4KwGF5kzlax8eY5LeMFK0MDhsMG+zqwmMHgZazsGoqZtviLqOMEBwDcvueYj+Wf9Li3Un7CTQgy31mSHwGvCYsrcCYw7iAETWYCLFaZvvoZNo41n30Vw9e0+B8OmH++5lxyM8Cnw8JOsjuYriDMqTv6FuIsyX0Zw3gFNf0TB3v1SvaVts1l+5x/5prvYkaXttVoJ2eYT4fF1SYxuMLyNvkaYhu47x/JEKvPeuq16DXwbGlA6xtrq7ikmSZ+gK4JS4ZBk5zSV8HCN379bOyoCILONtbMnNXT+Dvh/WMFywUNM+zZfufMsCQtys4s0tfIw7Csm/Henyp8gs73EwXotAIskFiABRILsEBiARZILMACiQVYILEACyQWYIHEAiyQWIAFEguwQGIBFkgswAKJ9Q+5lKd1miScjAAAAABJRU5ErkJggg=='

// function test(str) {
//         var options = {}
//         options['recognize_granularity'] = 'big'
//         options['detect_direction'] = 'true'
//         options['vertexes_location'] = 'true'
//         options['probability'] = 'true'

//         clientOcr.accurate(str, options).then(function (result) {
//           console.log(result)
//           // let jsonObj = JSON.stringify(result);
//           // console.log(result['words_result'])
//           // tmpWord = result['words_result']
//           result['words_result'].forEach(wd => {
//             var spaceCnt = wd.location.left / 4
//             tmpWord += ' '.repeat(spaceCnt) + wd.words+'\n'
//           })
//             // return tmpWord
//             // res.end(tmpWord);
//             // res.status(200)
//         }).catch(function (err) {
//           // 如果发生网络错误
//           console.log("如果发生网络错误"+`eneralBasic err:${err}`)
//         })
// }
// function test(str) {
//         var options = {}
//         options['recognize_granularity'] = 'big'
//         options['detect_direction'] = 'true'
//         options['vertexes_location'] = 'true'
//         options['probability'] = 'true'

//         clientOcr.generalBasic(image).then(function(result) {
//           // console.log(result)
//           // let jsonObj = JSON.stringify(result);
//           // console.log(result['words_result'])
//           // tmpWord = result['words_result']
//           result['words_result'].forEach(wd => {
//             var spaceCnt = wd.location.left / 4
//             tmpWord += ' '.repeat(spaceCnt) + wd.words+'\n'
//           })
//             // return tmpWord
//             // res.end(tmpWord);
//             // res.status(200)
//         }).catch(function (err) {
//           // 如果发生网络错误
//           console.log("如果发生网络错误"+`eneralBasic err:${err}`)
//         })
// }
// test(image)
 
//写个接口图片转文字
app.post('/pictotext', function(req,res){
    // console.log(req.body.v);
    // test(req.body.v)
     res.setTimeout(120*1000, function () {
        console.log("Request has timed out.");
        return res.status(408).send("请求超时")
    });
        var options = {}
        options['recognize_granularity'] = 'big'
        options['detect_direction'] = 'true'
        options['vertexes_location'] = 'true'
        options['probability'] = 'true'

        clientOcr.accurate(req.body.v, options).then(function (result) {
          console.log(result)
          var tmpWord = ''
          // let jsonObj = JSON.stringify(result);
          // console.log(result['words_result'])
          // tmpWord = result['words_result']
          result['words_result'].forEach(wd => {
            var spaceCnt = wd.location.left / 4
            tmpWord += ' '.repeat(spaceCnt) + wd.words+'\n'
          })
            // return tmpWord
            res.end(tmpWord);
            res.status(200)
        }).catch(function (err) {
          // 如果发生网络错误
          console.log("如果发生网络错误"+`eneralBasic err:${err}`)
        })
    // res.status(200)
    // res.json(tmpWord)
// console.log(req.body.v)
// test(req.body.v)
    // res.writeHead(200,{"Content-Type":"text/plain"});//text/plain：代表传回的是纯文本
   //  res.end(test(req.body.v));//将内容写在write的参数里，传回浏览器
    // res.end();//加一个end方法，表示响应结束了
});

//配置服务端口
 
var server = app.listen(3000, function () {
 
    var host = server.address().address;
 
    var port = server.address().port;
 
    console.log('Example app listening at http://%s:%s', host, port);
})