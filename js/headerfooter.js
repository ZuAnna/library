class MyHeader extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
      <header class="header">
      <div class="container">
        <div class="header__inner">
          <div class="header__inner-up">
            <div class="header__inner-title">
              <a href="index.html" class="header__text-link"><h1 class="header__inner-titletext">Моя библиотека</h1></a>
            </div>
            <div class="header__inner-logo">
             <a href="index.html" class="header__logo-link"><img src="images/books.svg" alt="logo" class="header__logoimg"/></a>
            </div>

          </div>
          <div class="header__inner-menu">
          <button class="header__inner-hamburger">
          <span class="header__inner-hamburger-btn"></span></button>
            <nav class="navigation">
              <ul class="navigation__items">
                <li class="navigation__item"><a href="index.html" class="navigation__link">ГЛАВНАЯ</a></li>
                <li class="navigation__item"><a href="allbooks.html" class="navigation__link">ВСЕ КНИГИ</a></li>
                <li class="navigation__item"><a href="readed.html" class="navigation__link">ПРОЧИТАННЫЕ</a> </li>
                <li class="navigation__item"><a href="client/addbooks.html" class="navigation__link">ДОБАВИТЬ КНИГУ</a> </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
   `
   }
}
customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback (){
    this.innerHTML = `
    <footer class="footer">
    <div class="container">
      <div class="footer__text">
        <a href="https://github.com/ZuAnna" class="footer__link">
          <p class="footer__text-p">
          ZuAnna (github)
         </p>
        </a>
        <a href="mailto:anyanikitina.an@yandex.ru" class="footer__email"> <span> &#8595 По вопросам и предложениям &#8595</span><br>anyanikitina.an@yandex.ru</a>

      </div>
    </div>
  </footer>

  `
  }
}

customElements.define ('my-footer', MyFooter);
