// modules
import xs from 'xstream'
// componentss
import HeaderComponent from './components/Header/Header.cycle'
import VotePageComponent from './components/VotePage/VotePage.cycle'
// styles
import classes from './App.css'
// R
const { R } = window


export default ({ DOM, STORE: { state$ } }) => {
  const { DOM: HeaderDOM$, STORE: HeaderSTORE$ } =
    HeaderComponent({ DOM, props: state$.map(R.pick(['title', 'isStatPage'])) })

  const { DOM: VotePageDOM$ } =
    VotePageComponent({ DOM, props: state$.map(R.pick(['choices'])) })


  const vdom$ = xs.combine(HeaderDOM$, VotePageDOM$)
    .map((Header, VotePage) =>
      <div className={classes.root}>
        { Header }
        { VotePage }
      </div>
    )

  return {
    DOM: vdom$,
    STORE: HeaderSTORE$,
  }
}
