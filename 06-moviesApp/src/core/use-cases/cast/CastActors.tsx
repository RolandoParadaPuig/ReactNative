/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {MovieCast} from '../../entities/cast.entitie';

interface Props {
  actor: MovieCast;
}

export const CastActors: React.FC<Props> = ({actor}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 100,
          height: 150,
          borderRadius: 10,
        }}
        source={{
          uri: actor.avatar,
        }}
      />
      <View style={styles.actorInfo}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          {actor.name}
        </Text>
        <Text
          style={{
            fontSize: 15,
            opacity: 0.7,
          }}>
          {actor.character}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    width: 100,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
});
