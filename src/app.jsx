// modules
import xs from 'xstream'


export function App (sources) {
  const vdom$ = xs.of(
    <div>Votelite</div>
  )

  return {
    DOM: vdom$
  }
}
