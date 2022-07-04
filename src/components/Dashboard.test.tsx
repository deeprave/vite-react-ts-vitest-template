import * as React from 'react'
import {describe, expect, it} from 'vitest'
import {render, screen} from "@testing-library/react"
import {Dashboard} from './Dashboard'


describe('Dashboard', () => {
  it('renders correctly', () => {
    render(<Dashboard/>)
    const h1 = screen.getByRole('header')
    expect(h1).toBeTruthy()
  })
})
