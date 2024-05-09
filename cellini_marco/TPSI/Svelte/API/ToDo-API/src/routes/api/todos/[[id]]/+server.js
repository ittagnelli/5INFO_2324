import { json } from "@sveltejs/kit";
import Database from 'better-sqlite3';
import { error } from '@sveltejs/kit';

const db = new Database("./todo.db", { verbose: console.log });

export async function GET({ params, request, url }) {       // get by ID or passing a parameter using query language
    console.log("Ricevuto HTTP GET parametri:\t", params);

    const select_all = db.prepare("SELECT * FROM todo");
    const select_id = db.prepare("SELECT * FROM todo WHERE id = ?");
    const select_done = db.prepare("SELECT * FROM todo WHERE done = ?");
    const select_priority = db.prepare("SELECT * FROM todo WHERE priority = ?");

    const exec_query = (azione, param) => {
        const todo = param || param == 0 ? azione.all(param) : azione.all();
        if (todo.length > 0)
            return json(todo, { status: 200 });
        else
            return json({}, { status: 404 });
    };

    try {
        if (params.id)
            return exec_query(select_id, params.id);
        else if (url.searchParams.has('priority'))
            return exec_query(select_priority, +url.searchParams.get('priority'));
        else if (url.searchParams.has('done'))
            return exec_query(select_done, +url.searchParams.get('done'));
        return exec_query(select_all);
    } catch (e) {
        return json({}, { status: 500 });
    }
}

export async function POST({ request }) {
    console.log("Ricevuto HTTP POST");
    const body = await request.json();
    console.log("POST Body: ", body);
    body['id'] = Math.floor(Math.random() * 100);
    todos.push(body);
    return json('ok');
}

export async function PUT({ params, request }) {
    console.log("Ricevuto HTTP PUT con parametro: ", params);
    const body = await request.json();
    console.log("PUT Body: ", body);

    let todo = todos.findIndex(e => e.id == params.id);
    if (todo >= 0)
        todos[todo] = body
    else
        return json('TODO not found')
    return json('OK');
}

export async function PATCH({ params, request }) {
    console.log("HTTP PATCH con parametro: ", params);
    let body = await request.json();

    let todo = todos.findIndex(e => e.id == params.id);
    const key = Object.keys(body);

    if (todo >= 0 && !Object.keys(todos[0]).includes(key))
        todos[todo][key] = body[key];
    else
        return json('TODO or PROPERTY not found')

    return json('OK');
}

export async function DELETE({ params, request }) {
    console.log("ricevuto HTTP DELETE parametro: ", params);
    if (todos.findIndex(e => e.id == params.id) >= 0)
        todos = todos.filter(e => e.id != params.id)
    else
        return json('TODO not found')
    return json('ok');
}