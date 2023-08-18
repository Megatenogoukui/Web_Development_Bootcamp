function valueSetter() {
    gsap.set("#nav a", { y: "-100%", opacity: 0 });
    gsap.set("#home .parent .child", { y: "100%" });
    gsap.set("#home .row img", { opacity: 0 });
}
function revealTOSpan() {
    document.querySelectorAll(".reveal")
        .forEach(function (elem) {

            // Create two spans
            var parent = document.createElement("span");
            var child = document.createElement("span");

            // Added them a seperate class
            parent.classList.add("parent");
            child.classList.add("child");

            // Added the text content of reveal to text content of child
            child.innerHTML = elem.innerHTML;

            // Appended the child to parent
            parent.appendChild(child);

            // Cleared the stuff what was in reveal class
            elem.innerHTML = "";

            // Added new stuff to reveal class
            elem.appendChild(parent);

        })
}
function loaderAnimation() {
    var tl = gsap.timeline();

    tl
        .from("#loader .child span", {
            x: 100,
            duration: 1,
            delay: 0,
            stagger: .2,
            ease: Power3.easeInOut

        })

        .to("#loader .parent .child", {
            y: -100,
            duration: 1,
            delay: 1,
            ease: Circ.easeInOut

        })

        .to("#loader", {
            height: 0,
            duration: 1,
            ease: Circ.easeInOut
        })

        .to("#green", {
            height: "100%",
            top: 0,
            duration: 1,
            delay: -1,
            ease: Circ.easeInOut
        })
        .to("#green", {
            height: 0,
            duration: 1,
            delay: -0.5,
            ease: Circ.easeInOut,
            onComplete: function () {
                homePageAnimate();
            }
        })

}
function webAnimate() {
    var text1 = new SplitType("#WEB");
    var t2 = gsap.timeline()

    t2
        .to(".char", {
            
            y: 0,
            
            stagger: 0.5,
            
            duration: 0.1,
            color: "#14CF93"
        })


}
function homePageAnimate() {
    var t3 = gsap.timeline()
    t3
        .to("#nav a", {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            delay: -.5,
            ease: Expo.easeInOut
        })
        .to("#home .parent .child", {
            y: 0,
            stagger: .1,
            delay:-1,
            duration: 2,
            
            ease: Expo.easeInOut,
            onComplete:function(){
                EducationSkillAnimate();
            }
        })
        .to("#home .row img", {
            opacity: 1,
            ease: Expo.easeInOut,
            onComplete: function () {
                webAnimate();
            }
        })
}
function locoInitialize() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#home'),
        smooth: true,
        
        
    });
}
function cardHoverEffect() {
    var showImage;
    document.querySelectorAll(".cont")
        .forEach(function (cont) {
            cont.addEventListener("mousemove", function (dets) {
                showImage = dets.target;
                document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
                document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px ,${dets.clientY + 1900}px)`;
                showImage.style.filter = "grayscale(1)";
                document.querySelector("#work").style.backgroundColor = dets.target.dataset.color;
            })
            cont.addEventListener("mouseleave", function (dets) {
                document.querySelector("#cursor").children[showImage.dataset.index].style.opacity = 0;
                showImage.style.filter = "grayscale(0)";
                document.querySelector("#work").style.backgroundColor = "#F2F2F2";
            })
        })
}
function EducationSkillAnimate() {
    var tl = gsap.timeline();
    tl
        .to(".journey", {
            x: 0,
            duration: 2,
            ease: Expo.easeInOut,
            stagger:0.5,
            delay:-2
        })
}


revealTOSpan();
valueSetter();
loaderAnimation();

locoInitialize();

cardHoverEffect();


