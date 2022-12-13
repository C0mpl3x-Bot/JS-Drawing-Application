function editShape()
{
    //allows user to move the verticies, sets to true when edit button is pressed
    var editMode = false;
    //x and y coordinates are added to this array
    var currentShape = [];
    //assigns to canvas
    var c;

    //sets an icon and a name for the object
    this.icon = "assets/editShape.png";
	this.name = "editShape";
    
    //returns canvas element
    this.c = select('canvas');
    
    
    this.draw = function()
    {
        //changes curosr type
        cursor(CROSS);
        
        noFill();
        //gets pixel array from previous shape
        updatePixels();
        //if between the draw loop being called, the user presses the mouse button, mouseIsPressed is going to be true the next time the draw loop is called
        //goes to mousePressOnCanvas with the argument canvas
        if(mouseIsPressed && this.mousePressOnCanvas(select("canvas")))
        {
            //when editMode is false, this adds to the shape
            if(!editMode)
            {
                //adds the x and y coordinates - creates the shape
                currentShape.push(
                {
                        x: mouseX,
                        y: mouseY
                });
            }
            //when editMode is true, if mouse press is near a vertex it updates vertex location to current x and y
            else
            {
                //draws out the shape
                for(var i = 0; i < currentShape.length; i++)
                {
                        //if mouse x and y is near to currentShape x and y, then it updates that point
                        if(dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY) < 15)
                        {
                                currentShape[i].x = mouseX;
                                currentShape[i].y = mouseY;
                        }
                }
            }
        }
    
    //for each vertex, the for loop draws it
    beginShape();
    for(var i = 0; i < currentShape.length; i++)
    {
            vertex(currentShape[i].x, currentShape[i].y);
            //creates red circles to show where the vertex is
            if(editMode)
            {
                fill('red');
                ellipse(currentShape[i].x, currentShape[i].y, 10);
                noFill();
            }
    }
    endShape();
    }
    
    //detects if the mouse press is on the canvas or not
    this.mousePressOnCanvas =  function(canvas)
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
    
    //function to show buttons when editShape tool is pressed
    this.populateOptions = function()
    {
        select(".options").html(
            "<button id='EditButton'>Edit Shape</button> <button id='FinalButton'>Final Shape</button>");
        //click handler
        select("#EditButton").mouseClicked(function()
        {
            //if statement to toggle button between Edit Shape and Add Vertices
            if (editMode)
            {
                editMode = false;
                select("#EditButton").html("Edit Shape");
            }
            else
            {
                editMode = true;
                select("#EditButton").html("Add Vertices")
            }
        });
        
        //when mouse is pressed on the final button, this function is called
        select("#FinalButton").mousePressed(function()
        {
            //turns off editMode before we load pixels
            editMode = false;
            //redraws canvas without the red circles
            draw();
            //saves the canvas in its current state
            loadPixels();
            //clears the array
            currentShape = [];
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