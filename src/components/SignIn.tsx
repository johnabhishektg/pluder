import Image from "next/image";
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";

const SignIn = () => {
  return (
    <div className="container mx-auto flex flex-cols w-full justify-center space-y-2">
      <div className="flex flex-col items-center space-y-2 text-center">
        <Image src="/treasure.png" width={55} height={55} alt="" />
        <h1 className="text-2xl font-semibold antialiased tracking-tight">
          Welcome Back
        </h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a Plunder account and afree to our
          User Agreement and Privancy Policy
        </p>

        {/* signin */}
        <UserAuthForm />

        <p className="px-8 text-center text-sm text-zinc-700">
          New to Plunder?{" "}
          <Link
            href={"/sign-up"}
            className="hover:text-zinc-800 text-sm underline underline-offset-4"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
