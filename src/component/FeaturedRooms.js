import React, { Component } from 'react'
import {RoomContext} from '../context'
import Room from './Room'
import Title from './Title'

export default class FeaturedRooms extends Component {
    static contextType=RoomContext
    render() {
       let {featuredRooms : rooms } = this.context;
       rooms= rooms.map(room => {
           return <Room key={room.id} room={room}/>
       });
       console.log(rooms);
        return (
            <section className="featured-rooms">
                <Title title="Featured Rooms"/>
                <div className="featured-rooms-center">
                    {rooms}
                </div>
            </section>
        )
    }
}
