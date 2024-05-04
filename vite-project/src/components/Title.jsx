function Title(props) {
    // const name = 'Hajar';
    // const role = 'Developer';

    props.meow?.();
    return (
        <div style={{
            border: '1px solid black',
            padding: '1rem 2rem',
            borderRadius: '1rem',
            backgroundColor: 'orange'
        }}>
        

        <p style={{fontWeight : 'bold', fontSize : 30, color: 'black'
        }}>{props.name}</p>
        <p>{props.role}</p>

        {
        props.isManager && <p style={{ color: 'red' }}>Developer</p>
        }


        
    </div>
    );
    
}

export default Title;
