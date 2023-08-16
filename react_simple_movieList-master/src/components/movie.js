
const Movie = (props) => {
  return (
    <div className='movie'>
        <img src={props.img} alt="" />
        <p>{props.Title}</p>
        <p>Year : {props.Year}</p>
    </div>
  )
}

export default Movie