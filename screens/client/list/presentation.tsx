import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { FAB } from "react-native-elements";
import FabButton from "../../../components/button/fab-btn";
import HeaderWithSearch from "../../../components/header/header-with-search";
import FlatListItem from "../../../components/list/flat-item";
import { flex } from "../../../components/theme/theme";
import { colors } from "../../../components/theme/theme-style";

type List2Data = {
    name: string;
    avatar_url: string;
    subtitle: string;
    linearGradientColors: string[];
};

const list2: Partial<List2Data>[] = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://uifaces.co/our-content/donated/XdLjsJX_.jpg',
        subtitle: 'Vice President',
        linearGradientColors: ['#FF9800', '#F44336'],
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://uifaces.co/our-content/donated/KtCFjlD4.jpg',
        subtitle: 'Vice Chairman',
        linearGradientColors: ['#3F51B5', '#2196F3'],
    },
    {
        name: 'Amanda Martin',
        avatar_url:
            'https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=047fade70e80ebb22ac8f09c04872c40',
        subtitle: 'CEO',
        linearGradientColors: ['#FFD600', '#FF9800'],
    },
    {
        name: 'Christy Thomas',
        avatar_url: 'https://randomuser.me/api/portraits/women/48.jpg',
        subtitle: 'Lead Developer',
        linearGradientColors: ['#4CAF50', '#8BC34A'],
    },
    {
        name: 'Melissa Jones',
        avatar_url:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg',
        subtitle: 'CTO',
        linearGradientColors: ['#F44336', '#E91E63'],
    },
];

export default function ClientListView({ navigateToDetail, navigateToCreate }) {

    const searchAction = (search) => {

    }

    return (

        <View
            style={[
                { flex: 1, flexDirection: 'column', },
            ]}
        >
            <ScrollView style={{ paddingBottom: 70 }}>
                <HeaderWithSearch searchAction={searchAction} title={'Clients'} />
                <View style={styles.list}>
                    {list2.map((client, i) => (
                        <TouchableOpacity key={i} onPress={() => navigateToDetail(client)}>
                            <FlatListItem title={client.name} subtitle={client.subtitle} />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <FabButton action={() => navigateToCreate()} />
        </View>

    );
}

const styles = StyleSheet.create({
    list: {
        marginTop: 20,
        borderTopWidth: 1,
        borderColor: colors.default,
    },
});