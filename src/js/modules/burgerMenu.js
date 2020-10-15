import gsap from "gsap";

export function clickBurgerMenu() {

    let flagAnimationBurgerMenu = 0;

    document.querySelector(".burger-menu").addEventListener("click", () => {

    if(flagAnimationBurgerMenu === 0) {

        gsap.to(".burger-menu_line-top", { duration: 1, transform: "rotate(-45deg)",  width: "91%" });
        gsap.to(".burger-menu_line-center", { duration: 0.5, opacity: "0" });
        gsap.to(".burger-menu_line-bottom", { duration: 1, transform: "rotate(45deg)",  width: "91% "});
        document.querySelector(".navigation").classList.add('navigation-animation');
        
        flagAnimationBurgerMenu = 1;
    } else {

        gsap.to(".burger-menu_line-top", { duration: 1, transform: "rotate(0)", width: "100%" });
        gsap.to(".burger-menu_line-center", { duration: 1, opacity: "1" });
        gsap.to(".burger-menu_line-bottom", { duration: 1, transform: "rotate(0)", width: "100%" });
        document.querySelector(".navigation").classList.remove('navigation-animation');

        flagAnimationBurgerMenu = 0;
    }

    })
}    