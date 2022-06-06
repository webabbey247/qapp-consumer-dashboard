import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
// import { useHistory } from 'react-router-dom';
import { ContentRow, ContentFullColumn, DefaultButton, GeneralSmText, CustomDiv, CustomLink } from '../../GlobalCss';

export const CardContainer = styled.div`
padding: 1rem 1rem;
`;

export const ContentButtonWrapper = styled.div`
padding: 1rem 0;
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
`;

export const CardOperationsContainer = styled.div`
background: #0D2E3E;
border-radius: 10px;
display: flex;
flex-direction: column,
justify-content: space-between;
padding:  0.5rem 1rem;
margin: 10px 0;
`;

export const CardCustomLink = styled(Link)`
text-decoration: none;
`;

const CardOperations = ({ setStepOne, setStepTwo, setStepThree }) => {
    // <Route path='/cards/retrieve-card-pin' element={<RetrieveCardPin />} />       
    // <Route path='/cards/replace-card' element={<ReplaceCard />} />       
    // <Route path='/cards/block-card' element={<BlockCard />} />     
    return (
        <>
            <CardContainer>
                <ContentRow>
                    <ContentFullColumn>
                       <CardCustomLink to='/cards/retrieve-card-pin'>
                       <CardOperationsContainer>
                            <CustomDiv margin="1rem 0">
                                <GeneralSmText fontSize="18px" lineHeight="27px" textAlign="center" color="#F7F7F7" fontWeight="500" textTransform="Capitalize">Retrieve Card Pin</GeneralSmText>
                            </CustomDiv>
                        </CardOperationsContainer>
                       </CardCustomLink>

                       <CardCustomLink to='/cards/replace-card'>
                       <CardOperationsContainer>
                            <CustomDiv margin="1rem 0">
                            <GeneralSmText fontSize="18px" lineHeight="27px" textAlign="center" color="#F7F7F7" fontWeight="500" textTransform="Capitalize">Replace Card</GeneralSmText>
                            </CustomDiv>
                        </CardOperationsContainer>
                       </CardCustomLink>

                       <CardCustomLink to='/cards/block-card'>
                       <CardOperationsContainer>
                            <CustomDiv margin="1rem 0">
                            <GeneralSmText fontSize="18px" lineHeight="27px" textAlign="center" color="#F7F7F7" fontWeight="500" textTransform="Capitalize">Block Card</GeneralSmText>
                            </CustomDiv>
                        </CardOperationsContainer>
                       </CardCustomLink>

                    </ContentFullColumn>

                    <ContentButtonWrapper>
                        <DefaultButton>Cancel</DefaultButton>

                    </ContentButtonWrapper>


                </ContentRow>
            </CardContainer>
        </>
    )
}

export default CardOperations;