import { cardsArray, lawyerCardArray, teamArray } from "../../assets/App";
import { Card } from "./Card/Card";
import { LawyerCard } from "./LawyerCard/LawyerCard";
import style from "./Main.module.scss";
import { TheTeam } from "./TheTeam/TheTeam";

export const Main = () => {
  return (
    <>
      <main className={style.mainStyling}>
        <section className={`${style.cardsContainer} ${style.casesCards}`}>
          {cardsArray.map((card) => {
            return <Card headerText={card.title} cardContent={card.content} />;
          })}
        </section>
        <section className={`${style.cardsContainer} ${style.lawyerCard}`}>
          {lawyerCardArray.map((card) => {
            return (
              <LawyerCard
                sovs={card.img}
                title={card.title}
                content={card.content}
                subcontent={card.subContent}
              />
            );
          })}
        </section>
        <section className={style.cardsContainer}>
          <header className={style.sectionHeader}>
            <h2>Mød holdet</h2>
          </header>
          <article className={style.teamStyling}>
            {teamArray.map((team) => {
              return (
                <TheTeam
                  imgSrc={team.img}
                  name={team.name}
                  description={team.description}
                />
              );
            })}
          </article>
        </section>
      </main>
    </>
  );
};
