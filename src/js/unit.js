var forummalert = document.getElementById('forummbtn');
var eventmalert = document.getElementById('eventmbtn');
var aboutmalert = document.getElementById('aboutmbtn');

forummalert.addEventListener('click', btn_listener);
eventmalert.addEventListener('click', btn_listener);
aboutmalert.addEventListener('click', btn_listener);

function btn_listener(event) {
    switch(event.target.id) {
        case 'forummbtn':
            alert('포럼 페이지는 현재 준비중 입니다.');
            break;
        case 'eventmbtn':
            alert('이벤트 페이지는 현재 준비중 입니다.');
            break;
        case 'aboutmbtn':
            alert('부가 페이지는 현재 준비중 입니다.');
            break;
    }
}