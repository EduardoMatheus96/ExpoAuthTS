// src/shared/components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
  style?: object; // Permite sobrescrever estilos, caso necessário
}

const CustomTextButton: React.FC<CustomButtonProps> = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={globalStyles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomTextButton;
