import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider } from '@mantine/core'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider 
      withGlobalStyles 
      withNormalizeCSS
      theme={{
        breakpoints: {
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
        },
      }}

    >
      <App />
    </MantineProvider>
  </React.StrictMode>
)
