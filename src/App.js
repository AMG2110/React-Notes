import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from "@material-ui/core/Fab";
import { Link, Route, Redirect } from "react-router-dom";
import NotesForm from "./notesForm";
import NotesList from "./notesList";
import Icon from "@material-ui/core/Icon";
import Home from "./Home";
import Note from "./Note";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            notes: []
        };
    }

    updateField = names => e => {
        this.setState({ [names]: e.target.value });
      };
     
    clearFields = () => {
        this.setState({
          title: "",
          description: ""
        });
      };

      deleteNote = index => {
        const { notes } = this.state;
        notes.splice(index, 1);
        this.setState({ notes });
      };

      saveNote = () => {
        const { title, description, notes } = this.state;
        if (title && description) {
          notes.push({
            id: Date.now(),
            title,
            description
          });
    
          this.setState({ notes });
          this.clearFields();
        }
      };

      FiltroNotas = id => {
        const notes = this.state.notes;
        const note = notes.filter(note => {
          return note.id === parseInt(id);
        });
        console.log(note);
        return note[0];
      };
    

    render(){
        return (
            <React.Fragment>
                <Typography align="center" variant="h2" gutterBottom>
                    My Notes
                </Typography>
                <Grid container justify="center" spacing={2}>
                <Grid item xs={4}>
                    <NotesList notes={this.state.notes} deleteNote={this.deleteNote} />
                </Grid>
                <Grid item xs={8}>
                    <Route exact path="/" component={Home} />
                    <Route
                        path="/new-note"
                        render={() => (
                            <NotesForm
                                updateField={this.updateField}
                                title={this.state.title}
                                description={this.state.description}
                                saveNote={this.saveNote}
                        />
                        )}
                    />
                    <Route
                        path="/view/:id"
                        render={props => {
                            const note = this.FiltroNotas(props.match.params.id);
                            return note ? <Note note={note} /> : <Redirect to="/" />;
                        }}
                    />
                </Grid>
                </Grid>
                <Fab color="primary" className="addIcon" component={Link} to="/new-note">
                    <Icon>note_add</Icon>
                </Fab>
            </React.Fragment>
        )
    }
}

export default App;
