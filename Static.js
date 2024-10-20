let titre=document.title
window.addEventListener("focus",()=>{document.title=titre})
window.addEventListener("blur",()=>{document.title="Reviens 🫵"})