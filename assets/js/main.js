/* ==========================================================================
   SHEARLING TOTE LUXURY ATELIER - CORE JAVASCRIPT
   Mobile Drawer Controller, Sticky Header Elevation & Interaction Handlers
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const drawerClose = document.getElementById('drawer-close');
    const mobileDrawer = document.getElementById('mobile-drawer');

    if (menuToggle && mobileDrawer) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileDrawer.classList.toggle('open');
            const isOpen = mobileDrawer.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        if (drawerClose) {
            drawerClose.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        }

        // Close when clicking outside drawer
        document.addEventListener('click', (e) => {
            if (mobileDrawer.classList.contains('open') && !mobileDrawer.contains(e.target) && e.target !== menuToggle) {
                mobileDrawer.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
                mobileDrawer.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Sticky Header Blur Elevation on Scroll
    const siteHeader = document.querySelector('.site-header');
    if (siteHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                siteHeader.style.background = 'rgba(15, 12, 10, 0.98)';
                siteHeader.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.65)';
            } else {
                siteHeader.style.background = 'rgba(20, 16, 13, 0.94)';
                siteHeader.style.boxShadow = 'none';
            }
        }, { passive: true });
    }
});
