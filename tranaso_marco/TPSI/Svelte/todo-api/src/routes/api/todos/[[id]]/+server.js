import { json } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";
import Database from "better-sqlite3"

const db = new Database("TODO.db", {verbose:console.log});
export async function GET({params,request,url}){
    console.log("Ricevuto HTTP GET con parametro",params);
    
    const sql_azione2=db.prepare("SELECT * FROM todo");
    const sql_azione3=db.prepare("SELECT * FROM todo WHERE id=?");
    const sql_azione4=db.prepare("SELECT * FROM todo WHERE done=?");
    const sql_azione5=db.prepare("SELECT * FROM todo WHERE priority=?");

    const exec_query=(azione,param)=>{
        const todo = param || param == 0 ? azione.all(param) : azione.all();

        if(todo.length>0)
            return json(todo, {status:200});
        else
            return json({},{status:404});
        
    };  

try{
    
    if (params.id){
        return exec_query(sql_azione3,params.id)
    }

        if(url.searchParams.has('priority'))
        {
            return exec_query(sql_azione5, +url.searchParams.get("priority"))
        }
        if(url.searchParams.has('done')){
            return exec_query(sql_azione4, +url.searchParams.get("priority"))
        }
        
    return exec_query(sql_azione2)
}

catch (e){
    return json({}, {status:500});
}
}
export async function POST({request}){
    console.log("Ricevuto HTTP POST");
    
    const body = await request.json()
    console.log("POST BODY:", body)
    body['id']=Math.ceil(Math.random()*100)

    todos.push(body)

    return json('OK');
}
export async function PUT({params, request}){
    console.log("Ricevuto HTTP PUT con parametro");
    
    const body = await request.json()
    console.log("PUT BODY:", body)
    let todo = todos.findIndex(t=>t.id==params.id)
    todos[todo]=body
    return json('OK')
}
export async function PATCH({params, request}){
    console.log("Ricevuto HTTP PATCH con parametro", params);
    
    let body = await request.json()
    let todo = todos.findIndex(t=>t.id==params.id)
    const key = Object.keys(body)
    todos[todo][key] = body[key]
    return json('OK')
}
export async function DELETE({params, request}){
    console.log("Ricevuto HTTP DELETEcon parametro", params);
    
    todos=todos.filter(t=>t.id!=params.id)
    return json("OK")
}