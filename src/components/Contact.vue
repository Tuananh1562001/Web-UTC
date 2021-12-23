<template>
    <div class="contact__bottom">
            <div class="phone__box">
                <a href="" class="phone__img"><i class="fas fa-phone-volume"></i></a>
                <div class="contact__text">
                    <p>Gọi cho chúng tôi</p>
                    <a href=""><h1>(84.24) 37663311</h1></a>
                </div>
            </div>
            <div class="email__box">
                <a href="" class="email__img"><i class="fas fa-envelope"></i></a>
                <div class="contact__text">
                    <p>Gửi email cho chúng tôi</p>
                    <a href=""><h1>dhgtvt@utc.edu.vn</h1></a>   
                </div>
            </div>
            <div class="question__box">
                <a href="" class="question__img"><i class="far fa-comments"></i></a>
                <div class="contact__text">
                    <p>Câu hỏi thường gặp</p>
                    <a href=""><h1>Giải đáp các câu hỏi thường gặp</h1></a>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name: 'contact'
}
</script>
<style>
.contact__bottom{
    display: flex;
    position: absolute;
    left: 50px;
    right: 50px;
    margin-top: 80px;
}
.contact__bottom .phone__box{
    width: 35%;
    height: 150px;
    border-radius: 20px;
    background-color: #01b7fa;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.phone__box .phone__img i{
   font-size: 60px;
   transform: translateX(-20px) rotate(-30deg);
   color: white;
}
.contact__text p{
    color: white;
    padding-bottom: 5px;
}
.contact__text a{
    text-decoration: none;
}
.contact__text a h1{
    text-decoration: none;
    color: white;
}
.contact__text a h1{
    font-size: 25px;
}
.contact__bottom .email__box{
    width: 35%;
    height: 150px;
    background-color: #165baa;
    display: flex;
    justify-content: center;
    align-items: center;
}
.email__box img{
    position: absolute;
    top:65%;
    right: 35%;
}
.email__box .email__img i{
   font-size: 60px;
   color: white;
   transform: translateX(-20px);
}
.contact__bottom .question__box{
    width: 35%;
    height: 150px;
    background-color: #fab101;
    border-radius: 20px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.question__box .question__img i{
   font-size: 60px;
   color: white;
   transform: translateX(-20px);
}
</style>