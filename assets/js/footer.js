const footer = document.getElementById("footer")
if(footer) {
    const myfooter = document.createElement("DIV")
    myfooter.classList.add("bottom", "pt-5")
    myfooter.innerHTML = `
    <div class="container">
        <div class="newslettre">
            <div class="newslettre-width">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-7 m-auto ">
                        <div class="newslettre-info">
                            <h3>Nhận những bài viết mới nhất trong hòm thư của bạn</h3>
                            <p> GoFood có mặt trong mọi bữa ăn của gia đình bạn. </p>
                        </div>
                        <form action="#" class="newslettre-form position-relative">
                            <div class="form-flex">
                                <div class="form-group"><input type="text" required class="form-control" placeholder="Địa chỉ Email..." /></div>
                                <button class="submit-btn" type="submit">Đăng ký</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <div class="row">
                <div class="col-lg-12">
                    <div class="copyright justify-content-between">
                        <p>© 2022 GoCook -  All Rights Reserved.</p>
                        <p> Companion by <a href="/"> Team 11 </a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    footer.appendChild(myfooter)
}