const Button = ({ color }) => {
    const buttonStyle={
        cursor:'pointer',
        backgroundColor:'black',
        color:'#fff',
        border:0,
        display:'block',
        fontSize:'16px',
        padding:'15px',
        width:'100%',
        textTransform: 'upperCase',
        borderRadius: '4px'
    }



    return (
        <button style={buttonStyle}>SIGN IN</button>
    )
}

Button.defaultProps = {
    color: "black"
}

export default Button