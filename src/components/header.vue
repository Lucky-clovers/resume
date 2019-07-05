<template>
  <div class='header'>
    <h1 class='header_logo'>
      <img src="../assets/qi.png" alt="祁先生" title="祁先生" class='header_logo_img'>
      <span class='header_logo_jobtitle'>前端开发工程师</span>
    </h1>
   <ul>
     
  </ul>
  </div>
</template>
<style scoped>
.header_logo_img{
    width:88px;
  }
.header_logo_jobtitle{
    color: #888;
} 
.header{
     position: relative;
   }
 @media (min-width: 880px){
   .header_logo{
     width: 38px;
   }
   .header_logo_img{
     width: 120px;
   }
  
   .header_logo_jobtitle{
      position: absolute;
      bottom: 0;
      line-height: 20px;
   }
 }
 @media (min-width: 320px){
   .header_logo{
      position: relative;
      float: left;
      height: 28px;
      line-height: 28px;
   }
   .header_logo_jobtitle{
      position: absolute;
      bottom: 0;
      padding-left: 10px;
      line-height: 20px;
      white-space: nowrap;
   }
 }
</style>

<script>
export default {
  
}
</script>