import { VFC, useRef, useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import * as monaco from 'monaco-editor';
import { useEditorModel } from '../../context/editorContext';

interface EditorProps {
	name: string,
	layout?: {
		width: number
		height: number
	},
	readonly?: boolean
	options: monaco.editor.IStandaloneEditorConstructionOptions
}

export const Editor = (props: EditorProps) => {
	const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
	const monacoEl = useRef(null);
	const { actions } = useEditorModel()

	useEffect(() => {
		if (monacoEl && !editor) {
			const editor = (
				monaco.editor.create(monacoEl.current!, props.options)
			);
			
			setEditor(editor)
			actions.setEditor(props.name, editor)
		}

		return () => editor?.dispose();
	}, [monacoEl.current]);

	useEffect(() => {
		editor?.layout(props.layout)
	}, [props?.layout?.width, props?.layout?.height, editor])

	return <div style={{textAlign: "left"}} ref={monacoEl}></div>;
};