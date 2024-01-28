"use client"

import { useEffect, useState } from "react";
import useSound from "use-sound"
import { toast } from "react-toastify";

import { useCountdown } from "@/hooks/useCountdown";

import { Button, ButtonGroup, TimerContainer, TimerItem, TimerNumber, TimerText, Title } from "./styles"

export default function Timer() {
    const handleEndTimer = () => {
        play();

        toast.success("Timer ended!", {
            autoClose: 1500
        });

        setIsRunning(false);
    }
    
    // Timer on screen
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    // Timer handler
    const {
        time: countdown,
        startCountdown,
        pauseCountdown,
        resumeCountdown
    } = useCountdown(25 * 60, handleEndTimer, 100);

    const [isRunning, setIsRunning] = useState(false);

    // Notification
    const [play] = useSound("/sounds/beep.mp3");
    
    const formatTimer = () => {
        setSeconds(Math.floor((countdown / 1000) % 60));
        setMinutes(Math.floor((countdown / 60 / 1000) % 60));
        setHours(Math.floor((countdown / 60 / 60 / 1000)));
    }

    useEffect(formatTimer, [countdown]);

    useEffect(() => {
        (isRunning) ? resumeCountdown() : pauseCountdown();
    }, [isRunning]);

    return (
        <>
            <Title>Pomodoro Timer</Title>
            <TimerContainer>
                <TimerItem>
                    <TimerNumber>{hours.toString().padStart(2, "0")}</TimerNumber>
                    <TimerText>Hours</TimerText>
                </TimerItem>
                <TimerItem>
                    <TimerNumber>{minutes.toString().padStart(2, "0")}</TimerNumber>
                    <TimerText>Minutes</TimerText>
                </TimerItem>
                <TimerItem>
                    <TimerNumber>{seconds.toString().padStart(2, "0")}</TimerNumber>
                    <TimerText>Seconds</TimerText>
                </TimerItem>
            </TimerContainer>
            {(countdown > 0) && (
                <ButtonGroup>
                    <Button onClick={() => setIsRunning(prev => !prev)}>{isRunning ? "Pause Timer" : "Resume Timer"}</Button>
                </ButtonGroup>
            )}
            <ButtonGroup>
                <Button onClick={() => {startCountdown(25 * 60); setIsRunning(true)}}>Start Focus</Button>
                <Button onClick={() => {startCountdown(5 * 60); setIsRunning(true)}}>Start Short Break</Button>
                <Button onClick={() => {startCountdown(15 * 60); setIsRunning(true)}}>Start Long Break</Button>
            </ButtonGroup>
        </>
    )
}