import { cardsArray, lawyerCardArray, teamArray } from "../../assets/App"
import { LocationWrapper } from "../Location/LocationWrapper"
import { Card } from "./Card/Card"
import { LawyerCard } from "./LawyerCard/LawyerCard"
import style from "./Main.module.scss"
import { TheTeam } from "./TheTeam/TheTeam"

export const Main = () => {
    return (
        <>
            <main className={style.mainStyling}>
                <section className={style.cardsContainer}>
                    {cardsArray.map((card) => {
                        return (
                            <Card headerText={card.title} cardContent={card.content}/>
                        )
                    })}
                    {lawyerCardArray.map((card) => {
                        return (
                            <LawyerCard sovs={card.img} title={card.title} content={card.content} subcontent={card.subContent}/>
                        )
                    })}
                    {teamArray.map((team) => {
                        return (
                            <TheTeam imgSrc={team.img} name={team.name} description={team.description}/>
                        )
                    })}
                    <LocationWrapper />
                </section>
            </main>
        </>
    )
}