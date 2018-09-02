import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Topic from '../Button/Topic';
import Loading from '../Icon/Loading';
import './Topics.less';

class Topics extends React.Component {
  static propTypes = {
    favorite: PropTypes.bool,
    topics: PropTypes.arrayOf(PropTypes.string),
    maxItems: PropTypes.number,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    favorite: false,
    topics: [],
    maxItems: 0,
    loading: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
  }

  changeVisibility(showMore) {
    this.setState({ showMore });
  }

  render() {
    const { topics, favorite, maxItems, loading } = this.props;

    const displayedTopics = this.state.showMore ? topics : topics.slice(0, maxItems);

    return (
      <div className="Topics">
        <h4>
          <FormattedMessage
            id={favorite ? 'favorite_topics' : 'trending_topics'}
            defaultMessage={favorite ? 'Favorite topics' : 'Popularne Tagi Polskie'}
          />
        </h4>
        {loading && <Loading center={false} />}
        {!loading && (
          <ul className="Topics__list">
              <li key='polish'>
                <Topic name='polish' favorite={favorite} />
              </li>
              <li key='pl-artykuly'>
                <Topic name='pl-artykuly' favorite={favorite} />
              </li>
              <li key='pl-blog'>
                <Topic name='pl-blog' favorite={favorite} />
              </li>
               <li key='sp-group'>
                <Topic name='sp-group' favorite={favorite} />
              </li>
              <li key='reakcja'>
                <Topic name='reakcja' favorite={favorite} />
              </li>
              <li key='pl-fotografia'>
                <Topic name='pl-fotografia' favorite={favorite} />
              </li>             
              <li key='pl-emocjonalnie'>
                <Topic name='pl-emocjonalnie' favorite={favorite} />
              </li>
               <li key='pl-kobieta'>
                <Topic name='pl-kobieta' favorite={favorite} />
              </li>
              <li key='pl-stream'>
                <Topic name='pl-stream' favorite={favorite} />
              </li>
              <li key='pl-historia'>
                <Topic name='pl-historia' favorite={favorite} />
              </li>                  
              <li key='pl-podroze'>
                <Topic name='pl-podroze' favorite={favorite} />
              </li>
              <li key='pl-muzyka'>
                <Topic name='pl-muzyka' favorite={favorite} />
              </li>
              <li key='pl-tradycja'>
                <Topic name='pl-tradycja' favorite={favorite} />
              </li>
               <li key='tematygodnia'>
                <Topic name='tematygodnia' favorite={favorite} />
              </li>
              <li key='pl-nauka'>
                <Topic name='pl-nauka' favorite={favorite} />
              </li>
              <li key='pl-filmy'>
                <Topic name='pl-filmy' favorite={favorite} />
              </li>             
              <li key='pl-kuchnia'>
                <Topic name='pl-kuchnia' favorite={favorite} />
              </li>
               <li key='pl-gry'>
                <Topic name='pl-gry' favorite={favorite} />
              </li>
              <li key='pl-kultura'>
                <Topic name='pl-kultura' favorite={favorite} />
              </li>
              <li key='pl-zdrowie'>
                <Topic name='pl-zdrowie' favorite={favorite} />
              </li>                   
              <li key='pl-architektura'>
                <Topic name='pl-architektura' favorite={favorite} />
              </li>               
              
            {displayedTopics.map(topic => (

            
              <li key={topic}>
                <Topic name={topic} favorite={favorite} />
              </li>
            ))}
          </ul>
        )}
        {!loading && topics.length > maxItems && !this.state.showMore ? (
          <a role="button" tabIndex={0} onClick={() => this.changeVisibility(true)}>
            <FormattedMessage id="show_more" defaultMessage="Popularne Tagi Zagraniczne" />
          </a>
        ) : null}
        {!loading && topics.length > maxItems && this.state.showMore ? (
          <a role="button" tabIndex={0} onClick={() => this.changeVisibility(false)}>
            <FormattedMessage id="show_less" defaultMessage="View less" />
          </a>
        ) : null}
      </div>
    );
  }
}

export default Topics;
