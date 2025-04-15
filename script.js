//your code here
let resetBtn=document.getElementById("reset")
let randomImg=document.getElementById("randomImg")
let verifyBtn=document.getElementById("verify")
let images=document.getElementsByTagName("img")
let para=document.getElementById("para")
let arrayOfImages=["img1","img2","img3","img4","img5"]

let randompic=arrayOfImages[Math.round(Math.random()*5)]

let newImg=document.createElement("img")
newImg.className=randompic;
randomImg.appendChild(newImg)

let clicked=0;
let selectedImg=[]

for(let i=0;i<images.length;i++){
	let currentImg=images[i];
	currentImg.addEventListener("click",()=>{
	selectedImg.push(currentImg);
	clicked++;
	currentImg.classList.add("selected");
	if(clicked==1){
		resetBtn.style.display="flex";
		resetBtn.addEventListener("click",()=>{
			clicked=0;
	resetBtn.style.display="none";
				para.style.display="none"
			for(let i of selectedImg){
				i.classList.remove("selected");

			}
			
			
		});
	}
		else if(clicked==2){
		verifyBtn.style.display="flex"
		}
	else{
		verifyBtn.style.display="none"
	}
	});
}


verifyBtn.addEventListener("click",()=>{
	let check=[];
	for(let j of selectedImg){
		check.push(j.className)
	}
	let samePic=true;

for(let i=0;i<check.length-1;i++){
	if(check[i]!==check[i+1]){
		samePic=false;
		break;
	}
}

if(samePic==true){
	para.style.display="flex"
	para.textContent="You are a human. Congratulations!"
}
	else{
		para.style.display="flex"
	para.textContent="We can't verify you as a human. You selected the non-identical tiles."
	}
	verifyBtn.style.display="none"
})