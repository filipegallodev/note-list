import React, { useContext, useState } from "react";
import styles from "./NoteCreate.module.css";
import Section from "../Section/Section";
import {
  getNotesFromLocalStorage,
  saveNotesOnLocalStorage,
} from "@/helpers/localStorage";
import { NotesContext } from "@/Context";

const NoteCreate = () => {
  const [newNote, setNewNote] = useState<string>("");
  const context = useContext(NotesContext);

  function handleNoteCreation(): void {
    const newNoteInfo = getNewNoteInfo();
    if (!newNoteInfo) return;
    let notes = getNotesFromLocalStorage();
    if (notes) {
      notes.push(newNoteInfo);
    } else {
      notes = [newNoteInfo];
    }
    if (context.setNotes) context.setNotes(notes);
    saveNotesOnLocalStorage(notes);
    clearNewNoteField();
  }

  function getNewNoteInfo(): Note | null {
    if (newNote) {
      return {
        content: newNote,
        creation: new Date(),
      };
    }
    return null;
  }

  function clearNewNoteField(): void {
    setNewNote("");
  }

  return (
    <Section title="Crie uma nova nota">
      <div>
        <textarea
          placeholder="Comece a escrever sua nota aqui..."
          name="new-note"
          id="new-note"
          className={styles.textArea}
          value={newNote}
          onChange={({ target }) => setNewNote(target.value)}
        ></textarea>
        <div className={styles.buttonsContainer}>
          <button className={styles.buttonPrimary} onClick={handleNoteCreation}>
            Criar
          </button>
          <button
            className={styles.buttonSecondary}
            onClick={clearNewNoteField}
          >
            Limpar
          </button>
        </div>
      </div>
    </Section>
  );
};

export default NoteCreate;
