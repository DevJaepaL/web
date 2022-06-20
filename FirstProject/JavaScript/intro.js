/* intro.html 부분 JavaScript */

// intro.html 실행 시 로드 되는 함수
function init(){
    // 탑 스크롤 버튼 부분 변수 및 함수 선언
    scrollBtnTop = document.getElementById('scrollButtonTop');
    scrollBtnTop.addEventListener('click',function(){
    window.scrollTo(0,0);
    });

    // 바텀 스크롤 버튼 부분 변수 및 함수 선언
    scrollBtnBtm = document.getElementById('scrollButtonDown');
    scrollBtnBtm.addEventListener('click',function(){
    // window.scrollTo(0,document.body.scrollHeight);
    window.scrollBy(0,1000); // 한번에 밑으로 스크롤 하지 않고 y 좌표가 1000만큼 이동하게 변경.
    });

    // 다크모드 토글 부분 변수 및 함수 선언
    let introCSS = document.getElementById("blackLightMode");
    let darkToggle = document.getElementById("darkModeToggle"); 
    darkToggle.addEventListener("click",function(){
        if(introCSS){
            introCSS.href = ('CSS/introDarkMode.css');
        }
    });

    // 라이트모드 토글 부분 변수 및 함수 선언
    let lightToggle = document.getElementById("lightModeToggle");
    lightToggle.addEventListener("click",function(){
        if(introCSS){
            introCSS.href = ('CSS/intro.css');
        }
    });
}