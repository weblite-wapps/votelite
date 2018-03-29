export default (reducers, initialState) => action$ => {

  return {
    state$: action$
      .fold((state, action) => reducers[action.type](state, action.payload), initialState)
  }
}
