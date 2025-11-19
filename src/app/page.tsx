"use client";
import React, { useContext, useEffect } from "react";
import NoteList from "./components/NoteList";
import NotesContext from "@/context/NotesContext";

function Page() {
  const { getImportantNotes } = useContext(NotesContext);
  useEffect(() => {
    getImportantNotes(false);
  });
  return (
    <div>
      <NoteList />
    </div>
  );
}

export default Page;
