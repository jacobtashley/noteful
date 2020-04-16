import React from 'react'

const Context = React.createContext({
    notes: [],
    folders: [],
    addFolder: () => {},
    addNote: () => {},
    deleteNote: () => {},
})

export default Context