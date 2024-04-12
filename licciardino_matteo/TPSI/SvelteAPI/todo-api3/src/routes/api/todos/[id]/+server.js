import { json } from "@sveltejs/kit";

let todos = [
    {
        id: 1,
        task: "studiare TPSI",
        done: true,
        priority: 1
    }
];

export async function GET({ params, request }){
    console.log("Ricevuto HTTP GET con parametro:", params);

    if(params.id){
        const todo = todos.filter(t => t.id == params.id)[0];
        return json(todo);
    } else {
        return json(todos);
    }
}