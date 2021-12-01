import React, { FC, useRef } from "react";

import styles from "./style.module.scss";

interface FileUploadPropsInterface {
  accept?: string;
  setFile: Function;
}

const FileUpload: FC<FileUploadPropsInterface> = ({
  children,
  accept,
  setFile,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleFile = () => {
    ref.current.click();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <div className={styles.FileUpload} onClick={handleFile}>
      <input
        className={styles.FileUpload__InputFile}
        type="file"
        accept={accept}
        ref={ref}
        onChange={onChange}
      />

      {children}
    </div>
  );
};

export default FileUpload;
