import {json} from "@sveltejs/kit";


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
    if(params.id)
    {
        const todo= todos.filter(t => t.id == params.id)[0];
        return json(todos);

    }
    else 
    {
        let res= todos; 
        if (url.searchParams.has('priority')){
            res=todos.filter(t => t.priority == +url.searchParams.get('priority'));

        }

        else if(url.searchParams.has('done')){
            res=todos.filter(t => t.done == (url.searchParams.get('done')=== 'true'));

        }
        

        return json(res);
    }
}

export async function POST({request}){
    console.log('Ricevuto HTTP POST');
    
    const body = await request.json();
    console.log("POST BODY:", body);
    body['id']=Math.ceil(Math.random() * 100);

    todos.push(body);

    return json('OK');
    
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
