import ServicesList from "./components/ServicesList"

const AuthPage = () => {
  return (
    <div className="w-full h-screen flex mt-[100px] items-center flex-col">
        <h1 className="mb-5 text-2xl">Увійдіть або зареєструйтеся</h1>

        <ServicesList />
    </div>
  )
}

export default AuthPage