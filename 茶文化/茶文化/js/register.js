 
/* @Author: Marte
* @Date:   2016-10-09 17:10:32
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-11 14:11:12
*/

/*$(document).ready(function(){
    
});
*/



  //表单验证
//失去焦点时进行验证、判断
//注册新用户按钮，鼠标单击时，获取所有的值，做基础的验证，例如阅读并同意前面的复选框是否选中，前面是否有空的内容。并alert输出。
//第一步：获取对象
//第二步：绑定事件
//第三步：写不同方法进行验证

var  userName = document.getElementById("userName");
var  userEmail = document.getElementById("userEmail");
var  password = document.getElementById("userPassword");
var rePassword = document.getElementById("rePassword");
var license = document.getElementById("license");
var btn = document.getElementById("registerBtn"); 

//验证用户名
userName.addEventListener("blur", checkUserName);

function checkUserName(){
var name= this.value.replace("/(^\s*)|(\s*$)/g","");
var message = document.getElementById("nameMsg");

//长度必须大于等于6个字符；不能为空；必须是字母和数字
if(name.length>=6){
    if(!checkNumStr(name)){
     message.innerHTML = "用户名只能输入字母和数字";
     message.style.display = "block"; 
    }else{
      message.innerHTML = "";
      message.style.display = "none";
    }
}else  if(name.length == 0){
      message.innerHTML = "用户名不能为空";
      message.style.display = "block";
}else{
      message.innerHTML = "长度必须大于等于6个字符";
       message.style.display = "block";
}

}


function checkNumStr(myStr)
{
      var numStr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      //遍历输入的字符串
      for ( var i=0; i<myStr.length;i++) {
         var onechar=myStr.substring(i,i+1);//获取每一个字符
         if (!(numStr.indexOf(onechar)!= -1)){//string对象的indexOf方法，判断这个字符在不在numStr中
               return false;  //不在numStr中，表示有非法字符，返回false
            }
       }
       return true;
}


//验证邮箱
userEmail.addEventListener("blur", checkUserEmail);
function checkUserEmail(){
  var email = this.value.replace("/(^\s*)|(\s*$)/g","");
  var message = document.getElementById("emailMsg");
  
  //邮箱地址要正确
 /* var  str =/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;*/
  if(email==""){
      message.innerHTML = "邮箱地址不能为空";
      message.style.display = "block";
          }else  if(!str.test(email)){
      message.innerHTML = "邮箱地址格式不正确";
      message.style.display = "block"; 
    }else{
       message.innerHTML = "";
      message.style.display = "none"; 
    }
}

//密码验证
password.addEventListener("blur", checkUserPassword);
function checkUserPassword(){
  var password= this.value.replace("/(^\s*)|(\s*$)/g","");
  var message = document.getElementById("pswMsg");
  //长度必须大于等于8个字符；不能为空；
  if(password.length<8)
  {
    if(password.length == 0){
     message.innerHTML = "密码不能为空";
     message.style.display = "block";
       }
       else{
        message.innerHTML = "密码长度要大于等于8";
        message.style.display = "block";
       }
  }else{
     message.innerHTML = "";
     message.style.display = "none";
  }
}

//确认密码验证，两次输入要一致
rePassword.addEventListener("blur", checkUserRePassword);
function checkUserRePassword(){
  var repassword= this.value.replace("/(^\s*)|(\s*$)/g","");
  var mypassword = password.value.replace("/(^\s*)|(\s*$)/g","");
  var message = document.getElementById("rePswMsg");

  if(mypassword == repassword){
     message.innerHTML = "";
     message.style.display = "none";
   }else{
     message.innerHTML = "两次密码不一致";
     message.style.display = "block";
   }
}

//鼠标单击提交按钮，验证“阅读并同意”是否选中？所有的内容都不能为空
btn.addEventListener("click", checkForm);
function checkForm(){
 var myname = userName.value.replace("/(^\s*)|(\s*$)/g","");
 var myemail = userEmail.value.replace("/(^\s*)|(\s*$)/g","");
 var mypassword = password.value.replace("/(^\s*)|(\s*$)/g","");
 var myrepassword = rePassword.value.replace("/(^\s*)|(\s*$)/g","");
 var flag = 1;

 if(myname.length == 0){
 document.getElementById("nameMsg").innerHTML = "用户名不能为空";
 document.getElementById("nameMsg").style.display = "block";
 flag = 0;
 }
 if(myemail.length == 0){
 document.getElementById("emailMsg").innerHTML = "邮箱不能为空";
 document.getElementById("emailMsg").style.display = "block";
  flag = 0;
 }
  if(mypassword.length == 0){
 document.getElementById("pswMsg").innerHTML = "密码不能为空";
 document.getElementById("pswMsg").style.display = "block";
  flag = 0;
 }
  if(myrepassword.length == 0){
 document.getElementById("rePswMsg").innerHTML = "确认密码不能为空";
 document.getElementById("rePswMsg").style.display = "block";
  flag = 0;
 }
 if(!license.checked){
    alert("请阅读用户协议");
    flag = 0;
 }
   
   if (flag == 1) {
    var str = "用户名："+myname+"\n" +"邮箱地址："+myemail+"\n"+"悄悄告诉我密码："+mypassword+"\n";
    alert(str);
   };

}

function login() {
    alert("登陆成功");
}