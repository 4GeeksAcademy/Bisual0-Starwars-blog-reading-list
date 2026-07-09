export const initialStore = () => {
  return {
    personajes: [],
    planetas: [],
    vehiculos: [],
    favoritos: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "toggle_favorite":
      const yaExiste = store.favoritos.includes(action.payload);

      return {
        ...store,
        favoritos: yaExiste
          ? store.favoritos.filter((favorito) => favorito !== action.payload)
          : [...store.favoritos, action.payload]
      }

    case "add_vehiculos":
      return {
        ...store,
        vehiculos: action.payload
      }

    case 'add_characters':
      return {
        ...store,
        personajes: action.payload
      }

    case 'add_planetas':
      return {
        ...store,
        planetas: action.payload
      }

    default:
      throw Error('Unknown action.');
  }
}
