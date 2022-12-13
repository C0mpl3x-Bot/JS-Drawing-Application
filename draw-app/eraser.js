function eraser()
{
    //websites used for eraser tool is
    //https://p5js.org/reference/#/p5/erase
    
    //sets an icon and a name for the object
    this.icon = "assets/eraser.jpg";
    this.name = "eraser";
    var size = "ellipse";
	this.draw = function()
    {
        //Makes cursor default
        cursor();
        
        loadPixels();
        //if the mouse is pressed
        if(mouseIsPressed) 
        {
            if(size == "ellipse")
            {
                //creates white circles to give erasing affect
                erase();
                noStroke();
                //only erases to where the mouse is with the size at 30
                ellipse(mouseX, mouseY, 30, 30);
                noErase();
            }
            else if(size == "bigellipse")
            {
                erase();
                //creates white circles to give erasing affect
                noStroke();
                //only erases to where the mouse is with the size at 45
                ellipse(mouseX, mouseY, 45, 45);
                noErase();
            }
            else if(size == "smallellipse")
            {
                erase();
                //creates white circles to give erasing affect
                noStroke();
                //only erases to where the mouse is with the size at 15
                ellipse(mouseX, mouseY, 15, 15);
                noErase();
            }
        }
    }
    
    this.populateOptions = function()
    {
        select(".options").html(
            "<button id='Decrease'>50% Decrease Size</button><button id='Default'>Default Size</button><button id='Increase'>50% Increase Size</button>");
        //click handler
        //if button 50% Decrease Size is clicked the ellipse size will decrease by 50% of the default size
        select("#Decrease").mousePressed(function()
        {
            size = "smallellipse"     
        });
        //if button Default Size is clicked the ellipse size will return to its original size
        select("#Default").mousePressed(function()
        {
            size = "ellipse"       
        });
        //if button 50% Increase Size is clicked the ellipse size will increase by 50% of the default size
        select("#Increase").mousePressed(function()
        {
            size = "bigellipse"       
        });
        
    };

    //when the tool is deselected update the pixels to just show the drawing and no buttons for that tool are visible 
	this.unselectTool = function()
    {
		updatePixels();
		//clear options
		select(".options").html("");
	};
}
