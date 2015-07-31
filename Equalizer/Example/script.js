var numOfCol = 10;
$(document).ready(function(){
	var origin = parseFloat($('input').first().val());
	$('input').first().change(function(){
		var increment = parseFloat($('input').first().val()) - origin;
		console.log(increment);
		$('.dependence input').each(function(index){
			var current = parseFloat($(this).val());
			var newVal = current + increment;
			$(this).val(newVal);
		});
		origin = parseFloat($('input').first().val());
	});

	$('input').on('focusin', function(){
	    var origin = parseFloat($(this).data('val', $(this).val()));
	});

	$('.dependence input').change(function(){
		console.log(origin);
		var increment =  (parseFloat($(this).val()) - origin)/(numOfCol-1);
		$('.dependence input').not(this).each(function(){
			var current = parseFloat($(this).val());
			var newVal = current + increment;
			$(this).val(newVal);
		});
	});
});