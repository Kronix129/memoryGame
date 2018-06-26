var colors = [
	"rgb(255, 0, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 255)"
];
var colouredSquares = [
	{isColored: false, color:""},
	{isColored: false, color:""},
	{isColored: false, color:""},
	{isColored: false, color:""},
	{isColored: false, color:""},
	{isColored: false, color:""},
	{isColored: false, color:""},
	{isColored: false, color:""},
	{isColored: false, color:""},
	{isColored: false, color:""},
	{isColored: false, color:""},
	{isColored: false, color:""}
];
var squares = document.querySelectorAll(".square");
var firstPick = null;
var secondPick = null;
var correctCount = 0;
var score = document.querySelector("#score");
var space = document.querySelector("#space");
var restart = document.querySelector("#restart");

//color each square
//choose color in list
for(var i = 0; i < colors.length; i++){
	var j = 0;
	var squarePos;
	while(j < 2){
		//assign color to two random squares
		squarePos = Math.floor(Math.random() * 12);
		if(colouredSquares[squarePos].isColored === false){
			colouredSquares[squarePos].isColored = true;
			colouredSquares[squarePos].color = colors[i];
			squares[squarePos].style.backgroundColor = colors[i];
			j++;
		};

	};
};

//add the default layer to squares, hiding the underlying color
for(var i = 0; i < squares.length; i++){
	squares[i].classList.add("defaultSquare");
	squares[i].addEventListener("click", function(){
		this.classList.remove("defaultSquare");
		pickAssign(this);
		setTimeout(pickCompare, 1800);
	});
};


restart.addEventListener("click", function(){
	location.reload();
})


//when a square is clicked, it will reveal it's underlying color
function pickAssign(pickedSquare){
	if (firstPick === null){
		firstPick = pickedSquare;
	}else if(secondPick === null & pickedSquare !== firstPick){
		secondPick = pickedSquare;
	}else{
		
	};
};

function pickCompare(){
	if(firstPick !== null & secondPick !== null){
			if(firstPick.style.backgroundColor !== secondPick.style.backgroundColor){
				firstPick.classList.add("defaultSquare");
				secondPick.classList.add("defaultSquare");
				firstPick = null;
				secondPick = null;
			}else{
				correctCount++;
				score.textContent = correctCount;
				firstPick = null;
				secondPick = null;
				if (correctCount === 6){
					win();
				}
			}
		}	
	clearTimeout();
};


function win(){
	space.textContent = "Congratulations You Win!"
}









