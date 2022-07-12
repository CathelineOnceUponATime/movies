/* eslint-disable no-redeclare */
/* eslint no-undef: "error" */

import { movies$ } from '../data/movies'

const dataFetching = () => ({ type: 'loading' })
const dataError = () => ({ type: 'error' })
const recupereData = (data) => ({ type: 'recupere', payload: data })

export function recupereMovies () {
  return function (dispatch) {
    try {
      dispatch(dataFetching())
      movies$.then(function (data) {
          dispatch(recupereData(data))
      })
    } catch (error) {
      dispatch(dataError())
    }
  }
}

