import { Picker } from '@react-native-picker/picker';

export default function PickerContainer({ principle, setPrinciple }) {
  return (
    <Picker
      selectedValue={principle}
      onValueChange={(itemValue) => setPrinciple(itemValue)}
    >
      <Picker.Item label='Latest repositories' value='default' />
      <Picker.Item label='Highest rated repositories' value='highest-rated' />
      <Picker.Item label='Lowest rated repositories' value='lowest-rated' />
    </Picker>
  );
}
