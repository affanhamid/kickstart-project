"use client";

import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";

export const VideoInterview = ({
  onBack,
  onSubmit,
}: {
  onBack: () => void;
  onSubmit: (videoBlob: Blob | null) => void;
}) => {
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [timeLeft, setTimeLeft] = useState(7 * 60); // 7 minutes in seconds
  const [attempts, setAttempts] = useState(0); // Track the number of attempts
  const [countdown, setCountdown] = useState<number | null>(null); // Countdown before recording
  const webcamRef = useRef<Webcam>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const MAX_ATTEMPTS = 3; // Maximum number of attempts allowed

  // Force the live video feed to be muted
  useEffect(() => {
    if (webcamRef.current) {
      const videoElement = webcamRef.current.video;
      if (videoElement) {
        videoElement.muted = true; // Mute the live preview
      }
    }
  }, [webcamRef.current]);

  const startCountdown = () => {
    let count = 3; // Countdown duration in seconds
    setCountdown(count);
    const interval = setInterval(() => {
      count -= 1;
      setCountdown(count);
      if (count <= 0) {
        clearInterval(interval);
        setCountdown(null);
        startRecording();
      }
    }, 1000);
  };

  const startRecording = () => {
    if (webcamRef.current && webcamRef.current.stream) {
      const stream = webcamRef.current.stream;

      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: "video/webm",
      });
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          setVideoBlob(event.data);
        }
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);

      // Start countdown timer
      setTimeLeft(7 * 60);
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            stopRecording(); // Stop recording when timer hits 0
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);

    // Clear the timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const tryAgain = () => {
    if (attempts < MAX_ATTEMPTS) {
      setVideoBlob(null); // Clear the previous video
      setAttempts((prev) => prev + 1); // Increment the attempts
    }
  };

  // Format time (MM:SS)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0",
    )}`;
  };

  return (
    <div className="space-y-4">
      <p className="text-neutral-600 dark:text-neutral-300">
        Answer the following questions in a video format. Please ensure your
        microphone and camera are enabled.
      </p>
      <div>
        <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300">
          <li>Why do you want to become a tutor?</li>
          <li>
            Describe a challenging tutoring experience and how you handled it.
          </li>
          <li>What makes you stand out as a tutor?</li>
        </ul>
      </div>
      <p className="text-white font-bold">
        You have 7 minutes to answer the questions with 3 tries each.
      </p>
      <div className="border rounded-md p-4 flex flex-col items-center">
        <Webcam
          ref={webcamRef}
          audio
          className="w-full rounded-lg transform -scale-x-100"
          videoConstraints={{
            facingMode: "user",
          }}
        />
        <div className="mt-4 flex space-x-4">
          {!isRecording && !videoBlob && !countdown && (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={startCountdown}
            >
              Start Recording
            </button>
          )}
          {isRecording && (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={stopRecording}
            >
              Stop Recording
            </button>
          )}
        </div>
        {countdown && (
          <div className="mt-2 text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            Starting in: {countdown}
          </div>
        )}
        {isRecording && (
          <div className="mt-2 text-neutral-700 dark:text-neutral-300">
            Time Remaining: {formatTime(timeLeft)}
          </div>
        )}
      </div>
      {videoBlob && (
        <div className="mt-4">
          <h3 className="text-neutral-800 dark:text-neutral-200">
            Preview your recording:
          </h3>
          <video
            controls
            src={URL.createObjectURL(videoBlob)}
            className="w-full mt-2"
          />
        </div>
      )}
      <div className="flex justify-between mt-8">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onBack}
        >
          &larr; Back
        </button>
        {videoBlob && (
          <div className="flex space-x-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => onSubmit(videoBlob)}
            >
              Submit
            </button>
            <button
              className={`${
                attempts >= MAX_ATTEMPTS
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-yellow-600"
              } text-white px-4 py-2 rounded`}
              onClick={tryAgain}
              disabled={attempts >= MAX_ATTEMPTS}
            >
              Try Again ({attempts}/{MAX_ATTEMPTS})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
