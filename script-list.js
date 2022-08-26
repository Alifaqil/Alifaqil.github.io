// localStorage.clear();
function listmaker(stat = "", sdone = "") {
  Object.keys(localStorage).forEach((key) => {
    const str = localStorage.getItem(key);
    let parsedobj = JSON.parse(str);
    if (stat == "" && sdone == "") {
      let dates = new Date(parsedobj.dateTime);
      let statsdn = "";
      if (parsedobj.done == "Done") {
        statsdn = "dones";
      } else {
        statsdn = "ndones";
      }
      document.querySelector("#tasks").innerHTML += `
          <div class="task">
              <p>
                  ${dates}
              </p>
              <div>
              <h6>
                  ${parsedobj.title}
              </h6>
              <button class="status">
              ${parsedobj.status}
              </button>
              <button class="${statsdn}">
              ${parsedobj.done}
              </button>
              </div>
              <p>
                  ${parsedobj.description} 
              </p>
              <button class="delete" data="${key}">
              Delete
              </button>
              <button class="ndone" data="${key}">
              Done
              </button>
          </div>
      `;
    } else if (parsedobj.status == stat && sdone == "") {
      let dates = new Date(parsedobj.dateTime);
      let statsdn = "";
      if (parsedobj.done == "Done") {
        statsdn = "dones";
      } else {
        statsdn = "ndones";
      }
      document.querySelector("#tasks").innerHTML += `
          <div class="task">
              <p>
                  ${dates}
              </p>
              <div>
              <h6>
                  ${parsedobj.title}
              </h6>
              <button class="status">
              ${parsedobj.status}
              </button>
              <button class="${statsdn}">
              ${parsedobj.done}
              </button>
              </div>
              <p>
                  ${parsedobj.description} 
              </p>
              <button class="delete" data="${key}">
              Delete
              </button>
              <button class="ndone" data="${key}">
              Done
              </button>
          </div>
      `;
    } else if (parsedobj.done == sdone && stat == "") {
      let dates = new Date(parsedobj.dateTime);
      let statsdn = "";
      if (parsedobj.done == "Done") {
        statsdn = "dones";
      } else {
        statsdn = "ndones";
      }
      document.querySelector("#tasks").innerHTML += `
                  <div class="task">
                      <p>
                          ${dates}
                      </p>
                      <div>
                      <h6>
                          ${parsedobj.title}
                      </h6>
                      <button class="status">
                      ${parsedobj.status}
                      </button>
                      <button class="${statsdn}">
                      ${parsedobj.done}
                      </button>
                      </div>
                      <p>
                          ${parsedobj.description} 
                      </p>
                      <button class="delete" data="${key}">
                      Delete
                      </button>
                      <button class="ndone" data="${key}">
                      Done
                      </button>
                  </div>
              `;
    } else if (parsedobj.status == stat && parsedobj.done == sdone) {
      let dates = new Date(parsedobj.dateTime);
      let statsdn = "";
      if (parsedobj.done == "Done") {
        statsdn = "dones";
      } else {
        statsdn = "ndones";
      }
      document.querySelector("#tasks").innerHTML += `
                  <div class="task">
                      <p>
                          ${dates}
                      </p>
                      <div>
                      <h6>
                          ${parsedobj.title}
                      </h6>
                      <button class="status">
                      ${parsedobj.status}
                      </button>
                      <button class="${statsdn}">
                      ${parsedobj.done}
                      </button>
                      </div>
                      <p>
                          ${parsedobj.description} 
                      </p>
                      <button class="delete" data="${key}">
                      Delete
                      </button>
                      <button class="ndone" data="${key}">
                      Done
                      </button>
                  </div>
              `;
    }
  });
}

Object.keys(localStorage).forEach((key) => {
  const str = localStorage.getItem(key);
  let parsedobj = JSON.parse(str);
  let dates = new Date(parsedobj.dateTime);
  let statsdn = "";
  if (parsedobj.done == "Done") {
    statsdn = "dones";
  } else {
    statsdn = "ndones";
  }
  document.querySelector("#tasks").innerHTML += `
          <div class="task">
              <p>
                  ${dates}
              </p>
              <div>
              <h6>
                  ${parsedobj.title}
              </h6>
              <button class="status">
              ${parsedobj.status}
              </button>
              <button class="${statsdn}">
              ${parsedobj.done}
              </button>
              </div>
              <p>
                  ${parsedobj.description} 
              </p>
              <button class="delete" data="${key}">
              Delete
              </button>
              <button class="ndone" data="${key}">
              Done
              </button>
          </div>
      `;
});

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

var dbtn = document.querySelectorAll(".ndone");
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

var current_tasks = document.querySelectorAll(".delete");
current_tasks.forEach((element) => {
  element.addEventListener("click", (event) => {
    element.parentNode.remove();
    localStorage.removeItem(element.attributes[1].value);
  });
});
