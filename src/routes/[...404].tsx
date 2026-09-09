import { Title } from "@solidjs/meta";

export default function NotFound() {
  return (
    <main class="text-center text-white">
      <Title>Page Not Found</Title>
      <h1>Not Found</h1>
      Sorry, the page you’re looking for doesn't exist
      <a
        href="/"
        class="px-4 py-2 bg-gray-900 border border-gray-900 rounded-xl text-white-700 hover:bg-gray-800 transition-colors duration-200"
      >
        Go Home
      </a>
    </main>
  );
}
