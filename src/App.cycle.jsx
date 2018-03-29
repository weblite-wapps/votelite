// modules
import xs from 'xstream'
// componentss
import HeaderComponent from './components/Header/Header.cycle'
// styles
import classes from './App.css'
// R
const { R } = window


export default ({ DOM, STORE }) => {
  const Header$ = HeaderComponent({ DOM, props: STORE.state$.map(R.pick(['title', 'isStatPage'])) }).DOM


  const vdom$ = Header$.map(Header => {
    return (
      <div className={classes.root}>
        { Header }
      </div>
    )
  })

  const store$ = DOM.select('.page-icon').events('click')
    .mapTo({ type: 'TOGGLE_PAGE' })

  return {
    DOM: vdom$,
    STORE: store$,
  }
}
