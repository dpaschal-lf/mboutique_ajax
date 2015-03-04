var pages={
    Welcome: 
        {pageUrl : 'home.html'},
    "Our Macarons" : 
        { pageUrl : 'macarons.html'},
    "Gifts & Parties" : 
        { pageUrl :'gifts-parties.html'},
    Contact : 
        { pageUrl : 'contact.html'}
};

$("document").ready(function(){

//do stuff when the document is ready!
    $(".main-nav li a").each(function(){
        //do something to each item found
        $(this).click(function(){

            var my_page = pages[$(this).text()];
            console.log(my_page);
            load_page(my_page.pageUrl);
        });

    });
    
});




function load_page(page_url){
    //load the indicated page into the #main_content section
    $.get(page_url,function(data){
        $("#main_content").html(data);
    });
    
}