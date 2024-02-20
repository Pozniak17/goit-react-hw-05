import { Field, Form } from "formik";
import styled from "styled-components";

export const FormikForm = styled(Form)`
  margin-bottom: ${(props) => props.theme.spacing(5)}; //20px
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled(Field)`
  text-align: center;
  width: ${(props) => props.theme.sizes[1]}px; //200px
  height: 25px;
  font-weight: ${(props) => props.theme.fontWeights.big}; //600
  font-size: larger;
`;

export const FormButton = styled.button`
  width: 60px;
  height: 30px;
`;
