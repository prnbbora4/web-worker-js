let btnOne = document.getElementById("btn1");
btnOne.addEventListener("click", function () {

  // Create a new worker
  const webWorker = new Worker("worker.js");
  webWorker.postMessage("Hello from main thread");
  webWorker.onmessage = function (e) {
    document.getElementById("output").innerHTML = e.data;
  }

  //default is complex calculation
  // let result = 0;
  // for (let i = 0; i < 1000000000; i++) {
  //   result += i;
  // }
  // document.getElementById("output").innerHTML = result;
});


let btnTwo = document.getElementById("btn2");
btnTwo.addEventListener("click", function () {
  document.getElementById("hi").innerHTML += "Hii...";
});