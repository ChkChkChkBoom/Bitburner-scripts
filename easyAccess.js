/** @param {NS} ns */
export async function main(ns){
    ns.tprint(getFiles())
}
async function getFiles(){
    const url="https://api.github.com/repos/ZianConradie/Bitburner-scripts/git/trees/main?recursive=1"
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch repo tree");
    const data = await res.json();
    const files = data.tree
        .filter(entry => entry.type === "blob")  // blobs = files
        .map(entry => entry.path);
    return files;
}