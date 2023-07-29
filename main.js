//you have add all pages in #main

function loco() {
	gsap.registerPlugin(ScrollTrigger);

	// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

	const locoScroll = new LocomotiveScroll({
		el: document.querySelector("#main"),
		smooth: true,
	});
	// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
	locoScroll.on("scroll", ScrollTrigger.update);

	// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
	ScrollTrigger.scrollerProxy("#main", {
		scrollTop(value) {
			return arguments.length
				? locoScroll.scrollTo(value, 0, 0)
				: locoScroll.scroll.instance.scroll.y;
		}, // we don't have to define a scrollLeft because we're only scrolling vertically.
		getBoundingClientRect() {
			return {
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight,
			};
		},
		// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
		pinType: document.querySelector("#main").style.transform
			? "transform"
			: "fixed",
	});

	// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
	ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

	// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
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
		var data = ` ezgif-frame-001.png
        ezgif-frame-002.png
        ezgif-frame-003.png
        ezgif-frame-004.png
        ezgif-frame-005.png
        ezgif-frame-006.png
        ezgif-frame-007.png
        ezgif-frame-008.png
        ezgif-frame-009.png
        ezgif-frame-010.png
        ezgif-frame-011.png
        ezgif-frame-012.png
        ezgif-frame-013.png
        ezgif-frame-014.png
        ezgif-frame-015.png
        ezgif-frame-016.png
        ezgif-frame-017.png
        ezgif-frame-018.png
        ezgif-frame-019.png
        ezgif-frame-020.png
        ezgif-frame-021.png
        ezgif-frame-022.png
        ezgif-frame-023.png
        ezgif-frame-024.png
        ezgif-frame-025.png
        ezgif-frame-026.png
        ezgif-frame-027.png
        ezgif-frame-028.png
        ezgif-frame-029.png
        ezgif-frame-030.png
        ezgif-frame-031.png
        ezgif-frame-032.png
        ezgif-frame-033.png
        ezgif-frame-034.png
        ezgif-frame-035.png
        ezgif-frame-036.png
        ezgif-frame-037.png
        ezgif-frame-038.png
        ezgif-frame-039.png
        ezgif-frame-040.png
        ezgif-frame-041.png
        ezgif-frame-042.png
        ezgif-frame-043.png
        ezgif-frame-044.png
        ezgif-frame-045.png
        ezgif-frame-046.png
        ezgif-frame-047.png
        ezgif-frame-048.png
        ezgif-frame-049.png
        ezgif-frame-050.png
        ezgif-frame-051.png
        ezgif-frame-052.png
        ezgif-frame-053.png
        ezgif-frame-054.png
        ezgif-frame-055.png
        ezgif-frame-056.png
        ezgif-frame-057.png
        ezgif-frame-058.png
        ezgif-frame-059.png
        ezgif-frame-060.png
        ezgif-frame-061.png
        ezgif-frame-062.png
        ezgif-frame-063.png
        ezgif-frame-064.png
        ezgif-frame-065.png
        ezgif-frame-066.png
        ezgif-frame-067.png
        ezgif-frame-068.png
        ezgif-frame-069.png
        ezgif-frame-070.png
        ezgif-frame-071.png
        ezgif-frame-072.png
        ezgif-frame-073.png
        ezgif-frame-074.png
        ezgif-frame-075.png
        ezgif-frame-076.png
        ezgif-frame-077.png
        ezgif-frame-078.png
        ezgif-frame-079.png
        ezgif-frame-080.png
        ezgif-frame-081.png
        ezgif-frame-082.png
        ezgif-frame-083.png
        ezgif-frame-084.png
        ezgif-frame-085.png
        ezgif-frame-086.png
        ezgif-frame-087.png
        ezgif-frame-088.png
        ezgif-frame-089.png
        ezgif-frame-090.png
        ezgif-frame-091.png
        ezgif-frame-092.png
        ezgif-frame-093.png
        ezgif-frame-094.png
        ezgif-frame-095.png
        ezgif-frame-096.png
        ezgif-frame-097.png
        ezgif-frame-098.png
        ezgif-frame-099.png
        ezgif-frame-100.png
        ezgif-frame-101.png
        ezgif-frame-102.png
        ezgif-frame-103.png
        ezgif-frame-104.png
        ezgif-frame-105.png
        ezgif-frame-106.png
        ezgif-frame-107.png
        ezgif-frame-108.png
        ezgif-frame-109.png
        ezgif-frame-110.png
        ezgif-frame-111.png
        ezgif-frame-112.png
        ezgif-frame-113.png
        ezgif-frame-114.png
        ezgif-frame-115.png
        ezgif-frame-116.png
        ezgif-frame-117.png
        ezgif-frame-118.png
        ezgif-frame-119.png
        ezgif-frame-120.png
        ezgif-frame-121.png
        ezgif-frame-122.png
        ezgif-frame-123.png
        ezgif-frame-124.png
        ezgif-frame-125.png
        ezgif-frame-126.png
        ezgif-frame-127.png
        ezgif-frame-128.png
        ezgif-frame-129.png
        ezgif-frame-130.png
        ezgif-frame-131.png
        ezgif-frame-132.png
        ezgif-frame-133.png
        ezgif-frame-134.png
        ezgif-frame-135.png
        ezgif-frame-136.png
        ezgif-frame-137.png
        ezgif-frame-138.png
        ezgif-frame-139.png
        ezgif-frame-140.png
        ezgif-frame-141.png
        ezgif-frame-142.png
        ezgif-frame-143.png
        ezgif-frame-144.png
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
		//markers:true,
		scroller: `#main`,
		//   set start end according to preference
		start: `top top`,
		end: `580% top`,
	});
}
canvas();
//multiple page change page number
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
