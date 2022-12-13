function uploadImg()
{
    //website used for this function are 
    //https://p5js.org/reference/#/p5/createFileInput
    //https://p5js.org/reference/#/p5.Element/parent
    
    //sets an icon and a name for the object
    this.icon = "assets/uploadImg.png";
	this.name = "uploadImg";
    
    //creates variable for image
    var img;
    //position of input button
    input = createFileInput(selectFile);
    
    this.draw = function()
    {
        //Makes cursor type default
        cursor();
        
        //sets image position and size to canvas
        if(img) 
        {
            image(img, 0, 0, width, height);
        }
    }

    //function for opening users File Explorer
    function selectFile(file) 
    {
        //checks if image is selected
        print(file);
        if (file.type === 'image') 
        {
            img = createImg(file.data);
            img.hide();
        }
        //if not do nothing
        else 
        {
            img = null;
        }
    }
    
    this.populateOptions = function() 
    {
        input.parent("box");
    }
    
    //when the tool is deselected update the pixels to just show the drawing and no buttons for that tool are visible 
    this.unselectTool = function()
    {
		//clear options
		select(".options").html("");
	};
}