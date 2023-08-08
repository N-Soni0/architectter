import Router from "./routes/Router";


function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header></header>

      <main className="flex-1 flex">
        <Router />
      </main>
    </div>
  );
}

export default App
