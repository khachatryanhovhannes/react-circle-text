import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { CircularText } from '../src'

describe('<CircularText />', () => {
    it('renders a canvas element', () => {
        const { container } = render(<CircularText text="Test" />)
        const canvas = container.querySelector('canvas')
        expect(canvas).toBeInTheDocument()
    })

    it('renders RTL text without crashing', () => {
        const { container } = render(<CircularText text="שלום" rtl />)
        const canvas = container.querySelector('canvas')
        expect(canvas).toBeInTheDocument()
    })
})
