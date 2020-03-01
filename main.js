$(document).ready(function() {

});

var pageIdList = ["#resume", "#bio", "#skills", "#art"];



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
	hidePage("#art");

});

// Bio
$(document).on("click", "#bio", function(){
	hidePage("#resume");
	hidePage("#skills");
	showPage("#bio");
	hidePage("#art");

	if ($(window).width() >= 1000)
	{
		$("#image").css({"display": "inline-block"});
	} 
	else 
	{
		$("#image").css({"display": "none"});
	}
});


//  Resume
$(document).on("click", "#resume", function(){
	hidePage("#bio");
	hidePage("#skills");
	showPage("#resume");
	hidePage("#art");
	$("#image").css({"display": "none"});
});


// Skills
$(document).on("click", "#skills", function(){
	hidePage("#bio");
	hidePage("#resume");
	showPage("#skills");
	hidePage("#art");
	$("#image").css({"display": "none"});
});

// Art
$(document).on("click", "#art", function(){
	hidePage("#bio");
	hidePage("#resume");
	hidePage("#skills");
	showPage("#art");
	$("#image").css({"display": "none"});
});