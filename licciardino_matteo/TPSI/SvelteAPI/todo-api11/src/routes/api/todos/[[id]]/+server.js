import { error } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";
import Database from "better-sqlite3";

const db = new Database("TODO.db", { verbose: console.log });

export async function GET({ params, request, url }){
    console.log("Ricevuto HTTP GET con parametro:", params);

    const sql_azione2 = db.prepare("SELECT * FROM todo");
    const sql_azione3 = db.prepare("SELECT * FROM todo WHERE id = ?");
    const sql_azione4 = db.prepare("SELECT * FROM todo WHERE done = ?");
    const sql_azione5 = db.prepare("SELECT * FROM todo WHERE priority = ?");

    const exec_query = (azione, param) => {
        const todo = param || param == 0 ? azione.all(param) : azione.all();

        if(todo.length > 0)
            return json(todo, {status: 200});
        else
            return json({}, {status: 400});
    };

    try{
        if(params.id){
            return exec_query(sql_azione3, params.id)
        }

        if(url.searchParams.has("priority")){
            return exec_query(sql_azione5, +url.searchParams.get("priority"))
        }

        if(url.searchParams.has("done")){
            return exec_query(sql_azione4, +JSON.parse(url.searchParams.get("done")))
        }

        return exec_query(sql_azione2)
    } catch (e) {
        return json({}, {status: 500})
    }
}

export async function POST({ request }){
    try{
        const body = await request.json();
        console.log("Ricevuto HTTP POST con body:", body);

        const sql_azione1 = db.prepare("INSERT INTO todo (task, done, priority) VALUES (@task, @done, @priority)");

        const res = sql_azione1.run({
            task: body.task,
            done: +body.done,
            priority: +body.priority,
        });

        if(res.changes == 1){
            body["id"] = res.lastInsertRowid;

            return json(body, {
                status: 201,
                headers: new Headers({"Location": `http://localhost:5173/api/todos${body["id"]}`})
            });
        }
    } catch (e) {
        console.log(e)

        return json({}, {status: 500});
    }
}

export async function PUT({ params, request }){
    try{
        const body = await request.json();
        console.log("Ricevuto HTTP PUT con il parametro:", params);
        console.log("PUT BODY:", body);

        const sql_azione6 = db.prepare("UPDATE todo SET task = @task, done = @done, priority = @priority WHERE id = @id");

        const res = sql_azione6.run({
            id: +params.id,
            task: body.task,
            done: +body.done,
            priority: +body.priority
        });

        console.log(res);

        if(res.changes == 0)
            return json({}, { status: 404 });
        else if(res.changes == 1)
            return json(body, { status: 200 });
    } catch (e){
        console.log(e);

        return json({}, { status: 500 });
    }
}

/*
export async function PATCH({ params, request }){
    console.log("Ricevuto HTTP PATCH con parametro:", params);

    let body = await request.json();
    
    let todo = todos.findIndex(t => t.id == params.id);
    const key = Object.keys(body);
    todos[todo][key] = body[key];

    return json('OK');
}

export async function DELETE({ params, request }){
    console.log("Ricevuto HTTP DELETE con parametro:", params);
    
    todos = todos.filter(t => t.id != params.id);;

    return json('OK');
}*/