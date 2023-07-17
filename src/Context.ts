import React from "react";

interface IContext {
  notes: Note[] | null;
  setNotes: React.Dispatch<React.SetStateAction<any>> | null;
}

export const NotesContext = React.createContext<IContext>({
  notes: null,
  setNotes: null,
});
