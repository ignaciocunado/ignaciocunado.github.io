function changeadjectives() {
    const arr = ["Leader, Team-Worker and Methodical","Curious, Resilient and Enthusiastic"];
    var counter = 0;
    setInterval(change, 3000);
    function change() {
      document.getElementById("adjectives").innerHTML = arr[counter];
      counter++;
      if(counter >= arr.length) {
        counter = 0;
      }
    }
}

changeadjectives();

const button = document.getElementById('nextPhoto')
const sportImage = document.getElementById('bike')
const srcArr = ['images/acoruna.JPG', 'images/bikeacoruna.jpg', 'images/olias.JPG', 'images/ignaciobike.JPG']
let imageCounter = 0;
button.addEventListener('click',() => {
  console.log(imageCounter)
  sportImage.src = srcArr[imageCounter]
  imageCounter++;
  if(imageCounter >= srcArr.length) {
    imageCounter = 0
  }
})