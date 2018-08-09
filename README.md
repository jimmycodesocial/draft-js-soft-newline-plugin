# Draftjs Soft Newline Plugin
Add support for soft newlines in your draft-js editor.

*This is a plugin for `draft-js-plugins-editor`.*

## Installation

```
npm install @jimmycode/draft-js-soft-newline-plugin
```

## Usage

```js
import createSoftNewLinePlugin from '@jimmycode/draft-js-soft-newline-plugin';
const softNewLinePlugin = createSoftNewLinePlugin();
```

## Example

```js
import React from 'react';
import ReactDOM from 'react-dom';

import Editor from 'draft-js-plugins-editor';
import { EditorState } from 'draft-js';
import createSoftNewLinePlugin from '@jimmycode/draft-js-soft-newline-plugin';

const softNewLinePlugin = createSoftNewLinePlugin();
const plugins = [
  softNewLinePlugin
];

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }
  
  onChange = editorState => this.setState({ editorState });

  render() {
    return (
      <div className="editor">
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          placeholder="Tell a story" />
      </div>
    );
  }
}

ReactDOM.render(<MyEditor />, document.getElementById('root'));
```
