// localStorage.clear();
class toDo {
  constructor(dateTime, status, title, description) {
    this.dateTime = dateTime;
    this.status = status;
    this.title = title;
    this.description = description;
  }
}

const btn = document.querySelector("#add");
btn.addEventListener("click", (event) => {
  const dt = document.querySelector("#time").value;
  const st = document.querySelector("#status").value;
  const tt = document.querySelector("#title").value;
  const desc = document.querySelector("#desc").value;

  let id = Math.floor(Math.random() * 100);
  Object.keys(localStorage).forEach((key) => {
    if (id == key) {
      id = Math.floor(Math.random() * 100);
    }
  });
  if (dt == "") {
    alert("Please Fill the Date and Time");
  } else if (tt == "") {
    alert("Please Fill the Title");
  } else {
    const list = new toDo(dt, st, tt, desc);
    const jsonobj = JSON.stringify(list);
    localStorage.setItem(id, jsonobj);
  }
});
