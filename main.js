//*******************************************
// MAIN PROGRAM CONTROL
//*******************************************
function buildTree () {
// console.log("buildingTree");
//*******************************************

	var treeProperties = ["treeHeight", "treeCharacter"];
	var outputHeight = document.getElementById("treeHeight").value;
	var outputChar = document.getElementById("treeChar").value;
	// <treeHeight> and <treeCharacter> input by user

	//*******************************************
	// build the tree and 
	// ... display in the console. 
	//*******************************************
	var printSpaces; 
	var printTreeChars;
	var thisString = "";
	for (var i=0; i<outputHeight; i++) {
		// PRINT CHAR :: (2i) + 1
		// PRINT SPACES :: outputHeight - (i+1)
		printSpaces = outputHeight - (i+1); 
		printTreeChars = (2*i) + 1;

		// build this line
		for (var j=0; j<printSpaces; j++) {
			thisString += " ";
		}
		for (var k=0; k<printTreeChars; k++) {
			thisString += outputChar;
		}

		// output this line
		console.log(thisString);
		// clear the string for the next line
		thisString = "";
	}


//*******************************************
// If either of the input fields does not have a value in it 
// when the user presses the enter key, or presses the button, 
// then display an alert stating that both fields must have a value.
//*******************************************
}



//*******************************************
// define Event Listeners
//*******************************************
var enterHeight = document.getElementById("treeHeight");
var enterChar = document.getElementById("treeChar");
var growButton = document.getElementById("btnText");


//*******************************************
// Once the user enters in a number, and a character, 
// the user can either then just press the enter key 
// (as long as the cursor is in one of the input fields) ... 
//*******************************************

enterHeight.addEventListener("keyup", inputKeyUp);
enterChar.addEventListener("keyup", inputKeyUp);

function inputKeyUp(e) {
    e.which = e.which || e.keyCode;
// console.log("in function inputKeyUp");
    if (e.which === 13) {
    	buildTree();
        // mainLaunchEnter();
    } else {
    	return false;
    }
}

// NOT WORKING ???
// enterKey.addEventListener("keyup", function() { // from Justin
//     e.which = e.which || e.keyCode;			   // NOT TESTED ... BUT SHOULD WORK
// console.log("in <enterKey> eventHandler");
//     if (e.which === 13) {
//     	buildTree();
//         // mainLaunchEnter();
//     } else {
//     	return false;
//     }
// });


//*******************************************
// ... or click a button that is labeled "Grow your tree" 
// and the tree should be shown in the console. 
//*******************************************

growButton.addEventListener("click", buildTree);


// clearButton.addEventListener("click", clearAll);

function clearAll (clickEvent) {
	inputTemp = document.getElementById("temp").value = "";
	document.getElementById("cels").checked = false;
	document.getElementById("fahr").checked = false;
	document.getElementById("output").innerHTML = "";
}



