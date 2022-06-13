// 鼠标指针
var CURSOR;
Math.lerp = (a, b, n) => (1 - n) * a + n * b;
const getStyle = (el, attr) => {
    try {
    return window.getComputedStyle ?
        window.getComputedStyle(el)[attr] :
        el.currentStyle[attr];
    } catch (e) {}
    return "";
};
class Cursor {
constructor() {
this.pos = {
curr: null,
prev: null
};
this.pt = [];
this.create();
this.init();
this.render();
}
move(left, top) {
this.cursor.style["left"] = `${left}px`;
this.cursor.style["top"] = `${top}px`;
}
create() {
if (!this.cursor) {
this.cursor = document.createElement("div");
this.cursor.id = "cursor";
this.cursor.classList.add("hidden");
document.body.append(this.cursor);
}
var el = document.getElementsByTagName('*');
for (let i = 0; i < el.length; i++)
if (getStyle(el[i], "cursor") == "pointer")
this.pt.push(el[i].outerHTML);
document.body.appendChild((this.scr = document.createElement("style")));
this.scr.innerHTML =
`* {cursor: url("https://fastly.jsdelivr.net/gh/kaibazhidao66/tcb/cur/normal.cur") 4 4, auto}`;
}
refresh() {
this.scr.remove();
this.cursor.classList.remove("hover");
this.cursor.classList.remove("active");
this.pos = {
curr: null,
prev: null
};
this.pt = [];
this.create();
this.init();
this.render();
}
init() {
document.onmouseover = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.add("hover");
document.onmouseout = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.remove("hover");
document.onmousemove = e => {
(this.pos.curr == null) && this.move(e.clientX - 8, e.clientY - 8);
this.pos.curr = {
x: e.clientX - 8,
y: e.clientY - 8
};
this.cursor.classList.remove("hidden");
};
document.onmouseenter = e => this.cursor.classList.remove("hidden");
document.onmouseleave = e => this.cursor.classList.add("hidden");
document.onmousedown = e => this.cursor.classList.add("active");
document.onmouseup = e => this.cursor.classList.remove("active");
}
render() {
if (this.pos.prev) {
this.pos.prev.x = Math.lerp(this.pos.prev.x, this.pos.curr.x, 0.45);
this.pos.prev.y = Math.lerp(this.pos.prev.y, this.pos.curr.y, 0.45);
this.move(this.pos.prev.x, this.pos.prev.y);
} else {
this.pos.prev = this.pos.curr;
}
requestAnimationFrame(() => this.render());
}
}
(() => {
CURSOR = new Cursor();
// 需要重新获取列表时，使用 CURSOR.refresh()
})();


// 时间将囊
function init_life_time() {
  function getAsideLifeTime() {
      /* 当前时间戳 */
      let nowDate = +new Date();
      /* 今天开始时间戳 */
      let todayStartDate = new Date(new Date().toLocaleDateString()).getTime();
      /* 今天已经过去的时间 */
      let todayPassHours = (nowDate - todayStartDate) / 1000 / 60 / 60;
      /* 今天已经过去的时间比 */
      let todayPassHoursPercent = (todayPassHours / 24) * 100;
      $('#dayProgress .date-text span').html(parseInt(todayPassHours));
      $('#dayProgress .progress .progress-bar').css('width', parseInt(todayPassHoursPercent) + '%');
      $('#dayProgress .progress .progress-bar').html(parseInt(todayPassHoursPercent) + '%');
      /* 当前周几 */
      let weeks = {
          0: 7,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6
      };
      let weekDay = weeks[new Date().getDay()];
      let weekDayPassPercent = (weekDay / 7) * 100;
      $('#weekProgress .date-text span').html(weekDay);
      $('#weekProgress .progress .progress-bar').css('width', parseInt(weekDayPassPercent) + '%');
      $('#weekProgress .progress .progress-bar').html(parseInt(weekDayPassPercent) + '%');
      /* 月 */
      let year = new Date().getFullYear();
      let date = new Date().getDate();
      let month = new Date().getMonth() + 1;
      let monthAll = new Date(year, month, 0).getDate();
      let monthPassPercent = (date / monthAll) * 100;
      $('#monthProgress .date-text span').html(date);
      $('#monthProgress .progress .progress-bar').css('width', parseInt(monthPassPercent) + '%');
      $('#monthProgress .progress .progress-bar').html(parseInt(monthPassPercent) + '%');
      /* 年 */
      let yearPass = (month / 12) * 100;
      $('#yearProgress .date-text span').html(month);
      $('#yearProgress .progress .progress-bar').css('width', parseInt(yearPass) + '%');
      $('#yearProgress .progress .progress-bar').html(parseInt(yearPass) + '%');
  }
  getAsideLifeTime();
  setInterval(() => {
      getAsideLifeTime();
  }, 1000);
}
init_life_time()


// 日夜切换
function switchNightMode() {
    $('<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>').appendTo($("body")), setTimeout(
        function () {
            //切换动画
            var DarkMode = document.cookie.replace(/(?:(?:^|.*;\s*)DarkMode\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
            (DarkMode == '0') ? ($("html").addClass("DarkMode"), document.cookie = "DarkMode=1;path=/", $('#modeicon').attr("xlink:href", "#icon-sun")) : ($("html").removeClass(
                    "DarkMode"), document.cookie = "DarkMode=0;path=/", $('#modeicon')
                .attr("xlink:href", "#icon-_moon")), setTimeout(function () {
                $(".Cuteen_DarkSky").fadeOut(1e3, function () {
                    $(this).remove()
                })
            }, 2e3);
            //切换提示
            var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
            if (night == '0') {
                dark();
            } else {
                light();
            }
        }), 50
}


// 侧栏顶部
function BackTOP() {
  $("#btn").hide();
  $(function () {
      $(window).scroll(function () {
          if ($(window).scrollTop() > 50) {
              $("#btn").fadeIn(200);
          } else {
              $("#btn").fadeOut(200);
          }
      });
      $("#btn").click(function () {
          $('body,html').animate({
                  scrollTop: 0
              },
              500);
          return false;
      });
  });
  $(function () {
      $(".say").click(function () {
          $('body,html').animate({
                  scrollTop: $('html, body').get(0).scrollHeight
              },
              500);
          return false;
      });
  })
}

BackTOP();


// 划入动画
const cards = document.querySelectorAll('.index-card')
if (cards.length) {
  document.querySelector('.row').setAttribute('style', 'overflow: hidden;')
  const coefficient = document.documentElement.clientWidth > 768 ? .5 : .3
  const origin = document.documentElement.clientHeight - cards[0].getBoundingClientRect().height * coefficient

  function throttle(fn, wait) {
    let timer = null;
    return function () {
      const context = this;
      const args = arguments;
      if (!timer) {
        timer = setTimeout(function () {
          fn.apply(context, args);
          timer = null;
        }, wait)
      }
    }
  }

  function handle() {
    cards.forEach(card => {
      card.setAttribute('style', `--state: ${(card.getBoundingClientRect().top - origin) < 0 ? 1 : 0};`)
    })
    // console.log(1)
  }

  document.addEventListener("scroll", throttle(handle, 100));
}


// 离开标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      // $('[rel="icon"]').attr('href', "/img/favicon.png");
        document.title = 'XKの博客';
        clearTimeout(titleTime);
    }
    else {
        document.title = 'Welcome Back';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});


// 控制台输出
var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
var styleTitle2 = `
font-size:12px;
color: rgb(244,167,89);
`
var styleContent = `
color: rgb(30,152,255);
`
var title1 = 'XKの博客'
var title2 = `版权所有`
var content = `
个人主页:  https://www.xukaiyyds.cn
项目地址:  https://github.com/kaibazhidao66/blog
`
console.log(`%c${title1} %c${title2}
%c${content}`, styleTitle1, styleTitle2, styleContent)

// 线条背景
!function(){function o(w,v,i){return w.getAttribute(v)||i}function j(i){return document.getElementsByTagName(i)}function l(){var i=j("script"),w=i.length,v=i[w-1];return{l:w,z:o(v,"zIndex",-10),o:o(v,"opacity",0.5),c:o(v,"color","24,28,39"),n:o(v,"count",100)}}function k(){r=u.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=u.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function b(){e.clearRect(0,0,r,n);var w=[f].concat(t);var x,v,A,B,z,y;t.forEach(function(i){i.x+=i.xa,i.y+=i.ya,i.xa*=i.x>r||i.x<0?-1:1,i.ya*=i.y>n||i.y<0?-1:1,e.fillRect(i.x-0.5,i.y-0.5,1,1);for(v=0;v<w.length;v++){x=w[v];if(i!==x&&null!==x.x&&null!==x.y){B=i.x-x.x,z=i.y-x.y,y=B*B+z*z;y<x.max&&(x===f&&y>=x.max/2&&(i.x-=0.03*B,i.y-=0.03*z),A=(x.max-y)/x.max,e.beginPath(),e.lineWidth=A/2,e.strokeStyle="rgba("+s.c+","+(A+0.2)+")",e.moveTo(i.x,i.y),e.lineTo(x.x,x.y),e.stroke())}}w.splice(w.indexOf(i),1)}),m(b)}var u=document.createElement("canvas"),s=l(),c="c_n"+s.l,e=u.getContext("2d"),r,n,m=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(i){window.setTimeout(i,1000/45)},a=Math.random,f={x:null,y:null,max:20000};u.id=c;u.style.cssText="position:fixed;top:0;left:0;z-index:"+s.z+";opacity:"+s.o;j("body")[0].appendChild(u);k(),window.onresize=k;window.onmousemove=function(i){i=i||window.event,f.x=i.clientX,f.y=i.clientY},window.onmouseout=function(){f.x=null,f.y=null};for(var t=[],p=0;s.n>p;p++){var h=a()*r,g=a()*n,q=2*a()-1,d=2*a()-1;t.push({x:h,y:g,xa:q,ya:d,max:6000})}setTimeout(function(){b()},70)}();

// 星空背景
function dark() {window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var n,e,i,h,t=.05,s=document.getElementById("universe"),o=!0,a="180,184,240",r="226,225,142",d="226,225,224",c=[];function f(){n=window.innerWidth,e=window.innerHeight,i=.216*n,s.setAttribute("width",n),s.setAttribute("height",e)}function u(){h.clearRect(0,0,n,e);for(var t=c.length,i=0;i<t;i++){var s=c[i];s.move(),s.fadeIn(),s.fadeOut(),s.draw()}}function y(){this.reset=function(){this.giant=m(3),this.comet=!this.giant&&!o&&m(10),this.x=l(0,n-10),this.y=l(0,e),this.r=l(1.1,2.6),this.dx=l(t,6*t)+(this.comet+1-1)*t*l(50,120)+2*t,this.dy=-l(t,6*t)-(this.comet+1-1)*t*l(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=l(.2,1-.4*(this.comet+1-1)),this.do=l(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>n||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(h.beginPath(),this.giant)h.fillStyle="rgba("+a+","+this.opacity+")",h.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){h.fillStyle="rgba("+d+","+this.opacity+")",h.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(var t=0;t<30;t++)h.fillStyle="rgba("+d+","+(this.opacity-this.opacity/20*t)+")",h.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),h.fill()}else h.fillStyle="rgba("+r+","+this.opacity+")",h.rect(this.x,this.y,this.r,this.r);h.closePath(),h.fill()},this.move=function(){this.x+=this.dx,this.y+=this.dy,!1===this.fadingOut&&this.reset(),(this.x>n-n/4||this.y<0)&&(this.fadingOut=!0)},setTimeout(function(){o=!1},50)}function m(t){return Math.floor(1e3*Math.random())+1<10*t}function l(t,i){return Math.random()*(i-t)+t}f(),window.addEventListener("resize",f,!1),function(){h=s.getContext("2d");for(var t=0;t<i;t++)c[t]=new y,c[t].reset();u()}(),function t(){document.getElementsByTagName('html')[0].getAttribute('data-user-color-scheme')=='dark'&&u(),window.requestAnimationFrame(t)}()};
dark()

// 代码语言（已废弃）
// const languageStyle = (str) => {
//   /* 单独优化 */
//   if (['js', 'javascript'].includes(str)) return 'JavaScript'
//   if (['ts', 'typescript'].includes(str)) return 'TypeScript'
//   /* 曲线救国(Highlight不支持vue) */
//   if (str === 'xml') return 'Vue'

//   // return str
//   /* 全小写风格 */
//   return str.toUpperCase()
//   /*全大写风格 */
//   // return str[0].toUpperCase() + str.substring(1)
//   /*首字母大写风格 */
// }

// document.querySelectorAll('figure.highlight').forEach((item) => {
//   item.setAttribute('data-type', languageStyle(item.getAttribute('class').substring(10)))
// })