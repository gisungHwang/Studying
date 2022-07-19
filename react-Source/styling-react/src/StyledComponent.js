import styled, {css} from 'styled-components';

const sizes = {
    desktop: 1024,
    tablet: 768
};
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: $Psizes[label] / 16}em) {
        ${css(...args)};
    }
`;
return acc;
}, {});

const Box = styled.div`
    background : ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
    width : 1024px;
    margin : 0 auto;
    @media(max-width : 1024px) { 
        width: 768px;
    }
    @media (max-width: 768px) {
        width :100%;
    }
    `;


const Button= styled.button`
    background:skyblue;
    color:black;
    border-radius: 4px;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight:600;
    margin : 0 auto;


&:hover {
    background:rgba(255, 255, 255, 0.9);
}

${props=> 
    props.inverted &&
css`
    background: none;
    border: 2px solid white;
    color:white;

&:hover {
    background: white;
    color:black;
}
`};
& + button { //   +는 버튼의 바로 앞을 나타냄
    margin-left: 1rem;
    margin : 0 auto;
}
`;

const StyledComponent = () => (
    <Box color="black">
        <Button>하이루</Button>
        <Button inverted={true}>테두리만</Button>
    </Box>
);

export default StyledComponent;