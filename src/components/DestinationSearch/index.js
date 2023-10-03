import { Component } from "react";
import "./index.css";

const destinationsList = [
  {
    id: 1,
    name: "Melaka Mosque",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png",
  },
  {
    id: 2,
    name: "Shrubland",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/shrubland-img.png",
  },
  {
    id: 3,
    name: "New York",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/new-york-img.png",
  },
  {
    id: 4,
    name: "Escarpment",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/escarpment-img.png",
  },
  {
    id: 5,
    name: "Westminster Abbey",
    imgUrl:
      "https://assets.ccbp.in/frontend/react-js/westminster-abbey-img.png",
  },
  {
    id: 6,
    name: "South Downs National Park",
    imgUrl:
      "https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png",
  },
  {
    id: 7,
    name: "National Historic Site",
    imgUrl:
      "https://assets.ccbp.in/frontend/react-js/national-historic-site-img.png",
  },
  {
    id: 8,
    name: "Tower Bridge",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/tower-bridge-img.png",
  },
  {
    id: 9,
    name: "Arc Here",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/arc-here-img.png",
  },
  {
    id: 10,
    name: "Steeple",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/steeple-img.png",
  },
  {
    id: 11,
    name: "Glaciokarst",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/glaciokarst-img.png",
  },
  {
    id: 12,
    name: "Parco Nazionale delle Cinque Terre",
    imgUrl:
      "https://assets.ccbp.in/frontend/react-js/parco-nazionale-delle-cinque-terre-img.png",
  },
];

class DestinationSearch extends Component {
  state = {
    searchValue: "",
  };
  onSearchImages = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };
  render() {
    const { searchValue, searchArray } = this.state;
    const filterSearch = destinationsList.filter((eachItem) =>
      eachItem.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    return (
      <div className="container">
        <h1>Destination Search</h1>
        <div className="input-container">
          <input
            type="search"
            value={searchValue}
            placeholder="Search For Destination"
            onChange={this.onSearchImages}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search"
          />
        </div>
        <ul>
          {filterSearch.length > 0 ? (
            filterSearch.map((eachItem) => {
              return (
                <li key={eachItem.id}>
                  <img src={eachItem.imgUrl} alt={eachItem.name} />
                  <h3>{eachItem.name}</h3>
                </li>
              );
            })
          ) : (
            <p>{`Search Results Not Found On Your Input Value ${searchValue}`}</p>
          )}
        </ul>
      </div>
    );
  }
}
export default DestinationSearch;
