import React from "react";

export const categories = [
    {name: "characters",
        logo:<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.78168 19.25H13.2183C13.7828 19.25 14.227 18.7817 14.1145 18.2285C13.804 16.7012 12.7897 14 9.5 14C6.21031 14 5.19605 16.7012 4.88549 18.2285C4.773 18.7817 5.21718 19.25 5.78168 19.25Z"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 14C17.8288 14 18.6802 16.1479 19.0239 17.696C19.2095 18.532 18.5333 19.25 17.6769 19.25H16.75"/>
            <circle cx="9.5" cy="7.5" r="2.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.75 10.25C16.2688 10.25 17.25 9.01878 17.25 7.5C17.25 5.98122 16.2688 4.75 14.75 4.75"/>
        </svg>},
    {name: "comics",
        logo:<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H14C12.8954 4.75 12 5.64543 12 6.75V19.25L12.8284 18.4216C13.5786 17.6714 14.596 17.25 15.6569 17.25H18.25C18.8023 17.25 19.25 16.8023 19.25 16.25V5.75Z"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H10C11.1046 4.75 12 5.64543 12 6.75V19.25L11.1716 18.4216C10.4214 17.6714 9.40401 17.25 8.34315 17.25H5.75C5.19772 17.25 4.75 16.8023 4.75 16.25V5.75Z"/>
        </svg>},
    {name: "creators",
        logo:<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 19.25L9 18.25L18.2929 8.95711C18.6834 8.56658 18.6834 7.93342 18.2929 7.54289L16.4571 5.70711C16.0666 5.31658 15.4334 5.31658 15.0429 5.70711L5.75 15L4.75 19.25Z"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 19.25H13.75"/>
        </svg>
    },
    {name: "events",
        logo:<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 4.75V8.25"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 4.75V8.25"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.75 10.75H16.25"/>
        </svg>
    },
    {name: "series",
        logo:<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 19.25L12 17.25L8.75 19.25"/>
        </svg>
    },
    {name: "stories",
        logo:<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.75 5V19"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.25 5V19"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8.75H7.5"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8.75H19"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12H19"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 15.25H7.5"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 15.25H19"/>
        </svg>}
]