// modules
import xs from 'xstream'
// styles
import classes from './VotePage.css'


export default ({ DOM, props }) => {

  const vdom$ = props
    .map(({ question, choices }) =>
      <div key="vote" className={classes.root}>
        <div className={classes.question}>{ question }</div>
        <div className={classes.choices}>
          { choices.map(choice => (
            <div className={classes['choice-root']}>
              <span className={classes['choice-radio']}></span>
              <span className={classes['choice-title']}>{ choice }</span>
            </div>
          )) }
        </div>
        <button className={classes.vote}>vote</button>
      </div>
    )

  return {
    DOM: vdom$,
  }
}
