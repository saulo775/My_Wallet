import styled from "styled-components";

export const Container = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
    max-width: 40rem;
    padding: 1.5rem 1.5rem 1rem;
    background-color: var(--primary);

    h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: var(--white);
        margin-bottom: 2.5rem;
    }
`;

export const FormOperation= styled.form`
    display: flex;
    flex-direction: column;

    input {
        margin-bottom: 0.75rem;
        padding: 1rem;
        border-radius: 5px;
        border: none;
        font-size: 1.25rem;
        outline: none;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white);
        width: 100%;
        border-radius: 4px;
        padding: 12px;
        font-size: 1rem;
        background-color: var(--primary-ligth);
        border: none;
        text-align: left;
        transition: 300ms;
        font-size: 1.25rem;
    
        :hover {
            opacity: 0.8;
            -webkit-box-shadow: 10px 9px 6px -8px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 9px 6px -8px rgba(0,0,0,0.75);
            box-shadow: 10px 9px 6px -8px rgba(0,0,0,0.75);
            cursor: pointer;
        }
    }
`;
