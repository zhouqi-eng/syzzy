document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 创建AJAX请求对象（这里以XMLHttpRequest为例，也可使用fetch API等现代方式）
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // 将用户名和密码封装成JSON对象
    var data = {
        username: username,
        password: password
    };

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                // 登录成功，可进行页面跳转等操作
                window.location.href = 'success.html';
            } else {
                document.getElementById('loginError').innerHTML = response.message;
            }
        }
    };

    // 发送AJAX请求，将数据作为JSON字符串发送
    xhr.send(JSON.stringify(data));
});