import { SignUp } from "@clerk/nextjs"

function page() {
  return (
    <div className="flex justify-center items-center my-10">
      <SignUp/>
    </div>
  )
}

export default page