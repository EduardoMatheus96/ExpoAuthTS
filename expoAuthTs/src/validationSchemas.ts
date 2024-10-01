import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Email obrigatorio'),
    password: Yup.string().min(6, 'Senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
});

export const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string().email('Email inválido').required('Email obrigatorio'),
    password: Yup.string().min(6, 'Senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 
    'As senhas precisam ser iguais')
    .required('As senhas precisam ser iguais'),
});