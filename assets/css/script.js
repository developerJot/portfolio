// Toggle dropdown menu on click
function toggleDropdown(event) {
    event.stopPropagation();
    const dropdown = event.target.closest('.dropdown');
    const menu = dropdown.querySelector('.dropdown-menu');
    const toggle = dropdown.querySelector('.dropdown-toggle');

    // Close all other dropdowns
    document.querySelectorAll('.dropdown-menu.active').forEach(m => {
        if (m !== menu) {
            m.classList.remove('active');
            m.parentElement.querySelector('.dropdown-toggle').classList.remove('active');
        }
    });

    // Toggle current dropdown
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
            menu.classList.remove('active');
            menu.parentElement.querySelector('.dropdown-toggle').classList.remove('active');
        });
    }
});

// Toggle mobile menu
function toggleMenu() {
    const header = document.querySelector('header');
    header.classList.toggle('menu-open');

    // Close dropdown when toggling mobile menu
    document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
        menu.classList.remove('active');
        menu.parentElement.querySelector('.dropdown-toggle').classList.remove('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('header a[href]').forEach(link => {
    link.addEventListener('click', () => {
        const header = document.querySelector('header');
        header.classList.remove('menu-open');
    });
});

