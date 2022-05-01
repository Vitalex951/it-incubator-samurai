import {Field, Form, Formik} from "formik";
import React from "react";

const userSearchFormValidete = (values: any) => {
    const errors = {};
    return errors;
}
type userSearchFormObjectType = {
    term: string
}
export const UserSearchForm = () => {

    const submit = (values: userSearchFormObjectType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {

    }
    return <Formik
        initialValues={{term: ''}}
        validate={userSearchFormValidete}
        onSubmit={submit}
    >
        {({isSubmitting}) => (
            <Form>
                <Field type="text" name="email"/>
                <button type="submit" disabled={isSubmitting}>
                    Find
                </button>
            </Form>
        )}
    </Formik>
}