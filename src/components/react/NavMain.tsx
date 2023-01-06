import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import Link from "./Link";

import "../../styles/components/_NavMain.scss";
import React, { useState } from "react";

export default function NavMain(): JSX.Element {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className={`nav-main ${active ? "active" : ""}`} aria-label="Nav main">
      <HamburgerMenuIcon
        onClick={handleClick}
        className="nav-main__menu-icon"
      />

      <ul className="nav-main__list">
        <li>
          <Link href="/">Accueil</Link>
        </li>

        <li>
          <Link href="/blog">Blog</Link>
        </li>

        <li>
          <Link href="/a-propos">A propos</Link>
        </li>
      </ul>
    </nav>
  );
}
