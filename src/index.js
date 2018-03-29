// modules
import { run } from '@cycle/run'
import { makeDOMDriver } from '@cycle/dom'
import App from './App.cycle'
import xs from 'xstream'
// style
// import './helper/style/reset.css'



run(App, {
  DOM: makeDOMDriver('#root'),

  props: () => xs.of({
    choices: ['first choice', 'second child', 'third chice'],
    choice: 2,
    votes: [10, 47, 29],
  }),
})
