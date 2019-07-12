<template>
  <div class='box'>
    <div class="tab-tit">
      <a href="javascript:;" @click="msg=0" :class='{"cur": msg === 0}'>首页</a>
      <a href="javascript:;" @click="msg=1" :class='{"cur": msg === 1}'>轮播</a>
      <a href="javascript:;" @click="msg=2" :class='{"cur": msg === 2}'>导航</a>
      <a href="javascript:;" @click="msg=3" :class='{"cur": msg === 3}'>内容</a>
    </div>
    <div class="tab-con">
      <div v-show="msg === 0">111</div>
      <div v-show="msg === 1">222</div>
      <div v-show="msg === 2">333</div>
      <div v-show="msg === 3">444</div>
    </div>
  </div>
</template>


<script>
export default {
 data (){
   return{
     msg: 0
   }
 }
}
</script>


<style scoped>
.box{
  width: 600px;
  margin: 0 auto;
}
.tab-tit{
  font-size: 0;
  width: 600px;
}
.tab-tit a{
  display: inline-block;
  height: 50px;
  width: 25%;
  font-size: 18px;
  text-align: center;
  background-color: #ccc;
  color: #333;
  text-decoration: none;
}
.tab-tit .cur{
  background-color: #09f;
  color: #fff;
}
.tab-con div{
  border: 1px solid #ccc;
  height: 400px;
  width: 598px;
  margin: 0 auto;
  padding-top: 20px
}
</style>
