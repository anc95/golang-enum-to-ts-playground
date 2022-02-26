import React, { createContext, useContext, useState } from "react";
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

const EditorContext = createContext<{
  state: Record<string, monaco.editor.IStandaloneCodeEditor>
  actions: {
    setEditor: (id: string, editor: monaco.editor.IStandaloneCodeEditor) => void,
    getEditor: (id: string) => monaco.editor.IStandaloneCodeEditor
  }
}>({} as any)

const useEditorModel = () => {
  console.log(useContext(EditorContext))
  return useContext(EditorContext)
}

const EditorProvider = (props: React.PropsWithChildren<{}>) => {
  const [editors, setEditors] = useState({})
  const setEditor = (id: string, editor: monaco.editor.IStandaloneCodeEditor) => {
    editors[id] = editor
    setEditors({...editors})
  }
  const getEditor = id => editors[id]

  return <EditorContext.Provider value={{state: editors, actions: { setEditor, getEditor }}}>{props.children}</EditorContext.Provider>
}


export { EditorProvider, useEditorModel }
