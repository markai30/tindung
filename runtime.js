$('.button-element').click(function(){
	var $class = $(this).attr("class");
	console.log($class)
	if($class.indexOf("Register") > -1){
		var scrollDiv = document.getElementById("main-form").offsetTop;
	}
	if($class.indexOf("PACKAGE") > -1){
		var scrollDiv = document.getElementById("center-info").offsetTop;
	}
	if($class.indexOf("ADVANTAGES") > -1){
		var scrollDiv = document.getElementById("main-forte").offsetTop;
	}
	if($class.indexOf("PROCEDURE") > -1){
		var scrollDiv = document.getElementById("main-PROCEDURE").offsetTop;
	}
	if($class.indexOf("Question") > -1){
		var scrollDiv = document.getElementById("main-Quest").offsetTop;
	}
	if($class.indexOf("EVALUATE") > -1){
		var scrollDiv = document.getElementById("main-rate").offsetTop;
	}
	
	if(scrollDiv){
		window.scrollTo({ top: scrollDiv - 50, behavior: 'smooth'});
	}
	$('.popup-content').hide();
})

function closepop(e){
    var $box = $(e).closest(".popup-content").hide()
}

function popup($name){
	var $class = "popup-content " + $name;
	$('.popup-content').removeClass().addClass($class);
	$('.popup-content').show();
}

function callGoogleScript($param) {
  var url = "https://script.google.com/macros/s/AKfycbzAXSP6ywLFV2jmEgZ7dl2JuLuhrB5jMfalHf3L3i9k3iopk8Q/exec?callback=ctrlq&";
  var request = jQuery.ajax({
		crossDomain: true,
		url: url + $param,
		method: "GET",
		dataType: "jsonp"
  });
}

function ctrlq(e) {
	if(e.indexOf("Done Succsess") > -1){
		alert("Đã ghi nhận thông tin của bạn.\n\nChúng tôi sẽ sớm liên hệ ngay với bạn");
	}
	else{
		alert("Đã xảy ra lỗi khi ghi nhận thông tin của bạn.\n\nVui lòng thử liên hệ trực tiếp qua Zalo hoặc gọi ngay cho chúng tôi.");
	}
}

function numFormat($num){
	var x = 0;
	var n = 0;
	var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    var $j = $num.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&.');
	return $j;
}

$('.number-money').change(function(){
	var $val = $(this).val();
	var $test = $val.match(/\D+/g);
	if($test){
		alert("Vui lòng nhập số tiền không chứa ký tự hoặc chữ cái.");
	}
	else{
		var $number = numFormat(Number($val));
		$(this).val($number);
	}
})

$("form").submit(function(event){
  event.preventDefault();
	var $value = $(this).serialize();
	callGoogleScript($value)
});