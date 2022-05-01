<template>
<div>
	
	<div class="container-fluid">

		<div class="logo">

			<img src="logo1.svg" width="85px">
			<h1 class="name fadeUp"><b>gamma.</b></h1>
			<p class="sub-name">So<span class="letter-pack">ft</span>ware Developer / JavaScript, Python</p>

		</div>

		<div class="main">

			<img src="titleIcon.svg" width="55px"><br>

			<div class="titleLink">

				<div class="nuxtlink">
					<nuxt-link to="/about">&nbsp;About me <span class="material-icons">arrow_forward_ios</span></nuxt-link>
				</div>
				<p class="sub-title">Who am I ?</p>

				<div class="nuxtlink">
					<nuxt-link to="/dripLog">&nbsp;dripLog <span class="material-icons">arrow_forward_ios</span></nuxt-link>
				</div>
				<p class="sub-title">My blog page is here.</p>

				<div class="nuxtlink">
					<a href="mailto:mail@gamma410.win">&nbsp;Mail <span class="material-icons">mail_outline</span></a>
				</div>
				<p class="sub-title">Please contact us at <u>mail@gamma410.win</u>.</p>

				<div class="nuxtlink">
					<a href="https://github.com/gamma-410" target="_blank" rel="noopener noreferrer">&nbsp;GitHub <span class="material-icons">open_in_new</span></a>
				</div>
				<p class="sub-title">You can see the code I wrote.</p>

				<div class="nuxtlink">
					<a href="https://twitter.com/gamma_410" target="_blank" rel="noopener noreferrer">&nbsp;Twi<span class="letter-pack">tt</span>er <span class="material-icons">open_in_new</span></a>
				</div>
				<p class="sub-title">You can see my daily life.</p>
			</div>

		</div>

	</div>

 	<footer class="text-center text-white">

 		<div class="text-center p-3 foots"><br><br>
			<img src="logo1.svg" width="40px"><br>
			<p style="color: #ffffff;">&copy; 2022  gamma410.win </p>
  		</div>

	</footer>

</div>

</template>

<style>
body {
	margin-top: 10px;
	font-family: 'Jost', sans-serif, 'Noto Sans JP', sans-serif;
	font-size: 14px;
	line-height:380%;
	color:#353535;
	font-size: 15px;
	background-color: #ececec;
}
.letter-pack {
	letter-spacing: 1px;
}
a{
	color:#353535;
	padding-top: 0.3em;
	padding-left: 0em;
	padding-right: 0.3em;
	padding-bottom: 0.3em;
  	background-image: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgb(255, 139, 96) 50%);
  	background-position: 0 0;
  	background-size: 200% auto;
  	transition: .3s;
}
a:hover{
	background-position: -100% 0;
  	color: #f6f6f6;
	text-decoration: none;
}
html{
	border-top: 1px solid #202020;
	font-family: 'Jost', sans-serif, 'Noto Sans JP', sans-serif;
}
img {
	max-width: 100%;
	max-height: 100%;
}
hr {
	border: 0;
	height: 1px;
	border-bottom-width: 1px;
	border-bottom-style: dotted;
}
.logo {
	max-width: 100%;
	padding-bottom: 0.4em;
	line-height: 1.2;
	border-bottom-color: #d4d4d4;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	margin-top: 120px;
	animation: text-in .8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0.1s backwards;
}
.name {
	margin-top: 50px;
	margin-bottom: 30px;
	font-size: 36px;
}
h2, h3, h4, h5, h6 {
	color: #292929;
	font-weight: bold;
}
h1{
    font-size: 25px;
    font-weight: medium;
}
h2{
    font-size: 23px;
    font-weight: medium;
	padding-top: 40px;
	padding-bottom: 20px;
}
h3{
    font-size: 19px;
    font-weight: medium;
}
h4{
    font-size: 15px;
    font-weight: medium;
}
h5{
    font-size: 13px;
    font-weight: medium;
}
h6{
    font-size: 12px;
    font-weight: medium;
}
body {
  display: flex;
  flex-flow: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
.container-fluid {
	margin-right: auto;
	margin-left: auto;
	max-width: 730px;
}
.sub-name {
	margin-bottom: 40px;
	color:rgb(122, 122, 122);
}
.main {
	margin-top: 60px;
	margin-bottom: 180px;
	 animation: text-in .8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0.3s backwards;
}
.titleLink {
	margin-top: 35px;
}
.nuxtlink {
	font-size: 25px;
	font-weight: medium;
	padding: 0px;
	margin-top: 30px;
	text-decoration: none;
}
.sub-title {
	padding-left: 0.5em;
	padding-bottom: 10px;
	margin: 0px;
	color:rgb(122, 122, 122);
	line-height: 15px;
}
.foots {
	background-color:#2d2d2d;
	 animation: text-in .8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0.6s backwards;
}
@media (prefers-color-scheme: dark) {
	html{
		border-top: 1px solid #cdcdcd;
	}
	body {
		color:#dddddd;
		font-size: 15px;
		background-color: #1b1b1b;
	}
	h2, h3, h4, h5, h6 {
		color: #f5f5f5;
		font-weight: bold;
	}
	a{
		color: #dddddd;
	}	
	.sub-name {
		color:#969696;
	}
	a{
		color:#f6f6f6;
		text-decoration: none;
		padding-top: 0.3em;
		padding-left: 0em;
		padding-right: 0.3em;
		padding-bottom: 0.3em;
		background-image: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgb(127, 156, 214) 50%);
		background-position: 0 0;
		background-size: 200% auto;
		transition: .3s;
	}
	a:hover{
		background-position: -100% 0;
		color: rgb(58, 58, 58);
		text-decoration: none;
	}
	.logo {
		max-width: 100%;
		padding-bottom: 0.4em;
		line-height: 1.2;
		border-bottom-color: #494949;
		border-bottom-width: 1px;
		border-bottom-style: solid;
		margin-top: 120px;
	}
	.foots {
		background-color:#0d0d0d;
	}
}
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local('Material Icons'),
    local('MaterialIcons-Regular'),
    url(https://example.com/MaterialIcons-Regular.woff2) format('woff2'),
    url(https://example.com/MaterialIcons-Regular.woff) format('woff'),
    url(https://example.com/MaterialIcons-Regular.ttf) format('truetype');
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 15px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}

.fadeUp{
animation-name:fadeUpAnime;
animation-duration:0.3s;
animation-fill-mode:forwards;
opacity:10;
}

  @keyframes text-in {
      0% {
          transform: translate(0, -20px);
          opacity: 0;
      }
  }
</style>
