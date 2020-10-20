export function openNextLevelMobile() {

    document.querySelector(".navigation").addEventListener("click", (event) => {

        const levelWrapper = event.target.nextElementSibling;
        const heightHeader = 65;
        const scrollTop = event.target.getBoundingClientRect().top + pageYOffset - heightHeader;

        if(event.target.classList.contains("open-next-level")) {

            if(!levelWrapper.classList.contains('level-wrapper-animation-mobile')) {

                document.querySelectorAll(`.${levelWrapper.classList[1]}`).forEach((item) => {

                    item.classList.remove('level-wrapper-animation-mobile');
                })

                document.querySelectorAll(`.${event.target.classList[1]}`).forEach((item) => {

                    item.style.transform =  "rotateX(0deg)";
                })
                
                levelWrapper.classList.add('level-wrapper-animation-mobile');
                event.target.style.transform =  "rotateX(180deg)";

                levelWrapper.scrollIntoView({block: "start", behavior: "smooth"});
                window.scrollTo({ top: scrollTop, behavior: "smooth"});

            } else {

                levelWrapper.classList.remove('level-wrapper-animation-mobile');
                event.target.style.transform =  "rotateX(0deg)";
            }
        }
    })
}    