import React from 'react'
import './progressCircle.css';


const Circle = ({ color, percentage, size, strokeWidth }) => {
    const radius = (size / 2) - 10;
    const circumference = (2 * Math.PI * radius) - 20;
    const strokePct = ((100 - Math.round(percentage)) * circumference) / 100;
    const offset = circumference - percentage / 100 * circumference;
    return (

        <circle
            className='progressCircle-circle'
            cx="50%"
            cy="50%"
            r={radius}
            fill='transparent'
            stroke={strokePct !== circumference ? color : ""}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={percentage ? strokePct : 0}
            strokeLinecap='round'
        />
    )
}
export default function ProgressCircle({
    percentage,
    isPlaying,
    image,
    size,
    color }) {


    return (
        <div className='progress-circle'>
            <svg
                width={size}
                height={size}>
                <g>
                    <Circle
                        strokeWidth={"0.4rem"}
                        color="#FFFF"
                        size={size}
                    />
                    <Circle
                        strokeWidth={"0.6rem"}
                        color={color}
                        percentage={percentage}
                        size={size}
                    />
                </g>
                <defs>
                    <clipPath id="myCircle">
                        <circle cx="50%" cy="50%" r={(size / 2) - 30} fill="#FFFFF" />
                    </clipPath>
                    <clipPath id="myInncerCircle">
                        <circle cx="50%" cy="50%" r={(size / 2) - 100} fill="#FFFFF" />
                    </clipPath>
                </defs>
                <image
                    className={isPlaying ? "active" : ""}
                    x={30}
                    y={30}
                    width={2 * ((size / 2) - 30)}
                    height={2 * ((size / 2) - 30)}
                    clipPath='url(#myCircle)'
                    href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png" />
                <image
                    className={isPlaying ? "active" : ""}
                    x={100}
                    y={100}
                    width={2 * ((size / 2) - 100)}
                    height={2 * ((size / 2) - 100)}
                    clipPath='url(#myInncerCircle)'
                    href={image} />
            </svg>
        </div>
    )
}
