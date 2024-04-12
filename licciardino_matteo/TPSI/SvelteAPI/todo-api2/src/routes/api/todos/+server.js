import { json } from "@sveltejs/kit";

let todos = [
    {
        id: 1,
        task: "studiare TPSI",
        done: true,
        priority: 1
    }
];

export async function GET({ request }){
    console.log("Ricevuto HTTP GET");
    return json(todos);
}