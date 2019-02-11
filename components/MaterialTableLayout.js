import MaterialTable from "material-table";
import Link from "next/link";

const MaterialTableLayout = (props) => (
  <div>
    <MaterialTable
      columns={[
        {
          title: "Preview",
          field: "hotel_media",
          cellStyle: { fontSize: "1rem" },
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
          cellStyle: { fontSize: "1rem" },
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
        { title: "Restaurant name", field: "restaurant_name", cellStyle: { fontSize: "1rem" } },
        { title: "Location", field: "location", cellStyle: { fontSize: "1rem" } },
        {
          title: "Price",
          field: "price",
          type: "currency",
          customSort: (a, b) => a.price - b.price,
          cellStyle: data => {
            var priceArray = props.hotels
              .filter(el => {
                return !el.from_price ? false : true;
              })
              .map(el => {
                return Number(el.from_price);
              });
            if (data == Math.min(...priceArray))
              return { color: "YellowGreen", fontWeight: "bolder", fontSize: "1rem" };
            if (data == Math.max(...priceArray)) return { color: "red", fontWeight: "bolder", fontSize: "1rem" };
            return { fontSize: "1rem" };
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
      data={props.hotels.map(el => {
        return {
          hotel_name: el.name,
          restaurant_name: el.restaurant.name,
          location: el.location.postal,
          michelin_rating: el.restaurant.michelin_rating,
          price: el.from_price,
          hotel_url: el.link,
          restaurant_url: el.restaurant.michelin_url,
          id: el.id,
          media: el.media
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
        //   iconProps: {
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
)

export default MaterialTableLayout;