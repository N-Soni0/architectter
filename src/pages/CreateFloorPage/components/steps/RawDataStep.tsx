import { Step } from "@/components/StepForm"
import { useForm } from "react-hook-form"
import { RawDataSchemaType, rawDataSchema } from "../../schemas/rawDataSchema"
import NumberInput from "@/UI/NumberInput"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFormStore } from "../../store/formStore"

const RawDataStep = () => {
  const rawDataStepStore = useFormStore(state => state.rawDataStep);
  const { register, handleSubmit, formState: { isValid, errors } } = useForm<RawDataSchemaType>({
    defaultValues: rawDataStepStore.data,
    mode: 'onBlur',
    resolver: zodResolver(rawDataSchema)
  });

  return (
    <Step 
      className="h-full"
      onSubmit={handleSubmit((formData) => {
        rawDataStepStore.update(formData)
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