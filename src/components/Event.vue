<template>
        <div class="event__row">
            <div class="event__block">
                <div class="event__img">
                    <img :src="require('/public/image/tu-van-thi-hoc-ky-i-k62.jpg')" alt="">
                </div>
                <div class="event__text">
                    <p>
                        Tư vấn trực tuyến giải đáp sinh viên K62 về hoạt động thi trực tuyến học ký I...
                    </p>
                    <a href="">Xem chi tiết</a>
                </div>
            </div>
            <div class="event__block">
                <div class="event__img">
                    <img :src="require('/public/image/nhieu-truong-su-dung-ket-qua-ky-thi-danh-gia-tu-duy-cua-dh-bach-khoa-ha-noi-1.jpg')" alt="">
                </div>
                <div class="event__text">
                    <p>
                        7 đại học dùng điểm thi đánh giá tư duy để xét tuyển
                    </p>
                    <a href="">Xem chi tiết</a>
                </div>
            </div>
            <div class="event__block">
                <div class="event__img">
                    <img :src="require('/public/image/z2672316277197-dd76a51bb1bb40c6e1f326de6c414e89.jpg')" alt="">
                </div>
                <div class="event__text">
                    <p>
                        Cuộc thi Thiết kế Robot Sumo - Thương hiệu mang tên UTC2
                    </p>
                    <a href="">Xem chi tiết</a>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name: 'event'
}
</script>
<style>
.event .event__row{
    width: 100%;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.event__row .event__block{
    width: 30%;
    height:350px;
    background-color: #fff;
}
.event__block .event__img{
    width: 100%;
    height: 200px;
}
.event__block .event__img img{
    width: 100%;
    height: 100%;
    object-fit: fill;
}
.event__block .event__text{
    padding: 30px;
}
.event__text p{
    line-height: 1.3;
    font-size: 18px;
    font-family: 'Source Sans 3', sans-serif;
    padding-bottom: 20px;
}
.event__text a{
    text-decoration: none;
    color: var(--primary-color);
    font-size: 18px;
    border-bottom: 1px solid var(--primary-color);
}
</style>