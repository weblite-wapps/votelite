const { W, R } = window

export const dispatch = (qlite, initial) => W.share.dispatch([], qlite, initial)

export const addVote = (index, length, name, id) => {
  dispatch(
    ['__adjust', [['__append', [{ name, id }]], index]],
    R.repeat([], length),
  )
}
