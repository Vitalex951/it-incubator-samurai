import {useDispatch} from "react-redux";
import {AuthUserRegistrationCreator} from "../../redux/auth-reducer";
import {Field, Form, Formik} from "formik";
import React from "react";

export const userSearchFormValidete = (values: any) => {
    const errors = {};
    return errors;
}
export type userSearchFormObjectType = {
    term: string,
    email?: '' | string
    Password?: '' | string,
    RememberMe?: boolean
}
export const LoginFormik = () => {
    const dispatch = useDispatch()
    const submit = (values: userSearchFormObjectType, {setSubmitting}: {
        setSubmitting: (isSubmitting: boolean) => void
    }) => {
        if (values.email && values.Password)
            dispatch(AuthUserRegistrationCreator(values.email, values.Password, values.RememberMe))
        setSubmitting(false)
    }
    return <Formik
        initialValues={{term: ''}}
        validate={userSearchFormValidete}
        onSubmit={submit}
    >
        {({isSubmitting}) => (
            <Form>
                <Field placeholder="Login" type="text" name="email"/>
                <div>
                    <Field placeholder="Password" type="password" name="Password"/>
                </div>
                <div>
                    <Field placeholder="Remember me" type="checkbox" name="RememberMe"/>
                </div>
                <button type="submit" disabled={isSubmitting}>
                    Login
                </button>
            </Form>
        )}
    </Formik>
}