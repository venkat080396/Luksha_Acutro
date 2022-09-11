import React, {
    useState,
    useEffect,
    useCallback,
    useRef
} from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { isAuthenticated, logout } from '../../pages/Login/slice';
import { SESSION_TIMEOUT } from '../constants';

const SessionTimeout = (props) => {
    const { sessionTimeoutDuration } = props;
    console.log(sessionTimeoutDuration);
    const [events, setEvents] = useState([SESSION_TIMEOUT.CLICK, SESSION_TIMEOUT.LOAD, SESSION_TIMEOUT.SCROLL]);
    const [isLoggedOut, SetIsLoggedOut] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

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
        navigate('/login');
        enqueueSnackbar(SESSION_TIMEOUT.SESSION_EXPIRED_MESSAGE, { variant: 'error' })
    };

    // reset interval timer
    let resetTimer = useCallback(() => {
        clearTimeout(startTimerInterval.current);

        if (isAuthenticated()) {
            timeStamp = moment();
            sessionStorage.setItem(SESSION_TIMEOUT.LAST_TIMESTAMP, timeStamp);
            timeChecker();
        } else {
            sessionStorage.removeItem(SESSION_TIMEOUT.LAST_TIMESTAMP);
        }
    }, [isAuthenticated()]);

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

};

export { SessionTimeout };