import { useEffect, useState } from "react"
import GeneralButton from "../GeneralButton";
import { useForm, SubmitHandler } from "react-hook-form"
import { supabase } from '../../lib/supabase'

type Inputs = {
  fullName: string
  company: string
  email: string
  plan: string
  note: string
  phone: string
}


const DemoForm = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errored, setErrored] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<Inputs>()

  useEffect(() => {
    reset()
  }, [success])

  const onSubmit: SubmitHandler<Inputs> = async (user_datails) => {
    setLoading(true)
    setErrored(false)
    setSuccess(false)
    const { data, error } = await supabase.from('user-details').insert([user_datails])
    if (error) {
      setErrored(true)
      console.error(error)
    } else {
      setSuccess(true)
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 mb-12 bg-tertiary-dark-blue max-w-lg rounded text-white flex text-sm flex-col gap-4">
      <h1 className="text-xl mb-2 ">Just Fill out the form to get things going. Let’s do this</h1>

      <div className="flex flex-col gap-2">
        <label htmlFor="full_name">Full name</label>
        <input
          {...register("fullName", { required: true })}
          required
          className="border-none bg-tertiary-dark rounded focus:border-tertiary-dark px-4 py-2 "
          type="text"
          id="full_name"
          placeholder="John Doe"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="company">Company</label>
        <input
          {...register("company", { required: true })}
          required
          className="border-none bg-tertiary-dark rounded focus:border-tertiary-dark px-4 py-2 "
          type="text"
          id="company"
          placeholder="Mavenlab"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          {...register("email", { required: true })}
          required
          className="border-none bg-tertiary-dark rounded focus:border-tertiary-dark px-4 py-2 "
          type="email"
          id="email"
          placeholder="johndoe@mavenlab.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="plan">Choose Plan</label>
        <select
          {...register("plan", { required: true })}
          required
          id="plan"
          className="border-none text-sm bg-tertiary-dark rounded">
          <option>Moobidesk Standard</option>
          <option>Moobidesk Enterprise</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="note">Note</label>
        <input
          {...register("note")}
          className="border-none bg-tertiary-dark rounded focus:border-tertiary-dark px-4 py-2 "
          type="text"
          id="note"
          placeholder="Note"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone">Phone Number</label>
        <input
          {...register("phone", { required: true })}
          required
          className="border-none bg-tertiary-dark rounded focus:border-tertiary-dark px-4 py-2 "
          type="tel"
          id="phone"
          placeholder="9876543210"
        />
      </div>
      <GeneralButton disabled={loading}>SUBMIT</GeneralButton>
      {success && <p className="text-base">Thank you, we’ll get in touch with you soon.</p>}
      {errored && <p className="text-base">Something went wrong. Please try again.</p>}
    </form>
  )
}

export default DemoForm;