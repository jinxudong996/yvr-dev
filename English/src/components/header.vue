<template>
	<div>
		<!-- 头部 begin  -->
		<div class="allTop" id="header">
			<div class="w_1760 allTopCon">
				<div class="allTopLogo"><a href="#"><img src="../../static/images/logo111.png?ac=222" alt="" /></a></div>
				<div class="allTopConMenu">
					<ul>
						<li><a href="#">Home</a></li>
						<li @click="goPath(0)"><a href="#">Develop</a></li>
						<li @click="goPath(1)"><a href="#">Distribute</a></li>
						<li @click="goPath(2)"><a href="#">Support</a></li>
						<li @click="goPath(3)"><a href="#">Community</a></li>
					</ul>
				</div>
				<div class="allTopConRig">
					<div class="allTopConRig_1 manageimg" @click="isDev()" v-show="loginStatus == 2"><div class="img"></div></div>
					<div class="allTopConRig_1" @click="becommeDev()" v-show="loginStatus == 1"><a href="#">Become a Developer</a></div>
					<div class="allTopConRig_1" @click="goLogin()" v-show="loginStatus == 0"><a href="#">Login</a></div>
					<div class="allTopConRig_1" @click="goLogin()" v-show="loginStatus == 0"><a href="#">Register</a></div>
					<div class="allTopConRig_1 dropicon" @click="logout()" v-show="loginStatus != 0"><div class="img" title="注销"></div></div>
				</div>
			</div>
		</div>
		<!-- 移动端 -->
		<!-- <div class="wapTop">
			<div class="wapTopLogo"><a href="#"><img src="../../static/images/logo111.png?ac=222"></a></div>
			<div class="allTopConRig">
				<div class="allTopConRig_1"><a href="#">Login</a></div>
				<div class="allTopConRig_1"><a href="#">Register</a></div>
			</div>
			<div class="banner_menu" id="openMenu">
				<s></s>
				<s></s>
				<s></s>
			</div>
		</div> -->
		<div class="wapTop">
			<div class="wapTopLogo"><a href="#"><img src="../../static/images/logo111.png?ac=111"></a></div>
			<div class="allTopConRig">
				<div class="allTopConRig_1 manageimg" @click="isDev()" v-show="loginStatus == 2"><div class="img"></div></div>
				<div class="allTopConRig_1" @click="becommeDev()" v-show="loginStatus == 1"><a href="#">Become a Developer</a></div>
				<div class="allTopConRig_1" @click="goLogin()" v-show="loginStatus == 0"><a href="#">Login</a></div>
				<div class="allTopConRig_1" @click="goLogin()" v-show="loginStatus == 0"><a href="#">Register</a></div>
				<div class="allTopConRig_1 dropicon" @click="logout()" v-show="loginStatus != 0"><div class="img" title="注销"></div></div>
			</div>
			<div class="banner_menu" id="openMenu">
				<s></s>
				<s></s>
				<s></s>
			</div>
		</div>
		<div class="wapTopBj">
			<ul class="topWapNrConLb">
				<li><a href="#">Home</a></li>
				<li @click="goPath(0)"><a href="#">Develop</a></li>
				<li @click="goPath(1)"><a href="#">Distribute</a></li>
				<li @click="goPath(2)"><a href="#">Support</a></li>
				<li @click="goPath(3)"><a href="#">Community</a></li>
			</ul>
		</div>
		<!-- 头部 stop -->
	</div>

</template>

<script>
	export default {
		data() {
			return {
				loginStatus:0,  //登录状态 0  未登录注册  1  已登录不是开发者  2  已登录是开发者
        		envi:'',
			}
		},
		mounted() {
			$('#openMenu').on('click', function() {
				$(this).toggleClass('changeFigure');
				$(".wapTopBj").toggleClass('on');
			})
			$('.topWapNrConLb a').on('click', function() {
				$('#openMenu').removeClass('changeFigure');
				$(".wapTopBj").removeClass('on');
			})
			$('.topWapNrConLb .DjEjRow').on('click', function() {
				event.stopPropagation();
				if ($(this).parent().next().is(':hidden')) {
					$(this).parent().next().slideDown();
				} else {
					$(this).parent().next().slideUp();
				}
			})
			this.loginStatus = this.getQueryParam('loginStatus') || 0
      		this.envi = this.environment()
		},
		methods: {
      logout(){
        localStorage.removeItem("devlopertoken");
        localStorage.removeItem("username");
        localStorage.removeItem("yvrtoken");
        // var localhref = window.location.href;
        // var cleanurl = localhref.split("?")[0];

        // this.isLogin = false;
        this.loginStatus = 0
        let url = window.location.href.split("?")[0]
        window.location.href = url
      // setTimeout(() => {
      //   this.$router.go(0);
      // }, 300);
      },
      goLogin(){
        let dev = 'http://172.18.0.67:9529/#/login?iscn=false'
        let dev1 = 'https://apitest.yvrdream.com/yvrdvcenter/#/login?iscn=false'
        let uat = 'https://apiuat.yvrdream.com/yvrdvcenter/#/login?iscn=false'
        let pro = 'https://developer.yvr.cn/#/login?iscn=false'
        if(this.envi == 'dev'){
          window.location.href = dev
        }else if(this.envi == 'uat'){
          window.location.href = uat
        }else{
          window.location.href = pro
        }
        
      },
      getQueryParam( param_name) {
        let url = window.location.href
        const queryString = url.split('?')[1];
        if (queryString) {
          const params = new URLSearchParams(queryString);
          return params.get(param_name);
        }
        return null;
      },
      goPath(flag){
        // 中文跳转
        // flag 0 开发 1 分发  2 支持  3 社区
        if(flag == 0){
          let dev = 'https://apitest.yvrdream.com/yvrdvcenter/#/?iscn=false'
		      let dev1 = 'http://172.18.0.67:9529/#/?iscn=false'
          let uat = 'https://apiuat.yvrdream.com/yvrdvcenter/#/?iscn=false'
          let pro = 'https://developer.pfdm.cn/#/?iscn=false'
          if(this.envi == 'dev'){
            window.open(uat)
          }else if(this.envi == 'uat'){
            window.open(uat)
          }else{
            window.open(pro)
          }
        }else if(flag == 1){
          // let url = 'https://apitest.yvrdream.com/yvrdoc/vrcc/Publish/ApplicationLifecycle.html'
          let dev = 'https://apitest.yvrdream.com/yvrdoc/vrce/Publish/ApplicationLifecycle.html'
          let uat = 'https://apiuat.yvrdream.com/yvrdoc/vrce/Publish/ApplicationLifecycle.html'
          let pro = 'https://developer.pfdm.cn/yvrdoc/vrce/Publish/ApplicationLifecycle.html'
          
          if(this.envi == 'dev'){
            window.open(dev)
          }else if(this.envi == 'uat'){
            window.open(uat)
          }else{
            window.open(pro)
          }
          // window.open()
        }else if(flag == 2){
          let dev = 'https://apitest.yvrdream.com/yvrdoc/vrce/Support/PlatformFAQ.html'
          let uat = 'https://apiuat.yvrdream.com/yvrdoc/vrce/Support/PlatformFAQ.html'
          let pro = 'https://developer.pfdm.cn/yvrdoc/vrce/Publish/ApplicationLifecycle.html'
          if(this.envi == 'dev'){
            window.open(dev)
          }else if(this.envi == 'uat'){
            window.open(uat)
          }else{
            window.open(pro)
          }
        }else if(flag == 3){
          let url = 'https://github.com/orgs/YVRDeveloper/discussions'
          window.open(url)
        }
      },
      environment(){
        let currentDomain = window.location.hostname;
        if(currentDomain.includes('apiuat')){
          return 'uat'
        }else if(currentDomain.includes('localhost') || currentDomain.includes('172.18.0.67') ||  currentDomain.includes('apitest')){
          return 'dev'
        }else{
          return 'pro'
        }
      },
      becommeDev(){
        let dev = 'https://apitest.yvrdream.com/yvrdvcenter/#/apply?iscn=false'
        let uat = 'https://apiuat.yvrdream.com/yvrdvcenter/#/apply?iscn=false'
        let pro = 'https://developer.yvr.cn/#/apply?iscn=false'
        if(this.envi == 'dev'){
          window.open(dev)
        }else if(this.envi == 'uat'){
          window.open(uat)
        }else{
          window.open(pro)
        }
      },
      isDev(){
        var token = this.getQueryParam("token");
        var url = null;
        var userSite = window.navigator.language;
        var isSuper = Number(this.getQueryParam("isSuper"));
        let username = this.getQueryParam("username"); 
        url = `all_apps?token=${encodeURIComponent(token)}&iscn=1&isSuper=${isSuper}&account=${username}`;
        // openPath("yvrdevUrl", url);
        let local = 'http://172.18.0.67:8088/'
        let dev = 'https://apitest.yvrdream.com/manage/'
        let uat = 'https://apiuat.yvrdream.com/manage/'
        let pro = "https://developer.pfdm.cn/manage/"
        console.log(dev + url)
        // return
        if(this.envi == 'dev'){
          window.location.href = local + url
        }else if(this.envi == 'uat'){
          window.open(uat + url)
        }else{
          window.open(pro + url)
        }
      }
    }
  }
</script>

<style scoped>
.manageimg {
  /* margin-left: 28px; */
  /* display:flex;
  flex-direction: row;
  align-items: center; */
  cursor: pointer;
}
.manageimg .img {
  width: 20px;
  height: 20px;
  display: inline-block;
  
  background: url("../../static/images/login/guanlizhongxin.png");
}
.manageimg .img:hover {
  background: url("../../static/images/login/guanlizhongxinhv.png");
}

.dropicon .img {
  display: inline-block;
  width: 19px;
  height: 22px;
  background: url("../../static/images/login/icon_user.png");
}
.dropicon .img:hover {
  background: url("../../static/images/login/icon_user_hover.png");
}

</style>