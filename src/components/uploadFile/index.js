import React from 'react';
import DocumentIcon from '../ui/documentIcon';

const UploadButton = () => {
  const inputRef = React.useRef(null);
  return (
    <>
      <button type="button" onClick={() => inputRef.current?.click()} className="todo__button">
        <DocumentIcon />
      </button>
      <input
        ref={inputRef}
        type="file"
        onChange={(e) => console.log(e.target)}
        hidden
        accept=".jpg, .png, .jpeg"
      />
    </>
  );
};

export default UploadButton;
