$(document).ready(function() {

});

var pageIdList = ["#resume", "#bio", "#skills"];

$(document).on("click", "#name", function(){
	$("#image").css({"display": "inline-block"});

	pageIdList.map(function(x) {
		$(x).css({"background": "none"});
    	// $(x + ":hover").css({"color": "#EC9A29"});
    	$(x + "Text").css({"display": "none"});
	})
});

function displayPage(pageId) {
    pageIdList.map(function(x) {
    	if (pageId == x) {
    		$(pageId).css({"background": "#EC9A29"});
    		$(pageId + "Text").css({"display": "inline-block"});
    	}
    	else {
    		$(x).css({"background": "none"});
    		// $(x + ":hover").css({"color": "#EC9A29"});
    		$(x + "Text").css({"display": "none"});
    	}
    });
}

// $('button').hover(function() {
// 	$(this).toggleClass('hovered');
// });

// Bio
$(document).on("click", "#bio", function(){
	displayPage("#bio");
	$("#image").css({"display": "inline-block"});
});


//  Resume
$(document).on("click", "#resume", function(){
	displayPage("#resume");
	$("#image").css({"display": "none"});
});


// Skills
$(document).on("click", "#skills", function(){
	displayPage("#skills");
	$("#image").css({"display": "none"});
});