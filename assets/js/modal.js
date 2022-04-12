const moodal = document.getElementById("myModal");
if(moodal) {
    const mymodal = document.createElement('DIV');
    mymodal.classList.add('User-modal');
    mymodal.innerHTML = `
        <div class="modal-overley"></div>
        <div class="modal-box">
            <div class="Sign-In-Box">
                <span id="close"><i class="fas fa-times"></i></span>
                <div id="User-account">
                    <form class="form" id="login">
                        <h1 class="form__title">Login</h1>
                        <div class="form__message form__message--error"></div>
                        <div class="form__input-group">
                            <span><i class="fas fa-user"></i></span>
                            <input id="username" type="text" class="form__input" autofocus placeholder="Username">
                        </div>
                        <div class="form__input-group">
                            <span><i class="fas fa-lock"></i></span>
                            <input id="password" type="password" class="form__input" autofocus placeholder="Password">
                        </div>
                        <span class="conguration" id="conguration"></span>
                        <button id="login-btn" class="form__button" type="button">LOGIN</button>
                        <div class="Social-media">
                            <h4>Or Sign in with social platforms</h4>
                            <ul>
                                <li>
                                    <a href="#"> <i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-google"></i></a>
                                </li>
                            </ul>
                        </div>
                        <p class="form__text">
                            <a class="form__link" href="./" id="linkCreateAccount">Don't have an account? <span>Create account</span></a>
                        </p>
                    </form>
                    
                    <form class="form form--hidden" id="createAccount">
                        <h1 class="form__title">Create Account</h1>
                        <div class="form__input-group">
                            <span><i class="fas fa-user-plus"></i></span>
                            <input type="text" id="signupUsername" class="form__input" autofocus placeholder="Username">
                        </div>
                        <div class="form__input-group">
                            <span><i class="fas fa-at"></i></span>
                            <input type="text" class="form__input" autofocus placeholder="Email Address">
                        </div>
                        <div class="form__input-group">
                            <span><i class="fas fa-unlock-alt"></i></span>
                            <input type="password" class="form__input" autofocus placeholder="Password">
                        </div>
                        <div class="form__input-group">
                            <span><i class="fas fa-key"></i></span>
                            <input type="password" class="form__input" autofocus placeholder="Confirm password">
                        </div>
                        <button id="signup-btn" class="form__button" type="submit">SIGN-UP</button>
                        <div class="Social-media">
                            <h4>Or Sign in with social platforms</h4>
                            <ul>
                                <li>
                                    <a href="#"> <i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-google"></i></a>
                                </li>
                            </ul>
                        </div>
                        <p class="form__text">
                            <a class="form__link" href="./" id="linkLogin">Already have an account? <span>Sign in</span></a>
                        </p>
                    </form>  
                </div>
            </div>
        </div>
    `;
    moodal.appendChild(mymodal);
}

/** ======================  Login  ================= */

let account = [
    {
        id: 0,
        name:"Minh Đẹp Trai",
        username:"minhnguyen2002",
        passwword:"Minh2002",
    },
    {
        id: 1,
        name:"Kim My",
        username:"kimmy2002",
        passwword:"Kimmy12345",
    },
    {
        id: 2,
        name:"Nam dep trai",
        username:"duynambungto",
        passwword:"Nambungto2002",
    }
]

const username = document.getElementById("username"),
      password = document.getElementById("password"),
      conguration = document.getElementById("conguration"),
      loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function() {
    let checkvalue = false;
    const checkUserName = /^[a-z0-9_-]{3,16}$/,
          checkPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    for (var i = 0; i < account.length; i++) {
        if(!checkUserName.test(`${username.value}`) || !checkPassword.test(`${password.value}`)) {
            conguration.innerHTML = `Sai tài khoản hoặc mật khẩu`;
            console.log(username.value, password.value);
        } 
        else if(username.value === "admin" && password.value === "Admin123456") {
            localStorage.removeItem("userid")
            localStorage.setItem("accept", true)
            window.location="https://gocookadmin.netlify.app/";
        }  
        else if(username.value === account[i].username && password.value === account[i].passwword) {
            localStorage.setItem("userid", account[i].id)
            checkvalue = true;
        }
        else {
            conguration.style.display = "Sai tài khoản hoặc mật khẩu"
        }
    }

    if(checkvalue === true) {
        location.reload();
    } 
})


var index = localStorage.getItem("userid");
if(localStorage.getItem("userid") === null) {
    $(window).resize(function() {
        var width = $(window).width();
        if (width < 400){
            $(".log-in").html(`<i class="fa-solid fa-user"></i>`)
        }
        if (width > 400){
            $(".log-in").html(`Đăng nhập`)
        }
      });
    $(".log-in").attr("id", "Login")
    $("#Login").removeClass(".show-option")
}   else    {
    $("#Login").addClass("show-option")
    $("#Login").removeAttr("id");
    $(".log-in").html(`${account[index].name}`)
}