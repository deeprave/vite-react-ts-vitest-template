import * as React from 'react'
import {describe, expect, it} from 'vitest'
import {render, screen} from "@testing-library/react"
import {About} from './About'


describe('About', () => {
  it('renders correctly', () => {
    render(<About/>)
    const h1 = screen.getByRole('header')
    expect(h1).toBeTruthy()
  })
})
