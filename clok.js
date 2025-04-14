function clock() {
    let time = new Date();
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();
    let currentTime =` ${hours}:${minutes}:${seconds}`; // qui ci sono le backticks
    console.log(currentTime);
    return currentTime;
  }
  
  let newH2 = document.createElement("h2");
  document.body.appendChild(newH2).textContent = clock();
  document.querySelector("h2").style.color = "blue";
  
  function updateClock() {
    let h2 = document.querySelector("h2");
    h2.innerText = clock();
  }
  setInterval(updateClock, 1000); 