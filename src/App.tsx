import Button from '@mui/material/Button'
import AppBar from './components/AppBar';
import './App.css'
import { Editor } from './components/Editor'
import { EditorProvider, useEditorModel } from './context/editorContext'
import { transform, useHeight, useWidth } from './utils'
import { demo1 } from './utils/demos'


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
    <div className="App">
      <AppBar />
      <Button className="transform-button" onClick={handleClickTransform} variant="contained">Transform</Button>
      <div style={{display: 'flex'}}>
        <div style={{width: "50vw", height: "100vh"}}>
          <Editor 
            layout={{width: width/2, height}} 
            options={{automaticLayout:true, language: 'go', value: demo1}} 
            name='golang' 
          />
        </div>
        <div style={{width: "50vw", height: "100vh"}}>
          <Editor 
            layout={{width: width/2, height}} 
            options={{automaticLayout:true, language: 'typescript', readOnly: true}} 
            name='typescript' 
          />
        </div>
      </div>
    </div>
  )
}

export default () => {
  return <EditorProvider><App /></EditorProvider>
}
