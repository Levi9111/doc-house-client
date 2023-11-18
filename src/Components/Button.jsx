import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: var(--bg-button);
  color: var(--text-white);
  padding: 1.8rem 3rem;
  border-radius: 1rem;
  font-size: var(--font-button);
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
