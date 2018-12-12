$( document ).ready(function() {
    console.log( "ready!" );
        
        $('#btn-animate').on('click',function() {
        
        $('#title').addClass('animated fadeOutUp');
       $('#btn-animate').addClass('animated fadeOutLeft');
    })

    
$("p").click(function(){
            $(this).hide();
        });




});