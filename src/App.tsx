import { useEffect } from "react";
import { useUser } from "./hooks/useUser";
import AppBar from "./modules/AppBar/AppBar";
import Router from "./routes/Router";
import { useUserStore } from "./store/userStore";


function App() {
  const userDoc = useUser();  
  const signIn = useUserStore(state => state.signIn)

  useEffect(() => {
    if (!userDoc) return;

    signIn(userDoc);
  }, [userDoc?._id, signIn])

  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <AppBar />
      </header>

      <main className="flex-1 flex">
        <Router />
      </main>
    </div>
  );
}

export default App
