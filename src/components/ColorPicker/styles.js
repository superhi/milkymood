import styled from 'styled-components'
import {ReactComponent as PickerArrowSVG} from './picker-arrow.svg'

export const Panel = styled.div.attrs(({$color}) => ({
  style: {
    backgroundColor: `${$color}`,
  },
}))`
  display: flex;
  position: fixed;
  box-shadow: rgb(0, 0, 0) 0 0 20px;
  right: 0;
  top: 60px;
  padding: 4px 14px;
  color: #000;
  right: ${({$isOpen}) => ($isOpen ? '0' : '-250px')};
  transition: 0.3s;
  z-index: 1;

  @media (max-width: 700px) {
    top: unset;
    bottom: 66px;
  }
`

export const ColorInput = styled.input`
  border-radius: 100%;
  width: 20px;
  height: 24px;
  border: 1px solid #000;
  cursor: pointer;

  ::-webkit-color-swatch {
    border: 1px solid #000;
    border-radius: 100%;
  }
`

export const InputContainer = styled.div.attrs(({$color}) => ({
  style: {
    color: `${$color}`,
  },
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 10px;
`

export const Arrow = styled(PickerArrowSVG).attrs(({$color}) => ({
  style: {
    fill: `${$color}`,
  },
}))`
  display: block;
  cursor: pointer;
  padding: 20px 6px;
  transform: ${({$isOpen}) => ($isOpen ? 'rotate(180deg)' : 'unset')};

  path {
    fill: inherit;
  }
`
