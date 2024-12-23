( () => {
    function t() {
        document.body.classList.add("dark-mode"),
        localStorage.setItem("theme", "dark")
    }
    function o() {
        document.body.classList.remove("dark-mode"),
        localStorage.setItem("theme", "light")
    }
    function a() {
        let e = "light";
        localStorage.getItem("theme") ? e = localStorage.getItem("theme") : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && (e = "dark"),
        e === "dark" ? t() : o()
    }
    a();
    document.getElementById("dark-mode-toggle").addEventListener("click", () => {
        localStorage.getItem("theme") === "light" ? t() : o()
    }
    );
}
)();
