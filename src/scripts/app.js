// import axios from "axios";
const para = document.getElementById("para")
await fetch("http://localhost:3000/api/")
  .then((res) => {
    return res.json();
  })
  .then((response) => {
    let user = response[0]
    para.insertAdjacentHTML("beforeend",`Hi ${user.firstname} ${user.lastname}, your age is: ${user.age}`)
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("Done"));
