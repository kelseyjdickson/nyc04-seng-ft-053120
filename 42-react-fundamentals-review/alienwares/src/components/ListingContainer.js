import React from 'react'
import ListingItem from './ListingItem'

// TODO: replace with a fetch!
import LISTINGS from '../data'

class ListingContainer extends React.Component {
  state = {
    selectedCategory: "All"
  }

  renderListings = () => {
    const filteredListings = LISTINGS.filter(listing => {
      if (this.state.selectedCategory === "All") {
        return true
      } else {
        return listing.category === this.state.selectedCategory
      }
    })
    return filteredListings.map(listing => <ListingItem key={listing.id} listing={listing} />)
  }

  setSelectedCategory = newCategory => {
    this.setState({
      selectedCategory: newCategory
    })
  }

  render() {
    return (
      <section>
        {/* TODO: refactor to separate component */}
        <div className="category-picker">
          <span
            className={this.state.selectedCategory === "All" ? "active" : ""}
            onClick={() => this.setSelectedCategory("All")}
          >All</span>
          <span className={this.state.selectedCategory === "Spaceship Accessory" ? "active" : ""} onClick={() => this.setSelectedCategory("Spaceship Accessory")} >Spaceship Accessory</span>
          <span className={this.state.selectedCategory === "Transportation" ? "active" : ""} onClick={() => this.setSelectedCategory("Transportation")} >Transportation</span>
          <span className={this.state.selectedCategory === "Communications" ? "active" : ""} onClick={() => this.setSelectedCategory("Communications")} >Communications</span>
          <span className={this.state.selectedCategory === "Fashion" ? "active" : ""} onClick={() => this.setSelectedCategory("Fashion")} >Fashion</span>
        </div>

        <p>Showing {LISTINGS.length} results</p>
        <div className="card-list">
          {this.renderListings()}
        </div>
      </section>
    )
  }
}

export default ListingContainer