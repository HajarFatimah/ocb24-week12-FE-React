import Card from './components/Card';
import Count from './components/Count';



const users = [
  {
    name: "Ahmad",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    active: true,
    education: {
      primary: 'SRI Seremban',
      secondary: 'SMKA Sheikh Hj Mohd Said',
      tertiary: 'Universiti Malaya',
    }
  },
  {
    name: "John",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    active: false,
    education: {
      primary: 'SRI Seremban',
      secondary: 'SMKA Sheikh Hj Mohd Said',
      tertiary: 'Universiti Malaya',
    }
  },
  {
    name: "Doe",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    active: true,
    education: {
      primary: 'SRI Seremban',
      secondary: 'SMKA Sheikh Hj Mohd Said',
      tertiary: 'Universiti Malaya',
    }
  },
];


function App() {
  return (
    <>
      <Count />
      {/* {
        users.map((user) => {
          return <Card user={user} hidden={user.active === true} key={user.id} />;
        })
      } */}
    </>
  )
}



export default App;
