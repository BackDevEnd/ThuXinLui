onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const overlay = document.getElementById('overlay');
  let lastScrollTop = 0; // Lưu vị trí cuộn trước đó
  const msg = document.getElementById("msg");

  // Sau 3 giây thì hiện ra
  setTimeout(() => {
    msg.style.display = "block";
  }, 6000);
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop && currentScroll > 200) {
      // Nếu cuộn xuống và qua 200px
      overlay.classList.add('active');
      msg.style.display = "none";
    } else if (currentScroll < lastScrollTop) {
      // Nếu cuộn lên
      overlay.classList.remove('active');
      msg.style.display = "block";
    }

    lastScrollTop = currentScroll; // Cập nhật vị trí cuộn

  });
};
