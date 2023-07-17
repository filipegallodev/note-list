export function getNotesFromLocalStorage(): Note[] | null {
  const notes = localStorage.getItem("notes");
  if (notes) return JSON.parse(notes);
  return null;
}

export function saveNotesOnLocalStorage(notes: Note[]): void {
  localStorage.setItem("notes", JSON.stringify(notes));
}
