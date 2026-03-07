console.log("hello world") ;

 function toggleTheme() {

    const html = document.documentElement ;

    const current_theme = html.getAttribute("data-theme") ;

    const newTheme = current_theme === "dark" ? "light" : "dark" ;

    html.setAttribute("data-theme", newTheme) ;
}

// 簡單的進入動畫
document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section") ;

    sections.forEach((s, index) => {
        s.style.opacity = "0";
        s.style.transform = "translateY(20px)";
        setTimeout(() => {
                s.style.opacity = "1";
                s.style.transform = "translateY(0)";
            }, 
            200 * index
        );
    });
});