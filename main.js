//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
//랜덤번호가 < 유저번호 Down!!
//랜덤번호가 > 유저번호 Up!!
//Reset버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다쓰면 게임이 끝난다.(더이상 추측 불가, 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면, 아렬주다, 기회를 깍지 않는다.

let computerNum = 0

let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
// document는 웹사이트 그 자체, getElementById는 아이디를 통해 가져 오는 방식 중 하나
// getElementByClassName, qeurySelector : id, class 태그 등 다양한 방식으로 선택 가 능

playButton.addEventListener("click", play)
//addEventListener(이벤트 이름, 이벤트 발생시 실행함수)
//play()로 쓰지 않은 play라 씀 함수도 변수 처럼 넘길 수 있다.

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100) + 1
        //Math.random 함수는 0 ~ 1 까지의 숫자를 반환한다.
    console.log("정답", computerNum)
}

function play(){
    let userValue = userInput.value
    if(userValue < computerNum){
        resultArea.textContent = "UP!!!!"
    } else if(userValue > computerNum) {
        resultArea.textContent = "DOWN!!!"
    } else {
        resultArea.textContent = "맞췄습니다!!!"
    }
    console.log(userValue)
}

pickRandomNum()
