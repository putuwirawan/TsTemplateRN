import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');
const height_logo = height * 0.25;
const width_logo = height * 0.25;
const baseColor = {darkTheme:{bacground:'#000C66'}, lightTheme:{background:'red'}};

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {color: '#05375a', fontSize: 40, fontWeight: 'bold'},
  subTitle: {color: '#05375a', fontSize: 30, fontWeight: 'bold'},
  header: {color: '#05375a', fontSize: 25, fontWeight: 'bold'},
  subHeader: {color: '#05375a', fontSize: 20, fontWeight: 'bold'},
  button: {alignItems: 'flex-end', marginTop: 20,marginHorizontal:5},
  dashboardLogo:{height: height_logo , width:width_logo }
});
export {baseColor};
export default styles;
