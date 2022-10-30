//搜索框搜索的业务逻辑
var searchData = JSON.parse('[{"name":"百度","url":"https://www.baidu.com/s?ie=utf-8&word=","iconfont":"https://www.baidu.com/favicon.ico"},{"name":"必应","url":"https://cn.bing.com/search?q=","iconfont":"https://cn.bing.com/sa/simg/favicon-trans-bg-blue-mg.ico"},{"name":"谷歌","url":"https://www.google.com/search?q=","iconfont":"https://chrome.hongysz.com/favicon.ico"},{"name":"F 搜","url":"https://fsoufsou.com/search?q=","iconfont":"https://static.hetaousercontent.com/static/assets/favicon.ico"},{"name":"搜狗","url":"https://www.sogou.com/web?query=","iconfont":"https://www.sogou.com/images/logo/new/favicon.ico?v=4"},{"name":"好搜","url":"https://www.so.com/s?q=","iconfont":"https://ss.360tres.com/static/121a1737750aa53d.ico"}]');
var currentSearchData;
var search = document.querySelector(".search");
var searchType = search.querySelector("img");
var input = search.querySelector("input");
var clear = search.querySelector(".icon-qingkongshanchu");
var btn = document.querySelector(".btn_search");
// searchType.addEventListener("click", () => {
//     //弹出搜索引擎偏好
//     console.log(searchData);
// });
// searchType.addEventListener("mouseout",()=>{
//     console.log("偏好消失");
// })

document.addEventListener("DOMContentLoaded", () => {
    //默认使用第一个 当用户选择完之后，存储对应的索引
    var index = localStorage.getItem("search-type");
    if (index == null) {
        setSearchType(0);
    } else {
        setSearchType(index);
    }

    changeClearButton();

});

document.addEventListener("keydown",function(e){
    if(e.code==='Enter'){
        goSearch();
    }

})
input.addEventListener("input", () => {
    changeClearButton();

})

clear.addEventListener("click", () => {
    input.value = "";
    changeClearButton();
})

btn.addEventListener("click", () => {
   goSearch();
})



function setSearchType(index) {
    localStorage.setItem("search-type", index);
    currentSearchData = searchData[index];
    searchType.src = currentSearchData.iconfont;
    searchType.alt = currentSearchData.name;
}

function changeClearButton() {
    var value = input.value;
    if (value.length > 0) {
        clear.style.display = "block";
    } else {
        clear.style.display = "none";
    }
}

function goSearch(){
    open(currentSearchData.url + input.value)
    input.value = "";
    changeClearButton();
}