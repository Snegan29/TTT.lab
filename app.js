
const result = document.getElementById("result")
const message = document.getElementById("message")

const btn = document.getElementById("button")

const box = document.getElementsByClassName("box")
let text = "X"
let count = 0

for( let i=0;i<box.length;i++){
        box[i].addEventListener("click", click)
}

function click(e){
    if(!e.target.innerText){
        count++
    text = text == "X"?"O":"X"
    e.target.innerHTML = `<h2>${text}</h2>`
    checkResult()
    }

}

function checkResult(){
    if(box[0].innerText+box[1].innerText+box[2].innerText=="XXX" ||
        box[3].innerText+box[4].innerText+box[5].innerText=="XXX" || 
        box[6].innerText+box[7].innerText+box[8].innerText=="XXX" || 
        box[0].innerText+box[3].innerText+box[6].innerText=="XXX" || 
        box[1].innerText+box[4].innerText+box[7].innerText=="XXX" || 
        box[2].innerText+box[5].innerText+box[8].innerText=="XXX" || 
        box[0].innerText+box[4].innerText+box[8].innerText=="XXX" ||
        box[2].innerText+box[4].innerText+box[6].innerText=="XXX"   ){ 

            showResult('😋X WON😋')

    }else if(box[0].innerText+box[1].innerText+box[2].innerText=="OOO" ||                
            box[3].innerText+box[4].innerText+box[5].innerText=="OOO" || 
            box[6].innerText+box[7].innerText+box[8].innerText=="OOO" || 
            box[0].innerText+box[3].innerText+box[6].innerText=="OOO" || 
            box[1].innerText+box[4].innerText+box[7].innerText=="OOO" || 
            box[2].innerText+box[5].innerText+box[8].innerText=="OOO" || 
            box[0].innerText+box[4].innerText+box[8].innerText=="OOO" ||
            box[2].innerText+box[4].innerText+box[6].innerText=="OOO" ){

            showResult('😁O Won😁')

    }else if(count == 9){
        showResult("😭DRAW😭")
    }

}

function showResult(char){
    message.innerText = `${char} `
    result.style.visibility = "visible"
}

btn.onclick = () => {
    location.reload()
}