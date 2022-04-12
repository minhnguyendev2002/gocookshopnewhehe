$(document).ready(function() {
    $(".header-logo img").attr("src", "../../../assets/img/logo.svg")
    $(".footer-logo img").attr("src", "../../../assets/img/logo.svg")

    $(".order-btn a").attr("href", "../../../index.html")
    $(".instruct a").attr("href", "../product/product.html")
    $(".choose a").attr("href", "../Blog/blog.html")

    $(".order-btn a").html("Trang chủ")
    $(".order-btn").removeClass("active")
    $(".instruct a").html("Đặt đồ ăn")
    $(".choose a").html("Công thức bếp")

    $(".option span").click(function() {
        $(".option span").removeClass("ops-active")
        $(this).addClass("ops-active")
    })
})

let NewArray = listpost.sort(function (a, b) {
    return a.view - b.view;
});

function detailspost(n){
    localStorage.setItem("linkpost",n)
}

function hostpost(array) {
    const listhot = document.getElementById("host-post")
    for(var i = 0; i < array.length; i++) {
        if(listhot) {
            const item = document.createElement("DIV")
            item.classList.add("post-item")
            item.innerHTML = `
                <div><img src="${array[i].image_1}" alt="/"></div>
                <div><a href='../detailBlog/detailBlog.html' onclick='detailspost(${array[i].id})'>${array[i].namepost}</a>
                    <p>${array[i].description}</p>
                    <span><i class="far fa-eye"></i><span>${array[i].view}</span></span>
                </div>
            `;
            listhot.appendChild(item)
        }
        if( i == 3 ) {
            break;
        }
    }
}
hostpost(NewArray.reverse())

function details() {
    const container = document.getElementById("details-post")
    const item = document.createElement("DIV")
    var index = localStorage.getItem("linkpost");
    let detailBlog = listpost.filter(item => item.id == index);
    console.log(detailBlog);
    item.innerHTML = `
        <h2>${detailBlog[0].namepost}</h2>
        <ul class="infor-post">
            <li class="author-post"><span>${detailBlog[0].author}</span><i>|</i></li>
            <li class="time-post"><span>${detailBlog[0].time}</span><i>|</i></li>
            <li class="view-post"><span><i class="far fa-eye"></i></span><span>${detailBlog[0].view}</span></li>
        </ul>
        <p class="description">${detailBlog[0].description}</p>
        <div class="content-post">
            <div><img src="${detailBlog[0].image_1}" alt="/"></div>
            <p><span>- Nguyên liệu làm món nem chay cho bốn người: </span>${detailBlog[0].nguyenlieu}</p>
            <div><img src="${detailBlog[0].image_2}" alt="/"></div>
            <p><span>- Các bước tiến hành: </span>${detailBlog[0].step}</p>
            <div><img src="${detailBlog[0].image_3}" alt="/"></div>
            <p>${listpost[0].end}</p><span>~ Sưu tầm ~</span>
        </div>
    `;
    container.appendChild(item)
}
details();