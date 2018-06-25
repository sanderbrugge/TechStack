import React from 'react'
import { CardSection } from './common/CardSection';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends React.Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        if (this.props.expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {this.props.library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle} >
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

/**
 * maps the items in the state to the props of this class. This way it can be used throughout the class.
 * 
 * @param {*current state} state 
 */
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);
