document.addEventListener('DOMContentLoaded', function() {
  // tabs
  var elems = document.querySelectorAll('.tabs');
  M.Tabs.init(elems);

  //dropdown
  $(document).ready(function(){
    $('.dropdown-trigger').dropdown();
  });

  //*css*/`
  var snav = document.querySelectorAll('.sidenav');
  var options = {
    edge: 'left',
    draggable: true,
    closeOnClick: true
  };
  var instances = M.Sidenav.init(snav, options);

  // Switch to Night Mode
  const toggleThemeBtn = document.getElementById('toggleTheme');
  toggleThemeBtn.addEventListener('click', function() {
      const body = document.body;
      body.classList.toggle('dark-mode');
      
      // Button Change
      const icon = toggleThemeBtn.querySelector('i');
      if (body.classList.contains('dark-mode')) {
          icon.textContent = 'light_mode'; 
      } else {
          icon.textContent = 'dark_mode'; 
      }
  });

  // Button becomes active
  const allButtons = document.querySelectorAll('.genre-filter, .author-filter, .rating-filter');
  allButtons.forEach(button => {
      button.addEventListener('click', function() {
        button.classList.toggle('active');
      });
  });


  // Complete/Incomplete/All Disable-able buttons
  const statusButtons = document.querySelectorAll('.status-filter');
  statusButtons.forEach(button => {
      button.addEventListener('click', function () {
          // If already active, reset
          if (button.classList.contains('active')) {
              statusButtons.forEach(btn => {
                  btn.classList.remove('active'); 
                  btn.disabled = false;          
              });
          } else {
              // Disable others, 
              // make an iterator, remove active status, un-disable first
              statusButtons.forEach(btn => {
                  btn.classList.remove('active'); // Remove active class from all
                  btn.disabled = false;          // Enable all buttons initially
              });
              // add active status to the clicked button
              button.classList.add('active');     

              // compare the selected active button with others, disable if not active
              const selectedValue = button.getAttribute('data-value');
              statusButtons.forEach(btn => {
                  if (btn.getAttribute('data-value') !== selectedValue) {
                      btn.disabled = true; // Disable other buttons
                  }
              });
          }
      });
  });
})