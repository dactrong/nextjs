import * as React from 'react';

export interface ParamsPageProps {
}

export default function ParamsPageProps (props: ParamsPageProps) {
  return (
    <div>
      <h1>Params Page</h1>
    </div>
  );
}

export async function getServerSideProps(){
    await new Promise((resolve) => setTimeout(resolve,3000))

    return{
        props:{},
    }
}
