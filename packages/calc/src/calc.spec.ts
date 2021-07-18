import calc from './calc'

describe('calc', () => {
  it('exports a function', () => {
    expect(typeof calc).toBe('function')
  })

  it('return an object with addResult property', () => {
    const results = calc(2, 2)
    expect(results).toHaveProperty('addResult')
  })

  it('return an object with subtractResult property', () => {
    const results = calc(2, 2)
    expect(results).toHaveProperty('subtractResult')
  })

  it('do the right calculations', () => {
    const results = calc(2, 2)
    expect(results.addResult).toEqual(4)
    expect(results.subtractResult).toEqual(0)
  })
})
