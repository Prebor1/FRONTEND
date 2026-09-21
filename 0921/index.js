function getTime() {
  let time = new Date();
 
  let h = (time.getHours() + "").padStart(2, "0");
  let m = (time.getMinutes() + "").padStart(2, "0");
  let s = (time.getSeconds() + "").padStart(2, "0");
  let ms = (time.getMilliseconds() + "").padStart(3, "0");
 
  document.getElementById("time").innerText =
    `A pontos idő: ${h}:${m}:${s}:${ms}`;
  setTimeout(getTime, 25);
}
 
getTime();

let i = 1;
function counter(){
    console.log(i);
    i++;
    if(i>10)
        return;
    setTimeout(counter, 1000)
}
counter();