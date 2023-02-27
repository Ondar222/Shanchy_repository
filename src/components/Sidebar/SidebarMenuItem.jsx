export default function SidebarMenuItem(params) {
  return (
    <li className="sidebar__menu__item">
      <a
        href={params.url}
   
      >
        {params.title}
      </a>
    </li>
  );
}
