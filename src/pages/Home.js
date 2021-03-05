import React, { useCallback, useEffect } from "react";
import { Card } from "../components/Card";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCharacters } from "../redux/sagas";

import { DATA_STATE_REQUESTING } from "../constants/request";

import styled from 'styled-components'

const DivList = styled.div`
  margin-bottom: 1.5rem!important;


@media (min-width: 576px) {
   -ms-flex: 0 0 33.333333%;
   flex: 0 0 33.333333%;
   max-width: 33.333333%;
}
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  
  button {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #fff;
    background-color: #28a745;
  }
`
const HomePage = (props) => {

    const { getCharacters: getCharactersRequest } = props;
    const loading = props.characters.charactersDataState === DATA_STATE_REQUESTING;
    const results = props.characters.characters;
    const page = props.characters.page;
    const pages = props.characters.pages;

    const onGetCharacters = useCallback(() => {
        if (page < pages || page === 0) {
            getCharactersRequest(page + 1);
        }
    }, [getCharactersRequest, page, pages]);

    useEffect(() => {
        onGetCharacters()
    }, []);


    if (loading && results && !results.length) {
        return <p className="text-center">Загрузка...</p>;
    }

    return (
        <Row>
            {results.map((character) => (
                <DivList key={character.id}>
                    <Card results={character} />
                </DivList>
            ))}
            {loading ? (
                <span>Loading...</span>
            ) : (
                <button
                    className="btn btn-success"
                    style={{ width: "150px", height: "50px" }}
                    onClick={onGetCharacters}
                >
                    Загрузить ещё
                </button>
            )}
        </Row>
    );

}

function mapStateToProps(state) {
    return { characters: state.gets };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCharacters }, dispatch);
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomePage);