;var pelorJs = pelorJs || {
	init:function(){
		alert('pelorJs init ran');
		$.ajax({
		  url: "/pelorJs/sample.json",
		  dataType: "json"
		}).success(function(data) {
		  console.log(data);
		});
	}
};
console.log('pelorJs loaded');
