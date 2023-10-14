import { cleanup, render, screen } from '@solidjs/testing-library'
import { describe, expect, it, afterEach, beforeEach } from 'vitest'
import '@testing-library/jest-dom'
import { NavComponent } from './Navbar'
import { data } from '../data'

describe('Navbar', () => {
    afterEach(() => {
        cleanup()
    })

    beforeEach(() => {
        const navData = data.find((item) => item._type === 'nav')
        if (!navData || navData._type !== 'nav') {
            throw new Error('Expected nav data not found')
        }

        render(() => <NavComponent navItems={navData.navItems} />)
    })

    it('it should render nav component', () => {
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent('Open Menu')
    })
})
