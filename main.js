'use strict'

function format(response) {
    return response.json();
};

function render1(posts) {
    console.log(posts);
    var html ='';
    for(var post of posts) {
        html += '<div class="post">';
        html +=     '<h2>' + post.title + '</h2>'
        html +=     '<p>' + post.description + '</p>'
        html +=     '<span>' + post.data_create + '</span>'
        html += '</div>'
    }
    return html;
}

function render2(str) {
    var container = document.querySelector('#list-posts');
    container.innerHTML = str;
}


function showPosts() {
fetch('http://blog.api.axenov-it.com/posts')
    .then(format)
    .then(render1)
    .then(render2);
}
var btn = document.querySelector('#click')

var isOpen = false;

function toggle() {
    var container = document.querySelector('#list-posts');
    if(isOpen){
        container.innerHTML = '';
        isOpen = false;
    }
    else {
        showPosts();
        isOpen = true;
    }
}

btn.onclick = toggle;