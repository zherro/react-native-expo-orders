
const HOST_API = 'https://orders-api-curso.herokuapp.com/';
// const HOST_API = 'http://localhost:8080/';

const buildUri = (uri) => {
    return `${HOST_API}${uri}`;
}

export function getApi(route, getDataAction, processDataAction, catchAction) {
    fetch( buildUri(route), { method: 'GET' } )
    .then( getDataAction )
    .then( processDataAction)
    .catch( catchAction );
}

export function postApi(route, data, getDataAction, catchAction) {
    fetch( buildUri(route), {
         method: 'POST' ,
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data: data})
    })
    .then( getDataAction )
    .catch( catchAction );
}