import React, { Component } from 'react'
import QuoteService from '../services/QuoteService'

export default class Quotegenerator extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 quote: '',
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        QuoteService.getQuote().then((res) => {
            console.log(res.data)
            this.setState({quote: res.data})
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
            <>
                <div style={{padding:'50vh'}}>
                    <h2>{this.state.quote}</h2>
                </div>
            </>
        )
    }
}
