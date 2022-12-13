function shapesTool()
{
    ////sets an icon and a name for the object
    this.icon = "assets/shapesTool.png";
	this.name = "shapes";
    
    var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    //sets shape as rect as default
    var shape = "rect";
	//draws the line to the screen 
	this.draw = function()
    {
        //changes curosr type
        cursor(CROSS);

		//only draw when mouse is clicked
		if(mouseIsPressed)
        {
            if(startMouseX == -1)
            {
                startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//save the current pixel Array
				loadPixels();
			}  

			else
            {
				//update the screen with the saved pixels to hide any previous
				//line between mouse pressed and released
				updatePixels();
                //default rect selection and allows button selection
                if(shape == "rect")
                {
                    //draws the rectangle
                    rect(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);
                }
                //if ellipse is selected
                else if(shape == "ellipse")
                {
                    //draws the ellipse
                    ellipse(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);
                }
                //if trangle is selected
                else if(shape =="triangle")
                {
                    //draws the triangle
                    triangle(startMouseX,startMouseY, mouseX, mouseY, mouseX - 150, mouseY)
                }
			}

		}

		else if(drawing)
        {
			//save the pixels with the most recent line and reset the
			//drawing bool and start locations
			loadPixels();
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
    
    //function to show buttons when editShape tool is pressed
    this.populateOptions = function()
    {
        select(".options").html(
            "<button id='DrawRect'>Draw Rectangle</button> <button id='DrawEllipse'>Draw Cicles</button> <button id='DrawTriangle'>Draw Triangle</button>");
        //click handler
        //rect is the deafult shape it draws if deselected by pressing another button you can press Draw Rectangle to start drawing rectangles again,you can draw them at any size you want
        select("#DrawRect").mouseClicked(function()
        {
            shape = "rect";   
        })
        //if Draw Cicles button is pressed it will start drawing ellipses, you can draw them at any size you want
        select("#DrawEllipse").mousePressed(function()
        {
            shape = "ellipse";
        });
        
        //if Draw Triangle button is pressed it will start drawing triangles, you can draw them at any size you want
        select("#DrawTriangle").mousePressed(function()
        {
            shape = "triangle";
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
