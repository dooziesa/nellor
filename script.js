
document.addEventListener("DOMContentLoaded", function () {
  const bookButton = document.querySelector("#book button");

  if (bookButton) {
    bookButton.addEventListener("click", function () {
      alert("تم إرسال طلب الحجز بنجاح!");
    });
  } else {
    console.warn("زر الحجز غير موجود على الصفحة.");
  }
});
