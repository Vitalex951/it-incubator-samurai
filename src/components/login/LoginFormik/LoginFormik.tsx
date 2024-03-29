import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import * as Yup from 'yup'
import {useAppSelector} from "../../../redux/store";
import style from "./LoginPage.module.css";

type LoginFormikType = {
    callback: (values: valuesFromFormikType, setSubmitting: (isSubmitting: boolean) => void) => void
}
export type setSubmitting = (isSubmitting: boolean) => void
export type valuesFromFormikType = {
    email: string
    password: string
    rememberMe: boolean
    captchaURL: null | string
}
export const LoginFormik = (props: LoginFormikType) => {
    const err = useAppSelector(state => state.auth.messages)
    const captchaURL = useAppSelector(state => state.auth.captchaURL)

    const initialState: valuesFromFormikType = {
        email: 'vitalex951@gmail.com',
        password: '123456789',
        rememberMe: false,
        captchaURL: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required').email('Invalid email format'),
        password: Yup.string().required('Required').min(4, 'Minimum 4 symbols'),
    })

    const submit = (values: valuesFromFormikType, {setSubmitting, resetForm}: {
        setSubmitting: setSubmitting, resetForm: () => void
    }) => {
        props.callback(values, setSubmitting)
        values.captchaURL = ''
    }

    return <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={submit}
    >
        {({isSubmitting}) => (
            <Form className={style.loginBox}>
                <div>

                    <h2>Login</h2>

                    <div className={style.freeAcc}>
                        <div>To log in get registered {' '}
                            <a href="https://social-network.samuraijs.com/" target="_blank">here</a></div>
                        <div>or use common test account credentials:</div>
                        <p/>

                        Email: <span>free@samuraijs.com</span><p/>

                        Password: <span>free</span>
                    </div>

                    <div className={style.userBox}>
                        <Field placeholder="Login" type="text" name="email"/>
                        <div className={style.error}>
                            <ErrorMessage name="email" component="div"/>
                        </div>
                    </div>

                    <div className={style.userBox}>
                        <Field placeholder="Password" type="password" name="password" autoComplete="on"/>
                        <div className={style.error}>
                            <ErrorMessage name="password" component="div"/>
                        </div>
                    </div>

                    <div className={style.checkbox}>
                        <Field placeholder="Remember me" type="checkbox" name="remember Me"/>
                        <span>Remember me</span>
                    </div>

                    {captchaURL && <div className={style.captcha}>
                        <img src={captchaURL}/>
                        <div className={style.userBox}>
                            <Field placeholder="Type Captcha" type="text" name="captchaURL"/>
                        </div>
                    </div>}

                    <button type="submit" disabled={isSubmitting}>
                        Login
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className={style.error}>
                        {err}
                    </div>
                </div>
            </Form>
        )}
    </Formik>
}

//
//
//
// type InitialValuesType = {
//     email: string
//     password: string
//     rememberMe: boolean
// }
// type LoginType = {
//     login: (email: string, password: string, rememberMe: boolean, setStatus: (status?: any) => void) => void
//     isAuth: boolean
// }
// type MapStateTotPropsType = {
//     isAuth: boolean
// }
// const Login = (props: LoginType) => {
//     const initialValues: InitialValuesType = {
//         email: '',
//         password: '',
//         rememberMe: false
//     }
//     const validationSchema = Yup.object({
//         email: Yup.string().required('Required').email('Invalid email format'),
//         password: Yup.string().required('Required').min(5, 'Minimum 5 symbols'),
//     })
//     const onSubmit = (values: InitialValuesType, {setSubmitting, setStatus}: FormikHelpers<InitialValuesType>) => {
//         props.login(values.email, values.password, values.rememberMe, setStatus)
//         setSubmitting(false)
//     }
//
//     if (props.isAuth) {
//         return <Navigate to={"/profile"}/>
//     }
//
//     return (
//         <div>
//             <h1>LOG IN</h1>
//             <Formik initialValues={initialValues}
//                     validationSchema={validationSchema}
//                     validateOnBlur
//                     onSubmit={onSubmit}>
//                 {(formik: FormikProps<FormikValues>) => {
//                     const {isSubmitting, status} = formik
//                     return (
//                         <Form>
//                             <div>
//                                 {/*<FormControl control={'input'} name={'email'} placeholder={'email'}/>*/}
//                             </div>
//                             <div>
//                                 {/*<FormControl control={'password'} name={'password'} placeholder={'password'}/>*/}
//                             </div>
//                             <div style={{marginBottom: '8px'}}>
//                                 <Field type={'checkbox'} name={'rememberMe'} id={'rememberMe'}/>
//                                 <label htmlFor={'rememberMe'}>remember me</label>
//                             </div>
//                             <div>
//                                 <button type={'submit'} disabled={isSubmitting}>
//                                     Login
//                                 </button>
//                             </div>
//                             {status
//                                 ? <span style={{color: 'red'}}>Your email or password is incorrect</span>
//                                 : <span style={{margin: '8px', width: '300px'}}/>}
//                         </Form>
//                     )
//                 }}
//
//             </Formik>
//         </div>
//     );