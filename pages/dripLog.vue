<template>
<div>
	
	<div class="container-fluid">

		<div class="logo">

			<img src="logo1.svg" width="85px">
			<h1 class="name fadeUp"><b>dripLog</b></h1>

		</div>

		<div class="main">
			<p>全 {{ totalCount }} 件の投稿</p>
			<div class="text-notes">

				<div class="card-deck" v-for="content in contents" :key="content.id">
					<div class="card bgs">
						<span v-if="content.img">
							<img :src="content.img.url" class="imgss"><br>
						</span>
						<div class="card-body">
						<h3 class="card-title">{{ content.title }}</h3>
						<nuxt-link :to="`/${content.id}`">&nbsp;<u>Read</u> <span class="material-icon">arrow_forward_ios</span></nuxt-link>
						<p class="card-text"><small class="text-muted">Writer: @gamma_410</small></p>
						</div>
					</div>
				</div>
	
			</div><br>
			<nuxt-link to="/">&nbsp;<u>Return to the index page</u></nuxt-link>
		</div>

	</div>

  	<footer class="text-center text-white">

 		<div class="text-center p-3 foots"><br><br>
			<img src="logo1.svg" width="40px"><br>
			<p style="color: #ffffff;">&copy; 2022  dr-notes.work </p>
  		</div>

	</footer>

</div>

</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get('https://moka.microcms.io/api/v1/blog',
      {
        headers: { 'X-MICROCMS-API-KEY': '7502776043464ba4a0afb2f498d19fee5663' }
      }
    )
    return data
  }
}
</script>
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
.imgss{
	border-radius: 25px 25px 0px 0px;
	width: 100%;
  	height: 300px;
  	object-fit: cover;
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
.text-notes {
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
ul {
	line-height: 40px;
	list-style-type: square;
}
.bgs{
	border-radius: 25px;
	border: none;
	box-shadow: 0 1px 5px rgba(104, 104, 104, 0.2);
	margin-top: 20px;
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
	.bgs {
		background: #373737;
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
.material-icon {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 5px;  /* Preferred icon size */
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
