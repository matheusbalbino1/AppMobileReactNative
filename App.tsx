import React from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from './src/global/styles/theme';
import { EmpresasCadastradasProvider } from './src/contexts/empresas';
import { Routes } from './src/routes';

export default function App() {
    // },
  // "build": {
  //   "development": {
  //     "distribution": "internal",
  //     "android": {
  //       "gradleCommand": ":app:assembleDebug"
  //     },
  //     "ios": {
  //       "buildConfiguration": "Debug"
  //     }
  //   },
  //   "preview": {
  //     "distribution": "internal"
  //   },
  //   "production": {}
  // },
  // "submit": {
  //   "production": {}
  // }
  return (
    <EmpresasCadastradasProvider>
      <ThemeProvider theme={theme}>
        <Routes/>
      </ThemeProvider>
    </EmpresasCadastradasProvider>

  )
}