import * as React from "react";
import { Formik, Form, Field, FieldProps } from "formik";
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
  Input,
  Textarea
} from "@chakra-ui/core";
import { PostProps } from "./Post";

interface PostFormProps {
  onSubmit(value: PostProps): void;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
  const validateTitle = (value: string) => {
    let error;
    if (!value) {
      error = "Title is required";
    }
    return error;
  };

  const validateMessage = (value: string) => {
    let error;
    if (!value) {
      error = "Message is required";
    }
    return error;
  };

  const initialValues: PostProps = { title: "", message: "" };

  return (
    <>
      <Flex w="100%" p={5} direction="column">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              actions.setSubmitting(false);
              onSubmit({ ...values, type: "aritcle" });
            }, 1000);
          }}
          render={props => (
            <Form>
              <Field name="title" validate={validateTitle}>
                {({ field, form: { touched, errors } }: FieldProps) => (
                  <FormControl isInvalid={!!errors.title && !!touched.title}>
                    <FormLabel htmlFor="title">Title</FormLabel>
                    <Input {...field} id="title" placeholder="Title" />
                    <FormErrorMessage>{errors.title}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field
                name="message"
                validate={validateMessage}
                children={({
                  field,
                  form: { touched, errors }
                }: FieldProps) => (
                  <FormControl
                    isInvalid={!!errors.message && !!touched.message}
                  >
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <Textarea
                      {...field}
                      id="message"
                      placeholder="Put your message here..."
                    />
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                  </FormControl>
                )}
              />
              <Button
                mt={4}
                variantColor="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          )}
        />
      </Flex>
    </>
  );
};

export default PostForm;
