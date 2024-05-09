import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const DataContext = createContext({});

export const api = {
  loadData: async () => {
    const json = await fetch("/events.json");
    return json.json();
  },
};

/**
 * Composant DataProvider pour gérer le chargement des données et l'état.
 * @param {object} props - Propriétés du composant.
 * @param {React.ReactNode} props.children - Composants enfants à rendre dans le fournisseur.
 * @returns {JSX.Element} Composant rendu avec le fournisseur de contexte de données.
 */
export const DataProvider = ({ children }) => {
  const [error, setError] = useState(null); // État pour contenir les informations d'erreur.
  const [data, setData] = useState(null); // État pour contenir les données chargées.
  const [last, setLast] = useState(null); // État pour contenir le dernier événement des données chargées.

  /**
   * Fonction asynchrone pour récupérer les données depuis l'API.
   */
  const getData = useCallback(async () => {
    try {
      const loadedData = await api.loadData(); // Chargement des données depuis l'API.
      setData(loadedData); // Mise à jour de l'état avec les données chargées.
      setLast(loadedData.events[loadedData.events.length - 1]) // Définition du dernier événement des données chargées.
    } catch (err) {
      setError(err); // Gestion de l'erreur en définissant l'état d'erreur.
    }
  }, []);

  /**
   * Effet pour déclencher le chargement des données lorsque l'état data est initialement null.
   */
  useEffect(() => {
    if (data) return; // Si les données sont déjà chargées, ne rien faire.
    getData(); // Sinon, récupérer les données.
  }, [data, getData]);
  
  return (
    <DataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        error,
        last
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Définition des types de props pour le composant DataProvider.
DataProvider.propTypes = {
  children: PropTypes.node.isRequired, // S'assurer que la prop children est fournie et de type nœud React.
}

/**
 * Hook personnalisé pour accéder au contexte de données.
 * @returns {object} Objet contenant les valeurs du contexte de données.
 */
export const useData = () => useContext(DataContext);

export default DataContext;