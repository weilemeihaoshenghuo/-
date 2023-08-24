 
/* @Author: Marte
* @Date:   2016-10-09 17:10:32
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-03 11:47:27
*/

/*$(document).ready(function(){
    
});
*/



  //banner动效

       var  sliderContent = document.getElementById('slider-content');
       var  sliderContentLi = sliderContent.getElementsByTagName('li');

       var  sliderNav = document.getElementById('slider-nav');
       var  sliderNavLi = sliderNav.getElementsByTagName('li');
       var x = 0;
 
window.onload =function(){
     window.setInterval(function(){change()}, 2000); 


    for(var i = 0; i < sliderNavLi.length; i++){
      sliderNavLi[i].index = i;
      sliderNavLi[i].onmouseover = function(){
      
        for(var i = 0; i <sliderNavLi.length; i++){
          /*sliderNavLi[i].className = '';*/
        sliderNavLi[i].removeAttribute("class") ;
        }
      /* this.className = 'on';*/
       this.setAttribute("class","on");
  
        for(var i = 0; i < sliderContentLi.length; i++){
          sliderContentLi[i].style.display = 'none';
        }
        sliderContentLi[this.index].style.display = 'block';
      }
    }
  }
function change(){    
     if(x == sliderNavLi.length){
        x=0;
      }

      sliderNavLi[x].index = x;
      
  
        for(var j = 0; j <sliderNavLi.length; j++){
          sliderNavLi[j].className = '';
        }
        sliderNavLi[x].className = 'on';

        
        for(var k = 0; k < sliderContentLi.length; k++){
          sliderContentLi[k].style.display = 'none';
        }
        sliderContentLi[sliderNavLi[x].index].style.display = 'block';
       x++;
}

  //频道展示动效
  
  //鼠标滑过标签时，会在标签的li上添加selected类
  //鼠标滑过标签时，会将下面对应的div显示出来，也就是style.display="block"
  //鼠标滑过下面的某一个商品时，这个商品的opacity: 1;其他商品的opacity: 0.25;

       //商品列表
       var  floor1 = document.getElementById('floor1');
       var  floor1ContentLi = floor1.getElementsByClassName('floor-goodslist');

       //标签
       var  floor1Nav = document.getElementById('floor1Nav');
       var   floor1NavLi = floor1Nav.getElementsByTagName('li');



//写好 changeTab()函数实现当鼠标悬停时的功能
    function  changeTab(myNav){
    for(var i = 0; i <floor1NavLi.length; i++){
       floor1NavLi[i].removeAttribute("class") ;
     }
     myNav.setAttribute("class","selected");
    //获取到myNav的data-index属性值，为了方便对应起来而专门设置的属性
    var index =  myNav.getAttribute("data-index");

    for(var i = 0; i < floor1ContentLi.length; i++){
         floor1ContentLi[i].style.display = 'none';
        }
        floor1ContentLi[index-1].style.display = 'block';
    }
//方法1，采用onmouseover事件属性调用函数changeTab()，调用函数是写在事件发生的HTML元素上

//方法2，采用DOM来分配onmouseover事件，从而调用函数,遍历一次floor1NavLi，为每个li都分配一个
/*
for(var i = 0; i < floor1NavLi.length; i++){
 floor1NavLi[i].onmouseover =function(){changeTab(this)};
}*/

//方法3，为元素绑定事件监听onmouseover事件，从而调用函数
for(var i = 0; i < floor1NavLi.length; i++){
floor1NavLi[i].addEventListener("mouseover", function(){changeTab(this);});
}
