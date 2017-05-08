$(document).ready(function() {
    cube();
    click();
})

function click() {
    $(".btn").click(function(e) {
        var btn = $(this)[0].innerHTML;
        console.log(btn);
        switch (btn) {
            case "上下":
                $('.show').css({ backgroundImage: '' })
                $('.cube').removeClass('moveY');
                $('.cube').removeClass('moveZ');
                $(".cube").addClass("moveX");
                break;
            case "左右":
                $('.show').css({ backgroundImage: '' })
                $('.cube').removeClass('moveX');
                $('.cube').removeClass('moveZ');
                $(".cube").addClass("moveY");
                break;
            case "前后":
                $('.show').css({ backgroundImage: '' })
                $('.cube').removeClass('moveX');
                $('.cube').removeClass('moveY');
                $(".cube").addClass("moveZ");
                break;
            case "返回":
                window.location.href = 'https://pupulul.github.io/resume/';
                break;
            case "正面":
                $('.show').css({ backgroundImage: 'url(img/imgFront.png)' })
                break;
            case "背面":
                $('.show').css({ backgroundImage: 'url(img/imgBack.png)' })
                break;
            case "左面":
                $('.show').css({ backgroundImage: 'url(img/imgLeft.png)' })
                break;
            case "右面":
                $('.show').css({ backgroundImage: 'url(img/imgRight.png)' })
                break;
            case "上面":
                $('.show').css({ backgroundImage: 'url(img/imgTop.png)' })
                break;
            case "下面":
                $('.show').css({ backgroundImage: 'url(img/imgBottom.png)' })
                break;
            case "微店":
                window.location.href = 'https://weidian.com/item.html?itemID=2091364771&ifr=itemdetail&wfr=c';
                break;
            case "二维码":
                $('.show').css({ backgroundImage: 'url(img/QR.jpg)' })
                break;
            default:
                console.log('nothing');
        }
    })
}


function cube() {
    $(".cube").click(function() {
        console.log(1);
    })
}
