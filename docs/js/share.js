var pageUrl = window.location.href;
var pageTitle = document.title;
// 非文章页面返回
if($(".post-header-cover").length == 0){
    return;
}

var pageImg = $(".post-header-cover").css("backgroundImage").replace('url(','').replace(')','');

// 微博初始化
let shareSina = 'http://service.weibo.com/share/share.php?title=' + encodeURIComponent(pageTitle) + '&url=' + encodeURIComponent(pageUrl) + '&pic=' + encodeURIComponent(pageImg);
$('.post-action-share .fa-weibo').parent().attr("href", shareSina);

// QQ空间初始化
let shareQQZone = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=' + encodeURIComponent(pageTitle) + '&title=' + encodeURIComponent(pageTitle) + '&url=' + encodeURIComponent(pageUrl) + '&pics=' + encodeURIComponent(pageImg);
$('.post-action-share .fa-qq').parent().attr("href", shareQQZone);

// 微信初始化
/*$(".fa-weixin").click(function() {
    let qrcodeDiv = $('<div></div>');
    $('#post-footer').append(qrcodeDiv);
    qrcodeDiv.qrcode({
        text: pageUrl, //设置二维码内容
        render: "table", //设置渲染方式
        width: 50, //设置宽度,默认生成的二维码大小是 256×256
        height: 50, //设置高度
        typeNumber: -1, //计算模式
        background: "#ffffff", //背景颜色
        foreground: "#000000" //前景颜色
    });
})*/

/*
var ShareTip = function() {}

ShareTip.prototype.shareToSina = function(title, url, picUrl) {
    let shareSina = 'http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + url + '&content=utf-8&sourceUrl=' + url + '&pic=' + picUrl;
    window.open(shareSina, 'newWindow', 'height=400,width=400,top=100,left=100');
}

ShareTip.prototype.shareToQQZone = function(title, url, picUrl) {
    let shareQQZone = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=' + title + '&url=' + url + '&pics=' + picUrl;
    window.open(shareQQZone, 'newWindow', 'height=400,width=400,top=100,left=100');
}

$(".fa-weibo").click(function() {
    let share = new ShareTip();
    share.shareToSina(pageTitle, pageUrl, picurl);
})

$(".fa-qq").click(function() {
    let share = new ShareTip();
    share.shareToQQZone(pageTitle, pageUrl, picurl);
})*/