const navigationItems = [
  { slug: "home", href: "/", label: "Home" },
  { slug: "about", href: "/about/", label: "About" },
  { slug: "services", href: "/services/", label: "Services" },
  { slug: "pricing", href: "/pricing/", label: "Pricing" },
  { slug: "contact", href: "/contact/", label: "Contact" },
];

function renderHeader(currentPage) {
  const links = navigationItems
    .map(({ slug, href, label }) => {
      const current = slug === currentPage ? ' aria-current="page"' : "";
      return `<a href="${href}"${current}>${label}</a>`;
    })
    .join("");

  return `
    <header class="site-header">
      <div class="site-header__inner">
        <a class="brand" href="/">
          <span class="brand__mark">HCWW</span>
          <span class="brand__tagline">Hill Country Web Works</span>
        </a>
        <nav class="site-nav" aria-label="Primary navigation">
          ${links}
        </nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  const year = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="site-footer__inner">
        <div>
          <strong>Hill Country Web Works</strong>
          <p>Modern websites and dependable tech support for Hill Country businesses.</p>
        </div>
        <div>
          <p>Boerne, Texas</p>
          <p>robert@hcww.net</p>
          <p>&copy; ${year} Hill Country Web Works</p>
        </div>
      </div>
    </footer>
  `;
}

function mountSiteShell() {
  const currentPage = document.body.dataset.page || "";
  const headerTarget = document.querySelector("[data-site-header]");
  const footerTarget = document.querySelector("[data-site-footer]");

  if (headerTarget) {
    headerTarget.innerHTML = renderHeader(currentPage);
  }

  if (footerTarget) {
    footerTarget.innerHTML = renderFooter();
  }
}

mountSiteShell();
