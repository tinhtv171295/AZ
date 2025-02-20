import Button from "./components/UI/Button";

function App() {
  return (
    <div>
      <h1>Vite + React</h1>
      <Button appearance="light">Xem thêm</Button>

      <div
        style={{
          display: "block",
          width: 100,
          height: 100,
          background: "#000",
          padding: 8,
        }}
      >
        <Button appearance="dark">Xem thêm</Button>
      </div>
    </div>
  );
}

export default App;
