// modules
import { run } from '@cycle/run'
import xs from 'xstream'
// drivers
import { makeDOMDriver } from '@cycle/dom'
import storeCreator from './helper/functions/store.driver'
// APP
import App from './App.cycle'
// reducers
import reducers from './helper/functions/reducers'
// style
import '!style-loader!css-loader!./helper/style/reset.css'
import '!style-loader!css-loader!./helper/style/main.css'
import '!style-loader!css-loader!./helper/style/global.css'


run(App, {
  DOM: makeDOMDriver('#app'),

  STORE: storeCreator(reducers, {
    question: 'what javascript framework do you prefer?',
    choices: ['first choice', 'second child', 'third chice'],
    votes: [10, 47, 29],
    choice: 2,
    title: 'Votelite',
    isStatPage: false,
  }),
})
