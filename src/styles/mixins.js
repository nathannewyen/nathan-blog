import { css } from "styled-components";

const button = css`
  width: 200px;
  padding: 25px;
  border: none;
  border-radius: 40px;
  background-color: var(--color-white);
  font-size: var(--fz-lg);
  font-weight: 500;
  cursor: pointer;
  outline: 2px solid var(--color-white);
  transition: outline-offset 250ms ease;
  font-family: var(--font-sans);

  &:hover,
  &:focus,
  &:active {
    outline-offset: 0.3rem;
  }
`;

const arrowButton = css`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: var(--color-white);
`;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: var(--green);
    &:hover,
    &:focus,
    &:active {
      color: var(--green);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--green) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--green);
      transition: var(--transition);
      opacity: 0.5;
    }
  `,

  button,
  arrowButton,
};

export default mixins;
