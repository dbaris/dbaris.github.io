$(document).ready(function() {

});

var pageIdList = ["#resume", "#bio", "#skills"];



function showPage(pageId) {
	$(pageId).css({"background": "#EC9A29"});
	$(pageId + "Text").css({"display": "inline-block"});
}

function hidePage(pageId) {
	$(pageId).css({"background": "none"});
	$("button:hover").css({"background": "#EC9A29"});
	$(pageId + "Text").css({"display": "none"});

}

// Landing Page
$(document).on("click", "#name", function(){
	$("#image").css({"display": "inline-block"});
	hidePage("#bio");
	hidePage("#skills");
	hidePage("#resume");

});

// Bio
$(document).on("click", "#bio", function(){
	hidePage("#resume");
	hidePage("#skills");
	showPage("#bio");
	$("#image").css({"display": "inline-block"});
});


//  Resume
$(document).on("click", "#resume", function(){
	hidePage("#bio");
	hidePage("#skills");
	showPage("#resume");
	$("#image").css({"display": "none"});
});


// Skills
$(document).on("click", "#skills", function(){
	hidePage("#bio");
	hidePage("#resume");
	showPage("#skills");
	$("#image").css({"display": "none"});
});