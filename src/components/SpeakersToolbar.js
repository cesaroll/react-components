const SpeakersToolbar = () => {
  return (
    <section class="toolbar dark-theme-header">
      <div class="container">
        <div class="justify-content-between">
          <ul class="toolrow d-flex flex-column flex-lg-row">
            <li class="d-flex flex-column flex-md-row">
              <b>Show Sessions&nbsp;&nbsp;</b>
              <label class="fav">
                <input
                  type="checkbox"
                  checked={true}
                />
                <span className="switch"></span>
              </label>
            </li>
            <li class="d-flex flex-column flex-md-row ml-sm-5 ml-0">
              <strong>Theme</strong>
              <label for="" class="dropdown">
                <select
                  className="form-control theme"
                  value="light"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SpeakersToolbar;
