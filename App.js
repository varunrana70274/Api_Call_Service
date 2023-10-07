/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { ScrollView } from 'native-base';
// import { MotiView } from 'moti';
// import * as Animatable from 'react-native-animatable';

export default function App() {
  const [data, setdata] = useState([]);
  const baseUrl = "http://sit.uedeveloper.com:8093/shopatone/";
  const fileUrl = 'http://sit.uedeveloper.com:8093/';
  const getApi = () => {
    axios({
      method: 'GET',
      url: `${baseUrl}service/website/slider`,
    })
      .then(response => setdata(response.data.object))
      .catch(err => console.log('error', err));
  };
  useEffect(() => {
    getApi();
  }, []);
  console.log('datac', data);
  return (
    <ScrollView contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', padding: 20 }}>
      {
        data.map((item, index) => {
          return (
            <View
              style={styles.container}
              key={item.id}>
              <Image
                style={styles.image}
                source={{
                  uri: `${fileUrl}${item.fileUrl}`,
                }} />
              <Text >{item.descr}</Text>
            </View>
          );
        })
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    borderRadius: 0,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
