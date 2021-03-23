var icon = document.querySelectorAll(".thumbnail");
var zoom = document.querySelectorAll(".tozoom");
var o = document.querySelectorAll(".blr");
var ic = ["mobile", "web", "package", "websites", "social", "events"];
for (var i = 0; i < icon.length; i++) {
	icon[i].addEventListener("click", (e) => {
		if (document.documentElement.clientWidth < 720) {
			document.querySelector(".logos").style.filter = "blur(8px)";
		}
		console.log(document.documentElement.clientwidth);
		for (var j = 0; j < o.length; j++) {
			o[j].style.display = "none";
		}
		document.querySelector("." + e.target.getAttribute("alt")).style.display =
			"block";
	});
}
var imgback = document.querySelectorAll(".imgback2");
for (var i = 0; i < imgback.length; i++) {
	imgback[i].addEventListener("click", () => {
		for (var j = 0; j < o.length; j++) {
			o[j].style.display = "none";
		}
		document.querySelector(".logos").style.filter = "none";
	});
}
function watching() {
	if (document.documentElement.clientWidth > 720) {
		document.querySelector(".logos").style.filter = "none";
	} else {
		for (var i = 0; i < ic.length; i++) {
			var j = document.querySelector("." + ic[i]);
			if (window.getComputedStyle(j, null).display == "block") {
				document.querySelector(".logos").style.filter = "blur(8px)";
			}
		}
	}
}
setInterval(watching, 500);
var zoom = document.querySelectorAll(".tozoom");
for (var i = 0; i < zoom.length; i++) {
	zoom[i].addEventListener("click", (e) => {
		document.querySelector(".zoomer").style.display = "block";
		for (var j = 0; j < o.length; j++) {
			o[j].style.filter = "blur(8px)";
		}
		document
			.querySelector("#imgzoom")
			.setAttribute("src", e.target.getAttribute("src"));
		document.querySelector("#imgp").innerText = e.target.getAttribute("data");
	});
}
var back = document.querySelector(".imgback");
back.addEventListener("click", () => {
	document.querySelector(".zoomer").style.display = "none";
	var o = document.querySelectorAll(".blr");
	for (var j = 0; j < o.length; j++) {
		o[j].style.filter = "none";
	}
});
