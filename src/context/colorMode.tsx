import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react'
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import * as monaco from 'monaco-editor';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function ToggleColorMode(props: PropsWithChildren<{}>) {
  const [mode, setMode] = useState<'light' | 'dark'>(localStorage.getItem('color-mode') as any || 'light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  useEffect(() => {
    monaco.editor.setTheme(mode === 'dark' ? 'vs-dark' : 'vs')
    localStorage.setItem('color-mode', mode)
  }, [mode])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {props.children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export const ColorModeButton = () => {
  const mode = useContext(ColorModeContext)
  const theme = useTheme()

  return <IconButton onClick={() => mode.toggleColorMode()}>
    {
      theme.palette.mode === 'dark' ?
      <Brightness7Icon /> :
      <Brightness4Icon />
    }
  </IconButton>
}