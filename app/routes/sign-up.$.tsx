import { SignUp } from "@clerk/remix";

export default function SignUpPage() {
  return (
    <main className="relative h-screen w-full">
      <div className="flex-center glassmorphism-auth h-screen w-full">
        <SignUp />
      </div>
    </main>
  );
}
