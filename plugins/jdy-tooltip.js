(function($){
  
  $.fn.jdy_tooltip = function(options){
	  
    //Set the option
    var settings = $.extend({
      color : "#000",
	  backgroundcolor : '#000',
	  someoption : 10,
      anotherOption: "string option"
    },options);
	
    // Start your custom code
    return this.each(function(){
         
      var $this = $(this)
	  
	  $(this).hover(function(e) {
			
		  $(this).append('<span class="jdy_tooltip"></span>');
		  
		  var url = $(this).attr('href');
		  
		  $.get(url, function(result){
			  
			  var title = $(result).filter('meta[property="og:title"]').attr('content');
			  var description = $(result).filter('meta[property="og:description"]').attr('content');
			  var img = $(result).filter('meta[property="og:image"]').attr('content');
			  
			  //var html ='<img src="'+img+'"/>'
			  var html= '<p class="img"><img src="'+img+'"/></p>'
			  html += '<h1>'+title+'</h1>'
			  html += '<p class="result_content">'+description+'</p>'
			  
			  //$('.jdy_tooltip').html(html);	
			  $('.jdy_tooltip', $this).html(html);	
			  
		  });
		  
		  var Y = e.pageY
		  var X = e.pageX 
		 
		  $('.jdy_tooltip').css({
			  'top' : e.pageY + 10,
			  'left' : e.pageX + 10
		  });
		  
		  // Create callback function when the feed is completely loaded
		  if($.isFunction(settings.complete)){
			  settings.complete.apply($this);
		  }	
		  
	  }, function(){
		  $('.jdy_tooltip').remove();
	  });
	  
	  console.log(settings.someoption)
               
    });
  }    
 
})(jQuery);