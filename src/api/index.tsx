
export function getApi(route, getDataAction, processDataAction, catchAction) {
    fetch( route, { method: 'GET' } )
    .then( getDataAction )
    .then( processDataAction)
    .catch( catchAction );
}