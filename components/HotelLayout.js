import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { Map, Marker, Popup, TileLayer } from "react-leaflet-universal";
import { Line } from 'react-chartjs-2';

const mediaStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  height: "auto",
  objectFit: "cover"
};

const mediaContainerStyle = {
  width: "100%",
};

const cardStyle = {
  // maxWidth: "50%",
  // margin: "auto"
  maxWidth: '30%',
  position: 'absolute',
  margin: 'auto',
  right: '10px',
  top: '90px'
};

const mapContainerStyle = {
  // height: "500px",
};

const options = {
  scaleShowGridLines: false,
  // scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 2,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  // legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
  scales: {
    xAxes: [{
      gridLines: {
          color: "rgba(0, 0, 0, 0)",
      }
  }],
    yAxes: [{
        ticks: {
            beginAtZero: true
        },
    }]
}
}

class HotelLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataOne: chartDataOne(props),
      dataSecond: chartDataSecond(props)
    }
  }

  render() {
    return (
      <div>
        <style jsx global>{`
      .bodyStyle{
        padding: 0;
      }
    `}</style>
        <Card style={cardStyle}>
          <div style={mediaContainerStyle}>
            <CardImg style={mediaStyle} src={this.props.hotel.media} alt="Card image cap" />
          </div>

          <CardBody>
            <CardTitle>
              <i className="fas fa-hotel" /> {this.props.hotel.name}
            </CardTitle>
            <CardTitle>
              <i className="fas fa-utensils" /> {this.props.hotel.restaurant.name}
            </CardTitle>
            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
            {/* <Button>Button</Button> */}

          </CardBody>
          <Line
          data={this.state.dataOne}
          options={options}
          width="100" height="40"
        />
        <Line
          data={this.state.dataSecond}
          options={options}
          width="100" height="40"
        />
        </Card>
        <Map center={[this.props.hotel.location.center.Lat, this.props.hotel.location.center.Lng]} zoom={10}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[this.props.hotel.location.center.Lat, this.props.hotel.location.center.Lng]}>
            <Popup>
              {this.props.hotel.name}
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}

function chartDataOne(props) {
  var map = Object.keys(props.hotel.disponibilites.first.body).map(function(key) {
    return props.hotel.disponibilites.first.body[key];
  });
  return {  
    labels: map.map(el => { return el.match(/\b\d+\b/)[0]}),
    datasets: [
      {
        label: props.hotel.disponibilites.first.name,
        data: map.map(el => { return el.includes('null') ? 0 :   el.match(/\s\d+[^€]+\b/)[0] }),
        backgroundColor: ['rgba(239, 202, 72, 0.5)',],
      }
    ]
  }
}

function chartDataSecond(props) {
  var map2 = Object.keys(props.hotel.disponibilites.second.body).map(function(key) {
    return props.hotel.disponibilites.second.body[key];
  });
  
  return {  
    labels: map2.map(el => {return el.match(/\b\d+\b/)[0]}),
    datasets: [
      {
        label: props.hotel.disponibilites.second.name,
        backgroundColor: ['rgba(69, 182, 159, 0.5)',],
        data: map2.map(el => { return el.includes('null') ? 0 : el.match(/\s\d+[^€]+\b/)[0]}),
      }
    ]
  }
}

export default HotelLayout;
