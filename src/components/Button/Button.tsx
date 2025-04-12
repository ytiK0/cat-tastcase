import {MouseEventHandler, PropsWithChildren} from "react";
import styled from "styled-components";

interface ButtonProps {
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>,
}

const StyledButton = styled.button`
       width: 100%;
       padding: 5px 0;
       font-size: 18px;
       transition: color .3s;
       &:hover {
           cursor: pointer;
           color: cornflowerblue;
       }
`

export default function Button({children, onClick, className}: PropsWithChildren<ButtonProps>) {


  return (
    <StyledButton className={className} type={"button"} onClick={onClick}>{children}</StyledButton>
  );
}
