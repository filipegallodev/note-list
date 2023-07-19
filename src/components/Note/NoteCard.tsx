import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./NoteCard.module.css";
import Image from "next/image";
import {
  getNotesFromLocalStorage,
  saveNotesOnLocalStorage,
} from "@/helpers/localStorage";
import { NotesContext } from "@/Context";
import DeleteImg from "@/../public/delete.png";
import CopyImg from "@/../public/copy.png";
import EditImg from "@/../public/edit.png";

const NoteCard = ({ content, index }: { content: string; index: number }) => {
  const context = useContext(NotesContext);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [editNote, setEditNote] = useState<Note>({
    content: "",
    creation: new Date(),
  });
  const [copy, setCopy] = useState<boolean>(false);
  const [deleteNote, setDeleteNote] = useState<boolean>(false);
  const [editing, setEditing] = useState<boolean>(false);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.innerText = content;
      setEditNote({ ...editNote, content: content });
    }
  }, [content]);

  // useEffect(() => {
  //   if (context.notes && textRef.current && editNote.content)
  //     textRef.current.innerText = editNote.content;
  // }, [context.notes]);

  function handleNoteDelete() {
    const notes = getNotesFromLocalStorage();
    if (!notes || !context.setNotes) return;
    setDeleteNote(true);
    notes.splice(index, 1);
    context.setNotes(notes);
    saveNotesOnLocalStorage(notes);
    setTimeout(() => setDeleteNote(false), 3000);
  }

  function handleNoteCopy() {
    if (!textRef.current?.innerText) return;
    setCopy(true);
    navigator.clipboard.writeText(textRef.current?.innerText);
    setTimeout(() => setCopy(false), 3000);
  }

  function saveNote() {
    if (!context.notes || !context.setNotes) return;
    const newNotes = context.notes?.map((note, contextIndex) => {
      if (contextIndex === index) {
        return editNote;
      }
      return note;
    });
    context.setNotes(newNotes);
    saveNotesOnLocalStorage(newNotes);
    setEditing(false);
  }

  return (
    <>
      <li className={styles.card}>
        <p ref={textRef}></p>
        <div className={styles.controlls}>
          {copy && <span className={styles.copySuccess}>Nota copiada!</span>}
          {deleteNote && (
            <span className={styles.deleteSuccess}>Nota excluída!</span>
          )}
          <Image
            src={EditImg}
            alt="Editar"
            title="Editar"
            className={styles.edit}
            onClick={() => setEditing(!editing)}
          />
          <Image
            src={CopyImg}
            alt="Copiar"
            title="Copiar"
            className={styles.copy}
            onClick={handleNoteCopy}
          />
          <Image
            src={DeleteImg}
            alt="Deletar"
            title="Deletar"
            className={styles.delete}
            onClick={handleNoteDelete}
          />
        </div>
      </li>
      {editing && (
        <div className={styles.editBox}>
          <label htmlFor="edit-note" className={styles.label}>
            Edição de nota
          </label>
          <textarea
            placeholder="Escreva o conteúdo da sua nota..."
            className={styles.textArea}
            name="edit-note"
            id="edit-note"
            value={editNote.content}
            onChange={({ target }) =>
              setEditNote({ ...editNote, content: target.value })
            }
          ></textarea>
          <div className={styles.buttonsContainer}>
            <button className={styles.buttonPrimary} onClick={saveNote}>
              Salvar
            </button>
            <button
              className={styles.buttonSecondary}
              onClick={() => setEditing(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteCard;
