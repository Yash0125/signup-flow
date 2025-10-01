import Head from "next/head";
import SignUpForm from "../components/SignUpForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sign Up - Create Your Account</title>
        <meta name="description" content="Create a new account" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SignUpForm />
      </main>
    </div>
  );
}
