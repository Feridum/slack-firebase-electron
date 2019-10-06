import React, {FC} from "react";
import imageUrl from "./logo.svg";
import {USER} from "./firebase";

interface MessagesProps {
    messages: Array<{ message: string, username: string }>;
}

const MESSAGE_HEIGHT = 50;

const imageStyle = {
    height: "40px",
    width: "40px",
}

export const Messages: FC<MessagesProps> = ({messages}) => {
    return (
        <>
                {messages.map((value, i) => (
                    <div key={i} style={{
                        height: `${MESSAGE_HEIGHT}px`,
                        flexDirection:(value.username === USER) ? "row" : 'row-reverse',
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <img
                            src={imageUrl}
                            style={imageStyle}
                        />
                        <div style={{
                            flexDirection: 'column',
                            margin: '0 20px',
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'space-evenly',
                        }}>
                            <span><b>{value.username}</b></span>
                            <span>{value.message}</span>
                        </div>

                    </div>
                ))}
        </>
    )
};


