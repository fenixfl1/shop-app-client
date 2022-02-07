import React from 'react'
import Routes from './routes'
import './css/index.css'
import { defaultTheme } from './themes'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

function App(): React.ReactElement {
  return (
    // <Provider>
    <ThemeProvider theme={defaultTheme}>
      <Routes />
    </ThemeProvider>
    // </Provider>
  )
}

export default App
