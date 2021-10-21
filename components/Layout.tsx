import {
  FunctionComponent,
  PropsWithChildren,
  MouseEvent,
  useRef,
} from "react";
import Link from "next/link";
import Image from "next/image";

export const Layout: FunctionComponent<{ currentPathname: string }> = ({
  currentPathname,
  children,
}: PropsWithChildren<{ currentPathname: string }>) => {
  const burgerMenu = useRef<HTMLDivElement>(null);
  const isActiveRoute = (link: string): "currentRoute" | "" =>
    currentPathname === link ? "currentRoute" : "";

  const toggleMenu = (e: MouseEvent) => {
    e.preventDefault();
    if (burgerMenu.current) {
      if (burgerMenu.current.classList.contains("status-open")) {
        burgerMenu.current.classList.remove("status-open");
        burgerMenu.current.classList.add("status-closed");
      } else if (burgerMenu.current.classList.contains("status-closed")) {
        burgerMenu.current.classList.remove("status-closed");
        burgerMenu.current.classList.add("status-open");
      } else {
        burgerMenu.current.classList.add("status-open");
      }
    }
  };

  return (
    <>
      <header className="site-head">
        <h1 className="visually-hidden">Hosnowsky</h1>
        <div className="wrapper">
          <div className="site-head__inner">
            <Link href="/">
              <a className="site-head__brand">
                <Image
                  src="https://www.hosnowsky.de/wordpress/wp-content/uploads/2021/01/Logo_Menue-300x36.png"
                  alt="Hosnowsky Paar- und Familienfotografie Logo"
                />
              </a>
            </Link>

            <div className="burger-menu" ref={burgerMenu}>
              <button className="burger-menu__trigger" onClick={toggleMenu}>
                <span className="burger-menu__bar"></span>
              </button>
              <div className="burger-menu__panel">
                <nav className="navigation">
                  <ul role="list">
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
                        <a className={isActiveRoute("leistungen")}>
                          Leistungen
                        </a>
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
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
      <footer>Hello from footer</footer>
      <style jsx>{`
        .site-head {
          padding: 0.6rem 0;
          background: var(--color-light);
          color: var(--color-dark);
          line-height: 1.1;
          box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.2);
        }

        .site-head__inner {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 0 1rem;
        }

        .site-head__brand {
          display: block;
          transform: translateY(-0.25rem);
        }

        .navigation ul {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.3rem 0.8rem;
          padding: 0;
        }

        .navigation li {
          margin: 0.2rem;
        }

        .navigation a {
          font-weight: 600;
          text-transform: uppercase;
          text-decoration: none;
          color: currentColor;
          padding: 4px 3px;
          border: 2px solid transparent;
          border-radius: 2px;
          background: linear-gradient(var(--color-primary) 0 0) bottom /
            var(--d, 0) 2px no-repeat;
          transition: 0.3s;
        }

        .navigation a:hover {
          --d: 100%;
        }

        .burger-menu__trigger {
          display: none;
        }

        @media (max-width: 769px) {
          .burger-menu__trigger {
            display: block;
            width: 2.5rem;
            height: 2.5rem;
            position: relative;
            z-index: 2;
            background: transparent;
            border: none;
            cursor: pointer;
          }

          .burger-menu__panel {
            position: absolute;
            top: 0;
            left: 0;
            padding: 5rem 1.5rem 2rem 1.5rem;
            width: 100%;
            height: 100%;
            visibility: hidden;
            opacity: 0;
            background: var(--color-light);
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .navigation ul {
            display: block;
          }

          .navigation ul > * + * {
            margin-top: 2rem;
          }

          .navigation li {
            font-size: 1.5rem;
          }

          .burger-menu.status-open .burger-menu__panel {
            visibility: visible;
            opacity: 1;
            transition: opacity 400ms ease;
          }

          .burger-menu.status-closed .burger-menu__panel > * {
            opacity: 0;
            transform: translateY(5rem);
          }

          .burger-menu.status-open .burger-menu__panel > * {
            transform: translateY(0);
            opacity: 1;
            transition: transform 500ms cubic-bezier(0.17, 0.67, 0, 0.87) 700ms,
              opacity 500ms ease 800ms;
          }

          .burger-menu.status-open .burger-menu__bar::before {
            top: 0;
            transform: rotate(45deg);
          }

          .burger-menu.status-open .burger-menu__bar::after {
            top: 0;
            transform: rotate(-45deg);
          }

          .burger-menu.status-open .burger-menu__bar {
            background: transparent;
            border-color: transparent;
            transform: rotate(180deg);
          }
        }

        .burger-menu__bar,
        .burger-menu__bar::before,
        .burger-menu__bar::after {
          display: block;
          width: 24px;
          height: 3px;
          background: var(--color-dark);
          position: absolute;
          border-radius: 3px;
          left: 50%;
          margin-left: -12px;
          transition: transform 350ms ease-in-out;
        }

        .burger-menu__bar {
          top: 50%;
          transform: translateY(-50%);
        }

        .burger-menu__bar:before,
        .burger-menu__bar::after {
          content: "";
        }

        .burger-menu__bar::before {
          top: -8px;
        }

        .burger-menu__bar::after {
          bottom: -8px;
        }
      `}</style>
    </>
  );
};
