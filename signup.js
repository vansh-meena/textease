document.getElementById('signin-btn').addEventListener('click', function() {
    document.getElementById('signin-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
});

document.getElementById('signup-btn').addEventListener('click', function() {
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('signin-form').classList.remove('active');
});

document.getElementById('switch-to-signup').addEventListener('click', function() {
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('signin-form').classList.remove('active');
});

document.getElementById('switch-to-signin').addEventListener('click', function() {
    document.getElementById('signin-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
});

