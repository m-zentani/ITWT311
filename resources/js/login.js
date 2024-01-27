// EventListener خاص بعملية تسجيل الدخول
loginForm.addEventListener("submit", a => {
    a.preventDefault();

    let studentId = document.getElementById("studentId").value;
    let password = document.getElementById("password").value;

    // تحقق من صحة اسم المستخدم وكلمة المرور
    if (studentId === "2181804575" && password === "12345678") {
        alert("تمت عملية تسجيل الدخول بنجاح");
        window.location.href = "home.html";
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
});