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

const SessionTimeout = (props) => {
    const { sessionTimeoutDuration } = props;
    const [events, setEvents] = useState(['click', 'load', 'scroll']);
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
            let storedTimeStamp = sessionStorage.getItem('lastTimeStamp');
            warningInactive(storedTimeStamp);
        }, (sessionTimeoutDuration * 60 * 1000));
    };

    // warning timer
    let warningInactive = (timeString) => {
        clearTimeout(startTimerInterval.current);
        sessionStorage.removeItem('lastTimeStamp');
        logout();
        SetIsLoggedOut(true);
        navigate("/");
        enqueueSnackbar("Your session has expired. Please login again.", { variant: 'error' })
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
            sessionStorage.setItem('lastTimeStamp', timeStamp);
            timeChecker();
        } else {
            //clearInterval(warningInactiveInterval.current);
            sessionStorage.removeItem('lastTimeStamp');
        }
        //setOpen(false);
    }, [isAuthenticated()]);

    // handle close popup
    // const handleClose = () => {
    //     setOpen(false);

    //     resetTimer();s
    // };

    useEffect(() => {
        console.log(isAuthenticated())
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

    console.log(second);

    // if (!isOpen) {
    //     return null;
    // }

    // change fragment to modal and handleclose func to close
    //return <Fragment />;
};

export default SessionTimeout;