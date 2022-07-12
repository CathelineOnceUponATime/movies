import { initialeState } from './store'

/**
 * Function reducer
 * @param {String} state default initialeState
 * @param {String} action action of state
 * switch in case of type of action the state has update
 */
export function reducer (state = initialeState, action) {
  switch (action.type) {
    case 'error' : return { ...state, status: 'error' }
    case 'loading' :
      return { ...state, status: 'loading' }
    case 'recupere' : {
      return { ...state, movies: action.payload, status: 'connexion' }
    }
    default:
  }
  return state
}
