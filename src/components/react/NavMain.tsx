import { GrBlog, GrMenu, GrHomeRounded } from "react-icons/gr/index.js";
import { SiAboutdotme } from "react-icons/si/index.js";

import Link from "./Link";

import "../../styles/components/_NavMain.scss";
import { useState } from "react";

export default function NavMain(): JSX.Element {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className={`nav-main ${active ? "active" : ""}`} aria-label="Nav main">
      <GrMenu onClick={handleClick} className="nav-main__menu-icon" />

      <ul className="nav-main__list">
        <li>
          <Link href="/">
            <GrHomeRounded className="icon-gr" />
          </Link>
        </li>

        <li>
          <Link href="/blog">
            <GrBlog className="icon-gr" />
          </Link>
        </li>

        <li>
          <Link href="/a-propos">
            <SiAboutdotme className="icon-gr" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
