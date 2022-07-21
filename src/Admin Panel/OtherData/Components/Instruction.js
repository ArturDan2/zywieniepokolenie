
import {React, useState} from 'react';
import styled from 'styled-components';
import { CommonMainContainer } from '../CommonStyling';

const Instruction = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleHandler = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
        console.log(isOpen)
    }

    return(
        <MainContainer>
            <InstructionPad onClick={toggleHandler}>
                Instrukcja
            </InstructionPad>
            <Blurr isOpen={isOpen}>
                <InstructionBox isOpen={isOpen}>
                    <UpperBar>
                        <button onClick={toggleHandler}>
                            <svg width="20" height="20" viewBox="0 0 20 20">
                                <path d="M 3 16.5 L 17 2.5" fill="transparent" stroke="white" strokeWidth="2.5"/>
                                <path d="M 3 2.5 L 17 16.346" fill="transparent" stroke="white" strokeWidth="2.5"/>
                            </svg>
                        </button>
                    </UpperBar>
                    <InstructionContent>
                        <div className="instruction-introduction">
                        <p> Aby stworzyć artykuł uzupełnij przeznaczone do tego pola. W polu "Główna treść artykułu" poprzez użycie specjalnych tagów 
                            masz możliwość wykorzystania różnych wielkości oraz grubości czcionek, co może zostać wykorzystane do np. 
                            stworzenia nagłówków. Istnieje także możliwość tworzenia list oraz umieszczania w dowolnym miejscu dołączonych do tekstu zdjęć.</p>
                            <p><b>Pamiętaj</b>, że każdy paragraf w głównej treści twojego artykułu powinien zostać owinięty tagiem <b>{`<p></p>`}.</b></p>
                            <p>Poniżej znajduje się instrukcja użycia tagów</p>
                        </div>
                        <div className="tag-example">
                            <h1>Lorem ipsum</h1>
                            <p>{`<h1>Lorem ipsum</h1>`}</p>
                        </div>
                        <div className="tag-example">
                            <h2>Lorem ipsum</h2>
                            <p>{`<h2>Lorem ipsum</h2>`}</p>
                        </div>
                        <div className="tag-example">
                            <h3>Lorem ipsum</h3>
                            <p>{`<h3>Lorem ipsum</h3>`}</p>
                        </div>
                        <div className="tag-example">
                            <h4>Lorem ipsum</h4>
                            <p>{`<h4>Lorem ipsum</h4>`}</p>
                        </div>
                        <div className="tag-example">
                            <h5>Lorem ipsum</h5>
                            <p>{`<h5>Lorem ipsum</h5>`}</p>
                        </div>
                        <div className="tag-example">
                            <p>Lorem ipsum</p>
                            <p>{`<p>Lorem ipsum</p>`}</p>
                        </div>
                        <div className="tag-example">
                            <p>Lorem <b>ipsum</b></p>
                            <p>{`<p>Lorem <b>ipsum</b></p>`}</p>
                        </div>
                        <div className="tag-example">
                            <ul>
                                <li>Lorem</li>
                                <li>ipsum</li>
                            </ul>
                            <p>{`<ul>`}<br/>
                                {`<li>Lorem</li>`}<br/>
                                {`<li>Ipsum</li>`}<br/>
                                {`</ul>`}
                            </p>
                        </div>

                        <p>Aby załączyć zdjęcie, użyj w tekście tagu <b>{`<PIC1/>`}</b>, <b>{`<PIC2/>`}</b> lub <b>{`<PIC3/>`}</b> odpowiednio dla pierwszego, drugiego i trzeciego załączonego przez ciebie zdjęcia. Pamiętaj, aby załączyć zdjęcia w odpowiednim panelu!</p>
                    </InstructionContent>
            </InstructionBox>
        </Blurr>
    </MainContainer>
    )
};
const MainContainer = styled.div`
    ${CommonMainContainer};
    padding: 0;
`
const InstructionPad = styled.button`
    background: #EF0061;
    color: white;
    width: 100%;
    height: 100%;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.5s ease;
    padding: 2rem 1rem;
    :hover{
        font-size: 1.15rem;
    }
`
const InstructionBox = styled.div`
    position: absolute;
    display: ${props => props.isOpen ? "flex" : "none"};
    align-items: start;
    left: 50%;
    top: 50%;
    background: white;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    box-shadow: 0px 10px 10px #00000018;
    flex-direction: column;
    p{
        color: black;
        background: white;
    }
`
const UpperBar = styled.div`
    display: flex;
    width: 100%;
    height: 3rem;
    background: pink;
    padding: 1rem;
    justify-content: end;
    margin: 0;
    button{
        color: white;
        background: none;
        border: none;
        font-size: 1rem;
        cursor: pointer;
    }
`

const InstructionContent = styled.div`
    width: 100%;
    flex-direction: column;
    background: white;
    padding: 4rem;
    overflow: auto;
    margin: 0;
    div.tag-example{
        display: flex;
        color: black;
        flex-direction: row;
        background: white;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        column-gap: 1.5rem;
        li{
            list-style-type: disc;

        }
    }
    div.instruction-introduction{
        p{
            margin-bottom: 0.5rem;
        }
    }
    @media (max-width: 650px) {
      padding: 2rem;
    }
`
const Blurr = styled.div`
            overflow: hidden;
            display: ${props => props.isOpen ? "flex" : "none"};
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: #d4f2fc94;
            backdrop-filter: blur(2px);
            z-index: 4;
`
export default Instruction;