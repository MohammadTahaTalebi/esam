function changeAll(x){

    // move slider
    move(x);
    
    // change tab
    changeTab(x);
    
    }
    function move(num){
    pos = -100*num;
    gal.style.left = pos + "%";	
    }
    
    function changeTab(num){
    for(i=0 ; i < lis.length ; i++){
        lis[i].className = "";
    }
    
    lis[num].className = "sel";	
    }
    
    var pos = 0;
    
    
    const lis = document.querySelectorAll("#slider > #but > li");
    
    var s = setInterval("go_right()",4000);
    
    slider.onmouseover = function(){
        clearInterval(s);
    }
    slider.onmouseout = function(){
         s = setInterval("go_right()",4000);
    }
    
    
    right.onclick = go_right;
    
    
    function go_right(){
    
        if(pos > -200){
            pos = pos - 100;
            gal.style.left = pos + "%";
        }
        else if(pos == -200){
            pos = 0;
            gal.style.left = pos + "%";	
        }
        
        
        let currentTabIndex = pos/-100;
        changeTab(currentTabIndex);
    }
    
    
    left.onclick = function(){
    
        if(pos < 0){
            pos = pos + 100;
            gal.style.left = pos + "%";
    
        }
        
        currentTabIndex = pos/-100;
        changeTab(currentTabIndex);
    }