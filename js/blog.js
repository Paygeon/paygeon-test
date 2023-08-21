document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.sidebar li');
    const sidebar = document.querySelector('.sidebar');
    const sidebarStartPosition = sidebar.offsetTop;

    window.addEventListener('scroll', function() {
        if (window.scrollY >= sidebarStartPosition) {
            sidebar.classList.add('sidebar-sticky');
        } else {
            sidebar.classList.remove('sidebar-sticky');
        }

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                setActive(navItems[index]);
            }
        });
    });

    navItems.forEach((navItem) => {
        navItem.addEventListener('click', function() {
            const target = document.getElementById(navItem.getAttribute('data-section'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    function setActive(el) {
        navItems.forEach(nav => nav.classList.remove('active'));
        el.classList.add('active');
    }
});
