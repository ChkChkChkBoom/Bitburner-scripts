/** @param {NS} ns */
export async function main(ns) {
    var target = ns.args[0]
    var sucess=true
    try{
        ns.brutessh(target)
    }
    catch{
        ns.tprint("BruteSSH failed")
    }
    try{
        ns.ftpcrack(target)
    }
    catch{
        ns.tprint("FTPCrack failed")
    }
    try{
        ns.relaysmtp(target)
    }
    catch{
        ns.tprint("relaySMTP failed")
    }
    try{
        ns.httpworm(target)
    }
    catch{
        ns.tprint("HTTPWorm failed")
    }
    try{
        ns.sqlinject(target)
    }
    catch{
        ns.tprint("SQLInject failed")
    }
    try{
        ns.nuke(target)
    }
    catch{
        ns.tprint("NUKE failed. Try later when you can open more ports.")
        sucess=false
    }
    if (sucess){ns.tprint("Sucess! "+target+" is opened")}
}