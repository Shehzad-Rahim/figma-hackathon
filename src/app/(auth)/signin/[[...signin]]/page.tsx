import { SignIn } from "@clerk/nextjs"

function page() {
  return (
    <div className="flex justify-center items-center my-10">
      <SignIn/>
    </div>
  )
}

export default page