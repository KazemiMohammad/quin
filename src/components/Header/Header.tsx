import React, { useEffect } from 'react'
import { getLaunches } from "../../data/lounch";
import { AddLounches } from "../../store/action";
import { ILounch } from "../../data/lounch/types";
import { useDispatch } from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    loadInitiallaunchesData();
  }, []);

  const loadInitiallaunchesData = async () => {
    const satrtDate = new Date();
    const endDate = new Date();
    endDate.setMonth(satrtDate.getMonth() + 3);
    try {
      const result = await getLaunches(satrtDate, endDate);
      const launches: ILounch[] = result.data.results;
      console.log(launches);
      
      dispatch(AddLounches(launches));
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className='p-4'>
      
      </div>
  )
}

export default Header