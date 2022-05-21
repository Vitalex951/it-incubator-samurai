import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import * as Yup from 'yup'
import {useSelector} from "react-redux";
import {AppRootReducerType} from "../store/store";

type AddMessageFormPropsType = {
    callback: (values: messageType) => void
}

export type messageType = {
    message: string
}
export const AddMessageForm = (props: AddMessageFormPropsType) => {

    const initialState: messageType = {
        message: ''
    }

    const validationSchema = Yup.object({
        message: Yup.string().required('Required'),
    })

    const submit = (values: messageType, {setSubmitting, resetForm}: {
        setSubmitting: (isSubmitting: boolean) => void, resetForm: () => void
    }) => {
        props.callback(values)
        setSubmitting(false)
        resetForm()
    }

    return <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={submit}
    >
        {({isSubmitting}) => (
            <Form>
                <Field placeholder="Message" type="text" name="message"/>
                <ErrorMessage name="message" component="div"/>
                <button type="submit" disabled={isSubmitting}>
                    Send
                </button>
            </Form>
        )}
    </Formik>
}
