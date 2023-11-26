
var x=document.getElementById("start-one");

x.onclick=(e)=>{
   
    e.preventDefault();
    
    var username=document.getElementById("username").value ;
    var nickname=document.getElementById("nickname").value;
    console.log(username,nickname.length);

    if(username.length>0 && nickname.length>0){
        localStorage.setItem('username',username);
        localStorage.setItem('nickname',nickname);
        window.location.href = './game.html';
    }
    else{
        alert('please fill the details');
        return;
    }
}