import React from 'react'
import config from'./config'

const Context = React.createContext({
    notes: [],
    folders: [],
    addFolder: () => { },
    addNote: () => { },
    deleteNote: () => { },
    selectedFolder: "",
    selectedNotes: [],
    selectFolder: () => {},
})

export class ContextProvider extends React.Component {
    state = {
        notes: [],
        folders: [],
        selectedFolder: "",
        selectedNotes: [],

    }

    componentDidMount() {
        Promise.all([
            fetch(`${config.API_ENDPOINT}/notes`),
            fetch(`${config.API_ENDPOINT}/folders`)
        ])
            .then(([notesRes, foldersRes]) => {
                if (!notesRes.ok)
                    return notesRes.json().then(e => Promise.reject(e));
                if (!foldersRes.ok)
                    return foldersRes.json().then(e => Promise.reject(e));
    
                return Promise.all([notesRes.json(), foldersRes.json()]);
            })
            .then(([notes, folders]) => {
                this.setState({notes, folders});
            })
            .catch(error => {
                console.error({error});
            });
    }
    

    addFolder =  () => {}
    addNote = () => {}

    deleteNote = (noteId) => {
        this.setState(state => ({
            ...state,
            notes: state.notes.filter(note => note.id !== noteId),
            selectedNotes: state.selectedNotes.filter(note => note.id !== noteId)
        }))
    }

    setSelectedFolder = name => this.setState(state => {
        const { id } = state.folders.find(folder => folder.name === name)
        return {
          selectedFolder: name,
          selectedNotes: state.notes.filter(note => note.folderId === id)
        }    
    })

    goHome = () => this.setState(state => ({
        selectedFolder: "",
        selectedNotes: state.notes
    }))

    render() {
        const value = { ...this.state, addFolder: this.addFolder, addNote: this.addNote, deleteNote: this.deleteNote, setSelectFolder: this.setSelectedFolder }
        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        )
    }
}


export default Context