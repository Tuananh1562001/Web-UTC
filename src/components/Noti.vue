<template>
    <div class="block__noti">
            <div class="last__noti">
                <a href="" class="noti__img"><img :src="require('/public/image/85-c73db6bd0f14e6a1279c804c1e1efa3b.jpg')" alt=""></a>
                <a href="" class="noti__para">Tạp chí Khoa học GIao Thông vận tải (TCSJ) đã chính
                    thức được đưa vào cơ sở dữ liệu trích dẫn Đông Nam Á (ACI)
                </a>
            </div>
            <div class="last__noti">
                <a href="" class="noti__img"><img :src="require('/public/image/nh1.jpg')" alt=""></a>
                <a href="" class="noti__para">Thông báo xác nhận nhập học và thực hiện
                    nộp hồ sơ nhập học
                </a>
            </div>
            <div class="last__noti">
                <a href="" class="noti__img"><img :src="require('/public/image/banner.jpg')" alt=""></a>
                <a href="" class="noti__para">Giao thông cuộc thi "Sinh viên Đại học Giao thông
                    vận tải với ý tưởng khởi nghiệp"
                </a>
            </div>
            <div class="last__noti">
                <a href="" class="noti__img"><img :src="require('/public/image/noimg-thongbao.jpg')" alt=""></a>
                <a href="" class="noti__para">Thông báo Chương trình Học bổng đồng hành - 
                    Cầu đường Pháp kỳ 41
                </a>
            </div>
            <div class="last__noti">
                <a href="" class="noti__img"><img :src="require('/public/image/tb-khcn-vuong-1-.png')"  alt=""></a>
                <a href="" class="noti__para">Hướng dẫn đăng ký và sử dụng tài khoản Google Scholar
                </a>
            </div>
            <div class="last__noti">
                <a href="" class="noti__img"><img :src="require('/public/image/noimg-thongbao.jpg')" alt=""></a>
                <a href="" class="noti__para">Thông báo điểm trúng tuyển đại học hệ chính quy năm 
                    2021 xét tuyển theo kết quả học bạ THPT
                </a>
            </div>
        </div>
</template>

<script>

export default {
    name: 'noti',
    data(){
        return {};
    }
}
</script>

<style>
.notification .block__noti{
    margin-bottom: 40px;
    padding-bottom: 40px;
}
.block__noti .last__noti{
    width: 30%;
    height: 80px;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
}
.last__noti .noti__img{
    width: 35%;
    height: 100%;
    padding-right: 20px;

}
.last__noti .noti__img img{
    width: 100%;
    height: 100%;
    object-fit:fill;
}
.last__noti .noti__para{
    width: 65%;
    height: 100%;
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
}
.last__noti .noti__para:hover{
    color: var(--primary-color);
}
</style>