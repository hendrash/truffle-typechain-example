import { type } from "os";

let Branch_Name: "main_net" | "test_net" | "local_net"
export const getBranch_Name = () => {
    return Branch_Name;
}
export const VersionManager = () => {
    const { exec } = require('child_process');
    exec('git rev-parse --abbrev-ref HEAD', (err: any, stdout: any, stderr: any) => {
        if (err) {
            console.error(err)
        }
        if (typeof stdout === 'string') {
            switch (stdout.trim()) {
                case "main_net":
                    Branch_Name = "main_net"
                    break
                case "test_net":
                    Branch_Name = "test_net"
                    break
                case "local_net":
                    Branch_Name = "local_net"
                    break
                default:
                    console.error("No specified branch configuration may not work")
            }
        }
    });
}
export type ContractConfig={
    
}