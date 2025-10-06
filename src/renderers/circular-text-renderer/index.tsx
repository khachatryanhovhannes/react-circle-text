import { getRenderTextArray } from "../../utils/text"
import { calculateTextAngularLength, calculateTextStartAngle } from '../../utils/math'

interface RenderProps {
    text: string
    radius: number
    fontSize: number
    fontFamily: string
    fontWeight: string
    color: string
    angleDeg: number
    direction: 'clockwise' | 'counter-clockwise'
    flip: boolean
    align: 'start' | 'center' | 'end'
    rtl: boolean
    letterSpacing: number
    width: number
    height: number
}

export function renderCircularText(ctx: CanvasRenderingContext2D, props: RenderProps) {
    const {
        text, radius, fontSize, fontFamily, fontWeight, color,
        angleDeg, direction, flip, align, rtl, letterSpacing, width, height
    } = props

    const cx = width / 2
    const cy = height / 2
    const clockwise = direction === 'clockwise' ? 1 : -1

    ctx.clearRect(0, 0, width, height)
    ctx.save()

    ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
    ctx.fillStyle = color
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'center'

    const renderText = getRenderTextArray(text, rtl)
    const totalAngularLength = calculateTextAngularLength(ctx, text, radius, letterSpacing, rtl)
    const startAngle = calculateTextStartAngle(angleDeg, totalAngularLength, align, direction)

    let current = startAngle
    for (const ch of renderText) {
        const wChar = ctx.measureText(ch).width + letterSpacing
        const ang = (wChar / radius) * clockwise
        const mid = current + ang / 2

        ctx.save()
        ctx.translate(cx + radius * Math.cos(mid), cy + radius * Math.sin(mid))
        if (flip) ctx.rotate(mid + (clockwise === 1 ? Math.PI / 2 : -Math.PI / 2))
        else ctx.rotate(mid - Math.PI / 2)
        ctx.fillText(ch, 0, 0)
        ctx.restore()

        current += ang
    }

    ctx.restore()
}
