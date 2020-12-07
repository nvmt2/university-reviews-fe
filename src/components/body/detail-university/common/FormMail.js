import React from 'react';
import "./../style/form-mail.css";

function FormMail() {
    return (

    <div class="container">
    <div id="form_thong_tin_LH">
        <span id="label_thong_tin_lien_he" class=" d-block text-center">THÔNG TIN LIÊN HỆ</span>
        <h1 class="tieu-de-lien-he text-center mt-1"><span id="doi-mau">Liên hệ</span> với chúng tôi</h1>
        <img id="trangtri" src="images/Image 26.png" alt="" />
        <div class="row mt-3">
            <div class="col-md-4">
                <span class="icon-LH"><i class="fas fa-map-marker-alt"></i></span>
                <p class="lable-dia-chi text-center">Địa Chỉ</p>
                <p class="chi-tietLH text-center">254 Nguyễn Văn Linh</p>
            </div>
            <div class="col-md-4">
                <span class="icon-LH"><i class="fas fa-phone"></i></span>
                <p class="lable-dia-chi text-center">Điện Thoại</p>
                <p class="chi-tietLH text-center">09056633225</p>
            </div>
            <div class="col-md-4">
                <span class="icon-LH"><i class="far fa-envelope"></i></span>
                <p class="lable-dia-chi text-center">Email</p>
                <p class="chi-tietLH text-center">BachKhoaMamNon@gmail.com</p>
            </div>
        </div>
        <hr />

        <div class="row">
            <div class="col-md-7">
                <form action="">
                    <div class="form-group">
                        <input type="text" class="form-control" id="namehotenLH" placeholder="Họ và tên" />
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="emailLH" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="sdtLH" placeholder="Số điện thoại" />
                    </div>
                    <div class="form-group">
                       <textarea class="form-control" id="noidungLH" cols="" rows="3" placeholder="Nội dung . . ."></textarea>
                    </div>
                    <button type="submit" class="btn btn-outline-success">Gửi thông tin</button>
                </form>
            </div>
     
            <div class="col-md-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8204743580077!2d108.22070411468421!3d16.074803188877496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218307d81c91d%3A0xbc7c14cab8a09c8!2sDuy%20Tan%20University!5e0!3m2!1sen!2s!4v1606904089524!5m2!1sen!2s" width="100%" height="80%" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    </div>

</div>

    )
}

export default FormMail
