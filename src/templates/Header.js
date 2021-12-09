const Header = () => {
  const view = `
    <div class="header__main">
      <div class="header__logo">
        <h1>
          <a href="/">Rick & Morty Characters</a>
        </h1>
      </div>
      <div class="header__nav">
        <a href="#/about/">About</a>
      </div>
    </div>
  `;
  return view;
}

export default Header;