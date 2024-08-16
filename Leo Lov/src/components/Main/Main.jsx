import { cardsArray, lawyerCardArray } from "../../assets/App"
import { Card } from "./Card/Card"
import { LawyerCard } from "./LawyerCard/LawyerCard"
import style from "./Main.module.scss"

export const Main = () => {
    return (
        <>
            <main className={style.mainStyling}>
                <article className={style.cardsContainer}>
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
                </article>
            </main>
        </>
    )
}