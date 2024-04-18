import React, { useEffect, useState } from 'react';
import "./Table.css"

export function Table({data=[]}) {

  return (
    <table className='tata'>
        <thead>
            <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Trabajo</th>
            </tr>
        </thead>

        <tbody>
        {data.map(person => (
          <tr key={person.id}>
            <td>{person.Nombre}</td>
            <td>{person.Apellido}</td>
            <td>{person.Edad}</td>
            <td>{person.Trabajo}</td>
          </tr>
        ))}
        </tbody>
      </table>
  );
}