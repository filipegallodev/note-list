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

const NoteCard = ({ content, index }: { content: string; index: number }) => {
  const context = useContext(NotesContext);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [copy, setCopy] = useState<boolean>(false);
  const [deleteNote, setDeleteNote] = useState<boolean>(false);

  useEffect(() => {
    if (textRef.current) textRef.current.innerText = content;
  }, [content]);

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

  return (
    <li className={styles.card}>
      <p ref={textRef}></p>
      <div className={styles.controlls}>
        {copy && <span className={styles.copySuccess}>Nota copiada!</span>}
        {deleteNote && (
          <span className={styles.deleteSuccess}>Nota excluída!</span>
        )}
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
  );
};

export default NoteCard;
