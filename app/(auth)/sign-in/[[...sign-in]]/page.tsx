import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center">
        {/* Left Side */}
        <div className="hidden w-1/2 flex-col justify-center px-16 lg:flex">
          <h1 className="text-6xl font-bold text-white">
            Stream.
            <br />
            Share.
            <br />
            Compress.
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Upload videos, optimize them automatically,
            and share them instantly.
          </p>

          <div className="mt-10 flex gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              ⚡ Cloudinary
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              🔒 Clerk Auth
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              ☁ Prisma
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex w-full justify-center lg:w-1/2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}