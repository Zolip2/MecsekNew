var logoClicked = 0;

$("#middle").click(function(){

    var width = innerWidth;
    var height = innerHeight;
    
    console.log(logoClicked);

    if(width <= 1170 && height <= 2532){

        logoClicked++;

        if(logoClicked == 1){
            $(".header").css({
                    "width" : "20vw",
                    "border-radius" : "10%",
                    "height" : "60vw",
                    "position" : "absolute",
                    "top" : "3vw",
                    "flex-direction" : "column",
                    "justify-content" : "baseline",
                    "align-items" : "baseline"
            });

            $("#middle").css({
                "display" : "inline"
            });

            $(".header").css({
                
            });

            var text1 = $("<h2 class='header-text'>Rólunk</h2>");
            var text2 = $("<h2 class='header-text'>Esemény</h2>");
            var text3 = $("<h2 class='header-text'>Programok</h2>");
            var text4 = $("<h2 class='header-text'>Galéria</h2>");
            var text5 = $("<h2 class='header-text'>Támogatás</h2>");
            var text6 = $("<h2 class='header-text'>Kapcsolat</h2>");
            
            

            
                $("#middle").append(text1);
                $("#middle").append(text2);
                $("#middle").append(text3);
                $("#middle").append(text4);
                $("#middle").append(text5);
                $("#middle").append(text6);
        }

        $(".header-text").css({
            "font-size" : "4vw"
        });

        if(logoClicked == 2){
            logoClicked = 0;
            $(".header").removeAttr("style");
            $("#middle").removeAttr("style");
            $("header-text").removeAttr("style");
            $(".header-text").remove();
        }

    }
})


$(window).resize(function(){
    location.reload();
});