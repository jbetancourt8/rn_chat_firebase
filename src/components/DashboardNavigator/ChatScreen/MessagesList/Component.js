import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';

import MessageRow from './MessageRow';

const ITEM_HEIGHT = 50;

class MessageListComponent extends Component {
  renderItem = ({item}) => {
    return <MessageRow message={item} id={item.id} />
  }

  emptyList = () => {
    return (
      <Text
        style={styles.placeholder}>
        {'placeholder'}
      </Text>
    )
  }

  itemLayout = (data, index) => (
    {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  )

  componentDidUpdate() {
    if (this.props.data.length) {
        this.flatList.scrollToIndex({animated: true, index: 0});
    }
  }

  render() {
    const data = this.props.data
    const contentContainerStyle = data.length ? null : styles.flatlistContainerStyle
    return (
      <FlatList
        ref={(c) => { this.flatList = c }}
        style={styles.container}
        contentContainerStyle={contentContainerStyle}
        data={data}
        renderItem={this.renderItem}
        getItemLayout={this.itemLayout}
        ListEmptyComponent={this.emptyList}
        inverted />
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eeeeee'
  },
  flatlistContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  placeholder: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center'
  }
};

MessageListComponent.propTypes = {
  data: PropTypes.array.isRequired,
}

export default MessageListComponent;
