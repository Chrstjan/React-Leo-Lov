import style from "./Navbar.module.scss";

export const Navbar = ({}) => {
  return (
    <>
      <nav>
        <ul className={style.navbarStyling}>
          <li>
            <a href="#hero-section">Hjem</a>
          </li>
          <li>
            <a href="#lawyerSection">Advokaterne</a>
          </li>
          <li>
            <a href="#locationSection">Om LeoLov</a>
          </li>
          <li>
            <a href="#footer">Kontakt</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
