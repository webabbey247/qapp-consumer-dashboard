import React from 'react';
import { ContentRow, ContentFullColumn, CustomDiv, DefaultButton, GeneralSmText } from '../../GlobalCss';
import {
    ContentForm,
    FormInput,
    FormLabel
} from '../../assets/styles/FormCss';

const NewPasswordForm = () => {
    return (
        <>
            <ContentForm>
                <ContentRow>
                    <ContentFullColumn>
                        <FormInput type="password" placeholder="New Password" />
                        {/* <GeneralSmText fontWeight="400" fontSize="10px" lineHeight="13px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                        Enter the 6 digit code sent to +234703***34 or joh***de@gmail.com
                        </GeneralSmText> */}
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormInput type="password" placeholder="Confirm Password" />
                        {/* <GeneralSmText fontWeight="400" fontSize="10px" lineHeight="13px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                        Enter the 6 digit code sent to +234703***34 or joh***de@gmail.com
                        </GeneralSmText> */}
                    </ContentFullColumn>

                 
                    <ContentFullColumn>
                        <CustomDiv display="flex" flexDirection="row" justifyContent="center" width="100%">
                            <DefaultButton>Reset Password</DefaultButton>
                        </CustomDiv>
                    </ContentFullColumn>
                </ContentRow>
            </ContentForm>
        </>
    )
}
export default NewPasswordForm;