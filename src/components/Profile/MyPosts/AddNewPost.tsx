import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import * as Yup from 'yup'

type AddPostFormPropsType = {
    callback: (values: messageType) => void
}

export type messageType = {
    post: string
}
export const AddMPostForm = (props: AddPostFormPropsType) => {

    const initialState: messageType = {
        post: ''
    }

    const validationSchema = Yup.object({
        post: Yup.string().required('Required'),
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
                <Field placeholder="What's new?" type="text" name="post"/>
                <ErrorMessage name="post" component="div"/>
                <button type="submit" disabled={isSubmitting}>
                    Post
                </button>
            </Form>
        )}
    </Formik>
}
