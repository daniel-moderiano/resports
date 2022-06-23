// * If anchor tags are to be placed in the list items, these should become role="menuitem" and the <li> tags should have role="none"

// The Nav is also likely to contain a search bar and a logo, that links back to the home page

const Nav = () => {
  return (
    <nav role="navigation">
      <ul role="menubar">
        <li role="menuitem">Home</li>
        <li role="menuitem">Sign up</li>
        <li role="menuitem">Log in</li>
        <li role="menuitem">Log out</li>
      </ul>
    </nav>
  )
}

export default Nav