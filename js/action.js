//一些功能按钮

function openTarget(url) {
    open(url);
}



function moveTop() {
    var sider = document.querySelector(".sider");
    var categotyList = sider.querySelectorAll("li");
    for (let i = 0; i < categotyList.length; i++) {
        if (i == 0) {
            categotyList[i].style.backgroundColor = "white";
        } else {
            categotyList[i].style.backgroundColor = "transparent";
        }

    }
    scrollTo(0, 0)

}