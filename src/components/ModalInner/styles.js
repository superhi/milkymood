import styled from 'styled-components'

export const Container = styled.div`
  color: #000;
  max-width: 440px;

  @media (max-width: 700px) {
    padding: 20px 0;
  }
`

export const SuccessContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
  text-align: center;
  padding: 30px 0;
`

export const H3 = styled.h3`
  font-size: 64px;
  font-weight: 600;
  line-height: 1;
  margin: 0;
  color: #0519ce;

  @media (max-width: 700px) {
    font-size: 24px;
  }
`

export const H4 = styled.h4`
  color: #0519ce;
  font-size: 34px;
  font-weight: 600;
  line-height: 1;
  margin: 20px 0 0;

  @media (max-width: 700px) {
    font-size: 24px;
  }
`

export const Socials = styled.div`
  display: flex;
  justify-content: center;

  svg {
    margin: 0 16px;
  }
`
