import * as React from 'react'
import {render, screen} from "@testing-library/react";
import {Profile} from './Profile'


describe('Profile', () => {
  it('renders correctly', () => {
    render(<Profile/>)
    const h1 = screen.getByRole('header')
    expect(h1).toBeTruthy()
  })
})
