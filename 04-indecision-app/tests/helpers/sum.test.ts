// sum.test.js
import { expect, test } from 'vitest'
import { sum } from '../../src/helpers/sum.helpers'

test('adds 1 + 2 to equal 3', () => {
  // Preparacion
  const a = 1
  const b = 2

  // Estimulo
  const result = sum(a, b)

  // Comportamiento esperado
  expect(result).toBe(a + b)
})
