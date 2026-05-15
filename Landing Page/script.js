const fbBtn = document.getElementsByClassName("fbLogo")[0]
const inBtn = document.getElementsByClassName("inLogo")[0]
const xBtn = document.getElementsByClassName("xLogo")[0]
const ytBtn = document.getElementsByClassName("ytLogo")[0]
const liBtn = document.getElementsByClassName("liLogo")[0]
const tkBtn = document.getElementsByClassName("tkLogo")[0]
const fbImg = document.getElementsByClassName("fbLogo")[1]
const inImg = document.getElementsByClassName("inLogo")[1]
const xImg = document.getElementsByClassName("xLogo")[1]
const ytImg = document.getElementsByClassName("ytLogo")[1]
const liImg = document.getElementsByClassName("liLogo")[1]
const tkImg = document.getElementsByClassName("tkLogo")[1]

const btn = [fbBtn, inBtn, xBtn, ytBtn, liBtn, tkBtn]
const img = [fbImg, inImg, xImg, ytImg, liImg, tkImg]
const bwImgs = ["../Assets/facebook B&W logo.webp", "../Assets/instagram B&W logo.png", "../Assets/X B&W logo.jpg", "../Assets/youtube B&W logo.webp", "../Assets/linkedIn B&W logo.jpg", "../Assets/tiktok B&W logo.jpg"]
const coloredImgs = ["../Assets/facebook colored logo.webp", "../Assets/instagram colored logo.avif", "../Assets/X colored logo.jpg", "../Assets/youtube colored logo.webp", "../Assets/linkedIn colored logo.png", "../Assets/tiktok colored logo.png"]

for(let i = 0; i < bwImgs.length; i++){
    btn[i].addEventListener("mouseenter",()=>{
        img[i].src = coloredImgs[i]
        if(i >= 0){
            for(let j = i-1; j >= 0; j--){
                img[j].src = bwImgs[j]
            }
            for(let j = i+1; j < img.length; j++){
                img[j].src = bwImgs[j]
            }
        }
    })

    btn[i].addEventListener("mouseleave",()=>{
        img[i].src = bwImgs[i]
    })
}



const AboutUsBtn = document.getElementsByClassName("AboutUsBtn")[0]
const PatientBtn = document.getElementsByClassName("PatientBtn")[0]
const OurNetworkBtn = document.getElementsByClassName("OurNetworkBtn")[0]
const HealthcareBtn = document.getElementsByClassName("HealthcareBtn")[0]
const DonorsBtn = document.getElementsByClassName("DonorsBtn")[0]
const JoinUsBtn = document.getElementsByClassName("JoinUsBtn")[0]

const AboutUsDiv = document.getElementsByClassName("AboutUsDiv")[0]
const PatientDiv = document.getElementsByClassName("PatientDiv")[0]
const OurNetworkDiv = document.getElementsByClassName("OurNetworkDiv")[0]
const HealthcareDiv = document.getElementsByClassName("HealthcareDiv")[0]
const DonorsDiv = document.getElementsByClassName("DonorsDiv")[0]
const JoinUsDiv = document.getElementsByClassName("JoinUsDiv")[0]
const NavAssit = document.getElementsByClassName("nav-Assistant")[0]
const NavBtns = [AboutUsBtn, PatientBtn, OurNetworkBtn, HealthcareBtn, DonorsBtn, JoinUsBtn]
const NavDivs = [AboutUsDiv, PatientDiv, OurNetworkDiv, HealthcareDiv, DonorsDiv, JoinUsDiv]

for(let i = 0; i < NavBtns.length; i++){
    NavBtns[i].addEventListener("mouseenter",()=>{
        NavDivs[i].classList.remove("hidden")
        NavDivs[i].style.display = "flex"
        if(i >= 0){
            for(let j = i-1; j >= 0; j--){
                NavDivs[j].classList.add("hidden")
                NavDivs[j].style.display = "none"
            }
            for(let j = i+1; j < NavBtns.length; j++){
                NavDivs[j].classList.add("hidden")
                NavDivs[j].style.display = "none"
            }
        }
    })
    NavAssit.addEventListener("mouseleave",()=>{
        NavDivs[i].classList.add("hidden")
        NavDivs[i].style.display = "none"

    })
    NavDivs[i].addEventListener("mouseleave",()=>{
        NavDivs[i].classList.add("hidden")
        NavDivs[i].style.display = "none"
    })
    NavDivs[i].addEventListener("mouseenter",()=>{
        NavDivs[i].classList.remove("hidden")
        NavDivs[i].style.display = "flex"
        if(i >= 0){
            for(let j = i-1; j >= 0; j--){
                NavDivs[j].classList.add("hidden")
                NavDivs[j].style.display = "none"
                console.log(j)
            }
            for(let j = i+1; j < NavBtns.length; j++){
                NavDivs[j].classList.add("hidden")
                NavDivs[j].style.display = "none"
                console.log(j)
            }
        }
    })
}

(function() {
    // ----- DOM elements -----
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // ----- original slides data (3 slides) -----
    const originalSlides = Array.from(document.querySelectorAll('.carousel__slide'));
    const SLIDE_COUNT = originalSlides.length;        // = 3
    
    // ----- INFINITE LOOP SETUP: clone first & last for seamless wrap -----
    // Clone first slide and append to end
    const firstClone = originalSlides[0].cloneNode(true);
    // Clone last slide and prepend to beginning
    const lastClone = originalSlides[SLIDE_COUNT - 1].cloneNode(true);
    
    // Add clones to the track
    track.prepend(lastClone);      // last clone at start
    track.appendChild(firstClone); // first clone at end
    
    // Now total slides = SLIDE_COUNT + 2
    const allSlides = Array.from(track.children);
    const totalClonedSlides = allSlides.length;   // 5
    
    // Real index (0 = cloned last, 1 = original[0], 2 = original[1], 3 = original[2], 4 = cloned first)
    let currentIndex = 1;   // start at first real slide (original slide 0)
    
    // ---- move to specific slide index (with smooth transition) ----
    function moveToSlide(index, transitionEnabled = true) {
      if (!transitionEnabled) {
        track.style.transition = 'none';
      }
      const offset = -index * 100;
      track.style.transform = `translateX(${offset}%)`;
      
      if (!transitionEnabled) {
        // force reflow to apply the change instantly
        void track.offsetHeight;
        track.style.transition = '';
      }
      
      currentIndex = index;
    }
    
    // ---- reset after clone transitions (infinite illusion) ----
    function handleTransitionEnd() {
      // If we are on the first clone (index 0) → jump to real last slide (index = SLIDE_COUNT)
      if (currentIndex === 0) {
        track.style.transition = 'none';
        const newIndex = SLIDE_COUNT;  // because total 5 slides, SLIDE_COUNT=3 → index 3 = original last slide
        const offset = -newIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
        void track.offsetHeight;
        track.style.transition = '';
        currentIndex = newIndex;
      }
      // If we are on the last clone (index = totalClonedSlides - 1)
      else if (currentIndex === totalClonedSlides - 1) {
        track.style.transition = 'none';
        const newIndex = 1;   // first real slide (original index 0)
        const offset = -newIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
        void track.offsetHeight;
        track.style.transition = '';
        currentIndex = newIndex;
      }
    }
    
    // ---- next slide (auto move left) ----
    function nextSlide() {
      moveToSlide(currentIndex + 1);
    }
    
    function prevSlide() {
      moveToSlide(currentIndex - 1);
    }
    
    // ---- AUTO SLIDE (every 5 seconds) ----
    let autoInterval;
    function startAutoSlide() {
      if (autoInterval) clearInterval(autoInterval);
      autoInterval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    function stopAutoSlide() {
      if (autoInterval) clearInterval(autoInterval);
    }
    
    // ---- reset auto timer on manual interaction (optional, but keeps UX smooth) ----
    function resetAutoTimer() {
      stopAutoSlide();
      startAutoSlide();
    }
    
    // ---- EVENT LISTENERS ----
    track.addEventListener('transitionend', handleTransitionEnd);
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoTimer();
    });
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoTimer();
    });
    
    // Pause auto on hover (user friendly)
    const carouselContainer = document.getElementById('carousel');
    carouselContainer.addEventListener('mouseenter', stopAutoSlide);
    carouselContainer.addEventListener('mouseleave', startAutoSlide);
    
    // ---- INITIAL SETUP ----
    // position track at first real slide (index 1)
    moveToSlide(1, false);   // no transition on init
    startAutoSlide();
    window.addEventListener('resize', () => {
      // Recalculate transform after resize to ensure same slide visible
      const offset = -currentIndex * 100;
      track.style.transform = `translateX(${offset}%)`;
    });
  })();

  function createSupportBox(){
    const supportBox = document.createElement('div');
    supportBox.classList.add('supportBox');
    supportBox.innerHTML = `
      <div class="btns">
        <ul>
          <li><button class="donationBtn">Donation</button></li>
          <li><button class="zakatBtn">Zakat</button></li>
          <li><button class="sadkaBtn">Give sadka every Month</button></li>
        </ul>
      </div>
    `;
    document.getElementsByClassName('boxes')[0].appendChild(supportBox);
  }

  function createServicesBox(){
    const servicesBox = document.createElement('div');
    servicesBox.classList.add('servicesBox');
    servicesBox.innerHTML = `
      <div class="form">
        <form>
          <input type="number" placeholder="Invoice No" required>
          <input type="number" placeholder="Access Code" required
          <button type="submit">Find Report(s)</button>
        </form>
      </div>
    `;
    document.getElementsByClassName('boxes')[0].appendChild(servicesBox);
  }
  createServicesBox()