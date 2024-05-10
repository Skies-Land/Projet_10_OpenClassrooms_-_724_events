import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

/** SLIDER
 * permet d'afficher une liste d'événements sous forme de carrousel.
 * Ce composant utilise les données fournies par le contexte DataContext.
 * @returns {JSX.Element} Élément JSX représentant le composant Slider.
 */
const Slider = () => {
  const { data } = useData(); // Récupération des données depuis le contexte DataContext.
  const [index, setIndex] = useState(0); // État local pour gérer l'index du slide actuel.

  /** BY DATE DESC
  * Trie les événements par date de manière décroissante.
  * @type {Array<object>} Tableau d'événements triés par date.
  */
  const byDateDesc = data?.focus.sort(
    (evtA, evtB) => 
      new Date(evtA.date) - new Date(evtB.date)
  );

  /** NEXT CARD
  * Fonction pour passer au slide suivant dans le carrousel.
  */
  const nextCard = () => {
    setIndex(index < (byDateDesc && byDateDesc.length - 1) ? index + 1 : 0);
  };

  /** USE EFFECT
  * Effet pour déclencher le changement de slide automatiquement toutes les 5 secondes.
  */
  useEffect (() => {
    const timeOutSlider = setTimeout(() => {
      nextCard();
    }, 5000);
    return () => clearTimeout(timeOutSlider); // Nettoyage du timer lors du démontage du composant.
  }, [nextCard]);

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        // Message dans la console -- Warning: Each child in a list should have a unique "key" prop.
        // https://reactjs.org/link/warning-keys
        // Math.random() est une fonction JavaScript qui génère un nombre aléatoire entre 0 (inclus) et 1 (exclus). Cela signifie que chaque fois que cet élément est rendu, il aura une nouvelle clé.
        <div key={Math.random()}>
          <div
            key={event.title}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={`${Math.random()}`}
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx}
                  onChange={() => setIndex(radioIdx)}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
