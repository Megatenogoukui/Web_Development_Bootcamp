var button = document.querySelector("button");
var friend = document.querySelector("#card h2")
var toggle = 0;
button.addEventListener("click" , () => {
   
    if (toggle === 0){
        friend.innerHTML = "FRIENDS"
        friend.style.color = "green"
        toggle = 1;
        button.innerHTML = "REMOVE FRIEND"
    }
    else{
        friend.innerHTML = "STANGER"
        friend.style.color = "red"
        toggle = 0;
        button.innerHTML = "ADD FRIEND"
    }
    
})
