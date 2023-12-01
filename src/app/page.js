import Image from 'next/image'
import styles from './page.module.css'
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  try {
    const result =
      await sql`CREATE TABLE data ( Name varchar(255), Age int );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export default function Home() {
  
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>SQL Data Interaction</title>
      </head>
      <body>
        <h1>Data</h1>
        <ul id="dataList"></ul>
      
        <h2>Add New Data</h2>
        <form id="dataForm">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required><br><br>
          
          <label for="age">Age:</label>
          <input type="number" id="age" name="age" required><br><br>
      
          <button type="submit">Add Data</button>
        </form>
      
        <script src="script.js"></script>
      </body>
    </html>
    <script>
      import { sql } from '@vercel/postgres';
      CREATE DATABASE db;
      CREATE TABLE myTable (
        Column1 text,
        Column2 text,
        Column3 text,
        Column4 text,
        Column5 text
      );
    </script>
  )
}
