<template>
  <div class="block__news">
    <div class="news__row">
      <div class="news__daily_1">
        <h2>Tháng 12 <span>8</span></h2>
        <a href="#" class="news__title"
          >Lễ trao tặng Huy hiệu 45 năm và 40 năm tuổi Đảng</a
        >
        <div class="readmore">
          <a href="#">đọc tiếp</a><i class="fas fa-arrow-right"></i>
        </div>
      </div>
      <div class="news__image">
        <img :src="require('/public/image/mai-chau-3.jpg')" alt="" />
      </div>
    </div>
    <div class="news__row">
      <div class="news__image">
        <img
          :src="
            require('/public/image/vietuc02-8c59fe6d-cc19-4c2b-85b3-a7b4b8bce672.jpg')
          "
          alt=""
        />
      </div>
      <div class="news__daily_2">
        <h2>Tháng 12 <span>8</span></h2>
        <a href="#" class="news__title"
          >HỘI NGHỊ ĐỐI THOẠI GIỮA CÁC NHÀ LÃNH ĐẠO KHỐI CÁC TRƯỜNG ĐẠI HỌC CÔNG
          NGHỆ, KỸ THUẬT</a
        >
        <div class="readmore">
          <a href="#">đọc tiếp</a><i class="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
    <div class="news__row">
      <div class="news__daily_1">
        <h2>Tháng 12 <span>7</span></h2>
        <a href="#" class="news__title"
          >Khai giảng lớp bồi dưỡng lý luận chính trị dành hco đối tượng kết nạp
          Đảng khóa 53A
        </a>
        <div class="readmore">
          <a href="#">đọc tiếp</a><i class="fas fa-arrow-right"></i>
        </div>
      </div>
      <div class="news__image">
        <img :src="require('/public/image/nh1.jpg')" alt="" />
      </div>
    </div>
    <div class="news__row">
      <div class="news__image">
        <img :src="require('/public/image/nh1.jpg')" alt="" />
      </div>
      <div class="news__daily_2">
        <h2>Tháng 12 <span>8</span></h2>
        <a href="#" class="news__title"
          >Hợp tác với Binh đoàn 12 - Tổng Công ty Xây dựng Trường Sơn</a
        >
        <div class="readmore">
          <a href="#">đọc tiếp</a><i class="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {};
  }
};
</script>

<style>
.news__daily_1, .news__image, .news__daily_2{
    width: 40%;
    height: 200px;
    margin-bottom: 40px;
}
.news__row{
    display: flex;
    justify-content: space-between;
    width: 45%;
    height: 230px;
}
.news__daily_1 h2{
    color: var(--primary-color);
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 20px;
}
.news__daily_1 h2 span{
    font-size: 250%;
    color: #d2d2d2;
}
.news__daily_1 .news__title{
    text-decoration: none;
    color: black;
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    font-size: 15px;
    font-weight: bolder;
}
.news__daily_1 .readmore{
    margin-top: 30px;
}
.readmore a{
    text-decoration: none;
    color: var(--primary-color);
    font-size: 18px;
    padding-right: 10px;
}
.readmore .fas{
    color: var(--primary-color);
}
.news__image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.news__daily_2{
    text-align: right;
}
.news__daily_2 h2{
    color: var(--primary-color);
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 20px;
}
.news__daily_2 h2 span{
    font-size: 250%;
    color: #d2d2d2;
}
.news__daily_2 .news__title{
    text-decoration: none;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: bolder;
    line-height: 1.3;
}
.news__daily_2 .readmore{
    margin-top: 30px;
}
.readmore a{
    text-decoration: none;
    color: var(--primary-color);
    font-size: 18px;
    padding-right: 10px;
}
.readmore .fas{
    color: var(--primary-color);
}
</style>