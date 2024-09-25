function start() {
    var girl = document.getElementById('gname').value;
    var boy = document.getElementById('bname').value;
    // remove space 
    var f="flames"
    var tgirl=girl.split(" ").join("");
    var tboy=boy.split(" ").join("");
    var common=0;
    var girlArray=tgirl.split("");
    var boyArray=tboy.split("");
    if (girl === "" || boy === "") {
        alert("Both names are required.");
        return false; // Prevent form submission
      }

    
    for(i=0;i<girlArray.length;i++){
        for (j=0;j<boyArray.length;j++){
            if(girlArray[i]==boyArray[j]){
                boyArray[j]="-";
                common++;
                break;

            }
        }
        
    }
    console.log(tgirl)
    var size=girlArray.length+boyArray.length;
    var count=size-(2*common);
    while(f.length>1){
        var remove=count%f.length;
        var s=remove-1;
        if(s>=0){
            var left=f.substring(0,s);
            var right=f.substring(s+1,f.length);
            f=right+""+left;
        }
        else{
            f=f.substring(0,f.length-1)
        }
    }
  
    console.log(count);
    console.log(f);
    
    result.innerHTML = "";
    result.innerHTML += "<h3>" + girl + "  &  " + boy + "</h3>";
    if(f=='f'){
        result.innerHTML += "<h4>FRIENDS</h4><br>";
        result.innerHTML +="  <div class=\"photo\"><div class=\"wrapper\"><div class=\"box\"><img src=\"images/friends/1.jpg\"></div></div></div>";
        
        result.innerHTML+="<h3>JUST FOR FUN LANG PO GUYS😄 </h3><br>";
        result.innerHTML+="<h4>Created by:  JOHN CAPIN. All Right Reserved</h4>";

    }
    else if(f=='l'){
        result.innerHTML += "<h4>LOVERS </h4><br>";
        result.innerHTML +="  <div class=\"photo\"><div class=\"wrapper\"><div class=\"box\"><img src=\"images/lovers/1.jpg\"></div> </div></div>";
        result.innerHTML+="<h3>JUST FOR FUN LANG PO GUYS😄 </h3><br>";
        result.innerHTML+="<h4>Created by:  JOHN CAPIN. All Rights Reserved</h4>";

    }
    else if(f=='a'){
        result.innerHTML += "<h4>AFFECTION </h4><br>";
        result.innerHTML +="  <div class=\"photo\"><div class=\"wrapper\"><div class=\"box\"><img src=\"images/affection/1.jpg\" ></div> </div>>/div>";
    
        result.innerHTML+="<h3>JUST FOR FUN LANG PO GUYS😄 </h3><br>";
        result.innerHTML+="<h4>Created by:  JOHN CAPIN. All Rights Reserved</h4>";

    }
    else if (f=='m') {
        result.innerHTML += "<h4>MARRIAGE</h4>";
        result.innerHTML +="  <div class=\"photo\"><div class=\"wrapper\"><div class=\"box\"><video  controls autoplay><source src=\"mp4/Marry Me.mp4\" type=\"video/mp4\"> Your browser does not support the video tag.</video></div><div class=\"box\"><img src=\"images/propose/99bb674e06863993a835eba6f78cba1d.jpg\"></div></div></div>";
        result.innerHTML+="<h3>JUST FOR FUN LANG PO GUYS😄</h3><br>";
        result.innerHTML+="<h4>Created by: JOHN CAPIN. All Rights Reserved</h4>";
      
      } 
    else if(f=='e'){
        result.innerHTML += "<h4>ENEMIES </h4><br>";
        result.innerHTML +="  <div class=\"photo\"><div class=\"wrapper\"><div class=\"box\"><img src=\"images/enemy/1.jpg\" ></div> </div></div>";
    
        result.innerHTML+="<h3>JUST FOR FUN LANG PO GUYS😄</h3><br>";
        result.innerHTML+="<h4>Created by: JOHN CAPIN. All Rights Reserved</h4>";
    }
    else  {
      
        result.innerHTML += "<h4>SIBLINGS</h4><br>";
        result.innerHTML +="  <div class=\"photo\"><div class=\"wrapper\"><div class=\"box\"><img src=\"images/siblings/1.jpg\" ></div> </div></div>";
    
        result.innerHTML+="<h3>JUST FOR FUN LANG PO GUYS😄</h3><br>";
        result.innerHTML+="<h4>Created by: JOHN CAPIN. All Rights Reserved</h4>";
    }
   
    document.getElementById('result').scrollIntoView();
    
    return false;
}