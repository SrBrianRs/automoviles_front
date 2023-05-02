import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';



const FEED_QUERY = gql`
    query{
      cars{
        id
        brand
        model
        color
        version
        year
        engine
        consumption
        price
        airbags
        absbreak
      }
    }
  
`
;



const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);
 /* const linksToRender = [
    {
      id: 'link-id-1',
      description:
        'Prisma gives you a powerful database toolkit 😎',
      url: 'https://prisma.io'
    },
    {
      id: 'link-id-2',
      description: 'The best GraphQL client',
      url: 'https://www.apollographql.com/docs/react/'
    }
  ];*/

  return (
    <div>
       {
       data && (
        <>
          {data.cars.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )
      }
    </div>
  );
};

export default LinkList;