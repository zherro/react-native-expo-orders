import React from "react";
import { ScrollView, Text, View } from "react-native";
import FlatListItem from "../../../components/list/flat-item";
import flex, { metrics } from "../../../components/theme/theme-style";


const TextLabel = ( { label, text } ) => {
    return (<View
        style={[
            flex.row,
            metrics.padding
        ]}
    >
        <Text style={{ color: "gray" }}>{ label }: </Text>
        <Text style={{
            fontSize: 14,
            textTransform: "uppercase",
            fontWeight: "500",
        }}
        >{ text }</Text>
    </View>);
}

export default function OrderView({ order }) {
    return (
        <View style={[ metrics.marginTop ]}>
            <TextLabel label={'Status'} text={order?.status} />
            <TextLabel label={'Client'} text={order?.clientName} />
            <TextLabel label={'Created At'} text={order?.createdAt} />
            <TextLabel label={'Closed At'} text={order?.closedAt} />
            <ScrollView>
                {
                    order?.products?.map((product, i) => <FlatListItem title={product}  />)
                }
                
            </ScrollView>
        </View>
    );
}