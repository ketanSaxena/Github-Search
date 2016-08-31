import React, { Component } from 'react';

export class PaginationTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: this.props.activePage,
      pageSet: this.getNextElements(1)
    }
    this.fetchPrevious = this.fetchPrevious.bind(this);
    this.fetchNext = this.fetchNext.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  getNextElements(number) {
    return _.range(number, number + this.props.pagePerSet);
  }

  setPage(event) {
    var currentPage = Number(event.currentTarget.dataset.index);
    this.setState({ activePage: currentPage });
    this.props.pageAction();
  }

  fetchPrevious() {
    var prevSet = this.getNextElements(_.first(this.state.pageSet));
    this.setState({ pageSet: prevSet, activePage: _.last(activePage) });
  }

  fetchNext() {
    var nextSet = this.getNextElements(_.last(this.state.pageSet));
    this.setState({ pageSet: nextSet, activePage: _.first(nextSet)) })
  }

  showPrevious() {
    _.contains(this.state.pageSet, this.props.minPagesToShow) ?
      (<li className="disabled">Prev</li>) :
      (<li onClick={this.fetchPrevious}>Prev</li>);
  }
  
  showNumericPageset() {
    return this.state.pageSet.map((page) => {
      return (<li data-index={page}
        className={this.state.activePage === page ? 'active': ''}
        onClick={this.setPage}>{page}</li>)
    });
  }

  showNext() {
    _.contains(this.state.pageSet, this.props.maxPagesToShow) ?
      (<li className="disabled">Next</li>) :
      (<li onClick={this.fetchNext}>Next</li>);
  }

  render() {
    return (
      <ul class="pagination">
        {this.showPrevious()}
        {this.showNumericPageset()}
        {this.showNext()}
      </ul>
    );
  }
}

PaginationTab.defaultProps = {
  pageAction: () => {},
  nextAction: () => {},
  prevAction: () => {},
  maxPagesToShow: 100,
  minPagesToShow: 1,
  pagePerSet: 5,
  activePage,
};
