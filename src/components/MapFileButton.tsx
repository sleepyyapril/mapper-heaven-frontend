export const MapFileButton = (props: { file_name: string }) => {
    const getLink: () => string = () => {
        return "/" + props.file_name;
    };

    return (
        <a
        href={getLink()}
        class="group w-full px-3 py-2 text-gray-100 bg-gray-800 border border-gray-700 rounded-lg hover:bg-[#5865F2] hover:border-none focus:outline-none transition-colors duration-300 flex items-center justify-center gap-2.5 text-gray-700 text-white"
        >
            Download
        </a>
    );
}
