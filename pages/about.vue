<template>
<div>

	<div class="container-fluid">
	<h1>
		<img src="logo1.svg" width="150px">
	</h1>
  <h2>Hello</h2>
  <ul>
    <li>I'm @gamma_410.</li>
    <li>This site is my blog.</li>
    <li>I likes ...</li>
    <ol>
      <li>CSS ( No Sass )</li>
      <li>JavaScript ( Vue.js )</li>
      <li>Go</li>
      <li>microCMS</li>
    </ol>
    <li>My contacts...</li>
    <ol>
      <li>Twitter | @gamma_410</li>
      <li>GitHub | @gamma-410</li>
      <li>Mail | mail@dr-notes.work</li>
    </ol>
    <li>Project :</li>
    <ol>
      <li>KiyosProject</li>
      <li>Umiiro | 開発部 - 部長</li>
    </ol>
    <br>
  </ul>
  </div>

  <footer class="bg-dark text-center text-white">
 		<div class="text-center p-3" style="background-color:#535353">
			<h2 style="color: #ffffff;"></h2>
			<a href="/" style="color: #ffffff;">topPageへ</a><br>
			<nuxt-link to="/about" style="color: #ffffff;">筆者について</nuxt-link><br>
			<nuxt-link to="/feedback" style="color: #ffffff;">フィードバックを送信</nuxt-link><br><br>
			<p style="color: #ffffff;">(c) 2022 | drip-notes. </p>
  		</div>
	</footer>

</div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
body {
	margin-top: 50px;
	font-family: "Hiragino Kaku Gothic Pro",sans-serif;
	font-size: 14px;
	line-height:380%;
	color:#353535;
	font-size: 15px;
	background-color: #fafafa;
}
a{
	color:#353535;
	text-decoration: underline;
}
h2::before {
	content: "# ";
	font-size: 20px;
}
h2::after{
	content: " .";
	font-size: 20px;
}

html{
	border-top: 5px solid #3d6375;
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

h1 {
	max-width: 100%;
	padding-bottom: 0.4em;
	line-height: 1.2;
	border-bottom-width: 1px;
	border-bottom-style: solid;
}

h1, h2, h3, h4, h5, h6 {
	color: #3d6375;
	font-weight: bold;
}
h1{
    font-size: 30px;
    font-weight: medium;
	padding-bottom: 30px;
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
	max-width: 850px;
}

@media (prefers-color-scheme: dark) {
	html{
		border-top: 5px solid #5589a1;
	}
	body {
		color:#dddddd;
		font-size: 15px;
		background-color: #3a3a3a;
	}
	h1, h2, h3, h4, h5, h6 {
		color: #5589a1;
		font-weight: bold;
	}
	a{
		color: #dddddd;
	}	
}
</style>
