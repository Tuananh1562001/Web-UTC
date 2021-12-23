<template>
    <div class="mission">
        <h1 class="mission__text">SỨ MẠNG</h1>
        <div class="border__top"></div>
        <div class="border__bottom"></div>
        <div class="border__left"></div>
        <div class="mission__para">
            <p>
                Trường Đại học Giao thông vận tải có sứ mạng đào tạo, nghiên cứu
                khoa học, chuyển giao công nghệ chất lượng cao theo xu thế hội nhập, có trách nhiệm xã
                hội nhằm thúc đẩy sự phát triển bền vững của nghành giao thông vận tải và đất nước.
            </p>
        </div>
        <div class="mission_image">
            <img :src="require('/public/image/giangduongtruyenthong1511.png')" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'mission'
}
</script>

<style>
.mission{
    position: relative;
    padding-bottom: 50px;
}
.mission .border__top{
    position: absolute;
    top: 0;
    width: 170px;
    height: 1px;
    background-color: #adaeb1;
}
.mission .border__bottom{
    position: absolute;
    bottom: 0;
    left: 60px;
    width: 200px;
    height: 3px;
    background-color: var(--primary-color);
}
.mission .border__left{
    position: absolute;
    bottom: 0;
    left: 60px;
    width: 3px;
    height: 200px;
    background-color: var(--primary-color);
}
.mission .mission__text{
    padding-top: 30px;
    padding-bottom: 60px;
    font-size: 48px;
    font-family: "GoogleSans-Bold";
}
.mission .mission__para{
    width: 70%;
    height: 550px;
    background-color: #fab101;
}
.mission__para p{
    text-align: justify;
    padding: 10%;
    padding-right: 30%;
    font-size: 23px;
    line-height: 1.5;
    color: white;
}
.mission .mission_image{
    position: absolute;
    padding-right: 120px;
    top: 0;
    right: 0;
    z-index: 9;
}
</style>