import * as R from 'ramda'

export const findVote = (votes, id) => R.reduce((acc, item) =>
    R.find(R.propEq("id", id), item) ?
        { index: acc.cnt, cnt: acc.cnt + 1 } :
        { index: acc.index, cnt: acc.cnt + 1 },
    { index: -1, cnt: 0 })(votes)



// R.reduce((acc, item) =>
//     R.includes(id, item) ? { index: acc.cnt, cnt: acc.cnt + 1 } : { index: acc.index, cnt: acc.cnt + 1 }
//     , { index: -1, cnt: 0 })(votes)
export const findVoteLength = R.reduce((acc, item) => acc.concat(R.length(item))
    , [])


export const getMembers = (arr) => R.reduce((acc, item) => acc.concat(item), [])(arr)