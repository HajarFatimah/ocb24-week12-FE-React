function Cat() {
    const name = 'Oyen';
    const role = 'Ketua';


    return (
        <div style={{
            border: '1px solid black',
            padding: '1rem 2rem',
            borderRadius: '1rem',
            backgroundColor: 'black',
        }}>
        

        <p>{name}</p>
        <p>{role}</p>
        
    </div>

    );
    

}

export default Cat;
