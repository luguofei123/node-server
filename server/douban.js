var request = require('request');
var cheerio = require('cheerio');
const url = require('url');

var express=require('express');
var app =express();


//form表单
// var multipart = require('connect-multiparty');
// var multipartMiddleware = multipart();

//json数据
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 获取豆瓣新书数据
app.get('/newBlook', function(req,res){
  // console.log(req.body.v);
  // test(req.body.v)
   res.setTimeout(120*1000, function () {
      console.log("Request has timed out.");
      return res.status(408).send("请求超时")
  });
  request('https://book.douban.com/latest?icn=index-latestbook-all', function (err1, res1) {
      if (err1) return console.error(err1);   
      //var result = iconv.convert(new Buffer(res.body, 'binary')).toString();
      var result = res1.body.toString();
      var $ = cheerio.load(result);
      var arr = []
      // console.log($('body #content  li ').length)
      $('body #content li ').each(function(index,value){
        // console.log(score)
        let title = $(value).find(".detail-frame h2 a").text()   //标题
        let score = $(value).find(".detail-frame p.rating").children().eq(1).text().replace(/(^\s*)|(\s*$)/g, "") // 评分
        let bookInfo = $(value).find(".detail-frame p.color-gray").text().replace(/(^\s*)|(\s*$)/g, "") // 书籍作者 出版社
        let imgUrl = $(value).find("a.cover img").attr("src") // 封面
        let detail = $(value).find(".detail-frame p.detail").text().replace(/(^\s*)|(\s*$)/g, "") // 书籍简介
        let id = url.parse($(value).find("a.cover").attr("href")).path.split('/')[2] // 书籍id
        arr.push({
          id:id,
          title:title,
          bookInfo:bookInfo,
          score:score,
          detail:detail,
          imgUrl:imgUrl
        })
      })
     // return arr
  res.status(200)
  res.json(arr)
  });

});
 
// 获取北京地区即将上映的电影
app.get('/laterMovie', function(req,res){
    // console.log(req.body.v);
    // test(req.body.v)
     res.setTimeout(120*1000, function () {
        console.log("Request has timed out.");
        return res.status(408).send("请求超时")
    });
    request('https://movie.douban.com/cinema/later/beijing/', function (err1, res1) {
        if (err1) return console.error(err1);   
        //var result = iconv.convert(new Buffer(res.body, 'binary')).toString();
        var result = res1.body.toString();
        var $ = cheerio.load(result);
        var arr = []
        $('body #content #showing-soon .item.mod ').each(function(index,value){
          let title = $(value).find(".intro a").text()   //标题
          let ondate = $(value).find(".intro ul").children().eq(0).text() //上映日期
          let type = $(value).find(".intro ul").children().eq(1).text() //上映日期
          let area = $(value).find(".intro ul").children().eq(2).text() //区域
          let willSeePerson = $(value).find(".intro ul").children().eq(3).find("span").text() //区域
          let imgUrl = $(value).find(".thumb img").attr("src") //影片主图
          //影片的id   查看详情 https://movie.douban.com/subject/30272759/
          let id = url.parse($(value).find("a.thumb").attr("href")).path.split('/')[2] 
          arr.push({
            id:id,
            title:title,
            ondate:ondate,
            type:type,
            area:area,
            willSeePerson:willSeePerson,
            imgUrl:imgUrl
          })
        })
       // return arr
    res.status(200)
    res.json(arr)
    });

});

// 获取北京地区正在上映的电影
app.get('/nowPlaying', function(req,res){
    // console.log(req.body.v);
    // test(req.body.v)
     res.setTimeout(120*1000, function () {
        console.log("Request has timed out.");
        return res.status(408).send("请求超时")
    });
    request('https://movie.douban.com/cinema/nowplaying/beijing/', function (err1, res1) {
        if (err1) return console.error(err1);   
        //var result = iconv.convert(new Buffer(res.body, 'binary')).toString();
        var result = res1.body.toString();
        var $ = cheerio.load(result);
        var arr = []
        $('body #nowplaying ul.lists>li ').each(function(index,value){
          // console.log(value)
          let title = $(value).attr("data-title")   //标题
          let ondate = $(value).attr("data-release") //上映日期
          // let type = $(value).attr("data-title") //类型
          let region = $(value).attr("data-region") //区域
         //  let willSeePerson = $(value).attr("data-score") //多少人想看
          let score = $(value).attr("data-score") // 评分
          let votecount = $(value).attr("data-votecount")  // 多少人评论
          let director = $(value).attr("data-director") //影片主图
          let actors = $(value).attr("data-actors") //影片主演
          let category = $(value).attr("data-category") //影片数据类型 正在上映 nowplaying 即将上映 soonplaying
          let star = $(value).attr("data-star") //影片星级 
          let duration = $(value).attr("data-duration") //影片时长
          let imgUrl = $(value).find("ul .poster img").attr("src") //影片主图
          //影片的id   查看详情 https://movie.douban.com/subject/30272759/
          let id = $(value).attr("data-subject")
          arr.push({
            id:id,
            title:title,
            ondate:ondate,
            // type:type,
            region:region,
            score:score,
            votecount:votecount,
            director:director,
            actors:actors,
            category:category,
            star:star,
            duration:duration,
            imgUrl:imgUrl
          })
        })
       // return arr
    res.status(200)
    res.json(arr)
    });

});
 
//配置服务端口
 
var server = app.listen(3000, function () {
 
    var host = server.address().address;
 
    var port = server.address().port;
 
    console.log('Example app listening at http://%s:%s', host, port);
})