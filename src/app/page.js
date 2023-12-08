import Image from 'next/image'
import styles from './page.module.css'
// server.js
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function TABLE(request) {
  try {
    const result =
      await sql`CREATE TABLE table ( Name varchar(255), Age int );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('Name');
  const age = searchParams.get('Age');
 
  try {
    if (!Name || !Age) throw new Error('Name and age required');
    await sql`INSERT INTO table (Name, Age) VALUES (${name}, ${age});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const table = await sql`SELECT * FROM table;`;
  return NextResponse.json({ table }, { status: 200 });
}
export default function Home() {
  
  return (
    <html lang="en">
      <head>
        <title>SQL Data Interaction</title>
      </head>
      <body>
        <h1>Data</h1>
        <ul id="dataList"></ul>
      
        <h2>Add New Data</h2>
        <form id="dataForm" action="TABLE()">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required></input><br></br>
          
          <label for="age">Age:</label>
          <input type="number" id="age" name="age" required></input><br></br>
      
          <button type="submit" onclick="TABLE()">Add Data</button>
        </form>
      
        <script src="script.js"></script>
      </body>
    </html>
  )
}
