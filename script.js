// تمرير ناعم للقسم المطلوب
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// زر الحجز
function reserveTable() {
  const confirmed = confirm("هل تريد الحجز عبر واتساب؟");
  if (confirmed) {
    window.open("https://wa.me/966500000000", "_blank");
  }
  {
    console.log("تم تحميل السكربت بنجاح!");
  }
}

