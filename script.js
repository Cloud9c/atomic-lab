let hoverElement;
let menuVisible = false;

function overlayToggle() {
	if (document.getElementById("overlay").style.visibility === "visible") {
		document.getElementById("overlay").style.opacity = 0;
		document.getElementById("rack-dialog").style.visibility = "hidden";
		setTimeout(function(){
			document.getElementById("overlay").style.visibility = "hidden";
		}, 500);
		document.body.setAttribute("overlay", "off");
	}
	else {
		document.getElementById("overlay").style.visibility = "visible";
		document.getElementById("overlay").style.opacity = 1;
		document.getElementById("rack-dialog").style.visibility = "visible";
		document.body.setAttribute("overlay", "on");
	}
};

drake = dragula([document.getElementById('periodic-table'), document.getElementById('main'), document.getElementsByClassName('slot')[0], document.getElementsByClassName('slot')[1], document.getElementsByClassName('slot')[2], document.getElementsByClassName('slot')[3], document.getElementsByClassName('slot')[4], document.getElementsByClassName('slot')[5], document.getElementsByClassName('slot')[6], document.getElementsByClassName('slot')[7], document.getElementsByClassName('slot')[8]], {
	copy: function (el, source) {
		return source !== document.getElementById('main');
	},
  accepts: function (el, target) {
	if (target.classList.contains("slot") && target.children[1])
		target.removeChild(target.children[1]);
	return target !== document.getElementById("periodic-table");
	},
	moves: function (el, source, handle, sibling) {
		return source !== document.getElementById('main');
	},
});

drake.on('drop',function(el,target,source,sibling){
	if (target != null && target.classList.contains("slot")) {
		target.classList.add("pulse");
		setTimeout(function(){
			target.classList.remove("pulse");
		}, 500);
	}

	if (target === document.getElementById('main')) {
		el.style.left = document.getElementsByClassName("gu-mirror")[0].style.left;
		el.style.top = document.getElementsByClassName("gu-mirror")[0].style.top;
		el.tabIndex = "1";
		el.classList.add("pulse2");
		setTimeout(function(e){
			el.classList.remove("pulse2");
		}, 500, event.key - 1);
	}
})

document.getElementById("periodic-table").addEventListener('mouseover', e => {
	if (event.target.classList.contains("element"))
		hoverElement = event.target;
	else
		hoverElement = undefined;
});

document.addEventListener('keydown',  e => {
	if (/^[1-9]$/i.test(event.key) && typeof hoverElement !== 'undefined') {
		document.getElementsByClassName('slot')[event.key - 1].innerHTML = "";
		document.getElementsByClassName('slot')[event.key - 1].appendChild(hoverElement.cloneNode(true));
		document.getElementsByClassName('slot')[event.key - 1].classList.add("pulse");
		setTimeout(function(e){
			document.getElementsByClassName('slot')[e].classList.remove("pulse");
		}, 500, event.key - 1);
	}
});

document.getElementById("main").addEventListener("mousedown", e => {
	toggleMenu("hide");
	if (e.target.classList.contains("element") && e.button === 0) {
		diffX = e.pageX - parseInt(e.target.style.left, 10);
		diffY = e.pageY - parseInt(e.target.style.top, 10);

		e.target.parentNode.appendChild(e.target);

		followCursor(e.target, diffX, diffY);
	}
});

function followCursor(target, diffX, diffY) {
	var mouseMove = e => {
	    target.style.left = e.pageX - diffX + "px";
	    target.style.top = e.pageY - diffY + "px";
	    target.style.boxShadow = "5px 5px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 2px #000, 0 0 0 1px #000";
	    target.style.cursor = "url(assets/cursor-drag-clicked.png), pointer";
	}

	var mouseUp = () => {
		target.style.boxShadow = "inset 0 0 0 2px #000, 0 0 0 1px #000";
		target.classList.add("pulse2");
		setTimeout(function(e){
			target.classList.remove("pulse2");
		}, 500, event.key - 1);

	    document.getElementById("main").removeEventListener('mouseup', mouseUp, false);
	    document.getElementById("main").removeEventListener('mousemove', mouseMove, false);
	    target.style.cursor = "";
	}

	document.getElementById("main").addEventListener("mousemove", mouseMove);
	document.getElementById("main").addEventListener("mouseup", mouseUp);
}

const toggleMenu = command => {
	document.getElementById("menu").style.display = command === "show" ? "block" : "none";
	menuVisible = !menuVisible;
};

const setPosition = ({ top, left }) => {
	document.getElementById("menu").style.left = `${left}px`;
	document.getElementById("menu").style.top = `${top}px`;

	console.log(document.getElementById("menu-option"))

	if (document.activeElement.id === "hotbar") {
		document.getElementById("menu-option").innerHTML = "Clear All Slots";
		document.getElementById("menu-option").onclick = function() {
			for (i=0;i<9;i++) {
			    document.getElementsByClassName("slot")[i].innerHTML = "";
			}
			toggleMenu("hide");
		};
		toggleMenu("show");
	}
	else if (document.activeElement.classList.contains("slot")) {
		var target = document.activeElement;
		document.getElementById("menu-option").innerHTML = "Clear Slot";
		document.getElementById("menu-option").onclick = function() {
		    target.innerHTML = "";
		    toggleMenu("hide");
		};
		toggleMenu("show");
	}
	else if (document.activeElement.id === "main") {
		var target = document.getElementById("main");
		document.getElementById("menu-option").innerHTML = "Clear Lab";
		document.getElementById("menu-option").onclick = function() {
		    target.innerHTML = "";
		    toggleMenu("hide");
		};
		toggleMenu("show");
	}
	else if (document.activeElement.classList.contains("element") && document.activeElement.parentElement.id === "main") {
		var target = document.activeElement;
		document.getElementById("menu-option").innerHTML = "Remove Atom";
		console.log(target)
		document.getElementById("menu-option").onclick = function() {
		    document.getElementById("main").removeChild(target);
		    toggleMenu("hide");
		};
		toggleMenu("show");
	}
};

document.addEventListener('click', e => {
	if (document.activeElement !== document.getElementById('menu'))
		toggleMenu("hide");
});

document.addEventListener("contextmenu", e => {
	e.preventDefault();
	if (document.activeElement !== document.getElementById('menu')) {
		if (document.activeElement.id === "hotbar") {
			document.getElementById("menu-option").innerHTML = "";
		}
		else if (document.activeElement.classList.contains("slot")) {
			document.getElementById("menu-option").innerHTML = "";
		}
		else if (document.activeElement.id === "main") {
			document.getElementById("menu-option").innerHTML = "";
		}
		else if (document.activeElement.classList.contains("element") && document.activeElement.parentElement.id === "main") {
			document.getElementById("menu-option").innerHTML = "";
		}
		else {
			toggleMenu("hide");
		}
		const origin = {
			left: e.pageX,
			top: e.pageY
		};
		setPosition(origin);
	}
});

tippy('.element', {
  content(reference) {
    const title = reference.firstElementChild.getAttribute('title');
    reference.removeAttribute('title');
    return title;
  }
});

tippy('#header > div', {
  content(reference) {
    const title = reference.getAttribute('title');
    reference.removeAttribute('title');
    return title;
  }
});