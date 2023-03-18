/******************************
⚠️如果放远程，请把7TXT.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:七天学堂破解
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/szone-my\.7net\.cc\/userInfo\/GetUserInfo|https?:\/\/szone-score\.7net\.cc\/Question\/SubjectGrade.*? url script-response-body 7TXT.js


[mitm]
hostname = szone-my.7net.cc,szone-score.7net.cc
%¥
*******************************/
var body=$response.body;
body = body.replace(/isVip\":\w+/g,'isVip":"true"');
body = body.replace(/expiredTime\":".*?\"/g,'expiredTime":"2077/01/01 00:00:00"');
body = body.replace(/nickName\":".*?"/g,'nickName":"super牛逼大羊驼"');
$done(body);
