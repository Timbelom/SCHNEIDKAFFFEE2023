document.addEventListener('DOMContentLoaded', function() {
        

    
    var selectElement = document.getElementById('productVariationSelect');

    // Move the check inside the function to ensure it runs every time it's called
    function createBohnenButtonIfFrenchPressExists() {
        var hasFrenchPress = Array.from(selectElement.options).some(option => option.text === 'French Press');
        if (hasFrenchPress) {
            var buttonPlaceholder = document.getElementById('buttonPlaceholder');
            if (!document.getElementById('defaultVariationButton')) { // Prevent creating multiple buttons
                var bohnenButton = document.createElement('button');
                bohnenButton.id = 'defaultVariationButton';
                bohnenButton.className = 'btn-special';
                bohnenButton.textContent = 'Bohnen';
                bohnenButton.style.width = "10rem";
                bohnenButton.style.height = "3rem";
                bohnenButton.style.fontSize = "20px";
                bohnenButton.style.textAlign = "center";
                bohnenButton.style.fontWeight = "bold";
                bohnenButton.addEventListener('click', function(event) {
                     changeButtonColor(this, '#C2DCAE');
                    
                    selectBohnen();
                });


                buttonPlaceholder.appendChild(bohnenButton);
            }
        }
    }
   
    function changeButtonColor(button, bgColor) {
    button.style.backgroundColor = bgColor; // Set background color
    }

    // Function to select the 'Bohnen' option
    function selectBohnen() {
        for (var i = 0; i < selectElement.options.length; i++) {
            if (selectElement.options[i].text === 'Bohnen') {
                selectElement.selectedIndex = i;
                selectElement.dispatchEvent(new Event('change'));
                console.log("Bohnen option selected programmatically.");
                if (selectElement.options[0].value === "") {
                    selectElement.selectedIndex = 0; // Optional: reset to default view
                }
                break;
            }
        }
    }


    setTimeout(createBohnenButtonIfFrenchPressExists, 500);

 if (window.location.href.includes('Bohnen')) {
        waitForButtonAndChangeColor();
    }
  



});



function waitForButtonAndChangeColor() {
    const intervalId = setInterval(() => {
        var bohnenButton = document.getElementById('defaultVariationButton');
        if (bohnenButton) {
            bohnenButton.style.backgroundColor = '#C2DCAE'; // Set the background color
            clearInterval(intervalId); // Clear the interval once the button is found and styled
        }
    }, 100); // Check every 100 milliseconds
}




