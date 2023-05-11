let r1=document.querySelector("#r1")
let r2=document.querySelector("#r2")
let g1=document.querySelector("#g1")
let g2=document.querySelector("#g2")
let b1=document.querySelector("#b1")
let b2=document.querySelector("#b2")

r1.oninput=()=>{canbiarfondo()}
r2.oninput=()=>{canbiarfondo()}
g1.oninput=()=>{canbiarfondo()}
g2.oninput=()=>{canbiarfondo()}
b1.oninput=()=>{canbiarfondo()}
b2.oninput=()=>{canbiarfondo()}

const canbiarfondo=()=>{
    let vr1=parseInt(r1.value)
    let vr2=parseInt(r2.value)
    let vg1=parseInt(g1.value)
    let vg2=parseInt(g2.value)
    let vb1=parseInt(b1.value)
    let vb2=parseInt(g2.value)

    document.querySelector("#vr1").innerHTML=vr1
    document.querySelector("#vr2").innerHTML=vr2
    document.querySelector("#vg1").innerHTML=vg1
    document.querySelector("#vg2").innerHTML=vg2
    document.querySelector("#vb1").innerHTML=vb1
    document.querySelector("#vb2").innerHTML=vb2
    body.style.background= `linear-gradient(90deg, rgba(${vr1},${vg1},${vb1},1)0%,rgba(${vr2},${vg2},${vb2},1) 100%)`
}