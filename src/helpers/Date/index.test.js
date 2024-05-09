import { getMonth } from "./index";

/** EXPLICATIONS
 * Ce code est un ensemble de tests unitaires écrits en JavaScript pour une fonction appelée `getMonth`. 
 * Il utilise la bibliothèque de test Jest, qui est couramment utilisée dans les projets React.
 * 
 * Le code est structuré en utilisant les fonctions `describe` et `it` de Jest. 
 * `describe` est utilisé pour regrouper des tests connexes, et `it` est utilisé pour définir un test individuel.
 * 
 * Dans ce cas, il y a un groupe de tests appelé "Date helper", qui contient un sous-groupe appelé "When getMonth is called". Ce sous-groupe contient deux tests individuels.
 * 
 * Le premier test vérifie que lorsque la fonction getMonth est appelée avec une date représentant le 1er janvier 2022, 
 * elle renvoie la chaîne de caractères "janvier". Le deuxième test vérifie que lorsque la fonction est appelée avec une 
 * date représentant le 8 juillet 2022, elle renvoie la chaîne de caractères "juillet".
 * 
 * Chaque test utilise la fonction expect de Jest pour vérifier que la valeur renvoyée par getMonth est celle attendue. 
 * Si getMonth ne renvoie pas la valeur attendue, Jest marquera le test comme échoué et affichera un message d'erreur.
 */
describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            const date = new Date("2022-01-01");
            expect(getMonth(date)).toBe("janvier");
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            const date = new Date("2022-07-08");
            expect(getMonth(date)).toBe("juillet");
        });
    });
});