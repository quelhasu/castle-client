const HotelLayout = (props) => (
  <div>
     <h1>{props.hotel.name}</h1>
        <p>{props.hotel.from_price}</p>
        <a href={props.hotel.link}>URL</a>
  </div>
)

export default HotelLayout