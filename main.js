jQuery(function($){

jdy_tooltip();
	   console.log(1)  
	
	function jdy_tooltip(){
		
		$('.my_tooltip').jdy_tooltip({
			color : '#000',
			complete : function(){
				console.log($(this).text());
				alert('success');
			}
		});
		 
	}
	
});