import * as React from 'react'
import {render, screen} from "@testing-library/react";
import {Contact} from './Contact'


describe('Contact', () => {
  it('renders correctly', () => {
    render(<Contact/>)
    const h1 = screen.getByRole('header')
    expect(h1).toBeTruthy()
  })
})
