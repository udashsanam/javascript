import  './Card.css';

// this is the reuable wrapper component for 
// we are reusing this for the css reuse 
// this will improve code reusability 
const Card = (props) => {

    // getting the class name from the parent component 
    const classes = 'card ' + props.className;

    return (
        <div className={classes} >
                {/* children is th reserved key word to render the content between this components to this dive of wher children is written   */}
                {props.children}
        </div> 
    )
}
export default Card;