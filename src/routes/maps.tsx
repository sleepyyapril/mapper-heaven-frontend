import { For, Show } from "solid-js";
import { Title } from "@solidjs/meta";
import { getMaps } from "~/utils/maps";
import { createStore } from "solid-js/store";

var maps: string[] = [];

export default function Maps() {
  const maybeMaps = getMaps();
  const getLink = (file_name: string) => {
      return "/mapfiles/" + file_name;
  };

  if (maybeMaps != null)
    maps = maybeMaps;

  const hasMaps = () => maps != null && maps.length > 0;

  return (
    <main class="text-white">
      <Title>Map Files</Title>
      <div>
        <p>Maps: {maps?.length ?? 0}</p>
        <Show when={hasMaps()}>
          <div class="grid grid-cols-6 gap-4">
            <For each={maps}>
              {
              (item) => 
                <a
                    href={getLink(item)}
                    rel="external"
                    class="group w-full px-3 py-2 text-gray-100 bg-gray-800 border border-gray-700 rounded-lg hover:bg-[#5865F2] hover:border-none focus:outline-none transition-colors duration-300 flex items-center justify-center gap-2.5 text-gray-700 text-white"
                    download={item}>
                      Download {item}
                  </a>
              }
            </For>
          </div>
        </Show>
      </div>
    </main>
  );
}
