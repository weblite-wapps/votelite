// modules
import xs from 'xstream'
import isolate from '@cycle/isolate'
// styles
import classes from './Header.css'


export default ({ DOM, props }) => {
  const store$ = DOM.select('.page-icon').events('click')
    .mapTo({ type: 'TOGGLE_PAGE' })

  const vdom$ = props.map(({ title, isStatPage }) =>
    <div className={classes.root}>
      <span>{ title }</span>
      <i className="page-icon">{ isStatPage ? 'poll' : 'pie_chart' }</i>
    </div>
  )

  return {
    DOM: vdom$,
    STORE: store$,
  }
}
