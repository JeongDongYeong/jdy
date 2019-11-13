jQuery(function($){

jdy_tooltip(); 
	
	function jdy_tooltip(){
		
		$('.my_tooltip').jdy_tooltip({
			color : '#000',
			backgroundcolor : '#000',
			complete : function(){
				console.log($(this).text());
				//alert('success');
			}
		});
		 
	}
	
}); 