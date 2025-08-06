//kullanıcı adını aldık
let userName = prompt("Adınızı girin:");

// HTML gönderdik
let greetingElement = document.querySelector("#myName");
greetingElement.innerHTML = userName;

//saat ve gün göstermeliyiz 
function showTime() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    
    const days = [
        "Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"
    ];
    let day = days[now.getDay()];

    let clockElement = document.querySelector("#myClock");
    clockElement.innerText = `${hours}:${minutes}:${seconds} - ${day}`;
    
}

// 4. Her saniye güncelle
setInterval(showTime, 1000);

showTime(); 