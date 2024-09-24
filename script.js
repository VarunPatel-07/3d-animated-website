function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

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
  var data = `
    ./images/male0001.webp
    ./images/male0002.webp
    ./images/male0003.webp
    ./images/male0004.webp
    ./images/male0005.webp
    ./images/male0006.webp
    ./images/male0007.webp
    ./images/male0008.webp
    ./images/male0009.webp
    ./images/male0010.webp
    ./images/male0011.webp
    ./images/male0012.webp
    ./images/male0013.webp
    ./images/male0014.webp
    ./images/male0015.webp
    ./images/male0016.webp
    ./images/male0017.webp
    ./images/male0018.webp
    ./images/male0019.webp
    ./images/male0020.webp
    ./images/male0021.webp
    ./images/male0022.webp
    ./images/male0023.webp
    ./images/male0024.webp
    ./images/male0025.webp
    ./images/male0026.webp
    ./images/male0027.webp
    ./images/male0028.webp
    ./images/male0029.webp
    ./images/male0030.webp
    ./images/male0031.webp
    ./images/male0032.webp
    ./images/male0033.webp
    ./images/male0034.webp
    ./images/male0035.webp
    ./images/male0036.webp
    ./images/male0037.webp
    ./images/male0038.webp
    ./images/male0039.webp
    ./images/male0040.webp
    ./images/male0041.webp
    ./images/male0042.webp
    ./images/male0043.webp
    ./images/male0044.webp
    ./images/male0045.webp
    ./images/male0046.webp
    ./images/male0047.webp
    ./images/male0048.webp
    ./images/male0049.webp
    ./images/male0050.webp
    ./images/male0051.webp
    ./images/male0052.webp
    ./images/male0053.webp
    ./images/male0054.webp
    ./images/male0055.webp
    ./images/male0056.webp
    ./images/male0057.webp
    ./images/male0058.webp
    ./images/male0059.webp
    ./images/male0060.webp
    ./images/male0061.webp
    ./images/male0062.webp
    ./images/male0063.webp
    ./images/male0064.webp
    ./images/male0065.webp
    ./images/male0066.webp
    ./images/male0067.webp
    ./images/male0068.webp
    ./images/male0069.webp
    ./images/male0070.webp
    ./images/male0071.webp
    ./images/male0072.webp
    ./images/male0073.webp
    ./images/male0074.webp
    ./images/male0075.webp
    ./images/male0076.webp
    ./images/male0077.webp
    ./images/male0078.webp
    ./images/male0079.webp
    ./images/male0080.webp
    ./images/male0081.webp
    ./images/male0082.webp
    ./images/male0083.webp
    ./images/male0084.webp
    ./images/male0085.webp
    ./images/male0086.webp
    ./images/male0087.webp
    ./images/male0088.webp
    ./images/male0089.webp
    ./images/male0090.webp
    ./images/male0091.webp
    ./images/male0092.webp
    ./images/male0093.webp
    ./images/male0094.webp
    ./images/male0095.webp
    ./images/male0096.webp
    ./images/male0097.webp
    ./images/male0098.webp
    ./images/male0099.webp
    ./images/male0100.webp
    ./images/male0101.webp
    ./images/male0102.webp
    ./images/male0103.webp
    ./images/male0104.webp
    ./images/male0105.webp
    ./images/male0106.webp
    ./images/male0107.webp
    ./images/male0108.webp
    ./images/male0109.webp
    ./images/male0110.webp
    ./images/male0111.webp
    ./images/male0112.webp
    ./images/male0113.webp
    ./images/male0114.webp
    ./images/male0115.webp
    ./images/male0116.webp
    ./images/male0117.webp
    ./images/male0118.webp
    ./images/male0119.webp
    ./images/male0120.webp
    ./images/male0121.webp
    ./images/male0122.webp
    ./images/male0123.webp
    ./images/male0124.webp
    ./images/male0125.webp
    ./images/male0126.webp
    ./images/male0127.webp
    ./images/male0128.webp
    ./images/male0129.webp
    ./images/male0130.webp
    ./images/male0131.webp
    ./images/male0132.webp
    ./images/male0133.webp
    ./images/male0134.webp
    ./images/male0135.webp
    ./images/male0136.webp
    ./images/male0137.webp
    ./images/male0138.webp
    ./images/male0139.webp
    ./images/male0140.webp
    ./images/male0141.webp
    ./images/male0142.webp
    ./images/male0143.webp
    ./images/male0144.webp
    ./images/male0145.webp
    ./images/male0146.webp
    ./images/male0147.webp
    ./images/male0148.webp
    ./images/male0149.webp
    ./images/male0150.webp
    ./images/male0151.webp
    ./images/male0152.webp
    ./images/male0153.webp
    ./images/male0154.webp
    ./images/male0155.webp
    ./images/male0156.webp
    ./images/male0157.webp
    ./images/male0158.webp
    ./images/male0159.webp
    ./images/male0160.webp
    ./images/male0161.webp
    ./images/male0162.webp
    ./images/male0163.webp
    ./images/male0164.webp
    ./images/male0165.webp
    ./images/male0166.webp
    ./images/male0167.webp
    ./images/male0168.webp
    ./images/male0169.webp
    ./images/male0170.webp
    ./images/male0171.webp
    ./images/male0172.webp
    ./images/male0173.webp
    ./images/male0174.webp
    ./images/male0175.webp
    ./images/male0176.webp
    ./images/male0177.webp
    ./images/male0178.webp
    ./images/male0179.webp
    ./images/male0180.webp
    ./images/male0181.webp
    ./images/male0182.webp
    ./images/male0183.webp
    ./images/male0184.webp
    ./images/male0185.webp
    ./images/male0186.webp
    ./images/male0187.webp
    ./images/male0188.webp
    ./images/male0189.webp
    ./images/male0190.webp
    ./images/male0191.webp
    ./images/male0192.webp
    ./images/male0193.webp
    ./images/male0194.webp
    ./images/male0195.webp
    ./images/male0196.webp
    ./images/male0197.webp
    ./images/male0198.webp
    ./images/male0199.webp
    ./images/male0200.webp
    ./images/male0201.webp
    ./images/male0202.webp
    ./images/male0203.webp
    ./images/male0204.webp
    ./images/male0205.webp
    ./images/male0206.webp
    ./images/male0207.webp
    ./images/male0208.webp
    ./images/male0209.webp
    ./images/male0210.webp
    ./images/male0211.webp
    ./images/male0212.webp
    ./images/male0213.webp
    ./images/male0214.webp
    ./images/male0215.webp
    ./images/male0216.webp
    ./images/male0217.webp
    ./images/male0218.webp
    ./images/male0219.webp
    ./images/male0220.webp
    ./images/male0221.webp
    ./images/male0222.webp
    ./images/male0223.webp
    ./images/male0224.webp
    ./images/male0225.webp
    ./images/male0226.webp
    ./images/male0227.webp
    ./images/male0228.webp
    ./images/male0229.webp
    ./images/male0230.webp
    ./images/male0231.webp
    ./images/male0232.webp
    ./images/male0233.webp
    ./images/male0234.webp
    ./images/male0235.webp
    ./images/male0236.webp
    ./images/male0237.webp
    ./images/male0238.webp
    ./images/male0239.webp
    ./images/male0240.webp
    ./images/male0241.webp
    ./images/male0242.webp
    ./images/male0243.webp
    ./images/male0244.webp
    ./images/male0245.webp
    ./images/male0246.webp
    ./images/male0247.webp
    ./images/male0248.webp
    ./images/male0249.webp
    ./images/male0250.webp
    ./images/male0251.webp
    ./images/male0252.webp
    ./images/male0253.webp
    ./images/male0254.webp
    ./images/male0255.webp
    ./images/male0256.webp
    ./images/male0257.webp
    ./images/male0258.webp
    ./images/male0259.webp
    ./images/male0260.webp
    ./images/male0261.webp
    ./images/male0262.webp
    ./images/male0263.webp
    ./images/male0264.webp
    ./images/male0265.webp
    ./images/male0266.webp
    ./images/male0267.webp
    ./images/male0268.webp
    ./images/male0269.webp
    ./images/male0270.webp
    ./images/male0271.webp
    ./images/male0272.webp
    ./images/male0273.webp
    ./images/male0274.webp
    ./images/male0275.webp
    ./images/male0276.webp
    ./images/male0277.webp
    ./images/male0278.webp
    ./images/male0279.webp
    ./images/male0280.webp
    ./images/male0281.webp
    ./images/male0282.webp
    ./images/male0283.webp
    ./images/male0284.webp
    ./images/male0285.webp
    ./images/male0286.webp
    ./images/male0287.webp
    ./images/male0288.webp
    ./images/male0289.webp
    ./images/male0290.webp
    ./images/male0291.webp
    ./images/male0292.webp
    ./images/male0293.webp
    ./images/male0294.webp
    ./images/male0295.webp
    ./images/male0296.webp
    ./images/male0297.webp
    ./images/male0298.webp
    ./images/male0299.webp
    ./images/male0300.webp
`;

  return data.split("\n")[index];
}
const framCount = 300;
const images = [];
const imageSeq = {
  frame: 1,
};
for (let i = 0; i < framCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}
gsap.to(imageSeq, {
  frame: framCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
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
  ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});
gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    // markes: true,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    //   markes: true,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    //   markes: true,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page4", {
  scrollTrigger: {
    trigger: `#page4`,
    start: `top top`,
    end: `bottom top`,
    //   markes: true,
    pin: true,
    scroller: `#main`,
  },
});
