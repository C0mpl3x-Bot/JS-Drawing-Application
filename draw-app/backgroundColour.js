function backgroundColour()
{
    
    //website used for this function are
    //https://p5js.org/reference/#/p5/createColorPicker
    //https://p5js.org/reference/#/p5.Element/parent
    
    //sets an icon and a name for the object
    this.icon = "assets/backgroundColour.png";
    this.name = "backgroundColour";
    var colPic = createColorPicker("white");
    
    this.draw = function()
    {
        cursor();
    }
    
    //if colour slector button is pressed selected colour from the pop up colour pallet would show up on the canvas
    colPic.input(function()
    {
        //sets background of canvas as selected colour
        background(colPic.color());

    });
    
    //creates button when tool is selected
    this.populateOptions = function() 
    {
        colPic.parent("box");
    }
    
    //when the tool is deselected update the pixels to just show the drawing and no buttons for that tool are visible 
    this.unselectTool = function()
    {
		//clear options
		select(".options").html("");
	};
}
                    