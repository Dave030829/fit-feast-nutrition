document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    toggleBtn.onclick = function(){
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        toggleBtnIcon.className = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
    }
});

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

const inputValue1 = input1.value;
const inputValue2 = input2.value;
const inputValue3 = input3.value;

function checkGender() {
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var result = document.getElementById("output");
    
    if (gender === "male") {
        var input1 = parseInt(document.getElementById("input1").value);
        var input2 = parseInt(document.getElementById("input2").value);
        var input3 = parseInt(document.getElementById("input3").value);

        var eredmenyMale = Math.round((13.75*input1)+(5*input2)-(2.76*input3)+66);
        var bulking = eredmenyMale+200;
        var cutting = eredmenyMale-200;
      
        var output = document.getElementById("output");
        output.innerHTML = "Maintanance calories: "+eredmenyMale+"<br>Bulking calories: "+bulking+"<br>Cutting calories: "+cutting;

    } else if (gender === "female") {
        var input1 = parseInt(document.getElementById("input1").value);
        var input2 = parseInt(document.getElementById("input2").value);
        var input3 = parseInt(document.getElementById("input3").value);
      
        var eredmenyFemale = Math.round((9.56*input1)+(1.85*input2)-(4.68*input3)+655);
        var bulkingFe = eredmenyFemale+200;
        var cuttingFe = eredmenyFemale-200;
        
        var output = document.getElementById("output");
        output.innerHTML = "Maintanance calories: "+eredmenyFemale+"<br>Bulking calories: "+bulkingFe+"<br>Cutting calories: "+cuttingFe;

    } 
  }