    
    window.onload = () => {
      const logo = document.getElementById('logo');
      const loginPage = document.getElementById('loginPage');

      
      setTimeout(() => {
        logo.classList.add('hidden');
      }, 500); 

      
      setTimeout(() => {
        document.querySelector('.container').style.display = 'none';
        loginPage.classList.add('active');
      }, 1500); 
    };
    