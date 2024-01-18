var visible=false;
function mostrar(){
 var videoyt=document.getElementById("yt")


 if (visible){

    videoyt.style.display="none";
    visible=false;
}


else {

    videoyt.style.display="block";
    visible=true;
}

}