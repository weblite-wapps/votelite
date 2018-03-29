// modules
import xs from 'xstream'


export default sources => {
  const vdom$ = xs.of(
    <div>Votelite</div>
  )

  return {
    DOM: vdom$,
  }
}
