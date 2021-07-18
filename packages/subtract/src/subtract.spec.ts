import subtract from './subtract'

describe('subtract', () => {
  it('exports a function', () => {
    expect(typeof subtract).toBe('function')
  })

  it('subtract two numbers', () => {
    expect(subtract(2, 2)).toEqual(0)
  })
})
