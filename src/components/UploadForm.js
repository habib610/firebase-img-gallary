import React, { useState } from "react";
import ProgressBar from './ProgressBar'
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const type = ["image/jpeg", "image/jpg", "image/png"];
 
  const fileHandle = (e) => {
    const selected = e.target.files[0];
    if (selected && type.includes(selected.type)) {
      setFile(selected);
      setError('')
    }
    else{
        setFile(null)
        setError('Please select a valid image (jpeg, jpg, png)')
    }
  };
  return (
    <form>
        <label htmlFor="file">
      <input type="file" id="file" onChange={fileHandle} />
            <span>+</span>
        </label>

      <div className="output">
          { error && <div className="error">{error}</div> }
          { file && <div >{file.name}</div> }
          { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  );
};

export default UploadForm;
