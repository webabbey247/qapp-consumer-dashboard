import React from 'react';
import { ContentRow, ContentFullColumn} from '../../GlobalCss';
import {
    ContentForm,
    FormLabel,
    FormInput
} from '../../assets/styles/FormCss';

const UpdatePinForm = () => {
  return (
    <>
    <ContentForm>
                <ContentRow>
                    <ContentFullColumn>
                        <FormLabel>Current Transaction PIN</FormLabel>
                        <FormInput type="text" placeholder="" value="" />
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormLabel>New Transaction PIN</FormLabel>
                        <FormInput type="text" placeholder="" value="" />
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormLabel>Confirm Transaction PIN</FormLabel>
                        <FormInput type="text" placeholder="" value="" />
                    </ContentFullColumn>
                </ContentRow>
            </ContentForm>
    </>
  )
}
export default UpdatePinForm