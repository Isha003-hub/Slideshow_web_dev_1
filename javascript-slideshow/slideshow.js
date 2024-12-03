var current = 0;
var total = 4;

function next(){

    console.log("next");
    console.log(current);

    current++;
    //When next is clicked. Increase“current” by one. Useconsole.log() check.
    if(current >= total)
    {
        current = 0;
    }

    //Create refrence to all the slide divs
    var slides = document.getElementsByClassName("slide");
    //Loop through the slides
    for (var i = 0; i< slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    //display the selected slides

    slides[current].style.display = "block";

}

function previous(){
    console.log("Previous");
    console.log(current);

    current--;

    if(current < 0)
    {
        current = total - 1;
    }

    var slides = document.getElementsByClassName("slide");
    for(var i=0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    slides[current].style.display = "block";
}