$(function(){
	var mCount  = $ ('.m-count'),
		floorNumber = $('.floor-number'),
		typeOfHouse = $('input[name="typeOfHouse"]').val(),
		project = $('input[type="checkbox"]'),
		price = $('#price'),
		summ = 900000,
		basePrice = 30000,
		design = 0;//7
		finalPrice = 900000;
	mCount.change(function(){
		
		if($(this).val()>20){
			$(this).tooltip('destroy');
			calculate();			
		} else {
			$(this).tooltip('toggle');
		}
	});
	
	floorNumber.change(function(){
		calculate();
	});
	
	$('input[name="typeOfHouse"]').change(function(){
		typeOfHouse = $(this).val();
			calculate();
		if($(this).val() == 1){
			$('img').attr('src','img/1.jpg');
		} else {
			$('img').attr('src','img/2.png');
		}
	});
	
	project.change(function(){
		if ($(this).is(':checked')){
			design = 15000;
			calculate();
		} else {
			design = 0;
			calculate();
		}
	});
	
	function calculate(){
	finalPrice = (+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse + design;
	price.text(finalPrice);
}

});





