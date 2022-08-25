console.log(localStorage);
Object.keys(localStorage).forEach((key) => {
  const str = localStorage.getItem(key);
  let parsedobj = JSON.parse(str);
  let dates = new Date(parsedobj.dateTime);
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
            </div>
            <p>
                ${parsedobj.description} 
            </p>
            <button class="delete" data="${key}">
            Done
            </button>
        </div>
    `;
});

var current_tasks = document.querySelectorAll(".delete");
console.log(current_tasks.length);
for (var i = 0; i < current_tasks.length; i++) {
  current_tasks[i].onclick = function () {
    this.parentNode.remove();
    localStorage.removeItem(this.attributes[1].value);
  };
}
