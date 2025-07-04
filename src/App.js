import EditorWindow from "./components/EditorWindow";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#daf5ed",
        color: "gray",
        padding: "2rem 1.5rem",
        boxSizing: "border-box",
      }}
    >
      <EditorWindow />
    </div>
  );
}

export default App;
