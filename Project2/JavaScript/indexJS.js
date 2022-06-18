/* index.html 자바스크립트 부분 */

/* 페이지 실행 시 호출 되는 함수 */
function init() {

    /* 시간,요일별 백그라운드 변경 부분 */
    let videoName = "";
    let today = new Date();
    let hours = today.getHours();
    let day = today.getDay();
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
            
            // 시간대가 3시~ 19시 까지 일떄
            else if(hours >= 15 && hours <= 19){
                videoName = "Media/index_road.mp4";
            }
            
            // 시간대가 20시 ~ 아침 6시 일때
            else{
                videoName = "Media/index_night.mp4";
            }
        }
        document.getElementById("bg-video").src = videoName;

    // 버튼 출력 부분
    let button = document.getElementById("button");
    button.addEventListener("click",function(){
        alert("아래 페이지 부분은 미완성 됐습니다.");
    });

}