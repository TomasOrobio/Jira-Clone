import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interface';

export interface EntriesState {
    entries: Entry[];
}
const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id:uuidv4(),
            description: 'Pendiente: lorem insup',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id:uuidv4(),
            description: 'En-Progreso: lorem insup lorem insup lorem insup',
            status: 'in-progress',
            createdAt: Date.now() - 100000,
        },
        {
            _id:uuidv4(),
            description: 'Terminadas: lorem insup  lorem insup  lorem insup lorem insup',
            status: 'finished',
            createdAt: Date.now() - 500000,
        },
    ],
}

export const EntriesProvider: FC = ({ children }: any) => {


    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = ( description: string) => {

        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({ type: '[Entry] Add-Entry', payload: newEntry })
    }


    const updateEntry = (entry: Entry) => {
        dispatch({
            type: '[Entry] Entry-Updated', payload: entry, 
        })
    }

    return (

        <EntriesContext.Provider value={{
            ...state,

            // Methods
            addNewEntry,
            updateEntry,
            
        }}>

            {children}

        </EntriesContext.Provider>

    )
}