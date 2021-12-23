<template>
    <div class="footer__block1">
                <div class="address__hanoi">
                    <img :src="require('/public/image/logofooter-gtvt.png')" alt="">
                    <p>Địa chỉ: Số 3 phố Cầu Giấy, P.Láng Thượng, Q.Đống Đa, Hà Nội.</p>
                    <p>Điện thoại: (84.24) 37663311 - Fax: (84.24)37669613</p>
                    <p>Email: dhgtvt@utc.edu.vn</p>
                </div>
                <div class="address__hcm">
                    <h1>PHÂN HIỆU TẠI THÀNH PHỐ HỒ CHÍ MINH</h1>
                    <p>Địa chỉ: 450-451 Đường Lê Văn Việt, Phường Tăng Nhơn Phú A, Tp.
                        Thủ Đức (Quận 9 cũ),TP.Hồ Chí Minh
                    </p>
                    <p>Điện thoại (84.28) 38966798 - Fax: (84.28)38964736</p>
                    <p>Email: info@utc2.edu.vn</p>
                    <p>website: http://phanhieu.utc.edu.vn</p>
                </div>
                <div class="follow-utc">
                    <h1>THEO DÕI UTC</h1>
                    <a href=""><i class="fab fa-facebook-f"></i></a>
                    <a href=""><i class="fab fa-youtube"></i></a>
                    <a href=""><i class="fab fa-twitter"></i></a>
                    <a href=""><i class="fab fa-google-plus-g"></i></a>
                </div>
            </div>
</template>

<script>
export default {
    name: 'footerBlock1'
}
</script>

<style>
.footer__block1{
    width: 30%;
    height: 500px;
}
.address__hanoi{
    padding-bottom: 20px;
}
.address__hanoi img{
    padding-bottom: 20px;
}
.address__hanoi p{
    padding-bottom: 5px;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
}
.address__hcm h1{
    font-size: 18px;
    padding-bottom: 15px;

}
.address__hcm p{
    padding-bottom: 5px;
    font-family: 'Open Sans', sans-serif;
}
.follow-utc h1{
    padding-top: 15px;
    padding-bottom: 10px;
    color: #5a8ac4;
    font-size: 20px;
}
.follow-utc a{
    color: #a3b7cf;
    font-size: 26px;
    padding-right: 10px;
}
.follow-utc a:hover{
    color: white;
}
</style>