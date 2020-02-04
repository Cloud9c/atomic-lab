(function() {
  function h(c) { c = c.target; var a = c.childNodes.length; if ("button" !== c.localName || !a) return c.classList.contains("rippleJS") ? c : null; for (var b = 0; b < a; ++b) { var g = c.childNodes[b], e = g.classList; if (e && e.contains("rippleJS")) return g } return null }
  function n(c, a) {
    var b = h(a); if (b) {
      var g = b.classList, e = b.getAttribute("data-event"); if (!e || e === c) {
        b.setAttribute("data-event", c); var d = b.getBoundingClientRect(); e = a.offsetX; void 0 !== e ? a = a.offsetY : (e = a.clientX - d.left, a = a.clientY - d.top); var f = document.createElement("div"); d = d.width === d.height ? 1.412 * d.width : Math.sqrt(d.width * d.width + d.height * d.height); var k = 2 * d + "px"; f.style.width = k; f.style.height = k; f.style.marginLeft = -d + e + "px"; f.style.marginTop = -d + a + "px"; f.className = "ripple"; b.appendChild(f); window.setTimeout(function() { f.classList.add("held") },
          0); var l = "mousedown" === c ? "mouseup" : "touchend", m = function() { document.removeEventListener(l, m); f.classList.add("done"); window.setTimeout(function() { b.removeChild(f); b.children.length || (g.remove("active"), b.removeAttribute("data-event")) }, 650) }; document.addEventListener(l, m)
      }
    }
  }
  function p() { var c = c || document; c.addEventListener("mousedown", function (a) { 0 === a.button && n(a.type, a) }, { passive: !0 }); c.addEventListener("touchstart", function (a) { for (var b = 0; b < a.changedTouches.length; ++b)n(a.type, a.changedTouches[b]) }, { passive: !0 }) }; (function() {
    function c() {
      var a = document.createElement("div"); a.className = "rippleJS"; document.body.appendChild(a); var b = "absolute" === window.getComputedStyle(a).position; document.body.removeChild(a); b || (a = document.createElement("style"), a.textContent = '/*rippleJS*/.rippleJS,.rippleJS.fill::after{position:absolute;top:0;left:0;right:0;bottom:0}.rippleJS{display:block;overflow:hidden;border-radius:inherit;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.rippleJS.fill::after{content:""}.rippleJS.fill{border-radius:1000000px}.rippleJS .ripple{position:absolute;border-radius:100%;background:currentColor;opacity:.2;width:0;height:0;-webkit-transition:-webkit-transform .4s ease-out,opacity .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out;-webkit-transform:scale(0);transform:scale(0);pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rippleJS .ripple.held{opacity:.4;-webkit-transform:scale(1);transform:scale(1)}.rippleJS .ripple.done{opacity:0}',
        document.head.insertBefore(a, document.head.firstChild)); p()
    } "complete" === document.readyState ? c() : window.addEventListener("load", c)
  })();
}())

let animate;

window.addEventListener("load", function(e) {
  if (localStorage.getItem("slot") !== null) {
    const slot = localStorage.getItem("slot").split(";");
    const main = localStorage.getItem("main");

    for (let i = 0; i < 9; i++)
      document.getElementById("hotbar").getElementsByClassName("slot")[i].innerHTML = slot[i];

    document.getElementById("main").innerHTML = main;
  } else {
    localStorage.setItem("lineCounter", "0");
    localStorage.setItem("elementCounter", "0");
  }
});

function mouseDrag(x, y) {
  const target = document.getElementById("drag-area");
  target.style.left = x + "px";
  target.style.top = y + "px";
  target.style.display = "initial";

  function mouseMove(e) {
    target.style.width = Math.abs(e.pageX - x) + "px";
    target.style.height = Math.abs(e.pageY - y) + "px";

    window.requestAnimationFrame(function() {
      if (e.pageX < x)
        target.style.left = e.pageX + "px";
      if (e.pageY < y)
        target.style.top = e.pageY + "px";
    });

    const rect2 = target.getBoundingClientRect();
    const elements = document.getElementById("main").getElementsByClassName("element");
    for (let i = 0; i < elements.length; i++) {
      const rect1 = elements[i].getBoundingClientRect();
      if (rect1.left < rect2.right && rect1.right > rect2.left && rect1.top < rect2.bottom && rect1.bottom > rect2.top)
        elements[i].classList.add("selected");
      else
        elements[i].classList.remove("selected");
    }
  }

  function mouseUp() {
    target.style.display = "none";
    target.style.width = "0";
    target.style.height = "0";
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function followCursor(target) {
  const elements = document.querySelectorAll("#main > .element.selected");
  const molecules = document.getElementById("main").getElementsByClassName("molecule");

  function mouseMove(e) {
    const x = e.movementX;
    const y = e.movementY;
    window.requestAnimationFrame(function() {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.style.transform = "translate(" + (+element.style.transform.match(/-?\d+\.?\d*/g)[0] + x) + "px," + (+element.style.transform.match(/-?\d+\.?\d*/g)[1] + y) + "px)";
      }
      for (i = 0; i < selectedMolecules.length; i++) {
        const sm = selectedMolecules[i].getAttribute("data-line").split(";");
        for (let j = 0; j < sm.length; j++) {
          const line = document.getElementById(sm[j]);
          line.setAttribute("x1", parseInt(line.getAttribute("x1")) + x);
          line.setAttribute("x2", parseInt(line.getAttribute("x2")) + x);
          line.setAttribute("y1", parseInt(line.getAttribute("y1")) + y);
          line.setAttribute("y2", parseInt(line.getAttribute("y2")) + y);
        }
        const moleculeElements = selectedMolecules[i].children;
        for (j = 0; j < moleculeElements.length; j++) {
          const element = moleculeElements[j];
          element.style.transform = "translate(" + (+element.style.transform.match(/-?\d+\.?\d*/g)[0] + x) + "px," + (+element.style.transform.match(/-?\d+\.?\d*/g)[1] + y) + "px)";
        }
      }
    });
  };

  function mouseUp() {
    for (let i = 0; i < elements.length; i++)
      elements[i].style.boxShadow = "";

    const shadows = document.getElementById("main").getElementsByClassName("m-shadow");
    while (shadows.length !== 0)
      shadows[0].classList.remove("m-shadow");

    target.style.cursor = "";
    document.getElementById("main").removeEventListener("mousemove", mouseMove);
    document.getElementById("main").removeEventListener("mouseup", mouseUp);
  };

  for (let i = 0; i < molecules.length; i++) {
    const lines = molecules[i].getAttribute("data-line").split(";");
    for (let j = 0; j < molecules[i].children.length; j++) {
      if (molecules[i].children[j].classList.contains("selected")) {
        molecules[i].classList.add("selected");
        molecules[i].classList.add("m-shadow");
        for (let k= 0; k < lines.length; k++) {
          document.getElementById(lines[k]).classList.add("selected");
        }
        break;
      }
    }
  }

  const selectedMolecules = document.getElementById("main").querySelectorAll(".molecule.selected");

  document.getElementById("main").addEventListener("mousemove", mouseMove);
  document.getElementById("main").addEventListener("mouseup", mouseUp);

  for (let i = 0; i < elements.length; i++){
    elements[i].style.boxShadow = "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23), inset 0 0 0 1px #FC5185";
  }
  target.style.cursor = "grabbing"
}

function toggleMenu(command, e) {
  if (!e.target.classList.contains("element"))
    while (document.getElementById("main").getElementsByClassName("selected")[0])
      document.getElementById("main").getElementsByClassName("selected")[0].classList.remove("selected");

  const rect = document.getElementById("menu");

  rect.style.display = command;

  if (command === "block") {
    if (e.pageY + rect.offsetHeight >= window.innerHeight) {
      rect.style.top = window.innerHeight - rect.offsetHeight + "px";
    }
    else
      rect.style.top = e.pageY + "px";

    if (e.pageX + rect.offsetWidth >= window.innerWidth)
      rect.style.left = window.innerWidth - 200 + "px";
    else
      rect.style.left = e.pageX + "px";
  }
}

function openMenu(e) {
  e.preventDefault();
  console.log(e.target)
  if (!e.path.includes(document.getElementById("menu-options"))) {
    document.getElementById("menu-options").getElementsByClassName("option")[0].innerHTML = "";
    document.getElementById("menu-options").getElementsByClassName("option")[1].innerHTML = "";
    document.getElementById("menu-options").getElementsByClassName("option")[2].innerHTML = "";

    if (e.target.id === "hotbar") {
      document.getElementById("menu-options").getElementsByClassName("option")[0].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#656565" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/></svg><span>Clear All Slots</span>';
      document.getElementById("menu-options").getElementsByClassName("option")[0].onclick = function() {
        for (let i = 0; i < 9; i++)
          document.getElementById("hotbar").getElementsByClassName("slot")[i].innerHTML = "";
        toggleMenu("none", e);
      };
    } else if (e.target.parentElement.classList.contains("slot")) {
      document.getElementById("menu-options").getElementsByClassName("option")[0].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#656565" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/></svg><span>Clear Slot</span>';
      document.getElementById("menu-options").getElementsByClassName("option")[0].onclick = function() {
        e.target.parentElement.innerHTML = "";
        toggleMenu("none", e);
      };
    } else if (e.target.id === "main") {
      document.getElementById("menu-options").getElementsByClassName("option")[0].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#656565" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/></svg><span>Clear Lab</span>';
      document.getElementById("menu-options").getElementsByClassName("option")[0].onclick = function() {
        document.getElementById("svg").innerHTML = "";
        document.getElementById("main").innerHTML = document.getElementById("svg").outerHTML;
        toggleMenu("none", e);
      };
    } else if ((e.target.parentElement.id === "main" || e.target.parentElement.classList.contains("molecule")) && e.target.classList.contains("element")) {
      document.getElementById("menu-options").getElementsByClassName("option")[0].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#656565" d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z"/></svg><span>Duplicate</span>';
      document.getElementById("menu-options").getElementsByClassName("option")[1].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#656565" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/></svg><span>Remove</span>';
      if (!e.target.classList.contains("selected"))
        while (document.getElementById("main").getElementsByClassName("selected")[0])
          document.getElementById("main").getElementsByClassName("selected")[0].classList.remove("selected");

      if (document.getElementById("main").getElementsByClassName("selected")[1]) {
        let placement = 1;
        document.getElementById("menu-options").getElementsByClassName("option")[0].onclick = function() {
          let switcheroo = [];
          for (let i = 0; i < document.getElementById("main").getElementsByClassName("selected").length; i++) {
            const clone = document.getElementById("main").getElementsByClassName("selected")[i].cloneNode(true);
            clone.classList.remove("selected");
            document.getElementById("main").appendChild(clone);
            clone.style.transform = "translate(" + (+clone.style.transform.match(/-?\d+\.?\d*/g)[0] + 16) + "px," + (+clone.style.transform.match(/-?\d+\.?\d*/g)[1] + 16) + "px)";
            switcheroo.push(clone, document.getElementById("main").getElementsByClassName("selected")[i]);
          }
          for (i = 0; i < switcheroo.length; i++) {
            if (switcheroo[i].classList.contains("selected"))
              switcheroo[i].classList.remove("selected");
            else
              switcheroo[i].classList.add("selected");
          }
          toggleMenu("none", e);
        };
        if (document.getElementById("main").getElementsByClassName("selected").length === 2) {
          let ele1 = document.getElementById("main").getElementsByClassName("selected")[0];
          let ele2 = document.getElementById("main").getElementsByClassName("selected")[1];

          if ((ele2.parentElement.classList.contains("molecule") && !ele1.parentElement.classList.contains("molecules")) || +ele2.getAttribute("data-en") < +ele2.getAttribute("data-en")) {
            const temp = ele2;
            ele2 = ele1;
            ele1 = temp;
          }

          if (ele1.getAttribute("data-line") === null || ele1.getAttribute("data-line") !== ele2.getAttribute("data-line")) {
            document.getElementById("menu-options").getElementsByClassName("option")[2].innerHTML = document.getElementById("menu-options").getElementsByClassName("option")[1].innerHTML;
            document.getElementById("menu-options").getElementsByClassName("option")[1].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#656565" d="M18,19C16.89,19 16,18.1 16,17C16,15.89 16.89,15 18,15A2,2 0 0,1 20,17A2,2 0 0,1 18,19M18,13A4,4 0 0,0 14,17A4,4 0 0,0 18,21A4,4 0 0,0 22,17A4,4 0 0,0 18,13M12,11.1A1.9,1.9 0 0,0 10.1,13A1.9,1.9 0 0,0 12,14.9A1.9,1.9 0 0,0 13.9,13A1.9,1.9 0 0,0 12,11.1M6,19C4.89,19 4,18.1 4,17C4,15.89 4.89,15 6,15A2,2 0 0,1 8,17A2,2 0 0,1 6,19M6,13A4,4 0 0,0 2,17A4,4 0 0,0 6,21A4,4 0 0,0 10,17A4,4 0 0,0 6,13M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M12,10A4,4 0 0,0 16,6A4,4 0 0,0 12,2A4,4 0 0,0 8,6A4,4 0 0,0 12,10Z"/></svg><span>Create bond</span>'
            document.getElementById("menu-options").getElementsByClassName("option")[1].onclick = function() {
              const lineCounter = parseInt(localStorage.getItem("lineCounter"), 10) + 1;
              localStorage.setItem("lineCounter", lineCounter);
              if (ele1.getAttribute("data-line") !== null)
                ele1.setAttribute("data-line", ele1.getAttribute("data-line") + ";#" +  lineCounter);
              else
                ele1.setAttribute("data-line", "#" + lineCounter);
              if (ele2.getAttribute("data-line") !== null)
                ele2.setAttribute("data-line", ele2.getAttribute("data-line") + ";#" + lineCounter);
              else
                ele2.setAttribute("data-line", "#" + lineCounter);
              const m1 = ele1.parentElement;
              const m2 = ele2.parentElement;
              let molecule;
              let changeLocation = [];
              let changeLocationLine;
              if (m1.classList.contains("molecule")) {
                molecule = m1;
                if (m2.classList.contains("molecule") && m1 !== m2) {
                  changeLocation = [...m2.children];
                  changeLocationLine = m2.getAttribute("data-line");
                  while(m2.children.length != 0) 
                    molecule.appendChild(m2.children[0]);
                  molecule.setAttribute("data-line", molecule.getAttribute("data-line") + ";" + m2.getAttribute("data-line"))
                  m2.remove();
                } else {
                  molecule.appendChild(ele2);
                }
              } else if (m2.classList.contains("molecule")) {
                molecule = m2;
                molecule.appendChild(ele1);
              } else {
                molecule = document.createElement("div");
                molecule.classList.add("molecule");
                molecule.appendChild(ele1);
                molecule.appendChild(ele2);
                document.getElementById("main").appendChild(molecule);
              }
              if (molecule.getAttribute("data-line") !== null)
                molecule.setAttribute("data-line", molecule.getAttribute("data-line") + ";#" + lineCounter)
              else
                molecule.setAttribute("data-line", "#" + lineCounter);

              const svg = document.getElementById("svg");
              const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
              line.id = "#" + lineCounter;
              svg.appendChild(line);
              const placement1 = ele1.style.transform.match(/-?\d+\.?\d*/g);
              const placement2 = ele2.style.transform.match(/-?\d+\.?\d*/g);

              const rad =  Math.PI/2 - Math.atan2(+placement2[0] - +placement1[0], +placement2[1] - +placement1[1]);

              const x = +placement1[0] + (30 + ele1.offsetWidth) * Math.cos(rad);
              const y = +placement1[1] + (30 + ele1.offsetWidth) * Math.sin(rad);

              if (changeLocation[0]) {
                const diffX = x - +placement2[0];
                const diffY = y - +placement2[1];
                for (let i = 0; i < changeLocation.length; i++) {
                  const coord = changeLocation[i].style.transform.match(/-?\d+\.?\d*/g);
                  changeLocation[i].style.transform = "translate(" + (diffX + +coord[0]) + "px," + (diffY + +coord[1]) + "px)";
                }

                if (changeLocationLine !== null) {
                  let lines = changeLocationLine.split(";");
                  console.log(lines);
                  if (typeof lines === "string")
                    lines = [lines];


                  for (i = 0; i < lines.length; i++) {
                    const moveLine = document.getElementById(lines[i]);
                    moveLine.setAttribute("x1", +moveLine.getAttribute("x1") + diffX);
                    moveLine.setAttribute("y1", +moveLine.getAttribute("y1") + diffY);
                    moveLine.setAttribute("x2", +moveLine.getAttribute("x2") + diffX);
                    moveLine.setAttribute("y2", +moveLine.getAttribute("y2") + diffY);
                  }
                }
              } else {
                ele2.style.transform = "translate(" + x + "px," + y + "px)";
              }
              line.setAttribute("x1", +placement1[0] + ele1.offsetWidth/2);
              line.setAttribute("y1", +placement1[1] + ele1.offsetHeight/2);
              line.setAttribute("x2", x + ele1.offsetWidth/2);
              line.setAttribute("y2", y + ele1.offsetHeight/2);
              line.setAttribute("ele1", ele1.id);
              line.setAttribute("ele2", ele2.id);
            }
            placement++;
          }
        }
        document.getElementById("menu-options").getElementsByClassName("option")[placement].onclick = function() {
          while (document.getElementById("main").getElementsByClassName("selected")[0]) {
            const selected = document.getElementById("main").getElementsByClassName("selected")[0];
            let lines = selected.getAttribute("data-line");
            let removeParent = false;
            if (lines !== null && selected.classList.contains("element")) {
              lines = lines.split(";");
              const parent = selected.parentElement;
              let parentLines = parent.getAttribute("data-line");
              if (parentLines !== null)
                parentLines = parentLines.split(";");

              for (let i = 0; i < lines.length; i++) {
                let lines1 = document.getElementById(document.getElementById(lines[i]).getAttribute("ele1")).getAttribute("data-line").split(";");
                lines1.splice(lines1.indexOf(lines[i]), 1);
                const ele1 = document.getElementById(document.getElementById(lines[i]).getAttribute("ele1"));
                if (lines1.length === 0) {
                  ele1.removeAttribute("data-line");
                  document.getElementById("main").appendChild(ele1);
                }
                else
                  ele1.setAttribute("data-line", lines1.join(";"));
                
                let lines2 = document.getElementById(document.getElementById(lines[i]).getAttribute("ele2")).getAttribute("data-line").split(";");
                lines2.splice(lines2.indexOf(lines[i]), 1);
                const ele2 = document.getElementById(document.getElementById(lines[i]).getAttribute("ele2"))
                ele2.setAttribute("data-line", lines1.join(";"));
                if (lines2.length === 0){
                  ele2.removeAttribute("data-line")
                  document.getElementById("main").appendChild(ele2);
                }

                document.getElementById(lines[i]).remove();
                if (parentLines !== null)
                  parentLines.splice(parentLines.indexOf(lines[i]), 1);
              }

              if (parentLines !== null) {
                parent.setAttribute("data-line", parentLines.join(";"));
                if (parentLines.length === 0)
                  removeParent = true;
              }
            }
            selected.remove();
            if (removeParent)
              parent.outerHTML = parent.innerHTML;
          }
          toggleMenu("none", e);
        };
      } else {
        document.getElementById("menu-options").getElementsByClassName("option")[0].onclick = function() {
          const clone = e.target.cloneNode(true);
          document.getElementById("main").appendChild(clone);
          clone.style.transform = "translate(" + (+clone.style.transform.match(/-?\d+\.?\d*/g)[0] + 16) + "px," + (+clone.style.transform.match(/-?\d+\.?\d*/g)[1] + 16) + "px)";
          e.target.classList.remove("selected");
          toggleMenu("none", e);
        };
        document.getElementById("menu-options").getElementsByClassName("option")[1].onclick = function() {
          let lines = e.target.getAttribute("data-line");
          let removeParent = false;
          if (lines !== null) {
            lines = lines.split(";");
            parent = e.target.parentElement;
            let parentLines = parent.getAttribute("data-line");
            if (parentLines !== null)
              parentLines = parentLines.split(";");
            for (let i = 0; i < lines.length; i++) {
              let lines1 = document.getElementById(document.getElementById(lines[i]).getAttribute("ele1")).getAttribute("data-line").split(";");
              lines1.splice(lines1.indexOf(lines[i]), 1);
              const ele1 = document.getElementById(document.getElementById(lines[i]).getAttribute("ele1"));
              if (lines1.length === 0) {
                ele1.removeAttribute("data-line");
                document.getElementById("main").appendChild(ele1);
              }
              else
                ele1.setAttribute("data-line", lines1.join(";"));

              
              let lines2 = document.getElementById(document.getElementById(lines[i]).getAttribute("ele2")).getAttribute("data-line").split(";");
              lines2.splice(lines2.indexOf(lines[i]), 1);
              const ele2 = document.getElementById(document.getElementById(lines[i]).getAttribute("ele2"))
              ele2.setAttribute("data-line", lines1.join(";"));
              if (lines2.length === 0) 
                document.getElementById("main").appendChild(ele2);

              document.getElementById(lines[i]).remove();
              if (parentLines !== null)
                parentLines.splice(parentLines.indexOf(lines[i]), 1);

            }
            parent.setAttribute("data-line", parentLines.join(";"))
            if (parentLines.length === 0)
              removeParent = true;
            else {
              // TODO
            }
          }
          e.target.remove();
          if (removeParent)
            parent.outerHTML = parent.innerHTML;
          toggleMenu("none", e);
        };
        e.target.classList.add("selected");
      }
    }

    if (document.getElementById("menu-options").getElementsByClassName("option")[0].innerHTML.length > 0)
      toggleMenu("block", e);
  }
}

function overlayToggle() {
  if (document.getElementById("overlay").style.display === "none" || document.getElementById("overlay").style.display === "") {
    document.getElementById("overlay").style.display = "initial";
    document.getElementById("rack-dialog").style.display = "flex";
    document.getElementById("overlay").style.animation = "opacity 0.25s forwards";
    document.getElementById("rack-dialog").children[0].style.animation = "opacity 0.25s forwards";
  } else {
    document.getElementById("overlay").style.animation = "opacityInverse 0.25s forwards";
    document.getElementById("rack-dialog").children[0].style.animation = "opacityInverse 0.25s forwards";
    setTimeout(function() {
      document.getElementById("rack-dialog").style.display = "none";
      document.getElementById("overlay").style.display = "none";
    }, 500)
  }
}

function sliderAdjust(e) {
  if (e.target.id === "slider-thumb") {
    const target = e.target;
    const mouseMove = function mouseMove(e) {

      let pos = e.pageY - 141;

      if (pos < -7)
        pos = -7;
      else if (pos > 93)
        pos = 93;
      else if (pos < 53 && pos > 33)
        pos = 43;
      target.style.top = pos + "px";

      if (pos < 0)
        pos = 0;

      document.getElementById("slider").style.background = "linear-gradient(#e8e8e8 " + pos + "%, #3fc1c9 " + pos + "%)";
    }

    const mouseUp = function mouseUp(e) {
      document.body.removeEventListener("mouseup", mouseUp);
      document.body.removeEventListener("mousemove", mouseMove);
      const changePX = document.getElementById("slider-thumb").offsetTop;
      document.getElementById("slider-thumb").style.top = changePX + "px";
      document.getElementById("slider").style.background = "linear-gradient(#e8e8e8 " + changePX + "%, #3fc1c9 " + changePX + "%)";
    }

    document.body.addEventListener("mousemove", mouseMove);
    document.body.addEventListener("mouseup", mouseUp);
  } else {
    let pos = e.pageY - 148;
    if (pos < -7)
      pos = -7;
    else if (pos > 93)
      pos = 93;
    document.getElementById("slider").style.background = "linear-gradient(#e8e8e8 " + pos + "%, #3fc1c9 " + pos + "%)";
    document.getElementById("slider-thumb").style.top = pos + "px";
  }
}

function createElement(target, x, y, table) {
  newElement = target.cloneNode(true);
  newElement.id = "mirror";
  document.body.appendChild(newElement);

  let left = x - newElement.offsetWidth / 2 + 16;
  let top = y - newElement.offsetWidth / 2 + 16;
  newElement.style.left = left + "px";
  newElement.style.top = top  + "px";

  function tableMove(e) {
    left = left + e.movementX;
    top = top + e.movementY;

    newElement.style.left = left + "px";
    newElement.style.top = top + "px";

    if (document.getElementById("temp") && document.elementFromPoint(e.pageX, e.pageY).id !== "temp") {
      document.getElementById("temp").remove();

    } else {
      const hoverArray = document.querySelectorAll(":hover");
      const hoverElement = hoverArray[hoverArray.length - 1];
      if (hoverElement.classList.contains("slot")) {
        const tempElement = target.cloneNode(true);
        tempElement.id = "temp";
        hoverElement.innerHTML = tempElement.outerHTML;
      }
    }
  }

  function tableMouseUp(e) {
    const tempElement = document.getElementById("temp");
    if (tempElement)
      tempElement.id = "";
    tempElement.parentElement.classList.add("pulse");
    setTimeout(function() {
      tempElement.parentElement.classList.remove("pulse");
    }, 500);
    document.removeEventListener("mousemove", tableMove);
    document.removeEventListener("mouseup", tableMouseUp);
    newElement.remove();
  }

  function hotbarMove(e) {
    left = left + e.movementX;
    top = top + e.movementY;

    newElement.style.left = left + "px";
    newElement.style.top = top + "px";
  }

  function hotbarMouseUp(e) {
    document.removeEventListener("mousemove", hotbarMove);
    document.removeEventListener("mouseup", hotbarMouseUp);
    newElement.style = "transform: translate(" + mirror.style.left + "," + mirror.style.top + ")";
    const elementCounter = parseInt(localStorage.getItem("elementCounter")) + 1;
    localStorage.setItem("elementCounter", elementCounter);
    newElement.id = elementCounter;
    document.getElementById("main").appendChild(newElement);
    
  }
  if (table) {
    document.addEventListener("mousemove", tableMove);
    document.addEventListener("mouseup", tableMouseUp);
  } else {
    document.addEventListener("mousemove", hotbarMove);
    document.addEventListener("mouseup", hotbarMouseUp);
  }
}

document.getElementById("rack").addEventListener("click", overlayToggle);

document.getElementById("overlay").addEventListener("click", overlayToggle);

document.getElementById("close").addEventListener("click", overlayToggle);

document.getElementById("clear-progress").addEventListener("click", function() {
  window.removeEventListener("beforeunload", saveProgress);
  localStorage.clear();
  location.reload();
})

document.getElementById("react").addEventListener("click", function() {
  if (animate) {
    cancelAnimationFrame(animate);
    animate = undefined;

    for (let i = 0; i < document.getElementById("main").getElementsByClassName("element").length; i++) {
      document.getElementById("main").getElementsByClassName("element")[i].style.transform = "translate(0, 0)";
      document.getElementById("main").getElementsByClassName("element")[i].style.transition = "transform 0.5s";
    }

    setTimeout(function() {
      for (let i = 0; i < document.getElementById("main").getElementsByClassName("element").length; i++) {
        document.getElementById("main").getElementsByClassName("element")[i].style.transition = "";
      }
    }, 500);

  } else if (document.getElementById("main").getElementsByClassName("element").length > 1) {
    animate = requestAnimationFrame(frame);
  } else {
    document.getElementById("snackbar").className = "show";
    document.getElementById("snackbar").style.transition = "all 0.5s"

    const autoClose = setTimeout(function() {
      document.getElementById("snackbar").classList = "";
    }, 3000);

    function closeSnackBar() {
      clearTimeout(autoClose);
      document.getElementById("snackbar").classList = "";
      document.getElementById("snackbar-close").removeEventListener("click", closeSnackBar);
    }

    document.getElementById("snackbar-close").addEventListener("click", closeSnackBar);
  }

  function frame() {
    for (let i = 0; i < document.getElementById("main").getElementsByClassName("element").length; i++) {
      const element = document.getElementById("main").getElementsByClassName("element")[i];

      element.style.transform = "translate(" + (+element.style.transform.match(/-?\d+\.?\d*/g)[0] + 1) + "px," + (+element.style.transform.match(/-?\d+\.?\d*/g)[1] + 1) + "px)";
    }
    animate = requestAnimationFrame(frame);
  }
});

document.getElementById("periodic-table").addEventListener("mouseover", function(e) {
  if (event.target.classList.contains("element")) {
    if (event.target.parentElement.id === "periodic-table") {
      document.getElementById("atomic-number").textContent = event.target.getAttribute("data-an");
      document.getElementById("atomic-symbol").textContent = event.target.children[0].textContent;
      document.getElementById("atomic-name").textContent = event.target.children[0].getAttribute("title");
      document.getElementById("atomic-mass").textContent = event.target.getAttribute("data-amass");
      if (event.target.getAttribute("data-amass") % 1 === 0)
        document.getElementById("atomic-mass").textContent = "(" + document.getElementById("atomic-mass").textContent + ")";
      document.getElementById("closeup").style.background = getComputedStyle(event.target).background;
    } else {
      document.getElementById("atomic-number").textContent = "Atomic No.";
      document.getElementById("atomic-symbol").textContent = "Symbol";
      document.getElementById("atomic-name").textContent = "Name";
      document.getElementById("atomic-mass").textContent = "Atomic Mass";
      document.getElementById("closeup").style.background = "";
    }
  }
  else {
    document.getElementById("atomic-number").textContent = "Atomic No.";
    document.getElementById("atomic-symbol").textContent = "Symbol";
    document.getElementById("atomic-name").textContent = "Name";
    document.getElementById("atomic-mass").textContent = "Atomic Mass";
    document.getElementById("closeup").style.background = "";
  }
});

document.addEventListener("keydown", function(e) {
  const hoverElement = document.querySelectorAll(":hover")[document.querySelectorAll(":hover").length - 1]
  if (/^[1-9]$/i.test(event.key) && hoverElement.classList.contains("element")) {
    const target = document.getElementById("hotbar").getElementsByClassName("slot")[event.key - 1];
    const clone = hoverElement.cloneNode(true);
    clone.removeAttribute("style");
    clone.classList.remove("gu-mirror");

    target.textContent = "";

    target.appendChild(clone);
    target.classList.add("pulse");
    setTimeout(function(e) {
      document.getElementById("hotbar").getElementsByClassName("slot")[e].classList.remove("pulse");
    }, 500, event.key - 1);
  } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    let pos = document.getElementById("slider-thumb").offsetTop;
    if (event.key === "ArrowUp")
      pos -= 2;
    else
      pos += 2;

    if (pos < -7)
      pos = -7;
    else if (pos > 93)
      pos = 93;
    document.getElementById("slider-thumb").style.top = pos + "px";
    document.getElementById("slider").style.background = "linear-gradient(#e8e8e8 " + pos + "%, #3fc1c9 " + pos + "%)";
  }
});

document.getElementById("slider").addEventListener("mousedown", sliderAdjust);

document.addEventListener("mousedown", function(e) {
  const path = e.path;
  if (!path.includes(document.getElementById("menu"))) {
    toggleMenu("none", e);
  }

  if (e.button === 0) {
    if (path.includes(document.getElementById("main"))) {
      const target = e.target;
      if (target.classList.contains("element")) {
        if (!e.ctrlKey && !e.altKey && !e.shiftKey) {
          if (document.getElementById("main").getElementsByClassName("selected").length < 2 || !e.target.classList.contains("selected"))
            while (document.getElementById("main").getElementsByClassName("selected")[0])
              document.getElementById("main").getElementsByClassName("selected")[0].classList.remove("selected");

            target.classList.add("selected");

            function mouseMove() {
              followCursor(e.target);
              document.getElementById("main").removeEventListener("mouseup", mouseUp);
              document.getElementById("main").removeEventListener("mousemove", mouseMove);
            }

            function mouseUp() {
              document.getElementById("main").removeEventListener("mouseup", mouseUp);
              document.getElementById("main").removeEventListener("mousemove", mouseMove);
            }

            document.getElementById("main").addEventListener("mouseup", mouseUp);
            document.getElementById("main").addEventListener("mousemove", mouseMove);
          } else {
            if (target.classList.contains("selected"))
              target.classList.remove("selected")
            else
              target.classList.add("selected")
          }
      } else if (e.ctrlKey || e.altKey || e.shiftKey) {
        openMenu(e);
      } else {
        while (document.getElementById("main").getElementsByClassName("selected")[0])
          document.getElementById("main").getElementsByClassName("selected")[0].classList.remove("selected");
        mouseDrag(e.pageX, e.pageY);
      }
    } else if (!document.getElementById("mirror") && (path.includes(document.getElementById("periodic-table")) || path.includes(document.getElementById("bottom-container")))) {
      function mouseMove() {
        createElement(e.target, e.pageX, e.pageY, path.includes(document.getElementById("periodic-table")));
        document.removeEventListener("mouseup", mouseUp);
        document.removeEventListener("mousemove", mouseMove);
      }

      function mouseUp() {
        document.removeEventListener("mouseup", mouseUp);
        document.removeEventListener("mousemove", mouseMove);
      }

      document.addEventListener("mouseup", mouseUp);
      document.addEventListener("mousemove", mouseMove);      
    }
  }
});

document.addEventListener("contextmenu", openMenu);

function saveProgress() {
  let slot = "";
  for (let i = 0; i < 9; i++)
    slot += document.getElementById("hotbar").getElementsByClassName("slot")[i].innerHTML + ";";

  localStorage.setItem("slot", slot);
  localStorage.setItem("main", document.getElementById("main").innerHTML.replace(/\r?\n|\r/g, ""));
}

window.addEventListener("beforeunload", saveProgress);

window.addEventListener("beforeinstallprompt", function(e) {
    document.getElementById("install").style.display = "block";
    const installApp = e;
    document.getElementById("install").addEventListener("click", function(e) {
      installApp.prompt();
      installApp.userChoice.then(function(choiceResult){
        document.getElementById("install").style.display = "none";
      });
    });
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
