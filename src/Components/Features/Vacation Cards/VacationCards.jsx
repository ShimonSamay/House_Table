import style from "./VacationCards.module.scss";
import VacationCard from "Components/Features/Vacation Card/VacationCard";

const VacationCards = ({ matchedVacations }) => {
  
  return (
    <section className={style.cardsContainer}>
      {matchedVacations.map((vacation) => (
        <VacationCard key={vacation.id} vacation={vacation} />
      ))}
    </section>
  );
};

export default VacationCards;
