import React, { useEffect, useRef } from 'react'
import { renderCircularText } from '../../renderers/circular-text-renderer'
import { exportCanvas } from '../../utils/export'
import type { CircularTextProps } from '../../types'

const CircularText: React.FC<CircularTextProps> = ({
    text,
    radius = 150,
    fontSize = 24,
    fontFamily = 'Arial',
    fontWeight = 'normal',
    color = '#000',
    angleDeg = 0,
    width = 400,
    height = 400,
    direction = 'clockwise',
    flip = false,
    align = 'center',
    rtl = false,
    letterSpacing = 0,
    exportAs,
    onExport,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        renderCircularText(ctx, {
            text, radius, fontSize, fontFamily, fontWeight, color,
            angleDeg, direction, flip, align, rtl, letterSpacing, width, height
        })

        if (exportAs && onExport) {
            onExport(exportCanvas(canvas, exportAs))
        }
    }, [
        text, radius, fontSize, fontFamily, fontWeight, color,
        angleDeg, width, height, direction, flip, align, rtl, letterSpacing, exportAs, onExport
    ])

    return <canvas ref={canvasRef} width={width} height={height} />
}

export default CircularText
