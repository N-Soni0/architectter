import { useUserStore } from "@/store/userStore"
import ModelsList from "./components/ModelsList";
import { useUserModels } from "@/hooks/useUserModels";

const MainPage = () => {
  const user = useUserStore(state => state.user);
  const models = useUserModels(user?._id, { onlyPublic: false });

  return (
    <div className="container mt-5">
      <section>
        <h2 className="text-xl">
          <span className="text-orange-600 font-bold">{user?.username}'s </span>
          models
        </h2>

        <ModelsList models={models} />
      </section>
    </div>
  )
}

export default MainPage