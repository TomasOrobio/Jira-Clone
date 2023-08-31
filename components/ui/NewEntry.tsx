import { Box, Button, TextField } from '@mui/material'
import React, { ChangeEvent, useContext, useState } from 'react'
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {

    const { addNewEntry } = useContext(EntriesContext);
    const { isAddingEntry, setIsAddingEntry} = useContext(UIContext);

    const [InputValue, setInputValue] = useState('');
    const [touched, settouched] = useState(false);

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onSave = () => {
        if (InputValue.length === 0) return;

        addNewEntry(InputValue)
        setIsAddingEntry(false);
        settouched(false);
        setInputValue('');
    }


    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>

            {
                isAddingEntry ? (
                    <>
                        <TextField
                            fullWidth
                            sx={{ marginTop: 2, marginBottom: 1 }}
                            placeholder='Nueva entrada'
                            autoFocus
                            multiline
                            label='Entrada'
                            helperText={InputValue.length <= 0 && touched && 'Ingrese un Valor'}
                            error={InputValue.length <= 0 && touched}
                            value={InputValue}
                            onChange={onTextFieldChanged}
                            onBlur={() => settouched(true)}
                        />
                        <Box display='flex' justifyContent='space-between'>
                            <Button
                                variant='text'
                                onClick={() => setIsAddingEntry(false)}
                            >
                                Cancelar
                            </Button>
                            <Button
                                variant='outlined'
                                color='secondary'
                                endIcon={<SaveIcon />}
                                onClick={onSave}
                            >
                                Guardar
                            </Button>
                        </Box>
                    </>
                )
                    :
                    (
                        <Button
                            startIcon={<AddIcon />}
                            fullWidth
                            variant='outlined'
                            onClick={() => setIsAddingEntry(true)}
                        >
                            Agregar Tarea
                        </Button>

                    )
            }

        </Box>
    )
}
