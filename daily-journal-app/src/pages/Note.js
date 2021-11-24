function Note({ notes, deleteNotes }) {
  return (
    <div className="container-notes">
      <div className="container-post">
        <h4>{notes.title}</h4>
        <p>{notes.text}</p>
        <div className="container-btns">
          <button
            className="wall-btn"
            onClick={() => {
              console.log(notes.id);
              deleteNotes(notes.id)
                .then(() => {
                  console.log("exito");
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            Borrar
          </button>
          <button className="wall-btn">Editar</button>
        </div>
      </div>
    </div>
  );
}

export default Note;
