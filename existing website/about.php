<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insure Tech - Premium Header</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            background-color: #f8fbf9;
            color: #1a2f3a;
            padding: 0;
            margin: 0;
            font-family: 'Montserrat', sans-serif;
        }
        
        .header {
            background-color: #ffffff;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            transition: all 0.4s ease;
            border-bottom: 1px solid rgba(120, 200, 80, 0.1);
        }
        
        .header.scrolled {
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
            padding: 5px 0;
        }
        
        .main-header {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.4s ease;
        }
        
        .header.scrolled .main-header {
            padding: 10px 30px;
        }
        
        .logo-container {
            display: flex;
            align-items: center;
            gap: 12px;
            position: relative;
            flex-shrink: 0;
        }
        
        .logo {
            height: 50px;
            width: auto;
            transition: all 0.3s ease;
        }
        
        .logo:hover {
            transform: scale(1.05);
        }
        
        .logo-text {
            font-size: 32px;
            font-weight: 800;
            color: #1a2f3a;
            position: relative;
            white-space: nowrap;
            font-family: 'Playfair Display', serif;
            background: linear-gradient(135deg, #78c850 0%, #4caf50 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .logo-text::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 0;
            height: 4px;
            background: linear-gradient(90deg, #78c850, #ff9800, #2196f3);
            transition: width 0.4s ease;
            border-radius: 2px;
        }
        
        .logo-container:hover .logo-text::after {
            width: 100%;
        }
        
        .logo-icon {
            color: #ff9800;
            font-size: 28px;
        }
        
        .nav-menu {
            display: flex;
            list-style: none;
            gap: 8px;
        }
        
        .nav-menu li {
            position: relative;
        }
        
        .nav-menu a {
            text-decoration: none;
            color: #1a2f3a;
            font-weight: 600;
            font-size: 16px;
            transition: all 0.3s;
            display: block;
            padding: 12px 18px;
            border-radius: 8px;
            position: relative;
            overflow: hidden;
            font-family: 'Montserrat', sans-serif;
        }
        
        .nav-menu a::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(120, 200, 80, 0.08), transparent);
            transition: left 0.5s;
        }
        
        .nav-menu a:hover::before {
            left: 100%;
        }
        
        .nav-menu a:hover {
            color: #4caf50;
            background-color: rgba(120, 200, 80, 0.05);
            transform: translateY(-2px);
        }
        
        .nav-menu a.active {
            color: #ffffff;
            font-weight: 700;
            background: linear-gradient(135deg, #78c850 0%, #4caf50 100%);
            box-shadow: 0 4px 12px rgba(120, 200, 80, 0.3);
        }
        
        .nav-menu a.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 18px;
            right: 18px;
            height: 3px;
            background-color: #ff9800;
            border-radius: 2px;
        }
        
        /* Active state for dropdown parent */
        .dropdown.active > a {
            color: #4caf50;
            font-weight: 700;
        }
        
        .dropdown {
            position: relative;
        }
        
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #ffffff;
            min-width: 240px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.12);
            z-index: 100;
            border-radius: 12px;
            padding: 12px 0;
            top: 100%;
            left: 0;
            opacity: 0;
            transform: translateY(15px);
            transition: all 0.4s ease;
            border: 1px solid rgba(120, 200, 80, 0.1);
        }
        
        .dropdown-content a {
            display: block;
            padding: 12px 24px;
            color: #1a2f3a;
            text-decoration: none;
            font-size: 15px;
            transition: all 0.3s;
            position: relative;
            font-weight: 500;
        }
        
        .dropdown-content a::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 4px;
            background: linear-gradient(to bottom, #78c850, #2196f3);
            transform: scaleY(0);
            transition: transform 0.3s;
            border-radius: 0 2px 2px 0;
        }
        
        .dropdown-content a:hover {
            background-color: rgba(120, 200, 80, 0.05);
            color: #4caf50;
            padding-left: 30px;
        }
        
        .dropdown-content a:hover::before {
            transform: scaleY(1);
        }
        
        .dropdown-content a.active {
            color: #ffffff;
            font-weight: 600;
            background: linear-gradient(135deg, #78c850 0%, #4caf50 100%);
            padding-left: 30px;
        }
        
        .dropdown-content a.active::before {
            transform: scaleY(1);
            background: #ff9800;
        }
        
        .dropdown:hover .dropdown-content {
            display: block;
            opacity: 1;
            transform: translateY(0);
        }
        
        .dropdown > a::after {
            content: ' ▾';
            font-size: 12px;
            color: #777;
            transition: transform 0.3s;
        }
        
        .dropdown:hover > a::after {
            transform: rotate(180deg);
            color: #ff9800;
        }
        
        .login-section {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        /* Mobile Styles - Enhanced for all widths */
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #4caf50;
            padding: 10px;
            border-radius: 6px;
            transition: all 0.3s;
            flex-shrink: 0;
            background: rgba(120, 200, 80, 0.1);
        }
        
        .mobile-menu-btn:hover {
            background-color: rgba(120, 200, 80, 0.2);
        }
        
        .mobile-search-btn {
            display: none;
            background: none;
            border: none;
            font-size: 18px;
            cursor: pointer;
            color: #4caf50;
            padding: 10px;
            border-radius: 6px;
            transition: all 0.3s;
            flex-shrink: 0;
            background: rgba(120, 200, 80, 0.1);
        }
        
        .mobile-search-btn:hover {
            background-color: rgba(120, 200, 80, 0.2);
        }
        
        .mobile-search-box {
            display: none;
            padding: 20px 30px;
            background: linear-gradient(to right, #f1f8e9, #e8f5e9);
            border-top: 1px solid rgba(120, 200, 80, 0.2);
            animation: slideDown 0.4s ease;
        }
        
        .mobile-search-box input {
            width: 100%;
            padding: 14px 18px;
            border: 1px solid #c8e6c9;
            border-radius: 8px;
            font-size: 16px;
            transition: all 0.3s;
            background: white;
            font-family: 'Montserrat', sans-serif;
        }
        
        .mobile-search-box input:focus {
            outline: none;
            border-color: #78c850;
            box-shadow: 0 0 0 3px rgba(120, 200, 80, 0.2);
        }
        
        /* Animations */
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-15px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Enhanced Media Queries for Mobile */
        @media (max-width: 1100px) {
            .nav-menu {
                display: none;
            }
            
            .mobile-menu-btn, .mobile-search-btn {
                display: block;
            }
            
            .logo-text {
                font-size: 28px;
            }
            
            .main-header {
                padding: 15px 20px;
            }
        }
        
        @media (max-width: 768px) {
            .logo-text {
                font-size: 24px;
            }
            
            .logo {
                height: 40px;
            }
            
            .main-header {
                padding: 12px 15px;
            }
        }
        
        @media (max-width: 576px) {
            .main-header {
                padding: 10px 12px;
            }
            
            .logo-text {
                font-size: 22px;
            }
            
            .logo {
                height: 36px;
            }
            
            .mobile-menu-btn, .mobile-search-btn {
                padding: 8px;
                font-size: 20px;
            }
        }
        
        @media (max-width: 480px) {
            .logo-text {
                font-size: 20px;
            }
            
            .logo {
                height: 34px;
            }
            
            .mobile-menu-btn, .mobile-search-btn {
                padding: 7px;
                font-size: 18px;
            }
            
            .main-header {
                padding: 8px 10px;
            }
        }
        
        @media (max-width: 400px) {
            .logo-text {
                font-size: 18px;
            }
            
            .logo {
                height: 32px;
            }
            
            .mobile-menu-btn, .mobile-search-btn {
                padding: 6px;
                font-size: 16px;
            }
            
            .main-header {
                padding: 6px 8px;
            }
        }
        
        @media (max-width: 360px) {
            .logo-text {
                font-size: 16px;
            }
            
            .logo {
                height: 30px;
            }
        }
        
        @media (max-width: 320px) {
            .logo-text {
                font-size: 0;
                width: 0;
                overflow: hidden;
            }
            
            .logo-container {
                gap: 6px;
            }
            
            .logo {
                height: 28px;
            }
        }
        
        /* Mobile Menu Styles - Enhanced */
        .mobile-nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: linear-gradient(to bottom, #ffffff, #f8fbf9);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            z-index: 1000;
            animation: slideDown 0.4s ease;
            max-height: 80vh;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            border-top: 1px solid rgba(120, 200, 80, 0.1);
        }
        
        .mobile-nav.active {
            display: block;
        }
        
        .mobile-nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .mobile-nav li {
            border-bottom: 1px solid #e8f5e9;
        }
        
        .mobile-nav a {
            display: block;
            padding: 18px 24px;
            text-decoration: none;
            color: #1a2f3a;
            font-weight: 600;
            transition: all 0.3s;
            font-size: 16px;
            font-family: 'Montserrat', sans-serif;
        }
        
        .mobile-nav a:hover {
            background-color: rgba(120, 200, 80, 0.08);
            color: #4caf50;
        }
        
        .mobile-nav a.active {
            color: #ffffff;
            font-weight: 700;
            background: linear-gradient(135deg, #78c850 0%, #4caf50 100%);
        }
        
        .mobile-dropdown-content {
            display: none;
            background: linear-gradient(to bottom, #f1f8e9, #e8f5e9);
            animation: slideDown 0.4s ease;
        }
        
        .mobile-dropdown-content.active {
            display: block;
        }
        
        .mobile-dropdown-content a {
            padding-left: 44px;
            font-size: 15px;
            padding-top: 16px;
            padding-bottom: 16px;
        }
        
        .mobile-dropdown-content a.active {
            color: #ffffff;
            font-weight: 700;
            background: linear-gradient(135deg, #78c850 0%, #4caf50 100%);
        }
        
        .mobile-dropdown-toggle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
        }
        
        .mobile-dropdown-toggle i {
            transition: transform 0.3s;
            font-size: 14px;
        }
        
        .mobile-dropdown-toggle.active i {
            transform: rotate(180deg);
            color: #ff9800;
        }
        
        /* Scroll indicator */
        .scroll-indicator {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(90deg, #78c850, #ff9800, #2196f3);
            width: 0%;
            transition: width 0.3s;
            border-radius: 0 2px 2px 0;
        }
        
        /* Premium banner section */
        .premium-banner {
            background: linear-gradient(135deg, #78c850 0%, #4caf50 100%);
            color: white;
            padding: 12px 0;
            text-align: center;
            font-size: 15px;
            font-weight: 500;
            position: relative;
            overflow: hidden;
        }
        
        .banner-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 30px;
            position: relative;
            z-index: 2;
        }
        
        .banner-highlight {
            color: #ffeb3b;
            font-weight: 700;
        }
        
        .banner-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.1;
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        
        /* Prevent horizontal scroll on mobile */
        html, body {
            max-width: 100%;
            overflow-x: hidden;
        }
        
        /* NEW: Dynamic header height calculation */
        .header-height-fix {
            height: 100px; /* Default desktop height */
        }
        
        @media (max-width: 1100px) {
            .header-height-fix {
                height: 80px; /* Adjusted for mobile */
            }
        }
        
        @media (max-width: 768px) {
            .header-height-fix {
                height: 70px; /* Further adjusted for smaller screens */
            }
        }
        
        @media (max-width: 576px) {
            .header-height-fix {
                height: 65px; /* Adjusted for mobile */
            }
        }
        
        @media (max-width: 480px) {
            .header-height-fix {
                height: 60px; /* Further adjusted for smaller screens */
            }
        }
        
        @media (max-width: 400px) {
            .header-height-fix {
                height: 55px; /* Adjusted for very small screens */
            }
        }
        
        /* Page content styling */
        .page-content {
            padding: 30px;
            min-height: 100vh;
            background: linear-gradient(to bottom, #f8fbf9, #e8f5e9);
        }
    </style>
</head>
<body>
    <!-- This div creates the exact space needed for the header -->
    <div class="header-height-fix"></div>
    
    <header class="header">
        <div class="scroll-indicator"></div>
        <div class="main-header">
            <div class="logo-container">
    <a href="index.php" style="display: flex; align-items: center; gap: 12px; text-decoration: none;">
        <img src="assets/Insure Tech.png" alt="Insure Tech Logo" class="logo">
    </a>
</div>
            <nav>
                <ul class="nav-menu">
                    <li><a href="index.php" class="">Home</a></li>
                    <li><a href="about.php" class="active">About Us</a></li>
                    
                    <li class="dropdown ">
                        <a href="#">Services</a>
                        <div class="dropdown-content">
                            <a href="services.php" class="">Solutions & Services</a>
                            <a href="insurance.php" class="">What Is Insurance</a>
                            
                        </div>
                    </li>
                    <li><a href="why-insuretech.php" class="">Why Insure Tech</a></li>
                    <li><a href="testimonials.php" class="">Testimonials</a></li>
                    <li><a href="contact.php" class="">Contact</a></li>
                </ul>
            </nav>
            <div class="login-section">
                <button class="mobile-search-btn">
                    <i class="fas fa-search"></i>
                </button>
                <button class="mobile-menu-btn">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
        
        <div class="mobile-search-box">
            <input type="text" placeholder="Search for insurance services...">
        </div>
        
        <div class="mobile-nav">
            <ul>
                <li><a href="index.php" class="">Home</a></li>
                 <li><a href="about.php" class="active">About us</a></li>
            
                <li>
                    <a href="#" class="mobile-dropdown-toggle ">
                        Services <i class="fas fa-chevron-down"></i>
                    </a>
                    <div class="mobile-dropdown-content ">
                        <a href="services.php" class="">Solutions & Services</a>
                        <a href="insurance.php" class="">What Is Insurance</a>
                       
                    </div>
                </li>
                <li><a href="why-insuretech.php" class="">Why Insure Tech</a></li>
                <li><a href="testimonials.php" class="">Testimonials</a></li>
                <li><a href="contact.php" class="">Contact</a></li>
            </ul>
        </div>
    </header>

   

    <script>
        // Mobile menu functionality
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileNav = document.querySelector('.mobile-nav');
        const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
        const mobileSearchBtn = document.querySelector('.mobile-search-btn');
        const mobileSearchBox = document.querySelector('.mobile-search-box');
        const header = document.querySelector('.header');
        const scrollIndicator = document.querySelector('.scroll-indicator');
        const mainHeader = document.querySelector('.main-header');
        
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            mobileSearchBox.classList.remove('active');
        });
        
        // Toggle mobile dropdowns
        mobileDropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const dropdownContent = toggle.nextElementSibling;
                
                // Close other dropdowns
                document.querySelectorAll('.mobile-dropdown-content').forEach(content => {
                    if (content !== dropdownContent) {
                        content.classList.remove('active');
                        content.previousElementSibling.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                dropdownContent.classList.toggle('active');
                toggle.classList.toggle('active');
            });
        });
        
        // Toggle mobile search
        mobileSearchBtn.addEventListener('click', () => {
            mobileSearchBox.classList.toggle('active');
            mobileNav.classList.remove('active');
            
            // Focus on search input when opened
            if (mobileSearchBox.classList.contains('active')) {
                setTimeout(() => {
                    mobileSearchBox.querySelector('input').focus();
                }, 300);
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.mobile-nav') && !e.target.closest('.mobile-menu-btn') && 
                !e.target.closest('.mobile-search-btn') && !e.target.closest('.mobile-search-box')) {
                mobileNav.classList.remove('active');
                mobileSearchBox.classList.remove('active');
            }
        });
        
        // Scroll effect for header
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Update scroll indicator
            const winHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset;
            const trackLength = docHeight - winHeight;
            const scrollPercentage = Math.floor((scrollTop / trackLength) * 100);
            
            scrollIndicator.style.width = scrollPercentage + '%';
        });
        
        // Auto-open mobile dropdown if it contains active item
        document.addEventListener('DOMContentLoaded', () => {
            const activeMobileItems = document.querySelectorAll('.mobile-nav a.active');
            activeMobileItems.forEach(item => {
                const parentDropdown = item.closest('.mobile-dropdown-content');
                if (parentDropdown) {
                    parentDropdown.classList.add('active');
                    parentDropdown.previousElementSibling.classList.add('active');
                }
            });
            
            // Dynamically calculate header height for the spacer
            const headerHeight = header.offsetHeight;
            document.querySelector('.header-height-fix').style.height = headerHeight + 'px';
        });
        
        // Prevent mobile menu from closing when clicking inside
        mobileNav.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        // Update header height on window resize
        window.addEventListener('resize', () => {
            const headerHeight = header.offsetHeight;
            document.querySelector('.header-height-fix').style.height = headerHeight + 'px';
        });
    </script>
</body>
</html>
<style>
    :root {
        --primary-blue: #21415b;
        --secondary-green: #6ec252;
        --secondary-orange: #f67f00;
        --light-bg: #f8fafc;
        --text-dark: #21415b;
        --text-medium: #4a5568;
        --text-light: #718096;
    }
    /* Reset and Base Styles */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    body {
        background-color: var(--light-bg);
        color: var(--text-medium);
        line-height: 1.6;
    }
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }
    
    .btn {
        display: inline-block;
        background-color: var(--secondary-orange);
        color: white;
        padding: 14px 32px;
        border-radius: 5px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
        font-size: 1.1rem;
    }
    
    .btn:hover {
        background-color: #e57200;
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    
    /* Base animations */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    /* Apply animations to elements */
    .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
    }
    
    .animate-fade-in-left {
        animation: fadeInLeft 0.8s ease-out forwards;
        opacity: 0;
    }
    
    .animate-fade-in-right {
        animation: fadeInRight 0.8s ease-out forwards;
        opacity: 0;
    }
    
    /* Hero Section - Matching Services page font sizes */
    .about-hero {
        background: linear-gradient(135deg, var(--primary-blue) 0%, #2c5282 100%);
        color: white;
        padding: 100px 0 80px;
        text-align: center;
        position: relative;
        overflow: hidden;
    }
    
    .about-hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,100 Z" fill="rgba(255,255,255,0.05)"/></svg>');
        background-size: cover;
    }
    
    .about-hero-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        position: relative;
        z-index: 1;
    }
    
    .about-hero h1 {
        font-size: 3rem; /* Same as Services page hero */
        margin-bottom: 20px;
        font-weight: 700;
        text-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }
    
    .about-hero p {
        font-size: 1.3rem; /* Same as Services page hero */
        max-width: 800px;
        margin: 0 auto 30px;
        opacity: 0.9;
        line-height: 1.6;
    }
    
    /* Who We Are Section - Matching font sizes */
    .who-we-are {
        padding: 100px 0;
        background-color: white;
    }
    
    .who-we-are-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: center;
    }
    
    .who-we-are-content h2 {
        font-size: 2.8rem; /* Same as Services page section titles */
        color: var(--text-dark);
        margin-bottom: 25px;
        font-weight: 600; /* Same weight as Services page */
        position: relative;
    }
    
    .who-we-are-content h2::after {
        content: '';
        position: absolute;
        bottom: -15px; /* Same as Services page */
        left: 0;
        width: 80px; /* Same as Services page */
        height: 4px; /* Same as Services page */
        background-color: var(--secondary-green);
        border-radius: 2px;
    }
    
    .who-we-are-content p {
        font-size: 1.2rem; /* Same as Services page content */
        color: var(--text-medium);
        margin-bottom: 25px;
        line-height: 1.7;
    }
    
    .highlight-box {
        background-color: var(--light-bg);
        border-left: 4px solid var(--secondary-green);
        padding: 25px;
        border-radius: 0 8px 8px 0;
        margin-top: 30px;
    }
    
    .highlight-box p {
        font-size: 1.1rem; /* Matching Services page */
        color: var(--text-dark);
        font-weight: 500;
        margin: 0;
    }
    
    .who-we-are-image {
        background-color: var(--light-bg);
        border-radius: 15px;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        overflow: hidden;
        position: relative;
    }
    
    .who-we-are-image::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(33, 65, 91, 0.1) 0%, transparent 100%);
    }
    
    .image-placeholder {
        text-align: center;
        color: var(--text-medium);
        z-index: 1;
    }
    
    .image-placeholder i {
        font-size: 4rem;
        color: var(--primary-blue);
        margin-bottom: 15px;
    }
    
    /* Values Section - Matching Services page card styles */
    .values-section {
        padding: 100px 0;
        background-color: var(--light-bg);
    }
    
    .values-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }
    
    .section-title {
        text-align: center;
        font-size: 2.8rem; /* Same as Services page */
        color: var(--text-dark);
        margin-bottom: 60px; /* Same as Services page */
        font-weight: 600; /* Same as Services page */
        position: relative;
    }
    
    .section-title::after {
        content: '';
        position: absolute;
        bottom: -15px; /* Same as Services page */
        left: 50%;
        transform: translateX(-50%);
        width: 80px; /* Same as Services page */
        height: 4px; /* Same as Services page */
        background-color: var(--secondary-green);
        border-radius: 2px;
    }
    
    .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Same as Services page */
        gap: 30px; /* Same as Services page */
    }
    
    .value-card {
        background-color: white;
        border-radius: 15px; /* Same as Services page */
        padding: 40px 30px; /* Same as Services page */
        text-align: center;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05); /* Same as Services page */
        transition: all 0.4s ease;
        position: relative;
        overflow: hidden;
    }
    
    .value-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5px; /* Same as Services page */
        background: linear-gradient(to right, var(--secondary-green), var(--secondary-orange));
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.4s ease;
    }
    
    .value-card:hover {
        transform: translateY(-10px); /* Same as Services page */
        box-shadow: 0 15px 35px rgba(0,0,0,0.1); /* Same as Services page */
    }
    
    .value-card:hover::before {
        transform: scaleX(1);
    }
    
    .value-icon {
        font-size: 3.5rem; /* Same as Services page */
        color: var(--primary-blue);
        margin-bottom: 25px; /* Same as Services page */
        transition: all 0.4s ease;
    }
    
    .value-card:hover .value-icon {
        transform: scale(1.1); /* Same as Services page */
        color: var(--secondary-green);
    }
    
    .value-title {
        font-size: 1.6rem; /* Same as Services page */
        color: var(--text-dark);
        margin-bottom: 20px; /* Same as Services page */
        font-weight: 600; /* Same as Services page */
    }
    
    .value-description {
        color: var(--text-medium);
        line-height: 1.7; /* Same as Services page */
        font-size: 1rem; /* Adjusted to match Services page card text */
    }
    
    /* Convenience Section - Matching Services page styles */
    .convenience-section {
        padding: 100px 0;
        background-color: white;
    }
    
    .convenience-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }
    
    .convenience-content {
        text-align: center;
        max-width: 800px;
        margin: 0 auto 60px;
    }
    
    .convenience-content p {
        font-size: 1.2rem; /* Same as Services page content */
        color: var(--text-medium);
        line-height: 1.7;
    }
    
    .milestones-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Same as Services page solution items */
        gap: 30px; /* Same as Services page */
        margin-bottom: 80px;
    }
    
    .milestone-card {
        background-color: var(--light-bg);
        border-radius: 15px; /* Same as Services page */
        padding: 30px; /* Same as Services page solution items */
        text-align: center;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05); /* Same as Services page */
        transition: all 0.4s ease;
    }
    
    .milestone-card:hover {
        transform: translateY(-10px); /* Same as Services page */
        box-shadow: 0 15px 35px rgba(0,0,0,0.1); /* Same as Services page */
    }
    
    .milestone-number {
        font-size: 3rem; /* Matching emphasis */
        font-weight: 700;
        color: var(--secondary-green);
        margin-bottom: 10px;
    }
    
    .milestone-title {
        font-size: 1.4rem; /* Same as Services page solution items */
        color: var(--text-dark);
        margin-bottom: 10px;
        font-weight: 600; /* Same as Services page */
    }
    
    .milestone-description {
        color: var(--text-medium);
        font-size: 0.95rem; /* Same as Services page solution items */
    }
    
    .clientele-section {
        margin-top: 60px;
    }
    
    .clientele-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 25px;
    }
    
    .clientele-card {
        background-color: white;
        border-radius: 10px;
        padding: 25px 20px;
        text-align: center;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        border: 1px solid #e2e8f0;
        transition: all 0.3s ease;
    }
    
    .clientele-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    
    .clientele-name {
        font-weight: 600;
        color: var(--text-dark);
        font-size: 1.1rem;
    }
    
    /* Uniqueness Section - Matching Services page card styles */
    .uniqueness-section {
        padding: 100px 0;
        background-color: var(--light-bg);
    }
    
    .uniqueness-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }
    
    .uniqueness-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Same as Services page */
        gap: 30px; /* Same as Services page */
    }
    
    .uniqueness-card {
        background-color: white;
        border-radius: 15px; /* Same as Services page */
        padding: 40px 30px; /* Same as Services page */
        box-shadow: 0 10px 30px rgba(0,0,0,0.05); /* Same as Services page */
        transition: all 0.4s ease;
        position: relative;
        overflow: hidden;
    }
    
    .uniqueness-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
        background: linear-gradient(to bottom, var(--secondary-green), var(--secondary-orange));
        transform: scaleY(0);
        transform-origin: top;
        transition: transform 0.4s ease;
    }
    
    .uniqueness-card:hover {
        transform: translateY(-10px); /* Same as Services page */
        box-shadow: 0 15px 35px rgba(0,0,0,0.1); /* Same as Services page */
    }
    
    .uniqueness-card:hover::before {
        transform: scaleY(1);
    }
    
    .uniqueness-icon {
        font-size: 3rem; /* Slightly smaller than Services page for balance */
        color: var(--primary-blue);
        margin-bottom: 25px; /* Same as Services page */
        transition: all 0.4s ease;
    }
    
    .uniqueness-card:hover .uniqueness-icon {
        transform: scale(1.1); /* Same as Services page */
        color: var(--secondary-green);
    }
    
    .uniqueness-title {
        font-size: 1.6rem; /* Same as Services page */
        color: var(--text-dark);
        margin-bottom: 20px; /* Same as Services page */
        font-weight: 600; /* Same as Services page */
    }
    
    .uniqueness-description {
        color: var(--text-medium);
        line-height: 1.7; /* Same as Services page */
        font-size: 1rem; /* Adjusted to match Services page */
    }
    
    /* Responsive Design - Matching Services page breakpoints */
    @media (max-width: 1024px) {
        .about-hero h1 {
            font-size: 2.5rem; /* Same as Services page */
        }
        
        .who-we-are-container {
            gap: 50px;
        }
    }
    
    @media (max-width: 768px) {
        .about-hero h1 {
            font-size: 2.2rem; /* Same as Services page */
        }
        
        .about-hero p {
            font-size: 1.1rem; /* Same as Services page */
        }
        
        .who-we-are-container {
            grid-template-columns: 1fr;
            gap: 50px;
        }
        
        .who-we-are-content h2, .section-title {
            font-size: 2.2rem; /* Same as Services page */
        }
        
        .values-grid, .uniqueness-grid {
            grid-template-columns: 1fr;
        }
        
        .milestones-grid, .clientele-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    
    @media (max-width: 576px) {
        .about-hero, .who-we-are, .values-section, 
        .convenience-section, .uniqueness-section {
            padding: 70px 0; /* Same as Services page */
        }
        
        .about-hero h1 {
            font-size: 1.8rem; /* Same as Services page */
        }
        
        .section-title {
            font-size: 1.8rem; /* Same as Services page */
        }
        
        .who-we-are-image {
            height: 300px;
        }
        
        .milestones-grid, .clientele-grid {
            grid-template-columns: 1fr;
        }
    }
</style>

<main>
    <!-- Hero Section -->
    <section class="about-hero">
        <div class="about-hero-content">
            <h1 class="animate-fade-in-up" style="animation-delay: 0.2s;">WHO WE ARE?</h1>
            <p class="animate-fade-in-up" style="animation-delay: 0.4s;">Insure Tech Services Pvt Ltd - Your Trusted IRDAI Certified Insurance Partner</p>
        </div>
    </section>
    
    <!-- Who We Are Section -->
    <section class="who-we-are">
        <div class="who-we-are-container">
            <div class="who-we-are-content">
                <h2 class="animate-fade-in-left" style="animation-delay: 0.2s;">Our Insurance Journey</h2>
                <p class="animate-fade-in-left" style="animation-delay: 0.3s;">Insure Tech Services Pvt Ltd stands as a premier insurance broking firm with IRDAI certification, dedicated to providing comprehensive Life Insurance and General Insurance solutions. Our commitment to excellence has established us as a trusted partner for individuals and businesses alike.</p>
                <p class="animate-fade-in-left" style="animation-delay: 0.4s;">From our headquarters at Selvashakthi Complex in Sriperumbudur, we've built strong relationships with leading insurance providers while ensuring complete satisfaction for our diverse clientele across Tamil Nadu and beyond.</p>
                <div class="highlight-box animate-fade-in-left" style="animation-delay: 0.5s;">
                    <p>Whether you're seeking motor insurance with competitive premiums, comprehensive health coverage, life protection for your family, or specialized fire and travel insurance, we provide expert guidance tailored to your unique needs.</p>
                </div>
            </div>
            <div class="who-we-are-image animate-fade-in-right" style="animation-delay: 0.3s;">
                <div class="image-placeholder">
                    <img src="assets/who1.jpg" alt="Insurance Professionals" class="visual-image">
                    <p>IRDAI Certified Insurance Advisor</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Values Section -->
    <section class="values-section">
        <div class="values-container">
            <h2 class="section-title animate-fade-in-up" style="animation-delay: 0.2s;">OUR VALUES</h2>
            <div class="values-grid">
                <div class="value-card animate-fade-in-up" style="animation-delay: 0.3s;">
                    <div class="value-icon">
                        <i class="fas fa-handshake"></i>
                    </div>
                    <h3 class="value-title">Trust & Transparency</h3>
                    <p class="value-description">We build relationships based on complete transparency in all our dealings. Our clients trust us because we provide clear information and honest recommendations.</p>
                </div>
                
                <div class="value-card animate-fade-in-up" style="animation-delay: 0.4s;">
                    <div class="value-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3 class="value-title">Customer First</h3>
                    <p class="value-description">Your insurance needs are our priority. We take time to understand your requirements and recommend products that offer the best protection for your specific situation.</p>
                </div>
                
                <div class="value-card animate-fade-in-up" style="animation-delay: 0.5s;">
                    <div class="value-icon">
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <h3 class="value-title">Expert Guidance</h3>
                    <p class="value-description">With partnerships across 15+ motor insurance companies and leading life & health insurers, we provide expert advice to help you make informed decisions.</p>
                </div>
                
                <div class="value-card animate-fade-in-up" style="animation-delay: 0.6s;">
                    <div class="value-icon">
                        <i class="fas fa-award"></i>
                    </div>
                    <h3 class="value-title">IRDAI Certified</h3>
                    <p class="value-description">As an IRDAI certified insurance advisor, we maintain the highest standards of professionalism and regulatory compliance in all our services.</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Insurance at Your Convenience Section -->
    <section class="convenience-section">
        <div class="convenience-container">
            <h2 class="section-title animate-fade-in-up" style="animation-delay: 0.2s;">INSURANCE AT YOUR CONVENIENCE</h2>
            
            <div class="convenience-content animate-fade-in-up" style="animation-delay: 0.3s;">
                <p>We bring insurance solutions to your doorstep with seamless digital processes and personalized service. Our team ensures that you get the right coverage without the hassle of complex paperwork and lengthy procedures.</p>
            </div>
            
            <h3 class="section-title" style="font-size: 2.2rem; margin-bottom: 40px; animation-delay: 0.4s;" class="animate-fade-in-up">OUR MILESTONES</h3>
            
            <div class="milestones-grid">
                <div class="milestone-card animate-fade-in-up" style="animation-delay: 0.3s;">
                    <div class="milestone-number">15+</div>
                    <h4 class="milestone-title">Insurance Partners</h4>
                    <p class="milestone-description">Leading motor insurance companies</p>
                </div>
                
                <div class="milestone-card animate-fade-in-up" style="animation-delay: 0.4s;">
                    <div class="milestone-number">5000+</div>
                    <h4 class="milestone-title">Happy Clients</h4>
                    <p class="milestone-description">Satisfied individuals and businesses</p>
                </div>
                
                <div class="milestone-card animate-fade-in-up" style="animation-delay: 0.5s;">
                    <div class="milestone-number">10+</div>
                    <h4 class="milestone-title">Years Experience</h4>
                    <p class="milestone-description">In insurance broking industry</p>
                </div>
                
                <div class="milestone-card animate-fade-in-up" style="animation-delay: 0.6s;">
                    <div class="milestone-number">100%</div>
                    <h4 class="milestone-title">IRDAI Certified</h4>
                    <p class="milestone-description">Licensed insurance advisor</p>
                </div>
            </div>
            
            <div class="clientele-section">
                <h3 class="section-title" style="font-size: 2.2rem; margin-bottom: 40px; animation-delay: 0.5s;" class="animate-fade-in-up">OUR CORPORATE CLIENTELE</h3>
                
                <div class="clientele-grid">
                    <div class="clientele-card animate-fade-in-up" style="animation-delay: 0.3s;">
                        <div class="clientele-name">Manufacturing Units</div>
                    </div>
                    <div class="clientele-card animate-fade-in-up" style="animation-delay: 0.4s;">
                        <div class="clientele-name">IT Companies</div>
                    </div>
                    <div class="clientele-card animate-fade-in-up" style="animation-delay: 0.5s;">
                        <div class="clientele-name">Small Businesses</div>
                    </div>
                    <div class="clientele-card animate-fade-in-up" style="animation-delay: 0.6s;">
                        <div class="clientele-name">Educational Institutions</div>
                    </div>
                    <div class="clientele-card animate-fade-in-up" style="animation-delay: 0.3s;">
                        <div class="clientele-name">Healthcare Facilities</div>
                    </div>
                    <div class="clientele-card animate-fade-in-up" style="animation-delay: 0.4s;">
                        <div class="clientele-name">Retail Chains</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Our Uniqueness Section -->
    <section class="uniqueness-section">
        <div class="uniqueness-container">
            <h2 class="section-title animate-fade-in-up" style="animation-delay: 0.2s;">OUR UNIQUENESS</h2>
            
            <div class="uniqueness-grid">
                <div class="uniqueness-card animate-fade-in-up" style="animation-delay: 0.3s;">
                    <div class="uniqueness-icon">
                        <i class="fas fa-balance-scale"></i>
                    </div>
                    <h3 class="uniqueness-title">Multi-Company Comparison</h3>
                    <p class="uniqueness-description">We provide premium comparisons from 15+ insurance companies, ensuring you get the best coverage at the most competitive rates without bias.</p>
                </div>
                
                <div class="uniqueness-card animate-fade-in-up" style="animation-delay: 0.4s;">
                    <div class="uniqueness-icon">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <h3 class="uniqueness-title">Personalized Advisory</h3>
                    <p class="uniqueness-description">Every client receives personalized attention and customized insurance solutions tailored to their specific needs and financial goals.</p>
                </div>
                
                <div class="uniqueness-card animate-fade-in-up" style="animation-delay: 0.5s;">
                    <div class="uniqueness-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h3 class="uniqueness-title">Quick Claim Support</h3>
                    <p class="uniqueness-description">Our dedicated claim assistance team ensures fast and hassle-free claim settlement, standing by you when you need us the most.</p>
                </div>
                
                <div class="uniqueness-card animate-fade-in-up" style="animation-delay: 0.6s;">
                    <div class="uniqueness-icon">
                        <i class="fas fa-hand-holding-heart"></i>
                    </div>
                    <h3 class="uniqueness-title">End-to-End Service</h3>
                    <p class="uniqueness-description">From policy selection and documentation to renewals and claims, we manage the entire insurance lifecycle for your convenience.</p>
                </div>
                
                <div class="uniqueness-card animate-fade-in-up" style="animation-delay: 0.7s;">
                    <div class="uniqueness-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3 class="uniqueness-title">IRDAI Certified Expertise</h3>
                    <p class="uniqueness-description">Our certification ensures that you receive professional, regulated, and reliable insurance advisory services meeting industry standards.</p>
                </div>
                
                <div class="uniqueness-card animate-fade-in-up" style="animation-delay: 0.8s;">
                    <div class="uniqueness-icon">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <h3 class="uniqueness-title">Digital Convenience</h3>
                    <p class="uniqueness-description">Get insurance solutions through digital platforms with minimal paperwork, making insurance buying and management effortless.</p>
                </div>
            </div>
        </div>
    </section>
</main>

<script>
    // Intersection Observer for scroll animations
    document.addEventListener('DOMContentLoaded', function() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Start the animation when element comes into view
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all elements with animation classes
        document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right').forEach(el => {
            // Set initial state to paused
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });
    });
</script>
<!-- Premium Footer - Reduced Background Opacity -->
<footer class="insuretech-footer">
    <style>
        /* Premium Footer Styles with Reduced Background Opacity */
        .insuretech-footer {
            background: 
                linear-gradient(135deg, #21415b 0%, #1a2f3a 100%),
                radial-gradient(circle at 20% 80%, rgba(110, 194, 82, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(246, 127, 0, 0.04) 0%, transparent 50%);
            color: white;
            padding: 70px 0 25px;
            font-family: 'Montserrat', sans-serif;
            position: relative;
            overflow: hidden;
        }
        
        .insuretech-footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #6ec252, #f67f00);
            z-index: 3;
        }
        
        .insuretech-footer::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%236ec252' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E");
            opacity: 0.2;
            z-index: 1;
        }
        
        .footer-bg-accent {
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            filter: blur(60px);
            opacity: 0.08;
            z-index: 1;
        }
        
        .bg-accent-1 {
            background: radial-gradient(circle, #6ec252 0%, transparent 70%);
            top: -100px;
            right: -50px;
        }
        
        .bg-accent-2 {
            background: radial-gradient(circle, #f67f00 0%, transparent 70%);
            bottom: -100px;
            left: 10%;
        }
        
        .footer-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 30px;
            position: relative;
            z-index: 2;
        }
        
        .footer-row {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -20px;
        }
        
        .footer-col {
            padding: 0 20px;
            margin-bottom: 40px;
        }
        
        .footer-col-about {
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }
        
        .footer-col-policies {
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
        }
        
        .footer-col-links {
            flex: 0 0 25%;
            max-width: 25%;
        }
        
        .footer-heading {
            color: #fff;
            font-size: 1.4rem;
            margin-bottom: 30px;
            position: relative;
            font-weight: 700;
            padding-bottom: 15px;
            font-family: 'Playfair Display', serif;
        }
        
        .footer-heading::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 4px;
            background: linear-gradient(90deg, #6ec252, #f67f00);
            border-radius: 2px;
            transition: width 0.3s ease;
        }
        
        .footer-col:hover .footer-heading::after {
            width: 80px;
        }
        
        .footer-about-text {
            color: #e2e8f0;
            line-height: 1.7;
            margin-bottom: 25px;
            font-size: 1rem;
        }
        
        .contact-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 18px;
            transition: transform 0.3s ease;
        }
        
        .contact-item:hover {
            transform: translateX(5px);
        }
        
        .contact-icon {
            margin-right: 15px;
            margin-top: 3px;
            color: #6ec252;
            width: 18px;
            text-align: center;
            font-size: 1.1rem;
        }
        
        .contact-text {
            flex: 1;
            line-height: 1.6;
            color: #e2e8f0;
            font-size: 0.95rem;
        }
        
        .contact-text a {
            color: #e2e8f0;
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
        }
        
        .contact-text a::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 1px;
            background-color: #6ec252;
            transition: width 0.3s ease;
        }
        
        .contact-text a:hover {
            color: #fff;
        }
        
        .contact-text a:hover::after {
            width: 100%;
        }
        
        .footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .footer-links li {
            margin-bottom: 15px;
            position: relative;
            overflow: hidden;
        }
        
        .footer-links a {
            color: #e2e8f0;
            text-decoration: none;
            transition: all 0.3s ease;
            display: block;
            padding: 5px 0;
            line-height: 1.5;
            position: relative;
            font-weight: 500;
        }
        
        .footer-links a::before {
            content: '';
            position: absolute;
            left: -5px;
            top: 0;
            height: 100%;
            width: 3px;
            background-color: #6ec252;
            transform: scaleY(0);
            transition: transform 0.3s ease;
            border-radius: 2px;
        }
        
        .footer-links a:hover {
            color: #fff;
            transform: translateX(8px);
        }
        
        .footer-links a:hover::before {
            transform: scaleY(1);
        }
        
        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 25px;
        }
        
        .social-links a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 42px;
            height: 42px;
            background: linear-gradient(135deg, #6ec252 0%, #5aad45 100%);
            border-radius: 50%;
            color: #fff;
            transition: all 0.4s ease;
            text-decoration: none;
            position: relative;
            overflow: hidden;
        }
        
        .social-links a::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }
        
        .social-links a:hover::before {
            left: 100%;
        }
        
        .social-links a:hover {
            background: linear-gradient(135deg, #f67f00 0%, #e57200 100%);
            transform: translateY(-5px) rotate(5deg);
            box-shadow: 0 8px 20px rgba(246, 127, 0, 0.3);
        }
        
        .call-button {
            background: linear-gradient(135deg, #f67f00 0%, #e57200 100%);
            color: white;
            border: none;
            padding: 14px 28px;
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.4s ease;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            cursor: pointer;
            font-size: 1rem;
            box-shadow: 0 4px 15px rgba(246, 127, 0, 0.3);
            position: relative;
            overflow: hidden;
        }
        
        .call-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }
        
        .call-button:hover::before {
            left: 100%;
        }
        
        .call-button:hover {
            background: linear-gradient(135deg, #6ec252 0%, #5aad45 100%);
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(110, 194, 82, 0.4);
            color: white;
        }
        
        .call-button i {
            margin-right: 10px;
            font-size: 1.1rem;
        }
        
        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.15);
            padding-top: 25px;
            margin-top: 20px;
        }
        
        .footer-bottom-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .copyright {
            color: #a0aec0;
            font-size: 0.95rem;
            margin: 0;
        }
        
        .irda-badge {
            background: linear-gradient(135deg, #6ec252 0%, #5aad45 100%);
            color: white;
            padding: 8px 18px;
            border-radius: 25px;
            font-size: 0.85rem;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(110, 194, 82, 0.3);
            transition: all 0.3s ease;
        }
        
        .irda-badge:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 18px rgba(110, 194, 82, 0.4);
        }
        
        /* Two-column layout for policies */
        .policies-container {
            display: flex;
            flex-wrap: wrap;
            gap: 0 40px;
        }
        
        .policies-column {
            flex: 1;
            min-width: 160px;
        }
        
        /* Contact Info - Removed box styling */
        .contact-info {
            margin-top: 20px;
        }
        
        /* Premium decorative elements */
        .footer-decoration {
            position: absolute;
            opacity: 0.08;
            z-index: 1;
        }
        
        .decoration-1 {
            top: 10%;
            right: 5%;
            font-size: 8rem;
            color: #6ec252;
        }
        
        .decoration-2 {
            bottom: 15%;
            left: 5%;
            font-size: 6rem;
            color: #f67f00;
        }
        
        /* Responsive Footer */
        @media (max-width: 1200px) {
            .footer-col-about {
                flex: 0 0 40%;
                max-width: 40%;
            }
            
            .footer-col-policies {
                flex: 0 0 60%;
                max-width: 60%;
            }
            
            .footer-col-links {
                flex: 0 0 100%;
                max-width: 100%;
                margin-top: 20px;
            }
        }
        
        @media (max-width: 992px) {
            .insuretech-footer {
                padding: 50px 0 20px;
            }
            
            .footer-col-about,
            .footer-col-policies {
                flex: 0 0 100%;
                max-width: 100%;
            }
            
            .footer-heading {
                margin-top: 20px;
            }
            
            .social-links {
                justify-content: flex-start;
            }
            
            .policies-container {
                gap: 0 30px;
            }
            
            .bg-accent-1,
            .bg-accent-2 {
                display: none;
            }
        }
        
        @media (max-width: 768px) {
            .footer-container {
                padding: 0 20px;
            }
            
            .footer-row {
                margin: 0 -15px;
            }
            
            .footer-col {
                padding: 0 15px;
            }
            
            .footer-bottom-content {
                flex-direction: column;
                text-align: center;
                gap: 15px;
            }
            
            .policies-container {
                flex-direction: column;
                gap: 0;
            }
            
            .decoration-1, .decoration-2 {
                display: none;
            }
        }
        
        @media (max-width: 576px) {
            .footer-container {
                padding: 0 15px;
            }
            
            .footer-row {
                margin: 0 -10px;
            }
            
            .footer-col {
                padding: 0 10px;
            }
            
            .social-links {
                justify-content: center;
            }
            
            .call-button {
                width: 100%;
                text-align: center;
            }
        }
    </style>
    
    <!-- Background Accent Elements -->
    <div class="footer-bg-accent bg-accent-1"></div>
    <div class="footer-bg-accent bg-accent-2"></div>
    
    <!-- Decorative Elements -->
    <div class="footer-decoration decoration-1">
        <i class="fas fa-shield-alt"></i>
    </div>
    <div class="footer-decoration decoration-2">
        <i class="fas fa-hand-holding-heart"></i>
    </div>
    
    <div class="footer-container">
        <div class="footer-row">
            <!-- About Section -->
            <div class="footer-col footer-col-about">
                <h5 class="footer-heading">Insure Tech</h5>
                <p class="footer-about-text">At Insure Tech, we provide comprehensive insurance broking services through various channels. Our expert team is dedicated to finding the perfect insurance solutions for your unique needs.</p>
                
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-text">
                            Selvashakthi Complex, 228/2 Malaipattu Village, Sriperumbudur, 601301
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <div class="contact-text">
                            <a href="tel:+919150005721">+91 9150005721</a>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-text">
                            <a href="mailto:care@insure.co.in">care@insure.co.in</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Insurance Policies (Two Columns) -->
            <div class="footer-col footer-col-policies">
                <h5 class="footer-heading">Insurance Policies</h5>
                <div class="policies-container">
                    <ul class="footer-links policies-column">
                        <li><a href="travel-insurance.php">Travel Insurance</a></li>
                        <li><a href="liability-insurance.php">Liability Insurance</a></li>
                        <li><a href="marine-insurance.php">Marine Insurance</a></li>
                        <li><a href="engineering-insurance.php">Engineering Insurance</a></li>
                        <li><a href="extended-warranty.php">Extended Warranty</a></li>
                        <li><a href="credit-insurance.php">Credit Insurance</a></li>
                        <li><a href="motor-insurance.php">Motor Insurance</a></li>
                    </ul>
                    <ul class="footer-links policies-column">
                        <li><a href="health-insurance.php">Health Insurance</a></li>
                        <li><a href="aviation-insurance.php">Aviation Insurance</a></li>
                        <li><a href="fire-insurance.php">Fire Insurance</a></li>
                        <li><a href="life-insurance.php">Life Insurance</a></li>
                        <li><a href="other-insurance.php">Other Types Of Insurance</a></li>
                        <li><a href="welfare-insurance.php">Employee Welfare Insurance</a></li>
                    </ul>
                </div>
                
                <a href="tel:+919150005721" class="call-button">
                    <i class="fas fa-phone-alt"></i> Call Now
                </a>
            </div>
            
            <!-- Useful Links -->
            <div class="footer-col footer-col-links">
                <h5 class="footer-heading">Useful Links</h5>
                <ul class="footer-links">
                    <li><a href="claim-processing.php">Claim Processing</a></li>
                    <li><a href="risk.php">Risk Assessment</a></li>
                    <li><a href="consulting.php">Insurance Consulting</a></li>
                    <li><a href="partner.php">Partner With Us</a></li>
                    <li><a href="about.php">About Us</a></li>
                    <li><a href="contact.php">Contact Us</a></li>
                </ul>
                
                <h5 class="footer-heading" style="margin-top: 40px;">Connect With Us</h5>
                <div class="social-links">
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="footer-bottom-content">
                <p class="copyright">&copy; 2026 Insure Tech Insurance Broking Services. All Rights Reserved.</p>
                <span class="irda-badge">IRDAI Certified</span>
            </div>
        </div>
    </div>
</footer>

<!-- Font Awesome -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script></body>
</html>