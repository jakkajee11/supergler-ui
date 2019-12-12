import * as React from "react";
import {
  Box,
  ButtonGroup,
  IconButton,
  Flex,
  Editable,
  EditableInput,
  EditablePreview,
  Stack
} from "@chakra-ui/core";
import { JSXAttribute } from "@babel/types";

interface EditableControlsProps {
  isEditing: boolean;
  onCancel(): void;
  onRequestEdit(): void;
  onSubmit(): void;
}

interface EditableTextProps {
  textAlign?: "center" | "left" | "right"; //string | undefined;
  defaultValue: string;
  fontSize?: string | number;
  isPreviewFocusable?: boolean;
  submitOnBlur?: boolean;
}

function EditableControls({
  isEditing,
  onSubmit,
  onCancel,
  onRequestEdit
}: EditableControlsProps) {
  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm">
      <IconButton aria-label="check" icon="check" onClick={onSubmit} />
      <IconButton aria-label="close" icon="close" onClick={onCancel} />
    </ButtonGroup>
  ) : (
    <Flex justifyContent="center">
      <IconButton
        aria-label="edit"
        size="sm"
        icon="edit"
        onClick={onRequestEdit}
      />
    </Flex>
  );
}

const EditableText: React.FC<EditableTextProps> = ({
  textAlign = "center",
  defaultValue,
  fontSize = "sm",
  isPreviewFocusable = false,
  submitOnBlur = false
}) => (
  <Box>
    <Editable
      textAlign={textAlign}
      defaultValue={defaultValue}
      fontSize={fontSize}
      isPreviewFocusable={isPreviewFocusable}
      submitOnBlur={submitOnBlur}
    >
      {(props: EditableControlsProps) => (
        <>
          <Stack isInline>
            <EditablePreview />
            <EditableInput />
            <EditableControls {...props} />
          </Stack>
        </>
      )}
    </Editable>
  </Box>
);

export default EditableText;
