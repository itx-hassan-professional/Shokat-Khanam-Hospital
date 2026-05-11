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

