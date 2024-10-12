import styles from "./Loader.module.scss"
import { ILoaderProps } from "./types"
import { useEffect, useRef, useState } from "react"

const Loader = ({ loading }: ILoaderProps) => {
    const [isReady, setIsReady] = useState(false)
    const calledTimes = useRef(0)

    useEffect(() => {
        if (loading && calledTimes.current > 0) {
            setIsReady(false)
            setTimeout(() => {
                setIsReady(true)
                calledTimes.current++
            }, 300)
        }
    }, [loading])

    useEffect(() => {
        setIsReady(false)
        setTimeout(() => {
            setIsReady(true)
            calledTimes.current++
        }, 300)
    }, [])

    if (isReady && !loading) {
        return null
    }

    return (
        <div className={styles.container}>
            <svg 
                className={styles.circle} 
                width="1em" 
                height="1em" 
                viewBox="0 0 24 24"
            >
                <path 
                    fill="currentColor" 
                    d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
                >
                </path>
            </svg>
        </div>
    )
}

export default Loader
