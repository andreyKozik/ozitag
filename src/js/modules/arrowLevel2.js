export function clickArrowLevel2() {

    let currentLevel2Element = null;
    let flagShowlevel2 = 0;

    document.querySelector(".navigation").addEventListener("click", (event) => {

        const level2Wrapper = event.target.parentElement.nextElementSibling;
        const scrolltop = event.target.getBoundingClientRect().top + pageYOffset - 65;

        if(event.target.className === "arrow-open-level2") {

            if(currentLevel2Element !== level2Wrapper) {

                document.querySelectorAll(".level2-wrapper").forEach((item) => {

                    item.classList.remove('level2-wrapper-animation-mobile');
                })

                document.querySelectorAll(".arrow-open-level2").forEach((item) => {

                    item.style.transform =  "rotateX(0deg)";
                })

                flagShowlevel2 = 0;
            }

            currentLevel2Element = level2Wrapper;

            if(flagShowlevel2 === 0) {
                
                level2Wrapper.classList.add('level2-wrapper-animation-mobile');
                event.target.style.transform =  "rotateX(180deg)";

                window.scrollBy({
                    top: scrolltop,
                    left: 0,
                    behavior: 'smooth'
                });

                window.scrollTo({ top: 60, left: 0, behavior: 'smooth'});
                flagShowlevel2 = 1;
            } else {

                level2Wrapper.classList.remove('level2-wrapper-animation-mobile');
                event.target.style.transform =  "rotateX(0deg)";
                flagShowlevel2 = 0;
            }
        }
    })
}    