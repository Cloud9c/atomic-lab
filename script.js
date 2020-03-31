"use strict";

(function(){function n(c){c=c.target;var a=c.childNodes.length;if("button"!==c.localName||!a)return c.classList.contains("rippleJS")?c:null;for(var b=0;b<a;++b){var g=c.childNodes[b],e=g.classList;if(e&&e.contains("rippleJS"))return g}return null}function h(c,a){var b=n(a);if(b){var g=b.classList,e=b.getAttribute("data-event");if(!e||e===c){b.setAttribute("data-event",c);var d=b.getBoundingClientRect();e=a.offsetX;void 0!==e?a=a.offsetY:(e=a.clientX-d.left,a=a.clientY-d.top);var f=document.createElement("div");
d=d.width===d.height?1.412*d.width:Math.sqrt(d.width*d.width+d.height*d.height);var k=2*d+"px";f.style.width=k;f.style.height=k;f.style.marginLeft=-d+e+"px";f.style.marginTop=-d+a+"px";f.className="ripple";b.appendChild(f);window.setTimeout(function(){f.classList.add("held")},0);var l="mousedown"===c?"mouseup":"touchend",m=function(){document.removeEventListener(l,m);f.classList.add("done");window.setTimeout(function(){b.removeChild(f);b.children.length||(g.remove("active"),b.removeAttribute("data-event"))},
650)};document.addEventListener(l,m)}}}function p(){var c=c||document;c.addEventListener("mousedown",function(a){0===a.button&&h(a.type,a)},{passive:!0});c.addEventListener("touchstart",function(a){for(var b=0;b<a.changedTouches.length;++b)h(a.type,a.changedTouches[b])},{passive:!0})}(function(){function c(){var a=document.createElement("div");a.className="rippleJS";document.body.appendChild(a);var b="absolute"===window.getComputedStyle(a).position;document.body.removeChild(a);b||(a=document.createElement("style"),
a.textContent='/*rippleJS*/.rippleJS,.rippleJS.fill::after{position:absolute;top:0;left:0;right:0;bottom:0}.rippleJS{display:block;overflow:hidden;border-radius:inherit;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.rippleJS.fill::after{content:""}.rippleJS.fill{border-radius:1000000px}.rippleJS .ripple{position:absolute;border-radius:100%;background:currentColor;opacity:.2;width:0;height:0;-webkit-transition:-webkit-transform .4s ease-out,opacity .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out;-webkit-transform:scale(0);transform:scale(0);pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rippleJS .ripple.held{opacity:.4;-webkit-transform:scale(1);transform:scale(1)}.rippleJS .ripple.done{opacity:0}',
document.head.insertBefore(a,document.head.firstChild));p()}"complete"===document.readyState?c():window.addEventListener("load",c)})()})();

let animate, elementDict, lineDict;
let factor = 1;

//pt format: "AtomicMass","ElectronConfiguration","Electronegativity","AtomicRadius", "IonizationEnergy","ElectronAffinity","OxidationStates"

let pt = JSON.parse('[[],[1.008,"1s1",2.2,120,13.598,0.754,[1,-1]],[4.0026,"1s2",null,140,24.587,null,[0]],[7.0,"[He]2s1",0.98,182,5.392,0.618,[1]],[9.012183,"[He]2s2",1.57,153,9.323,null,[2]],[10.81,"[He]2s22p1",2.04,192,8.298,0.277,[3]],[12.011,"[He]2s22p2",2.55,170,11.26,1.263,[4,2,-4]],[14.007,"[He]2s22p3",3.04,155,14.534,null,[5,4,3,2,1,-1,-2,-3]],[15.999,"[He]2s22p4",3.44,152,13.618,1.461,[-2]],[18.99840316,"[He]2s22p5",3.98,135,17.423,3.339,[-1]],[20.18,"[He]2s22p6",null,154,21.565,null,[0]],[22.9897693,"[Ne]3s1",0.93,227,5.139,0.548,[1]],[24.305,"[Ne]3s2",1.31,173,7.646,null,[2]],[26.981538,"[Ne]3s23p1",1.61,184,5.986,0.441,[3]],[28.085,"[Ne]3s23p2",1.9,210,8.152,1.385,[4,2,-4]],[30.973762,"[Ne]3s23p3",2.19,180,10.487,0.746,[5,3,-3]],[32.07,"[Ne]3s23p4",2.58,180,10.36,2.077,[6,4,-2]],[35.45,"[Ne]3s23p5",3.16,175,12.968,3.617,[7,5,1,-1]],[39.9,"[Ne]3s23p6",null,188,15.76,null,[0]],[39.098,"[Ar]4s1",0.82,275,4.341,0.501,[1]],[40.08,"[Ar]4s2",1,231,6.113,null,[2]],[44.95591,"[Ar]4s23d1",1.36,211,6.561,0.188,[3]],[47.87,"[Ar]4s23d2",1.54,187,6.828,0.079,[4,3,2]],[50.941,"[Ar]4s23d3",1.63,179,6.746,0.525,[5,4,3,2]],[51.996,"[Ar]3d54s1",1.66,189,6.767,0.666,[6,3,2]],[54.93804,"[Ar]4s23d5",1.55,197,7.434,null,[7,4,3,2]],[55.84,"[Ar]4s23d6",1.83,194,7.902,0.163,[3,2]],[58.93319,"[Ar]4s23d7",1.88,192,7.881,0.661,[3,2]],[58.693,"[Ar]4s23d8",1.91,163,7.64,1.156,[3,2]],[63.55,"[Ar]4s13d10",1.9,140,7.726,1.228,[2,1]],[65.4,"[Ar]4s23d10",1.65,139,9.394,null,[2]],[69.72,"[Ar]4s23d104p1",1.81,187,5.999,0.3,[3]],[72.63,"[Ar]4s23d104p2",2.01,211,7.9,1.35,[4,2]],[74.92159,"[Ar]4s23d104p3",2.18,185,9.815,0.81,[5,3,-3]],[78.97,"[Ar]4s23d104p4",2.55,190,9.752,2.021,[6,4,-2]],[79.9,"[Ar]4s23d104p5",2.96,183,11.814,3.365,[5,1,-1]],[83.8,"[Ar]4s23d104p6",3,202,14,null,[0]],[85.468,"[Kr]5s1",0.82,303,4.177,0.468,[1]],[87.6,"[Kr]5s2",0.95,249,5.695,null,[2]],[88.9058,"[Kr]5s24d1",1.22,219,6.217,0.307,[3]],[91.22,"[Kr]5s24d2",1.33,186,6.634,0.426,[4]],[92.9064,"[Kr]5s14d4",1.6,207,6.759,0.893,[5,3]],[96.0,"[Kr]5s14d5",2.16,209,7.092,0.746,[6]],[97.90721,"[Kr]5s24d5",1.9,209,7.28,0.55,[7,6,4]],[101.1,"[Kr]5s14d7",2.2,207,7.361,1.05,[3]],[102.9055,"[Kr]5s14d8",2.28,195,7.459,1.137,[3]],[106.4,"[Kr]4d10",2.2,202,8.337,0.557,[3,2]],[107.868,"[Kr]5s14d10",1.93,172,7.576,1.302,[1]],[112.41,"[Kr]5s24d10",1.69,158,8.994,null,[2]],[114.82,"[Kr]5s24d105p1",1.78,193,5.786,0.3,[3]],[118.71,"[Kr]5s24d105p2",1.96,217,7.344,1.2,[4,2]],[121.76,"[Kr]5s24d105p3",2.05,206,8.64,1.07,[5,3,-3]],[127.6,"[Kr]5s24d105p4",2.1,206,9.01,1.971,[6,4,-2]],[126.9045,"[Kr]5s24d105p5",2.66,198,10.451,3.059,[7,5,1,-1]],[131.29,"[Kr]5s24d105p6",2.6,216,12.13,null,[0]],[132.905452,"[Xe]6s1",0.79,343,3.894,0.472,[1]],[137.33,"[Xe]6s2",0.89,268,5.212,null,[2]],[138.9055,"[Xe]6s25d1",1.1,240,5.577,0.5,[3]],[140.12,"[Xe]6s24f15d1",1.12,235,5.539,0.5,[4,3]],[140.9077,"[Xe]6s24f3",1.13,239,5.464,null,[3]],[144.24,"[Xe]6s24f4",1.14,229,5.525,null,[3]],[144.91276,"[Xe]6s24f5",null,236,5.55,null,[3]],[150.4,"[Xe]6s24f6",1.17,229,5.644,null,[3,2]],[151.96,"[Xe]6s24f7",null,233,5.67,null,[3,2]],[157.2,"[Xe]6s24f75d1",1.2,237,6.15,null,[3]],[158.92535,"[Xe]6s24f9",null,221,5.864,null,[3]],[162.5,"[Xe]6s24f10",1.22,229,5.939,null,[3]],[164.93033,"[Xe]6s24f11",1.23,216,6.022,null,[3]],[167.26,"[Xe]6s24f12",1.24,235,6.108,null,[3]],[168.93422,"[Xe]6s24f13",1.25,227,6.184,null,[3]],[173.04,"[Xe]6s24f14",null,242,6.254,null,[3,2]],[174.967,"[Xe]6s24f145d1",1.27,221,5.426,null,[3]],[178.5,"[Xe]6s24f145d2",1.3,212,6.825,null,[4]],[180.9479,"[Xe]6s24f145d3",1.5,217,7.89,0.322,[5]],[183.8,"[Xe]6s24f145d4",2.36,210,7.98,0.815,[6]],[186.21,"[Xe]6s24f145d5",1.9,217,7.88,0.15,[7,6,4]],[190.2,"[Xe]6s24f145d6",2.2,216,8.7,1.1,[4,3]],[192.22,"[Xe]6s24f145d7",2.2,202,9.1,1.565,[4,3]],[195.08,"[Xe]6s14f145d9",2.28,209,9,2.128,[4,2]],[196.96657,"[Xe]6s14f145d10",2.54,166,9.226,2.309,[3,1]],[200.59,"[Xe]6s24f145d10",2,209,10.438,null,[2,1]],[204.383,"[Xe]6s24f145d106p1",1.62,196,6.108,0.2,[3,1]],[207,"[Xe]6s24f145d106p2",2.33,202,7.417,0.36,[4,2]],[208.9804,"[Xe]6s24f145d106p3",2.02,207,7.289,0.946,[5,3]],[208.98243,"[Xe]6s24f145d106p4",2,197,8.417,1.9,[4,2]],[209.98715,"[Xe]6s24f145d106p5",2.2,202,9.5,2.8,[7,5,3,1,-1]],[222.01758,"[Xe]6s24f145d106p6",null,220,10.745,null,[0]],[223.01973,"[Rn]7s1",0.7,348,3.9,0.47,[1]],[226.02541,"[Rn]7s2",0.9,283,5.279,null,[2]],[227.02775,"[Rn]7s26d1",1.1,260,5.17,null,[3]],[232.038,"[Rn]7s26d2",1.3,237,6.08,null,[4]],[231.0359,"[Rn]7s25f26d1",1.5,243,5.89,null,[5,4]],[238.0289,"[Rn]7s25f36d1",1.38,240,6.194,null,[6,5,4,3]],[237.04817,"[Rn]7s25f46d1",1.36,221,6.266,null,[6,5,4,3]],[244.0642,"[Rn]7s25f6",1.28,243,6.06,null,[6,5,4,3]],[243.06138,"[Rn]7s25f7",1.3,244,5.993,null,[6,5,4,3]],[247.07035,"[Rn]7s25f76d1",1.3,245,6.02,null,[3]],[247.07031,"[Rn]7s25f9",1.3,244,6.23,null,[4,3]],[251.07959,"[Rn]7s25f10",1.3,245,6.3,null,[3]],[252.083,"[Rn]7s25f11",1.3,245,6.42,null,[3]],[257.09511,"[Rn]5f127s2",1.3,null,6.5,null,[3]],[258.09843,"[Rn]7s25f13",1.3,null,6.58,null,[3,2]],[259.101,"[Rn]7s25f14",1.3,null,6.65,null,[3,2]],[262.11,"[Rn]7s25f146d1",1.3,null,null,null,[3]],[267.122,"[Rn]7s25f146d2",null,null,null,null,[4]],[268.126,"[Rn]7s25f146d3",null,null,null,null,[5,4,3]],[271.134,"[Rn]7s25f146d4",null,null,null,null,[6,5,4,3,0]],[274.144,"[Rn]7s25f146d5",null,null,null,null,[7,5,4,3]],[277.152,"[Rn]7s25f146d6",null,null,null,null,[8,6,5,4,3,2]],[278.156,"[Rn]7s25f146d7",null,null,null,null,[9,8,6,4,3,1]],[281.165,"[Rn]7s25f146d8",null,null,null,null,[8,6,4,2,0]],[282.169,"[Rn]7s25f146d9",null,null,null,null,[5,3,1,-1]],[285.177,"[Rn]7s25f146d10",null,null,null,null,[2,1,0]],[286.183,"[Rn]5f146d107s27p1",null,null,null,null,[null]],[289.191,"[Rn]7s27p25f146d10",null,null,null,null,[6,4,2,1,0]],[290.196,"[Rn]7s27p35f146d10",null,null,null,null,[3,1]],[293.205,"[Rn]7s27p45f146d10",null,null,null,null,[4,2,-2]],[294.211,"[Rn]7s27p55f146d10",null,null,null,null,[5,3,1,-1]],[294.214,"[Rn]7s27p65f146d10",null,null,null,null,[6,4,2,1,0,-1]]]');

window.addEventListener("load", () => {
  if (localStorage.getItem("slot")) {
    const slot = JSON.parse(localStorage.getItem("slot"));
    for (let i = 0; i < 9; i++)
      if (slot[i] > 0)
        document.getElementById("hotbar").getElementsByClassName("slot")[i].appendChild(document.getElementById("periodic-table").getElementsByClassName("element")[slot[i] - 1].cloneNode(true));

    lineDict = JSON.parse(localStorage.getItem("lineDict"));
    elementDict = JSON.parse(localStorage.getItem("elementDict"));

    const mainContent = JSON.parse(localStorage.getItem("mainContent"));
    for (let i = 0; i < mainContent.length; i++) {
      if (typeof mainContent[i] === "string") {
        const id = mainContent[i];
        const element = document.getElementById("periodic-table").getElementsByClassName("element")[elementDict[id].an - 1].cloneNode(true);
        element.removeAttribute("data-an");

        element.id = id;
        element.style.transform = "translate(" + elementDict[id].left + "px, " + elementDict[id].top + "px)";
        document.getElementById("main").appendChild(element);
      } else {
        const molecule = document.createElement("div");
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        molecule.classList.add("molecule");
        svg.classList.add("svg");
        molecule.appendChild(svg);
        for (let j = 0; j < mainContent[i][0].length; j++) {
          const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
          const id = mainContent[i][0][j].substring(1);
          line.id = "#" + id;
          line.setAttribute("x1", lineDict[id].x1);
          line.setAttribute("y1", lineDict[id].y1);
          line.setAttribute("x2", lineDict[id].x2);
          line.setAttribute("y2", lineDict[id].y2);
          svg.appendChild(line);
        }
        for (let j = 0; j < mainContent[i][1].length; j++) {
          const id = mainContent[i][1][j];
          const element = document.getElementById("periodic-table").getElementsByClassName("element")[elementDict[id].an - 1].cloneNode(true);
          element.removeAttribute("data-an");

          element.id = id;
          element.style.transform = "translate(" + elementDict[id].left + "px, " + elementDict[id].top + "px)";
          molecule.appendChild(element);
        }
        document.getElementById("main").appendChild(molecule);
      }
    }

    const elements = document.getElementById("main").getElementsByClassName("element");
    for (let i = 0; i < elements.length; i++) {
      const newWidth = 72 + 72 * Math.log(pt[elementDict[elements[i].id].an][3]/120)*0.6;
      elements[i].style.width = newWidth + "px";
      elements[i].style.height = newWidth + "px";
    }
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

    requestAnimationFrame(() => {
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
  let molecules = document.getElementsByClassName("molecule");
  let elements = document.querySelectorAll("#main > .element.selected");

  const mouseMove = function(e) {
    let x = e.movementX;
    let y = e.movementY;

    if (window.innerWidth < 851) {
      x *= 1.5;
      y *= 1.5;
    }
    else if (window.innerWidth < 1321) {
      x *= 1.2;
      y *= 1.2;
    }

    requestAnimationFrame(() => {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.classList.contains("selected")) {
          const id = element.id;
          elementDict[element.id].left += x;
          elementDict[element.id].top += y;
          element.style.transform = "translate(" + elementDict[element.id].left + "px," + elementDict[element.id].top + "px)";
          if (element.parentElement.classList.contains("molecule")) {
            element.style.boxShadow = "";
            element.parentElement.classList.add("selected");
          }
        } else {
          element.style.boxShadow = "";
        }
      }
      for (let i = 0; i < selectedMolecules.length; i++) {
        if (selectedMolecules[i].classList.contains("selected")) {
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
      }
      selectedMolecules = document.querySelectorAll(".molecule.selected");
      elements = document.querySelectorAll("#main > .element.selected");
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

  let selectedMolecules = document.querySelectorAll(".molecule.selected");

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

function getBondLength(an1, an2) {
  console.log((pt[an1][3] + pt[an2][3] - 0.09 * (pt[an1][2] - pt[an2][2])))
  return (pt[an1][3] + pt[an2][3] - 0.09 * (pt[an1][2] - pt[an2][2])) * 0.35249756885;
}

function createBond(ele1, ele2) {
  const dataLine1 = elementDict[ele1.id].lines;
  const dataLine2 = elementDict[ele2.id].lines;

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

      while (m2.firstChild) {
        changeLocation.push(m2.firstChild.id);
        molecule.appendChild(m2.firstChild);
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

  const distance = getBondLength(placement1.an, placement2.an);
  const rad = Math.PI / 2 - Math.atan2(placement2.left - placement1.left, placement2.top - placement1.top);

  const x = Math.round(+placement1.left + distance * Math.cos(rad));
  const y = Math.round(+placement1.top + distance * Math.sin(rad));

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
  currentLine.x2 = x + ele2.offsetWidth / 2;
  currentLine.y2 = y + ele2.offsetHeight / 2;
  line.setAttribute("x1", currentLine.x1);
  line.setAttribute("y1", currentLine.y1);
  line.setAttribute("x2", currentLine.x2);
  line.setAttribute("y2", currentLine.y2);
}

function openMenu(e) {
  e.preventDefault();
  if (!e.path.includes(document.getElementById("menu-options"))) {
    const options = document.getElementsByClassName("option");
    const content = document.getElementsByClassName("menu-content");
    const icons = document.getElementsByClassName("menu-icon");

    content[0].textContent = "";
    content[1].textContent = "";
    content[2].textContent = "";

    icons[0].removeAttribute("d");
    icons[1].removeAttribute("d");
    icons[2].removeAttribute("d");

    if (e.target.id === "hotbar") {
      icons[0].setAttribute("d", "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z");
      content[0].textContent = "Clear All Slots";
      options[0].onclick = () => {
        for (let i = 0; i < 9; i++)
          document.getElementById("hotbar").getElementsByClassName("slot")[i].innerHTML = "";
        toggleMenu("none", e);
      };
    } else if (e.target.parentElement.classList.contains("slot")) {
      icons[0].setAttribute("d", "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z");
      content[0].textContent = "Clear Slot";
      options[0].onclick = () => {
        e.target.parentElement.innerHTML = "";
        toggleMenu("none", e);
      };
    } else if (e.target.id === "main") {
      icons[0].setAttribute("d", "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z");
      content[0].textContent = "Clear Lab";
      options[0].onclick = () => {
        document.getElementById("main").innerHTML = "";
        elementDict = [];
        lineDict = [];
        toggleMenu("none", e);
      };
    } else if ((e.target.parentElement.id === "main" || e.target.parentElement.classList.contains("molecule")) && e.target.classList.contains("element")) {
      icons[0].setAttribute("d", "M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z");
      content[0].textContent = "Duplicate";
      icons[1].setAttribute("d", "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z");
      content[1].textContent = "Remove";

      const selected = document.getElementsByClassName("selected");
      if (!e.target.classList.contains("selected"))
        while (selected[0])
          selected[0].classList.remove("selected");

      let placement = 1;

      if (selected[1]) {
        options[0].onclick = () => {
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
              "lines": [],
              "oxidation": oldElement.oxidation
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
                "lines": elementDict[elements[j].id].lines,
                "oxidation": elementDict[elements[j].id].oxidation
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
          if ((ele2.parentElement.classList.contains("molecule") && !ele1.parentElement.classList.contains("molecules"))) {
            const temp = ele2;
            ele2 = ele1;
            ele1 = temp;
          }

          const dataLine1 = elementDict[ele1.id].lines;
          const dataLine2 = elementDict[ele2.id].lines;

          if (dataLine1.length === 0 || dataLine2.length === 0 || !dataLine1.some(r => dataLine2.includes(r))) {
            options[2].innerHTML = options[1].innerHTML;
            icons[1].setAttribute("d", "M18,19C16.89,19 16,18.1 16,17C16,15.89 16.89,15 18,15A2,2 0 0,1 20,17A2,2 0 0,1 18,19M18,13A4,4 0 0,0 14,17A4,4 0 0,0 18,21A4,4 0 0,0 22,17A4,4 0 0,0 18,13M12,11.1A1.9,1.9 0 0,0 10.1,13A1.9,1.9 0 0,0 12,14.9A1.9,1.9 0 0,0 13.9,13A1.9,1.9 0 0,0 12,11.1M6,19C4.89,19 4,18.1 4,17C4,15.89 4.89,15 6,15A2,2 0 0,1 8,17A2,2 0 0,1 6,19M6,13A4,4 0 0,0 2,17A4,4 0 0,0 6,21A4,4 0 0,0 10,17A4,4 0 0,0 6,13M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M12,10A4,4 0 0,0 16,6A4,4 0 0,0 12,2A4,4 0 0,0 8,6A4,4 0 0,0 12,10Z");
            content[1].textContent = "Create Bond";
            options[1].onclick = () => createBond(ele1, ele2);
            placement++;
          }
        }
      } else {
        options[0].onclick = () => {
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
            "lines": [],
            "oxidation": elementDict[e.target.id].oxidation
          }

          clone.style.transform = "translate(" + elementDict[index].left + "px," + elementDict[index].top + "px)";

          e.target.classList.remove("selected");
          toggleMenu("none", e);
        };
        e.target.classList.add("selected");
      }
      options[placement].onclick = () => {
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

    if (content[0].textContent.length > 0)
      toggleMenu("block", e);
  }
}

function scrollbarToggle() {
  const periodicTable = document.getElementById("periodic-table");

  if (periodicTable.scrollHeight > periodicTable.clientHeight) {
    periodicTable.setAttribute("scrollbar", "");
  } else {
    periodicTable.removeAttribute("scrollbar");
  }
}

function overlayToggle() {
  const overlayStyles = document.getElementById("overlay").style;
  const rack = document.getElementById("rack-dialog");

  if (overlayStyles.display === "none" || overlayStyles.display === "") {
    overlayStyles.display = "initial";
    rack.style.display = "flex";
    overlayStyles.animation = "opacity 0.25s forwards";
    rack.firstElementChild.style.animation = "opacity 0.25s forwards";

    scrollbarToggle();
  } else {
    overlayStyles.animation = "opacity-inverse 0.25s forwards";
    rack.firstElementChild.style.animation = "opacity-inverse 0.25s forwards";
    setTimeout(() => {
      rack.style.display = "none";
      overlayStyles.display = "none";
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

      factor = (-pos -7)/100 + 1.5;
      target.style.top = pos + "px";

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
  document.body.appendChild(newElement);

  const pos = target.getBoundingClientRect();
  let width;
  let left = pos.left;
  let top = pos.top;
  document.body.setAttribute("grabbing", "");

  if (!table) {
    newElement.id = "mirror";
    const an = +newElement.getAttribute("data-an");
    const reduction = Math.log(pt[an][3]/120)*0.6;
    width = 72 + 72 * reduction;
    let change = (width - 72)/2;

    let scale = getComputedStyle(document.getElementById("main")).transform.match(/[\d|.+]+/g);
    if (scale) {
      change += 15.84/+scale[0] - 11.02;
    }

    left -= change;
    top -= change;

    newElement.style = "width:" + width + "px;height:" + width + "px;left:" + left + "px;top:" + top + "px";
  } else {
    newElement.style.left = left + "px";
    newElement.style.top = top + "px";
  }

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
        if (tempElement.parentElement)
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

    let scale = getComputedStyle(document.getElementById("main")).transform.match(/[\d|.+]+/g);
    if (scale) {
      const scaleFactor = 1.025/+scale[0];
      top *= scaleFactor;
      left *= scaleFactor;
    }

    let index = elementDict.findIndex(i => i === undefined)
    if (index === -1)
      index = elementDict.length;

    const an = +newElement.getAttribute("data-an");

    elementDict[index] = {
      "an": an,
      "top": top,
      "left": left,
      "lines": [],
      "oxidation": 0
    };

    newElement.id = index;
    newElement.removeAttribute("data-an");
    newElement.style.transform = "translate(" + left + "px," + top + "px)";
    newElement.style.left = "";
    newElement.style.top = "";

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
  location.reload(true);
});

document.getElementById("react").addEventListener("click", () => {
  let elements = document.querySelectorAll("#main > .element");

  const cancel = () => {
    window.cancelAnimationFrame(animate);
    animate = undefined;
    document.body.classList.remove("frame");
  }

  if (animate) {
    cancel();

  } else if (elements.length > 1) {
    const width = elements[0].offsetWidth;
    document.body.classList.add("frame");
    const frame = () => {
      let keepGoing = false;
      try {
        for (let i = 0; i < elements.length; i++) {
          const id = elementDict[elements[i].id];
          const others = [...elements];
          const en = pt[id.an][2];
          others.splice(i, 1);
          for (let j = 0; j < others.length; j++) {
            const id2 = elementDict[others[j].id];
            const diffX = id2.left - id.left;
            const diffY = id2.top - id.top;
            const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
            const en2 = pt[id2.an][2];
            if (distance > getBondLength(id.an, id2.an)) {
              keepGoing = true;
              id.left += en2 * diffX / Math.pow(distance, 2) * factor * 150;
              id.top += en2 * diffY / Math.pow(distance, 2) * factor * 150;
              elements[i].style.transform = "translate(" + id.left + "px," + id.top + "px)";
            } else if (elements[i].parentElement.id === "main" || others[j].parentElement.id === "main") {
              elements[i].classList.remove("selected");
              others[j].classList.remove("selected");
              const enDiff = Math.abs(en2 - en);
              if (enDiff <= 1.7) {
                if (enDiff < 0.4)
                  console.log("non-polar covalent")
                else
                  console.log("polar covalent")
                id.oxidation += 1;
                id2.oxidation += 1;
              } else {
                console.log("ionic")
                if (en > en2) {
                  id.oxidation += 1;
                  id2.oxidation -= 1;
                } else {
                  id.oxidation -= 1;
                  id2.oxidation += 1;
                }
              }
              createBond(elements[i], others[j]);
            }
          }
        }
      } catch {
        cancel();
      }

      if (keepGoing) {
        elements = document.querySelectorAll("#main > .element");
        animate = requestAnimationFrame(frame);
      }
      else
        cancel();
    }

    animate = requestAnimationFrame(frame);
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
});

document.getElementById("periodic-table").addEventListener("mouseover", () => {
  if (event.target.classList.contains("element") && event.target.parentElement.id === "periodic-table") {
    const atomicNumber = event.target.getAttribute("data-an");
    document.getElementById("atomic-number").textContent = atomicNumber;
    document.getElementById("atomic-symbol").textContent = event.target.firstElementChild.textContent;
    document.getElementById("atomic-name").textContent = event.target.firstElementChild.getAttribute("title");
    document.getElementById("atomic-mass").textContent = pt[atomicNumber][0];
    if (atomicNumber == 3 || atomicNumber == 42) {
      document.getElementById("atomic-mass").textContent = document.getElementById("atomic-mass").textContent + ".0"
    }
    document.getElementById("closeup").style.background = getComputedStyle(event.target).background;

    let config = pt[atomicNumber][1];

    for (let i = 1; i < config.length; i++) {
      if (i+1 === config.length || config.charCodeAt(i+1) < 64 && config[i] >= "0" && config[i] <= "9") {
          config = config.substring(0, i) + "<sup>" + config[i] + "</sup>" + config.substring(i+1);
          i += 11;
      }
    }

    document.getElementById("electron-config").innerHTML = config;
  } else {
    document.getElementById("atomic-number").textContent = "Atomic No.";
    document.getElementById("atomic-symbol").textContent = "Symbol";
    document.getElementById("atomic-name").textContent = "Name";
    document.getElementById("atomic-mass").textContent = "Atomic Mass";
    document.getElementById("closeup").style.background = "";
    document.getElementById("electron-config").textContent = "";
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
  } else if (event.key === "Escape") {
    overlayToggle();
  }
});

document.getElementById("slider").addEventListener("mousedown", sliderAdjust);

document.addEventListener("contextmenu", openMenu);

document.addEventListener("mousedown", function(e) {
  const path = [].slice.call(e.path);
  if (!path.includes(document.getElementById("menu"))) {
    toggleMenu("none", e);
  }

  if (e.button === 0) {
    if (path.includes(document.getElementById("main"))) {
      const target = e.target;
      const selected = document.getElementsByClassName("selected");
      if (target.classList.contains("element")) {
        if (!e.altKey && !e.shiftKey) {
          if (!e.target.classList.contains("selected"))
            while (selected[0])
              selected[0].classList.remove("selected");

          target.classList.add("selected");
          if (target.parentElement.id === "main")
            document.getElementById("main").appendChild(target);
          else
            document.getElementById("main").appendChild(target.parentElement);

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
      } else {
        while (selected[0])
          selected[0].classList.remove("selected");
        mouseDrag(e.pageX, e.pageY);
      }
    } else if (e.target.classList.contains("element") && (path.includes(document.getElementById("periodic-table")) || path.includes(document.getElementById("bottom-container")))) {
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

function saveProgress() {
  let slot = [];
  let mainContent = [];
  const main = document.getElementById("main").children;
  for (let i = 0; i < main.length; i++) {
    let current = main[i];
    if (current.classList.contains("element")) {
      mainContent.push(current.id);
    } else {
      let current = main[i].children;
      let molecule = [[], []];
      for (let j = 0; j < current[0].children.length; j++) {
        molecule[0].push(current[0].children[j].id);
      }
      for (let j = 1; j < current.length; j++) {
        molecule[1].push(current[j].id);
      }
      mainContent.push(molecule);
    }
  }

  for (let i = 0; i < 9; i++) {
    let element = document.getElementById("hotbar").getElementsByClassName("slot")[i].firstChild;
    if (element)
      slot.push(element.getAttribute("data-an"));
    else
      slot.push(0);
  }

  localStorage.setItem("slot", JSON.stringify(slot));
  localStorage.setItem("lineDict", JSON.stringify(lineDict));
  localStorage.setItem("elementDict", JSON.stringify(elementDict));
  localStorage.setItem("mainContent", JSON.stringify(mainContent));
}

window.addEventListener("resize", scrollbarToggle);
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
