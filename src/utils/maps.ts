import { action } from "@solidjs/router";
import fs from "fs";

const mapFilesPath: string = "public/mapfiles/"

export const getMaps = () => {
    "use server";
    var valid_maps = new Array<string>();
    var files = fs.readdirSync(mapFilesPath, { withFileTypes: true })

    for (let file of files) {
        if (!file.isFile || !file.name.endsWith(".yml")) {
            console.log(file.name);
            return;
        }
        
        valid_maps.push(file.name);
    }

    return valid_maps;
}