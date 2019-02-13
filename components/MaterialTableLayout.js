import MaterialTable from "material-table";
import Link from "next/link";
import geolib from "geolib";
import NProgress from 'nprogress'

export default class MaterialTableLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "none",
      currently: "loading"
    };
  }

  componentWillMount(){
    console.log("coucou");
  }

  componentDidUpdate(){
    console.log("fini ");
    NProgress.done();
  }

  // Depends on browser
  componentDidMount() {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          // console.log(position);
          this.setState({ position: position, currently: "success" });
        },
        error => {
          // console.log(error);
          this.setState({ currently: "error" });
        }
      );
    } else {
      alert("We cannot locate you, sorry :(");
    }
  }

  render() {
    let { position, currently } = this.state;
    return (
      <div>
        <MaterialTable
          columns={[
            {
              title: "Preview",
              field: "hotel_media",
              cellStyle: { fontSize: "0.8rem" },
              render: rowData => {
                const media = rowData.media ? rowData.media : "https://picsum.photos/200/100";
                return (
                  <div>
                    <img src={media} />
                  </div>
                );
              }
            },
            {
              title: "Hotel name",
              field: "hotel_name",
              cellStyle: { fontSize: "0.8rem" },
              render: rowData => {
                const name = rowData.hotel_name;
                return (
                  <div>
                    <Link as={`/h/france/${rowData.id}`} href={`/h/france/${rowData.id}`}>
                      {name}
                    </Link>
                  </div>
                );
              }
            },
            { title: "Restaurant name", field: "restaurant_name", cellStyle: { fontSize: "0.8rem" } },
            { title: "Location", field: "location", cellStyle: { fontSize: "0.8rem" } },
            {
              title: "Distance",
              render: rowData => {
                if (currently === "success") {
                  var distance = geolib.getDistance(
                    { latitude: position.coords.latitude, longitude: position.coords.longitude },
                    { latitude: rowData.lat, longitude: rowData.lng }
                  );
                }
                return (
                  <div>
                    {currently === "loading" ? (
                      <p>Loading...</p>
                    ) : currently === "error" ? (
                      <p>Error, reload!</p>
                    ) : (
                      <p>{(distance/1000).toFixed(1)} km</p>
                    )}
                  </div>
                );
              },
              customSort: (a, b) => {
                if (currently === "success") {
                  var distanceA = geolib.getDistance(
                    { latitude: position.coords.latitude, longitude: position.coords.longitude },
                    { latitude: a.lat, longitude: a.lng }
                  );

                  var distanceB = geolib.getDistance(
                    { latitude: position.coords.latitude, longitude: position.coords.longitude },
                    { latitude: b.lat, longitude: b.lng }
                  );

                  return distanceA - distanceB
                }
              }
            },
            {
              title: "Price",
              field: "price",
              type: "currency",
              customSort: (a, b) => a.price - b.price,
              cellStyle: data => {
                var priceArray = this.props.hotels
                  .filter(el => {
                    return !el.from_price ? false : true;
                  })
                  .map(el => {
                    return Number(el.from_price);
                  });
                if (data == Math.min(...priceArray))
                  return { color: "YellowGreen", fontWeight: "bolder", fontSize: "0.8rem" };
                if (data == Math.max(...priceArray)) return { color: "red", fontWeight: "bolder", fontSize: "0.8rem" };
                return { fontSize: "0.8rem" };
              }
            },
            {
              title: "Michelin rating",
              field: "michelin_rating",
              render: rowData => {
                const rate = rowData.michelin_rating;
                return (
                  <div style={{ height: "25px" }}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Etoile_Michelin-1.svg/938px-Etoile_Michelin-1.svg.png"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        margin: "0 2px",
                        objectFit: "contain",
                        display: rate >= 1 ? "inline" : "none"
                      }}
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Etoile_Michelin-1.svg/938px-Etoile_Michelin-1.svg.png"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        margin: "0 2px",
                        objectFit: "contain",
                        display: rate > 1 ? "inline" : "none"
                      }}
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Etoile_Michelin-1.svg/938px-Etoile_Michelin-1.svg.png"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        margin: "0 2px",
                        objectFit: "contain",
                        display: rate > 2 ? "inline" : "none"
                      }}
                    />
                  </div>
                );
              }
            }
            // {
            //   title: "Doğum Yeri",
            //   field: "birthCity",
            //   lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
            // }
          ]}
          data={this.props.hotels.map(el => {
            return {
              hotel_name: el.name,
              restaurant_name: el.restaurant.name,
              location: el.location.address.postalCode + el.location.address.countryAddress,
              michelin_rating: el.restaurant.michelin_rating,
              price: el.from_price,
              hotel_url: el.link,
              restaurant_url: el.restaurant.michelin_url,
              id: el.id,
              media: el.media,
              lat: el.location.center.Lat,
              lng: el.location.center.Lng
            };
          })}
          title="Hotels & Restaurants"
          actions={[
            rowData => ({
              icon: "hotel",
              tooltip: "Go hotel webpage",
              disabled: rowData.hotel_url == null,
              onClick: (event, rowData) => {
                window.open(rowData.hotel_url, "_blank");
              }
            }),
            rowData => ({
              icon: "restaurant",
              tooltip: "Go restaurant webpage",
              disabled: rowData.restaurant_url == null,
              onClick: (event, rowData) => {
                window.open(rowData.restaurant_url, "_blank");
              }
            })
            // {
            //   icon: "navigate_next",
            //   tooltip: "Show details",
            //   onClick: (event, rowData) => {
            //     alert("You clicked user " + rowData.name);
            //   },
            //   iconthis.props: {
            //     style: {
            //       fontSize: 30
            //       // color: 'green',
            //     }
            //   }
            // }
          ]}
          options={{
            pageSize: 15,
            actionsColumnIndex: -1,
            loadingType: "linear",
            emptyRowsWhenPaging: false
          }}
        />
      </div>
    );
  }
}

// export default MaterialTableLayout;
