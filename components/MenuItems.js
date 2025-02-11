import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const Item = ({ name, price }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>{name}</Text>
    <Text style={styles.priceText}>{price}</Text>
  </View>
);

const Separator = () => <View style={styles.separator} />;

const MenuItems = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <Item name={item.name} price={item.price} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEFEE',
    padding: 10,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    backgroundColor: '#F4CE14',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
    color: 'black',
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EE9972',
  },
  separator: {
    height: 1,
    backgroundColor: '#333333',
    marginVertical: 5,
  },
});

export default MenuItems;
