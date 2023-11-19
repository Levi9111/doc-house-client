import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: var(--bg-button);
  color: var(--text-white);
  padding: 1.8rem 3rem;
  border-radius: 1rem;
  font-size: var(--font-button);
`;

const StyledOutlinedButton = styled.button`
  border: 1px solid var(--bg-button);
  border-radius: var(--border-radius);
  color: var(--bg-button);
  font-size: var(--font-button);
  font-weight: 700;
  padding: 1.4rem 2.3rem;
  background-color: transparent;
  cursor: pointer;
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export function BtnOutlined({ children }) {
  return <StyledOutlinedButton>{children}</StyledOutlinedButton>;
}

export default Button;
