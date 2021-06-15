import styled from 'styled-components'
import {Field, Form} from 'formik'

export const FieldContainer = styled(Field)`
  border: 2px solid #000;
  box-sizing: border-box;
  font-size: 16px;
  padding: 4px;
  width: 75%;
  margin-bottom: 8px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`

export const Label = styled.label`
  font-weight: 600;
`

export const Error = styled.span`
  color: #e26e2d;
`

export const Submit = styled.button`
  background: none;
  border: 2px solid #0519ce;
  color: #0519ce;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  padding: 12px;
  text-transform: uppercase;
  margin-top: 8px;
  width: 75%;

  @media (max-width: 700px) {
    font-size: 16px;
  }
`

export const FormContainer = styled(Form)`
  display: flex;
  gap: 100px;
  margin-top: 48px;

  @media (max-width: 700px) {
    display: block;
    margin-top: 24px;
    width: 220px;
  }
`

export const TicketSelector = styled.div`
  flex-grow: 2;

  @media (max-width: 700px) {
    margin-top: 10px;
  }
`

export const Column = styled.div`
  color: #6e6e6e;

  p {
    margin: 8px 0;
  }

  &:nth-of-type(2) {
    text-align: right;
    margin-left: 28px;
  }

  @media (max-width: 700px) {
    &:nth-of-type(2) {
      margin-left: 48px;
    }
  }
`

export const FlexContainer = styled.div`
  display: flex;
`
