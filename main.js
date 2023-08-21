const menuList = document.getElementById("menu-list");
const menuButton = document.querySelector(".menu__button");
menuButton.addEventListener("click", () => {
	menuList.classList.toggle("menu__list--hidden");
});

const txt = document.querySelectorAll(".txt");
async function txtGet() {
	for (const element of txt) {
		await fetch(`txt/${element.dataset.txt}.txt`).then(res => {
			if (res.ok) {
				return res.text();
			}

			return element.innerHTML;
		}).then(text => {
			element.innerHTML = `<p>${text}</p>`;
		});
	}
}
txtGet();

const videosNames = [
	"PLXH9985.MP4",
	"DFHG3438.MP4",
	"GDZO8536.MP4",
	"PZQR6173.MP4",
	"QGMV2384.MP4",
	"TSUM7526.MP4",
	"VLMB4912.MP4",
	"WFEK5798.MP4",
];

let videoCurrent = 0;

const videos = document.querySelector(".videos");

const videosList = videos.querySelector(".videos__list");
const videosListChildren = videosList.children;

const videosCurrent = videos.querySelector(".videos__current");
const videosLength = videos.querySelector(".videos__length");

videosNames.forEach((videoName, i) => {
	let video = document.createElement("video");
	video.controls = true;
	if (i == videoCurrent) {
		videosCurrent.textContent = videoCurrent + 1;
		videosLength.textContent = videosNames.length;

		video.preload = "metadata";
		video.classList.add("videos__video");
	} else {
		video.preload = "none";
		video.classList.add("videos__video", "videos__video--hidden");
	}

	let source = document.createElement("source");
	source.src = `assets/videos/${videoName}`;
	source.type = "video/mp4";

	video.appendChild(source);
	videosList.appendChild(video);
});

function videosToggleHidden(videoPrevIndex, videoCurrentIndex) {
	videosCurrent.textContent = videoCurrentIndex + 1;

	const videoPrev = videosListChildren[videoPrevIndex];
	videoPrev.pause();
	videoPrev.classList.add("videos__video--hidden");

	const videoCurrent = videosListChildren[videoCurrentIndex];
	if (videoCurrent.preload === "none") {
		videoCurrent.preload = "metadata";
	}
	videoCurrent.classList.remove("videos__video--hidden");
}

const videosButtonPrev = videos.querySelector(".videos__button--prev");
videosButtonPrev.addEventListener("click", () => {
	const videoPrev = videoCurrent;
	if (videoCurrent - 1 < 0) {
		videoCurrent = videosListChildren.length - 1;
	} else {
		videoCurrent--;
	}
	videosToggleHidden(videoPrev, videoCurrent);
});
const videosButtonNext = videos.querySelector(".videos__button--next");
videosButtonNext.addEventListener("click", () => {
	const videoPrev = videoCurrent;
	if (videoCurrent + 1 > videosListChildren.length - 1) {
		videoCurrent = 0;
	} else {
		videoCurrent++;
	}
	videosToggleHidden(videoPrev, videoCurrent);
});

const imagesUkraine = [
	"ATHO1574.webp",
	"AXAA8323.webp",
	"BNSE1907.webp",
	"CELL5072.webp",
	"CFZL2601.webp",
	"CJCC1897.webp",
	"CRJO0247.webp",
	"CRYU3675.webp",
	"CVFN6223.webp",
	"CYVS7635.webp",
	"DGLD7944.webp",
	"DGYO7609.webp",
	"DHIA1890.webp",
	"EHNX4424.webp",
	"EREG9028.webp",
	"ERUK5922.webp",
	"EZSI9916.webp",
	"FSRW3660.webp",
	"GTZN7823.webp",
	"GUPA6471.webp",
	"GVFS0877.webp",
	"HHNW4770.webp",
	"HRGV1793.webp",
	"HRWR4433.webp",
	"HSCL3717.webp",
	"IEXA5195.webp",
	"IMG_0571.webp",
	"IMG_0581.webp",
	"IMG_0602.webp",
	"IMG_0618.webp",
	"IMG_0619.webp",
	"IMG_0672.webp",
	"IMG_0673.webp",
	"IMG_0919.webp",
	"IMG_0920.webp",
	"IMG_0921.webp",
	"IMG_0922.webp",
	"IMG_0923.webp",
	"IMG_3383.webp",
	"IMG_3384.webp",
	"IMG_3385.webp",
	"IMG_3386.webp",
	"IMG_3387.webp",
	"IMG_3388.webp",
	"JVWR4024.webp",
	"JWYU1951.webp",
	"KCEZ4498.webp",
	"KWMF5114.webp",
	"LQAR3016.webp",
	"LWJE4436.webp",
	"MLBX2858.webp",
	"MMRJ5081.webp",
	"MTLE7178.webp",
	"MUPP5660.webp",
	"MXYF7232.webp",
	"NERU6444.webp",
	"NSQI3048.webp",
	"NTXE0443.webp",
	"OAZC4662.webp",
	"ODLT6787.webp",
	"OEQU8428.webp",
	"OFLR3725.webp",
	"OHZN8451.webp",
	"OIXY6815.webp",
	"OJFA5518.webp",
	"PQVM2564.webp",
	"QKOX5279.webp",
	"QQCS4636.webp",
	"QWLQ2591.webp",
	"RBIL0196.webp",
	"RLSM6896.webp",
	"RMGR9964.webp",
	"RRAL7426.webp",
	"RTNO8155.webp",
	"SBXR2056.webp",
	"SCGR4913.webp",
	"SDTX6579.webp",
	"TDRO6874.webp",
	"TKNQ5379.webp",
	"TPAM5297.webp",
	"TUPL7446.webp",
	"TVTX6716.webp",
	"VCDV7631.webp",
	"VIUA8172.webp",
	"WDRJ9962.webp",
	"WGEC4520.webp",
	"WMRV3082.webp",
	"WPGS4019.webp",
	"XDQZ9975.webp",
	"XGEB1164.webp",
	"XQRI0447.webp",
	"YETE1157.webp",
	"YJHT7830.webp",
	"YKMN2229.webp",
	"BIVL0133.webp",
	"BNAV8993.webp",
	"IMG_0578.webp",
	"IMG_0583.webp",
	"IMG_0587.webp",
	"IMG_0591.webp",
	"IMG_0621.webp",
	"IMG_0622.webp",
	"IMG_0674.webp",
	"IMG_0874.webp",
	"IMG_3304.webp",
];

const imagesDistribution = [
	"AJQW5527.webp",
	"BWCT7473.webp",
	"BZZV0741.webp",
	"CGHL6754.webp",
	"CHHY5272.webp",
	"DBPR2345.webp",
	"DOBR4669.webp",
	"DSWC1276.webp",
	"DUEA3175.webp",
	"FCTN3034.webp",
	"FDMN8699.webp",
	"FEFB6925.webp",
	"FKOC4393.webp",
	"FUBD4944.webp",
	"GDPS7928.webp",
	"GFKA6780.webp",
	"GHQS2529.webp",
	"GPMW7890.webp",
	"HKPY8747.webp",
	"IMG_0627.webp",
	"IMG_0749.webp",
	"IMG_0751.webp",
	"IQVE9715.webp",
	"JEFY0968.webp",
	"JEYJ6773.webp",
	"KLEX0482.webp",
	"LCBV4862.webp",
	"LCJI2546.webp",
	"LNZD6504.webp",
	"LZGG3369.webp",
	"MADO0299.webp",
	"MEEV7464.webp",
	"MMXK3994.webp",
	"NCRG9869.webp",
	"NQCX9579.webp",
	"NWFW3470.webp",
	"ONOD9988.webp",
	"OPOL9830.webp",
	"ORCQ6403.webp",
	"OSWV6691.webp",
	"OYZH2749.webp",
	"PIBR8549.webp",
	"PXGJ1375.webp",
	"PZAI4883.webp",
	"QAEJ4306.webp",
	"QJHI1423.webp",
	"QLXQ6777.webp",
	"QTQY9270.webp",
	"QUNI2234.webp",
	"RHMQ2295.webp",
	"RIZP6537.webp",
	"SBFA4351.webp",
	"TIFG1134.webp",
	"TNSY0613.webp",
	"TSAR9373.webp",
	"VCKZ8824.webp",
	"VGXW1051.webp",
	"VRDP4842.webp",
	"VZGD3765.webp",
	"WCGN6566.webp",
	"XHXY3553.webp",
	"XWGT9408.webp",
	"YHIS6774.webp",
	"YJWN9305.webp",
];

const imagesAnimal = [
	"PMKJ7935.webp",
	"TCHC5562.webp",
];

class GalleryItem {
	constructor(nav, grid) {
		this.nav = nav;
		this.grid = grid;
	}
}

const galleryNav = document.getElementById("gallery-nav");
const galleryGrid = document.getElementById("gallery-grid");
const galleryItems = [];

function galleryImageCreate(image) {
	const img = document.createElement("img");
	img.src = `assets/gallery/${image}`;
	img.alt = "";
	img.loading = "lazy";
	img.classList.add("gallery__img");

	const a = document.createElement("a");
	a.href = img.src;
	a.appendChild(img);

	return a;
}

function galleryNavCreate(text) {
	const a = document.createElement("a");
	a.classList.add("gallery__link");
	a.href = "#gallery";
	a.textContent = text;

	return a;
}

function galleryGridCreate(name, images, isLoad = false) {
	const div = document.createElement("div");
	div.classList.add("gallery__grid");
	galleryGrid.appendChild(div);

	function createImages(start, end) {
		let isAll = false;
		if (end > images.length) {
			end = images.length;
			isAll = true;
		}

		for (let i = start; i < end; i++) {
			let image = images[i];
			div.appendChild(galleryImageCreate(image));

			/* await fetch(`assets/gallery/${image}`).then(res => {
				if (res.ok) {
					div.appendChild(galleryImageCreate(image));
				}
			}); */
		}

		return isAll;
	}

	function createLoad(start, end) {
		const button = document.createElement("button");

		button.classList.add("gallery__load");
		button.textContent = "Ladda...";

		button.addEventListener("click", () => {
			createImages(start, end);
			button.remove();
		}, { once: true });

		div.appendChild(button);

		return button;
	}

	function createImagesAndLoad() {
		const isAll = createImages(0, 20);
		if (!isAll) {
			createLoad(20, images.length);
		}
	}

	const nav = galleryNavCreate(name);
	galleryNav.appendChild(nav);
	nav.addEventListener("click", () => {
		for (const item of galleryItems) {
			item.nav.classList.remove("gallery__link--active");
			item.grid.classList.add("gallery__grid--hidden");
		}
		nav.classList.add("gallery__link--active");
		div.classList.remove("gallery__grid--hidden");
	});

	if (isLoad) {
		createImagesAndLoad();
	} else {
		nav.addEventListener("click", () => {
			createImagesAndLoad();
		}, { once: true });
	}

	const galleryItem = new GalleryItem(nav, div);
	galleryItems.push(galleryItem);

	return galleryItem;
}

galleryGridCreate("OperationChange Utdelning", imagesDistribution, true);
galleryGridCreate("Ukraina", imagesUkraine);
galleryGridCreate("Djur", imagesAnimal);

galleryItems.forEach((item, i) => {
	if (i == 0) {
		item.nav.classList.add("gallery__link--active");
	} else {
		item.grid.classList.add("gallery__grid--hidden");
	}
});
