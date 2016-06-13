$(document).ready(function() {
    $('#pull-me').click(function() {
        $('.panel').animate({width:'toggle'},350);
		$('#pull-me').hide();
    });
});
$('#close').click(function(){
	$('.panel').hide(300);
	$('#pull-me').show(301);
});