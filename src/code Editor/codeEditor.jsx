import React,{forwardRef,useImperativeHandle} from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import "./codeEditor.css";

const CodeEditor = forwardRef((props, ref) => {

  const [code, setCode] = React.useState(props.code);

  useImperativeHandle(ref, () => ({
    updateValue(val) {
      setCode(val);
    }
  }));

  return (
    <Editor id='codeBlock'
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        width:"100%",
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
        borderLeft: "5px solid #00bfa5",
        borderRadius: "5px",
        margin: "1.2em 0em"
      }}
    />
  );
})

export default CodeEditor;