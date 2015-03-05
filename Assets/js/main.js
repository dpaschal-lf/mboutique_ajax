var pages={
    Welcome: 
        {pageUrl : 'home.html', default:true},
    "Our Macarons" : 
        { pageUrl : 'macarons.html'},
    "Gifts & Parties" : 
        { pageUrl :'gifts-parties.html'},
    Contact : 
        { pageUrl : 'contact.html'}
};

$("document").ready(function(){

//do stuff when the document is ready!
/*$(".main-nav li a").each(function(){
        //do something to each item found
        $(this).click(function(){

            var my_page = pages[$(this).text()];
            console.log(my_page);
            load_page(my_page.pageUrl);
        });
    });*/
    create_menu();
});
/*<li data-url="home.html"><a >Welcome</a></li>*/
function create_menu(){
    var main_nav_ul = $(".main-nav ul");
    for(var index in pages){
        console.log("The index is "+index);
        var li = $("<li/>");
        var a = $("<a/>").text(index);
        (function(){
            var my_index = index;
            li.on("click","a",function(){
                var my_page = pages[my_index];
                load_page(my_page.pageUrl);
            });
        })();
        li.append(a);
        //a.appendTo(li);
        main_nav_ul.append(li);
        if(pages[index].default==true){
            load_page(pages[index].pageUrl);
        }
    }
}


function load_page(page_url){
    //load the indicated page into the #main_content section
    $.get(page_url,function(data){
        $("#main_content").html(data);
    });
    
}
console.log("we have stuff");
function validate_contact(){
    var contact_inputs = $("#contact_form input, #contact_form textarea");
    console.log(contact_inputs);
    $(contact_inputs).each(function(){
        var str='';
        var regex=null;
        var error_msg = '';
        switch($(this).attr('name')){
                case 'name':
                    var str = $(this).val();
                    var regex = /[a-zA-Z]{3,}/;
                    error_msg="Must be at least 3 characters long, no numbers or characters"
                    break;
        }
        if(str.match(regex)===null){
            alert($(this).attr('name')+":"+error_msg)
        }
    });
    
}





