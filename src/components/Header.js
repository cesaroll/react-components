const Header = () => {
  return(
    <div class="padT4 padB4">
      <div class="container mobile-container">
        <div class="d-flex justify-content-between">
          <div>
            <img alt="SVCC Home Page"
              src="/images/SVCClogo.png" />
          </div>
          <div class="light">
            <h4 class="header-title">
              Silicon Valley Code Camp
            </h4>
          </div>
          <div class="text-dark">
            Hello Mr Smith &nbsp;&nbsp;
            <span>
              <a href="#">sign-out</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
