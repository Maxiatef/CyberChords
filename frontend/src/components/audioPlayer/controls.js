import React from "react";
import "./controls.css";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";

export default function Controls({
    isPlaying,
    setIsPlaying,
    handleNext,
    handlePrev,
}) {
    return (
        <IconContext.Provider value={{ size: "24px" }}> {/* Adjust size here */}
            <div className="controls-wrapper">
                <button className="action-btn" onClick={handlePrev}>
                    <IoPlaySkipBack />
                </button>
                <button
                    className={
                        isPlaying ? "play-pause-btn active" : "play-pause-btn"
                    }
                    onClick={() => setIsPlaying(!isPlaying)}
                >
                    {isPlaying ? <FaPause /> : <IoPlay />}
                </button>
                <button className="action-btn" onClick={handleNext}>
                    <IoPlaySkipForward />
                </button>
            </div>
        </IconContext.Provider>
    );
}
