import React from 'react'
import { EditFormInput, Button, ButtonContainer } from "./styled"

const EditForm = ({ edit, value }) => {
    return (
        <form>
            <EditFormInput
             edit={edit}
             value={value}/>
            <ButtonContainer>
                <Button submit >
                    submit
            </Button>
                <Button cancel >
                    cancel
            </Button>
            </ButtonContainer>
        </form>
    )
}

export default EditForm;
