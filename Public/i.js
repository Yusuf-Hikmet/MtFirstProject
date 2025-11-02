const i = document.getElementById("Message");
const button = document.querySelector("button");
const myComboBox = document.getElementById("myComboBox");

const music = new Audio('muzik.mp3');
music.loop = true;
let m = false;

function Post(){
    fetch("http://localhost:3000", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            content: `${i.value}`,
            ServerType : myComboBox.selectedIndex
        })
     });
}
button.addEventListener("click", function() {
    if (m == false) {
        music.play();
        m = true;
        button.disabled = true;
        button.textContent = "$!#½$£%&/()=?^+*~#{}<>-_______";
        setTimeout(() => {
        Post();
        button.textContent = "Mesajı İlet";
        i.value = "";
        button.disabled = false;
     }, 3400);
    }else{
        Post();
     i.value = "";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.body.style.backgroundColor = "black";
    console.log("Loaded");
    alert(
`
Yusuf, Deniz Abi Korna Webhook paneline hoşgeldin!
`); 
});