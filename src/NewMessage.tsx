import React, {ChangeEvent, FC, useState, KeyboardEvent} from "react";


interface NewMessageProps {
    addMessage: (value: string) => void;
}

export const NewMessage: FC<NewMessageProps> = ({addMessage}) => {
    const [message, setMessage] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    };


    const handleSend = () => {
        addMessage(message);
        setMessage('');
    };

    const handleKeyDown = (e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==='Enter'){
            handleSend();
        }
    }

    return (
        <>
            <div>Wpisz:</div>
            <input
                onChange={handleInputChange}
                id="textField"
                value={message}
                placeholder="Type new message"
                style={LineEditStyle}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSend}>Wyślij</button>
        </>
    );
};


const LineEditStyle = {
    flex:1,
    margin: '0 3px',
}