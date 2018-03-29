// modules
import xs from 'xstream'


export default ({ DOM, props }) => {

  const vdom$ = props
    .map(({ choices, votes }) => R.zip(choices, votes))
    .map(arr =>
      <div key="stat">
        { arr.map(([choice, vote]) => <div>{ choice } { vote }</div>) }
      </div>
    )

  return {
    DOM: vdom$,
  }
}
