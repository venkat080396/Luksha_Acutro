import React, {
    useState,
    useEffect,
    useCallback,
    useRef,
    Fragment,
} from 'react';
import moment from 'moment';
import { isAuthenticated, logout } from "../features/Login/loginSlice"
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';
import { SESSION_TIMEOUT } from "./Constants";

const SessionTimeout = (props) => {
    const { sessionTimeoutDuration } = props;
    const [events, setEvents] = useState([SESSION_TIMEOUT.CLICK, SESSION_TIMEOUT.LOAD, SESSION_TIMEOUT.SCROLL]);
    const [second, setSecond] = useState(0);
    const [isLoggedOut, SetIsLoggedOut] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    //const [isOpen, setOpen] = useState(false);

    let timeStamp;
    //let warningInactiveInterval = useRef();
    let startTimerInterval = useRef();
    // start inactive check
    let timeChecker = () => {
        startTimerInterval.current = setTimeout(() => {
            let storedTimeStamp = sessionStorage.getItem(SESSION_TIMEOUT.LAST_TIMESTAMP);
            warningInactive(storedTimeStamp);
        }, (sessionTimeoutDuration * 60 * 1000));
    };

    // warning timer
    let warningInactive = (timeString) => {
        clearTimeout(startTimerInterval.current);
        sessionStorage.removeItem(SESSION_TIMEOUT.LAST_TIMESTAMP);
        logout();
        SetIsLoggedOut(true);
        navigate("/login");
        enqueueSnackbar(SESSION_TIMEOUT.SESSION_EXPIRED_MESSAGE, { variant: 'error' })
        // warningInactiveInterval.current = setInterval(() => {
        //     const maxTime = 2;
        //     const popTime = 1;

        //     const diff = moment.duration(moment().diff(moment(timeString)));
        //     const minPast = diff.minutes();
        //     const leftSecond = 60 - diff.seconds();

        //     if (minPast === popTime) {
        //         setSecond(leftSecond);
        //         //setOpen(true);
        //     }

        //     if (minPast === maxTime) {
        //         clearInterval(warningInactiveInterval.current);
        //         //setOpen(false);
        //         sessionStorage.removeItem('lastTimeStamp');
        //         logout();
        //         navigate("/");
        //         enqueueSnackbar("Your session has expired. Please login again.", { variant: 'error' })
        //     }
        // }, 1000);
    };

    // reset interval timer
    let resetTimer = useCallback(() => {
        clearTimeout(startTimerInterval.current);
        //clearInterval(warningInactiveInterval.current);

        if (isAuthenticated()) {
            timeStamp = moment();
            sessionStorage.setItem(SESSION_TIMEOUT.LAST_TIMESTAMP, timeStamp);
            timeChecker();
        } else {
            //clearInterval(warningInactiveInterval.current);
            sessionStorage.removeItem(SESSION_TIMEOUT.LAST_TIMESTAMP);
        }
        //setOpen(false);
    }, [isAuthenticated()]);

    // handle close popup
    // const handleClose = () => {
    //     setOpen(false);

    //     resetTimer();s
    // };

    useEffect(() => {

        if (isLoggedOut || (!isAuthenticated()))
            return;

        events.forEach((event) => {
            window.addEventListener(event, resetTimer);
        });

        timeChecker();

        return () => {
            clearTimeout(startTimerInterval.current);
        };
    }, [resetTimer, events, timeChecker, isLoggedOut]);

    // if (!isOpen) {
    //     return null;
    // }

    // change fragment to modal and handleclose func to close
    //return <Fragment />;
};

export default SessionTimeout;