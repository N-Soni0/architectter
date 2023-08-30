import { Step } from "@/components/StepForm"
import { useForm } from "react-hook-form"
import { RawDataSchemaType, rawDataSchema } from "../../schemas/rawDataSchema"
import NumberInput from "@/UI/NumberInput"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFormStore } from "../../store/formStore"

const RawDataStep = () => {
  const height = useFormStore(state => state.height);
  const udpateFormStore = useFormStore(state => state.update);
  const { register, handleSubmit, formState: { isValid, errors } } = useForm<RawDataSchemaType>({
    defaultValues: { height },
    mode: 'onBlur',
    resolver: zodResolver(rawDataSchema)
  });

  return (
    <Step 
      className="h-full"
      onSubmit={handleSubmit((formData) => {
        udpateFormStore(formData)
      })}
      isValid={isValid} 
    >

      <div className="mt-3 h-full flex items-center justify-center">
        <NumberInput label="Floor Height (metres)" className="bg-base-200" register={register('height', {valueAsNumber: true })} error={errors.height?.message} />
      </div>
    </Step>
  )
}

export default RawDataStep