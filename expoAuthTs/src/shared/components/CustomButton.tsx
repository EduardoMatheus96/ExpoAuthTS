// src/shared/components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
  disable?: boolean;
  style?: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={globalStyles.button}>
      <Text style={globalStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
