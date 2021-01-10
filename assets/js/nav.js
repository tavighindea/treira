const oferte = document.getElementById("oferte");
const solicitare = document.getElementById("solicitare");
const produse = document.getElementById("produse");
const ambalaje = document.getElementById("ambalaje");
const servicii = document.getElementById("servicii");
const dropdownOferte = document.getElementById("dropdown-1");
const dropdownSolicitare = document.getElementById("dropdown-2");
const dropdownTipo = document.getElementById("dropdown2-tipografie");
const dropdownAmbalaje = document.getElementById("dropdown2-ambalaje");
const dropdownServicii = document.getElementById("dropdown2-servicii");

const dropDownButtons = document.getElementsByClassName("btn-dropdown");
console.log(dropDownButtons);

function dropDown(event) {
    console.log(event.target.id)
    const clickedButtonId = event.target.id;
    dropDownButtons.forEach(btn => {
        if (btn.attr('id') === clickedButtonId && clickedButtonId === "oferte"){
            dropdownOferte.style.display = "block"
        }
        else if (btn.attr('id') === clickedButtonId && clickedButtonId === "solicitare") {
            dropdownSolicitare.style.display = "block"
        }
    })
}



















// const buttonList = [oferte, solicitare, produse, ambalaje, servicii]

// function checkDropdown() {
//     buttonList.forEach(showDropdown);

//     function showDropdown(elem) {
//         if (elem === oferte) {
//             dropdownOferte.style.display = "block";
//         }
//         else if (elem === solicitare){
//             dropdownSolicitare.style.display = "block";
//         }
//         else if (elem === produse){
//             dropdownOferte.style.display = "block";
//             dropdownTipo.style.display = "block";
//         }
//         else if (elem === ambalaje){
//             dropdownOferte.style.display = "block";
//             dropdownAmbalaje.style.display = "block";
//         }
//         else if (elem === servicii){
//             dropdownOferte.style.display = "block";
//             dropdownServicii.style.display = "block";
//         }
//     }

    
// }


// function dropDown(elem) {  
//     if (elem === "dropdown-oferte"){
//         console.log(dropdownOferte);
//         dropdownOferte.style.display = "block";
//     } 
//     else if (elem === "dropdown-solicitare"){
//         dropdownSolicitare.style.display = "block";
//     }
//     else if (elem === "dropdown-tipografie"){
//         dropdownOferte.style.display = "block";
//         dropdownTipo.style.display = "block"
//     }
//     else if (elem === "dropdown-ambalaje"){
//         dropdownOferte.style.display = "block";
//         dropdownAmbalaje.style.display = "block"
//     }
//     else if (elem === "dropdown-servicii"){
//         dropdownOferte.style.display = "block";
//         dropdownServicii.style.display = "block"
//     }
    
// }




// // function dropDown(a) {
// //     var li = a.parentElement,
// //         submenu = li.getElementsByTagName('ul')[0];
    
// //     submenu.style.display = submenu.style.display == "block" ? "none" : "block";
    
// //     return false;


// // }