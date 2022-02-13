var innerW = window.innerWidth;
var innerH = window.innerHeight;
var main = document.getElementById("main-container");

var lively_color = "#3356FB"
var lively_ranbow = true;
var lively_background = "#3356FB";
var lively_transition_random = false;
var lively_transition = ".5"
var lively_update = 100;
var lively_quantity = 10;
var lively_fill = false;


function set_pos() {
  var total_box_now = document.getElementsByClassName("box");
  for (let i = 0; i < total_box_now.length; i++) {
    const element = total_box_now[i];
    var x_pos = Math.round(Math.random() * (innerW - 200));
    var y_pos = Math.round(Math.random() * (innerH - 200));
    var box_size = Math.round(Math.random() * 200);
    
    var ranbo1 = Math.round(Math.random() * 255);
    var ranbo2 = Math.round(Math.random() * 255);
    var ranbo3 = Math.round(Math.random() * 255);
    
    if (lively_ranbow == true) {
      element.style.borderColor ="rgb(" + ranbo1 + "," + ranbo2 + "," + ranbo3 + ")";
    } else {
        element.style.borderColor=lively_color;
    }
    if (lively_transition_random==true) {
      element.style.transition = Math.random() * 5 + "s";
    }
    else{
      element.style.transition = lively_transition+'s';
    }
    if (lively_fill==false) {
      element.style.backgroundColor= "transparent";
    }
    else{
      if (lively_ranbow==true) {
        element.style.backgroundColor="rgb(" + ranbo1 + "," + ranbo2 + "," + ranbo3 + ")";
      }
      else{
        element.style.backgroundColor=lively_color;
      }
    }


    element.style.top = y_pos + "px";
    element.style.left = x_pos + "px";
    element.style.width = box_size + "px";
    element.style.height = box_size + "px";
  }
}

function allBox(total_box = 3) {
  for (let i = 0; i < total_box; i++) {
    var boxes = document.createElement("div");
    const element = i;
    boxes.className = "box";
    document.body.appendChild(boxes);
  }
}

allBox(lively_quantity);

var run_ani = setInterval(() => {
  set_pos();
}, lively_update);



function remove_box_fun() {
  var remove_box = document.querySelectorAll('.box');
  if (remove_box.length>0) {
    for (let i = 0; i < remove_box.length; i++) {
      const element = remove_box[i];
      element.remove()
    }
  }
}


function livelyPropertyListener(name, val) {
  switch (name) {
    case "color":
      lively_color = val;
      break;
    case "background":
      document.body.style.backgroundColor=val;
      break;
    case "rainBow":
      lively_ranbow = val;
      break;
    case "t_random":
      lively_transition_random=val;
      break
    case "transition":
      lively_transition=val/20;
      break;
    case "quantity":
      lively_quantity=val;
      remove_box_fun();
      allBox(val)
      break;
    case "update":
      lively_update=val;
      clearInterval(run_ani)
      run_ani = setInterval(() => {
        set_pos();
      }, val*10);
      break;
    case "fill":
      lively_fill = val;
      break;
  }
}
