#!/usr/bin/env node

const { createSelector } = require('reselect')

const store = {
  state: {
    numbers: [ 1, 2, 3, 4, 5 ],
    filter: 'odd',
  },
  getState() { return {...this.state} },
  setState(next) { this.state = next },
}

// selectors
const getNumbers = (state) => state.numbers
const getFilter = (state) => state.filter
const getFiltered = (numbers, filter) => {
  console.log('⚠️  calculating getFiltered')
  return numbers.filter(number =>
    filter === 'odd'
      ? number % 2 !== 0
      : number % 2 === 0
  )
}

// Without a memoized selector, getFiltered is calculated every time.
console.log('\ngetFiltered - calculates each time')
console.log(getFiltered(getNumbers(store.getState()), getFilter(store.getState())))
console.log(getFiltered(getNumbers(store.getState()), getFilter(store.getState())))
console.log(getFiltered(getNumbers(store.getState()), getFilter(store.getState())))

console.log('\nchanging state')
store.setState({ ...store.getState(), filter: 'even', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9] })
console.log(getFiltered(getNumbers(store.getState()), getFilter(store.getState())))
console.log(getFiltered(getNumbers(store.getState()), getFilter(store.getState())))
console.log(getFiltered(getNumbers(store.getState()), getFilter(store.getState())))

const memoizedGetFiltered = createSelector(
  getNumbers,
  getFilter,
  getFiltered
)

// These are the same functions, now memoized with reselect.
console.log('\nmemoizedGetFiltered - only recalcs when inputs change')
console.log(memoizedGetFiltered(store.getState()))
console.log(memoizedGetFiltered(store.getState()))
console.log(memoizedGetFiltered(store.getState()))

// console.log(state)
console.log('\nchanging state')
store.setState({ ...store.getState(), filter: 'odd', numbers: [1, 2, 3] })
console.log(memoizedGetFiltered(store.getState()))
console.log(memoizedGetFiltered(store.getState()))
console.log(memoizedGetFiltered(store.getState()))
