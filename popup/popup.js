const btnNormal = document.querySelector("#buttonNormal")
const btnDark = document.querySelector("#buttonDark")
const btnColor = document.querySelector("#buttonColor")

let params ={
    active: true, 
    currentWindow: true
}

btnNormal.addEventListener("click", ()=>{
    chrome.tabs.query(params, (tabs)=>{
        chrome.tabs.sendMessage(tabs[0].id, "ja")
    })
})

btnDark.addEventListener("click", ()=>{
    chrome.tabs.query(params, (tabs)=>{
        chrome.tabs.sendMessage(tabs[0].id, "donker")
    })
})

btnColor.addEventListener("click", ()=>{
    chrome.tabs.query(params, (tabs)=>{
        chrome.tabs.sendMessage(tabs[0].id, "kleur")
    })
})

