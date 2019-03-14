// W && R
const { W } = window

const handleNormalMode = (start, vue) => {
  W.share.subscribe(votes => {
    vue.votes = votes || []
  })

  Promise.all([W.loadData(), W.share.getFromServer([])]).then(data => {
    const [
      {
        localdb,
        customize: { question, choices },
      },
    ] = data

    vue.question = question
    vue.choices = choices

    if (localdb !== undefined) vue.vote = localdb
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
