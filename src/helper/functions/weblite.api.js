// W && R
const { W } = window
import { findVote, findVoteLength } from '../functions/findVote'

const handleNormalMode = (start, vue) => {
  W.share.subscribe(votes => {
    // console.log("votes ", votes)
    vue.votesById = votes || []
    // console.log(vue.votes)
    // console.log(findVoteLength(vue.votesById))
    vue.votes = findVoteLength(vue.votesById)
  })

  Promise.all([W.loadData(), W.share.getFromServer([])]).then(data => {
    const [
      {
        // localdb,
        user: { name, id },
        customize: { question, choices },
      },
    ] = data
    // console.log("localdb: ", localdb)
    // console.log("question: ", question)
    // console.log("choices: ", choices)
    // console.log("data: ", data)
    // console.log("user: ", user)
    // console.log("id: ", id)
    const { index } = findVote(vue.votesById, id)
    vue.vote = index === -1 ? null : index
    vue.userId = id
    vue.question = question
    vue.choices = choices

    // if (localdb !== undefined) vue.vote = localdb
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
