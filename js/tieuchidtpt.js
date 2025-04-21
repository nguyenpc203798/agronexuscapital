$(document).ready(function(){$(".layout-item").hide();$("#nongsanlayout").show();function showLayout(layoutId){$(".layout-item").hide();$("#"+layoutId).show().css({'animation':'fadeInUp 1s ease forwards'})}
if(!document.querySelector('#fadeInUpStyle')){const style=document.createElement('style');style.id='fadeInUpStyle';style.textContent=`
    @keyframes fadeInUp {
      from {
      opacity: 0;
      transform: translateY(40px);
      }
      to {
      opacity: 1;
      transform: translateY(0);
      }
    }
    `;document.head.appendChild(style)}
$("button").click(function(){$("button").removeClass("active");$(this).addClass("active");var layoutId=$(this).attr("id")+"layout";showLayout(layoutId)})})