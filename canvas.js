const canvas=document.querySelector('canvas')
canvas.height=window.innerHeight
canvas.width=window.innerWidth

const c=canvas.getContext('2d')
const maxradius=30
let mouse={
  x:undefined,
  y:undefined
}

window.addEventListener('resize',()=>{
  circlesarr=[]
  init(window.innerWidth)})
function circle(x,y,r,coloro,dirx,diry){
  this.x=x 
  this.y=y
  this.radius=r
  this.color=coloro
  this.dirx=dirx
  this.diry=diry
  this.initial=r
  this.draw= ()=>{
    c.beginPath()
    c.strokeStyle=this.color
    c.fillStyle=this.color
    c.arc(this.x,this.y,this.radius,0,2*Math.PI,false)
    c.stroke()
    c.fill()
  
  }
  this.update=()=>{
   if(this.x>=window.innerWidth-this.radius || this.x<=this.radius){
     this.dirx=-this.dirx
   }
   if(this.y>=window.innerHeight-this.radius|| this.y<=this.radius){
     this.diry=-this.diry
   }
   this.x+=this.dirx
   this.y+=this.diry
  
  if(mouse.x -this.x <50 && mouse.x-this.x>-50 &&this.y-mouse.y>-50 && this.y-mouse.y<50){
    if(this.radius<maxradius){
    this.radius+=2}
    
  }else{
    if(this.radius>this.initial){
      this.radius-=1
    }
  if(this.radius<this.initial){
    this.radius=this.initial
  }
  }}
}

let colorsarr=['#B09E99','#FEE9E1','#FAD4C0','#64B4AC','#C0FDFB','#F765A3','#A155B9','#F58800']
let directions=[-1,1]
const radius=2

function getcolor(){
  return colorsarr[Math.floor(Math.random()*colorsarr.length)]
}
function getdirection(){
  return directions[Math.floor(Math.random()*2)]
}

function getdirection2 (){
  return -2.5+Math.random()*5
}
let circlesarr=[]
function init(n){
  canvas.height=window.innerHeight
canvas.width=window.innerWidth
for(let i=0;i<n;i++){
  let x=radius+Math.random()*(window.innerWidth-2*radius)
  let y=radius+Math.random()*(window.innerHeight-2*radius)
  let colorc=getcolor()
  let rad=2+Math.floor(Math.random()*6)
 let newcircle= new circle(x,y,rad,colorc,getdirection2(),getdirection2())
  circlesarr.push(newcircle)
}
}
init(window.innerWidth)
function animate(){
  requestAnimationFrame(animate)
  c.clearRect(0,0,window.innerWidth,window.innerHeight)
circlesarr.forEach((elem)=>{
  
  elem.draw()
  elem.update()
})
}
animate()

window.addEventListener('click',(event)=>{
  mouse.x=event.x
  mouse.y=event.y
  setTimeout(reset,500)
})
window.addEventListener('mousemove',(event)=>{
  mouse.x=event.x
  mouse.y=event.y
  setTimeout(reset,500)
})


function reset(){
  mouse.x=undefined
  mouse.y=undefined
}


