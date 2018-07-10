import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContentBox from '../../components/ContentBox/ContentBox';


class Blocks extends Component {
  render() {
    const { blocks } = this.props;

    return (
      <div>
        Here is the block sound!!
        <ul>
          {
            blocks.map(block => (
              <li>
                <ContentBox>
                  {JSON.stringify(block)}
                </ContentBox>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}


const mapStateToProps = ({ blockchain }) => ({
  blocks: blockchain.blocks,
});

export default connect(mapStateToProps)(Blocks);
