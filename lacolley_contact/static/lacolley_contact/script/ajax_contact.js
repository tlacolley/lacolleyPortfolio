

$(function(){
    var container_form = $('.contactForm')
    var contact_form = $('#contact-form')
    console.log(contact_form); // Valid
    // {% url 'contact_form' %}
  
    contact_form.on('submit', function(event){
      event.preventDefault();
  
  
      
      $.ajax({
          url : $(this).attr('action'),
          type : "POST", // http method
          data : $(this).serialize(), 
  
          // handle a successful response
          success : function(json) {
            var data = `
            
              <h3 class="text-center text-white py-5 mt-5 ">Your message was sent. </h3>
              <img class="w-75" src="static/lacolley_contact/img/thank-you-fallout.png" alt="fallout-boy thanks message">
             
            `
            // container_form.fadeOut(100);
            // container_form.html(data);
            // container_form.fadeIn(500);
  
            jQuery(container_form).fadeOut( 500 , function() {
              jQuery(this).html( data);
          }).fadeIn( 2000 );
  
  
  
          },
  
          // handle a non-successful response
          error : function(xhr,errmsg,err) {
              $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                  " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
              console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
          }
      });
     
  });
  
  
  
  
  
  
  })