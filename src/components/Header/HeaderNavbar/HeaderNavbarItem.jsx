const HeaderNavbarItem = ({ children, href }) => {
  return (
      <a href={href} className="header__navbar__item">
        {children}
      </a>
  )
}

export default HeaderNavbarItem