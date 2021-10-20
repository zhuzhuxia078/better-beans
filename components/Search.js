import React from 'react';
import Link from 'next/link';
import router from 'next/router';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
    };

    this.searchCurrentLocation = this.searchCurrentLocation.bind(this);
    this.geoSuccess = this.geoSuccess.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ location: e.target.value });
  }

  handleSubmit(e) {
    const { updateList, updateCoords } = this.props;
    const { location } = this.state;
    e.preventDefault();
    router.push('/search');

    fetch(`/api/textsearch?query=${location}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log('in search by text');
        updateList(data.places);
        updateCoords(data.coords);
      })
      .catch((err) => console.log(err));
  }

  geoSuccess(pos) {
    const { updateCoords, updateList } = this.props;
    const crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    // this.setState({ currentLocation: crd });
    // 34.05223,-118.24368
    updateCoords({
      lat: crd.latitude,
      lng: crd.longitude,
    });

    fetch(`/api/search?location=${crd.latitude},${crd.longitude}`)
      .then((res) => res.json())
      .then((data) => updateList(data))
      .catch((err) => console.log(err));
  }

  searchCurrentLocation() {
    if (navigator.geolocation) {
      console.log('getting current location');
      navigator.geolocation.getCurrentPosition(this.geoSuccess, (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      });
    } else {
      console.log('location is not enabled');
    }
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          id="search"
          placeholder="Los Angeles"
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.handleSubmit}>GO</button>
        <Link href="/search">
          <button type="button" onClick={this.searchCurrentLocation}>Search Near Me</button>
        </Link>
      </div>
    );
  }
}
