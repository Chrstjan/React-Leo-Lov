import style from "./LocationInfo.module.scss";

export const LocationInfo = () => {
  return (
    <>
      <span className={style.infoStyling}>
        <header>
          <h2>Her Bor Vi</h2>
        </header>
        <p>Vi har valgt at bosætte os i solen! </p>
        <p>
          Her er dejlig varmt og ikke ret mange fattige mennesker. Det nyder vi
          rigtig meget.
        </p>
        <p>
          “Hvis du har råd til at tage til Sechellerne har du råd til os”. Det
          er et af vores utallige motto´er.
        </p>
        <footer>
          <ul>
            <li>Leo-Lov ApS </li>
            <li>Maldive rd. 22</li>
            <li>Seychelles</li>
          </ul>
        </footer>
      </span>
    </>
  );
};
