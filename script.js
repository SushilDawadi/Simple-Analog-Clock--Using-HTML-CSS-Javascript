const hourHand =document.querySelector('.hour');
const minuteHand =document.querySelector('.minute');
const secondHand =document.querySelector('.second');

setInterval(setClock,1000);

function setClock(){
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();


    const hourRotation = 30*hours + minutes/2;
    const minuteRotation = 6 * minutes;
    const secondRotation = 6 * seconds;

    secondHand.style.transform =`rotate(${secondRotation}deg)`;
    minuteHand.style.transform =`rotate(${minuteRotation}deg)`;
    hourHand.style.transform =`rotate(${hourRotation}deg)`;
}
setClock()