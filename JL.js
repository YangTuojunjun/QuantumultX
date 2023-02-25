/******************************
⚠️如果放远程，请把JL.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:班级小管家打卡♾️补交by带羊驼
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/a\.welife001\.com\/applet\/notify\/check2dakaNew2.*? url script-response-body JL.js


[mitm]
hostname = a.welife001.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/allow_time_end\":".*?\"/g,'allow_time_end":"24:00:00"');
body = body.replace(/buka_times\":\d/g,'buka_times":114514');
body = body.replace(/remain\":\d/g,'remain":114514');
body = body.replace(/exceed\":true/g,'exceed":false');
body = body.replace(/may_later\":false/g,'may_later":true');
body = body.replace(/is_remind\":false/g,'is_remind":true');
body = body.replace(/buka_period\":\d/g,'buka_period":3');
body = body.replace(/auth\":\d/g,'auth":0');
$done(body);
