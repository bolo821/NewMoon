import React, { useState, useRef } from 'react';
import './index.scss';

const File = props => {
    const { onFileSelect } = props;
    const [ file, setFile ] = useState(null);
    const fileRef = useRef(null);

    const onFileChange = e => {
        setFile(e.target.files[0]);
        onFileSelect(e.target.files[0]);
    }

    const openDlg = () => {
        fileRef.current.click();
    }
    
    return (
        <div className="file-container-rt">
            <input ref={fileRef} type="file" onChange={onFileChange} />
            <div className="displayer">
                <div className="content">
                    <div onClick={openDlg}>Choose file</div>
                    <div>{file ? file.name : 'No file chosen'}</div>
                </div>
            </div>
        </div>    
    )
}

export default File;