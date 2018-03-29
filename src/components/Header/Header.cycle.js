// modules
import xs from 'xstream'
import isolate from '@cycle/isolate'
// styles
import classes from './Header.css'


export default ({ props }) => {
  const vdom$ = props.map(({ title, isStatPage }) =>
    <div className={classes.root}>
      <span>{ title }</span>
      <i className="page-icon">{ isStatPage ? 'poll' : 'pie_chart' }</i>
    </div>
  )

  return {
    DOM: vdom$,
  }
}
