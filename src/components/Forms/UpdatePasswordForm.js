import React from 'react';
import { ContentRow, ContentFullColumn} from '../../GlobalCss';
import {
    ContentForm,
    FormLabel,
    FormInput
} from '../../assets/styles/FormCss';

const UpdatePasswordForm = () => {
  return (
    <>
    <ContentForm>
                <ContentRow>
                    <ContentFullColumn>
                        <FormLabel>Current Password</FormLabel>
                        <FormInput type="text" placeholder="" value="" />
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormLabel>New Password</FormLabel>
                        <FormInput type="text" placeholder="" value="" />
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormInput type="text" placeholder="" value="" />
                    </ContentFullColumn>
                </ContentRow>
            </ContentForm>
    </>
  )
}
export default UpdatePasswordForm