export default function() {
    // rem 设置
    var designWidth = 750;  //设计稿的宽度
    //初始化
    resize();
    window.addEventListener("resize",function(){
        resize();
    })

    function resize(){
        var clientWidth = document.documentElement.clientWidth;
   
        var fontSize = clientWidth / designWidth * 100;
        fontSize = fontSize > 100 ? 100 : fontSize;
        document.documentElement.style.fontSize = fontSize+"px";
        
    }
}