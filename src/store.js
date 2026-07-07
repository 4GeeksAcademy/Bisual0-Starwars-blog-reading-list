export const initialStore=()=>{
  return{
    character:{},
    personajes:[],
    planetas:[],
    vehiculos:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_characters':
      return {
        ...store,
        personajes: action.payload
      };
    case 'set_character':
      return {
        ...store,
        character: action.payload
      }
    default:
      throw Error('Unknown action.');
  }    
}
