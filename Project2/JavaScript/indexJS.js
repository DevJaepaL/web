/* index.html 자바스크립트 부분 */

/* 페이지 실행 시 호출 되는 함수 */
function init() {
    setInterval(Timer, 1000); // Timer 함수가 1초마다 실행 된다.
    let videoName = "";
    let today = new Date();
    let hours = today.getHours();
    let day = today.getDay();
    /* 시간,요일별 UI 변경 부분 */
    // 주말일 경우
    if(0 == day % 7 || 6 == day % 7 ) {
            videoName = "Media/index_weekend.mp4";
        }
    
    //평일일 경우
    else {
            // 시간대가 아침 7시 ~ 오후 2시까지 일때,
            if(hours >= 7 && hours <= 14){
                videoName = "Media/index_sun.mp4";
            }
            
            // 시간대가 오후 3시~ 19시 까지 일떄
            else if(hours >= 15 && hours <= 19){
                videoName = "Media/index_road.mp4";
            }
            
            // 시간대가 20시 ~ 아침 6시 일때
            else{
                videoName = "Media/index_night.mp4";

                let button = document.getElementById("button");
                button.style.filter = "brightness(-1%) invert(1)";

                button.addEventListener("mouseover", function(){
                    button.style.filter = "brightness(1) invert(0)";
                });
                button.addEventListener("mouseout", function(){
                    button.style.filter = "brightness(-1%) invert(1)";
                });

            }
        }
        document.getElementById("bg-video").src = videoName;

    // 버튼 출력 부분
    let button = document.getElementById("button");
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

/* 실시간 시계 출력 함수 */
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