import style from "./Hero.module.scss";
import { HeroHeader } from "./HeroHeader/HeroHeader";

export const Hero = ({}) => {
  return (
    <>
      <div className={style.heroStyling} id="hero-section">
        <HeroHeader />
      </div>
    </>
  );
};
