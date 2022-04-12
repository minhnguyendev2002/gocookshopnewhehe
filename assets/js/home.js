function mylist(obj, array ,content) {
    for(var i = 0; i < array.length; i++) {
        if(obj) {
            const item = document.createElement("DIV")
            item.classList.add("item-product","col-12","col-sm-4")
            item.innerHTML = `
                <a onclick="getlocalPRD(${array[i].id})" href="./pages/detailproduct/detailproduct.html">
                    <div><img src='${array[i].image}' alt="/"></div>
                    <div class="infor-restaurant">
                        <h4>${array[i].name}</h4>
                        <p>${array[i].adress}</p>
                        <span>${content}</span>
                    </div>
                </a>
            `;
            obj.appendChild(item)
        }
    }
}

const salelist = document.getElementById("list-sale-prd");
const goodlist = document.getElementById("list-good-prd");

mylist(salelist, listsale, "Đang ưu đãi !!")
mylist(goodlist, listgood, "Đánh giá 5 sao")


function viewlist(n) {
    localStorage.setItem("mytype", n)
}
function getlocalPRD(n) {
    localStorage.setItem("detailsPRD", n)
}