export function kmp(pattern: string, text: string): number[] {
    const results: number[] = []
    const t = text.toLowerCase()
    const p = pattern.toLowerCase()

    // build failure function
    const failure = Array(p.length).fill(0)
    let j = 0
    for (let i = 1; i < p.length; i++) {
        while (j > 0 && p[i] !== p[j]) j = failure[j - 1]
        if (p[i] === p[j]) j++
        failure[i] = j
    }

    // search
    j = 0
    for (let i = 0; i < t.length; i++) {
        while (j > 0 && t[i] !== p[j]) j = failure[j - 1]
        if (t[i] === p[j]) j++
        if (j === p.length) {
            results.push(i - p.length + 1)  // index ditemukan
            j = failure[j - 1]
        }
    }

    return results  // array index dimana pattern ditemukan
}