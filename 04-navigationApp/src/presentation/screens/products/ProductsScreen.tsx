/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View, useColorScheme} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {FlatList} from 'react-native-gesture-handler';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {NavigationProp, useNavigation} from '@react-navigation/core';
import {
  NavigateScreens,
  type RootStackParams,
} from '../../routes/StackNavigator';

export const ProductsScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const navigateTo = (to: NavigateScreens) => {
    if (to !== NavigateScreens.Product) {
      navigation.navigate(to);
    }
  };
  const [products, setproducts] = useState<ProductInfo[]>([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setproducts(json as ProductInfo[]));
  }, []);

  return (
    <View
      style={!isDarkMode ? globalStyles.container : globalStyles.containerDark}>
      <Text style={{marginBottom: 10, fontSize: 30}}>Products</Text>
      {products.length ? (
        <FlatList
          data={products}
          renderItem={({item}) => (
            <PrimaryButton
              label={item.title}
              onPress={() =>
                navigation.navigate(NavigateScreens.Product, {
                  id: item.id,
                  name: item.title,
                })
              }
            />
          )}
        />
      ) : (
        <Text>loading</Text>
      )}
      <Text style={{marginBottom: 10, fontSize: 30}}>Settings</Text>
      <PrimaryButton
        label={NavigateScreens.Settings}
        onPress={() => navigateTo(NavigateScreens.Settings)}
      />
    </View>
  );
};

type ProductInfo = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};
