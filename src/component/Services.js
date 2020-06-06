import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail , FaHiking , FaShuttleVan,FaBeer} from 'react-icons/fa'
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"FaCocktail",
                info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
            },
            {
                icon:<FaHiking/>,
                title:"FaHiking",
                info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
            },
            {
                icon:<FaShuttleVan/>,
                title:"FaShuttleVan",
                info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
            },
            {
                icon:<FaBeer/>,
                title:"FaBeer",
                info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {this.state.services.map((item,index) =>{
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
