// //Ex1
// document.getElementById("get-user").addEventListener("click", loadUser);

// function loadUser() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "user.json", true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       const user = JSON.parse(this.response);
//       console.log(user);
//     }
//   };
//   xhr.send();
// }

// //Ex2
// document.getElementById("get-user").addEventListener("click", loadUser);

// function loadUser() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "user.json", true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       const user = JSON.parse(this.response);

//       const output = `
//       <ul>
//         <li>
//           <span>ID:${user.id}</span>
//           <h4>${user.name}</h4>
//           <span>Age:${user.age}</span>
//         </li>
//       </ul>
//       `;

//       document.querySelector(".output").innerHTML = output;
//     }
//   };
//   xhr.send();
// }

// //Ex3
// document.getElementById("get-users").addEventListener("click", loadUsers);

// function loadUsers() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "users.json", true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       const users = JSON.parse(this.response);
//       console.log(users);
//      }
//   };
//   xhr.send();
// }

// //Ex3
// document.getElementById("get-users").addEventListener("click", loadUsers);

// function loadUsers() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "users.json", true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       const users = JSON.parse(this.response);
//       console.log(users);

//       let output = "";

//       users.forEach(user => {
//         output += `
//         <ul>
//           <li>
//             <span>ID:${user.id}</span>
//             <h4>${user.name}</h4>
//             <span>Age:${user.age}</span>
//           </li>
//         </ul>
//         `
//       });

//       document.querySelector(".output").innerHTML = output;
//      }
//   };
//   xhr.send();
// }

// //Ex4
// document.getElementById("get-users").addEventListener("click", loadUsers);

// function loadUsers() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "users.json", true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       const users = JSON.parse(this.response);
//       console.log(users);

//       let output = "";

//       users.forEach((user) => {
//         output += `
       
//           <li>
//             <span>ID:${user.id}</span>
//             <h4>${user.name}</h4>
//             <span>Age:${user.age}</span>
//           </li>
//         `;
//       });

//       document.querySelector(".output").innerHTML = output;
//     }
//   };
//   xhr.send();
// }


// //Ex5
// document.getElementById("get-users").addEventListener("click", loadUsers);

// function loadUsers() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "users.json", true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       const users = JSON.parse(this.response);
//       console.log(users);

//       let output = "";

//       users.forEach((user) => {
//         output += `
//          <li>
//             <h4>${user.name}</h4>
//           </li>
//         `;
//       });

//       document.querySelector(".output").innerHTML = output;
//     }
//   };
//   xhr.send();
// }


// //Ex6
// document.getElementById("get-users").addEventListener("click", loadUsers);

// function loadUsers() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "users.json", true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       const users = JSON.parse(this.response);
//       console.log(users);

//       let sum = 0;

//       users.forEach((user) => {
//         sum += user.age;

//       });
//       const average = sum / users.length;

//       console.log(sum);

//       document.querySelector(".output").innerHTML = average;
//     }
//   };
 
//   xhr.send();
// }


//Ex7
document.getElementById("get-news").addEventListener("click", loadNews);

function loadNews() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "news.txt", true);

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
      document.querySelector(".output").innerHTML = `
      <p>${this.responseText}</p>
      `;
    } else if (this.status === 404) {
      alert ("Cannot connect to DB!")
    }
  };
  
  xhr.send();
}