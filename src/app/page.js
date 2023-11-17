import Image from 'next/image'
import styles from './page.module.css'
// server.js

import { NextResponse } from "next/server";
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open SQLite database connection
async function openDB() {
  return open({
    filename: './your_database.db',
    driver: sqlite3.Database,
  });
}

export async function GET(req, res) {
  try {
    const db = await openDB();
    const data = await db.all('SELECT * FROM YourTable');
    await db.close();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function POST(req, res) {
  try {
    const bod = req?.body;
    if (bod?.name && bod?.age) {
      const db = await openDB();
      await db.run('INSERT INTO YourTable (name, age) VALUES (?, ?)', [bod.name, bod.age]);
      const newData = await db.all('SELECT * FROM YourTable');
      await db.close();
      return NextResponse.json(newData, { status: 201 });
    }
    return NextResponse.json({ message: 'Please provide both name and age.' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
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
