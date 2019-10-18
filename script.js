 var list = 0
 function addMe() {
    if(list>6){
      document.getElementById("full").innerHTML = "the list is full";
    }
    else {
      var newlist = document.createElement("li");
      var newText=document.createTextNode(usershit.value);
      newlist.appendChild(newText);
      var position = document.getElementsByTagName("ol")[0];
      position.appendChild(newlist);
      list++;
      
    }
    
 }

function removeMe() {

var num = document.getElementById("usernumber").value;

var y = parseInt(num);

var getchild = document.getElementsByTagName("li")[y-1];

var getparent = getchild.parentNode;

getparent.removeChild(getchild);

list--;

document.getElementById("full").innerHTML = ""
}