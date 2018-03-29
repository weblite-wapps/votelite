// modules
import xs from 'xstream'
// componentss
import HeaderComponent from './components/Header/Header.cycle'
// styles
import classes from './App.css'
// R
const { R } = window


export default ({ DOM, STORE }) => {
  const { DOM: HeaderDOM$, STORE: HeaderSTORE$ } =
    HeaderComponent({ DOM, props: STORE.state$.map(R.pick(['title', 'isStatPage'])) })

  const vdom$ = HeaderDOM$.map(Header => {
    return (
      <div className={classes.root}>
        { Header }
      </div>
    )
  })

  return {
    DOM: vdom$,
    STORE: HeaderSTORE$,
  }
}
