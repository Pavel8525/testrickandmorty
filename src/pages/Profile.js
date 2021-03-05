import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCharacter } from "../redux/sagas";
import { DATA_STATE_REQUESTING } from "../constants/request";
import styled from 'styled-components'

const SoloCharWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 15px;
    filter: drop-shadow(0.1rem 0.1rem 0.25rem darkslategray);
  }
 
`;

const CharCard = styled.div`
  background: aliceblue;
  width: 50vw;
  border-radius: 15px;
  filter: drop-shadow(0.2rem 0.2rem 0.5rem darkblue);
  h3 {
    font-size: 1rem;
  }
  img {
    border-radius: 15px;
    filter: drop-shadow(0.1rem 0.1rem 0.25rem darkslategray);
    margin: 0 0 70px 10px;
   
  }
  ul {
    list-style: none;
    position: absolute;
    top: 150px;
    right: 50px;
    font-size: 1.4rem;
    padding-bottom: 5rem;
    
  }
 
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 2rem;
  a {
    text-decoration: none;
    font-size: 1.6rem;
    background: aliceblue;
    border-radius: 0.3rem;
    padding: 0.3rem;
    color: darkblue;
  }
  a:hover {
    color: aliceblue;
    background: darkslateblue;
  }
`;

const ProfilePage = (props) => {
    const { id } = useParams();
    const { getCharacter: getCharacterRequest } = props;
    const loading = props.character.characterDataState === DATA_STATE_REQUESTING;

    useEffect(() => {
        getCharacterRequest(id);
    }, []);

    if (loading) {
        return <span>loading...</span>;
    }

    return (
        <SoloCharWrapper>
            <CharCard>
                <Nav>
                    <Link to="/">На главную</Link>
                </Nav>
                <img
                    src={props.character.character.image}
                    alt={props.character.character.name}
                />
                <h3>{props.name}</h3>
                <ul>
                    <li >
                        <strong>Status: </strong> {props.character.character.status}
                    </li>
                        <li >
                            <strong>Species: </strong> {props.character.character.species}
                        </li>
                    <li>
                        <strong>Gender: </strong> {props.character.character.gender}
                    </li>
                    <li>
                        <strong>Name: </strong>{props.character.character.name}
                    </li>
                </ul>
            </CharCard>
        </SoloCharWrapper>
    );
};

function mapStateToProps(state) {
    return { character: state.gets };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCharacter }, dispatch);
}

export const Profile = connect(
    mapStateToProps,
        mapDispatchToProps
)(ProfilePage);