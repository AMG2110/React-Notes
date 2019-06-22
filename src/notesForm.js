import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";

const NotesForm = props => {
  const { title, description, updateField, saveNote } = props;

  return (
    <React.Fragment>
        <Grid item xs={12}>
            <TextField 
                type='text'
                placeholder="Title for this note..."
                margin="normal"
                fullWidth
                value={title}
                onChange={updateField("title")} />
        </Grid>
        <Grid item xs={12}>
            <TextField 
                type='text'
                placeholder="Start taking notes"
                multiline
                rows="4"
                margin="normal"
                fullWidth 
                value={description}
                onChange={updateField("description")}/>
        </Grid>
        <Fab className="editIcon" color="secondary" onClick={saveNote}>
            <Icon>save</Icon>
        </Fab>
    </React.Fragment>
  );
};

export default NotesForm;