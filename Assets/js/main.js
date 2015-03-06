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

//beginnings of an object for use with error validation
var input_validation = {
    name: 
        {regex: /[a-zA-Z]{3,}/,
         error_msg:"Must be at least 3 characters long, no numbers or characters"},
    email: 
        {regex: /[a-zA-Z]{3,}/,
         error_msg:"Must be at least 3 characters long, no numbers or characters"},
    phone: 
        {regex: /[a-zA-Z]{3,}/,
         error_msg:"Must be at least 3 characters long, no numbers or characters"},
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
function validate_contact(){
    var contact_inputs = $("#contact_form input, #contact_form textarea");
    console.log(contact_inputs);
    //keep track of how many errors there are
    var error_count = 0;
    $("#contact_form .error_msg").remove();
    $(contact_inputs).each(function(){
        var str='';
        var regex=null;
        var error_msg = '';
        //input_validation[$(this).attr('name')];  //beginnings of USING the object for input validation
        switch($(this).attr('name')){
                case 'name':
                    str = $(this).val();
                    regex = /[a-zA-Z]{3,}/;
                    error_msg="Must be at least 3 characters long, no numbers or characters";
                    break;
                case 'email':
                    str = $(this).val();
                    regex = null;
                    error_msg="";
                    break;
                case 'phone':
                    str = $(this).val();
                    regex = null;
                    error_msg="";
                    break;
                case 'subject':
                    str = $(this).val();
                    regex = null;
                    error_msg="";
                    break;
                case 'comments':
                    str = $(this).val();
                    regex = /.{3,250}/;
                    error_msg="Comments can only be between 3 and 250 characters";
                    break;
                default:
        }
        if(regex!==null){  //if there is a validation rule to check
            if(str.match(regex)===null){ //if there was a validation error
                //alert($(this).attr('name')+":"+error_msg); //send error message
                var error_div = $("<div/>").addClass('error_msg alert alert-danger alert-dismissible').text(error_msg);
                var close_button = $("<button/>",{type:'button',class:'close',"data-dismiss":'alert','aria-label':'Close'});
                var span = $("<span/>",{'aria-hidden':'true'}).html('&times;');
                close_button.append(span);
                error_div.append(close_button);
                                        
                error_div.insertAfter($(this));
                //$(this).parent().find('.error_msg').html(error_msg);
                error_count++;  //increase error count
            }
            
            
        }
    });
    console.log("error count " +error_count);
    if(error_count==0){  //if no errors
        send_message();   //trigger our form submission function
    }
    else {
        return false;  //return false, so that the form submit will fail
    }
    
}

function send_message(){  //dummy function for sending message
    console.log('to be continued...');
}




