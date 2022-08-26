// localStorage.clear();
function listPush(
  dates,
  title,
  status,
  statsdn,
  done,
  description,
  key,
  bDone,
  ndone
) {
  document.querySelector("#tasks").innerHTML += `
    <div class="task">
        <p>
            ${dates}
        </p>
        <div>
        <h6>
            ${title}
        </h6>
        <button class="status">
        ${status}
        </button>
        <button class="${statsdn}">
        ${done}
        </button>
        </div>
        <p>
            ${description} 
        </p>
        <button class="delete" data="${key}">
        Delete
        </button>
        <button class="${ndone}" data="${key}">
          ${bDone}
        </button>
    </div>
`;
}
function listmaker(stat = "", sdone = "") {
  Object.keys(localStorage).forEach((key) => {
    const str = localStorage.getItem(key);
    let parsedobj = JSON.parse(str);
    let dates = new Date(parsedobj.dateTime);
    let statsdn = "";
    let bDone = "";
    let ndone = "";
    if (parsedobj.done == "Done") {
      statsdn = "dones";
      bDone = "Not Done";
      ndone = "nndone";
    } else {
      statsdn = "ndones";
      bDone = "Done";
      ndone = "ndone";
    }
    if (stat == "" && sdone == "") {
      listPush(
        dates,
        parsedobj.title,
        parsedobj.status,
        statsdn,
        parsedobj.done,
        parsedobj.description,
        key,
        bDone,
        ndone
      );
    } else if (parsedobj.status == stat && sdone == "") {
      listPush(
        dates,
        parsedobj.title,
        parsedobj.status,
        statsdn,
        parsedobj.done,
        parsedobj.description,
        key,
        bDone,
        ndone
      );
    } else if (parsedobj.done == sdone && stat == "") {
      listPush(
        dates,
        parsedobj.title,
        parsedobj.status,
        statsdn,
        parsedobj.done,
        parsedobj.description,
        key,
        bDone,
        ndone
      );
    } else if (parsedobj.status == stat && parsedobj.done == sdone) {
      listPush(
        dates,
        parsedobj.title,
        parsedobj.status,
        statsdn,
        parsedobj.done,
        parsedobj.description,
        key,
        bDone,
        ndone
      );
    }
  });
  var dbtn = document.querySelectorAll(".ndone");
  var ndbtn = document.querySelectorAll(".nndone");
  dbtn.forEach((element) => {
    element.addEventListener("click", (event) => {
      const str = localStorage.getItem(element.attributes[1].value);
      let parsedobj = JSON.parse(str);
      parsedobj.done = "Done";
      const jsonobj = JSON.stringify(parsedobj);
      localStorage.setItem(element.attributes[1].value, jsonobj);
      console.log(parsedobj);
      document.location.reload(true);
    });
  });
  ndbtn.forEach((element) => {
    element.addEventListener("click", (event) => {
      const str = localStorage.getItem(element.attributes[1].value);
      let parsedobj = JSON.parse(str);
      parsedobj.done = "Not Done";
      const jsonobj = JSON.stringify(parsedobj);
      localStorage.setItem(element.attributes[1].value, jsonobj);
      console.log(parsedobj);
      document.location.reload(true);
    });
  });

  var current_tasks = document.querySelectorAll(".delete");
  current_tasks.forEach((element) => {
    element.addEventListener("click", (event) => {
      element.parentNode.remove();
      localStorage.removeItem(element.attributes[1].value);
    });
  });
}

listmaker();
const stat = document.querySelector("#sstatus");
const sdone = document.querySelector("#sdone");
stat.onchange = () => {
  document.querySelector("#tasks").innerHTML = "";
  console.log(stat, sdone);
  listmaker(stat.value, sdone.value);
};
sdone.onchange = () => {
  document.querySelector("#tasks").innerHTML = "";
  console.log(stat, sdone);
  listmaker(stat.value, sdone.value);
};
