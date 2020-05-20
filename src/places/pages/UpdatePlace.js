import React from 'react';
import {useParams} from 'react-router-dom';

import Input from '../../Shared/Components/FormElements/Input.js';
import Button from '../../Shared/Components/FormElements/Button.js';
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../Shared/Util/validators.js'
import './PlaceForm.css';

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Empire state building',
        description:'famous skyscraper of the world',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address:'20 W 34th St, New York, NY 10001',
        location:{
            lat: 40.7484445,
            lng: -73.9878531
        },
        creator:'u1'
    },
    {
        id:'p2',
        title:'Empire state building',
        description:'famous skyscraper of the world',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address:'20 W 34th St, New York, NY 10001',
        location:{
            lat: 40.7484445,
            lng: -73.9878531
        },
        creator:'u2'
    }

];

const UpdatePlace = () => {
    const placeId = useParams().placeId;
  
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
  
    if (!identifiedPlace) {
      return (
        <div className="center">
          <h2>Could not find place!</h2>
        </div>
      );
    }
  
    return (
      <form className="place-form">
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={() => {}}
          value={identifiedPlace.title}
          valid={true}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (min. 5 characters)."
          onInput={() => {}}
          value={identifiedPlace.description}
          valid={true}
        />
        <Button type="submit" disabled={true}>
          UPDATE PLACE
        </Button>
      </form>
    );
  };
  
  export default UpdatePlace;
  