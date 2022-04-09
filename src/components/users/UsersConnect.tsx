import React, {useState} from 'react';

import {Users} from "./Users";
import {UsersClass} from "./UsersClass";

type usersLocalType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number

}

export type userType = {
    name: string
    id: number
    photos: photosType
    status: null
    followed: boolean
}

type photosType = {
    small: null
    large: null
}

export const UsersConnect = () => {
    const [users, setUsers] = useState<userType[]>(
          [
                {
                    "name": "Shubert",
                    "id": 1,
                    "photos": {
                        "small": null,
                        "large": null
                    },
                    "status": null,
                    "followed": false
                },
                {
                    "name": "Hacker",
                    "id": 2,
                    "photos": {
                        "small": null,
                        "large": null
                    },
                    "status": null,
                    "followed": false
                }
            ],
        // pageSize: 5,
        // totalUsersCount: 0
        // }
    )

    return (
        <div>
            <Users/>
        </div>
    );
};

