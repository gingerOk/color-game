let numSquers = 6;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let colors = generateRandomColors(6);
let pickedColor = pickColor();


            for(let i =0; i< modeButtons.length; i++){
                modeButtons[i].addEventListener("click", function(){
                    modeButtons[0].classList.remove("selected");
                    modeButtons[1].classList.remove("selected");
                    this.classList.add("selected");
                    if(this.textContent === "Easy") {
                        numSquers = 3;
                    } else {
                        numSquers = 6;
                    }
                    reset();
                })
            }

            function reset(){
                colors = generateRandomColors(numSquers);
                pickedColor = pickColor();
                colorDisplay.textContent = pickedColor;
                resetButton.textContent = "New Colors";
                messageDisplay.textContent = "";
                for(let i = 0; i < squares.length; i++) {
                    if(colors[i]){
                        squares[i].style.display= "block";
                    squares[i].style.background = colors[i];
                } else {
                    squares[i].style.display =  "none";
                }
            h1.style.background = "orange";
            }
            }


            resetButton.addEventListener('click', function() {
                reset();
            })
            colorDisplay.textContent = pickedColor;

            for(let i = 0; i<squares.length; i++) {
                squares[i].style.background = colors[i];
                squares[i].addEventListener("click", function() {
                let clickedColor = this.style.background;
                if(clickedColor === pickedColor){
                    messageDisplay.textContent = "Correct!";
                    changeColors(clickedColor);
                    h1.style.background = clickedColor;
                    resetButton.textContent = "Play Again?";
                } else {
                    this.style.background = "#232323";
                    messageDisplay.textContent = "Try Again";
                }
                })
            }
            function changeColors(color) {
                for(let i= 0; i < colors.length; i++) {
                    squares[i].style.background = color;
                }
            }

            function pickColor() {
                let random = Math.floor(Math.random() * colors.length);
                return colors[random];
            }

            function generateRandomColors(num) {
                let arr = [];
                for(let i=0; i < num; i++) {
                    arr.push(randomColor());
                }
                return arr;
            }
      
            function randomColor() {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                return "rgb(" + r + ", " + g + ", " + b + ")";
            }
