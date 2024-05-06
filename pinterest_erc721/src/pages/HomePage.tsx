import React, { useEffect } from 'react';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';


function HomePage(){
    const contractInfo = useSelector((state: RootState) => state.contract.info);
    useEffect(() => {
        console.log('Contract Information:', contractInfo);
      }, [contractInfo]);
    return(
        <div>
            <Header/>
        </div>
    );
}
export default HomePage;