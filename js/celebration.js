var celebration = {
    initFun:function(){
        this.LiFun();//限时抢购导航栏
        this.textrollFun();//公告栏文字向上翻滚
    },


    LiFun:function(){
        $(".time-nav ul li").click(function(){
            $(this).addClass(".s-time .time-nav ul curr").siblings().removeClass(".s-time .time-nav ul curr");
        });
    },


    textrollFun:function(){
        var slideBox1 = $(".notice-cont1"),
            slideBox2 = $(".notice-cont2"),
            slideBox3 = $(".notice-cont3");
        var picTimer;

        function common(x){
            x.hover(function(){
                clearInterval(picTimer);
            },function(){
                picTimer = setInterval(function(){
                    rollUp(x);
                },3000);
            }).trigger("mouseleave");

            function rollUp(param){
                var $self = param.find("ul");
                var height = $self.find("li:first").height();
                $self.animate({"margin-top":-height+"px"},600,function(){
                    $self.css({"margin-top":0}).find("li:first").appendTo($self)
                })
            }
        }

        common(slideBox1);
        common(slideBox2);
        common(slideBox3);

    }



};
celebration.initFun();