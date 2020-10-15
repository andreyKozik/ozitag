export function clickArrowLevel3() {
    
    let currentLevel3Element = null;
    let flagShowlevel3 = 0;

    document.querySelector(".navigation").addEventListener("click", (event) => {

    const level3Wrapper = event.target.nextElementSibling;
    const scrolltop = event.target.getBoundingClientRect().top + pageYOffset - 65;

    if(event.target.className === "arrow-open-level3") {
        if(currentLevel3Element !== level3Wrapper) {

            document.querySelectorAll(".level3-wrapper").forEach((item) => {
                
                item.classList.remove('level3-wrapper-animation-mobile');
            })

            document.querySelectorAll(".arrow-open-level3").forEach((item) => {

                item.style.transform =  "rotateX(0deg)";
            })

            flagShowlevel3 = 0;
        }

        currentLevel3Element = level3Wrapper;

        if(flagShowlevel3 === 0) {

            level3Wrapper.classList.add('level3-wrapper-animation-mobile');
            event.target.style.transform =  "rotateX(180deg)";

            level3Wrapper.scrollIntoView({block: "center", behavior: "smooth"});

            flagShowlevel3 = 1;
        } else {

            level3Wrapper.classList.remove('level3-wrapper-animation-mobile');
            event.target.style.transform =  "rotateX(0deg)";
            flagShowlevel3 = 0;
        }
    }
    
    })
}