document.oncontextmenu = function () { return false; }
p5.disableFriendlyErrors = true;

class Star {
  constructor(pos,depth,frame) {
    this.pos = pos;
    this.depth = depth;

    this.genFrame = frame
  }

  draw() {
    push()
    noStroke()
    fill(255)
    circle(this.pos.x, this.pos.y, this.depth);
    pop()
  }

  moveDepth(step,center){
    this.pos = this.pos.sub(center).mul(1 + this.depth / (2 * 0.8) / 60).add(center)
    this.depth *= 1+0.2/60
  }

  rotate(step,center){
    // 複素数で無理やり回転
    let a = new Vec2(step)
    let b = this.pos.sub(center);

    this.pos = new Vec2(a.x*b.x-a.y*b.y,a.x*b.y+a.y*b.x).add(center)
   }

   isTouchedEdge(){
    return !(Math.abs(this.pos.x-width/2) < width/2 && Math.abs(this.pos.y-height/2) < height/2);
   }
}

let mouseLog = []
let stars = []
let isShownDebugTexts = true;
let prevKeyIsPressed = false;
let seed = Math.floor(100000*Math.random())
function debugTexts() {
  if (keyIsPressed && !prevKeyIsPressed && key === "d") {
    isShownDebugTexts = isShownDebugTexts ^ 1 ? true : false
  }

  if (isShownDebugTexts) {
    push()
    fill(255, 32)
    noStroke()
    rect(0, 0, width, (20 + 5) * 4) // fontSize20のtextが間隔5で4つ
    fill(0)
    text("Dキーでデバック画面の表示を切り替えられます。",0,20)
    text(frameRate(), 0, 40)
    text(stars.length, 0, 60)
    // text(centerP.show(), 0, 60)
    pop()
  }
}

function getNewStar(depthRatio = 1){
  return new Star(new Vec2(width * Math.random(), height * Math.random()), depthRatio *2 * Math.random(),frameCount)
}

function getNoise(){
  noiseDetail(4, 0.65)
  noiseSeed(seed)
  let f = frameCount / 1200
  let centerP = new Vec2(noise(f) * width, 0)
  noiseSeed(seed + 1)
  centerP.y = noise(f) * height

  centerP = centerP.mul(0.8).add(new Vec2(width, height).mul((1 - 0.5) / 2))

  // centerP = new Vec2(winMouseX, winMouseY)

  noiseSeed(seed + 2)
  let r = (2 * noise(f) - 1) * 0.5 * (1 / 180 * Math.PI)

  return {
    centerPos : centerP,
    rotateRatio : r,
  }
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  
  let p = document.getElementById("canvas");
  p.appendChild(canvas.canvas);
  frameRate(60);

  for(let i = 0;i < 100;i++){
    stars.push(getNewStar(1))
  }
}


function draw() {
  background(7, 9, 13,128) 
  let noise = getNoise()

  for(let i = 0;i < stars.length;i++){
    stars[i].moveDepth(1.02, noise.centerPos)
    stars[i].rotate(noise.rotateRatio, noise.centerPos)
    stars[i].draw()
  }

  for(let i = 0;i < stars.length;i++){
    if(stars[i].isTouchedEdge()){
      stars.splice(i,1)
      stars.push(getNewStar())
    }
  }


  debugTexts()
  prevKeyIsPressed = keyIsPressed
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
