import {useRef, useState, useEffect} from 'react'

 const useElementOnScreen = (option: any) => {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const callbackFunc = (entries: any, observer: any): void => {
        const [ entry ] = entries
        setIsVisible(entry.isIntersecting)
        if (entry.isIntersecting) {
            observer.unobserve(entry.target)
        }
    }

    useEffect(()=> {
        const Observer = new IntersectionObserver(callbackFunc, option)
        if (containerRef.current) Observer.observe(containerRef.current)
        console.log('hook rendered')
        return () => {
            if (containerRef.current) Observer.unobserve(containerRef.current)
        }
    }, [containerRef.current])

    return [ containerRef, isVisible ] as [ typeof containerRef, typeof isVisible ]
}

export default useElementOnScreen