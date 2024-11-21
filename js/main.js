window.onload = () => {
    const overlay = document.getElementById('animationOverlay');
    const mainContent = document.getElementById('mainContent');
  
    // Wait for the animation to complete (match with CSS animation timing)
    setTimeout(() => {
      overlay.style.display = 'none'; // Remove the overlay
      mainContent.classList.remove('hidden'); // Show the main content
    }, 3000); // 2 seconds fade-out + 1-second buffer
  };

  
  document.addEventListener("DOMContentLoaded", function () {
    const chatToggleButton = document.getElementById('chatToggleButton');
    const chatContainer = document.getElementById('chatContainer');
    const closeChat = document.getElementById('closeChat');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const chatMessages = document.getElementById('chatMessages');
  
    // Toggle Chat Window
    chatToggleButton.addEventListener('click', function () {
      chatContainer.classList.add('active');
      chatToggleButton.style.display = 'none';
    });
  
    // Close Chat Window
    closeChat.addEventListener('click', function () {
      chatContainer.classList.remove('active');
      chatToggleButton.style.display = 'block';
    });
  
    // Add Message to Chat
    function addMessage(message, type = 'global') {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', type);
      messageElement.innerText = message;
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
    }
  
    // Handle Send Button Click
    sendButton.addEventListener('click', function () {
      const message = messageInput.value.trim();
      if (message) {
        // Add the user's message
        addMessage(message, 'user');
        messageInput.value = '';
  
        // Simulate global response
        setTimeout(() => {
          addMessage('Global Response: ' + message, 'global');
        }, 1000);
      }
    });
  
    // Handle Enter Key Press
    messageInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        sendButton.click();
      }
    });
  });  

  

(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);

