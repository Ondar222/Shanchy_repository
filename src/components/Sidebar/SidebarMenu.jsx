export default function SidebarMenu({ children }) {
  return (
    <div className="sidebar__container">
      <ul className="sidebar__menu">{children}</ul>
    </div>
  );
}
