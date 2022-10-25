import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  itemList: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  itemContainer: {
    flex: 1,
    marginVertical: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: colors.itemBackground,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  item: {
    fontSize: 16,
    color: '#000000',
  },
  delete: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  button: {
    backgroundColor: '#4A306D',
    padding: 10,
    borderRadius: 10,
  },
  loadingContainter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});