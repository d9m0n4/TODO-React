import React, { useEffect } from 'react';
import DocumentIcon from '../ui/documentIcon';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

const UploadButton = ({ onChange }) => {
  const inputRef = React.useRef(null);

  return (
    <>
      <button type="button" onClick={() => inputRef.current?.click()} className="todo__button">
        <DocumentIcon />
      </button>
      <input
        ref={inputRef}
        type="file"
        onChange={(e) => onChange(e.target.files[0])}
        hidden
        accept=".jpg, .png, .jpeg, .doc, .xlsx, .txt"
      />
    </>
  );
};

export default UploadButton;
