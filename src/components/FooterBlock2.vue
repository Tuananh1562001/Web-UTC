<template>
  <div class="footer__block2">
    <div class="footer__row">
      <div class="footer-row">
        <h1>Tiện ích</h1>
        <ul>
          <li><a href="">Văn bản</a></li>
          <li><a href="">Video</a></li>
          <li><a href="">Thư viện ảnh</a></li>
          <li><a href="">Lịch công tác</a></li>
          <li><a href="">Đội ngũ giảng viên</a></li>
        </ul>
      </div>
      <div class="footer-row">
        <h1>Truy cập nhanh</h1>
        <ul>
          <li><a href="">Thư viện</a></li>
          <li><a href="">Tạp chí Khoa học GTVT</a></li>
          <li><a href="">Nhà trường điện tử (nội bộ)</a></li>
          <li><a href="">Văn phòng điện tử (nội bộ)</a></li>
          <li><a href="">Đăng kí học</a></li>
          <li><a href="">Bộ Giáo dục & Đào tạo</a></li>
        </ul>
      </div>
      <div class="footer-row">
        <p>Trường Đại học Giao thông vận tải</p>
        <div class="footer_img">
          <a href=""><img :src="require('/public/image/gtvtHaNoi.png')" /></a>
        </div>
        <p>Trường đại học Giao thông vận tải - Phân hiệu Hồ Chí Minh</p>
        <div class="footer_img">
          <a href=""><img :src="require('/public/image/gtvtHCM.jpg')" /></a>
        </div>
      </div>
    </div>
    <p class="license">
      @2021 Bản quyền thuộc Trường Đại học Giao thông vận tải
    </p>
  </div>
</template>

<script>
export default {
  name: "footerBlock2",
};
</script>

<style>
.footer__block2{
    width: 70%;
}
.footer__row{
    display: flex;
    justify-content: space-between;
    padding-left: 40px;
}
.footer__row h1{
    font-size: 18px;
}
.footer-row ul li{
    list-style: none;
    padding-top: 30px;
}
.footer-row ul li a{
    color: #a3b7cf;
    text-decoration: none;
}
.footer-row ul li a:hover{
    color: white;
}
.footer-row{
    width: 30%;
    height: 100%;
}
.footer-row .footer_img{
    width: 100%;
    height: 130px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.footer-row .footer_img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}
.license{
    margin-top: 100px;
}
</style>