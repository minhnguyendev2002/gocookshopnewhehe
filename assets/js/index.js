$(document).ready(function() {
    $(window).scroll(() => {
        if(window.scrollY > 300) {
            $("#header").addClass("header-active")
        }else {
            $("#header").removeClass("header-active")
        }
    })
    $(".order-btn").click(function() {
        $(this).attr("href","#order")
    })
    $(".order-menu").click(function() {
        $(".order-respon").toggleClass("hidden")
    })

    $(".header-menu li").click(function() {
        $(".header-menu li").removeClass("active")
        $(this).addClass("active")
    })

/**================ Login CSS ==================== */

    $("#Login").click(function() {
        modal.style.display = "block";
    })
    $("#close").click(function() {
        modal.style.display = "none";
    })

    $(".show-option").click(function() {
        $(".account ul").toggle("show")
    })

    $(".sign-out").click(function() {
        localStorage.removeItem("userid")
        location.reload()
    })
})


const   ShowMenu = document.getElementById("show-menu"),
        CloseMenu = document.getElementById("close-menu"),
        MyMenu = document.getElementsByClassName("myMenu")[0];

ShowMenu.onclick = function() {
    MyMenu.style.animation = "showMenu 0.3s ease forwards";
}
CloseMenu.onclick = function() {
    MyMenu.style.animation = "closeMenu 0.3s ease forwards";
}


/**================ Login From ==================== */

var modal = document.getElementById("myModal");

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
})