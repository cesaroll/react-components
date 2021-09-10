const Header = ({theme}) => {
  return(
    <div class="padT4 padB4">
      <div class="container mobile-container">
        <div class="d-flex justify-content-between">
          <div>
            <img alt="SVCC Home Page"
              src="/images/SVCClogo.png" />
          </div>
          <div class={
              theme=== "light" ? "light" : "text-info"
              }
            >
            <h4 class="header-title">
              Silicon Valley Code Camp
            </h4>
          </div>
          <div
            className={
              theme=== "light" ? "" : "text-info"
            }
          >
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
