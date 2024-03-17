function shirtBtn(){
    // document.getElementById('Products').innerHTML = '';
    document.getElementById('featured-products').innerHTML = '';

    var elms = document.querySelectorAll("[id='shirt']");
    
    for(var i = 0; i < elms.length; i++){
        document.getElementById('Products').innerHTML = elms[i].style.display;
    } 
}

// TODO