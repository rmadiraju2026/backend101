import Image from 'next/image'
import styles from './page.module.css'
// server.js

import { NextResponse } from "next/server";
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
        <form id="dataForm">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required></input><br></br>
          
          <label for="age">Age:</label>
          <input type="number" id="age" name="age" required></input><br></br>
      
          <button type="submit" onclick="">Add Data</button>
        </form>
      
        <script src="script.js"></script>
      </body>
    </html>
  )
}
