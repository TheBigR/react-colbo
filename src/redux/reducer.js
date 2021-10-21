import * as actions from './actionTypes'

const initialState = {}

export let reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_RATES:
      return state
    case actions.GET_HISTORY:
      return state
    case actions.GET_RATE_BY_SYMBOL:
      return state
    case actions.GET_CRON_JOB_STATUS:
      return state
    case actions.TOGGLE_CRON_JOB:
      return state

    default:
      return state
  }
}
