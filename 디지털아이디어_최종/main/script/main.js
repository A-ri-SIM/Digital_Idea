$(Document).ready(function(){
        $(".down").animate({
            top: 0
        },500);
        $(".up").animate({
            bottom: 0
        },500);
        $(".down>.img").animate({
            marginBottom: "4%",
            transitionDuration: "1s"
        })
        $(".up>.img").animate({
            bottom: "4%",
            transitionDuration: "1s"
        })
        $(".img_hide>.img:nth-child(3)").css({
            opacity: 0
        });
        setInterval(function(){
            $(".wrap").addClass("move_sc");
            $(".wrap").fadeOut(1200,function(){
                $(".bottom_but,.bottom_but_text").fadeIn(1000)
            });
            $("video").css({
                transform: "scale(1) translateZ(500px)",
                transitionDuration: "4s",
                top: 0
            })
        },1000) 
        // 스크롤바 영역
       
        // setInterval(function(){
        //     $(".bottom_but,.top_but_arrow").animate({
        //         height: '70px'
        //     },2500,'linear',function(){
        //         $(".bottom_but,.top_but_arrow").css({
        //             height: 0
        //         })
        //     })
        // },3000)

        let click_num=0;
            $('.toggle').click(function(){
                $(this).toggleClass('active');
                if(click_num == 0){
                    $(".menu_wrap").fadeIn();
                    click_num++;
                }else{
                    $(".menu_wrap").fadeOut();
                    click_num--;
                }
                
            });
            $('.toggle_mo').click(function(){
                $(this).toggleClass('active');
                if(click_num == 0){
                    $(".menu_wrap_mo").fadeIn();
                    click_num++;
                }else{
                    $(".menu_wrap_mo").fadeOut();
                    click_num--;
                }
                
            });
        // })
}) //끝