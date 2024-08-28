document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && rect.bottom >= 0
        );
    }

    // Function to add 'active' class to elements in view
    function checkSections() {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('active');
                console.log(section.id + " is in the viewport"); // Debugging log
            }
        });
    }

    // Run checkSections on scroll
    window.addEventListener('scroll', checkSections);

    // Run checkSections on page load
    checkSections();
});

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
  