$( document ).ready(function() {
    $("img#x-icon").click(modalOff);
});

function modalOn(imgSrc) {
    $("#modal").show();
    $("#modal-image").attr("src", imgSrc);    
}

function modalOff() {
    $("#modal").hide();
}
