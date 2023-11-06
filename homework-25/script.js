function getPost() {
    var postId = document.getElementById("postId").value;
    if (postId < 1 || postId > 100) {
        alert("Будь ласка, введіть ID від 1 до 100");
        return;
    }
    fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
        .then(response => response.json())
        .then(json => {
            document.getElementById("post").innerHTML = "Title: " + json.title + "<br/>Body: " + json.body;
            document.getElementById("loadComments").style.display = "block";
        })
        .catch(error => console.error('Помилка:', error));
}

function getComments() {
    var postId = document.getElementById("postId").value;
    fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
        .then(response => response.json())
        .then(json => {
            var comments = "";
            for (var i in json) {
                comments += "Name: " + json[i].name + "<br/>Email: " + json[i].email + "<br/>Body: " + json[i].body + "<br/><br/>";
            }
            document.getElementById("comments").innerHTML = comments;
        })
        .catch(error => console.error('Помилка:', error));
}