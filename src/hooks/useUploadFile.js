import React, { useEffect } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

const useUploadFile = () => {
  const [fileUrl, setFileUrl] = React.useState(null);
  const [fileName, setFileName] = React.useState(null);

  const uploadFile = async (f) => {
    setFileName(null);
    const storage = getStorage();
    const storageRef = ref(storage, `upload/${Date.now()}${f.name}`);
    await uploadBytesResumable(storageRef, f);
    await getDownloadURL(ref(storage, storageRef.fullPath)).then(setFileUrl);
    setFileName(f.name);
  };

  return { fileName, fileUrl, uploadFile };
};

export default useUploadFile;
