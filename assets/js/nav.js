( () => {
    var d = document.querySelector("body")
      , c = document.querySelector("#cs-navigation")
      , s = document.querySelector("#cs-navigation .cs-toggle");
    function i(t) {
        let o = t.getAttribute("aria-expanded");
        t.setAttribute("aria-expanded", o === "false" ? "true" : "false")
    }
    function a() {
        s.classList.toggle("cs-active"),
        c.classList.toggle("cs-active"),
        d.classList.toggle("cs-open"),
        i(s)
    }
    s.addEventListener("click", a);
    c.addEventListener("click", function(t) {
        t.target === c && c.classList.contains("cs-active") && a()
    });
    function n(t) {
        t.classList.toggle("cs-active");
        let o = t.querySelector(".cs-dropdown-button");
        o && i(o)
    }
    var u = Array.from(document.querySelectorAll("#cs-navigation .cs-drop3-main"));
    for (let t of u)
        t.addEventListener("click", o => {
            o.stopPropagation(),
            t.classList.toggle("drop3-active")
        }
        );
    var l = document.querySelectorAll(".cs-dropdown");
    l.forEach(t => {
        let o = !1;
        t.addEventListener("focusout", function(e) {
            if (o) {
                o = !1;
                return
            }
            if (!t.contains(e.relatedTarget)) {
                t.classList.remove("cs-active");
                let r = t.querySelector(".cs-dropdown-button");
                r && i(r)
            }
        }),
        t.addEventListener("keydown", function(e) {
            t.classList.contains("cs-active") && e.stopPropagation(),
            (e.key === "Enter" || e.key === " ") && (e.preventDefault(),
            n(t)),
            e.key === "Escape" && (o = !0,
            n(t))
        }),
        window.matchMedia("(max-width: 63.9375rem)").matches && t.addEventListener("click", () => n(t))
    }
    );
    var f = document.querySelectorAll(".cs-drop-li > .cs-li-link");
    f.forEach(t => {
        t.addEventListener("keydown", function(o) {
            o.key === "Enter" && (window.location.href = this.href)
        })
    }
    );
    document.addEventListener("keydown", t => {
        t.key === "Escape" && s.classList.contains("cs-active") && a()
    }
    );
}
)();
