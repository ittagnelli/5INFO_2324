import {json} from "@sveltejs/kit";

let todos = [
    {
        id: 1,
        task: "studiare TPSI",
        done: false,
        priority: 1
    },
    {
        id: 2,
        task: "studiare reti",
        done: false,
        priority: 1
    },
    {
        id: 3,
        task: "strimpellare",
        done: true,
        priority: 3
    },
    {
        id: 4,
        task: "allenamento",
        done: true,
        priority: 2
    }
];

export async function GET({params, request}) {
    console.log("Ricevuto HTTP GET", params);
    if(params.id){
        const todo = todos.filter(t => t.id == params.id)[0];
        return json(todo);
    } else {
        return json(todos);
    }
}