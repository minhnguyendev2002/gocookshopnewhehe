$(document).ready(function() {
    $(".order-btn").removeClass("active")
    $(".instruct").addClass("active")
    
    $(".options-foods li").click(function() {
        $(".options-foods li").removeClass("show-check")
        $(this).addClass("show-check")
    })
    
    $(".order-btn a").html("Trang chủ")
    $(".instruct a").html("Đặt đồ ăn")
    $(".choose a").html("Công thức bếp")

    $(".order-btn a").click(function() {
        $(this).attr("href","../../index.html")
    })
    $(".choose a").click(function() {
        $(this).attr("href","../blog/blog.html")
    })

})



const ShowMenufood = document.getElementById("show-menu-food"),
    CloseMenufood = document.getElementById("close-menu-food"),
    MyMenufood = document.getElementsByClassName("nav-menu")[0];

ShowMenufood.onclick = function() {
    MyMenufood.style.animation = "showMenufood 0.3s ease forwards";
}

CloseMenufood.onclick = function() {
    MyMenufood.style.animation = "closeMenufood 0.3s ease forwards";
}


function renderPRD(array) {
    const mylistprd = document.getElementById("my-list-prd")
    for(var i = 0; i < array.length; i++) {
        if(mylistprd) {
            const item = document.createElement("DIV")
            item.classList.add("product-item","col","col-xl-3","col-lg-3","col-sm-4","col-6")
            item.innerHTML = `
                <a onclick="getlocalPRD(${array[i].id})" class="product" href="../detailproduct/detailproduct.html">
                    <div class="product-img">
                        <img src="${array[i].image}" alt="/">
                    </div>
                    <div class="product-infor">
                        <h4>${array[i].name}</h4>
                        <p>${array[i].adress}</p>
                        <span class="price">Giá: ${array[i].price}.000đ</span>
                    </div>
                </a>
            `;
            mylistprd.appendChild(item)
        }
    }
}

function getlocalPRD(n) {
    localStorage.setItem("detailsPRD", n)
}


let NewArray = [];
var typeArray = localStorage.getItem("mytype") === null ? "Tất cả" : localStorage.getItem("mytype");
function getArrayPRD() {
    for(var i = 0; i < data.length; i++) {
        if(data[i].type_prd === typeArray) {
            NewArray.push(data[i])
        }
    }   
    renderPRD(NewArray);
}
getArrayPRD();

var optionlength = document.querySelectorAll(".option-food").length,
    usersoption = document.querySelectorAll(".option-food");
for(var i = 0; i < optionlength; i++) {
    if(usersoption[i].classList.contains(typeArray) === true) {
        usersoption[i].classList.add("show-check");
    }   else    {
        usersoption[i].classList.remove("show-check");
    }
}

HTMLElement.prototype.empty = function() {
    while (this.firstChild) {
        this.removeChild(this.firstChild);
    }
}

const root = document.getElementById("root"),
      tree = document.getElementById("my-list-prd");

let ProductArray = [];
function option(n) {
    ProductArray = [];
    tree.empty();
    for(var i = 0; i < data.length; i++) {
        if(data[i].type_prd === n) {
            ProductArray.push(data[i])
        }
    }  renderPRD(ProductArray)  
    localStorage.setItem("mytype", n)
}
