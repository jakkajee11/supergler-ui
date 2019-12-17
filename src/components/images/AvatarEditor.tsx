import React, { createRef, useState } from "react";
import { Image, Tooltip } from "@chakra-ui/core";
import styled from "@emotion/styled";

const PictureFrame = styled.div`
  margin: 0;
  padding: 0;
  border: none;
  box-shadow: none;
  text-align: center;
  display: inline-block;
  cursor: pointer;
`;

const StyledInputFile = styled.input`
  height: 0;
  overflow: hidden;
  width: 0;
`;

interface AvatarEditorProps {
  src?: string;
}

const AvatarEditor: React.FC<AvatarEditorProps> = ({ src }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const fileInputRef = createRef<HTMLInputElement>();

  return (
    <>
      <PictureFrame>
        <Tooltip
          aria-label="change avatar"
          label="Click to choose image"
          placement="bottom-start"
        >
          <Image
            size="150px"
            objectFit="cover"
            src={imageSrc ? imageSrc : ""}
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
          />
        </Tooltip>
        <StyledInputFile
          type="file"
          id="file"
          ref={fileInputRef}
          onChange={(event: any) => {
            setImageSrc(URL.createObjectURL(event.target.files[0]));
          }}
        />
      </PictureFrame>
    </>
  );
};

export default AvatarEditor;
