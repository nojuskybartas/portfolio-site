import axios from "axios"
import { NextRouter } from "next/router"

export const getCodeData = async(router: NextRouter) => {
    const file = router.pathname === '/' ? '/index' : router.pathname
    const url = `https://raw.githubusercontent.com/nojuskybartas/portfolio-site/main/pages${file}.tsx`
    const res = await fetch(url)
    const codeData = await res.text()
    return codeData
}

export const getCodeImage = async(code: string) => {
    const response = await fetch('https://sourcecodeshots.com/api/image', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            code: code,
            settings: {
                language: 'js',
                theme: 'dark-plus',
            },
        }),
    });

    const blob = await response.blob()

    return URL.createObjectURL(blob);
}
