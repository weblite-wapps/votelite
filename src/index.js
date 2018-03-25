// modules
import { run } from '@cycle/run'
import { makeDOMDriver } from '@cycle/dom'
import Main from './main'
import xs from 'xstream'


run(Main, {
  DOM: makeDOMDriver('#root'),

  props: () => xs.of({
    choices: ['first choice', 'second child', 'third chice'],
    userChoices: [],
    votes: [10, 47, 98],
  }),
})
