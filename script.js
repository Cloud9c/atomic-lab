"use strict";

(function(){function n(c){c=c.target;var a=c.childNodes.length;if("button"!==c.localName||!a)return c.classList.contains("rippleJS")?c:null;for(var b=0;b<a;++b){var g=c.childNodes[b],e=g.classList;if(e&&e.contains("rippleJS"))return g}return null}function h(c,a){var b=n(a);if(b){var g=b.classList,e=b.getAttribute("data-event");if(!e||e===c){b.setAttribute("data-event",c);var d=b.getBoundingClientRect();e=a.offsetX;void 0!==e?a=a.offsetY:(e=a.clientX-d.left,a=a.clientY-d.top);var f=document.createElement("div");
d=d.width===d.height?1.412*d.width:Math.sqrt(d.width*d.width+d.height*d.height);var k=2*d+"px";f.style.width=k;f.style.height=k;f.style.marginLeft=-d+e+"px";f.style.marginTop=-d+a+"px";f.className="ripple";b.appendChild(f);window.setTimeout(function(){f.classList.add("held")},0);var l="mousedown"===c?"mouseup":"touchend",m=function(){document.removeEventListener(l,m);f.classList.add("done");window.setTimeout(function(){b.removeChild(f);b.children.length||(g.remove("active"),b.removeAttribute("data-event"))},
650)};document.addEventListener(l,m)}}}function p(){var c=c||document;c.addEventListener("mousedown",function(a){0===a.button&&h(a.type,a)},{passive:!0});c.addEventListener("touchstart",function(a){for(var b=0;b<a.changedTouches.length;++b)h(a.type,a.changedTouches[b])},{passive:!0})}(function(){function c(){var a=document.createElement("div");a.className="rippleJS";document.body.appendChild(a);var b="absolute"===window.getComputedStyle(a).position;document.body.removeChild(a);b||(a=document.createElement("style"),
a.textContent='/*rippleJS*/.rippleJS,.rippleJS.fill::after{position:absolute;top:0;left:0;right:0;bottom:0}.rippleJS{display:block;overflow:hidden;border-radius:inherit;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.rippleJS.fill::after{content:""}.rippleJS.fill{border-radius:1000000px}.rippleJS .ripple{position:absolute;border-radius:100%;background:currentColor;opacity:.2;width:0;height:0;-webkit-transition:-webkit-transform .4s ease-out,opacity .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out;-webkit-transform:scale(0);transform:scale(0);pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rippleJS .ripple.held{opacity:.4;-webkit-transform:scale(1);transform:scale(1)}.rippleJS .ripple.done{opacity:0}',
document.head.insertBefore(a,document.head.firstChild));p()}"complete"===document.readyState?c():window.addEventListener("load",c)})()})();

let animate, elementDict, lineDict;
const atomDict = JSON.parse("[[1.008,2.2],[4.0026,0],[6.94,0.98],[9.0112,1.57],[10.81,2.04],[12.011,2.55],[14.007,3.04],[15.999,3.44],[18.998,3.98],[20.18,0],[22.99,0.93],[24.305,1.31],[26.982,1.61],[28.085,1.9],[30.974,2.19],[32.06,2.58],[35.45,3.16],[39.948,0],[39.098,0.82],[40.078,1],[44.956,1.36],[47.867,1.54],[50.942,1.63],[51.996,1.66],[54.938,1.55],[55.845,1.83],[58.933,1.88],[58.693,1.91],[63.546,1.9],[65.38,1.65],[69.723,1.81],[72.63,2.01],[74.992,2.18],[78.971,2.55],[79.904,2.96],[83.798,3],[85.468,0.82],[87.62,0.95],[88.906,1.22],[91.224,1.33],[92.906,1.6],[95.95,2.16],[98,1.9],[101.07,2.2],[102.91,2.28],[106.42,2.2],[107.87,1.93],[112.41,1.69],[114.82,1.78],[118.71,1.96],[121.76,2.05],[127.6,2.1],[126.9,2.66],[131.29,2.6],[132.91,0.79],[137.33,0.89],[138.91,1.1],[140.12,1.12],[140.91,1.13],[144.24,1.14],[145,1.13],[150.36,1.17],[151.96,1.2],[157.25,1.2],[158.93,1.1],[162.5,1.22],[164.93,1.23],[167.26,1.24],[168.93,1.25],[173.05,1.1],[174.97,1.27],[178.49,1.3],[180.95,1.5],[183.84,2.36],[186.21,1.9],[190.23,2.2],[192.22,2.2],[195.08,2.28],[196.97,2.54],[200.59,2],[204.38,1.62],[207.2,1.87],[208.98,2.02],[209,2],[210,2.2],[222,2.2],[223,0.79],[226,0.9],[227,1.1],[232.04,1.3],[231.04,1.5],[238.03,1.38],[237,1.36],[244,1.28],[243,1.13],[247,1.28],[247,1.3],[251,1.3],[252,1.3],[257,1.3],[258,1.3],[259,1.3],[266,1.3],[267,0],[268,0],[269,0],[270,0],[270,0],[278,0],[281,0],[282,0],[285,0],[286,0],[289,0],[290,0],[293,0],[294,0],[294,0]]");

window.addEventListener("load", () => {
  if (localStorage.getItem("slot") !== null) {
    const slot = localStorage.getItem("slot").split(";");

    for (let i = 0; i < 9; i++)
      document.getElementById("hotbar").getElementsByClassName("slot")[i].innerHTML = slot[i];

    document.getElementById("main").innerHTML = localStorage.getItem("main");

    lineDict = JSON.parse(localStorage.getItem("lineDict"));
    elementDict = JSON.parse(localStorage.getItem("elementDict"));
  } else {
    elementDict = [];
    lineDict = [];
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

    window.requestAnimationFrame(() => {
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
  const molecules = document.getElementsByClassName("molecule");
  const elements = document.querySelectorAll("#main > .element.selected");

  const mouseMove = function(e) {
    const x = e.movementX;
    const y = e.movementY;
    window.requestAnimationFrame(() => {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const id = element.id;
        elementDict[element.id].left += x;
        elementDict[element.id].top += y;

        element.style.transform = "translate(" + elementDict[element.id].left + "px," + elementDict[element.id].top + "px)";
      }
      for (let i = 0; i < selectedMolecules.length; i++) {
        const lines = selectedMolecules[i].getElementsByClassName("svg")[0].children
        for (let j = 0; j < lines.length; j++) {
          const id = lineDict[lines[j].id.substring(1)];
          id.x1 += x;
          id.x2 += x;
          id.y1 += y;
          id.y2 += y;

          lines[j].setAttribute("x1", id.x1);
          lines[j].setAttribute("x2", id.x2);
          lines[j].setAttribute("y1", id.y1);
          lines[j].setAttribute("y2", id.y2);
        }
        const elements = selectedMolecules[i].getElementsByClassName("element");
        for (let j = 0; j < elements.length; j++) {
          const id = elements[j].id;
          elementDict[id].left += x;
          elementDict[id].top += y;
          document.getElementById(id).style.transform = "translate(" + elementDict[id].left + "px," + elementDict[id].top + "px)";
        }
      }
    });
  }

  const mouseUp = () => {
    for (let i = 0; i < elements.length; i++)
      elements[i].style.boxShadow = "";

    const shadows = document.getElementsByClassName("m-shadow");
    while (shadows.length > 0)
      shadows[0].classList.remove("m-shadow");

    target.style.cursor = "";
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }

  for (let i = 0; i < molecules.length; i++) {
    for (let j = 0; j < molecules[i].children.length; j++) {
      if (molecules[i].children[j].classList.contains("selected")) {
        molecules[i].classList.add("selected");
        molecules[i].classList.add("m-shadow");
        break;
      }
    }
  }

  const selectedMolecules = document.querySelectorAll(".molecule.selected");

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.boxShadow = "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23), inset 0 0 0 1px #FC5185";
  }
  target.style.cursor = "grabbing";
}

function toggleMenu(command, e) {
  if (!e.target.classList.contains("element"))
    while (document.getElementsByClassName("selected")[0])
      document.getElementsByClassName("selected")[0].classList.remove("selected");

  const rect = document.getElementById("menu");

  rect.style.display = command;

  if (command === "block") {
    if (e.pageY + rect.offsetHeight >= window.innerHeight) {
      rect.style.top = window.innerHeight - rect.offsetHeight + "px";
    } else
      rect.style.top = e.pageY + "px";

    if (e.pageX + rect.offsetWidth >= window.innerWidth)
      rect.style.left = window.innerWidth - 200 + "px";
    else
      rect.style.left = e.pageX + "px";
  }
}

function openMenu(e) {
  e.preventDefault();
  if (!e.path.includes(document.getElementById("menu-options"))) {
    document.getElementById("menu-options").getElementsByClassName("option")[0].innerHTML = "";
    document.getElementById("menu-options").getElementsByClassName("option")[1].innerHTML = "";
    document.getElementById("menu-options").getElementsByClassName("option")[2].innerHTML = "";

    if (e.target.id === "hotbar") {
      document.getElementById("menu-options").getElementsByClassName("option")[0].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#656565" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/></svg><span>Clear All Slots</span>';
      document.getElementById("menu-options").getElementsByClassName("option")[0].onclick = () => {
        for (let i = 0; i < 9; i++)
          document.getElementById("hotbar").getElementsByClassName("slot")[i].innerHTML = "";
        toggleMenu("none", e);
      };
    } else if (e.target.parentElement.classList.contains("slot")) {
      document.getElementById("menu-options").getElementsByClassName("option")[0].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#656565" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/></svg><span>Clear Slot</span>';
      document.getElementById("menu-options").getElementsByClassName("option")[0].onclick = () => {
        e.target.parentElement.innerHTML = "";
        toggleMenu("none", e);
      };
    } else if (e.target.id === "main") {
      document.getElementById("menu-options").getElementsByClassName("option")[0].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#656565" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/></svg><span>Clear Lab</span>';
      document.getElementById("menu-options").getElementsByClassName("option")[0].onclick = () => {
        document.getElementById("main").innerHTML = "";
        elementDict = [];
        lineDict = [];
        toggleMenu("none", e);
      };
    } else if ((e.target.parentElement.id === "main" || e.target.parentElement.classList.contains("molecule")) && e.target.classList.contains("element")) {
      document.getElementById("menu-options").getElementsByClassName("option")[0].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#656565" d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z"/></svg><span>Duplicate</span>';
      document.getElementById("menu-options").getElementsByClassName("option")[1].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#656565" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/></svg><span>Remove</span>';
      const selected = document.getElementsByClassName("selected");
      if (!e.target.classList.contains("selected"))
        while (selected[0])
          selected[0].classList.remove("selected");

      let placement = 1;

      if (selected[1]) {
        document.getElementById("menu-options").getElementsByClassName("option")[0].onclick = () => {
          const molecules = document.querySelectorAll(".molecule.selected");
          const elements = document.querySelectorAll("#main .element.selected");
          for (let i = 0; i < elements.length; i++) {
            if (elements[i].parentElement.classList.contains("molecule") & elements[i].parentElement.classList.contains("selected")) {
              elements[i].classList.remove("selected");
              continue;
            }
            const clone = elements[i].cloneNode(true);
            elements[i].classList.remove("selected");
            document.getElementById("main").appendChild(clone);

            let index = elementDict.findIndex(i => i === undefined)
            if (index === -1)
              index = elementDict.length;
            clone.id = index;

            const oldElement = elementDict[elements[i].id];
            elementDict[index] = {
              "an": oldElement.an,
              "left": oldElement.left + 16,
              "top": oldElement.top + 16,
              "lines": []
            }
            const currentElement = elementDict[index];
            clone.style.transform = "translate(" + currentElement.left + "px," + currentElement.top + "px)";
          }
          for (let i = 0; i < molecules.length; i++) {
            const clone = molecules[i].cloneNode(true);
            molecules[i].classList.remove("selected");
            document.getElementById("main").appendChild(clone);

            const elements = molecules[i].children;
            const switchElements = {};
            for (let j = 1; j < elements.length; j++) {
              let index = elementDict.findIndex(i => i === undefined)
              if (index === -1)
                index = elementDict.length;

              elementDict[index] = {
                "an": elementDict[elements[j].id].an,
                "left": elementDict[elements[j].id].left + 16,
                "top": elementDict[elements[j].id].top + 16,
                "lines": elementDict[elements[j].id].lines
              };
              switchElements[elements[j].id] = index;
              clone.children[j].id = index;
              clone.children[j].style.transform = "translate(" + elementDict[index].left + "px," + elementDict[index].top + "px)";
            }

            const lines = molecules[i].getElementsByClassName("svg")[0].children;
            const switchLines = {};
            for (let j = 0; j < lines.length; j++) {
              let index = lineDict.findIndex(i => i === undefined)
              if (index === -1)
                index = lineDict.length;
              const id = lines[j].id.substring(1);
              lineDict[index] = {
                "ele1": lineDict[id].ele1,
                "ele2": lineDict[id].ele2,
                "x1": lineDict[id].x1 + 16,
                "y1": lineDict[id].y1 + 16,
                "x2": lineDict[id].x2 + 16,
                "y2": lineDict[id].y2 + 16
              }
              switchLines[id] = index;
              let newLine = clone.getElementsByClassName("svg")[0].children[j];
              newLine.id = "#" + index;
              newLine.setAttribute("x1", lineDict[index].x1);
              newLine.setAttribute("y1", lineDict[index].y1);
              newLine.setAttribute("x2", lineDict[index].x2);
              newLine.setAttribute("y2", lineDict[index].y2);

              lines[j].classList.remove("selected");
            }

            const cloneLines = clone.getElementsByClassName("svg")[0].children;
            for (let j = 0; j < cloneLines.length; j++) {
              let ele1 = lineDict[cloneLines[j].id.substring(1)].ele1;
              let ele2 = lineDict[cloneLines[j].id.substring(1)].ele2;
              lineDict[cloneLines[j].id.substring(1)].ele1 = switchElements[ele1];
              lineDict[cloneLines[j].id.substring(1)].ele2 = switchElements[ele2];
            }

            for (let j = 1; j < clone.children.length; j++) {
              let convertedLine = [];
              const child = clone.children[j];
              for (let k = 0; k < elementDict[child.id].lines.length; k++) {
                convertedLine.push(switchLines[elementDict[child.id].lines[k]]);
              }
              elementDict[child.id].lines = convertedLine;
            }
            
            for (let j = 1; j < molecules[i].children.length; j++) {
              molecules[i].children[j].classList.remove("selected");
            }
          }
          toggleMenu("none", e);
        };
        const allElements = document.querySelectorAll("#main .element.selected");
        if (allElements.length === 2) {
          let ele1 = e.target;
          let ele2 = allElements[0] === e.target ? allElements[1] : allElements[0];
          if ((ele2.parentElement.classList.contains("molecule") && !ele1.parentElement.classList.contains("molecules")) || atomDict[elementDict[ele2.id].an] < atomDict[elementDict[ele1.id].an]) {
            const temp = ele2;
            ele2 = ele1;
            ele1 = temp;
          }

          const dataLine1 = elementDict[ele1.id].lines;
          const dataLine2 = elementDict[ele2.id].lines;

          if (dataLine1.length === 0 || dataLine2.length === 0 || !dataLine1.some(r => dataLine2.includes(r))) {
            document.getElementById("menu-options").getElementsByClassName("option")[2].innerHTML = document.getElementById("menu-options").getElementsByClassName("option")[1].innerHTML;
            document.getElementById("menu-options").getElementsByClassName("option")[1].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#656565" d="M18,19C16.89,19 16,18.1 16,17C16,15.89 16.89,15 18,15A2,2 0 0,1 20,17A2,2 0 0,1 18,19M18,13A4,4 0 0,0 14,17A4,4 0 0,0 18,21A4,4 0 0,0 22,17A4,4 0 0,0 18,13M12,11.1A1.9,1.9 0 0,0 10.1,13A1.9,1.9 0 0,0 12,14.9A1.9,1.9 0 0,0 13.9,13A1.9,1.9 0 0,0 12,11.1M6,19C4.89,19 4,18.1 4,17C4,15.89 4.89,15 6,15A2,2 0 0,1 8,17A2,2 0 0,1 6,19M6,13A4,4 0 0,0 2,17A4,4 0 0,0 6,21A4,4 0 0,0 10,17A4,4 0 0,0 6,13M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M12,10A4,4 0 0,0 16,6A4,4 0 0,0 12,2A4,4 0 0,0 8,6A4,4 0 0,0 12,10Z"/></svg><span>Create bond</span>';
            document.getElementById("menu-options").getElementsByClassName("option")[1].onclick = () => {
              let index = lineDict.findIndex(i => i === undefined)
              if (index === -1)
                index = lineDict.length;


              dataLine1.push(index);
              dataLine2.push(index);

              const m1 = ele1.parentElement;
              const m2 = ele2.parentElement;
              let molecule;
              let changeLocation = [];
              let changeLocationLine = [];
              if (m1.classList.contains("molecule")) {
                molecule = m1;
                if (m2.classList.contains("molecule") && m1 !== m2) {
                  const m2Lines =  [...m2.getElementsByClassName("svg")[0].children];
                  for (let i = 0; i < m2Lines.length; i++){
                    molecule.getElementsByClassName("svg")[0].appendChild(m2Lines[i]);
                    changeLocationLine.push(m2Lines[i].id);
                  }
                  m2.getElementsByClassName("svg")[0].remove();

                  while (m2.children[0]) {
                    changeLocation.push(m2.children[0].id);
                    molecule.appendChild(m2.children[0]);
                  }
                  m2.remove();
                } else {
                  molecule.appendChild(ele2);
                }
              } else if (m2.classList.contains("molecule")) {
                molecule = m2;
                molecule.appendChild(ele1);
              } else {
                molecule = document.createElement("div");
                const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.classList.add("svg");
                molecule.classList.add("molecule");
                molecule.appendChild(svg);
                molecule.appendChild(ele1);
                molecule.appendChild(ele2);
                document.getElementById("main").appendChild(molecule);
              }

              const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
              line.id = "#" + index;
              const currentLine = lineDict[index] = {
                ele1: ele1.id,
                ele2: ele2.id
              }
              const svg = molecule.getElementsByClassName("svg")[0];
              svg.appendChild(line);
              const placement1 = elementDict[ele1.id];
              const placement2 = elementDict[ele2.id];

              const rad = Math.PI / 2 - Math.atan2(placement2.left - placement1.left, placement2.top - placement1.top);

              const x = +placement1.left + (30 + ele1.offsetWidth) * Math.cos(rad);
              const y = +placement1.top + (30 + ele1.offsetWidth) * Math.sin(rad);

              if (changeLocation[0]) {
                const diffX = x - placement2.left;
                const diffY = y - placement2.top;
                for (let i = 0; i < changeLocation.length; i++) {
                  const coord = elementDict[changeLocation[i]];
                  coord.left += diffX;
                  coord.top += diffY;
                  document.getElementById(changeLocation[i]).style.transform = "translate(" + coord.left + "px," + coord.top + "px)";
                }

                for (let i = 0; i < changeLocationLine.length; i++) {
                  const moveLine = document.getElementById(changeLocationLine[i]);
                  const id = lineDict[changeLocationLine[i].substring(1)];
                  id.x1 += diffX;
                  id.y1 += diffY;
                  id.x2 += diffX;
                  id.y2 += diffY;
                  moveLine.setAttribute("x1", id.x1);
                  moveLine.setAttribute("y1", id.y1);
                  moveLine.setAttribute("x2", id.x2);
                  moveLine.setAttribute("y2", id.y2);
                }
              } else {
                elementDict[ele2.id].left = x;
                elementDict[ele2.id].top = y;
                ele2.style.transform = "translate(" + x + "px," + y + "px)";
              }
              currentLine.x1 = placement1.left + ele1.offsetWidth / 2;
              currentLine.y1 = placement1.top + ele1.offsetHeight / 2;
              currentLine.x2 = x + ele1.offsetWidth / 2;
              currentLine.y2 = y + ele1.offsetHeight / 2;
              line.setAttribute("x1", currentLine.x1);
              line.setAttribute("y1", currentLine.y1);
              line.setAttribute("x2", currentLine.x2);
              line.setAttribute("y2", currentLine.y2);
            };
            placement++;
          }
        }
      } else {
        document.getElementById("menu-options").getElementsByClassName("option")[0].onclick = () => {
          const clone = e.target.cloneNode(true);
          document.getElementById("main").appendChild(clone);

          let index = elementDict.findIndex(i => i === undefined)
          if (index === -1)
            index = elementDict.length;

          clone.id = index;
          elementDict[index] = {
            "an": elementDict[e.target.id].an,
            "left": elementDict[e.target.id].left + 16,
            "top": elementDict[e.target.id].top + 16,
            "lines": []
          }

          clone.style.transform = "translate(" + elementDict[index].left + "px," + elementDict[index].top + "px)";

          e.target.classList.remove("selected");
          toggleMenu("none", e);
        };
        e.target.classList.add("selected");
      }
      document.getElementById("menu-options").getElementsByClassName("option")[placement].onclick = () => {
        const molecules = document.querySelectorAll("#main > .molecule.selected");
        for (let i = 0; i < molecules.length; i++) {
          const elements = molecules[i].children;
          const lines = molecules[i].getElementsByClassName("svg")[0].children;
          for (let j = 0; j < elements.length; j++) {
            elementDict[elements[j].id] = undefined;
          }
          for (let j = 0; j < lines.length; j++) {
            lineDict[lines[j].id.substring(1)] = undefined;
          }
          molecules[i].remove();
        }
        const elements = document.querySelectorAll("#main .element.selected");
        const check = [];
        for (let i = 0; i < elements.length; i++) {
          let element = elementDict[elements[i].id];
          if (element.lines.length > 0) {
            if (check.indexOf(elements[i].parentElement) < 0) {
              check.push(elements[i].parentElement);
            }

            while (element.lines.length > 0) {
              const line = element.lines[0];
              document.getElementById("#" + line).remove();
              let ele1 = elementDict[lineDict[line].ele1].lines;
              let ele2 = elementDict[lineDict[line].ele2].lines;
              ele1 = ele1.splice(ele1.indexOf(line), 1);
              ele2 = ele2.splice(ele2.indexOf(line), 1);
              lineDict[line] = undefined;
            }
          }
          elementDict[elements[i].id] = undefined;
          elements[i].remove();
        }

        for (let i = 0; i < check.length; i++) {
          let elements = [...check[i].children];
          elements.shift();
          while (elements.length > 0) {
            let temp = [];
            let newLines = [];
            let nodes = [elements[0]];
            let branching = true;
            while (branching) {
              let newNodes = [];
              for (let j = 0; j < nodes.length; j++) {
                const lines = elementDict[nodes[j].id].lines;
                newLines.push(...lines);
                for (let k = 0; k < lines.length; k++) {
                  const ele1 = document.getElementById(lineDict[lines[k]].ele1);
                  const ele2 = document.getElementById(lineDict[lines[k]].ele2);
                  if (temp.indexOf(ele1) < 0) {
                    temp.push(ele1);
                    newNodes.push(ele1);
                  }
                  if (temp.indexOf(ele2) < 0) {
                    temp.push(ele2);
                    newNodes.push(ele2);
                  }
                }
                if (temp.indexOf(nodes[j]) < 0) {
                  temp.push(nodes[j]);
                }
              }
              if (newNodes.length === 0) {
                branching = false;
              } else {
                nodes = newNodes.slice(0);
              }
            }
            let molecule;
            if (temp.length > 1) {
              molecule = document.createElement("div");
              const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
              svg.classList.add("svg");
              molecule.classList.add("molecule");
              molecule.appendChild(svg);
              for (let j = 0; j < temp.length; j++) {
                molecule.appendChild(temp[j]);
              }
              for (let j = 0; j < newLines.length; j++) {
                newLines = [...new Set(newLines)];
                svg.appendChild(document.getElementById("#" + newLines[j]));
              }
            } else {
              molecule = temp[0];
            }
            document.getElementById("main").appendChild(molecule)
            elements = elements.filter((el) => !temp.includes(el));
          }
          check[i].remove();
        }
        toggleMenu("none", e);
      };
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
    setTimeout(() => {
      document.getElementById("rack-dialog").style.display = "none";
      document.getElementById("overlay").style.display = "none";
    }, 500);
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
    };

    const mouseUp = function mouseUp() {
      document.body.removeEventListener("mouseup", mouseUp);
      document.body.removeEventListener("mousemove", mouseMove);
      const changePX = document.getElementById("slider-thumb").offsetTop;
      document.getElementById("slider-thumb").style.top = changePX + "px";
      document.getElementById("slider").style.background = "linear-gradient(#e8e8e8 " + changePX + "%, #3fc1c9 " + changePX + "%)";
    };

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
  const newElement = target.cloneNode(true);
  newElement.id = "mirror";
  document.body.appendChild(newElement);

  let left = x - newElement.offsetWidth / 2;
  let top = y - newElement.offsetWidth / 1.25;
  newElement.style.left = left + "px";
  newElement.style.top = top + "px";
  document.body.setAttribute("grabbing", "");

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

  function tableMouseUp() {
    const tempElement = document.getElementById("temp");
    if (tempElement) {
      tempElement.id = "";
      tempElement.parentElement.classList.add("pulse");
      setTimeout(() => {
        tempElement.parentElement.classList.remove("pulse");
      }, 500);
    }
    document.removeEventListener("mousemove", tableMove);
    document.removeEventListener("mouseup", tableMouseUp);
    newElement.remove();
    document.body.removeAttribute("grabbing");
  }

  function hotbarMove(e) {
    left = left + e.movementX;
    top = top + e.movementY;

    newElement.style.left = left + "px";
    newElement.style.top = top + "px";
  }

  function hotbarMouseUp() {
    document.removeEventListener("mousemove", hotbarMove);
    document.removeEventListener("mouseup", hotbarMouseUp);
    const left = newElement.style.left;
    const top = newElement.style.top;
    newElement.style = "transform: translate(" + left + "," + top + ")";

    let index = elementDict.findIndex(i => i === undefined)
    if (index === -1)
      index = elementDict.length;

    elementDict[index] = {
      "an": +newElement.getAttribute("data-an"),
      "top": +top.slice(0, -2),
      "left": +left.slice(0, -2),
      "lines": []
    };

    newElement.id = index;
    newElement.removeAttribute("data-an");

    document.getElementById("main").appendChild(newElement);
    document.body.removeAttribute("grabbing");
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

document.getElementById("clear-progress").addEventListener("click", () => {
  window.removeEventListener("beforeunload", saveProgress);
  localStorage.clear();
  location.reload();
});

document.getElementById("react").addEventListener("click", () => {
  let elements;

  if (animate) {
    window.cancelAnimationFrame(animate);
    animate = undefined;

    const elements = document.getElementById("main").getElementsByClassName("element");
    for (let i = 0; i < elements.length; i++) {
      elementDict[i].left = elementDict[i].startX;
      elementDict[i].top = elementDict[i].startY;
      elements[i].style.transform = "translate(" + elementDict[i].left + "px, " + elementDict[i].top + "px)";
      elements[i].style.transition = "transform 0.5s";
    }

    setTimeout(() => {
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.transition = "";
      }
    }, 500);

  } else if (document.getElementById("main").getElementsByClassName("element").length > 1) {
    animate = requestAnimationFrame(frame);
    const elements = document.getElementById("main").getElementsByClassName("element");
    for (let i = 0; i < elements.length; i++) {
      elementDict[i].startX = elementDict[i].left;
      elementDict[i].startY = elementDict[i].top;
    }
  } else {
    const snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    snackbar.style.transition = "all 0.5s";

    const autoClose = setTimeout(() => {
      snackbar.className = "";
    }, 3000);

    const closeSnackBar = () => {
      clearTimeout(autoClose);
      snackbar.className = "";
      document.getElementById("snackbar-close").removeEventListener("click", closeSnackBar);
    };

    document.getElementById("snackbar-close").addEventListener("click", closeSnackBar);
  }

  function frame() {
    const elements = document.getElementById("main").getElementsByClassName("element");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.transform = "translate(" + ++elementDict[i].left + "px," + ++elementDict[i].top + "px)";
    }
    animate = window.requestAnimationFrame(frame);
  }
});

document.getElementById("periodic-table").addEventListener("mouseover", () => {
  if (event.target.classList.contains("element")) {
    if (event.target.parentElement.id === "periodic-table") {
      const atomicNumber = event.target.getAttribute("data-an");
      document.getElementById("atomic-number").textContent = atomicNumber;
      document.getElementById("atomic-symbol").textContent = event.target.children[0].textContent;
      document.getElementById("atomic-name").textContent = event.target.children[0].getAttribute("title");
      document.getElementById("atomic-mass").textContent = atomDict[atomicNumber][0];
      if (atomDict[atomicNumber][0] % 1 === 0)
        document.getElementById("atomic-mass").textContent = "(" + document.getElementById("atomic-mass").textContent + ")";
      document.getElementById("closeup").style.background = getComputedStyle(event.target).background;
    } else {
      document.getElementById("atomic-number").textContent = "Atomic No.";
      document.getElementById("atomic-symbol").textContent = "Symbol";
      document.getElementById("atomic-name").textContent = "Name";
      document.getElementById("atomic-mass").textContent = "Atomic Mass";
      document.getElementById("closeup").style.background = "";
    }
  } else {
    document.getElementById("atomic-number").textContent = "Atomic No.";
    document.getElementById("atomic-symbol").textContent = "Symbol";
    document.getElementById("atomic-name").textContent = "Name";
    document.getElementById("atomic-mass").textContent = "Atomic Mass";
    document.getElementById("closeup").style.background = "";
  }
});

document.addEventListener("keydown", () => {
  const hoverElement = document.querySelectorAll(":hover")[document.querySelectorAll(":hover").length - 1];
  if (/^[1-9]$/i.test(event.key) && hoverElement.classList.contains("element")) {
    const target = document.getElementById("hotbar").getElementsByClassName("slot")[event.key - 1];
    const clone = hoverElement.cloneNode(true);
    clone.removeAttribute("style");

    target.textContent = "";

    target.appendChild(clone);
    target.classList.add("pulse");
    setTimeout(function(e) {
      document.getElementById("hotbar").getElementsByClassName("slot")[e].classList.remove("pulse");
    }, 500, event.key - 1);
  } else if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "Up" || event.key === "Down") {
      let pos = document.getElementById("slider-thumb").offsetTop;
      if (event.key === "ArrowUp" || event.key === "Up")
        pos -= 2;
      else
        pos += 2;

      if (pos < -7)
        pos = -7;
      else if (pos > 93)
        pos = 93;
      document.getElementById("slider-thumb").style.top = pos + "px";
      document.getElementById("slider").style.background = "linear-gradient(#e8e8e8 " + pos + "%, #3fc1c9 " + pos + "%)";
  } else if (event.ctrlKey) {
      if (event.key === "a" || event.key === "A") {
        const elements = document.querySelectorAll("#main > .element");
        const molecules = document.getElementsByClassName("molecule");

        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.add("selected")
        }

        for (let i = 0; i < molecules.length; i++) {
          molecules[i].classList.add("selected")
        }
      }
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
          if (document.getElementsByClassName("selected").length < 2 || !e.target.classList.contains("selected"))
            while (document.getElementsByClassName("selected")[0])
              document.getElementsByClassName("selected")[0].classList.remove("selected");

          target.classList.add("selected");

          const mouseMove = () => {
            followCursor(e.target);
            document.removeEventListener("mouseup", mouseUp);
            document.removeEventListener("mousemove", mouseMove);
          };

          const mouseUp = () => {
            document.removeEventListener("mouseup", mouseUp);
            document.removeEventListener("mousemove", mouseMove);
          };

          document.addEventListener("mouseup", mouseUp);
          document.addEventListener("mousemove", mouseMove);
        } else {
          if (target.classList.contains("selected"))
            target.classList.remove("selected");
          else
            target.classList.add("selected");
        }
      } else if (e.ctrlKey || e.altKey || e.shiftKey) {
        openMenu(e);
      } else {
        while (document.getElementsByClassName("selected")[0])
          document.getElementsByClassName("selected")[0].classList.remove("selected");
        mouseDrag(e.pageX, e.pageY);
      }
    } else if (!document.getElementById("mirror") && e.target.classList.contains("element") && (path.includes(document.getElementById("periodic-table")) || path.includes(document.getElementById("bottom-container")))) {
      const mouseMove = () => {
        createElement(e.target, e.pageX, e.pageY, path.includes(document.getElementById("periodic-table")));
        document.removeEventListener("mouseup", mouseUp);
        document.removeEventListener("mousemove", mouseMove);
      };

      const mouseUp = () => {
        document.removeEventListener("mouseup", mouseUp);
        document.removeEventListener("mousemove", mouseMove);
      };

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
  localStorage.setItem("lineDict", JSON.stringify(lineDict));
  localStorage.setItem("elementDict", JSON.stringify(elementDict));
}

window.addEventListener("beforeunload", saveProgress);

window.addEventListener("beforeinstallprompt", function(e) {
  document.getElementById("install").style.display = "block";
  const installApp = e;
  document.getElementById("install").addEventListener("click", () => {
    installApp.prompt();
    installApp.userChoice.then(() => {
      document.getElementById("install").style.display = "none";
    });
  });
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}