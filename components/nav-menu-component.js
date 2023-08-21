class NavMenuComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                /* Add your styles here. 
                   This can be the styles you have in your current CSS file 
                   that apply to this nav menu. 
                   Ensure you're scoping the styles to this component only 
                   so it doesn't affect other parts of the app */
            </style>

<div data-collapse="medium" data-animation="over-right" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
  <div class="nav-container"><a href="/" class="brand w-nav-brand" aria-label="home"><img src="https://uploads-ssl.webflow.com/60a3ffd129692a1a4231c2d0/64d6446d97f07ea9e7b0e656_imageedit_6_4975225906-removebg-preview.png" loading="lazy" width="134" height="60" alt="Trak logo with black text" srcset="https://uploads-ssl.webflow.com/60a3ffd129692a1a4231c2d0/64d6446d97f07ea9e7b0e656_imageedit_6_4975225906-removebg-preview-p-500.png 500w, https://uploads-ssl.webflow.com/60a3ffd129692a1a4231c2d0/64d6446d97f07ea9e7b0e656_imageedit_6_4975225906-removebg-preview.png 645w" sizes="110px" class="image-131"></a>
    <div class="div-block-4">
      <nav role="navigation" class="nav-menu w-nav-menu">
        <div data-hover="true" data-delay="0" class="w-dropdown">
          <div class="nav-link w-dropdown-toggle" id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
            <div>Product</div>
          </div>
          <nav class="dropdown-list-3 w-dropdown-list" id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0"><a href="/consumer-credit-widget" class="dropdown-link w-dropdown-link" tabindex="0">Consumer Credit Widget</a><a href="/consumer-credit-widget" class="dropdown-link w-dropdown-link" tabindex="0">credit card marketplace widget</a></nav>
        </div>
        <div data-hover="true" data-delay="0" class="w-dropdown" style="">
          <div class="nav-link w-dropdown-toggle" id="w-dropdown-toggle-1" aria-controls="w-dropdown-list-1" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
            <div>business credit cards</div>
          </div>
          <nav class="dropdown-list-3 w-dropdown-list" id="w-dropdown-list-1" aria-labelledby="w-dropdown-toggle-1"><a href="/resources/business-credit-cards" aria-current="page" class="dropdown-link w-dropdown-link w--current" tabindex="0">Marketplace</a><a href="/corporate-credit-card" class="dropdown-link w-dropdown-link" tabindex="0">Flex adcard corporate charge card</a></nav>
        </div><a href="/resources/business-capital" class="nav-link w-nav-link">Business Capital</a><a href="https://paygeon.io/user/login" target="_blank" class="nav-link w-nav-link">Login</a><a href="http://Secureportal.trak.credit" target="_blank" class="nav-link green hide w-nav-link">Sign in</a><a href="#" class="nav-link blue green w-nav-link">Book a demo</a><a href="https://paygeon.io/user/register" class="nav-link hollow w-nav-link">Sign Up</a>
      </nav>
    </div>
    <div class="menu-button w-nav-button" style="-webkit-user-select: text;" aria-label="menu" role="button" tabindex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
      <div class="w-icon-nav-menu"></div>
    </div>
  </div>
  <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
</div>
            <div data-collapse="medium" ... >
                ...
            </div>
        `;
    }
}

customElements.define('nav-menu-component', NavMenuComponent);
