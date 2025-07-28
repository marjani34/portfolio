'use client'

import { ParallaxProvider } from 'react-scroll-parallax'

interface ParallaxWrapperProps {
  children: React.ReactNode
}

const ParallaxWrapper = ({ children }: ParallaxWrapperProps) => {
  return (
    <ParallaxProvider>
      {children}
    </ParallaxProvider>
  )
}

export default ParallaxWrapper 