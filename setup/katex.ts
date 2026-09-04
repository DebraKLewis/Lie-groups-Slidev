import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    maxExpand: 2000,
    // Add other KaTeX options here

    macros: {
        "\\R": "\\mathbb{R}",
        "\\C": "\\mathbb{C}",
        "\\Z": "\\mathbb{Z}",
        "\\fg": "\\mathfrak{g}",
        "\\fh": "\\mathfrak{h}",
        "\\fk": "\\mathfrak{k}",
        "\\Ad": "\\text{Ad}",
        "\\ad": "\\text{ad}",
        "\\sands": "\\qquad \\text{and} \\qquad",
        "\\av": "\\mathbf{a}",
        "\\bv": "\\mathbf{b}",
        "\\fv": "\\mathbf{f}",
        "\\pv": "\\mathbf{p}",
        "\\vv": "\\mathbf{v}",
        "\\xv": "\\mathbf{x}",
        "\\yv": "\\mathbf{y}",
        "\\idm": "\\mathbb{1}",
        "\\calF": "\\mathcal{F}",
        "\\calX": "\\mathcal{X}",
        "\\lp": "\\left (",
        "\\rp": "\\right )",
        "\\setdef": "#1 = \\left \\{ #2 \\in #3 \: #4 \\right \\}",
        "\\diffM": "\\text{Diff}(M)",
        "\\smallfrac": "{\\textstyle {#1 \\over #2}}",
        "\\half": "\\smallfrac 1 2",
        "\\dep": "{\\smallfrac {d \\ }{d \\epsilon} \\left . #1 \\right |_{\\epsilon = 0}",
        "\\eqa": "\\begin{align} #1 \\end{align}"
    }
  }
})