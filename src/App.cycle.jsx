// modules
import xs from 'xstream'
// componentss
import HeaderComponent from './components/Header/Header.cycle'
// styles
import classes from './App.css'
// R
const { R } = window


export default ({ DOM, STORE: { state$ } }) => {
  const Header$ = HeaderComponent({ DOM, props: state$.map(R.pick(['title', 'page'])) }).DOM


  const vdom$ = Header$.map(Header => {
    return (
      <div className={classes.root}>
        { Header }
      </div>
    )
  })

  const store$ = xs
    .periodic(2000)
    .take(1)
    .mapTo({ type: 'CHANGE_PAGE', payload: { page: 'stat' } })

  return {
    DOM: vdom$,
    STORE: store$,
  }
}
