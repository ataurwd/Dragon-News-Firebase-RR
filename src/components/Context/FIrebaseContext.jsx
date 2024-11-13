import React, { createContext } from 'react';

export const FormContext = createContext(null)

const FIrebaseContext = ({children}) => {
    return (
        <FormContext.Provider>
            {children}
        </FormContext.Provider>
    );
};

export default FIrebaseContext;