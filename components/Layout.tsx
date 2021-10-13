import {
  FunctionComponent,
  PropsWithChildren,
  MouseEvent,
  useRef,
} from "react";
import Link from "next/link";

export const Layout: FunctionComponent<{ currentPathname: string }> = ({
  currentPathname,
  children,
}: PropsWithChildren<{ currentPathname: string }>) => {
  const navigation = useRef<HTMLElement>(null);
  const isActiveRoute = (link: string): "currentRoute" | "" =>
    currentPathname === link ? "currentRoute" : "";

  const toggleMenu = (e: MouseEvent) => {
    e.preventDefault();
    e.currentTarget.classList.toggle("open");
    navigation.current && navigation.current.classList.toggle("mobile-menu");
  };

  return (
    <>
      <header ref={navigation} className="x-navbar width">
        <h1 className="visually-hidden">Hosnowsky</h1>
        <Link href="/">
          <span className="x-brand">
            <img
              src="https://www.hosnowsky.de/wordpress/wp-content/uploads/2021/01/Logo_Menue-300x36.png"
              alt="Hosnowsky Paar- und Familienfotografie Logo"
            />
          </span>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a className={isActiveRoute("/")}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/herbst">
                <a className={isActiveRoute("herbst")}>Herbst Aktion</a>
              </Link>
            </li>
            <li>
              <Link href="/ueber-mich">
                <a className={isActiveRoute("ueber-mich")}>Über mich</a>
              </Link>
            </li>
            <li>
              <Link href="/leistungen">
                <a className={isActiveRoute("leistungen")}>Leistungen</a>
              </Link>
            </li>
            <li>
              <Link href="/gallerie">
                <a className={isActiveRoute("gallerie")}>Galerie</a>
              </Link>
            </li>
            <li>
              <Link href="/blogger">
                <a className={isActiveRoute("blogger")}>Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
        <button className="menu-button" onClick={toggleMenu}>
          <span></span>
          <span></span>
        </button>
        <div id="menu-overlay"></div>
      </header>
      {children}
      <footer>Hello from footer</footer>
      <style jsx>{`
        header {
          width: 100%;
          position: fixed;
          height: 70px;
          top: 0;
          background-color: white;
          z-index: 5;
        }

        .x-navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        nav ul {
          display: flex;
          justify-content: space-between;
          margin-right: 50px;
        }

        nav li {
          list-style: none;
          margin: 0 15px;
          text-transform: uppercase;
          text-align: center;
        }

        nav li a {
          padding: 4px 3px;
          border: 2px solid transparent;
          border-radius: 2px;
          background: linear-gradient(var(--primary) 0 0) bottom / var(--d, 0)
            2px no-repeat;
          transition: 0.3s;
        }

        nav li a:hover {
          --d: 100%;
        }

        nav li a:focus {
          border: 2px solid var(--primary);
        }

        nav li a.currentRoute {
          background: linear-gradient(var(--primary) 0 0) bottom / 100% 2px
            no-repeat;
        }

        .menu-button {
          display: none;
        }

        #menu-overlay {
          display: none;
        }

        @media only screen and (max-width: 1200px) {
          nav {
            display: none;
          }

          header.mobile-menu #menu-overlay {
            display: block;
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            bottom: 0;
            background-color: white;
            z-index: -1;
          }

          header.mobile-menu nav {
            display: block;
            height: 100%;
            margin-top: 70px;
          }

          header.mobile-menu nav ul {
            display: block;
          }

          header.mobile-menu nav ul li {
            font-size: 2rem;
            font-weight: 700;
            margin: 2rem 0;
          }

          .menu-button {
            display: block;
            outline: none;
            border: none;
            background-color: transparent;
            margin-right: 30px;
          }

          .menu-button:hover {
            cursor: pointer;
          }

          .menu-button span {
            display: block;
            width: 40px;
            height: 4px;
            border-radius: 2px;
            background-color: var(--primary);
            margin: 10px auto;
            transition: transform 0.3s ease-in-out;
          }

          .menu-button.open span:first-child {
            transform: translateY(calc(5px + 2px)) rotate(-135deg);
          }
          .menu-button.open span:last-child {
            transform: translateY(calc(-5px - 2px)) rotate(135deg);
          }
        }
      `}</style>
    </>
  );
};
