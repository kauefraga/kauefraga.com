/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';

interface IName {
  title: string;
  first: string;
  last: string;
}

interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IUserProps {
  name: IName;
  picture: IPicture;
  gender: string;
  dob: {
    age: number,
  };
  location: {
    city: string,
    country: string,
  };
}

export const User: React.FC<{key: number, props: IUserProps}> = ({ key, props }) => {
  return (
    <Fragment key={key}>
      <header>
        <img
          className="rounded-full"
          src={props.picture.large}
          alt="User image"
        />
      </header>
      <main>
        <h2 className="md:inline text-3xl text-blue-700">
          {props.name.first} {props.name.last}
        </h2>
        <p>{props.dob.age} years old</p>
        <p>{props.gender}</p>
        <p>{props.location.city} - {props.location.country}</p>
      </main>
    </Fragment>
  );
};
