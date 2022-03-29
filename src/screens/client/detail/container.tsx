import React from "react";
import ClientDetailView from "./presentation";

export default function ClientDetail( { navigation, route }) {

    const { client } = route.params;

    return <ClientDetailView client={ client } />
}