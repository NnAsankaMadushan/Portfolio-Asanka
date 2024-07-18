document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.getElementById('navigation');
  
    menuToggle.addEventListener('click', () => {
      navigation.classList.toggle('show');
    });
  });
  