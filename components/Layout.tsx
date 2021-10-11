import { FunctionComponent, PropsWithChildren } from "react";
import Link from "next/link";

export const Layout: FunctionComponent<{ currentPathname: string }> = ({
  currentPathname,
  children,
}: PropsWithChildren<{ currentPathname: string }>) => {
  const isActiveRoute = (link: string): "currentRoute" | "" =>
    currentPathname === link ? "currentRoute" : "";

  return (
    <>
      <header>
        <div className="x-navbar-wrap">
          <div className="x-navbar width">
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
          </div>
        </div>
      </header>
      {children}
      <footer>Hello from footer</footer>
      <style jsx>{`
        header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: white;
        }

        .x-navbar {
          margin-right: 4%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        nav ul {
          display: flex;
          justifiy-content: space-between;
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
      `}</style>
    </>
  );
};
