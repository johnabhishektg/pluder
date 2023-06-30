import Image from "next/image";
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";

const SignUp = () => {
  return (
    <div className="container mx-auto flex flex-cols w-full justify-center space-y-2">
      <div className="flex flex-col items-center space-y-2 text-center">
        <Image src="/treasure.png" width={55} height={55} alt="" />
        <h1 className="text-2xl font-semibold antialiased tracking-tight">
          Sign Up!
        </h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a Plunder account and agree to our
          User Agreement and Privacy Policy
        </p>

        {/* SignUp */}
        <UserAuthForm />

        <p className="px-8 text-center text-sm text-zinc-700">
          Already have a Plunder Account?{" "}
          <Link
            href={"/sign-in"}
            className="hover:text-zinc-800 text-sm underline underline-offset-4"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
