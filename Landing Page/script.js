const fbLogo = document.getElementsByClassName("fbLogo")[0]
const fbLogoImg = document.getElementsByClassName("fbLogo")[1]
const inLogo = document.getElementsByClassName("inLogo")[0]
const inLogoImg = document.getElementsByClassName("inLogo")[1]
const xLogo = document.getElementsByClassName("xLogo")[0]
const xLogoImg = document.getElementsByClassName("xLogo")[1]
const ytLogo = document.getElementsByClassName("ytLogo")[0]
const ytLogoImg = document.getElementsByClassName("ytLogo")[1]
const liLogo = document.getElementsByClassName("liLogo")[0]
const liLogoImg = document.getElementsByClassName("liLogo")[1]
const tkLogo = document.getElementsByClassName("tkLogo")[0]
const tkLogoImg = document.getElementsByClassName("tkLogo")[1]

fbLogo.addEventListener("mouseenter", () => {
    fbLogoImg.src = "../Assets/facebook colored logo.webp"
})
fbLogo.addEventListener("mouseleave", () => {
    fbLogoImg.src = "../Assets/facebook B&W logo.webp"
})
inLogo.addEventListener("mouseenter", () => {
    inLogoImg.src = "../Assets/instagram colored logo.avif"
})
inLogo.addEventListener("mouseleave", () => {
    inLogoImg.src = "../Assets/instagram B&W logo.png"
})
xLogo.addEventListener("mouseenter", () => {
    xLogoImg.src = "../Assets/X colored logo.jpg"
})
xLogo.addEventListener("mouseleave", () => {
    xLogoImg.src = "../Assets/X B&W logo.jpg"
})
ytLogo.addEventListener("mouseenter", () => {
    ytLogoImg.src = "../Assets/youtube colored logo.webp"
})
ytLogo.addEventListener("mouseleave", () => {
    ytLogoImg.src = "../Assets/youtube B&W logo.webp"
})
liLogo.addEventListener("mouseenter", () => {
    liLogoImg.src = "../Assets/linkedIn colored logo.png"
})
liLogo.addEventListener("mouseleave", () => {
    liLogoImg.src = "../Assets/linkedIn B&W logo.jpg"
})
tkLogo.addEventListener("mouseenter", () => {
    tkLogoImg.src = "../Assets/tiktok colored logo.png"
})
tkLogo.addEventListener("mouseleave", () => {
    tkLogoImg.src = "../Assets/tiktok B&W logo.jpg"
})