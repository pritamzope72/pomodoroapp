import React, { useState, useEffect } from 'react';
import './index.css';

function Pomo() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  const logout=()=>{
    localStorage.clear()
    window.location.reload()
  }

  return (
    <>
    <div className="bg-gray-900 text-white font-sans text-center">
      <h1 className="text-4xl font-bold my-4">Pomodoro Timer</h1>
      <div className="text-6xl my-8">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md mx-2 cursor-pointer hover:bg-blue-600"
          onClick={toggleTimer}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md mx-2 cursor-pointer hover:bg-blue-600"
          onClick={resetTimer}
        >
          Reset
        </button>
        <br />
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md mx-2 cursor-pointer hover:bg-red-600 m-3"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
    
    </>
  );
}

export default Pomo;
