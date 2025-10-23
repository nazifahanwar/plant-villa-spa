import React from 'react';
import { Grid } from 'react-loader-spinner';

const Loader = () => {
    return (
   <div className='flex justify-center items-center min-h-screen'>
            <Grid
  visible={true}
  height="80"
  width="80"
  color="#344e41"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass="grid-wrapper"
  />
   </div>
    );
};

export default Loader;