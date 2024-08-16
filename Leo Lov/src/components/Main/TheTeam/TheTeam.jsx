import style from "./TheTeam.module.scss";

export const TheTeam = ({ imgSrc, name, description }) => {
  return (
    <>
      <figure className={style.profileCard}>
        <img src={imgSrc} alt={name} />
        <figcaption>
          <header>
            <h4>{name}</h4>
          </header>
          <p>{description}</p>
        </figcaption>
      </figure>
    </>
  );
};
