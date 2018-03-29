// modules
import { run } from '@cycle/run'
import { makeDOMDriver } from '@cycle/dom'
import App from './App.cycle'
import xs from 'xstream'
// style
import '!style-loader!css-loader!./helper/style/reset.css'
import '!style-loader!css-loader!./helper/style/main.css'
import '!style-loader!css-loader!./helper/style/global.css'


run(App, {
  DOM: makeDOMDriver('#app'),

  state$: () => xs.of({
    choices: ['first choice', 'second child', 'third chice'],
    choice: 2,
    votes: [10, 47, 29],
    title: 'Votelite',
    page: 'vote',
  }),
})
