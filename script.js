// Test 1:

window.onload = changeadjectives();

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