import {REACT_APP_EMAIL_JS_PUBLIC_KEY, REACT_APP_EMAIL_JS_SERVICE_ID,REACT_APP_EMAIL_JS_TEMPLATE_ID} from './.env'
export const services = [
    {
        title: "Technology Enthusiast",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Software Engineer",
        icon: 'https://csgeeek.github.io/web.png',
    },
    
];

export const name = 'Abhay';

export const experiences = [
    {
        'company': 'Goldman Sachs Virtual Experience Program',
        'role': 'Software Engineer',
        'duration': 'July 2024',
        'logo': 'https://logos-world.net/wp-content/uploads/2020/10/Goldman-Sachs-Logo-1869-2020.png',
        'points': [
            'Completed a job simulation as a Goldman Sachs governance analyst responsible for assessing IT security and suggesting improvements.',
            'Identified that the company was using an outdated password hashing algorithm by cracking passwords using Hashcat.',
            'Wrote a memo for my supervisor summarizing a range of proposed uplifts to increase the company’s level of password protection including extending minimum password length and using a dedicated hashing algorithm.',
        ],
        'url': 'https://drive.google.com/file/d/1laN4vcdyQp7woq3n2BvehIxusDNgM1mr/view?usp=sharing',
    },
    {
        'company': 'J.P. Morgan Virtual Experience Program',
        'role': 'Software Engineer',
        'duration': 'October 2024',
        'logo': 'https://ih1.redbubble.net/image.3645963137.6665/fposter,small,wall_texture,product,750x1000.jpg',
        'points': [
            'Set up a local dev environment by downloading the necessary files, tools and dependencies.',
            'Fixed broken files in the repository to make web application output correctly.',
            'Used JPMorgan Chase’s open source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor.',
        ],
        'url': 'https://drive.google.com/file/d/13u54SIBOC1kyuwJwAcoMYZGxZrxUV0ma/view?usp=sharing',
    },
]



export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
