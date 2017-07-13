

$(function() {
    var $plateBtn = $('#plateBtn');

    $plateBtn.click( function () {
        var numDom = document.getElementById('num');
        var numValue = parseInt(numDom.innerHTML);

        if ( numValue > 0 ) {

            var randomNum = getNumber(1, 10000);
            console.log(randomNum);

            if ( randomNum >= 1 && randomNum < 6000 ) {
                rotateFun( 0, 10 );
            } else if ( randomNum >= 6000 && randomNum < 8000 ) {
                rotateFun( 1, 320 );
            } else if ( randomNum >= 8000 && randomNum < 9000 ) {
                rotateFun( 2, 270 );
            } else if ( randomNum >= 9000 && randomNum < 9500 ) {
                rotateFun( 3, 220 );
            } else if ( randomNum >= 9500 && randomNum < 9800 ) {
                rotateFun( 4, 170 );
            } else if ( randomNum >= 9800 && randomNum < 9999 ) {
                rotateFun( 5, 110 );
            } else {
                rotateFun( 6, 70 );
            }

            //var result;
            //switch ( result ) {
            //    case 0:
            //        rotateFun( 0, 10 );
            //        break;
            //    case 1:
            //        rotateFun( 1, 320 );
            //        break;
            //    case 2:
            //        rotateFun( 2, 270 );
            //        break;
            //    case 3:
            //        rotateFun( 3, 220 );
            //        break;
            //    case 4:
            //        rotateFun( 4, 170 );
            //        break;
            //    case 5:
            //        rotateFun( 5, 110 );
            //        break;
            //    case 6:
            //        rotateFun( 6, 70 );
            //        break;
            //}


        } else {
            alert('好像没有抽奖机会了哦，分享试试！');
        }

        numValue --;
        $('#num').html(numValue);



    })

    /**
     * 获取一个范围内的随机整数
     * @param minNum 范围下限
     * @param maxNum 范围上线
     * @returns {Number} 返回一个随机整数
     */
    function getNumber(minNum, maxNum) {
        return Math.floor(Math.random()*(maxNum - minNum + 1) + minNum);
    }


    /**
     * 转盘指针转动函数
     * @param award 中奖序号
     * @param angle 旋转到的角度
     */
    function rotateFun(award, angle) {
        $plateBtn.stopRotate();
        $plateBtn.rotate({
            angle: 0,
            animateTo: angle + 1800,
            duration: 5000,
            callback: function () {
                // 根据中奖序号显示提示弹框
                switch ( award ) {
                    case 0:
                        $('#noprizeDiolog').css('display', 'block');
                        break;
                    case 1:
                        $('#prizeDiolog').css('display', 'block');
                        $('#prize').html('获得现金5元');
                        break;
                    case 2:
                        $('#prizeDiolog').css('display', 'block');
                        $('#prize').html('获得现金10元');
                        break;
                    case 3:
                        $('#prizeDiolog').css('display', 'block');
                        $('#prize').html('小米扫地机器人');
                        break;
                    case 4:
                        $('#prizeDiolog').css('display', 'block');
                        $('#prize').html('百搭衬衫');
                        break;
                    case 5:
                        $('#prizeDiolog').css('display', 'block');
                        $('#prize').html('男士套装');
                        break;
                    case 6:
                        $('#prizeDiolog').css('display', 'block');
                        $('#prize').html('获得iPhone7');
                        break;
                }
            }
        })
    }

    // 弹框注册点击事件
    $('#shareBtn').click(function () {
        $('#shareDiolog').css('display', 'block');
        $('#mask').css('display', 'block');
        $('#mask').bind('touchmove', function (e) {
            e.preventDefault();
        })
    });
    $('#shareCancel').click(function () {
        $('#shareDiolog').css('display', 'none');
        $('#mask').css('display', 'none');
    });
    $('#prizeCancel').click(function () {
        $('#noprizeDiolog').css('display', 'none');
    });
    $('#prizeBtn').click(function () {
        $('#getprizeDiolog').css('display', 'block');
        $('#prizeDiolog').css('display', 'none');
    });
    $('#surebtn').click(function () {
        $('#getprizeDiolog').css('display', 'none');
    });
    $('#abandon').click(function () {
        $('#getprizeDiolog').css('display', 'none');
    });


    // 获奖名单滚动
    autoScroll();
    function scrollFun() {
        $('#winnerList').find('ul').animate({
            marginTop: '-3rem'
        }, 500, function () {
            $(this).css({marginTop: '0rem'}).find('li:first').appendTo(this);
        })
    }
    function autoScroll(){
        setInterval(scrollFun, 1000);
    }



});



































