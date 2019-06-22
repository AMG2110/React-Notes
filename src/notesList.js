import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

const NotesList = props => {
  const { notes, deleteNote } = props;

  let formattedNotes = notes.length ? (
    notes.map((note, index) => (
      <ListItem key={note.id} component={Link} to={`/view/${note.id}`} button>
        <ListItemText primary={note.title} />
        <ListItemSecondaryAction>
          <IconButton onClick={() => deleteNote(index)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))
  ) : (
    <Typography align="center" variant="subtitle1">
      No notes yet...
    </Typography>
  );

  return <List>{formattedNotes}</List>;
};

export default NotesList;
