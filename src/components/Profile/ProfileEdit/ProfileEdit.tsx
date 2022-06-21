import React from 'react';
import {Form, Formik} from "formik";
import s from "./ProfileEdit.module.css";
import {Checkbox, FormControlLabel, TextField} from '@material-ui/core';
import {useAppSelector} from "../../../redux/store";
import * as Yup from 'yup';
import Button from "@mui/material/Button";


type ProfileEditPropsType = {
    editProfile: (values: valuesFromProfileEditType) => void
}

export type setSubmitting = (isSubmitting: boolean) => void
export type valuesFromProfileEditType = {
    aboutMe: string
    lookingForAJob: boolean
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export const ProfileEdit = (props: ProfileEditPropsType) => {
    const {aboutMe, contacts, lookingForAJob} = useAppSelector(state => state.profile.profile)
    const initialState: valuesFromProfileEditType = {
        aboutMe: aboutMe,
        lookingForAJob: lookingForAJob,
        facebook: contacts.facebook,
        website: contacts.website,
        vk: contacts.vk,
        twitter: contacts.twitter,
        instagram: contacts.instagram,
        youtube: contacts.youtube,
        github: contacts.github,
        mainLink: contacts.mainLink,
    }

    const validationSchema = Yup.object({
        // fullName: Yup.string().required('Required').min(1, 'Minimum 1 symbols'),
        // aboutMe: Yup.string().required('Required').min(1, 'Minimum 1 symbols'),
        // facebook: Yup.string().required('Required').min(1, 'Minimum 4 symbols')
        // website: Yup.string().url(),
        // vk: Yup.string().url(),
        // twitter: Yup.string().url(),
        // instagram: Yup.string().url(),
        // youtube: Yup.string().url(),
        // github: Yup.string().url(),
        // mainLink:Yup.string().url(),
    })

    const submit = (values: valuesFromProfileEditType, {setSubmitting, resetForm}: {
        setSubmitting: setSubmitting, resetForm: () => void
    }) => {
        props.editProfile(values)
    }

    return <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={submit}
    >
        {({isSubmitting, handleChange, values}) => (
            <Form>
                <div className={s.infoDescription}>
                    <div className={s.inputMUI}>
                        <TextField value={values.aboutMe} label="About Me" variant="outlined" name="aboutMe"
                                   onChange={handleChange}/>
                    </div>
                    <div>
                        <FormControlLabel
                            control={<Checkbox value={values.lookingForAJob} defaultChecked name="lookingForAJob"
                                               onChange={handleChange}/>}
                            label="Looking For A Job: "/>
                    </div>
                    <div className={s.inputMUI}>
                        <TextField value={values.facebook} label="facebook" variant="outlined" name="facebook"
                                   onChange={handleChange}/>
                    </div>
                    <div className={s.inputMUI}>
                        <TextField value={values.website} label="website" variant="outlined" name="website"
                                   onChange={handleChange}/>
                    </div>
                    <div className={s.inputMUI}>
                        <TextField value={values.vk} label="vk" variant="outlined" name="vk" onChange={handleChange}/>
                    </div>
                    <div className={s.inputMUI}>
                        <TextField value={values.twitter} label="twitter" variant="outlined" name="twitter"
                                   onChange={handleChange}/>
                    </div>
                    <div className={s.inputMUI}>
                        <TextField value={values.instagram} label="instagram" variant="outlined" name="instagram"
                                   onChange={handleChange}/>
                    </div>
                    <div className={s.inputMUI}>
                        <TextField value={values.youtube} label="youtube" variant="outlined" name="youtube"
                                   onChange={handleChange}/>
                    </div>
                    <div className={s.inputMUI}>
                        <TextField value={values.github} label="github" variant="outlined" name="github"
                                   onChange={handleChange}/>
                    </div>
                    <div className={s.inputMUI}>
                        <TextField value={values.mainLink} label="mainLink" variant="outlined" name="mainLink"
                                   onChange={handleChange}/>
                    </div>
                </div>
                <Button type="submit" variant="contained" size="small"
                        style={{
                            // width: '80px',
                            // height: '40px',
                            fontSize: '12px',
                            marginLeft: '10px'

                        }}> Edit Profile </Button>
            </Form>
        )}
    </Formik>
}