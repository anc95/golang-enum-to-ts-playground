import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import AppBar from './components/AppBar';
import './App.css'
import { ToggleColorMode } from './context/colorMode'
import { Editor } from './components/Editor'
import { EditorProvider, useEditorModel } from './context/editorContext'
import { transform, useHeight, useWidth } from './utils'
import { demo1 } from './utils/demos'

const GridContainer = styled(Grid)(() => {
  return {
    marginTop: "10px"
  }
})

const Container = styled('div')(({theme}) => {
  return {
    background: theme.palette.mode === 'dark' ? '#121212' : ''
  }
})

function App() {
  const width = useWidth()
  const height = useHeight()
  const { actions } = useEditorModel()

  const handleClickTransform = async () => {
    const golang = actions.getEditor('golang')
    const result = await transform(golang.getValue())
    actions.getEditor('typescript').setValue(result)
  }

  return (
    <Container className="App">
      <AppBar />
      <Button className="transform-button" onClick={handleClickTransform} variant="contained">Transform</Button>
      <GridContainer container spacing={2} rowSpacing={2}>
        <Grid item xs={6}>
          <Editor 
            layout={{width: width/2, height}} 
            options={{automaticLayout:true, language: 'go', value: demo1, theme: 'my-theme'}} 
            name='golang'
          />
        </Grid>
        <Grid item xs={6}>
          <Editor 
            layout={{width: width/2, height}} 
            options={{automaticLayout:true, language: 'typescript', readOnly: true}} 
            name='typescript' 
          />
        </Grid>
      </GridContainer>
    </Container>
  )
}

export default () => {
  return <ToggleColorMode>
    <EditorProvider>
      <App />
    </EditorProvider>
  </ToggleColorMode>
}
