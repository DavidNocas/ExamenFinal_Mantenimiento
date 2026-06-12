const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
".card,.plan,.trainer,.testimonial,.location,.cta"
).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

const counters = document.querySelectorAll('.counter');

const observerCounter = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.getAttribute('data-target');

            let current = 0;

            const increment = target / 100;

            const updateCounter = () => {

                if(current < target){

                    current += increment;

                    counter.innerText = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                }else{

                    if(target === 5000){
                        counter.innerText = "5000+";
                    }
                    else if(target === 100){
                        counter.innerText = "100%";
                    }
                    else if(target === 24){
                        counter.innerText = "24/7";
                    }
                    else{
                        counter.innerText = target + "+";
                    }

                }

            }

            updateCounter();

            observerCounter.unobserve(counter);

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter => {

    observerCounter.observe(counter);

});