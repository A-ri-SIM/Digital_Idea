// $(document).ready(function(){
//     function com_pc(){
        var box_index = 0;
        var before_time = new Date().getTime();
        var now_time = new Date().getTime();
        var direction = '';
        function wrap_scroll_down() {
            if (box_index < 18) {
                box_index += 1;
                direction = 'down';
            }
            // alert(box_index)
            $('#rotation,#text_rotation').css({
               transform: 'rotateY('+-box_index*20+'deg)'
            })
            if(box_index>0 && box_index<3){
                $('.face_1').css({
                transform: 'rotateY(0deg) translateY(0px) translateZ(600px) '
            });
            $('.text_face_1').css({
                transform: 'rotateY(0deg) translateY(0px) translateZ(650px) '
            });
            $('.face_2').css({
                transform: 'rotateY(60deg) translateY(200px) translateZ(600px) '
            });
            $('.text_face_2').css({
                transform: 'rotateY(60deg) translateY(200px) translateZ(650px) '
            });
            $('.face_3').css({
                transform: 'rotateY(120deg) translateY(200px) translateZ(600px) '
            });
            $('.text_face_3').css({
                transform: 'rotateY(120deg) translateY(200px) translateZ(650px) '
            });
            $('.face_4').css({
                transform: 'rotateY(180deg) translateY(0px) translateZ(600px) '
            });
            $('.text_face_4').css({
                transform: 'rotateY(180deg) translateY(0px) translateZ(650px) '
            });
            $('.face_5').css({
                transform: 'rotateY(240deg) translateY(-200px) translateZ(600px) '
            });
            $('.text_face_5').css({
                transform: 'rotateY(240deg) translateY(-200px) translateZ(650px) '
            });
            $('.face_6').css({
                transform: 'rotateY(300deg) translateY(-200px) translateZ(600px) '
            });
            $('.text_face_6').css({
                transform: 'rotateY(300deg) translateY(-200px) translateZ(650px) '
            });
            }else if(box_index>2 && box_index<6){
                $('.face_1').css({
                transform: 'rotateY(0deg) translateY(-200px) translateZ(600px) '
            });
            $('.text_face_1').css({
                transform: 'rotateY(0deg) translateY(-200px) translateZ(650px) '
            });
            $('.face_2').css({
                transform: 'rotateY(60deg) translateY(0px) translateZ(600px) '
            });
            $('.text_face_2').css({
                transform: 'rotateY(60deg) translateY(0px) translateZ(650px) '
            });
            $('.face_3').css({
                transform: 'rotateY(120deg) translateY(200px) translateZ(600px) '
            });
            $('.text_face_3').css({
                transform: 'rotateY(120deg) translateY(200px) translateZ(650px) '
            });
            $('.face_4').css({
                transform: 'rotateY(180deg) translateY(200px) translateZ(600px) '
            });
            $('.text_face_4').css({
                transform: 'rotateY(180deg) translateY(200px) translateZ(650px) '
            });
            $('.face_5').css({
                transform: 'rotateY(240deg) translateY(0px) translateZ(600px) '
            });
            $('.text_face_5').css({
                transform: 'rotateY(240deg) translateY(0px) translateZ(650px) '
            });
            $('.face_6').css({
                transform: 'rotateY(300deg) translateY(-200px) translateZ(600px) '
            });
            $('.text_face_6').css({
                transform: 'rotateY(300deg) translateY(-200px) translateZ(650px) '
            });
            }
            else if(box_index>5 && box_index<9){
                $('.face_1').css({
                transform: 'rotateY(0deg) translateY(-200px) translateZ(600px) '
            });
            $('.text_face_1').css({
                transform: 'rotateY(0deg) translateY(-200px) translateZ(650px) '
            });
            $('.face_2').css({
                transform: 'rotateY(60deg) translateY(-200px) translateZ(600px) '
            });
            $('.text_face_2').css({
                transform: 'rotateY(60deg) translateY(-200px) translateZ(650px) '
            });
            $('.face_3').css({
                transform: 'rotateY(120deg) translateY(0px) translateZ(600px) '
            });
            $('.text_face_3').css({
                transform: 'rotateY(120deg) translateY(0px) translateZ(650px) '
            });
            $('.face_4').css({
                transform: 'rotateY(180deg) translateY(200px) translateZ(600px) '
            });
            $('.text_face_4').css({
                transform: 'rotateY(180deg) translateY(200px) translateZ(650px) '
            });
            $('.face_5').css({
                transform: 'rotateY(240deg) translateY(200px) translateZ(600px) '
            });
            $('.text_face_5').css({
                transform: 'rotateY(240deg) translateY(200px) translateZ(650px) '
            });
            $('.face_6').css({
                transform: 'rotateY(300deg) translateY(0px) translateZ(600px) '
            });
            $('.text_face_6').css({
                transform: 'rotateY(300deg) translateY(0px) translateZ(650px) '
            });
            }
            else if(box_index>8 && box_index<11){
                $('.face_1').css({
                transform: 'rotateY(0deg) translateY(0px) translateZ(600px) '
            });
            $('.text_face_1').css({
                transform: 'rotateY(0deg) translateY(0px) translateZ(650px) '
            });
            $('.face_2').css({
                transform: 'rotateY(60deg) translateY(-200px) translateZ(600px) '
            });
            $('.text_face_2').css({
                transform: 'rotateY(60deg) translateY(-200px) translateZ(650px) '
            });
            $('.face_3').css({
                transform: 'rotateY(120deg) translateY(-200px) translateZ(600px) '
            });
            $('.text_face_3').css({
                transform: 'rotateY(120deg) translateY(-200px) translateZ(650px) '
            });
            $('.face_4').css({
                transform: 'rotateY(180deg) translateY(0px) translateZ(600px) '
            });
            $('.text_face_4').css({
                transform: 'rotateY(180deg) translateY(0px) translateZ(650px) '
            });
            $('.face_5').css({
                transform: 'rotateY(240deg) translateY(200px) translateZ(600px) '
            });
            $('.text_face_5').css({
                transform: 'rotateY(240deg) translateY(200px) translateZ(650px) '
            });
            $('.face_6').css({
                transform: 'rotateY(300deg) translateY(200px) translateZ(600px) '
            });
            $('.text_face_6').css({
                transform: 'rotateY(300deg) translateY(200px) translateZ(650px) '
            });
            }
            else if(box_index>10 && box_index<14){
                $('.face_1').css({
                transform: 'rotateY(0deg) translateY(200px) translateZ(600px) '
            });
            $('.text_face_1').css({
                transform: 'rotateY(0deg) translateY(200px) translateZ(650px) '
            });
            $('.face_2').css({
                transform: 'rotateY(60deg) translateY(0px) translateZ(600px) '
            });
            $('.text_face_2').css({
                transform: 'rotateY(60deg) translateY(0px) translateZ(650px) '
            });
            $('.face_3').css({
                transform: 'rotateY(120deg) translateY(-200px) translateZ(600px) '
            });
            $('.text_face_3').css({
                transform: 'rotateY(120deg) translateY(-200px) translateZ(650px) '
            });
            $('.face_4').css({
                transform: 'rotateY(180deg) translateY(-200px) translateZ(600px) '
            });
            $('.text_face_4').css({
                transform: 'rotateY(180deg) translateY(-200px) translateZ(650px) '
            });
            $('.face_5').css({
                transform: 'rotateY(240deg) translateY(0px) translateZ(600px) '
            });
            $('.text_face_5').css({
                transform: 'rotateY(240deg) translateY(0px) translateZ(650px) '
            });
            $('.face_6').css({
                transform: 'rotateY(300deg) translateY(200px) translateZ(600px) '
            });
            $('.text_face_6').css({
                transform: 'rotateY(300deg) translateY(200px) translateZ(650px) '
            });
            }
            else if(box_index>13 && box_index<17){
                $('.face_1').css({
                transform: 'rotateY(0deg) translateY(200px) translateZ(600px) '
            });
            $('.text_face_1').css({
                transform: 'rotateY(0deg) translateY(200px) translateZ(650px) '
            });
            $('.face_2').css({
                transform: 'rotateY(60deg) translateY(200px) translateZ(600px) '
            });
            $('.text_face_2').css({
                transform: 'rotateY(60deg) translateY(200px) translateZ(650px) '
            });
            $('.face_3').css({
                transform: 'rotateY(120deg) translateY(0px) translateZ(600px) '
            });
            $('.text_face_3').css({
                transform: 'rotateY(120deg) translateY(0px) translateZ(650px) '
            });
            $('.face_4').css({
                transform: 'rotateY(180deg) translateY(-200px) translateZ(600px) '
            });
            $('.text_face_4').css({
                transform: 'rotateY(180deg) translateY(-200px) translateZ(650px) '
            });
            $('.face_5').css({
                transform: 'rotateY(240deg) translateY(-200px) translateZ(600px) '
            });
            $('.text_face_5').css({
                transform: 'rotateY(240deg) translateY(-200px) translateZ(650px) '
            });
            $('.face_6').css({
                transform: 'rotateY(300deg) translateY(0px) translateZ(600px) '
            });
            $('.text_face_6').css({
                transform: 'rotateY(300deg) translateY(0px) translateZ(650px) '
            });
            }else if(box_index>17){
                $('.face_1').css({
                transform: 'rotateY(0deg) translateY(0px) translateZ(600px) '
            });
            $('.text_face_1').css({
                transform: 'rotateY(0deg) translateY(0px) translateZ(650px) '
            });
            $('.face_2').css({
                transform: 'rotateY(60deg) translateY(200px) translateZ(600px) '
            });
            $('.text_face_2').css({
                transform: 'rotateY(60deg) translateY(200px) translateZ(650px) '
            });
            $('.face_3').css({
                transform: 'rotateY(120deg) translateY(200px) translateZ(600px) '
            });
            $('.text_face_3').css({
                transform: 'rotateY(120deg) translateY(200px) translateZ(650px) '
            });
            $('.face_4').css({
                transform: 'rotateY(180deg) translateY(0px) translateZ(600px) '
            });
            $('.text_face_4').css({
                transform: 'rotateY(180deg) translateY(0px) translateZ(650px) '
            });
            $('.face_5').css({
                transform: 'rotateY(240deg) translateY(-200px) translateZ(600px) '
            });
            $('.text_face_5').css({
                transform: 'rotateY(240deg) translateY(-200px) translateZ(650px) '
            });
            $('.face_6').css({
                transform: 'rotateY(300deg) translateY(-200px) translateZ(600px) '
            });
            $('.text_face_6').css({
                transform: 'rotateY(300deg) translateY(-200px) translateZ(650px) '
            });
            }
            before_time = now_time;
        }
    
        function wrap_scroll_up() {
           if (box_index > 0) {
                box_index -= 1;
                direction = 'up';
            }
            $('#rotation,#text_rotation').css({
                transform: 'rotateY('+-box_index*20+'deg)'
            });
            // alert(box_index)
            if(box_index>0 && box_index<3){
                $('.face_1').css({
                    transform: 'rotateY(0deg) translateY(0px) translateZ(600px) '
                });
                $('.text_face_1').css({
                    transform: 'rotateY(0deg) translateY(0px) translateZ(650px) '
                });
                $('.face_2').css({
                    transform: 'rotateY(60deg) translateY(200px) translateZ(600px) '
                });
                $('.text_face_2').css({
                    transform: 'rotateY(60deg) translateY(200px) translateZ(650px) '
                });
                $('.face_3').css({
                    transform: 'rotateY(120deg) translateY(200px) translateZ(600px) '
                });
                $('.text_face_3').css({
                    transform: 'rotateY(120deg) translateY(200px) translateZ(650px) '
                });
                $('.face_4').css({
                    transform: 'rotateY(180deg) translateY(0px) translateZ(600px) '
                });
                $('.text_face_4').css({
                    transform: 'rotateY(180deg) translateY(0px) translateZ(650px) '
                });
                $('.face_5').css({
                    transform: 'rotateY(240deg) translateY(-200px) translateZ(600px) '
                });
                $('.text_face_5').css({
                    transform: 'rotateY(240deg) translateY(-200px) translateZ(650px) '
                });
                $('.face_6').css({
                    transform: 'rotateY(300deg) translateY(-200px) translateZ(600px) '
                });
                $('.text_face_6').css({
                    transform: 'rotateY(300deg) translateY(-200px) translateZ(650px) '
                });
            }else if(box_index>2 && box_index<6){
                $('.face_1').css({
                    transform: 'rotateY(0deg) translateY(-200px) translateZ(600px) '
                });
                $('.text_face_1').css({
                    transform: 'rotateY(0deg) translateY(-200px) translateZ(650px) '
                });
                $('.face_2').css({
                    transform: 'rotateY(60deg) translateY(0px) translateZ(600px) '
                });
                $('.text_face_2').css({
                    transform: 'rotateY(60deg) translateY(0px) translateZ(650px) '
                });
                $('.face_3').css({
                    transform: 'rotateY(120deg) translateY(200px) translateZ(600px) '
                });
                $('.text_face_3').css({
                    transform: 'rotateY(120deg) translateY(200px) translateZ(650px) '
                });
                $('.face_4').css({
                    transform: 'rotateY(180deg) translateY(200px) translateZ(600px) '
                });
                $('.text_face_4').css({
                    transform: 'rotateY(180deg) translateY(200px) translateZ(650px) '
                });
                $('.face_5').css({
                    transform: 'rotateY(240deg) translateY(0px) translateZ(600px) '
                });
                $('.text_face_5').css({
                    transform: 'rotateY(240deg) translateY(0px) translateZ(650px) '
                });
                $('.face_6').css({
                    transform: 'rotateY(300deg) translateY(-200px) translateZ(600px) '
                });
                $('.text_face_6').css({
                    transform: 'rotateY(300deg) translateY(-200px) translateZ(650px) '
                });
            }
            else if(box_index>4 && box_index<8){
                $('.face_1').css({
                    transform: 'rotateY(0deg) translateY(-200px) translateZ(600px) '
                });
                $('.text_face_1').css({
                    transform: 'rotateY(0deg) translateY(-200px) translateZ(650px) '
                });
                $('.face_2').css({
                    transform: 'rotateY(60deg) translateY(-200px) translateZ(600px) '
                });
                $('.text_face_2').css({
                    transform: 'rotateY(60deg) translateY(-200px) translateZ(650px) '
                });
                $('.face_3').css({
                    transform: 'rotateY(120deg) translateY(0px) translateZ(600px) '
                });
                $('.text_face_3').css({
                    transform: 'rotateY(120deg) translateY(0px) translateZ(650px) '
                });
                $('.face_4').css({
                    transform: 'rotateY(180deg) translateY(200px) translateZ(600px) '
                });
                $('.text_face_4').css({
                    transform: 'rotateY(180deg) translateY(200px) translateZ(650px) '
                });
                $('.face_5').css({
                    transform: 'rotateY(240deg) translateY(200px) translateZ(600px) '
                });
                $('.text_face_5').css({
                    transform: 'rotateY(240deg) translateY(200px) translateZ(650px) '
                });
                $('.face_6').css({
                    transform: 'rotateY(300deg) translateY(0px) translateZ(600px) '
                });
                $('.text_face_6').css({
                    transform: 'rotateY(300deg) translateY(0px) translateZ(650px) '
                });
            }
            else if(box_index>7 && box_index<11){
                $('.face_1').css({
                    transform: 'rotateY(0deg) translateY(0px) translateZ(600px) '
                });
                $('.text_face_1').css({
                    transform: 'rotateY(0deg) translateY(0px) translateZ(650px) '
                });
                $('.face_2').css({
                    transform: 'rotateY(60deg) translateY(-200px) translateZ(600px) '
                });
                $('.text_face_2').css({
                    transform: 'rotateY(60deg) translateY(-200px) translateZ(650px) '
                });
                $('.face_3').css({
                    transform: 'rotateY(120deg) translateY(-200px) translateZ(600px) '
                });
                $('.text_face_3').css({
                    transform: 'rotateY(120deg) translateY(-200px) translateZ(650px) '
                });
                $('.face_4').css({
                    transform: 'rotateY(180deg) translateY(0px) translateZ(600px) '
                });
                $('.text_face_4').css({
                    transform: 'rotateY(180deg) translateY(0px) translateZ(650px) '
                });
                $('.face_5').css({
                    transform: 'rotateY(240deg) translateY(200px) translateZ(600px) '
                });
                $('.text_face_5').css({
                    transform: 'rotateY(240deg) translateY(200px) translateZ(650px) '
                });
                $('.face_6').css({
                    transform: 'rotateY(300deg) translateY(200px) translateZ(600px) '
                });
                $('.text_face_6').css({
                    transform: 'rotateY(300deg) translateY(200px) translateZ(650px) '
                });
            }
            else if(box_index>10 && box_index<14){
                $('.face_1').css({
                    transform: 'rotateY(0deg) translateY(200px) translateZ(600px) '
                });
                $('.text_face_1').css({
                    transform: 'rotateY(0deg) translateY(200px) translateZ(650px) '
                });
                $('.face_2').css({
                    transform: 'rotateY(60deg) translateY(0px) translateZ(600px) '
                });
                $('.text_face_2').css({
                    transform: 'rotateY(60deg) translateY(0px) translateZ(650px) '
                });
                $('.face_3').css({
                    transform: 'rotateY(120deg) translateY(-200px) translateZ(600px) '
                });
                $('.text_face_3').css({
                    transform: 'rotateY(120deg) translateY(-200px) translateZ(650px) '
                });
                $('.face_4').css({
                    transform: 'rotateY(180deg) translateY(-200px) translateZ(600px) '
                });
                $('.text_face_4').css({
                    transform: 'rotateY(180deg) translateY(-200px) translateZ(650px) '
                });
                $('.face_5').css({
                    transform: 'rotateY(240deg) translateY(0px) translateZ(600px) '
                });
                $('.text_face_5').css({
                    transform: 'rotateY(240deg) translateY(0px) translateZ(650px) '
                });
                $('.face_6').css({
                    transform: 'rotateY(300deg) translateY(200px) translateZ(600px) '
                });
                $('.text_face_6').css({
                    transform: 'rotateY(300deg) translateY(200px) translateZ(650px) '
                });
            }
            else if(box_index>13 && box_index<17){
                $('.face_1').css({
                    transform: 'rotateY(0deg) translateY(200px) translateZ(600px) '
                });
                $('.text_face_1').css({
                    transform: 'rotateY(0deg) translateY(200px) translateZ(650px) '
                });
                $('.face_2').css({
                    transform: 'rotateY(60deg) translateY(200px) translateZ(600px) '
                });
                $('.text_face_2').css({
                    transform: 'rotateY(60deg) translateY(200px) translateZ(650px) '
                });
                $('.face_3').css({
                    transform: 'rotateY(120deg) translateY(0px) translateZ(600px) '
                });
                $('.text_face_3').css({
                    transform: 'rotateY(120deg) translateY(0px) translateZ(650px) '
                });
                $('.face_4').css({
                    transform: 'rotateY(180deg) translateY(-200px) translateZ(600px) '
                });
                $('.text_face_4').css({
                    transform: 'rotateY(180deg) translateY(-200px) translateZ(650px) '
                });
                $('.face_5').css({
                    transform: 'rotateY(240deg) translateY(-200px) translateZ(600px) '
                });
                $('.text_face_5').css({
                    transform: 'rotateY(240deg) translateY(-200px) translateZ(650px) '
                });
                $('.face_6').css({
                    transform: 'rotateY(300deg) translateY(0px) translateZ(600px) '
                });
                $('.text_face_6').css({
                    transform: 'rotateY(300deg) translateY(0px) translateZ(650px) '
                });
            }else if(box_index>17){
                $('.face_1').css({
                    transform: 'rotateY(0deg) translateY(0px) translateZ(600px) '
                });
                $('.text_face_1').css({
                    transform: 'rotateY(0deg) translateY(0px) translateZ(650px) '
                });
                $('.face_2').css({
                    transform: 'rotateY(60deg) translateY(200px) translateZ(600px) '
                });
                $('.text_face_2').css({
                    transform: 'rotateY(60deg) translateY(200px) translateZ(650px) '
                });
                $('.face_3').css({
                    transform: 'rotateY(120deg) translateY(200px) translateZ(600px) '
                });
                $('.text_face_3').css({
                    transform: 'rotateY(120deg) translateY(200px) translateZ(650px) '
                });
                $('.face_4').css({
                    transform: 'rotateY(180deg) translateY(0px) translateZ(600px) '
                });
                $('.text_face_4').css({
                    transform: 'rotateY(180deg) translateY(0px) translateZ(650px) '
                });
                $('.face_5').css({
                    transform: 'rotateY(240deg) translateY(-200px) translateZ(600px) '
                });
                $('.text_face_5').css({
                    transform: 'rotateY(240deg) translateY(-200px) translateZ(650px) '
                });
                $('.face_6').css({
                    transform: 'rotateY(300deg) translateY(-200px) translateZ(600px) '
                });
                $('.text_face_6').css({
                    transform: 'rotateY(300deg) translateY(-200px) translateZ(650px) '
                });
            }
            before_time = now_time;
        }
        $(window).on('mousewheel', function (event) {
            event.preventDefault();
            $('#rotation,#text_rotation').clearQueue();
            now_time = new Date().getTime();
            if (0 > event.originalEvent.wheelDeltaY) {
                if (direction == 'down') {
                    if (before_time + 100 < now_time) {
                        if (box_index >= 0) {
                            wrap_scroll_down();
                        } else {
                            wrap_scroll_up();
                        }
                    }
                } else {
                    if (box_index >= 0) {
                        wrap_scroll_down();
                    } else {
                        wrap_scroll_up();
                    }
                }
            } else {
                if (direction == 'up') {
                    if (before_time + 100 < now_time) {
                        if (box_index <= 18) {
                            wrap_scroll_up();
                        } else {
                            wrap_scroll_down();
                        }
                    }
                } else {
                    if (box_index < 19) {
                        wrap_scroll_up();
                    } else {
                        wrap_scroll_down();
                    }
                }
            }
        })
    // }
//     let ww=$(window).width();
//     if(ww>800){
//         com_pc();
//     }

// });//end