"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import PersonTakingNotesImg from "@/../public/person-taking-notes.png";
import NoteCreate from "@/components/Note/NoteCreate";
import NoteList from "@/components/Note/NoteList";
import { getNotesFromLocalStorage } from "@/helpers/localStorage";
import Footer from "@/components/Footer/Footer";
import { NotesContext } from "@/Context";

export default function Home() {
  const [notes, setNotes] = useState<Note[] | null>(getNotesFromLocalStorage());

  return (
    <>
      <main>
        <div className={styles.introduction}>
          <div className={styles.introductionContainer}>
            <div>
              <h1 className={styles.welcome}>
                Seja bem-vindo ao seu{" "}
                <strong className={styles.strong}>app de notas</strong>!
              </h1>
            </div>
            <Image
              src={PersonTakingNotesImg}
              alt="Pessoa criando notas"
              className={styles.image}
              priority
            />
          </div>
        </div>
        <NotesContext.Provider value={{ notes, setNotes }}>
          <NoteCreate />
          <NoteList />
        </NotesContext.Provider>
      </main>
      <Footer />
    </>
  );
}
