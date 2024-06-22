<template>
	<div>
		<!-- 头部 begin  -->
		<div class="allTop" id="header">
			<div class="w_1760 allTopCon">
				<div class="allTopLogo"><a href="#"><img src="static/images/logo111.png?ac=222" alt="" /></a></div>
				<div class="allTopConMenu">
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Develop</a></li>
						<li><a href="#">Distribute</a></li>
						<li><a href="#">Support</a></li>
						<li><a href="#">Community</a></li>
					</ul>
				</div>
				<div class="allTopConRig">
					<div class="allTopConRig_1"><a href="#">Become a Developer</a></div>
					<div class="allTopConRig_1"><a href="#">Login</a></div>
					<div class="allTopConRig_1"><a href="#">Register</a></div>
				</div>
			</div>
		</div>
		<!-- 移动端 -->
		<div class="wapTop">
			<div class="wapTopLogo"><a href="#"><img src="static/images/logo111.png?ac=222"></a></div>
			<div class="allTopConRig">
				<div class="allTopConRig_1"><a href="#">Login</a></div>
				<div class="allTopConRig_1"><a href="#">Register</a></div>
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
				<li><a href="#">Develop</a></li>
				<li><a href="#">Distribute</a></li>
				<li><a href="#">Support</a></li>
				<li><a href="#">Community</a></li>
				<li><a href="#">Become a Developer</a></li>
			</ul>
		</div>
		<!-- 头部 stop -->
	</div>

</template>

<script>
	export default {
		data() {
			return {

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

		},
		methods: {
			
		}
	}
</script>

<style scoped>

</style>