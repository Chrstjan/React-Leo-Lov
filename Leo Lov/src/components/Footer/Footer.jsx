import style from "./Footer.module.scss";

export const Footer = ({ imageOne, imageTwo }) => {
  return (
    <>
      <footer className={style.footerStyling} id="footer">
        <span>
          <header>
            <h3>Adresse</h3>
          </header>
          <p>Find os her:</p>
          <ul>
            <li>Maldive rd. 22,</li>
            <li>Seychelle Islands</li>
          </ul>
        </span>
        <span>
          <header>
            <h3>Kontakt</h3>
          </header>
          <p>Kontakt os her:</p>
          <ul>
            <li>email@mail.dk</li>
            <li>Tlf: 0192 3023</li>
          </ul>
        </span>
        <span>
          <header>
            <h3>Politik</h3>
          </header>
          <p>Vores politikker:</p>
          <ul>
            <li>Privatlivspolitik</li>
            <li>Cookiepolitik</li>
            <li>Generalle betingelse</li>
          </ul>
        </span>
        <span>
          <header>
            <h3>Sociale medier</h3>
          </header>
          <span className={style.soMeContainer}>
            <img src={imageOne} alt="SoMe Logo" />
            <img src={imageTwo} alt="SoMe Logo" />
          </span>
        </span>
      </footer>
    </>
  );
};
