<template>
<div>
	<div class="container-fluid1">

		<div class="logo">
				<div class="logo-center">
					<span class="material-icon1">
						newspaper
					</span>
				</div>
				<h1 class="title names fadeUp">
					<p class="title-ins">
						{{ title }}
					</p>
				</h1>

				<div class="sharelink">
					<p class="publishedAt">{{ new Date(publishedAt).toLocaleDateString() }}</p>
					<a :href="this.twitter" target="_blank">&nbsp;<i class="fa fa-twitter-square fa-lg "></i> <u>Tweet</u></a>
					<a :href="this.facebook" target="_blank">&nbsp;<i class="fa fa-facebook-square "></i> <u>Post</u></a>
				</div>

		</div>

	</div>

	<div class="container-fluid1 clala">

		<main class="main-text1">

			<div class="post" v-html="body"></div>
			
		<nuxt-link to="/dripLog">&nbsp;<u>Back</u></nuxt-link><br><br>

		</main>
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
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://moka.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { 'X-MICROCMS-API-KEY': 'af1039ff-f613-47f8-a204-9e0019ae85fe' }
      }
    )
    return data
  },
  computed: {
	twitter(){
        return `https://twitter.com/intent/tweet?url=https://dr-notes.work/${this.id}&text=dripLog - ${this.title}\n&\nhashtags=dripLog`
    },
	facebook() {
      return `https://www.facebook.com/sharer/sharer.php?u=https://dr-notes.work/${this.id}`;
    },
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
.publishedAt {
	color: rgb(133, 133, 133);
}
.sharelink {
	text-align: center;
	margin-bottom: 30px;
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
.names {
	margin-top: 50px;
	margin-bottom: 30px;
	font-size: 25px;
}
h2, h3, h4, h5, h6 {
	color: #292929;
	font-weight: bold;
}
h1{
    font-size: 25px;
    font-weight: bold;
}
h2{
    font-size: 23px;
    font-weight: medium;
	padding-top: 15px;
	padding-bottom: 15px;
}
h2::before{
	content: '# ';
	color:rgb(255, 166, 115);
}
h3{
    font-size: 19px;
    font-weight: medium;
}
h3::before{
	content: '# ';
	color:rgb(115, 176, 255);
}
h4{
    font-size: 15px;
    font-weight: medium;
}
h4::before{
	content: '# ';
	color:rgb(218, 140, 203);
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
.container-fluid1 {
	margin-right: auto;
	margin-left: auto;
	max-width: 730px;
}
.sub-name {
	margin-bottom: 40px;
	color:rgb(122, 122, 122);
}
.main-text1 {
	border-radius: 30px;
	padding: 25px;
	background: #fff;
	margin-right: 0px;
	margin-left: 0px;
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
.title {
	margin: 16px auto;
	text-align: center;
	display: block;
}
.title .title-ins {
	text-align: left;
	display: inline-block;
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
	.main-text1 {
		border-radius: 30px;
		padding: 25px;
		background: rgb(56, 56, 56);
		margin-right: 0px;
		margin-left: 0px;
		margin-top: 60px;
		margin-bottom: 180px;
		animation: text-in .8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0.3s backwards;
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
.material-icon1 {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 65px;  /* Preferred icon size */
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
	.logo-center {
		text-align: center;
		margin: 50px;
	}

@media screen and (max-width: 500) {
	.main-text1 {
		border-radius: 10px;
		background: #fff;
		animation: text-in .8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0.3s backwards;
	}
}
pre {
  border-radius: 10px;
  border-radius: 5px;
  color: #fff;
  overflow-x: auto; /* ⭐ */
  -webkit-overflow-scrolling: touch; /* ⭐ */
}
code{
	border-radius: 12px;
	line-height: 25px;
}

blockquote {
	border-radius: 20px;
    position: relative;
    padding: 30px 10px 8px 10px;
    box-sizing: border-box;
    font-style: italic;
    background: #efefef;
    color: #555;
	line-height: 70px;
}

blockquote::before{
    display: inline-block;
    position: absolute;
    top: 13px;
    left: 15px;
    content: "\f10d";
    font-family: FontAwesome;
    color: #cfcfcf;
    font-size: 28px;
    line-height: 1;
    font-weight: 900;
}

blockquote p {
    padding: 0;
    margin: 10px 0;
    line-height: 1.7;
}

blockquote cite {
    display: block;
    text-align: right;
    color: #9a9a9a;
    font-size: 0.9em;
}


ul {
  border-radius: 20px;
  padding: 0 0.5em;
  position: relative;
}

ul li {
  padding: 0.5em 0 0.5em 1.4em;
  list-style-type: none!important;
}

ul li:before {
  content: "-";
  position: absolute;
  left : 0.5em;
  color: #deb258; 
}

ul li:last-of-type {
  border-bottom: none;
}

</style>
