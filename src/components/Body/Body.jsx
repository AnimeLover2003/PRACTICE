import React from 'react';
import { Table, Search } from '../index';
import { useTable } from '../../hooks/index';

export function Body() {

  const { dataModify, SearchWord} = useTable()
  

  return (
    <main>
    <Search onChange={SearchWord} />
    <Table data={dataModify} />
    </main>
  );
}
