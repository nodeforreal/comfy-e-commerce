import styled,{keyframes} from 'styled-components';

const spinningAnimation = keyframes`
  to{
    transform: rotate(360deg);
  }
`
const Spinner = styled.div`
  width: 18vmin;
  height: 18vmin;
  border: .25rem solid var(--clr-primary-9);
  border-top-color: var(--clr-primary-7);
  border-radius: 50%;
  animation:${spinningAnimation} 1s infinite linear ;
`


export default Spinner