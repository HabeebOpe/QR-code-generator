const wrapper = document.querySelector(".wrapper"),
inputqr = wrapper.querySelector("input")
genBtn = wrapper.querySelector("button");
const imgqr = document.querySelector("img")

genBtn.addEventListener("click", ()=>{
    
    let qrValue = inputqr.value;
    
    if(!qrValue) return;
    
    genBtn.innerText = "Generating QR Code. . .";
    
    imgqr.src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputqr.value}';
    
    imgqr.addEventListener("load", ()=>{
        
        wrapper.classList.add("active");
        genBtn.innerText = "Generate QR Code"
    });
});
inputqr.addEventListener("keyup", ()=>{
    if(!inputqr.value){
        
        wrapper.classList.remove("active");
    }
})
