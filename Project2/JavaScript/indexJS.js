/* index.html 자바스크립트 부분 */

/* 메인화면에 나타나는 시계 출력해주는 함수부분 */
function Timer(){
    const timer = document.querySelector('.timer');
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    
    /*  삼항연산자를 통해 각 시,분,초가 10보다 작다면 앞에 0을 붙여서
        시계를 예쁘게 출력되게 설정. */
    timer.innerHTML = 
    `${hour<10 ? `0${hour}`:hour}:
    ${min<10 ? `0${min}`:min}:
    ${sec<10 ? `0${sec}`:sec}`
} 

/* 페이지 실행 시 호출 되는 함수 */
function init() {
    setInterval(Timer, 1000); // Timer 함수가 1초마다 실행 되게 해서 초마다 텍스트가 바뀌게 해줌.
    // init() 에서 사용할 지역 변수 선언
    const timer = document.querySelector('.timer');
    let videoName = "";
    let today = new Date();
    let hours = today.getHours();
    let day = today.getDay();
    let button = document.getElementById("button");
    let menubar = document.getElementsByClassName("main-menu");
    let menubarSelect = document.getElementsByClassName("menu-select");
    /* 시간,요일별 UI 변경 부분 */
    // 주말일 경우 시간대 관계없이 항상 출력.
    if(0 == day % 7 || 6 == day % 7 ) {
            videoName = "Media/index_weekend.mp4";
            timer.style.color = 'rgba(255, 187, 0, 0.9)';
            menubar[0].style.background = 'rgba(235, 182, 38, 0.25)';

            // Class 베열 index 크기 만큼 for문 반복
            for(let i = 0; i < menubarSelect.length ; i++){
                menubarSelect[i].backgroundColor = 'rgba(201, 218, 89, 0.1)';

                menubarSelect[i].addEventListener("mouseover", function(){
                    menubarSelect[i].style.backgroundColor = 'rgba(255, 187, 0, 0.893)';
                });

                menubarSelect[i].addEventListener("mouseout", function(){
                    menubarSelect[i].style.backgroundColor = 'rgba(0,0,0,0)';
                });
            }
        }
    
    //평일일 경우
    else {
            // 시간대가 아침 7시 ~ 오후 2시까지 일때 ( 아침 ~ 낮 )
            if(hours >= 7 && hours <= 15){
                videoName = "Media/index_sun.mp4";
                timer.style.color = 'rgba(106, 201, 184, 0.9)';
                menubar[0].style.background = 'rgba(106, 201, 184, 0.3)';

                for(let i = 0; i < menubarSelect.length ; i++){
                    menubarSelect[i].backgroundColor = 'rgba(106, 201, 184, 0.3)';
    
                    menubarSelect[i].addEventListener("mouseover", function(){
                        menubarSelect[i].style.backgroundColor = 'rgba(106, 201, 184, 0.9)';
                    });
    
                    menubarSelect[i].addEventListener("mouseout", function(){
                        menubarSelect[i].style.backgroundColor = 'rgba(0,0,0,0)';
                    });
                } 

                // 버튼 색상 변경
                button.style.filter = "brightness(0) invert(1)";

                button.addEventListener("mouseover", function(){
                    button.style.filter = "brightness(1) invert(0)";
                });
                button.addEventListener("mouseout", function(){
                    button.style.filter = "brightness(0) invert(1)";
                });
            }
            
            // 시간대가 오후 4시~ 19시 까지 일떄 ( 오후 ~ 초저녁 )
            else if(hours >= 16 && hours <= 19){
                videoName = "Media/index_road.mp4";
                timer.style.color = 'rgba(238, 176, 64, 0.9)';

                menubar[0].style.background = 'rgba(238, 197, 120, 0.75)';

                for(let i = 0; i < menubarSelect.length ; i++){
                    menubarSelect[i].backgroundColor = 'rgba(236, 176, 64, 0.5)';
    
                    menubarSelect[i].addEventListener("mouseover", function(){
                        menubarSelect[i].style.backgroundColor = 'rgba(236, 176, 64, 0.9)';
                    });
    
                    menubarSelect[i].addEventListener("mouseout", function(){
                        menubarSelect[i].style.backgroundColor = 'rgba(0,0,0,0)';
                    });
                } 

                button.style.filter = "brightness(0) invert(1)";

                button.addEventListener("mouseover", function(){
                    button.style.filter = "brightness(1) invert(0)";
                });
                button.addEventListener("mouseout", function(){
                    button.style.filter = "brightness(0) invert(1)";
                });

            }
            
            // 시간대가 20시 ~ 아침 6시 일때( 저녁 ~ 새벽 )
            else{
                videoName = "Media/index_night.mp4";
                timer.style.color = "rgb(199, 201, 205, 0.9)";
                menubar[0].style.background = "rgb(199, 201, 205, 0.3)";

                for(let i = 0; i < menubarSelect.length ; i++){
                    menubarSelect[i].backgroundColor = "rgb(199, 201, 205, 0.3)";
    
                    menubarSelect[i].addEventListener("mouseover", function(){
                        menubarSelect[i].style.backgroundColor = 'rgba(0, 0, 0, 1)';
                    });
    
                    menubarSelect[i].addEventListener("mouseout", function(){
                        menubarSelect[i].style.backgroundColor = 'rgba(0,0,0,0)';
                    });
                } 

                button.style.filter = "brightness(-10%) invert(50%)";

                button.addEventListener("mouseover", function(){
                    button.style.filter = "brightness(200%) invert(1)";
                });
                button.addEventListener("mouseout", function(){
                    button.style.filter = "brightness(-10%) invert(50%)";
                });

            }
        }
        document.getElementById("bg-video").src = videoName;

    // 버튼 클릭시 이벤트 생성
    button.addEventListener("click",function(){
        alert("아래 페이지는 미완성 됐습니다.");
    });
}

/* 휠 아래로 굴렸을 때 메세지 출력되는 함수. */
function wheelDown(e, obj){
    if(e.wheelDelta < 0){
        alert("아래 페이지는 미완성 됐습니다.");
    }
}