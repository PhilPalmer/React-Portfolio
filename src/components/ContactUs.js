import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Please don't hesitate to contact me for questions, work, advice or anything else below:
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                  <i class="fa fa-envelope-o"></i>
                  <a href={`mailto:${resumeData.email}`} target="_blank"> {resumeData.email}</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}