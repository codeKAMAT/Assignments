import React from 'react'
import styled from 'styled-components'

const StyledNavContainer = styled.div`
  display: none;
  width: 100%;
  @media screen and (min-width: 780px) {
    display: flex;
  }
`

const StyledUl = styled.ul`
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 2;
  li {
    color: #9e9aa7;
    list-style: none;
    font-weight: 500;
    display: inline;
    margin: 0 1em;
    transition: color 200ms;
    &:hover {
      cursor: pointer;
      color: #35323e;
      transition: color 200ms;
    }
  }
`

const StyledLogin = styled.div`
  height: 2em;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  a {
    transition: color 200ms;
    text-decoration: none;
    font-weight: 500;
    color: #9e9aa7;
    &:hover {
      color: #35323e;
      transition: color 200ms;
    }
  }
  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: white;
    margin: 0 1em;
    padding: 0.3em 1em;
    border: none;
    border-radius: 2em;
    min-width: 7em;
    background-color: #2acfcf;
    transition: background-color 300ms;
    &:hover {
      cursor: pointer;
      background-color: hsl(180, 72%, 80%);
      transition: background-color 300ms;
    }
    &:active {
      background-color: #9e9aa7;
    }
  }
`

const DesktopMenu = () => {
  return (
    <StyledNavContainer>
      <StyledUl>
        <li tabIndex='1'> Features</li>
        <li tabIndex='2'>Pricing</li>
        <li tabIndex='3'>Resources</li>
      </StyledUl>
      <StyledLogin>
        <a href='#/'>Login</a>
        <button>Sign Up</button>
      </StyledLogin>
    </StyledNavContainer>
  )
}

export default DesktopMenu
