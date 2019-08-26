import React, { Component } from 'react';
export default class Porfolio extends Component {
  constructor(props){
    super(props)
    this.state = {
      portfolio: this.props.resumeData.portfolio,
      showAllProjects: false
    }
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleRemoveClick = this.handleRemoveClick.bind(this)
  }

  handleAddClick() {
    // update the state object
    this.state.portfolio.push(...this.props.resumeData.moreProjects)
    // set the state
    this.setState({ portfolio : this.state.portfolio, showAllProjects: !this.state.showAllProjects });
  }

  handleRemoveClick() {
    // update the state object
    const shortPortfolio = this.state.portfolio.filter(( el ) => !this.props.resumeData.moreProjects.includes( el ));
    // set the state
    this.setState({ portfolio : shortPortfolio, showAllProjects: !this.state.showAllProjects });
  }

  render() {
    return (
      <section id="portfolio">
      <div id="projects" className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            this.state.portfolio && this.state.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                <a href={`${item.link}`} target="_blank">
                  <div className="item-wrap">       
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          <ul>
                          {
                            item.tags && item.tags.map((tag)=>{
                              return(
                                <li key={tag}>{tag}</li>
                              );
                            })
                          }
                          </ul>
                        </div>
                      </div>
                  </div>
                  </a>
                </div>
              )
            })
          }
          </div>
          <div id="portfolio-btn">
          { this.state.showAllProjects
            ? <input type="submit" value="Show fewer projects" id="portfolio-btn" onClick={this.handleRemoveClick} />
            : <input type="submit" value="Show more projects" id="portfolio-btn" onClick={this.handleAddClick} /> }
          </div>
        </div>
      </div>
  </section>
        );
  }
}