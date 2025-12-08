/** @param {NS} ns */
export async function main(ns){
    const mode=ns.args[0]
    switch (mode){
        case "list":
            ns.tprint(getFiles())
        case "show":
            let fileName=ns.args[1]
            let u="https://raw.githubuserdata.com/ZianConradie/Bitburner-scripts/main/"+fileName
            let re=await fetch(u)
            if (!re.ok) throw new Error("Failed to fetch file")
            let data=await re.json()
            ns.tprint(data)
        case "download":
            let fileName=ns.args[1]
            let u="https://raw.githubuserdata.com/ZianConradie/Bitburner-scripts/main/"+fileName
            let re=await fetch(u)
            if (!re.ok) throw new Error("Failed to fetch file")
            let data=await re.json()
            ns.write(fileName, data, "w")
        case "credits":
            ns.tprint("Made by ChkChkChkBoom (@chkchkchkboom on Discord)")
        case "help":
            ns.tprint("Commands:\nhelp: displays help\ncredits: shows credits\nlist: display file tree\nshow: display a file\ndownload: downloads a file to Bitburner")
    }
}
async function getFiles(){
    const url="https://api.github.com/repos/ZianConradie/Bitburner-scripts/git/trees/main?recursive=1"
    const res = await fetch(url)
    if (!res.ok) throw new Error("Failed to fetch repo tree")
    const data = await res.json()
    const files = data.tree
        .filter(entry => entry.type === "blob")  // blobs = files
        .map(entry => entry.path)
    return files
}