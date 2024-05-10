import {json} from "@sveltejs/kit";
import { error } from "@sveltejs/kit";
import Database from "better-sqlite3";


const db = new Database("TODO.db", {verbose: console.log});



let todos = [
    {
    id: 1, 
    task: 'studiare TPSI', 
    done: true, 
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
        task: "studiare italiano",
        done: true,
        priority: 3
    },
    {
        id: 4,
        task: "studiare GPO",
        done: true,
        priority: 2
    }
];



export async function GET({params, request, url}){
    console.log('Ricevuto HTTP GET con parametro:', params);
    
    const sql_azione2= db.prepare("SELECT * FROM todo");
    const sql_azione3= db.prepare("SELECT * FROM todo WHERE id=?");
    const sql_azione4= db.prepare("SELECT * FROM todo WHERE done=?");
    const sql_azione5= db.prepare("SELECT * FROM todo WHERE priority=?;");

    const exec_query=(azione, param)=>{
        const todo= param || param == 0 ? azione.all(param) : azione.all();
        if(todo.length>0)
        return json(todo, {status: 200});
    else
    return json({}, {status: 404});

    };

    try{
        if (params.id){
            return exec_query(sql_azione3, params.id);

        }

        if(url.searchParams.has("priority"))
        {
            return exec_query(sql_azione5, +url.searchParams.get("priority"));
        }

        if(url.searchParams.has("done"))
        {
            return exec_query(sql_azione4, +JSON.parse(url.searchParams.get("done")));
        }
        return exec_query(sql_azione2);
    } catch(e)
    {
        return json({}, {status:500});
    }


}

export async function POST({request}){
    try{
    const body= await request.json();
    console.log('Ricevuto HTTP POST con body', body);
    const sql_azione1=db.prepare("INSERT INTO todo (task, done, priority) VALUES(@task, @done, @priority)");
    const res=sql_azione1.run({
        task: body.task,
        done: +body.done,
        priority: +body.priority,
    });
    
    if (res.changes==1)
    {
        body["id"]=res.lastInsertRowid;
        return json(body, {
            status: 201,
            headers: new Headers({"Location": `http://localhost:5173/api/todos/${body["id"]}`})
        }); 
    }
} catch (e){
    console.log(e)
    return json({}, {status: 500});
}

    
}

export async function PUT({params, request}) {
    console.log("Ricevuto HTTP PUT con paramentro:", params);

    const body = await request.json();
    console.log("PUT BODY:", body);
    let todo = todos.findIndex(t => t.id == params.id);
    todos[todo] = body;
    return json('OK');
}




export async function PATCH({params, request}){
    console.log('Ricevuto HTTP PATCH con parametro:', params);
    
    const body = await request.json();

    
    let todo=todos.findIndex(t => t.id == params.id);
    
    const key= Object.keys(body);
    todos[todo][key]=body[key];

    return json('OK');
    
}

export async function DELETE({params, request}) {
    console.log("Ricevuto HTTP DELETE con paramentro:", params);

    todos = todos.findIndex(t => t.id != params.id);

    return json('OK');
}
