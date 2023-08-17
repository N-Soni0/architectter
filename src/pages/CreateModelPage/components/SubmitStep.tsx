import { convex } from '@/main'
import { Step } from '@/modules/StepForm'
import { useUserStore } from '@/store/userStore'
import { api } from '@convex/_generated/api'

const SubmitStep = () => {
  const userId = useUserStore(state => state.user?._id);

  const createModel = async () => {
    if (!userId) {
      return console.error('User not signed in. Unabled to create a model')
    }
    convex.mutation(api.models.post.createModel, { address: "Null", creator: userId, name: `My home ${Date.now()}`,private: false})
  }

  return (
    <Step 
      isValid={true} 
      onSubmit={async () => {
        await createModel()
      }}
    >
        <h2></h2>
        <div>submit</div>
    </Step>
  )
}

export default SubmitStep