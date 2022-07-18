// const btn = document.createElement('button');
// const body = document.querySelector('body');
// btn.style.color = "blue";
// body.insertBefore(btn, container);

const container = document.querySelector('.container');
// const btn = document.createElement('button');
// btn.style.color = 'teal';
// container.insertBefore(btn, square);
function createSquares(number) {
    while (document.querySelector("button") !== null) {
      document.querySelector("button").remove();
  }
    
    container.style.overflow = "hidden";
    // container.style.width = "960px";
    const total = (number * number) + number;
    const mod = number + 1;
   // yes using grid would be a lot earlier, but one must flex one's flexbox's skills
    for (let i = 1; i < total; i++) {
      const square = document.createElement('div');
      container.appendChild(square).className = 'boxes';
     
      if (i % mod === 0) {
        square.style.cssText = "border: 0; height: 0; width: 100%";
      } else {
        square.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
        square.addEventListener('mousemove', () => {
          square.style.backgroundColor = 'blue';
        })
      }
      }
      createButton()
  }
  
  
  // function getRandomColor() {
  //   let o = Math.round;
  //   let r = Math.random;
  //   let s = 255;
  //   return "rgb(" + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
  // }



  function createButton() {
    const buttonDiv = document.querySelector(".buttonDiv");
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Grid!";
    resetButton.style.margin = "12px";
    buttonDiv.appendChild(resetButton);



    resetButton.addEventListener('click', () => {
      document.querySelectorAll('.boxes').forEach(e => e.remove())
 
      let userGridInput = parseInt(prompt("Please enter the number of grid squares per side (Max: 100): "));
      if (userGridInput > 100) {
          alert("ERROR!  You specified a grid size larger than the max of 100.");
          return;
      }
     
      createSquares(userGridInput);
      
     })
  }




createSquares(16);





// alternatively  
// const cdiv = document.querySelector('.container');

// // Add 16 divs
// for (let i = 0; i < 272; i++) {
//   const div = document.createElement('div');

//   cdiv.appendChild(div);
// }