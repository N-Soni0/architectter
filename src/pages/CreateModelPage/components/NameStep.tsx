import { Step } from '@/modules/StepForm'

const NameStep = () => {
  return (
    <Step isValid={true} onSubmit={async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 5000)
      })
    }}>
        <div>hi</div>
    </Step>
  )
}

export default NameStep