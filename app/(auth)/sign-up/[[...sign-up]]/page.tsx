import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center">
        {/* Left Side */}
        <div className="hidden w-1/2 flex-col justify-center px-16 lg:flex">
          <h1 className="text-6xl font-bold leading-tight text-white">
            Build.
            <br />
            Upload.
            <br />
            Grow.
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Join thousands of creators who securely upload, compress,
            and share videos with blazing-fast performance.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg">
              <h3 className="font-semibold text-white">
                🚀 Fast Uploads
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Optimized uploads powered by Cloudinary.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg">
              <h3 className="font-semibold text-white">
                🔒 Secure Login
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Authentication powered by Clerk.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg">
              <h3 className="font-semibold text-white">
                📦 PostgreSQL
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Reliable data powered by Prisma ORM.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg">
              <h3 className="font-semibold text-white">
                🌍 Share Anywhere
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Instantly generate shareable video links.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex w-full justify-center lg:w-1/2">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
            <SignUp
              appearance={{
                elements: {
                  card: "bg-transparent shadow-none",
                  rootBox: "w-full",
                  headerTitle:
                    "text-white text-3xl font-bold",
                  headerSubtitle:
                    "text-gray-400",
                  formButtonPrimary:
                    "bg-violet-600 hover:bg-violet-700 rounded-xl h-12 text-base",
                  socialButtonsBlockButton:
                    "border border-gray-700 bg-slate-900 hover:bg-slate-800 text-white",
                  formFieldInput:
                    "bg-slate-900 border border-gray-700 rounded-xl text-white",
                  formFieldLabel:
                    "text-gray-300",
                  dividerLine:
                    "bg-gray-700",
                  dividerText:
                    "text-gray-500",
                  footerActionLink:
                    "text-violet-400 hover:text-violet-300",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}