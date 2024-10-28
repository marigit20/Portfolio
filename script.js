function menu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// function darkMode() {
//     if(document.body.classList.contains('dark-mode')) {
//         document.body.classList.remove('dark-mode');
//         document.getElementsByClassName("titulo")[0].style.color = '#FFF';
//         document.getElementsByClassName("titulo")[1].style.color = '#FFF';
//         localStorage.setItem('theme', 'dark'); 
//     }
//     else {
//         document.body.classList.toggle('dark-mode');
//         document.getElementsByClassName("titulo")[0].style.color = '#000';
//         document.getElementsByClassName("titulo")[1].style.color = '#000';
//         localStorage.setItem('theme', 'light'); 
//     }
// }


const toggle = document.getElementById("toggle");
const refresh = document.getElementById("refresh");
const theme = window.localStorage.getItem("theme");

if (theme === "dark") document.body.classList.add("dark-mode");

// event listener para quando o botão de alterar o tema for clicado
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
    document.getElementsByClassName("titulo")[0].style.color = '#FFF';
    document.getElementsByClassName("titulo")[1].style.color = '#FFF';
  } else {
    window.localStorage.setItem("theme", "dark");
    document.getElementsByClassName("titulo")[0].style.color = '#000';
    document.getElementsByClassName("titulo")[1].style.color = '#000';
  }
});

refresh.addEventListener("click", () => {
  window.location.reload();
});

