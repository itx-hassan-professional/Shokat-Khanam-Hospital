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


AboutUsBtn.addEventListener("mouseenter", () => {
    AboutUsDiv.classList.remove("hidden")
    AboutUsDiv.style.display = "flex"
})
AboutUsBtn.addEventListener("mouseleave", () => {
    AboutUsDiv.classList.add("hidden")
    AboutUsDiv.style.display = "none"
})
PatientBtn.addEventListener("mouseenter", () => {
    PatientDiv.classList.remove("hidden")
    PatientDiv.style.display = "flex"
})
PatientBtn.addEventListener("mouseleave", () => {
    PatientDiv.classList.add("hidden")
    PatientDiv.style.display = "none"
})
OurNetworkBtn.addEventListener("mouseenter", () => {
    OurNetworkDiv.classList.remove("hidden")
    OurNetworkDiv.style.display = "flex"
})
OurNetworkBtn.addEventListener("mouseleave", () => {
    OurNetworkDiv.classList.add("hidden")
    OurNetworkDiv.style.display = "none"
})
HealthcareBtn.addEventListener("mouseenter", () => {
    HealthcareDiv.classList.remove("hidden")
    HealthcareDiv.style.display = "flex"
})
HealthcareBtn.addEventListener("mouseleave", () => {
    HealthcareDiv.classList.add("hidden")
    HealthcareDiv.style.display = "none"
})
DonorsBtn.addEventListener("mouseenter", () => {
    DonorsDiv.classList.remove("hidden")
    DonorsDiv.style.display = "flex"
})
DonorsBtn.addEventListener("mouseleave", () => {
    DonorsDiv.classList.add("hidden")
    DonorsDiv.style.display = "none"
})
JoinUsBtn.addEventListener("mouseenter", () => {
    JoinUsDiv.classList.remove("hidden")
    JoinUsDiv.style.display = "flex"
})
JoinUsBtn.addEventListener("mouseleave", () => {
    JoinUsDiv.classList.add("hidden")
    JoinUsDiv.style.display = "none"
})
