
var currentSlide = 0;
var totalSlides = 13;  // todo update pre push

$(document).ready(function(){
	showSlide(0);

	for (var i = 1; i < totalSlides; i++){
		hideSlide(i);
	}
});

var plusSlides = function(i){
	hideSlide(currentSlide);

	var newSlide = (currentSlide + i) % totalSlides;
	if (currentSlide + i < 0)
	{
		newSlide = (currentSlide + totalSlides + i) % totalSlides;
	}
	
	showSlide(newSlide);	
	currentSlide = newSlide;
};

var showSlide = function(i){
	var id = '#image-' + i;
	$(id).show();
};

var hideSlide = function(i){
	var id = '#image-' + i;
	$(id).hide();
};