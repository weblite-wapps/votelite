// modules
import xs from 'xstream'
// componentss
import HeaderComponent from './components/Header/Header.cycle'
// styles
import classes from './App.css'
// R
const { R } = window


export default ({ DOM, state$ }) => {
  const Header$ = HeaderComponent({ DOM, props: state$.map(R.prop('title')) }).DOM


  const vdom$ = Header$.map(Header => {
    return (
      <div className={classes.root}>
        { Header }
      </div>
    )
  })


  return { DOM: vdom$ }
}
