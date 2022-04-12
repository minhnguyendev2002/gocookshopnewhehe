$(document).ready(function() {
    $(".order-btn").removeClass("active")
    $(".choose").addClass("active")
    
    $(".order-btn a").html("Trang chủ")
    $(".instruct a").html("Đặt đồ ăn")
    $(".choose a").html("Công thức bếp")

    $(".order-btn a").click(function() {
        $(this).attr("href","../../index.html")
    })
    $(".instruct a").click(function() {
        $(this).attr("href", "../product/product.html")
    })
})

for(var i = 0; i < listpost.length;i++){
    const listrender = document.getElementById("list-post");
    if (listrender) {
        const post = document.createElement("DIV");
        post.classList.add("post")
        post.innerHTML = `
        <div class="post-image">
            <img src="${listpost[i].image_1}" alt="/">
        </div>
        <div class="post-content">
            <h3>${listpost[i].namepost}</h3>
            <span class="time-post">
                <span class="date">${listpost[i].time}</span>
                    <span class="space-text">/</span>
                <span class="author">${listpost[i].author}</span>
                    <span class="space-text">/</span>
                <span><i class="fas fa-eye"></i></span>
                <span class="total-view">${listpost[i].view}</span>
            </span>
            <p>${listpost[i].description}</p>
            <a href='../detailBlog/detailBlog.html' class="more-btn" onclick='detailspost(${listpost[i].id})'>continue reading</a>
        </div>
    `;
    listrender.appendChild(post)
    }
}

function detailspost(n){
    localStorage.setItem("linkpost",n)
}

function hotpost(array) {
    const listhot = document.getElementById("hot-post") 
    for(var i = 0; i < array.length; i++) {
        if(listhot) {
            const item = document.createElement("DIV")
            item.classList.add("post-item")
            item.innerHTML = `
                <div>
                    <img src="${array[i].image_1}" alt="/">
                </div>
                <div>
                    <a href='../detailblog/detailblog.html' onclick='detailspost(${array[i].id})'>${array[i].namepost}</a>
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

hotpost(listpost.sort(function (a, b) { 
    return a.view - b.view; 
}).reverse()) 