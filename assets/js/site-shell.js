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
          <span class="brand__crest" aria-hidden="true">HC</span>
          <span class="brand__text">
            <span class="brand__mark">Hill Country Web Works</span>
            <span class="brand__tagline">Boerne, Texas | Websites, IT support, and practical technical guidance</span>
          </span>
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
        <div class="stack">
          <strong>Hill Country Web Works</strong>
          <p>Modern websites, dependable support, and senior technical help for Hill Country businesses.</p>
          <p class="footer-note">Direct communication, clear next steps, and long-term support without corporate runaround.</p>
        </div>
        <div class="stack">
          <p><strong>Boerne, Texas</strong></p>
          <p>Serving Boerne, Fair Oaks Ranch, Comfort, Kerrville, Fredericksburg, Bulverde, and nearby communities.</p>
          <p>robert@hcww.net</p>
          <p>(830) 431-0005</p>
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
