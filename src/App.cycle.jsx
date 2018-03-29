// modules
import xs from 'xstream'
// componentss
import HeaderComponent from './components/Header/Header.cycle'
import VotePageComponent from './components/VotePage/VotePage.cycle'
import StatPageComponent from './components/StatPage/StatPage.cycle'
// styles
import classes from './App.css'
// R
const { R } = window


export default ({ DOM, STORE: { state$ } }) => {
  const { DOM: HeaderDOM$, STORE: HeaderSTORE$ } =
    HeaderComponent({ DOM, props: state$.map(R.pick(['title', 'isStatPage'])) })

  const { DOM: VotePageDOM$ } =
    VotePageComponent({ DOM, props: state$.map(R.pick(['choices', 'question'])) })

  const { DOM: StatPageDOM$ } =
    StatPageComponent({ DOM, props: state$.map(R.pick(['choices', 'votes'])) })


  const vdom$ = xs.combine(HeaderDOM$, VotePageDOM$, StatPageDOM$, state$.map(R.prop('isStatPage')))
    .map(([Header, VotePage, StatPage, isStatPage]) =>
      <div className={classes.root}>
        { Header }
        { isStatPage ? StatPage : VotePage }
      </div>
    )

  return {
    DOM: vdom$,
    STORE: HeaderSTORE$,
  }
}
