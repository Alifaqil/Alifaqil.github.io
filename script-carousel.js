var lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      if (document.body.clientWidth <= 748) {
        document.getElementById("nav").className =
          "navbar navbar-default navbar-fixed navbar-fixed-slim navbar-offset-xs";
      } else if (document.body.clientWidth <= 1000) {
        document.getElementById("nav").className =
          "navbar navbar-default navbar-fixed navbar-fixed-slim navbar-offset-sm";
      } else {
        document.getElementById("nav").className =
          "navbar navbar-default navbar-fixed navbar-fixed-slim navbar-offset-sd";
      }
      document.getElementById("sticky").style = "top: 21px";
    } else {
      if (document.body.clientWidth < 1000) {
        document.getElementById("sticky").style = "top: 60px";
      } else {
        document.getElementById("sticky").style = "top: 88px";
      }
      document.getElementById("nav").className =
        "navbar navbar-default navbar-fixed";
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);

const cd = document.querySelectorAll(".card-3");
window.addEventListener("resize", function (event) {
  if (
    this.document.body.clientWidth > 480 &&
    this.document.body.clientWidth < 748
  ) {
    cd.forEach((element) => {
      element.style = "border-top-color: rgb(166, 232, 222); height: auto;";
    });
  } else if (this.document.body.clientWidth < 1000) {
    cd.forEach((element) => {
      element.style =
        "border-top-color: rgb(166, 232, 222); height: 307.521px;";
    });
    document.getElementById("sticky").style = "top: 60px";
  } else {
    cd.forEach((element) => {
      element.style =
        "border-top-color: rgb(166, 232, 222); height: 307.521px;";
    });
    document.getElementById("sticky").style = "top: 88px";
  }
});

const tab = document.querySelectorAll(".carousel-tab");
const slt = document.querySelector(".slick-track");
tab.forEach((element) => {
  element.addEventListener("mouseover", (event) => {
    tab.forEach((item) => {
      if (item != element) {
        item.classList.remove("active");
      } else {
        element.classList.add("active");
        let att = element.attributes[1].value;
        slt.style =
          "opacity: 1; width: 6320px; transform: translate3d( " +
          -(att * 1264) +
          "px, 0px, 0px);";
      }
    });
  });
});

const sd = document.querySelector(".slick-dots");
console.log(sd)