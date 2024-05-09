/** MONTHS 
 * est un objet qui mappe les numéros de mois (de 0 à 11, comme ils sont représentés en JavaScript) à leurs noms en français. 
 * 0 est mappé à "janvier", 
 * 1 à "février", et ainsi de suite jusqu'à 11 qui est mappé à "décembre".
 */
export const MONTHS = {
  0: "janvier",
  1: "février",
  2: "mars",
  3: "avril",
  4: "mai",
  5: "juin",
  6: "juillet",
  7: "août",
  8: "septembre",
  9: "octobre",
  10: "novembre",
  11: "décembre",
};

/** getMonth
 * est une fonction qui prend un objet Date JavaScript en argument et renvoie le nom français du mois de cette date. 
 * Elle utilise la méthode getMonth() de l'objet Date, qui renvoie le numéro du mois (de 0 à 11), et utilise ce numéro pour 
 * obtenir le nom du mois correspondant à partir de l'objet MONTHS.
 */
export const getMonth = (date) => MONTHS[date.getMonth()];