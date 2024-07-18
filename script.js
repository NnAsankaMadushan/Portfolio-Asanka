document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.getElementById('navigation');
  
    menuToggle.addEventListener('click', () => {
      navigation.classList.toggle('show');
    });
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwkFv3YuclPrxDkVsrR3uUwpJ283xoOO4aahRJTYfHTcv3Z-C0OA-YB-9HbaovfsoBQ/exec'
            const form = document.forms['submit-to-google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message))
            })
  });
  