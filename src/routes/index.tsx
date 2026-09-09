import { Title } from "@solidjs/meta";
import { useAuth } from "~/components/Context";

export default function Home() {
  const { session } = useAuth();

  return (
    <main class="text-white">
      <Title>Home</Title>
      <h1 class="text-center">Hello World</h1>
      <img src="/favicon.svg" alt="logo" class="w-28" />
      <p>You are signed in as: <b class="font-bold">{session()?.email}</b></p>
    </main>
  );
}
