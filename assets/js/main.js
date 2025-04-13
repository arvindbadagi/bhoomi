/**
 * Toggle mobile nav dropdowns
 */
document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        const parentLi = this.parentNode; // Get the parent <li>
        const dropdown = parentLi.querySelector('ul'); // Find the associated <ul>

        // Toggle the active class to show/hide
        parentLi.classList.toggle('active');
        if (dropdown) {
            dropdown.classList.toggle('dropdown-active');
        }

        // Close other dropdowns
        document.querySelectorAll('.navmenu .dropdown-active').forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('dropdown-active');
                otherDropdown.parentNode.classList.remove('active');
            }
        });

        // Stop event from bubbling up
        e.stopImmediatePropagation();
    });
});

/**
 * Mobile nav toggle
 */
const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

function mobileNavToggle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
}
mobileNavToggleBtn.addEventListener('click', mobileNavToggle);

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
            mobileNavToggle();
        }
    });
});
