$(function() {
	var arr_from_json;
	$('#testingHit').click(function() {
		//var data = $("#login_form :input").serializeArray();
		//alert('Handler for .submit() called.');
		//var url = "https://go.goyya.com/lilly/executes/insert_data.php";
		
		//$.post(url, {
			//phone_number: "1234567890",
			//weekday: "3",
			//hour: "05",
			//minute: "25",
			//language: "en",
			
		//},
				
		//function (data) {
			//arr_from_json = JSON.parse(data);
			//alert("This is it" + arr_from_json);
		//});
		
		$.ajax({
			type: "POST",
			url: "https://go.goyya.com/lilly/executes/change_data.php",
			data: {
			// phone_number: "09258907822",
			// weekday: "3",
			// hour: "04",
			// minute: "30",
			// language: "in"
			
			
			 phone_number: "$('input#mobile').val()",
			 weekday: " $('input#day').val(),",
			 hour: " $('input#tih').val(),",
			 minute: " $('input#tim').val(),",
			 language: "in"
			},
			
			success: function (data) {
			arr_from_json = JSON.parse(data);
				alert("Youur Reminder" + arr_from_json);
			},
			
			async: false
		});
		
	});
});