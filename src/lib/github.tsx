import { NextRouter, useRouter } from "next/router"
import { Children, cloneElement, ReactElement, ReactNode } from "react"


export const getCodeData = async(router:NextRouter) => {
    const file = router.pathname === '/' ? '/index' : router.pathname
    const location = '/pages' + file
    console.log(location)
    const res = await fetch('https://raw.githubusercontent.com/nojuskybartas/cv/main' + location)
    const codeData = await res.text()
    
    return codeData
}
