let cw = document.body.clientWidth;
const tab = document.querySelectorAll(".carousel-tab");
const sld = document.querySelectorAll(".slide-container");
const slt = document.querySelector(".slick-track");
const sd = document.querySelectorAll(".slick");
const cd = document.querySelectorAll(".card-3");
const attr = document.getElementsByClassName("carousel-tab active");
sld.forEach((element)=>{
    element.style.width = ""+cw+"px" ;
    console.log(element.style.width)
})
slt.style =
                "opacity: 1; width: "+(5 * cw)+"px; transform: translate3d( " +
                -(attr[0].attributes[1].value * cw) +
                "px, 0px, 0px);";

var lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      if (document.body.clientWidth <= (60/100 * cw)) {
        document.getElementById("nav").className =
          "navbar navbar-default navbar-fixed navbar-fixed-slim navbar-offset-xs";
      } else if (document.body.clientWidth <= (90/100 * cw)) {
        document.getElementById("nav").className =
          "navbar navbar-default navbar-fixed navbar-fixed-slim navbar-offset-sm";
      } else {
        document.getElementById("nav").className =
          "navbar navbar-default navbar-fixed navbar-fixed-slim navbar-offset-sd";
      }
      document.getElementById("sticky").style = "top: 21px";
    } else {
      if (document.body.clientWidth < (90/100 * cw)) {
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

window.addEventListener("resize", function (event) {
    slt.style =
                "opacity: 1; width: "+(5 * cw)+"px; transform: translate3d( " +
                -(attr[0].attributes[1].value * cw) +
                "px, 0px, 0px);";
  if (
    this.document.body.clientWidth > (40/100 * cw) &&
    this.document.body.clientWidth < (60/100 * cw)
  ) {
    cd.forEach((element) => {
      element.style = "border-top-color: rgb(166, 232, 222); height: auto;";
    });
  } else if (this.document.body.clientWidth < (90/100 * cw)) {
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

function carousel(array, array2, e){
    array.forEach((element) => {
        element.addEventListener(e, (event) => {
          array.forEach((item) => {
            if (item != element) {
              item.classList.remove("active");
            } else {
              element.classList.add("active");
              let att = element.attributes[1].value;
              array2.forEach((el) => {
                if(el.attributes[1].value == att){
                    el.classList.add("active");
                }else{
                    el.classList.remove("active");
                }
            })
              slt.style =
                "opacity: 1; width: "+(5 * cw)+"px; transform: translate3d( " +
                -(att * cw) +
                "px, 0px, 0px);";
            }
          });
        });
      });
}

carousel(tab, sd, "mouseover");
carousel(sd, tab, "click");
