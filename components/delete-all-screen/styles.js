import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.itemBackground,
  },
  delete: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.background,
  },
  deleteContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 20,
  },
  deleteTitle: {
    fontSize: 16
  },
  deleteMessageContainer : {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  deleteMessage: {
    fontSize: 14,
    fontFamily: 'Lato-Italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#4A306D',
    padding: 10,
    borderRadius: 10,
  },
});