import add from 'add'
import subtract from 'subtract'

type calcResult = {
  addResult: number
  subtractResult: number
}

function calc(x: number, y: number): calcResult {
  const addResult = add(x, y)
  const subtractResult = subtract(x, y)
  return {
    addResult,
    subtractResult
  }
}

export default calc
