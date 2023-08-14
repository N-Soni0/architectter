import { useUserStore } from "@/store/userStore"
import { useModelStore } from "@/store/modelStore/useModelStore";
import { useEffect } from "react";
import { ModelsList } from "@/modules/ModelsList";
import { useAsyncCall } from "@/hooks/useAsyncCall";

const MainPage = () => {
  const user = useUserStore(state => state.user);
  const models = useModelStore(state => state.models);
  const getUserModels = useModelStore(state => state.getUserModels);
  const { run, isLoading } = useAsyncCall(getUserModels);

  useEffect(() => {
    if (!user?._id) return;

    run(user._id);
  }, [user?._id, getUserModels])

  return (
    <div className="container mt-5">
      <section>
        <h2 className="text-xl">
          <span className="text-accent font-bold">{user?.username}'s </span>
          models
        </h2>

        <ModelsList models={models} isLoading={isLoading} />
      </section>
    </div>
  )
}

export default MainPage