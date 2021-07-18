import add from './add'

describe('add', () => {
  it('exports a function', () => {
    expect(typeof add).toBe('function')
  })

  it('adds two numbers', () => {
    expect(add(2, 2)).toEqual(4)
  })
})
