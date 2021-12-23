<template>
  <div id="app">
    <header>
      <nav class="contact__header">
        <ul>
          <li><a href="#">SƠ ĐỒ WEB</a></li>
          <li><a href="#">THƯ ĐIỆN TỬ</a></li>
          <li><a href="#">LIÊN HỆ</a></li>
          <button>ĐĂNG NHẬP</button>
        </ul>
      </nav>
      <nav class="row">
        <div class="image"><img :src="require('../public/image/logo.png')" /></div>
        <input type="text" /><i class="fas fa-search"></i>
      </nav>
      <nav class="navbar">
        <ul>
          <li>
            <a href=""><i class="fas fa-home"></i></a>
          </li>
          <li><a href=""></a></li>
          //
          <li><a href="">GIỚI THIỆU</a></li>
          //
          <li><a href="">TIN TỨC</a></li>
          //
          <li><a href="">ĐÀO TẠO</a></li>
          //
          <li><a href="">TUYỂN SINH</a></li>
          //
          <li><a href="">KHOA HỌC CÔNG NGHỆ</a></li>
          //
          <li><a href="">HỢP TÁC</a></li>
          //
          <li><a href="">ĐẢNG - ĐOÀN THỂ</a></li>
        </ul>
      </nav>
    </header>
    <!-- header end -->
    <section class="all">
      <div class="slideshow">
        <img :src="require('../public/image/slide-1-img-1550.jpg')" />
      </div>
      <div class="grade">
        <nav class="list">
          <h1>CÁC KHOA - VIỆN - ĐƠN VỊ THUỘC TRƯỜNG:</h1>
          <div class="write">
            <div class="write1">
              <li><a href="#">Phân hiệu tại TP.Hồ Chí Minh</a></li>
              <li><a href="">Các khoa trực thuộc Trường</a></li>
              <li><a href="">Đơn vị chức năng</a></li>
              <li><a href="">Cổng thông tin tuyển sinh</a></li>
            </div>
            <div class="write2">
              <ul>
                <li><a href="#">Xét Giáo sư - Phó giáo sư</a></li>
                <li><a href="">Cổng thông tin sinh viên</a></li>
                <li><a href="">Đăng kí học</a></li>
                <li><a href="">Xem thêm</a></li>
              </ul>
            </div>
          </div>
          <us></us>
        </nav>
      </div>
    </section>
    <!-- all end -->
    <div class="last__news">
        <h1 class="title">Tin nổi bật</h1>
        <news></news>
    </div>
    <!-- news end -->
    <div class="notification">
        <h3>Thông báo</h3>
        <noti></noti>
    </div>
    <!-- noti end -->
    <edu></edu>
    <mission></mission>
    <vision></vision>
    <div class="research__more">
        <a href="">Khám phá thêm<i class="fas fa-angle-double-right"></i></a>
    </div>
    <!-- research end -->
    <div class="target">
        <div class="target__text">
            <p>
                Trường Đại học Giao thông vận tải hướng tới đào tạo người học trở thành công dân toàn cầu,
                có tinh thần dân tộc và trách nhiệm quốc tế.
            </p>
            <p>
                Nhà trường áp dụng phương pháp giáo dục tích cực, học đi đôi với hành, kiếm tạo môi trường
                giúp người học xây dựng và rèn luyện ý thức tự học suốt đời, khả năng thích ứng với mọi
                hoàn cảnh nhằm phát huy tốt nhất tiềm năng và khả năng sáng tạo.
            </p>
            <p>
                Nhà trường xác định người học là trung tâm, người thầy truyền cảm hứng.
            </p>
        </div>
        <div class="target__img">
            <img :src="require('/public/image/truyencamhung.png')" alt="">
        </div>
    </div>
    <!-- target end -->
    <div class="event">
        <div class="event__title">
            <h1>Sự kiện</h1>
        </div>
        <a href="" class="event__page">Xem chi tiết</a>
        <event></event>
        <contact></contact>
    </div>
    <button id="btnScrollToTop">
        <i class="fas fa-arrow-up"></i>
    </button>
    <footer>
      <footerBlock1></footerBlock1>
      <footerBlock2></footerBlock2>
    </footer>
 </div>
</template>

<script>
import Us from './components/Us.vue';
import News from './components/News.vue';
import Noti from './components/Noti.vue';
import Edu from './components/Edu.vue';
import Mission from './components/Mission.vue';
import Vision from './components/Vision.vue';
import Event from './components/Event.vue';
import Contact from './components/Contact.vue';
import FooterBlock1 from './components/FooterBlock1.vue';
import FooterBlock2 from './components/FooterBlock2.vue'


export default {
  name: "App",
  components: {
    Us, News, Noti, Edu, Mission, Vision, Event, Contact,FooterBlock1,FooterBlock2
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --primary-color: #ffc107;
}
header,
.last__news,
.notification,
.educate,
.mission,
.student__activity,
.event {
  width: 100%;
  margin: 0 auto;
  padding-left: 120px;
  padding-right: 120px;
}

/* contact start  */
.contact__header {
  width: 100%;
  height: 40px;
  margin-right: 0;
}
.contact__header ul {
  display: flex;
  justify-content: right;
  align-items: center;
}
.contact__header ul li {
  margin-left: 30px;
  list-style: none;
}
.contact__header ul li a {
  font-size: 10px;
  color: black;
  text-decoration: none;
}
.contact__header ul li a:hover {
  color: var(--primary-color);
}
.contact__header ul button {
  margin-left: 30px;
  width: 130px;
  height: 40px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: var(--primary-color);
}
.contact__header ul button:hover {
  background-color: #28a745;
}

.row {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
}
.row .image {
  width: 70%;
  height: 100%;
}
.row .image img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}
.row i {
  margin-left: 5px;
  padding-top: 10px;
  border-radius: 5px;
  background-color: cornflowerblue;
  width: 60px;
  height: 35px;
  text-align: center;
  cursor: pointer;
}
.row input {
  margin-left: 40px;
  height: 35px;
  width: 20%;
}

/* navbar start */
.navbar ul {
  display: flex;
  list-style: none;
}
.navbar ul li {
  margin: 0 10px;
}
.navbar ul li a {
  font-size: 20px;
  color: black;
  text-decoration: none;
}
.navbar ul li a:hover {
  color: var(--primary-color);
}
/* navbar end */
/* slide-show start */
.all{
    margin-top: 40px;
    margin-bottom: 40px;
    width: 100%;
    height: 550px;
    background-color: #dddddd;
    display: flex;
}
.all .slideshow{
    width: 65%;
    height: 100%;
}
.all .slideshow img{
    width: 100%;
}
.all .grade{
    width: 30%;
    margin: 0 auto;
}
.list{
    height: 200px;
    margin-top: 20px;
    margin-bottom: 30px;
    background-color: #235dc4;
    border-bottom: 5px solid #01b7fa;
}
.list h1{
    color: #fff;
    padding-top: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
}
.list .write{
    display: flex;
    margin-bottom: 40px;
}
.list .write .write1{
    padding-right: 30px;
    padding-left: 20px;
}
.write1 li {
    list-style: none;
    padding-bottom: 10px;
}
.write1 li a{
    color: #fff;
    text-decoration: none;
}
.write1 li a:hover{
    color: var(--primary-color);
}
.write2 li {
    list-style: none;
    padding-bottom: 10px;
}
.write2 li a{
    color: #fff;
    text-decoration: none;
}
.write2 li a:hover{
    color: var(--primary-color);
}

/* slide-show end */
/* news start */
.last__news .title{
    text-align: center;
    color: var(--primary-color);
    font-family: 'Roboto', sans-serif;
    font-size: 35px; 
    margin-bottom: 40px;
}
.last__news .block__news, .block__noti, .educate{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;
}

/* news end */
/* noti start */
.notification{
    background-color: #f4f6fc;
}
.notification h3{
    text-align: center;
    color: #2555aa;
    font-family: 'Roboto', sans-serif;
    font-size: 35px; 
    padding-bottom: 50px;
    padding-top: 50px;
}
/* noti end */

.research__more{
    position: absolute;
    right: 0;
    padding-right: 120px;
}
.research__more a{
    padding-bottom: 5px;
    font-size: 18px;
    text-decoration: none;
    color: var(--primary-color);
    border-bottom: 3px solid var(--primary-color);
}
.research__more a i{
    padding-left: 10px;
}
/* target start */
.target{
    display: flex;
    width: 100%;
    height: 550px;
    padding-right: 10px;
    padding-left: 10px;
    margin-top: 85px;
}
.target .target__text{
    width: 30%;
    height: 100%;
    background-color: #2555aa;
}
.target .target__text p{
    padding: 35px;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    line-height: 1.5;
    color: white;
}
.target .target__img{
    width: 70%;
    height: 100%;
}
.target .target__img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
/* target end */

/* event start */
.event{
    height: 800px;
    background-color: whitesmoke;
}
.event .event__title{
    text-align: center;
    color: #2555aa;
    font-family: 'Roboto', sans-serif;
    font-size: 35px; 
    padding-bottom: 10px;
    padding-top: 100px;
}
.event .event__page{
    position: absolute;
    left: 46%;
    width: 130px;
    height: 50px;
    border: 1px solid #e2e2e2;
    background-color: #f5f5f5;
    padding: 15px 25px;
    text-decoration: none;
    font-size: 15px;
    color: black;
}
/* event end */
/* scroll to top start */
#btnScrollToTop{
    position: fixed;
    right: 10px;
    bottom: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    color: var(--primary-color);
    border: none;
}
#btnScrollToTop:active{
    background-color: #007bff;
}
#btnScrollToTop i{
    font-size: 25px;
}
/* scroll to top end */
footer{
    width: 100%;
    height: 700px;
    padding: 130px 120px 20px 120px;
    background-color: #00377a;
    color: white;
    display: flex;
}
/* Mobile: width < 740px  */
@media only screen and (max-width:740px){ 
    header{
        padding: 0;
        width: 100%;
    }
    .row{
        height: 60px;
    }
    .row input{
        margin-left: 5px;
        height: 25px;
        width: 30%;
    }
    .row i{
        height: 25px;
        width: 40px;
        padding-top: 5px;
    }
    .navbar{
        display: none;
    }
    .all{
        flex-direction: column;
        background-color: white;
    }
    .all .slideshow{
        width: 100%;
    }
    .all .grade{
        width: 100%;
        background-color:#dddddd;
        margin-top: 40px;
    }
    .list{
       width: 90%;
       height: 250px;
       margin: 0 auto;
    }  
    .list h1{
       text-align: center;
    } 
    .more{
        margin-top: 40px;
        width: 90%;
        padding-bottom: 20px;
    }
    .last__news{
        margin-top: 400px;
        padding-left: 15px;
        padding-right: 15px;
    }
    .block__news{
        flex-direction: column;
    }
    .news__row{
        width: 100%;
        justify-content: unset;
    }
    .news__daily_1, .news__image, .news__daily_2{
        width: 50%;
    }
    .notification{
        padding: 0 5px 0 5px;
    }
    .block__noti .last__noti{
        width: 100%;
    }
    .educate{
        padding: 0 5px 0 5px;
    }
    .educate__image{
        width: 100%;
        padding-bottom: 5px;
    }
    .educate__image img{
        width: 100%;
        padding-bottom: 10px;
    }
    .mission{
        padding: 0 5px 0 5px;
    }
    .mission .border__top{
        width: 230px;
    }
    .mission .border__left, .mission .mission__bottom{
        display: none;
    }
    .mission .mission__para{
        width: 100%;
        height: 350px;
    }
    .mission__para p{
        padding-right: 10%;
    }
    .mission .mission_image{
        display: none;
    }
    .vision{
        margin-top: 10px;
        padding-left: 5px;
        padding-right: 5px;
    }
    .vision .vision__text{
        padding-top: 30px;
        left: 5px;
        right: 5px;
        width: 90%;
    }
    .vision .vision__image{
        top:40%;
        width: 95%;
        height: 200px;
    }
    .student__activity{
        margin-top: 300px;
        padding: 0 5px 0 35px;
    }
    .student__activity h1{
        display: none;
    }
    .student__activity .student__life{
        flex-direction: column;
    }
    .student__block{
        width: 90%;
        height: 400px;
        margin-bottom: 50px;
    }
    .student__block h2{
        padding-top: 20px;
    }
    .student__block p{
        margin-top: 30px;
    }
    .student__block .about__more{
        position: relative;
        width: 100%;
        margin-top: 20px;
    }
    .target{
        margin-top: 1150px;
    }
    .research__more{
        margin-top: 1100px;
        padding-right: 15px;
    }
    .target{
        flex-direction: column;
    }
    .target .target__text,.target .target__img{
        width: 100%;
        height: 650px;
    }
    .target .target__text p{
        padding: 15px;
    }
    .event{
        margin-top: 100px;
        padding-left: 15px;
        padding-right: 15px;
        height: 830px;
    }
    .event .event__title{
        padding-top: 50px;
    }
    .event .event__page{
        left: 30%;
    }
    .event .event__row{
        flex-direction: column;
    }
    .event__row .event__block{
        width: 100%;
        padding-bottom: 40px;
        height: 300px;
    }
    .event__block .event__img{
        height: 150px;
    }
    .contact__bottom{
        display: none;
    }
    footer{
        margin-top: 350px;
        padding-top: 20px;
        padding-left: 10px;
        padding-right: 10px;
        height: 660px;
        flex-direction: column;
    }
    .footer__block1{
        width: 100%;
    }
    .footer__block2{
        display: none;
    }
}

/* Table: width >= 740px and width < 1024px */
@media only screen and (min-width: 740px) and (max-width: 1024px) {
    header{
        padding-left: 15px;
        padding-right: 15px;
    }
    .navbar{
        display: none;
    }
    .all{
        flex-direction: column;
        background-color: white;
    }
    .all .slideshow{
        width: 100%;
    }
    .all .grade{
        width: 100%;
        background-color:#dddddd;
        margin-top: 40px;
    }
    .list{
       width: 80%;
       margin: 0 auto;
       margin-top: 30px;
       margin-bottom: 30px;
    }
    .list h1{
        text-align: center;
    }
    .list .write{
        justify-content:space-evenly;
        align-items: center;
    }
    .more{
        width: 80%;
        padding-bottom: 20px;
    }
    .last__news{
        margin-top: 530px;
        padding-left: 15px;
        padding-right: 15px;
    }
    .block__news{
        flex-direction: column;
    }
    .news__row{
        width: 80%;
    }
    .block__noti{
        flex-direction: column;
    }
    .block__noti .last__noti{
        width: 100%;
    }
    .educate__image{
        width: 100%;
    }
    .educate__image img{
        width: 100%;
        padding-bottom: 10px;
    }
    .mission .mission__para{
        width: 100%;
        height: 400px;
    }
    .mission .mission__para p{
        padding-right: 10%;
    }
    .mission .mission_image{
        margin-top: 650px;
        width: 100%;
        right: auto;
    }
    .vision{
        margin-top: 800px;
    }
    .vision .vision__text{
        width: 50%;
    }
    .vision .vision__image{
        margin-top: 130px;
        height: 300px;
    }
    .student__activity{
        margin-top: 350px;
    }
    .student__activity h1{
        display: none;
    }
    .student__activity .student__life{
        flex-direction: column;
    }
    .student__block{
        width: 100%;
        height: 300px;
        margin-bottom: 50px;
    }
    .student__block .about__more{
        position: relative;
        width: 100%;
        margin-top: 20px;
    }
    .target{
        margin-top: 900px;
    }
    .research__more{
        margin-top: 850px;
    }
    .target{
        flex-direction: column;
    }
    .target .target__text,.target .target__img{
        width: 100%;
    }
    .event{
        margin-top: 300px;
        padding-left: 15px;
        padding-right: 15px;
        height: 830px;
    }
    .event .event__block{
        height: 400px;
    }
    .event .event__page{
        left: 40%;
    }
    .contact__bottom{
        flex-direction: column;
        margin-top: 30px;
    }
    .contact__bottom .phone__box{
        width: 100%;
        height: 50px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        margin-bottom: 20px;
    }
    .phone__box .phone__img i, .email__box .email__img i, .question__box .question__img i{
        font-size: 30px;
    }
    .contact__bottom .email__box{
        width: 100%;
        border-radius: 20px;
        height: 50px;
        margin-bottom: 20px;
    }
    .contact__bottom .question__box{
        width: 100%;
        height: 50px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }
    footer{
        padding-left: 15px;
        padding-right: 15px;
        height: 1550px;
        flex-direction: column;
    }
    .footer__block1, .footer__block2{
        width: 100%;
    }
    .footer__block2{
        padding-top: 0;
    }
    .license{
        margin-top: 0;
        text-align: center;
    }
}
</style>
