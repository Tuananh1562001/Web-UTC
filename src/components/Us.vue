<template>
    <div class="more">
        <div class="block__us">
            <a href="" class="block__image">
              <img :src="require('/public/image/dangkyhoc.png')" alt="" />
              <div class="overlay"></div>
            </a>
            <a href="" class="text">NHÀ TRƯỜNG ĐIỆN TỬ</a>
          </div>

          <div class="block__us">
            <a href="" class="block__image">
              <img :src="require('/public/image/thuvien-dientu.png')" alt="" />
              <div class="overlay"></div>
            </a>
            <a href="" class="text">THƯ VIỆN</a>
          </div>

          <div class="block__us">
            <a href="" class="block__image">
              <img :src="require('/public/image/tapchi-khoahoc-gtvt.png')" alt="" />
              <div class="overlay"></div>
            </a>
            <a href="" class="text">TẠP CHÍ KHOA HỌC GTVT</a>
          </div>

          <div class="block__us">
            <a href="" class="block__image">
              <img :src="require('/public/image/hoc-truc-tuyen.png')" alt="" />
              <div class="overlay"></div>
            </a>
            <a href="" class="text">HỌC TRỰC TUYẾN</a>
          </div>

          <div class="block__us">
            <a href="" class="block__image">
              <img :src="require('/public/image/vanphong-dientu.png')" alt="" />
              <div class="overlay"></div>
            </a>
            <a href="" class="text">VĂN PHÒNG ĐIỆN TỬ (NỘI BỘ)</a>
          </div>

          <div class="block__us">
            <a href="" class="block__image">
              <img :src="require('/public/image/lich-cong-tac.png')" alt="" />
              <div class="overlay"></div>
            </a>
            <a href="" class="text">LỊCH CÔNG TÁC</a>
          </div>

          <div class="block__us">
            <a href="" class="block__image">
              <img :src="require('/public/image/doingu-giangvien.png')" alt="" />
              <div class="overlay"></div>
            </a>
            <a href="" class="text">ĐỘI NGŨ GIẢNG VIÊN</a>
          </div>

          <div class="block__us">
            <a href="" class="block__image">
              <img :src="require('/public/image/van-ban.png')" alt="" />
              <div class="overlay"></div>
            </a>
            <a href="" class="text">VĂN BẢN</a>
          </div>

          <div class="block__us">
            <a href="" class="block__image">
              <img :src="require('/public/image/thuvien-media.png')" alt="" />
              <div class="overlay"></div>
            </a>
            <a href="" class="text">THƯ VIỆN MEDIA</a>
          </div>
    </div>
</template>

<script>
export default {
    name: 'us',
    data(){
        return {

        }
    }
}
</script>

<style>
.more{
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.block__us{
    width: 32%;
    height: 100px;
    position: relative;
    margin-bottom: 10px;
}
.block__image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.overlay{
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
    position: absolute;
    background-color: #6c511185;
    opacity: 0.5;
    transition: 0.5s ease;
}
.block__us .text{
    position: absolute;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    z-index: 9;
    top: 20%;
    left: 0;
    width: 100%;
    text-decoration: none;
    text-align: center;  
}
</style>