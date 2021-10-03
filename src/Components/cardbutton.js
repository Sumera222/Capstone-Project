function App() {
    const [state, setState] = useState('idle');

    const onClickHandler = () => {
        setState('loading');
        setTimeout(() => {
            setState('success');
        }, 2000);
    }

    return (
        <ReactiveButton
            buttonState={state}
            onClick={onClickHandler}
        />
    );
}