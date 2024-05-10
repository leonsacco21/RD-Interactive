//Character counter micro interaction
document.addEventListener("DOMContentLoaded", function() {
  const counter = function() {
      const input = document.getElementById('message');
      const display = document.getElementById('counter-display');
    
      const changeEvent = function(evt) {
        display.innerHTML = evt.target.value.length;
      };
    
      const countEvent = function() {
        if (input) {
          input.addEventListener('keyup', changeEvent);
        }
      };
    
      const init = function() {
        countEvent();
      };
    
      return {
        init: init
      };
    };
    
    const counterInstance = counter();
    counterInstance.init();
});

//Password Field micro interaction
document.addEventListener("DOMContentLoaded", function() {

    // hide/show password
    document.querySelectorAll(".icon-wrapper").forEach(function(iconWrapper) {
        iconWrapper.addEventListener("click", function() {
            var eyeSvg = iconWrapper.querySelector('.eye-svg');
            var input = document.querySelector(document.querySelector(".toggle-password").getAttribute("toggle"));
            if (input.getAttribute("type") === "password") {
                input.setAttribute("type", "text");
                eyeSvg.src = 'src/eye-off.svg';
            } else {
                input.setAttribute("type", "password");
                eyeSvg.src = 'src/eye.svg';
            }
        });
    });

    // strength validation on keyup-event
    document.getElementById("password-field").addEventListener("keyup", function() {
        var val = this.value,
            color = testPasswordStrength(val);

        styleStrengthLine(color, val);
    });

    // check password strength
    function testPasswordStrength(value) {
        var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[=/\()%ยง!@#$%^&*])(?=.{8,})/,
            mediumRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

        if (strongRegex.test(value)) {
            return "green";
        } else if (mediumRegex.test(value)) {
            return "orange";
        } else {
            return "red";
        }
    }

    // Code for Strength micro interactions
    function styleStrengthLine(color, value) {
        document.querySelectorAll(".line").forEach(function(line) {
            line.classList.remove("bg-red", "bg-orange", "bg-green");
            line.classList.add("bg-transparent");
        });

        if (value) {
            if (color === "red") {
                document.querySelector(".line:nth-child(1)").classList.remove("bg-transparent");
                document.querySelector(".line:nth-child(1)").classList.add("bg-red");
            } else if (color === "orange") {
                document.querySelectorAll(".line:not(:last-of-type)").forEach(function(line) {
                    line.classList.remove("bg-transparent");
                    line.classList.add("bg-orange");
                });
            } else if (color === "green") {
                document.querySelectorAll(".line").forEach(function(line) {
                    line.classList.remove("bg-transparent");
                    line.classList.add("bg-green");
                });
            }
        }
    }
});

// Page Transition
function transitionToPage(pageUrl) {
    // Fade out effect
    document.body.classList.add('fade-out');

    // Wait for the fade out animation to complete
    setTimeout(() => {
        // Navigate to the new page
        window.location.href = pageUrl;
    }, 200); // Adjust the delay to match the duration of the fade out animation
}

// Event listener for Next Step button clicks
document.addEventListener('DOMContentLoaded', () => {
    const nextStepButton = document.querySelector('.next-button');
    if (nextStepButton) {
        nextStepButton.addEventListener('click', () => {
            // Determine the target page URL based on the current page
            const currentPageUrl = window.location.pathname;
            console.log("Current Page URL:", currentPageUrl); // Check the current URL
            let targetPageUrl = '';
            if (currentPageUrl.includes('index.html')) {
                targetPageUrl = 'message.html';
            } else if (currentPageUrl.includes('message.html')) {
                targetPageUrl = 'rateUs.html';
            } else {
                console.log("Current page not recognized:", currentPageUrl);
            }
            console.log("Target Page URL:", targetPageUrl); // Check the target URL
            
            // Perform the page transition with fade effect
            transitionToPage(targetPageUrl);
        });
    }

    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', () => {
            // Determine the target page URL based on the current page
            const currentPageUrl = window.location.pathname;
            console.log("Current Page URL:", currentPageUrl); // Check the current URL
            let targetPageUrl = '';
            if (currentPageUrl.includes('message.html')) {
                targetPageUrl = 'index.html';
            } else if (currentPageUrl.includes('rateUs.html')) {
                targetPageUrl = 'message.html';
            } else {
                console.log("Current page not recognized:", currentPageUrl);
            }
            console.log("Target Page URL:", targetPageUrl); // Check the target URL
            
            // Perform the page transition with fade effect
            transitionToPage(targetPageUrl);
        });
    }
});
