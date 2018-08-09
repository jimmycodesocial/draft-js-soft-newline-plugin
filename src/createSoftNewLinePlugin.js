import { RichUtils, Modifier, EditorState } from 'draft-js';
import isSoftNewlineEvent from 'draft-js/lib/isSoftNewlineEvent';

export default () => ({
  handleReturn: (event, editorState, { setEditorState }) => {
    if (isSoftNewlineEvent(event)) {
      const selection = editorState.getSelection();

      if (selection.isCollapsed()) {
        setEditorState(RichUtils.insertSoftNewline(editorState));
      } else {
        const content = editorState.getCurrentContent();
        let newContent = Modifier.removeRange(content, selection, 'forward');
        const newSelection = newContent.getSelectionAfter();
        const block = newContent.getBlockForKey(newSelection.getStartKey());

        newContent = Modifier.insertText(
          newContent,
          newSelection,
          '\n',
          block.getInlineStyleAt(newSelection.getStartOffset()),
          null,
        );

        setEditorState(
          EditorState.push(editorState, newContent, 'insert-fragment')
        );
      }

      return 'handled';
    }

    return 'not-handled';
  }
});
