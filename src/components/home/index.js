/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions  */
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import logo from '../../assets/logo.png';
import { ContainerFluid, ContainerInput } from '../../common/containers';
import { HomeForm, DiegoNunes, MessageBox, ContainerRadio } from './style';
import { Message } from '../UI/message';
import { Spinner } from '../UI/spinner'
import { SuccessBox } from '../UI/successBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import endpoints from '../../common/endpoints';

const Home = () => {
    const [messages, setMessages] = useState([]);
    const [payload, setPayload] = useState({ context: 'suitability', id: null, answers: {} })
    const [input, setInput] = useState({ inputMethod: '', value: '' });
    const [isLoading, setLoading] = useState(true);
    const [isCompleted, setCompleted] = useState({ completed: false, profile: { investmentProfile: { riskToleranceProfile: '', computedRiskTolerance: '' } } });

    useEffect(() => {
        axios.post(endpoints.SUITABILITY_ENDPOINT, payload)
            .then(res => {
                setPayload({ ...payload, id: res.data.id });
                setMessages(res.data.messages);
                setInput(getInputType(res.data));
                setLoading(false);
            })
            .catch(err => console.log('Houve um problema ao buscar as mensagens', err));
    }, []);

    const onMessageSubmit = e => {
        e.preventDefault();
        let tempPayload, parsedRadio;

        if (input.inputMethod === 'input') {
            input.type === 'text'
                ? tempPayload = { ...payload, answers: { ...payload.answers, [payload.id]: input.value } }
                : tempPayload = { ...payload, answers: { ...payload.answers, [payload.id]: +input.value } };
        } else {
            parsedRadio = JSON.parse(input.value);
            tempPayload = { ...payload, answers: { ...payload.answers, [payload.id]: parsedRadio.value } };
        }

        axios.post(endpoints.SUITABILITY_ENDPOINT, tempPayload)
            .then(res => {
                setInput(getInputType(res.data))
                setPayload({ ...tempPayload, id: res.data.id });
                input.inputMethod === 'input'
                    ? setMessages([...messages, { value: input.value, isUser: true }, ...res.data.messages])
                    : setMessages([...messages, { value: parsedRadio.label.title, isUser: true }, ...res.data.messages]);
                updateMessageBox();
                getFinalMessage(res.data, tempPayload);
            })
            .catch(err => console.log('Houve um problema ao buscar as mensagens', err));
    }

    const onInputChange = e => {
        setInput({ ...input, value: e.target.value });
    }
    
    const getFinalMessage = (message, payload) => {
        if (message.id === 'final') {
            axios.post(endpoints.FINISH_ENDPOINT, { answers: payload.answers })
            .then(res => setCompleted({ completed: true, profile: res.data.user }))
            .catch(err => console.log('erro ao obter resultado'));
        }
    }

    const getInputType = message => {
        if (message.inputs.length > 0) {
            switch (message.inputs[0].type) {
                case 'string' || 'email' || 'currency':
                    return {
                        type: 'text',
                        inputMethod: 'input',
                        value: ''
                    }
                case 'number':
                    return {
                        type: 'number',
                        inputMethod: 'input',
                        value: ''
                    }
                default: ''
            }
        } else if (message.buttons.length > 0) {
            return { inputMethod: 'buttons', buttons: message.buttons }
        }
    }

    const updateMessageBox = () => {
        const box = document.getElementById('message-box');
        const userInput = document.getElementById('userInput');
        userInput ? userInput.value = '' : '';
        box.scrollTop = box.scrollHeight;
    }

    return (
        <ContainerFluid className='flex-center flex-row h-100 space-between z-1'>
            <DiegoNunes className='flex-column'>
                <div className='background' />
                <div className='text'>
                    <img src={logo} alt='Diego Nunes Logo' />
                    <h3>Desafio técnico | <span>Warren</span></h3>
                </div>
            </DiegoNunes>

            {!isLoading
                ? (
                    <HomeForm className='flex-wrap'>
                        <div>
                            <MessageBox id='message-box'>
                                {
                                    messages.map(message => <Message key={Math.random()} message={message.value} isUser={message.isUser} />)
                                }
                            </MessageBox>
                            <form onSubmit={onMessageSubmit}>
                                <ContainerInput>
                                    {
                                        input && input.inputMethod === 'input'
                                            ? (
                                                <div>
                                                    <FontAwesomeIcon icon={faComment} />
                                                    <input
                                                        type={input.type}
                                                        name='message'
                                                        placeholder='Escreva sua resposta aqui'
                                                        autoComplete='off'
                                                        autoFocus
                                                        onChange={onInputChange}
                                                        id="userInput"
                                                    />
                                                </div>
                                            )
                                            : (
                                                <ContainerRadio>
                                                    <div>
                                                        {
                                                            input ?
                                                                input.buttons.map(button => {
                                                                    return (
                                                                        <div key={Math.random()}>
                                                                            <label htmlFor={button.label.title}>{button.label.title}</label>
                                                                            <input
                                                                                id={button.label.title}
                                                                                type="radio"
                                                                                name="message"
                                                                                value={JSON.stringify(button)}
                                                                                onChange={onInputChange}
                                                                                checked={input.value === JSON.stringify(button)}
                                                                            />
                                                                        </div>
                                                                    )
                                                                }) : ''
                                                        }
                                                    </div>
                                                </ContainerRadio>
                                            )
                                    }

                                    <button disabled={(input && !input.value) || !input ? 'disabled' : ''} className='submit-button' type='submit'>
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </button>
                                </ContainerInput>
                            </form>
                        </div>
                    </HomeForm>
                ) : <div className='flex-center align-center w-50'><Spinner /></div>}
            <SuccessBox active={isCompleted.completed ? true : false} profile={isCompleted.profile} />
        </ContainerFluid>
    );
};

export default Home;
