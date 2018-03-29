// modules
import { run } from '@cycle/run'
import { makeDOMDriver } from '@cycle/dom'
import App from './App.cycle'
import xs from 'xstream'


run(App, {
  DOM: makeDOMDriver('#root'),

  props: () => xs.of({
    choices: ['first choice', 'second child', 'third chice'],
    userChoices: [],
    votes: [10, 47, 98],
  }),
})
