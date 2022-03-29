import React from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { Icon, Image, ListItem } from "react-native-elements";

export default function FlatListItem({
    title,
    subtitle='',
    useIcon=false,
    icon='user-circle-o',
    imageSrc=null,
    textAux1='',
    textAux2=''
}) {
    return (
        <ListItem bottomDivider>
            {
                useIcon &&
                    <Icon name={icon} type="font-awesome" color="red" />
            }
            {
                !useIcon && imageSrc &&
                <Image
                style={{borderRadius: 50}}
                source={{  uri: imageSrc }}
                containerStyle={styles.item}
                PlaceholderContent={<ActivityIndicator />}
              />
            }
            <ListItem.Content>
                <ListItem.Title style={{ color: 'red' }}>
                    {title}
                </ListItem.Title>
                <ListItem.Subtitle>{subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content right>
                <ListItem.Title right style={{ color: 'green' }}>
                    <Text>{ textAux1 }</Text>
                </ListItem.Title>
                <ListItem.Subtitle right>
                    <Text>{ textAux2 }</Text>
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
}

const styles = StyleSheet.create({
    item: {
      aspectRatio: 1,
      height: 40,
      maxWidth: 40,
      borderRadius: 20,
      flex: 1,
    },
  });