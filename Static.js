let titre=document.title
let icon=document.querySelector("link[rel='icon']")
let href=icon.getAttribute('href')
console.log(href)
window.addEventListener("focus",()=>{document.title=titre;icon.setAttribute("href",href);})
window.addEventListener("blur",()=>{document.title="Reviens 🫵";icon.setAttribute("href","./img/Alert.png")})