// function toggleTheme(){  
//     const toggle = document.getElementById("themeToggle")


//     if(toggle.checked){
//         document.body.classList.remove("light-mode")
//         document.body.classList.add("dark-mode")
//     }
//     else{
//         document.body.classList.remove("dark-mode")
//         document.body.classList.add("light-mode")
//     }
// }


function toggleTheme(){
    let toggle = document.getElementById("themeToggle")

    if(toggle.checked){
        document.body.classList.remove("light-mode")
        document.body.classList.add("dark-mode")
    }
    else{
        document.body.classList.remove("dark-mode")
        document.body.classList.add("light-mode")
    }
  }
