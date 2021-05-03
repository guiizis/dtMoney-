import styled from 'styled-components';
import { darken } from 'polished'

export const Content = styled.form`

h2{
    color:var(--text-title);
    font-size:1.5rem;
    margin-bottom:2rem;
}

input{
    width:100%;
    padding:0 1.5rem;
    height:4rem;
    border-radius:0.25rem;

    border:1px solid #d7d7d7;
    background:#e7e9ee;

    font-weight:400;
    font-size:1rem;

    &::placeholder{
        color:var(--text-body);
    }

    & + input{
        margin-top:1rem;
    }
}

button[type=submit]{
    padding:0 1.5rem;
    width:100%;
    height:4rem;
    background:var(--green);
    color:#fff;
    border-radius:0.25rem;
    border:0;
    margin-top:1.5rem;
    font-size:1rem;
    transition:filter 0.2s;
    font-weight:600;


    &:hover{
        filter:brightness(0.9)
    }
}

`

export const TransactionTypeContainer = styled.div`

    margin: 1.5rem 0;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:0.5rem;

    
`

interface IRadioBox {
    isActive: boolean
}

export const RadioBox = styled.button<IRadioBox>`
 
        
        border-radius:0.25rem;
        border:1px solid #d7d7d7;
        height:4rem;

        display:flex;
        align-items:center;
        justify-content:center;
       
        background:${(props) => props.isActive ? "#999" : "transparent"};

        transition:border-color 0.2s;

        img{
            width:20px;
            height:20px;
        }

        span{
            display:inline-block;
            margin-left:1rem;
            font-size:1rem;
            color:var(--text-title)

        }

        &:hover{
            border-color:${darken(0.1, '#d7d7d7')}
        }

 
`