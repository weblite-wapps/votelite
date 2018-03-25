import { run } from '@cycle/run'
import { makeDOMDriver } from '@cycle/dom'
import { App } from './app'


run(App, {
  DOM: makeDOMDriver('#root')
})
