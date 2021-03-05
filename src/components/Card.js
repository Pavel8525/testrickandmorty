import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

export const Card = ({ results }) => {

    return (
        <CharChardWrapper>
            <img src={results.image} alt={results.name} />
            <h5 className="card-title">{results.name}</h5>
            <Link to={`/profile/${results.id}`} >
                Открыть
            </Link>
        </CharChardWrapper>
    );
};

const CharChardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  align-items: center;
  background: aliceblue;
  width: 22vw;
  border-radius: 15px;
  box-sizing: border-box;
  margin-bottom: 2rem;
  filter: drop-shadow(0.2rem 0.2rem 0.5rem darkblue);
  h5 {
    font-size: 1.5rem;
  }
  img {
    border-radius: 15px;
    filter: drop-shadow(0.1rem 0.1rem 0.25rem darkslategray);
    background-size: 100%;
    width: 100%;
  }
   a {
       display: inline-block;
       font-weight: 400;
       text-align: center;
       vertical-align: middle;
       user-select: none;
       border: 1px solid transparent;
       padding: .375rem .75rem ;
       margin-bottom: 10px;
       font-size: 1rem;
       line-height: 1.5;
       border-radius: .25rem;
       transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
       color: #fff;
       background-color: #007bff;
       border-color: #007bff;
  }
`;



