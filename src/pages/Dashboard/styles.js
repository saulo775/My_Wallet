import styled from "styled-components";

export const Container = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 40rem;
    padding: 1.5rem 1.5rem 1rem;
    background-color: var(--primary);

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 2rem;
        color: var(--white);
        
        h2 {
            font-size: 1.75rem;
            font-weight: 700;
            line-height: 31px;
        }

        svg {
            font-size: 1.5rem;
        }
    }
`;

export const ContainerRegister = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    border-radius: 0.5rem;
    padding: 1.5rem 0.75rem 0.75rem;
    margin: 1.5rem 0 0.75rem;
    background-color: var(--white);

    
    .finances {
        overflow-y: scroll;
        max-height: 55vh;

        ::-webkit-scrollbar {
            width: 4px; 
        }

        ::-webkit-scrollbar-thumb {   
            border-radius: 20px;       
            border: 3px solid var(--scrollbar); 
            margin-left: 10px;
            opacity: 0.4;
        }

        
        h4 {
            margin: auto 0;
            color: var(--gray);
            font-size: 1.25rem;
            font-weight: 400;
            text-align: center;
        }
        
    }

    .total {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        h2 {
            font-size: 1rem;
            font-weight: 700;
        }
        h2:last-child {
            color: var(--green);
        }
        
        .green {
            color: var(--green) !important;
        }

        .red {
            color: var(--red) !important;
        }
    }
`;

export const OperationContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1.5rem;
    
    div {
        
        p {
            font-size: 1rem;
            font-weight: 400;
            color: #c6c6c6;
            margin-right: 0.5rem;
        }

        h3 {
            font-size: 1rem;
            font-weight: 400;
            color: var(--black);
            margin-right: 0.5rem;
        }

        display: flex;
        align-items: center;

        .entry {
            color: var(--green);
            text-align: right;
        }
        .exit {
            color: var(--red);
            text-align: right;
        }

        svg {
            font-size: 1rem;
            color: #c6c6c6;
            margin-left: 0.5rem;
        }
    }

    
`;

export const ContainerButtons = styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;
`;

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    color: var(--white);
    width: 100%;
    border-radius: 4px;
    padding: 8px 10px;
    font-size: 1rem;
    background-color: var(--primary-ligth);
    border: none;
    text-align: left;
    transition: 300ms;
    

    :hover {
        opacity: 0.8;
        -webkit-box-shadow: 10px 9px 6px -8px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 9px 6px -8px rgba(0,0,0,0.75);
        box-shadow: 10px 9px 6px -8px rgba(0,0,0,0.75);
        cursor: pointer;
    }

    svg {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
`;
