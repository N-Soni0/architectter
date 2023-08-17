import { useEffect } from "react";
import { useUser } from "./hooks/useUser";
import AppBar from "./modules/AppBar/AppBar";
import Router from "./routes/Router";
import { useUserStore } from "./store/userStore";
import { usePopUpStore } from "./store/popUpStore";


function App() {
  const clearPopUps = usePopUpStore(state => state.clear);
  const userDoc = useUser();  
  const signIn = useUserStore(state => state.signIn)

  useEffect(() => {
    if (!userDoc) return;

    signIn(userDoc);
  }, [userDoc?._id, signIn])

  return (
    <div 
      onClick={() => {
        clearPopUps();
      }}
      className="flex min-h-screen flex-col"
    >
      <header>
        <AppBar />
      </header>

      <main className="flex-1 min-h-full flex">
        <div className="min-h-full w-full">
          <Router />
        </div>
      </main>
    </div>
  );
}

export default App
