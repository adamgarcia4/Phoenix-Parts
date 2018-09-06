import styled from 'styled-components'

const Paper = styled.div`
  /* Flex doesn't work here */
  /* display: inline-flex; */
  padding-bottom: 30px;
  background-color: #fff;
  /* margin: 4px 0px; */
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 16px 16px;
  margin: 10px 0px;

  h4 {
    border-bottom: 1px solid #e1e1e1;
  }
`

export default Paper
