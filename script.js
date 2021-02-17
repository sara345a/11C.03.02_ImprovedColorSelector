"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("function start");
    
    document.querySelector("input").addEventListener("input", showColorThings);

}


function showColorThings() {
    console.log("function showColorThings");

    const input = document.querySelector("input");

    //make variables that calls for the right function
    const hex = getInput(input.value);
    const rgb = fromHexToRgb(hex);
    const hsl = fromRgbToHsl(rgb);

    //call the functions and bring paramter with
    showHex(hex);
    showRGB(rgb);
    showHSL(hsl);

}




function getInput() {
    console.log("getInput");
    const input = document.querySelector("input").value;

    //and return
    return input;
}


function fromHexToRgb(hex) {
    console.log("fromHexToRgb");
  let r = parseInt(hex.substring(1, 3), 16); 
  let g = parseInt(hex.substring(3, 5), 16); 
  let b = parseInt(hex.substring(5, 7), 16); 

 

  //console.log and return
  console.log(r, g, b);
  return { r, g, b };
}




  
  function fromRgbToHsl(rgb) {
    let r = rgb.r;
    let g = rgb.g;
    let b = rgb.b;
  
    r /= 255;
    g /= 255;
    b /= 255;
  
    let h, s, l;
  
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
  
    if (max === min) {
      h = 0;
    } else if (max === r) {
      h = 60 * (0 + (g - b) / (max - min));
    } else if (max === g) {
      h = 60 * (2 + (b - r) / (max - min));
    } else if (max === b) {
      h = 60 * (4 + (r - g) / (max - min));
    }
  
    if (h < 0) {
      h = h + 360;
    }
    l = (min + max) / 2;
  
    if (max === 0 || min === 1) {
      s = 0;
    } else {
      s = (max - l) / Math.min(l, 1 - l);
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;
  
    h = h.toFixed(0);
    s = s.toFixed(2);
    l = l.toFixed(2);
  

  // console log and return
  console.log(h, s, l);
  return { h, s, l };
}


///////make function for each colorthing to dsiplay//////
function showHex(hex) {
    document.querySelector("#hexcode").textContent = "Hexcode: " + hex;
    document.querySelector("#color").style.backgroundColor = `${hex}`;
  }
  
  function showRGB(rgb) {
    document.querySelector("#rgb").textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
  }
  
  function showHSL(hsl) {
    document.querySelector("#hsl").textContent = `HSL: ${hsl.h}, ${hsl.s}%, ${hsl.s}%`;
  }


