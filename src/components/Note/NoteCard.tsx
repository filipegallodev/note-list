import React, { useContext, useEffect, useRef } from "react";
import styles from "./NoteCard.module.css";
import DeleteImg from "@/../public/delete.png";
import Image from "next/image";
import {
  getNotesFromLocalStorage,
  saveNotesOnLocalStorage,
} from "@/helpers/localStorage";
import { NotesContext } from "@/Context";

const NoteCard = ({ content, index }: { content: string; index: number }) => {
  const context = useContext(NotesContext);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) textRef.current.innerText = content;
  }, [content]);

  function handleNoteDelete() {
    const notes = getNotesFromLocalStorage();
    if (!notes || !context.setNotes) return;
    notes.splice(index, 1);
    context.setNotes(notes);
    saveNotesOnLocalStorage(notes);
  }

  return (
    <li className={styles.card}>
      <p ref={textRef}></p>
      <Image
        src={DeleteImg}
        alt="Deletar"
        className={styles.delete}
        onClick={handleNoteDelete}
      />
    </li>
  );
};

export default NoteCard;
