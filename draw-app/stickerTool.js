function stickerTool()
{
    this.name = "stickertool",
    this.icon = "assets/sticker.png",
    this.draw = function()
    {
        //Makes cursor type default
        cursor();
        
        if (keyIsPressed && keyCode === 49)
        {
            //when number key 1 is pressed it will draw a snowman face
            snowmanFace();
        }
        
        if (keyIsPressed && keyCode === 50)
        {
            //when number key 2 is pressed it will draw a default face
            defaultFace();
        }
        
        if (keyIsPressed && keyCode === 51)
        {
            //when number key 3 is pressed it will draw an angry square face
            angryFace();
        }
        
        if (keyIsPressed && keyCode === 52)
        {
            //when number key 4 is pressed it will draw cherries
            cherries();
        }
    };
    
    function snowmanFace()
    { 
        //code for the snowman face
        
        //head
        fill(255);
        stroke(0,0,0);
        ellipse(mouseX + 1, mouseY, 25, 25);
        
        //eyes
        fill(0);
        ellipse(mouseX - 5, mouseY - 4 , 4, 4);
        ellipse(mouseX + 7, mouseY - 4, 4, 4);
    
        //nose
        fill(255,69,0); 
        noStroke();
        triangle(mouseX, mouseY + 4, mouseX - 2, 
                 mouseY, mouseX + 3, mouseY);
        
        //mouth
        fill(255,0,0);
        ellipse(mouseX - 7, mouseY + 4, 2, 2)
        ellipse(mouseX - 4, mouseY + 6, 2, 2)
        ellipse(mouseX, mouseY + 7, 2, 2)
        ellipse(mouseX + 4, mouseY + 6, 2, 2)
        ellipse(mouseX + 7, mouseY + 4, 2, 2)
        
        //hat
        fill(0);
        stroke(255);
        rect(mouseX - 10, mouseY - 15, 22, 4);
        rect(mouseX - 5, mouseY - 22, 12, 7);
    }
    
    function defaultFace()
    {
        //code for the default face
        
        //head
        stroke(0,0,0);
        fill(190,76,232);
        ellipse(mouseX, mouseY,30,30);

        //mouth
        stroke(0,0,0)
        fill(120,120,50);
        line(mouseX - 15 ,mouseY + 5,mouseX + 14, mouseY+5);

        //eyes
        fill(0,0,0);
        //righteye
        ellipse(mouseX - 5,mouseY - 5,5,5);
        fill(0,0,0);
        //lefteye
        ellipse(mouseX + 5,mouseY - 5,5,5);
    }
    
    function angryFace()
    {
        //code for the angry face
        
        //enemy head
        strokeWeight(2);
        fill(25,25,112);
        rect(mouseX-20,mouseY-15, 40,30)

        //enemy eye
        fill(0,0,0);
        strokeWeight(2);
        ellipse(mouseX - 8, mouseY - 2, 8,8)
        ellipse(mouseX + 7, mouseY -2, 8,8)

        //eyebrows
        fill(0,0,0);
        stroke(0,0,0);
        strokeWeight(2);
        line(mouseX - 16,mouseY - 10,mouseX - 5,mouseY - 6)
        line(mouseX + 5,mouseY - 6,mouseX + 15,mouseY - 10)


        //enemy mouth
        noFill();
        stroke(0,0,0);
        strokeWeight(2)
        fill(25,25,112);
        beginShape();
        vertex(mouseX - 16, mouseY +12);
        vertex(mouseX - 12, mouseY + 5);
        vertex(mouseX - 8, mouseY + 12);
        vertex(mouseX - 4, mouseY + 5);
        vertex(mouseX, mouseY + 12);
        vertex(mouseX + 4, mouseY + 5);
        vertex(mouseX + 8, mouseY + 12);
        vertex(mouseX + 12, mouseY + 5);
        vertex(mouseX + 16, mouseY + 12);
        endShape();
    }
    
    function cherries()
    {
        //code for the cherry
        
        //cherry sapling
        stroke(160,82,45)
        line(mouseX - 15,mouseY + 20 ,mouseX,mouseY );
        line(mouseX,mouseY ,mouseX +15,mouseY + 20);

        //cherry
        stroke(220,20,60);
        fill(220,20,60);
        ellipse(mouseX -18,mouseY + 25, 20, 20);
        ellipse(mouseX + 18,mouseY + 25, 20, 20);
    }
    
    
    //shows text with the options you have for the function to work
    this.populateOptions = function()
    {
		select(".options").html("Press 1 for Snowman Face </br> Press 2 for Normal Face </br> Press 3 for Angry Face </br> Press 4 for Cherries.");
	};
    
    //when the tool is deselected update the pixels to just show the drawing and no text for that tool is visible
    this.unselectTool = function()
    {
		//clear options
		select(".options").html("");
	};
    
}