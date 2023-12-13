import {  Switch, Text, TextInput, TouchableHighlight, TouchableOpacity, View, ScrollView } from 'react-native';
import Styles, { DarkStyle, LightStyle } from './styles/styles.js';
import { useState } from 'react';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [gender, setGender] = useState('Female');
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [bloodAlcoholLevel, setBloodAlcoholLevel] = useState(0);
  const [weight, setWeight] = useState('');

  const calculateBloodAlcoholLevel = () => {
    if (!weight || isNaN(weight)) {
      setBloodAlcoholLevel('0.00');
      return;
    }

    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;

    let result;
    if (gender === 'female') {
      result = gramsLeft / (weight * 0.6);
    } else {
      result = gramsLeft / (weight * 0.7);
    }

    if (result < 0) {
      result = 0;
    }

    setBloodAlcoholLevel(result.toFixed(2));
  };

  return (
    <View style={isEnabled ? LightStyle.container : DarkStyle.container}>
      <Text style={Styles.header}>Alcometer</Text>
      <Text style={Styles.label}>Gender</Text>
      <RadioButton.Group value={gender} onValueChange={(g) => setGender(g)}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="female" />
          <Text>Female</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="male" />
          <Text>Male</Text>
        </View>
      </RadioButton.Group>
      <Text>Time</Text>
      <NumericInput
        onChange={(value) => setTime(value)}
        minValue={0}
        maxValue={24}
        containerStyle={{ backgroundColor: Styles.containerColorDark }}
        rounded
      />
      <Text>Bottles</Text>
      <NumericInput
        onChange={(value) => setBottles(value)}
        minValue={0}
        maxValue={24}
        borderColor="#000000"
        containerStyle={{ backgroundColor: Styles.containerColorLight }}
        rounded
        iconStyle={{ color: 'rgb(249, 8, 209)' }}
      />
      <Text style={Styles.label}>Weight</Text>
      <TextInput
        keyboardType="numeric"
        value={weight}
        style={Styles.textInput}
        onChangeText={(text) => setWeight(text.replace(/[^0-9]/g, ''))} // Filter non-numbers
      />
      <TouchableOpacity onPress={calculateBloodAlcoholLevel}>
        <Text style={Styles.button}>CALCULATE</Text>
      </TouchableOpacity>
      <Switch
        value={isEnabled}
        onValueChange={(changedVal) => setIsEnabled(changedVal)}
        thumbColor={isEnabled ? Styles.thumbEnabledColor : Styles.thumbDisabledColor}
      />
      <Text style={Styles.label}>Blood Alcohol Level: {bloodAlcoholLevel}</Text>
  
    </View>
  );
}