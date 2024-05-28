
const markBtn = document.getElementById("mark")

const allNewUpdates = document.querySelectorAll(".new-notification")
const newUpdatesDots = document.querySelectorAll(".new-note-update")

const notificationCount =  document.getElementById("total-notification")

markBtn.addEventListener("click", ()=>{
    for(let i=0; i<allNewUpdates.length; i++){
        allNewUpdates[i].classList.add("hidden")
        newUpdatesDots[i].style.display = 'none'
    }

    notificationCount.innerHTML = ''
    notificationCount.style.backgroundColor = '';
})