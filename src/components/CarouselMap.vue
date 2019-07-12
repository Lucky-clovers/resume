<template>
  <div class='CarouselMap'>
    <ul>
      <li class='slider'  :style="{backgroundImage: 'url(' + sliders[2].img + ')' }"></li>
    </ul>
  </div>
</template>

<script>

import imgUrl1 from '../../static/bg1.jpg'
import imgUrl2 from '../../static/bg2.jpg'
import imgUrl3 from '../../static/bg3.jpg'

export default {
  data(){
    return{
      sliders:[
        {img: imgUrl1},
        {img: imgUrl2},
        {img: imgUrl3},
      ]
    }
  }

}
</script>

<style scoped>
.slider{
 position: fixed;
 width: 100%;
 height: 100%;
}
</style>
