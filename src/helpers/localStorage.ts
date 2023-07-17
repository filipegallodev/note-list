export function getNotesFromLocalStorage(): Note[] | null {
  if (typeof window !== "undefined") {
    const notes = localStorage.getItem("notes");
    if (notes) return JSON.parse(notes);
  }
  return null;
}

export function saveNotesOnLocalStorage(notes: Note[]): void {
  if (typeof window !== "undefined")
    localStorage.setItem("notes", JSON.stringify(notes));
}
