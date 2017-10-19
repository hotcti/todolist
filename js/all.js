//指定 dom
var sendData = document.querySelector('.send');
var list = document.querySelector('.list');
var data = JSON.parse(localStorage.getItem('listData')) || [];

//加入列表
function addData(e) {
    e.preventDefault();
    var txt = document.querySelector('.text').value;
    if (txt == '') {
        alert('請輸入代辦事項');
        return;
    };
    var todo = {
        content: txt
    };
    data.push(todo);
    updateList(data);
    localStorage.setItem('listData', JSON.stringify(data));
    document.querySelector('.text').value = '';
}
sendData.addEventListener('click', addData);

//更新網頁內容
function updateList(items) {
    str = '';
    var len = items.length;
    for (var i = 0; i < len; i++) {
        str += '<li><a href="#" data-index=' + i + '>完成</a> <span>' + items[i].content + '</span></li>';
    }
    list.innerHTML = str;
}
updateList(data);

//刪除代辦事項
function toggleDone(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'A') { return };
    var index = e.target.dataset.index;
    data.splice(index, 1);
    localStorage.setItem('listData', JSON.stringify(data));
    updateList(data);
}


list.addEventListener('click', toggleDone);