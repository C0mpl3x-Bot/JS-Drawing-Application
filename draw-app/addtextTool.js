function addtextTool()
{
    //websites used for this function
    //https://p5js.org/reference/#/p5/text
    //https://p5js.org/reference/#/p5/textSize
    //https://p5js.org/reference/#/p5/select
    //https://p5js.org/reference/#/p5/input
    
    //sets an icon and a name for the object
    this.icon = "assets/addtextTool.png";
	this.name = "addtextTool";
    
    //global variables
	var textS;
	var inputText;
	var inputSize;
	var textBox;
	var pMouseX;
	var pMouseY;
    var finalText;
    
    //save the current pixel Array
    loadPixels();
    
    this.draw = function()
    {
        //changes curosr type
        cursor('move');
        
        //user inputs text
        inputText = select("#InputText");
		inputText.input(function()
        {
			textBox = this.value();
		});
        
        //allows user to select size
		inputSize = select("#TextSize");
		inputSize.input(function()
        {
			textS = Number(this.value());
		});
        
        //update the screen with the saved pixels
        updatePixels();
        
        //if between the draw loop being called, the user presses the mouse button, mouseIsPressed is going to be true the next time the draw loop is called
        //goes to mousePressOnCanvas with the argument canvas
        if(mouseIsPressed && this.mousePressOnCanvas(select("canvas")))
        {
            //represents previous coordinates
			pMouseX = mouseX;
			pMouseY = mouseY;
			textSize(textS);
            //place text onto canvas using mouse
			text(textBox, pMouseX, pMouseY);
		}
        
        //enables text to stay on canvas and not disappear
		textSize(textS);
		text(textBox, pMouseX, pMouseY);
    }
    
     //detects if the mouse press is on the canvas or not
    this.mousePressOnCanvas = function(canvas)
    {
        if (mouseX > canvas.elt.offsetLeft && 
            mouseX < (canvas.elt.offsetLeft + canvas.width) && 
            mouseY < canvas.height &&
            mouseY > canvas.elt.offsetTop)
        {
            return true;
        }
        //won't do the drawing if false
        return false
    }
    
    //shows text tool options
    this.populateOptions = function()
    {
		select(".options").html(
			"<label for='TextSize'>Text Size:</label> <input type='number' value='16' id='TextSize'><br/> <label for='InputText'>Text:</label> <input type='text' id='InputText'><br/> <button id='FinishText'>Finish text</button>");
        
        //when mouse is pressed on the final button, this function is called
			finalText = select("#FinishText");
			finalText.mousePressed(function()
            {
                //saves canvas in its current state
				loadPixels();
			})
	};
    
    //when the tool is deselected update the pixels to just show the drawing and no buttons for that tool are visible 
	this.unselectTool = function()
    {
		updatePixels();
		//clear options
		select(".options").html("");
	};
}