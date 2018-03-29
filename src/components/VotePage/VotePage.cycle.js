// modules
import xs from 'xstream'
// styles
import classes from './VotePage.css'


export default ({ DOM, props }) => {

  const vdom$ = props
    .map(({ question, choices }) =>
      <div key="vote" className={classes.root}>
        <div className={classes.question}>{ question }</div>
        { choices.map(choice => <div>{ choice }</div>) }
        <button>vote</button>
      </div>
    )

  return {
    DOM: vdom$,
  }
}
