import Title from "./components/Title";
import Cat from "./components/Cat";


function App() {
  const familyName = 'AlBukerrr';
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem',
      }}>


      <h1 style={{ fontSize: 50 }}>React App</h1>
      <p>Hello World</p>
      <Title 
        name = {`Hajar ${familyName}`}
        //role = "Developer"
        isManager={true}
        // meow = {() => console.log("Meow!")}
      />
      <Title 
        name = {`Fauzan ${familyName}`}
        role = "CEO"
      />
 
    </div>
    

  )

}

export default App;
