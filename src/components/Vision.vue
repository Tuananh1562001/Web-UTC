<template>
    <div class="vision">
        <div class="vision__text">
            <h1 class="vision__title">
                TẦM NHÌN
            </h1>
            <p>
                Trở thành trường đại học đa nghành theo định hướng nghiên cứu, khẳng định vị tế hàng đầu
                Việt Nam trong lĩnh vực giao thông vận tải, có uy tín và chất lượng ngang tầm Châu Á.
            </p>
            <a href="">Xem thêm<i class="fas fa-angle-double-right"></i></a>
        </div>
        <div class="vision__image">
            <img :src="require('/public/image/student-life.jpg')" alt="">
        </div>
        <div class="student__activity">
            <h1>Hoạt động sinh viên</h1>
            <div class="student__life">
                <div style="background-color: #ffc107;" class="student__block">
                    <h2>Sinh viên tương lai
                        <div class="student__row"></div>
                    </h2>
                    <p>Trở thành sinh viên của Trường Đại học Giao thông vận tải, bạn có cơ hội tiếp cận 
                        môi trường học tập với cơ sở vật chất hiện đại, tiện ngh: chương trình đào tạo tiên
                        tiến; môi trường rèn luyện năng động và sáng tạo
                    </p>
                    <div style="background-color: #bd8600;" class="about__more">
                        <a href="">Tìm hiểu<i class="fas fa-angle-double-right"></i></a>
                    </div>
                </div>
                <div style="background-color: #01b7fa;" class="student__block">
                    <h2>Sinh viên hiện tại
                        <div class="student__row"></div>
                    </h2>
                    <p>Sinh viên Giao thông không cỉ tham gia những tiết học chính khóa bổ ích trên giảng 
                        đường, mà còn có cơ hội tham gia vào các câu lạc bộ học thuật để thỏa mãn đam mê
                        học tập và nghiên cứu như: CLB Robocon, CLB lái xe sinh thái,
                        CLB diễn thuyết, CLB tiếng anh,...
                    </p>
                    <div style="background-color: #009ad3;" class="about__more">
                        <a href="">Tìm hiểu<i class="fas fa-angle-double-right"></i></a>
                    </div>
                </div>
                <div style="background-color: #2e218b;" class="student__block">
                    <h2>Cựu sinh viên
                        <div class="student__row"></div>
                    </h2>
                    <p>Với mục đích tri ân Nhà trường, các cựu sinh viên đã bày tỏ tấm lòng tri ân với Nhà 
                        trường qua các hoạt động như ủng hộ kinh phí xây dựng Nhà trường, tặng hoa tri ân
                        các thầy giáo cô giáo. Mong muốn xây dựng Nhà trường ngày càng phát triển, sáng mãi
                        thông điệp "Chúng tôi tự h...
                    </p>
                    <div style="background-color: #271756;" class="about__more">
                        <a href="">Tìm hiểu<i class="fas fa-angle-double-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'vision'
}
</script>
<style>
.vision{
    width: 100%;
    height: 900px;
    position: relative;
}
.vision .vision__text{
    position: absolute;
    top: 0;
    right:120px;
    width: 25%;
    height: 300px ;
}
.vision__text .vision__title{
    color: var(--primary-color);
    
    font-size: 50px;
    padding-bottom: 20px;
}
.vision__text p{
    text-align: justify;
    line-height: 1.5;
    color: #666666;
    font-size: 21px;
    padding-bottom: 21px;
}
.vision__text a{
    text-decoration: none;
    color: var(--primary-color);
    font-size: 18px;
    border-bottom: 2px solid var(--primary-color);
}
.vision__text a i{
    padding-left: 10px;
}
.vision .vision__image{
    width: 50%;
    position: absolute;
    top: 20%;
    height: 500px;
}
.vision .vision__image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.vision .vision__image .vision__comment{
    position: absolute;
    top: 30%;
    left: 20%;
    font-size: 50px;
    font-family:'Poppins', sans-serif ;
    color: white;
    font-weight: 600;
}
.student__activity{
    position: absolute;
    top: 35%;
}
.student__activity h1{
    font-size: 50px;
    color: white;
    font-family: 'Poppins', sans-serif ;
    padding-bottom: 50px;
}
.student__activity .student__life{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.student__block{
    width: 30%;
    height: 420px;
}
.student__block h2{
    position: relative;
    padding-top: 40px;
    text-align: center;
    font-size: 30px;
    color: white;
}
.student__block .student__row{
    position: absolute;
    background-color: white;
    top: 140%;
    left: 20%;
    width: 60%;
    height: 1px;
}
.student__block p{
    margin-top: 60px;
    text-align: justify;
    padding-left: 40px;
    padding-right: 40px;
    color: white;
    line-height: 1.2;
    font-size: 20px;
}
.student__block .about__more{
    position:absolute;
    bottom: 0;
    width:383px;
    text-decoration: none;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
}
.student__block .about__more a{
    text-decoration: none;
    color: white;
    font-size: 20px;
}
.student__block .about__more a i{
    padding-left: 10px;
}
</style>