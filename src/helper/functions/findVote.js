import * as R from 'ramda'

export const findVote = (votes, id) => R.reduce((acc, item) =>
    R.includes(id, item) ? { index: acc.cnt, cnt: acc.cnt + 1 } : { index: acc.index, cnt: acc.cnt + 1 }
    , { index: -1, cnt: 0 })(votes)

// => console.log("votes , id ", votes, id)


export const findVoteLength = R.reduce((acc, item) => acc.concat(R.length(item))
    , [])