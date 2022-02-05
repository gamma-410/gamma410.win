<template>
<div class="container-fluid">
  <h1>
    <img src="logo1.svg" width="150px">
  </h1>
  <h2>Hello</h2>
  <ul>
  <li><nuxt-link to="/about">About me</nuxt-link></li>
  <li><a href="mailto:mail@dr-notes.work">Contact mail</a></li>
  </ul>
  <h2>Articles</h2>
  <ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/${content.id}`">
        {{ content.title }}
      </nuxt-link>
    </li>
  </ul>
  <h1></h1>
  <p>(c) Copyright 2021 #dr-notes. </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://moka.microcms.io/api/v1/dr-notes',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-MICROCMS-API-KEY': 'af1039ff-f613-47f8-a204-9e0019ae85fe' }
      }
    )
    return data
  }
}
</script>

<style>
body {
	margin-top: 50px;
	font-family: "Hiragino Kaku Gothic Pro",sans-serif;
	font-size: 14px;
	padding: 0 12px;
	line-height:380%;
	color:#727272;
	font-size: 15px;
	background-color: #fafafa;
}
a{
	color: #727272;
}
h2::before {
	content: "# ";
	font-size: 20px;
}
h2::after{
	content: ".";
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