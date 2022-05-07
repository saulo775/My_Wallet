import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 40rem;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);

    h1 {
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 3rem;
        color: var(--white);
        margin-bottom: 1.5rem;
    }

    a {
        color: var(--white);
        font-size: 1rem;
        font-weight: 700;
        margin-top: 2.25rem;
        text-decoration: none;
        line-height: 18px;
    }
`

export const SignUpForm = styled.form`
    display: flex;
    width: 100%;
    padding: 0 1.5rem;
    flex-direction: column;

    input {
        flex: 1;
        border-radius: 4px;
        padding: 1rem;
        font-size: 1.25rem;
        font-weight: 400;
        margin-bottom: 0.75rem;
        border: none;
        outline: none;
    }

    button {
        background-color: var(--primary-ligth);
        border: none;
        border-radius: 4px;
        padding: 0.75rem;

        color: var(--white);
        font-weight: 700;
        font-size: 1.25rem;
    }
`;