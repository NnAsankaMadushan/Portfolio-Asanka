document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.getElementById('navigation');
  
    menuToggle.addEventListener('click', () => {
      navigation.classList.toggle('show');
    });

    const scriptURL = "https://script.google.com/macros/s/AKfycbxYi8QFjY-70HwP2LDVWhkEyWvBjXXo-ylqqme4tqwmkdCoOcZC4WGCX6dzFnOTeyDJ/exec";
            const form = document.forms['submit-to-google-sheet'];
            const msg = document.getElementById("msg");
          
            form.addEventListener('submit', e => {
              e.preventDefault();
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                  msg.innerHTML = "Message Sent Successfully!";
                  setTimeout(function(){
                    msg.innerHTML = "";
                  }, 5000);
                  form.reset();
                })
                .catch(error => console.error('Error!', error.message));
            });
  });
  