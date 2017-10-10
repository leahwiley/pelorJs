;var pelorJs = pelorJs || {
	init:function(){
		alert('pelorJs init ran');
		$.ajax({
		  url: "/sample.json",
		  dataType: "json"
		}).success(function(data) {
		  console.log(data);
		});
	}
};
console.log('pelorJs loaded');
