const HEADER = () => {
  const VIEW = `
    <h1 class="header_title">
      <a class="header_title-link" href="/">Countries</a>
    </h1>
    <nav class="header_navigation">
      <ul class="header_navigation-list">
        <li class="header_navigation-list-item">
          <a class="header_navigation-list-item-link" href="#/about">About us</a>
        </li>
        <li class="header_navigation-list-item">
          <a class="header_navigation-list-item-link" href="#/contact">Contact</a>
        </li>
      </ul>
    </nav>
  `
  return VIEW
}

export default HEADER