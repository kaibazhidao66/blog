/** 提示弹窗 **/

// 问候语
now = new Date(), hour = now.getHours()
if (hour < 6) {
    var hello = "凌晨了";
} else if (hour < 9) {
    var hello = "早上好呀";
} else if (hour < 12) {
    var hello = "上午好呀";
} else if (hour < 14) {
    var hello = "中午好呀";
} else if (hour < 17) {
    var hello = "下午好";
} else if (hour < 19) {
    var hello = "傍晚好";
} else if (hour < 22) {
    var hello = "晚上好";
} else {
    var hello = "夜深啦";
}

// 复制提醒
document.body.oncopy = function () {
    iziToast.info({
        timeout: 3000, // 关闭弹窗的时间
        closeOnEscape: 'true', // 允许使用Esc键关闭弹窗
        transitionIn: 'bounceInLeft', // 弹窗打开动画
        transitionOut: 'fadeOutRight', // 弹窗关闭动画
        displayMode: 'replace', // 替换已经打开的弹窗
        layout: '2', // Medium模式
        position: 'topRight', // 弹窗位置
        icon: 'iconfont icon-clipcheck', // 图标类名
        backgroundColor: 'var(--board-bg-color)', // 弹窗背景色
        title: '复制成功', // 通知标题
        message: '请遵守 CC BY-NC-SA 4.0 协议' // 通知消息内容
    });
}

//屏蔽终端
document.onkeydown = function (event) {
    if (window.event && window.event.keyCode === 123) {
        event.keyCode = 0;
        event.returnValue = false;
        iziToast.info({
            timeout: 4000, // 关闭弹窗的时间
            closeOnEscape: 'true', // 允许使用Esc键关闭弹窗
            transitionIn: 'bounceInLeft', // 弹窗打开动画
            transitionOut: 'fadeOutRight', // 弹窗关闭动画
            displayMode: 'replace', // 替换已经打开的弹窗
            layout: '2', // Medium模式
            position: 'bottomRight', // 弹窗位置
            icon: 'iconfont icon-bug', // 图标类名
            backgroundColor: 'var(--board-bg-color)', // 弹窗背景色
            title: '温馨提醒', // 通知标题
            message: '为了浏览体验，本站禁用 F12' // 通知消息内容
        });
    return false;
    }
}

//切换模式
function dark() {
  document.body.classList.add('night');
  document.cookie = "night=1;path=/";
  iziToast.info({
      timeout: 5000,
      closeOnEscape: 'true',
      transitionIn: 'bounceInRight',
      transitionOut: 'fadeOutLeft',
      displayMode: '1',
      layout: '2',
      position: 'topLeft',
      icon: 'fa fa-adjust',
      backgroundColor: 'var(--board-bg-color)',
      title: '明暗切换',
      message: '切换成功，要注意适当休息哦'
  });
}

function light() {
  document.body.classList.remove('night');
  document.cookie = "night=0;path=/";
  iziToast.info({
      timeout: 5000,
      closeOnEscape: 'true',
      transitionIn: 'bounceInRight',
      transitionOut: 'fadeOutLeft',
      displayMode: '1',
      layout: '2',
      position: 'topLeft',
      icon: 'fa fa-adjust',
      backgroundColor: 'var(--board-bg-color)',
      title: '明暗切换',
      message: '切换成功，要注意保护眼睛哦'
  });
}


/** 链接弹窗 **/
function SAONotify(title,message,action){
  //样式文件
  var tempstyle = `#SAO-Notify{z-index:9999;background:rgba(204,204,207,0.8);font-family:'SAOUI',Langar,-apple-system,sans-serif;font-weight:bolder;text-shadow:0.5px 0.5px 0.5px#888;height:240px;max-width:400px;position:fixed;bottom:0;right:0;left:0;top:0;margin:auto auto;border-radius:5px;box-shadow:2px 2px 10px#888;display:block;animation:flashOpen 1s ease alternate}.notify-title{background:rgba(62,75,94,0.3);color:rgba(60,60,61,0.7);height:60px;width:100%;display:block;font-size:20px;text-align:center;border-top-left-radius:5px;border-top-right-radius:5px;padding-top:10px}.notify-alert::-webkit-scrollbar{display:none}.notify-alert{background:rgba(62,75,94,0.1);color:rgba(60,60,61,0.7);height:120px;overflow:scroll;width:100%;display:flex;justify-content:space-around;align-items:center;box-shadow:0px 0px 15px#bcbcbc inset}.notify-button{background:rgba(62,75,94,0.3);height:60px;width:100%;display:block;text-align:center;border-bottom-left-radius:5px;border-bottom-right-radius:5px;padding-top:12.5px;}.notify-confirm{background:rgba(47,121,212,0);border-radius:50%;display:inline-block;width:36px;height:36px;margin-inline:60px;border:0px solid;border-color:#2f79d4}.notify-confirm button{background:#2f79d4;text-align:center;border-radius:50%;font-size:18px;color:#fff;display:block;width:30px;height:30px;margin:2px;border:0}.notify-cancel{background:rgba(203,55,73,0);border-radius:50%;display:inline-block;width:36px;height:36px;margin-inline:60px;border:0px solid;border-color:#cb3749}.notify-cancel button{background:#cb3749;text-align:center;border-radius:50%;font-size:18px;font-weight:bolder;color:#fff;display:block;width:30px;height:30px;margin:2px;border:0}.notify-receive{background:rgba(47,121,212,0);border-radius:50%;display:inline-block;width:36px;height:36px;margin-inline:60px;border:0px solid;border-color:#46647e}.notify-receive button{background:#46647e;text-align:center;border-radius:50%;font-size:18px;color:#fff;display:block;width:36px;height:36px;margin:2px;border:0}@-moz-keyframes flashOpen{from{transform:rotateX(90deg)}to{transform:rotateX(0deg)}}@-webkit-keyframes flashOpen{from{transform:rotateX(90deg)}to{transform:rotateX(0deg)}}@-o-keyframes flashOpen{from{transform:rotateX(90deg)}to{transform:rotateX(0deg)}}@keyframes flashOpen{from{transform:rotateX(90deg)}to{transform:rotateX(0deg)}}@-moz-keyframes flashClose{from{transform:rotateX(0deg)}to{transform:rotateX(90deg)}}@-webkit-keyframes flashClose{from{transform:rotateX(0deg)}to{transform:rotateX(90deg)}}@-o-keyframes flashClose{from{transform:rotateX(0deg)}to{transform:rotateX(90deg)}}@keyframes flashClose{from{transform:rotateX(0deg)}to{transform:rotateX(90deg)}}`;
  //若定义了action执行代码片段，则输出有双选项的弹窗
  if (action){
    var template =`<div id="SAO-Notify"><style>` + tempstyle +`</style><div class="notify-title">` + `${title}` + `</div><div class="notify-alert"> `+ `${message}` + `</div><div class="notify-button"><span class="notify-confirm"><button class="far fa-circle" type="button" name="confirm" onclick="clickAudio();setTimeout(function(){` + `${action}` + `},500);cancelNotify()"></button></span><span class="notify-cancel"><button class="fa fa-times" type="button" name="cancel" onclick="panelAudio();cancelNotify()"></button></span></div><audio id="SAO-Notify-Panel" src="https://npm.elemecdn.com/akilar-candyassets/audio/Panel.mp3"></audio><audio id="SAO-Notify-Click" src="https://npm.elemecdn.com/akilar-candyassets/audio/aowu.m4a"></audio>
    </div>`
  } else { //若未定义action代码片段，则仅输出单选项的弹窗
    var template =`<div id="SAO-Notify"><style>` + tempstyle +`</style><div class="notify-title">` + `${title}` + `</div><div class="notify-alert"> `+ `${message}` + `</div><div class="notify-button"><span class="notify-receive"><button class="fas fa-check" type="button" name="receive" onclick="panelAudio();cancelNotify()"></button></span></div><audio id="SAO-Notify-Panel" src="https://npm.elemecdn.com/akilar-candyassets/audio/Panel.mp3"></audio><audio id="SAO-Notify-Click" src="https://npm.elemecdn.com/akilar-candyassets/audio/aowu.m4a"></audio>
    </div>`
  };

  document.body.insertAdjacentHTML('beforeend',template);
}

//按钮确认选项音效
function clickAudio() {
  var clickAudio = document.getElementById("SAO-Notify-Click");
  if (clickAudio) {
    clickAudio.play();//有音频时播放
  }
}
//按钮取消选项音效
function panelAudio() {
  var panelAudio = document.getElementById("SAO-Notify-Panel");
  if (panelAudio) {
    panelAudio.play();//有音频时播放
  }
}
//关闭通知栏
function cancelNotify(){
  var notifyWindow = document.getElementById('SAO-Notify');
  notifyWindow.style.animation = 'flashClose 1.5s ease alternate ';
  setTimeout(function() {
    notifyWindow.remove();
  }, 1e3);
}


/**  **/