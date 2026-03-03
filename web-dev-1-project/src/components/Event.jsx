const Event = (props) => {
    return (

        <div class="card">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href={props.link}>
                <button>Learn More!</button>
            </a>
        </div>
    );
}


export default Event;