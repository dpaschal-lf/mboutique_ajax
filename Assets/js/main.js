$("document").ready(function(){

//do stuff when the document is ready!
    $(".main-nav li").each(function(){
        //do something to each item found
        $(this).click(function(){
            console.log("My url if ",$(this).attr('data-url'));
            load_page($(this).attr('data-url'));
        });
    });
});




function load_page(page_url){
    //load the indicated page into the #main_content section
    $.get(page_url,function(data){
        $("#main_content").html(data);
    });
    
}