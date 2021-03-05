import React from "react";
import styled from 'styled-components'

export const Navbar = () => (
    <Nav >
        <h3 >THE RICK AND MORTY INFORMATION PAGE</h3>
    </Nav>
);


const Nav = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    background-color: #007bff;
  h3 {
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
  }

`