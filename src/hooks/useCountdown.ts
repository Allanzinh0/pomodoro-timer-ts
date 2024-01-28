import { useEffect, useState, useRef } from 'react';

/**
 * React hook to create a countdown
 * @param initialTimeParam Initial timer in seconds
 * @param callback Executed function whenever timer reaches zero
 * @param interval optional
 */
export const useCountdown = (initialTimeParam: number, callback: () => void, interval = 1000) => {
    // Timer
    const [time, setTime] = useState(initialTimeParam * 1000);
    const timeRef = useRef(time);
    const [targetTime, setTargetTime] = useState(new Date(Date.now() + initialTimeParam * 1000));

    // Params
    const [isRunning, setIsRunning] = useState(false);
    const isRunningRef = useRef(isRunning);

    const startCountdown = (initialTime?: number) => {
        setTargetTime(new Date(Date.now() + (initialTime ?? initialTimeParam) * 1000));
        timeRef.current = (initialTime ?? initialTimeParam) * 1000;
        setTime(timeRef.current);

        isRunningRef.current = true;
        setIsRunning(isRunningRef.current);
    }

    const pauseCountdown = () => {
        isRunningRef.current = false;
        setIsRunning(isRunningRef.current);
    }

    const resumeCountdown = () => {
        setTargetTime(new Date(Date.now() + timeRef.current));
        
        isRunningRef.current = true;
        setIsRunning(isRunningRef.current);
    }

    useEffect(() => {
        const intervalFn = setInterval(() => {
            if (timeRef.current > 0 && isRunningRef.current) {
                timeRef.current = targetTime.getTime() - Date.now();
                setTime(timeRef.current);
            }

            if (timeRef.current < 0)
            {
                timeRef.current = 0;
                setTime(timeRef.current);
            }

            if (timeRef.current <= 0 && isRunningRef.current) {
                isRunningRef.current = false;
                setIsRunning(isRunningRef.current);
                callback();
            }
        }, interval);


        return () => clearInterval(intervalFn);
    }, [callback, interval, time, isRunning, targetTime]);

    return {
        time,
        startCountdown,
        pauseCountdown,
        resumeCountdown
    };
}