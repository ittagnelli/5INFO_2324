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

export async function PATCH({ params, request }){
    try{
        const body = await request.json();
        console.log("Ricevuto HTTP PATCH con il parametro:", params);
        console.log("PUT BODY:", body);

        const sql_azione7 = db.prepare("UPDATE todo SET task = @task WHERE id = @id");
        const sql_azione8 = db.prepare("UPDATE todo SET priority = @priority WHERE id = @id");
        const sql_azione9 = db.prepare("UPDATE todo SET done = @done WHERE id = @id");
        const sql_get_todo = db.prepare("SELECT * FROM todo WHERE id = ?");

        let key = Object.keys(body)[0];
        let res; 

        switch(key){
            case 'task':
                res = sql_azione7.run({
                    id: +params.id,
                    task: body.task
                })
            break;

            case 'priority':
                res = sql_azione8.run({
                    id: +params.id,
                    priority: body.priority
                })
            break;

            case 'done':
                res = sql_azione9.run({
                    id: +params.id,
                    done: body.done
                })
            break;

            default:
                return json({}, { status: 500 })
        }

        if (res.changes == 0)
            return json({}, { status: 400 });
        else if (res.changes == 1){
            const todo = sql_get_todo.all(+params.id);
            return json(todo, { status: 200 })
        }
    } catch (e) {
        console.log(e);

        return json({}, { status: 500 })
    }
}

export async function DELETE({ params, request }){
    try{
        console.log("Ricevuto HTTP DELETE con il parametro:", params);

        const sql_azione10 = db.prepare("DELETE FROM todo WHERE id = @id");
        const res = sql_azione10.run({id: +params.id});

        if(res.changes == 0)
            return json({}, { status: 404 });
        else if(res.changes == 1)
            return new Response(null, { status: 204 });
    } catch (e) {
        return json({}, {status: 500});
    }
}