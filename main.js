//you have add all pages in #main

function loco() {
	gsap.registerPlugin(ScrollTrigger);
	const locoScroll = new LocomotiveScroll({
		el: document.querySelector("#main"),
		smooth: true,
	});
	locoScroll.on("scroll", ScrollTrigger.update);
	ScrollTrigger.scrollerProxy("#main", {
		scrollTop(value) {
			return arguments.length
				? locoScroll.scrollTo(value, 0, 0)
				: locoScroll.scroll.instance.scroll.y;
		},
		getBoundingClientRect() {
			return {
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight,
			};
		},
		pinType: document.querySelector("#main").style.transform
			? "transform"
			: "fixed",
	});
	ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
	ScrollTrigger.refresh();
}
loco();
function canvas() {
	const canvas = document.querySelector("canvas");
	const context = canvas.getContext("2d");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	window.addEventListener("resize", function () {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		render();
	});
	function files(index) {
		var data = ` ezgif-frame-001.webp
        ezgif-frame-002.webp
        ezgif-frame-003.webp
        ezgif-frame-004.webp
        ezgif-frame-005.webp
        ezgif-frame-006.webp
        ezgif-frame-007.webp
        ezgif-frame-008.webp
        ezgif-frame-009.webp
        ezgif-frame-010.webp
        ezgif-frame-011.webp
        ezgif-frame-012.webp
        ezgif-frame-013.webp
        ezgif-frame-014.webp
        ezgif-frame-015.webp
        ezgif-frame-016.webp
        ezgif-frame-017.webp
        ezgif-frame-018.webp
        ezgif-frame-019.webp
        ezgif-frame-020.webp
        ezgif-frame-021.webp
        ezgif-frame-022.webp
        ezgif-frame-023.webp
        ezgif-frame-024.webp
        ezgif-frame-025.webp
        ezgif-frame-026.webp
        ezgif-frame-027.webp
        ezgif-frame-028.webp
        ezgif-frame-029.webp
        ezgif-frame-030.webp
        ezgif-frame-031.webp
        ezgif-frame-032.webp
        ezgif-frame-033.webp
        ezgif-frame-034.webp
        ezgif-frame-035.webp
        ezgif-frame-036.webp
        ezgif-frame-037.webp
        ezgif-frame-038.webp
        ezgif-frame-039.webp
        ezgif-frame-040.webp
        ezgif-frame-041.webp
        ezgif-frame-042.webp
        ezgif-frame-043.webp
        ezgif-frame-044.webp
        ezgif-frame-045.webp
        ezgif-frame-046.webp
        ezgif-frame-047.webp
        ezgif-frame-048.webp
        ezgif-frame-049.webp
        ezgif-frame-050.webp
        ezgif-frame-051.webp
        ezgif-frame-052.webp
        ezgif-frame-053.webp
        ezgif-frame-054.webp
        ezgif-frame-055.webp
        ezgif-frame-056.webp
        ezgif-frame-057.webp
        ezgif-frame-058.webp
        ezgif-frame-059.webp
        ezgif-frame-060.webp
        ezgif-frame-061.webp
        ezgif-frame-062.webp
        ezgif-frame-063.webp
        ezgif-frame-064.webp
        ezgif-frame-065.webp
        ezgif-frame-066.webp
        ezgif-frame-067.webp
        ezgif-frame-068.webp
        ezgif-frame-069.webp
        ezgif-frame-070.webp
        ezgif-frame-071.webp
        ezgif-frame-072.webp
        ezgif-frame-073.webp
        ezgif-frame-074.webp
        ezgif-frame-075.webp
        ezgif-frame-076.webp
        ezgif-frame-077.webp
        ezgif-frame-078.webp
        ezgif-frame-079.webp
        ezgif-frame-080.webp
        ezgif-frame-081.webp
        ezgif-frame-082.webp
        ezgif-frame-083.webp
        ezgif-frame-084.webp
        ezgif-frame-085.webp
        ezgif-frame-086.webp
        ezgif-frame-087.webp
        ezgif-frame-088.webp
        ezgif-frame-089.webp
        ezgif-frame-090.webp
        ezgif-frame-091.webp
        ezgif-frame-092.webp
        ezgif-frame-093.webp
        ezgif-frame-094.webp
        ezgif-frame-095.webp
        ezgif-frame-096.webp
        ezgif-frame-097.webp
        ezgif-frame-098.webp
        ezgif-frame-099.webp
        ezgif-frame-100.webp
        ezgif-frame-101.webp
        ezgif-frame-102.webp
        ezgif-frame-103.webp
        ezgif-frame-104.webp
        ezgif-frame-105.webp
        ezgif-frame-106.webp
        ezgif-frame-107.webp
        ezgif-frame-108.webp
        ezgif-frame-109.webp
        ezgif-frame-110.webp
        ezgif-frame-111.webp
        ezgif-frame-112.webp
        ezgif-frame-113.webp
        ezgif-frame-114.webp
        ezgif-frame-115.webp
        ezgif-frame-116.webp
        ezgif-frame-117.webp
        ezgif-frame-118.webp
        ezgif-frame-119.webp
        ezgif-frame-120.webp
        ezgif-frame-121.webp
        ezgif-frame-122.webp
        ezgif-frame-123.webp
        ezgif-frame-124.webp
        ezgif-frame-125.webp
        ezgif-frame-126.webp
        ezgif-frame-127.webp
        ezgif-frame-128.webp
        ezgif-frame-129.webp
        ezgif-frame-130.webp
        ezgif-frame-131.webp
        ezgif-frame-132.webp
        ezgif-frame-133.webp
        ezgif-frame-134.webp
        ezgif-frame-135.webp
        ezgif-frame-136.webp
        ezgif-frame-137.webp
        ezgif-frame-138.webp
        ezgif-frame-139.webp
        ezgif-frame-140.webp
        ezgif-frame-141.webp
        ezgif-frame-142.webp
        ezgif-frame-143.webp
        ezgif-frame-144.webp
      `;
		return data.split("\n")[index];
	}
	const frameCount = 144;
	const images = [];
	const imageSeq = {
		frame: 1,
	};
	for (let i = 0; i < frameCount; i++) {
		const img = new Image();
		img.src = files(i);
		images.push(img);
	}
	gsap.to(imageSeq, {
		frame: frameCount - 1,
		snap: "frame",
		ease: `none`,
		scrollTrigger: {
			scrub: 0.15,
			trigger: `#page>canvas`,
			//   set start end according to preference
			start: `top top`,
			end: `580% top`,
			scroller: `#main`,
		},
		onUpdate: render,
	});
	images[1].onload = render;
	function render() {
		scaleImage(images[imageSeq.frame], context);
	}
	function scaleImage(img, ctx) {
		var canvas = ctx.canvas;
		var hRatio = canvas.width / img.width;
		var vRatio = canvas.height / img.height;
		var ratio = Math.max(hRatio, vRatio);
		var centerShift_x = (canvas.width - img.width * ratio) / 2;
		var centerShift_y = (canvas.height - img.height * ratio) / 2;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(
			img,
			0,
			0,
			img.width,
			img.height,
			centerShift_x,
			centerShift_y,
			img.width * ratio,
			img.height * ratio
		);
	}
	ScrollTrigger.create({
		trigger: "#page>canvas",
		pin: true,
		scroller: `#main`,
		start: `top top`,
		end: `580% top`,
	});
}
canvas();
gsap.to("#page1", {
	scrollTrigger: {
		trigger: `#page1`,
		start: `top top`,
		end: `bottom top`,
		// markers: true,
		pin: true,
		scroller: `#main`,
	},
});
gsap.to("#page2", {
	scrollTrigger: {
		trigger: `#page2`,
		start: `top top`,
		end: `bottom top`,
		// markers: true,
		pin: true,
		scroller: `#main`,
	},
});
gsap.to("#page3", {
	scrollTrigger: {
		trigger: `#page3`,
		start: `top top`,
		end: `bottom top`,
		// markers: true,
		pin: true,
		scroller: `#main`,
	},
});
const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav__link");

hamburger.addEventListener("click", () => {
	navLink.classList.toggle("hide");
});
// scroll
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});
const hiddenELe = document.querySelectorAll(".hidden");
hiddenELe.forEach((el) => observer.observe(el));
const checkbtn = document.querySelector(".btnBuy");
checkbtn.addEventListener("click", () => {
	alert("ok");
	console.log("hello");
});
