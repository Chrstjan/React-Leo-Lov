import style from "./LawyerCard.module.scss";

export const LawyerCard = ({
  cardClass,
  sovs,
  alt = "Motto",
  title,
  content,
  subcontent,
}) => {
  return (
    <>
      <figure className={`${style.cardStyling}`}>
        <img src={sovs} alt={alt} />
        <figcaption>
          <header>
            <h3>{title}</h3>
          </header>
          <p>{content}</p>
          <p>{subcontent}</p>
        </figcaption>
      </figure>
    </>
  );
};
