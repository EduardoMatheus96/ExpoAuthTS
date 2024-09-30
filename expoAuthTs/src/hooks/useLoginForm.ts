import { useCallback, useState } from "react";

interface LoginForm {
    email: string;
    password: string;
}

interface UseLoginForm {
    form: LoginForm;
    errors: Partial<LoginForm>;
    handleChange: (name: keyof LoginForm, value: string) => void;
    handleSubmit: () => void;
    isValid: boolean;
}

export const useloginForm = (onSubmit: (form: LoginForm) => void): UseLoginForm => {
    const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
    const [errors, setErrors] = useState<Partial<LoginForm>>({});

    const handleChange = useCallback(
        (name: keyof LoginForm, value: string) => {
            setForm(prev => ({ ...prev, [name]: value }));
            setErrors(prev => ({ ...prev, [name]: undefined }));
        },[]);

    const validate = useCallback(() => {
        const newErrors: Partial<LoginForm> = {};
        if (!form.email) {
            newErrors.email = "Email obrigatório";
        }
        if (!form.password) {
            newErrors.password = "Senha obrigatória";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [form]);

    const handleSubmit = useCallback(() => {
        if (validate()) {
            onSubmit(form);
        }
    }, [form, validate, onSubmit]);

    const isValid = Object.keys(errors).length === 0;

    return {form, errors, handleChange, handleSubmit, isValid};
}