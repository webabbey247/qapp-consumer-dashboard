import React from 'react';
import { ContentRow, ContentFullColumn} from '../../GlobalCss';
import {
    ContentForm,
    FormLabel,
    FormInput
} from '../../assets/styles/FormCss';

const UpdateQAForm = () => {
  return (
    <>
    <ContentForm>
                <ContentRow>
                    <ContentFullColumn>
                        <FormLabel>New Secret Question</FormLabel>
                        <FormInput type="text" placeholder="" value="" />
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormLabel>New  Secret Answer</FormLabel>
                        <FormInput type="text" placeholder="" value="" />
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormLabel>Confirm Secret Answer</FormLabel>
                        <FormInput type="text" placeholder="" value="" />
                    </ContentFullColumn>
                </ContentRow>
            </ContentForm>
    </>
  )
}
export default UpdateQAForm