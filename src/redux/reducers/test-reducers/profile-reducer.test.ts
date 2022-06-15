import {addPostAC, profileReducer, ProfileType, setUserProfileAC, StateType} from "../Profile-reducer";

// @ts-ignore
let startState: StateType = {}
beforeEach(() => {
    startState = {
        postData: [
            {id: '1', message: 'Hi', likes: 3},
            {id: '2', message: 'How are you', likes: 5},
        ],
        profile: {
            "aboutMe": "я круто чувак 1001%",
            "contacts": {
                "facebook": "facebook.com",
                "website": null,
                "vk": "vk.com/dimych",
                "twitter": "https://twitter.com/@sdf",
                "instagram": "instagra.com/sds",
                "youtube": null,
                "github": "github.com",
                "mainLink": null
            },
            "lookingForAJob": true,
            "lookingForAJobDescription": "не ищу, а дурачусь",
            "fullName": "Vitali",
            "userId": 2,
            "photos": {
                "small": "",
                "large": "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
            }
        },
        statusMainUser: '',
        statusUser: '',
        isStatus: "mainUser",
        loaderStatus: false
    }
})
test('new post should be added', () => {

    const endState = profileReducer(startState, addPostAC('it-incubator'))

    expect(endState.postData.length).toBe(3);
    expect(endState.postData[0].message).toBe("it-incubator")
})
test('show user profile', () => {
   const profile: ProfileType = {
        aboutMe: 'Hi',
        contacts: {
            facebook: 'string',
            website: 'string',
            vk: 'string',
            twitter: 'string',
            instagram: 'string',
            youtube: 'string',
            github: 'string',
            mainLink: 'string'
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'string',
        fullName: 'Vital',
        userId: 1234,
        photos: {
            small: 'string',
            large: 'string'
        }
    }
    const endState = profileReducer(startState, setUserProfileAC(profile))

    expect(endState.profile?.aboutMe).toBe('Hi');
    expect(endState.profile?.fullName).toBe('Vital')
})