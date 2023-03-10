
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hdnElements = document.querySelectorAll('.hdn');

hdnElements.forEach((el) => observer.observe(el));
hiddenElements.forEach((el) => observer.observe(el));
