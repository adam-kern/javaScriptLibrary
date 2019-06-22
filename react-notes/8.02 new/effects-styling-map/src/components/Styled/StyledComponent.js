import React from 'react';
import styled from 'styled-components';
import newYork from '../../assets/newyork.png';
import tokyo from '../../assets/tokyo.png';


const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`;

const LeftColumn = styled.div`
    background-color: #d20001;
    height: 100vh;
`;

const RightColumn = styled.div`
    background-color: #38839a;
    height: 100vh;
`;

const ImageWrapper = styled.div`
    display: block;
    margin: auto;
    text-align: center;
    color: white;
    padding-top: 1em;
`;

const MainText = styled.div`
    font-size: 3em;
    margin-top: -2em;
`;

const StyledComponent = () => {
    return(
        <div>

                <Row>
                    <Column>
                        <LeftColumn>
                            <ImageWrapper>
                                <img src={newYork} alt="newyork badge" height="450px" width="450px" />
                                <MainText>New York</MainText>
                                <p>Sept 25-26-27 2019</p>
                            </ImageWrapper>
                        </LeftColumn>
                    </Column>
                    <Column>
                        <RightColumn>
                            <ImageWrapper>
                                <img src={tokyo} alt="tokyo badge" height="450px" width="450px" />
                                <MainText>Tokyo</MainText>
                                <p>Jan 22-23-24 2020</p>
                            </ImageWrapper>
                        </RightColumn>
                    </Column>
                </Row>

        </div>
    )
}

export default StyledComponent;