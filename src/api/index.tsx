
const HOST_API = 'https://orders-api-curso.herokuapp.com/';

const buildUri = (uri) => {
    return `${HOST_API}${uri}`;
}

export function getApi(route, getDataAction, processDataAction, catchAction) {
    fetch( buildUri(route), { method: 'GET' } )
    .then( getDataAction )
    .then( processDataAction)
    .catch( catchAction );
}