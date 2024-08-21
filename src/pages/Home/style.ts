import styled from "styled-components";

export const HomeBox = styled.div`

  //homeBox pai
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;


  form{
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }

`

export const FormCountdown = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:0.5rem;
  color: ${props => props.theme["gray-100"]};
  font-size:1.125rem;
  flex-wrap: wrap;
  font-weight: bold;
`

const BaseInput = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom:2px solid ${props => props.theme['gray-500']};
  font-weight: bold;
  font-size:1.125rem;
  padding:0 0.5rem;
  color: ${props => props.theme['gray-100']};

  &::placeholder{
    color:  ${props => props.theme['gray-500']};
  }

  &:focus{
    box-shadow: none;
    border-color: ${props => props.theme['green-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex:1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const Minutes =  styled(BaseInput)`
  width: 4rem;
`



export const CountdownTimer = styled.div`

  font-family: monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${props => props.theme["gray-100"]};
  display: flex;
  gap: 1rem;


  span{
    background-color:  ${props => props.theme["gray-700"]};
    padding:2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding:2rem 0;
  color:  ${props => props.theme["green-500"]};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

export const StarCountdownBtn = styled.button`
  width: 100%;
  border:0;
  padding:1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor:pointer;
  background-color: ${props => props.theme['green-500']};
  color: ${props => props.theme['gray-100']};
  transition: 0.2s;

  &:not(:disabled):hover{
    background-color: ${props => props.theme['green-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`