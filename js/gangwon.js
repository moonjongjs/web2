(function($){

    var gangwon = {
        init: function(){
          this.header();
          this.section1();
          this.section2();
          this.footer();
        },
        header: function(){
            // 객체(Object) 형식의 이벤트
            $('.main-btn').on({
                  mouseenter: function(){
                    $('.sub').stop().fadeOut(0);
                    $(this).next().stop().fadeIn(300);
                
                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                  },
                  focusin: function(){
                    $('.sub').stop().fadeOut(0);
                    $(this).next().stop().fadeIn(300);
                
                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                  }
              });


              $('#nav').on({
                mouseleave:function(){
                  $('.sub').stop().fadeOut(300);
                  $('.main-btn').removeClass('on');
                }
              });
        },
        section1: function(){

              //메인슬라이드
              let cnt=0;
                
              //1. 메인슬라이드함수
              function mainSlide(){
                console.log('보이는 슬라이드', cnt);
                console.log('사라지는 슬라이드', cnt===0?2:cnt-1);
                $('.slide').css({zIndex:1}).animate({opacity:1},0);
                $('.slide').eq(cnt).css({zIndex:2});
                $('.slide').eq(cnt===0?2:cnt-1).css({zIndex:3}).animate({opacity:0},1000);
              }

              //2. 다음카운트함수
              function nextCount(){
                cnt++; //1 2 0 1 2 0 1 2 
                cnt>2?cnt=0:cnt;
                mainSlide();
              }

              //3. 자동타이머함수
              function autoTimer(){
                setInterval(nextCount,3000);
              }
              autoTimer();

        },
        section2: function(){


            //공지사항 & 갤러리 탭메뉴 클릭 이벤트
            // 갤러리버튼 클릭
            $('.gallery-btn').on({
              click: function(){  //마우스 클릭  그리고 키보드는 엔터(Enter)
                $('.notice-btn').addClass('on');
                $('.gallery-btn').addClass('on');
                $('.notice-box').addClass('on');
                $('.gallery-box').addClass('on');
              }
            });

            // 공지사항버튼 클릭
            $('.notice-btn').on({
                click: function(){
                  $('.notice-btn').removeClass('on');
                  $('.gallery-btn').removeClass('on');
                  $('.notice-box').removeClass('on');
                  $('.gallery-box').removeClass('on');
                }
            });


            // 레이어팝업창 
            $('.link-btn').on({
                click: function(){
                  $('#modal').stop().fadeIn(300);
                }
            });


            // 닫기
            $('.close-btn').on({
                click: function(){
                  $('#modal').stop().fadeOut(300);
                }
            });


        },
        footer: function(){

        }
    }
    gangwon.init();   //객체호출 그리고 시작 메서드 실행


})(jQuery);