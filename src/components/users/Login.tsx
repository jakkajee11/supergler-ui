import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
  Link,
  Stack,
  ButtonGroup,
  Input,
  Text,
  Heading
} from "@chakra-ui/core";
import { Formik, Form, Field, FieldProps } from "formik";

import { IoLogoFacebook, IoLogoTwitter } from "../Icons";

interface LoginProps {
  email: string;
  password: string;
}

const initialValues: LoginProps = { email: "", password: "" };

const Login: React.FC = () => {
  const validateEmail = (value: string) => {
    let error;
    if (!value) {
      error = "Email is required";
    } else if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) === false
    ) {
      error = "Email is not valid";
    }

    return error;
  };

  const validatePassword = (value: string) => {
    let error;
    if (!value) {
      error = "Password is required";
    } else {
      let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      if (value.match(passw) === null) {
        error = "Password is not strong enough";
      }
    }

    return error;
  };

  return (
    <Flex direction="column" align="center" justify="middle" p={10}>
      <Stack p={5} w="30%">
        <Heading mb={4} textAlign="center">
          Login
        </Heading>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              //onSubmit(values);
              //onClose();
            }, 1000);
          }}
          render={props => (
            <Form>
              <Field name="email" validate={validateEmail}>
                {({ field, form: { touched, errors } }: FieldProps) => (
                  <FormControl isInvalid={!!errors.email && !!touched.email}>
                    {""}
                    <Input {...field} type="email" placeholder="email" />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field
                name="password"
                validate={validatePassword}
                children={({
                  field,
                  form: { touched, errors }
                }: FieldProps) => (
                  <FormControl
                    isInvalid={!!errors.password && !!touched.password}
                  >
                    <FormLabel htmlFor="password"> </FormLabel>
                    <Input {...field} type="password" placeholder="password" />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              />
              <Stack>
                <Button
                  mt={4}
                  bg="tomato"
                  color="white"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Login
                </Button>
                <Link textAlign="right">Forgot password?</Link>
                <Text textAlign="center">or login with </Text>
                {/* <ButtonGroup spacing={5}> */}
                <Button
                  leftIcon={IoLogoFacebook}
                  color="white"
                  backgroundColor="#3b5998"
                >
                  Facebook
                </Button>
                <Button
                  leftIcon={IoLogoTwitter}
                  color="white"
                  backgroundColor="#00acee"
                >
                  Twitter
                </Button>
                {/* </ButtonGroup> */}
              </Stack>
            </Form>
          )}
        />
        {/* <Input type="email" placeholder="email" />
      <Input type="password" placeholder="password" />
      <Button type="submit" variantColor="green">
        Login
      </Button>
      <Link>Forgot password?</Link>
      <Text>Or login with </Text>
      <ButtonGroup spacing={5}>
        <Button leftIcon="email">Facebook Login</Button>
        <Button leftIcon="search">Twitter Login</Button>
      </ButtonGroup> */}
      </Stack>
    </Flex>
  );
};

export default Login;
