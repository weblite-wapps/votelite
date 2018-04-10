// W && R
const { W, R } = window


export default (vueRoot) => {
  /* change mode */
  if (W.mode === 'customize') { vueRoot.customizeMode = true }


  /* Load localDB and Customization Data */
  // get localDB And Customize Value
  W.loadData().then(({ localdb, customize }) => {
    vueRoot.question = customize.question
    vueRoot.choices = customize.choices
    vueRoot.name = name
    if(localdb !== undefined) vueRoot.vote = localdb
  })


  /* ShareDB */
  // get votes from shareDB Server
  W.share.getFromServer([]).then(() => W.start())
  // shareDB sunbscription
  W.share.subscribe((votes) => { vueRoot.votes = votes || [] })


  /* Customization */
  // start instantly if mode is customized
  vueRoot.customizeMode && W.start()
  // change on customization
  W.onChangeValue(({ key, value }) => {
    if (key === 'question') vueRoot.question = value
    else if (key === 'choices') vueRoot.choices = value
  })
  // handle customize object
  W.changeCustomize(R.identity)
}
