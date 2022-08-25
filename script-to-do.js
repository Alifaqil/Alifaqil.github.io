// localStorage.clear();
class toDo {
  constructor(dateTime, status, title, description, done) {
    this.dateTime = dateTime;
    this.status = status;
    this.title = title;
    this.description = description;
    this.done = done;
  }
}

const btn = document.querySelector("#add");
btn.addEventListener("click", (event) => {
  event.preventDefault();
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
    return false;
  } else if (tt == "") {
    alert("Please Fill the Title");
    return false;
  } else {
    const list = new toDo(dt, st, tt, desc, "Not Done");
    const jsonobj = JSON.stringify(list);
    localStorage.setItem(id, jsonobj);
    document.querySelector("#ftd").reset();
  }
});
