function Contact(props) {
    console.log(props);
    
    return(
        <li>
            <h3>{props.name}</h3>
            <small>{props.email}</small>
        </li>
    );
}

export default Contact;