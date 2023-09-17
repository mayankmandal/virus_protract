const wordss = new URLSearchParams(window.location.search);
const x_max = Number(wordss.get('x_max'));
//console.log(x_max);
const y_max = Number(wordss.get('y_max'));
//console.log(y_max);
const diameter_d = Number(wordss.get('diameter_d'));
//console.log(diameter_d);
const heal_dist = Number(wordss.get('heal_dist'));
//console.log(heal_dist);
const infect_dist = Number(wordss.get('infect_dist'));
//console.log(infect_dist);
const no_of_humans = Number(wordss.get('no_of_humans'));
//console.log(no_of_humans);
const goods_p = Number(wordss.get('goods_p'));
//console.log(goods_p);
const evils_p = Number(wordss.get('evils_p'));
//console.log(evils_p);

function goBack1() {
  window.history.back();
}
/*
<img onclick="clickButtonx(); return false;" id="buttonx" height="30px" width="30px" style="filter: invert(1); mix-blend-mode: exclusion; position: relative; float: right; right: 25px; top:15px; opacity: 0.75; background-color: aliceblue;" src="pause.png" />
var isPaused = false;
clickButtonx = function() {
  if (isPaused) {
    resume();
  } else {
    pause();
  }
}

function pause() {
  let button = document.getElementById("buttonx");
  isPaused = true;
  button.src = "play.png";
}

function resume() {
  let button = document.getElementById("buttonx");
  isPaused = false;
  button.src = "pause.png";
}

function loop() {
  if (!isPaused) 
  {
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "20px Arial";
    for(let i = 0; i<4; i++)
    {
        ctx.fillStyle = getColor(i);
        ctx.fillText(data[i], 5, 25 + 20*i);
    }
    ctx.fillStyle = "pink";
        ctx.fillText(Math.round(10000*data[DEAD] / (data[INFECTED] + data[RECOVERED] + data[DEAD]))/100 + "%", 5, 110);

    for (let i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  }
  requestAnimationFrame(loop);
}*/