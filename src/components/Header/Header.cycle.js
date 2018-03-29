// modules
import xs from 'xstream'
import isolate from '@cycle/isolate'
// styles
import classes from './Header.css'


export default ({ props }) => {
  const vdom$ = props.map(({ title, page }) =>
    <div className={classes.root}>
      <span>{ title }</span>
      <i>{ page === 'vote' ? 'pie_chart' : 'poll' }</i>
    </div>
  )

  return {
    DOM: vdom$,
  }
}
