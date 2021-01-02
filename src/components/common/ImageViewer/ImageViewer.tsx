import React, { useState } from "react";
import { Button } from "@material-ui/core";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";

interface Props {
  src?: any;
  onSave: (cropData: any) => void;
  aspectRatio: number;
}

const ImageViewer = (props: Props) => {
  const [image, setImage] = useState<any>(props.src);

  const handleOnChange = (event: any) => {
    event.preventDefault();
    if (event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as any);
      };
      reader.readAsDataURL(event.target.files[0] as any);
    }
    props.onSave(event.target.files[0]);
  };

  return (
    <div className="image-viewer">
      <div className="image-viewer-actions">
        <div className="image-viewer-action-wrapper">
          <Button
            className="button"
            variant="contained"
            size="small"
            color="default"
            fullWidth={true}
          >
            Upload Photo
          </Button>
          <input type="file" onChange={handleOnChange} accept="image/*" />
        </div>
      </div>
      <div
        className="image-viewer-img-wrapper"
        style={{ width: props.aspectRatio * 156 }}
      >
        {image && <img className="image-viewer-img" src={image} alt="avatar" />}
        {!image && <CameraAltOutlinedIcon className="image-viewer-img" />}
      </div>
    </div>
  );
};

export default ImageViewer;
