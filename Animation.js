
    (function(){
        
    var button = document.getElementById('submit');
        function loginAnimation(){
            this.style.height="17%";
            this.style.width="64px";
            this.style.borderRadius='50%';
            var div1=document.createElement('div');
            div1.className="dot";
            var div2=document.createElement('div');
            div2.className="dot";
            var div3=document.createElement('div');
            div3.className="dot";
            
            button.innerHTML = "<div class=\"dot\"></div>";
            button.appendChild(div2);
            button.appendChild(div3);
            
        
        
        function loadingAnim(name,arr)
{
var str="";    
    for(var i=0;i<=5;i++)
        {
var j= (i/5)*100;
str += j+"%{"+" top:"+arr[i]  + "%"+  "; } "         }
 console.log(str);   
var idx =document.styleSheets[0].cssRules.length;
document.styleSheets[0].insertRule("@keyframes "+name +"{ " +str + "}", idx);
}        
    loadingAnim('loading',[20,25,20,25,20,25]);
    
var dot = document.getElementsByClassName('dot');
        
        }
    button.addEventListener('click',loginAnimation,false);

    }());
