// W && R
const { W } = window
import { findVote, findVoteLength } from './helperFunctions'

const handleNormalMode = (start, vue) => {
  W.share.subscribe(votes => {
    vue.votesById = votes || []
    vue.votes = findVoteLength(vue.votesById)
  })

  Promise.all([W.loadData(), W.share.getFromServer([])]).then(data => {
    const [
      {
        user: { name, id },
        creator,
        customize: { question, choices },
      },
    ] = data
    const { index } = findVote(vue.votesById, id)
    vue.vote = index === -1 ? null : index
    vue.userId = id
    vue.userName = name
    vue.question = question
    vue.choices = choices
    vue.creator = creator

    start()
  })
}

export default vue => {
  W.setHooks({
    wappWillStart(start, error, { mode }) {
      if (mode === 'customize') {
        vue.customizeMode = true
        start()
      } else handleNormalMode(start, vue)
    },

    onCustomizeValueChange({ key, value }) {
      if (key === 'question') vue.question = value
      else if (key === 'choices') vue.choices = value
    },
  })
}
