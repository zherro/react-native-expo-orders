import React from "react";
import ClientListView from "./presentation";

export default function ClientList( { navigation } ) {
    return <ClientListView
        navigateToDetail={(client) => navigation.navigate('ClientDetail', {client: client})}
        navigateToCreate={() => navigation.navigate('ClientForm') }
    />
}