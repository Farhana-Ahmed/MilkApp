import React from 'react'
import classnames from 'classnames';
import { usePagination, DOTS } from '../components/hooks/usePagination'
interface IProps {
    onPageChange : (some:number) => void,
    totalCount: number,
    siblingCount :number,
    currentPage:number,
    pageSize:number,
   
}
// eslint-disable-next-line react-hooks/rules-of-hooks

const Pagination = ({totalCount,currentPage,siblingCount,pageSize, onPageChange}:IProps) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
      });
      const onNext = () => {
        onPageChange(currentPage + 1);
      };
    
      const onPrevious = () => {
        onPageChange(currentPage - 1);
      };
    //   if (currentPage === 0 || paginationRange < 2) {
    //     return null;
    //   }


  return (
    <div>Pagination</div>
  )
}

export default Pagination