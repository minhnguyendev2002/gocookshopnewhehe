$(document).ready(function() {
    $(".header-logo img").attr("src", "../../../assets/img/logo.svg")
    $(".footer-logo img").attr("src", "../../../assets/img/logo.svg")
    $(".order-btn a").attr("href", "../../../index.html")
    $(".instruct a").attr("href", "../product/product.html")
    $(".choose a").attr("href", "../blog/blog.html")

    $(".order-btn a").html("Trang chủ")
    $(".order-btn").removeClass("active")
    $(".instruct a").html("Đặt đồ ăn")
    $(".choose a").html("Công thức bếp")

    $(".option span").click(function() {
        $(".option span").removeClass("ops-active")
        $(this).addClass("ops-active")
    })
})

var prd = localStorage.getItem("detailsPRD");
const details = document.getElementById("detail");
HTMLElement.prototype.empty = function() {
    while (this.firstChild) {                                       
        this.removeChild(this.firstChild);
    }
}
if(details) {
    const item = document.createElement("DIV");
    let localarray = localStorage.getItem("product") 
    let myarray = localarray === undefined ? [] : eval(localarray).join(",").split`,`.map(x=>+x);

    item.classList.add("my-product")
    item.innerHTML = `
        <div class="product-img">
            <img src="${data[prd].image}" alt="/" />
        </div>
        <div class="product-infor">
            <span class="product-type">${data[prd].type}</span>
            <h1>${data[prd].name}</h1>
            <p><span>Địa chỉ:</span> ${data[prd].adress}</p>
            <ul>
                <li class="rate"><span><i class="fas fa-star"></i></span></li>
                <li class="rate"><span><i class="fas fa-star"></i></span></li>
                <li class="rate"><span><i class="fas fa-star"></i></span></li>
                <li class="rate"><span><i class="fas fa-star"></i></span></li>
                <li class="rate"><span><i class="fas fa-star"></i></span></li>
            </ul>
            <p>(Được đánh giá bởi người dùng của Amazon)</p>
            <h2>Giá:<span>${data[prd].price}.000đ</span></h2>
            
            <div class="derection">
                <ul>
                    ${ myarray.includes(+data[prd].id) ? 
                        "<li><button class='haveincart' id='haveIncart'>Đã có trong giỏ hàng <span><i class='fas fa-check'></i></span></button></li>"
                         : 
                        "<li><button onclick='addtocart()' class='add-cart'>Thêm vào giỏ hàng</button></li>"
                    }
                </ul>
            </div>
        </div>
    `;
    details.appendChild(item);
}

let startarray = [];
let cartarray =  JSON.parse(localStorage.getItem("product"));

function addtocart() {
    localStorage.setItem("product", JSON.stringify(startarray))
    cartarray.push(data[prd].id)
    let filterarray = [...new Set(cartarray)]
    localStorage.setItem(`product`, JSON.stringify(filterarray))
    window.location.reload(true);
}

let myProductArr = [];
const lists = document.getElementById("cart")
function render() {
    lists.empty();
    let localarray = localStorage.getItem("product") 
    let myarray = localarray === undefined ? [] : eval(localarray).join(",").split`,`.map(x=>+x);

    for(var i = 0; i < myarray.length; i++) {
        const newProduct = {
            id: data[myarray[i]].id,
            name: data[myarray[i]].name,
            image: data[myarray[i]].image,
            price: data[myarray[i]].price,
            count: 1
        }
        myProductArr.push(newProduct)
    }

    PrdinCart(myProductArr)
}
function removeInCard(id) {
    let localarray = localStorage.getItem("product") 
    let myarray = localarray === undefined ? [] : eval(localarray).join(",").split`,`.map(x=>+x);
    let vjpro = myarray.filter(item => item !== id);
    localStorage.setItem(`product`, JSON.stringify(vjpro))
    window.location.reload(true);
}
render();

function PrdinCart(array) {
    for(var i = 0; i < array.length; i++) {
        const lists = document.getElementById("cart")
        if(lists) {
            const item = document.createElement("DIV")
            item.classList.add("product-cart")
            item.innerHTML = `
                <div class="cart-image"><img src="${array[i].image}" alt="/"></div>
                <div class="cart-infor">
                    <div><h4>${array[i].name}</h4><span onclick="removeInCard(${array[i].id})"><i class="far fa-trash-alt"></i></span></div>
                    <ul>
                        <li class="cart-count"><span>Số lượng:${array[i].count}</li>
                        <li class="cart-price"><span>Giá: </span><span> ${array[i].price}.000đ</span></li>
                    </ul>
                </div>
            `;
            lists.appendChild(item)
        }
    }
}