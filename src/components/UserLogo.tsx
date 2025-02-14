import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
function UserLogo() {
  return (
    <>
        <SignedOut>
          <div className="flex flex-col items-center w-[50px]">
            <SignInButton />
          </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
    </>
  )
}

export default UserLogo