import React, { useContext } from "react";
import styles from "./NoteList.module.css";
import Section from "../Section/Section";
import NoteCard from "./NoteCard";
import { NotesContext } from "@/Context";

const NoteList = () => {
  const context = useContext(NotesContext);

  return (
    <Section title="Minhas notas">
      <div>
        {context.notes && context.notes.length >= 1 ? (
          <ul className={styles.list}>
            {context.notes.map((note, index) => (
              <NoteCard key={index} content={note.content} index={index} />
            ))}
          </ul>
        ) : (
          <div className={styles.box}>
            <p className={styles.nothing}>
              Você ainda não tem nenhuma nota criada.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default NoteList;
