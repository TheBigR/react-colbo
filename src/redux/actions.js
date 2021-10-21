import * as actions from './actionTypes'
import currencyApi from '../apis/currencyApi'

export const getExcerciseRates = () => async (dispatch) => {
  const response = await currencyApi.get('/currecny/excersize')
  dispatch({
    type: actions.GET_RATES,
    payload: response.data,
  })
}

export const getRateBySymbol = (symbol) => async (dispatch) => {
    const response = await currencyApi.get(`/currency/by-symbol?symbol=${symbol}`)
}

export const getHistory = () => async (dispatch) => {
    const response = await currencyApi.get('/currency/all-history')
}

export const getCronJobStatus = () => async (dispatch) => {
    const response = await currencyApi.get('/ops/cron-job-status')
}

export const toggleCronJob = () => async (dispatch) => {
    const response = await currencyApi.get('/ops/toggle-cron-job')
}
