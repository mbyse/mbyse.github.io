
//sets initial visible tab
$(function () {
    $('#nav a:first').tab('show')
  })
  
//tab toggling
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})

//sets pdf viewer height
$(function pdfH() {
	var wH = $(window).height();
	
	var pdfH = wH-100;
	
	$('#pdf').css({height: pdfH});
	$('#top').css({height: pdfH});
	
})


/*//panel height style
// Getter
var heightStyle = $( ".selector" ).tabs( "option", "heightStyle" );
 
// Setter
$( ".selector" ).tabs( "option", "heightStyle", "fill" );
*/

/*
//modal
var modal = document.getElementById('resumeModal');
var btn = document.getElementById("resume");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
	modal.style.display = "block";
}
span.onclick = function() {
	modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/