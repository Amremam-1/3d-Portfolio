import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import TitleHeader from "../TitleHeader"
import { useForm } from "react-hook-form"
import ContactExperience from "../contact/ContactExperience"

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message too short").max(500),
})

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <section id="contact" className="section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk!"
        />

        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-5"
              >
                <div>
                  <input
                    {...register("name")}
                    placeholder="Your Name"
                    className="input-style"
                  />
                  {errors.name && (
                    <p className="text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <input
                    {...register("email")}
                    placeholder="Your Email"
                    className="input-style"
                  />
                  {errors.email && (
                    <p className="text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register("message")}
                    placeholder="Your Message"
                    rows={5}
                    className="input-style resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">Send Message</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full bg-[#cd7c2e] rounded-3xl hover:cursor-grap overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
