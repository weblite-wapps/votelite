// modules
import xs from 'xstream'
// styles
import classes from './StatPage.css'


export default ({ DOM, props }) => {

  const vdom$ = props
    .map(({ choices, votes }) => R.zip(choices, votes))
    .map(arr =>
      <div key="stat" className={classes.root}>
        <div className={classes.choices}>
          { arr.map(([choice, vote]) => (
            <div className={classes['choice-root']}>
              <span className={classes['choice-radio']}>{ vote }%</span>
              <span className={classes['choice-title']}>{ choice }</span>
            </div>
          )) }
        </div>
      </div>
    )

  return {
    DOM: vdom$,
  }
}
