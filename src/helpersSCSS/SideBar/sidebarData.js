import React from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as RiIcons from "react-icons/ri"


export const SidebarData = [
    {
        title: 'Главная страница',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
        subNuv: [
            {
                title: 'Кино',
                path: '/overview/users',
                icon: <IoIcons.IoIosHome />,
            },

            {
                title: 'Сериалы',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosHome />,
            },
        ]

    },

    {
        title: 'Кинотеатр',
        path: '/timesession',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
        subNuv: [
            {
                title: 'Фильмы в прокате ',
                path: '/theater/intheater',
                icon: <IoIcons.IoIosHome />,
            },

            {
                title: 'Скоро в кино',
                path: '/theater/theatersoon',
                icon: <IoIcons.IoIosHome />,
            },

        ]

    },

    {
        title: 'Продакшн',
        path: '/products',
        icon: <FaIcons.FaCartPlus />
    },

    {
        title: 'Команда разработки',
        path: '/team',
        icon: <IoIcons.IoMdPeople />
    },

    {
        title: 'Контакты',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,


        subNuv: [
            {
                title: 'Электронная почта',
                path: '/messages/message1',
                icon: <IoIcons.IoIosPaper />,
            },

            {
                title: 'Номер телефона',
                path: '/message/message2',
                icon: <IoIcons.IoIosPaper />,
            },

        ]

    },

    {
        title: "Помощь",
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />
    }

]

