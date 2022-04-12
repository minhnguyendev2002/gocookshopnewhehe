$(document).ready(function() {
    $(".order-btn").removeClass("active")
    
    $(".order-btn a").html("Trang chủ")
    $(".instruct a").html("Đặt đồ ăn")
    $(".choose a").html("Công thức bếp")

    $(".order-btn a").click(function() {
        $(this).attr("href","../../index.html")
    })
    $(".instruct a").click(function() {
        $(this).attr("href","../product/product.html")
    })
    $(".choose a").click(function() {
        $(this).attr("href","../Blog/Blog.html")
    })

})

let Country = [
    {
        Quan:"Bắc Từ Liêm",
    },
    {
        Quan:"Ba Đình",
    },
    {
        Quan:"Cầu Giấy",
    },
    {
        Quan:"Đống Đa",
    },
    {
        Quan:"Hai Bà Trưng",
    },
    {
        Quan:"Hoàn Kiếm",
    },
    {
        Quan:"Hà Đông",
    },
    {
        Quan:"Hoàng Mai",
    },
    {
        Quan:"Long Biên",
    },
    {
        Quan:"Thanh Xuân",
    },
    {
        Quan:"Tây Hồ",
    },
    {
        Quan:"Nam Từ Liêm",
    },
]

const ListCountry = document.getElementById('Your-section');
for(var i=0; i<Country.length; i++) {
    const buil = document.createElement('DIV');
    buil.innerHTML = `
        <li class='your-section' onclick='inner(${i})'>${Country[i].Quan}</li>
    `;
    ListCountry.appendChild(buil)
}

var myMennu = document.getElementById('mySection-menu'),
    arown_down = document.getElementById('down'),
    offer = document.getElementById('conscious'),
    yourSection = document.getElementsByClassName('your-section');

arown_down.onclick = function() {
    if(myMennu.style.display == 'block') {
        myMennu.style.display = 'none';
        arown_down.style.transform = 'rotateX(0deg)';
    }
    else {
        myMennu.style.display = 'block';
        arown_down.style.transform = 'rotateX(180deg)';
    }
}

function inner(n) {
    offer.value = yourSection[n].innerHTML;
    myMennu.style.display = 'none';
    arown_down.style.transform = 'rotateX(0deg)';
}

// =================== Check Form ======================= //

var Check_Text = document.querySelectorAll('.check-text'),
    Check_phone = document.getElementById('phone'),
    Check_Email = document.getElementById('email'),
    error_text = document.getElementsByClassName('error-text'),
    error_phone = document.getElementsByClassName('error-phone'),
    Country_error = document.getElementById('choose-type'),
    Check_null_Input = document.getElementsByClassName('input-style');
    Check_null_text = document.getElementsByClassName('check-null'),
    SendFrom = document.getElementById('Check-out');

var regex=/^[0-9 ]+$/,
    format_1 = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/,
    format_2 = /^[0-9' 'a-zA-Z_.-]+$/,
    filter = /^([ a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


$('#Check-out').click(function () {
    let CheckOut = false;
    for(var i = 0; i < Check_null_Input.length; i++) {
        if(Check_null_Input[i].value == '' || Check_null_Input[i].value.match(format_1)) {
            Check_null_Input[i].classList.add('boder-error')
            Check_null_text[i].classList.add('Error')
            CheckOut = false;
        } else {
            Check_null_Input[i].classList.remove('boder-error')
            Check_null_text[i].classList.remove('Error')
            CheckOut = true;
        }
    }
    ErrorPhone();
    // ErrorEmail();

    if(CheckOut == true) {
        SendFrom = true;
        $('#Check-out').removeAttr("type").attr("type", "submit");
    } else {
        SendFrom = false;
        $('#Check-out').removeAttr("type").attr("type", "button");
    }

    
})

function ErrorPhone() {
    if(!Check_phone.value.match(regex) || Check_phone.value <= 100000000) {
        error_phone[0].classList.add('Error')
        $('.check-phone').addClass('boder-error')
        error_phone[0].innerHTML = 'Số điện thoại tối thiểu 10 chữ số';
        CheckOut = false;
    } else {
        error_phone[0].classList.remove('Error')
        $('.check-phone').removeClass('boder-error')
        error_phone[0].innerHTML = '';
        CheckOut = true;
    }
    return CheckOut;
}

var PayLength = document.getElementsByClassName('Pay-methods');
function Payment(n) {
    for (let i = 0; i < PayLength.length; i++) {
        if(i == n) {
            PayLength[i].classList.add('border-active')
        }   else    {
            PayLength[i].classList.remove('border-active')
        }
    }
}

let localarray = localStorage.getItem("product") 
let myarray = localarray === undefined ? [] : eval(localarray).join(",").split`,`.map(x=>+x)

var EmtyCart = document.getElementById('Empty-Cart')
if(myarray.length == 0 || myarray == []) {
    EmtyCart.style.display = 'flex';    
}

function removeInCard(id) {
    let localarray = localStorage.getItem("product") 
    let myarray = localarray === undefined ? [] : eval(localarray).join(",").split`,`.map(x=>+x);
    let vjpro = myarray.filter(item => item !== id);
    localStorage.setItem(`product`, JSON.stringify(vjpro))
    window.location.reload(true);
}

function renDerCart(array) {
    for(var i = 0; i < array.length; i++) {
        const Container = document.getElementById('Your-Cart')
        const Product = document.createElement('DIV')
        Product.classList.add('Product-item')
        Product.innerHTML = `
            <div class="prd-image">
                <img src="${array[i].image}" alt="/">
            </div>
            <div class="prd-infor">
                <span onclick="removeInCard(${array[i].id})" class="prd-remove"><i class="far fa-trash-alt"></i></span>
                <h3>${array[i].name}</h3>
                <ul>
                    <li class="prd-price"><p>Số lượng:<span class='PA'>1</span></p></li>
                    <li class="prd-amount"><p>Giá:<span>${array[i].price}.000đ</span></p></li>
                </ul>
            </div>`;
        Container.appendChild(Product)
    }
}

let myProductArr = [];
function render() {
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

    renDerCart(myProductArr)
    priceInner(myProductArr)
}
render();

function priceInner(arr) {
    const price = document.getElementById("price")
    let tong = 0
    for (let i = 0; i < arr.length; i++) {
        tong += +arr[i].price
    }
    price.innerHTML = `${tong}.000đ`
}