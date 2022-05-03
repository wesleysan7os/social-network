interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button>{ props.text ?? 'Default'}</button>
}

function App() {
  return (
    <>
      <Button text='wes'></Button>
      <Button text='sab'></Button>
      <Button></Button>
    </>
  );
}

export default App;