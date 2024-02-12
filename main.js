//랜덤번호 지정 ((ok))
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름 ((ok))
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다. ((ok))
//랜덤번호가 < 유저번호 Down ((ok))
//랜덤번호가 > 유저번호 Up!! ((ok))
//Reset번호를 누르면 게임이 리셋된다. ((ok))
//5번의 기회를 다쓰면 게임이 끝난다. (더이상 추측  불가, 버튼이 disable) ((ok))
//유저가 1 ~ 100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다. ((ok))
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깍지 않는다. ((ok))

let computerNum = 0
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 5
let gameOver = false
let chanceArea = document.getElementById("chance-area")
let history = []

playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", function(){
    userInput.value=""
})

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 10) + 1
    console.log("정답", computerNum)
}

function play(){
    let userValue = userInput.value
    
    if(userValue < 1 || userValue > 10){
        resultArea.textContent = "1 과 10사이 숫자를 입력해봐."
        return
    }

    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자야. 다른 숫자를 입력해봐."
        return
    }
    chances --
    chanceArea.textContent= `남은기회는: ${chances}번이야`
    console.log("chance", chances)

    if(userValue < computerNum){
        resultArea.textContent = "입력한 숫자보다 커!"
    }else if(userValue > computerNum){
        resultArea.textContent = "입력한 숫자보다 작아!"
    }else{
        resultArea.textContent = "진구야 정답이야!!"
        gameOver = true
    }

    history.push(userValue)
    console.log(history)

    if(chances < 1){
        gameOver = true
    }

    if(gameOver == true){
        playButton.disabled = true
        if (userValue != computerNum) {
            resultArea.textContent = "5번 기회를 모두 사용했어. 정답은 " + computerNum + "이야!";
        }
        chanceArea.textContent= ""
    }
}

function reset(){
    // user input창이 깨끗하게 정리되고
    userInput.value = ""
    // 새로운 번호가 생성되고
    pickRandomNum()

    history = []

    resultArea.textContent = "진구야 할 수 있어 힘내!!!."
    gameOver = false
    playButton.disabled = false
    chances = 5;
    chanceArea.innerHTML = `남은 기회:${chances}`;
    userValueList = [];
    
    
}

pickRandomNum()
