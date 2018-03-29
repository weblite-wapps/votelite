// modules
import xs from 'xstream'


export default sources => {
  const vdom$ = xs.of(
    <div>
      Vs
    </div>
  )

  return {
    DOM: vdom$,
  }
}
