import React from 'react'
import { BsCardList } from 'react-icons/bs'
import { GrCloudSoftware } from "react-icons/gr";
import { FaWarehouse } from "react-icons/fa";
import { AiFillAndroid, AiFillCar } from "react-icons/ai";
import { FaFingerprint } from "react-icons/fa";
import { CgTrack } from "react-icons/cg";
import { GiWorld, GiSteeringWheel } from "react-icons/gi";

export const servicelist = [
    {
        name: 'All Services',
        link: 'services',
        icon: <BsCardList />,
    },
    {
        name: 'Driver checklist',
        link: 'driverchecklist',
        icon: <GiSteeringWheel />,
    },
    {
        name: 'Vehicle checklist',
        link: 'services',
        icon: <AiFillCar />,
    },
    {
        name: 'Software development',
        link: 'services',
        icon: <GrCloudSoftware />,
    },
    {
        name: 'android development',
        link: 'services',
        icon: <AiFillAndroid />,
    },
    {
        name: 'ERP software',
        link: 'services',
        icon: <FaFingerprint />,
    },

    {
        name: 'vehicle tracking',
        link: 'services',
        icon: <CgTrack />,
    },
    {
        name: 'warehouse management',
        link: 'services',
        icon: <FaWarehouse />,
    },
    {
        name: 'Worldwide reach',
        link: 'services',
        icon: <GiWorld />,
    }
]