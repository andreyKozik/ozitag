export function showHeaderOnDesktop() {
    document.querySelector(".header").addEventListener("mouseover", (event) => {
    
        if(event.target.className === "level1__element") {
            const level2Wrapper = event.target.parentElement.nextElementSibling;

            event.target.classList.add('underline');

            if(level2Wrapper && level2Wrapper.className === "level2-wrapper" ) {
                event.target.parentElement.nextElementSibling.classList.add('level2-wrapper-animation');
            }
        } else {
            document.querySelectorAll(".level1__element").forEach((item) => {
                item.classList.remove('underline');
            })
            document.querySelectorAll(".level2-wrapper").forEach((item) => {
                item.classList.remove('level2-wrapper-animation');
            })
        }
    })
}