import { SignIn } from "@clerk/remix";

export default function SignInPage() {
  return (
    <main className="relative h-screen w-full">
      <div className="flex-center glassmorphism-auth h-screen w-full">
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </div>
    </main>
  );
}
