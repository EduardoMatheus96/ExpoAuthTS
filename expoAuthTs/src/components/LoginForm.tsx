import { Text, TextInput, View, TouchableOpacity  } from "react-native";
import { useAuth } from "../context/AuthContext";
import { Formik } from 'formik';
import { LoginSchema } from "../validationSchemas";
import { globalStyles } from "../styles/globalStyles";
import CustomButton from "../shared/components/CustomButton";

const LoginForm = () => {
    const { login } = useAuth();

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={LoginSchema}
            onSubmit={async (values, { setSubmitting, setFieldError }) => {
                try {
                    await login(values.email, values.password);
                } catch (error: any) {
                    setFieldError('general', error.message);
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
                <View>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    {touched.email && errors.email && <Text style={globalStyles.errorText}>{errors.email}</Text>}

                    <TextInput
                        style={globalStyles.input}
                        placeholder="Senha"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry
                    />
                    {touched.password && errors.password && <Text style={globalStyles.errorText}>{errors.password}</Text>}
                    
                    <CustomButton
                        text="Entrar"
                        onPress={() => handleSubmit()}
                        disable={isSubmitting}
                    />
                </View>
            )}
        </Formik>
    );
};

export default LoginForm;