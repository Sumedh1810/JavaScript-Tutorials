export const username = "sumedh";
export const age = 21;

export function connect(){
    return `${username} is connected!`;
}

function disconnect(){
    return `${username} is disconnected`;
}

//export {username, age, connect, disconnect}; export selected parameters together