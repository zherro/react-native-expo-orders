import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { Icon, Image, ListItem } from "react-native-elements";

export default function FlatListItem({
    title,
    subtitle='',
    useIcon=false,
    icon='user-circle-o',
    imageSrc=null,
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
                    11:00 am
                </ListItem.Title>
                <ListItem.Subtitle right>12:00 am</ListItem.Subtitle>
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