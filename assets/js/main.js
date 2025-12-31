/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Developer", "Designer", "Data Scientist", "Freelancer" , "intellegence artificielle"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });
// skills grid reveal
sr.reveal(".skill-item", { interval: 80 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });
srLeft.reveal(".about-photo", { delay: 150 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".skills-grid", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sectionEls = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sectionEls.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    const link = document.querySelector(".nav-menu a[href*=" + sectionId + "]");
    if (!link) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
} 

window.addEventListener("scroll", scrollActive);
















        // SPA-like menu using the existing top nav (no CSS changes)
        const navLinks = document.querySelectorAll('.nav-link');
        const navIds = ['home','about','skills','projects','experience','contact'];

        function showSection(id){
            navIds.forEach(s=>{
                const el = document.getElementById(s);
                if(el) el.style.display = (s===id ? 'block' : 'none');
            });
            navLinks.forEach(link=> link.classList.toggle('active-link', link.getAttribute('href') === '#'+id));
            const wrapper = document.querySelector('.wrapper');
            if(wrapper) wrapper.scrollTop = 0;
        }

        // intercept nav clicks
        navLinks.forEach(link=>{
            link.addEventListener('click', (e)=>{
                e.preventDefault();
                const target = link.getAttribute('href').replace('#','');
                showSection(target);
            });
        });

        // support buttons inside content having data-target
        document.addEventListener('click', (e)=>{
            const btn = e.target.closest('[data-target]');
            if(btn){
                const tgt = btn.getAttribute('data-target');
                showSection(tgt);
            }
        });

        showSection('home');

        document.getElementById('sendBtn')?.addEventListener('click', ()=>{
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            if(!name||!email||!message){alert('Please complete all fields.');return}
            alert('Thanks, '+name+"! I'll get back to you soon.");
            document.getElementById('name').value='';document.getElementById('email').value='';document.getElementById('message').value='';
        });