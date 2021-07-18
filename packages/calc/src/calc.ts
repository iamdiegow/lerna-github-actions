import add from 'add'
import subtract from 'subtract'

type calcResult = {
  addResult: number
  subtractResult: number
}

function calc(x: number, y: number): calcResult {
  console.log(`adding ${x} to ${y}`)
  const addResult = add(x, y)
  console.log(`result = ${addResult}`)
  console.log(`subtracting ${x} to ${y}`)
  const subtractResult = subtract(x, y)
  console.log(`result = ${subtractResult}`)
  return {
    addResult,
    subtractResult
  }
}

export default calc
