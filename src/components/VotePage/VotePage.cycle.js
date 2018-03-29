// modules
import xs from 'xstream'


export default ({ DOM, props }) => {

  const vdom$ = props
    .map(({ choices }) =>
      <div>
        { choices.map(choice => <div>{ choice }</div>) }
        <button>vote</button>
      </div>
    )

  return {
    DOM: vdom$,
  }
}
