const { W, R } = window

export const dispatch = (qlite, initial) => W.share.dispatch([], qlite, initial)

export const addVote = (index, length) =>
  dispatch(['__adjust', [['__add', [1]], index]], R.repeat(0, length))
