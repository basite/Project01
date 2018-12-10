import React from 'react'
import { Accordion, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class TesAccordion extends React.Component {

    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <div className="container p-3 my-5">
                <Accordion fluid styled>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        Lorem ipsum
        </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <p>
                        Lorem ipsum
          </p>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        Lorem ipsum
                             </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <p>
                        Lorem ipsum
          </p>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        Lorem ipsum
        </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <p>
                        Lorem ipsum <Link to="/stores"><a href="">Our Stores</a></Link> Lorem ipsum.
          </p>
                    </Accordion.Content>
                </Accordion>
            </div>
        )
    }
}
export default TesAccordion;