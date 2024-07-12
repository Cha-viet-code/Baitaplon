//menu thay doi
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');
        }
    });
});


//slide
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots =document.querySelectorAll('.slider .dots li');
let prev =document.getElementById('prev');
let next =document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;
//chuyen slide khi an next hoac prev
next.onclick = function(){
    if(active + 1 >lengthItems){
        active = 0;
    }else{
        active += 1;
    }
    reloadSlider();
}
prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active -= 1;
    }
    reloadSlider();
}
//auto chuyen dong
let refreshSlider = setInterval(()=> {next.click()}, 4000);
//load slide
function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()}, 4000)
}
//chuyen slide khi click dots
dots.forEach((li,key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})


// Mở modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// Đóng modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Xử lý đăng nhập
function handleLogin(event) {
    event.preventDefault(); // Ngăn form submit lại

    // Lấy giá trị từ form đăng nhập
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Đây là nơi bạn có thể thêm logic xác thực, ví dụ kiểm tra email/password hợp lệ
    // Tạm thời in ra console để kiểm tra
    console.log('Email:', email);
    console.log('Password:', password);

    // Sau khi xử lý xong, có thể đóng modal
    closeModal('loginModal');
}

// Xử lý đăng ký
function handleRegister(event) {
    event.preventDefault(); // Ngăn form submit lại

    // Lấy giá trị từ form đăng ký
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Đây là nơi bạn có thể thêm logic lưu thông tin người dùng vào cơ sở dữ liệu
    // Tạm thời in ra console để kiểm tra
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Sau khi xử lý xong, có thể đóng modal
    closeModal('registerModal');
}

// Lắng nghe sự kiện submit form đăng nhập và đăng ký
document.getElementById('loginForm').addEventListener('submit', handleLogin);
document.getElementById('registerForm').addEventListener('submit', handleRegister);s