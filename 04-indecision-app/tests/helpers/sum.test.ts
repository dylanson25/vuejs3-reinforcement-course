// sum.test.js
import { expect, test } from 'vitest'
import { sum, addArray } from '../../src/helpers/sum.helpers'
import { describe } from 'node:test'

test('adds 1 + 2 to equal 3', () => {
  // Preparacion
  const a = 1
  const b = 2

  // Estimulo
  const result = sum(a, b)

  // Comportamiento esperado
  expect(result).toBe(a + b)
})

describe('Add array Function', () => {
  test('Should return the proper value', () => {
    // Preparacion
    const numbers: number[] = [1, 2, 3, 4, 5, 6]

    // Estimulo
    const result = addArray(numbers)

    // Comportamiento esperado
    expect(result).toBe(21)
  })
  test('Should return 0', () => {
    // Preparacion
    const numbers: number[] = []

    // Estimulo
    const result = addArray(numbers)

    // Comportamiento esperado
    expect(result).toBe(0)
  })
})
