import React from "react";
import HeaderNavbarItem from "./HeaderNavbarItem";

const HeaderNavbar = () => {
  return (
    <div className="container header__navbar">
      {destinations.map((item) => (
        <HeaderNavbarItem key={item.href} href={item.href}>{item.title}</HeaderNavbarItem>
      ))}
    </div>
  );
};

const destinations = [
  {
    title: "Главная",
    href: "/",
  },
  {
    title: "Об организации",
    href: "/about",
  },
  {
    title: "Деятельность",
    href: "/activity",
  },
  {
    title: "Документы",
    href: "/documents",
  },
  {
    title: "Прием обращений",
    href: "/appeals",
  },
  {
    title: "Контакты",
    href: "/contacts",
  },
];

export default HeaderNavbar;
