interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return (
    <button className="bg-violet-500 px-2 h-10 rounded hover:bg-violet-700 transition-colors">
      {props.text ?? "Default"}
    </button>
  );
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