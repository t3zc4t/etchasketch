function createGrid(){
    document.querySelector("#main").innerHTML="";
    let answer=prompt("Enter grids per row and column (less than 100):");
    if (parseInt(answer)<=100 && parseInt(answer)>1){
        for (let i=1;i<=answer*answer;i++){
            let gridElem=document.createElement("div");
            gridElem.style="width:"+480/answer+"px;height:"+480/answer+"px";
            let elem=document.querySelector("#main").appendChild(gridElem).classList="gridElem";
        }
        document.querySelectorAll(".gridElem").forEach((elem)=>{
        const randomRGB=()=>Math.floor(Math.random()*255);
        const redPer=randomRGB();
        const greenPer=randomRGB();
        const bluePer=randomRGB();
        elem.addEventListener("mousemove",e=>e.target.style.backgroundColor=`rgb(${redPer},${greenPer},${bluePer})`)
        });
    }
    else{
        alert("Warning, entered number is too high or is no number at all!")
    }
}

document.querySelector("#changeGrid").addEventListener("click",()=>createGrid());