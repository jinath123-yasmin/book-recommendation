import React, { useState } from "react";
import "./styles.css";

const bookList = {
  OperatingSystem: [
    {
      name: "Operating System Concept",
      author: "Silberschatz, Galvin and Gagne",
      edition: "8th Edition",
      link:
        "https://www.amazon.in/Operating-System-Concepts-Abraham-Silberschatz/dp/B074G46V8F/ref=sr_1_1?dchild=1&keywords=Silberschatz%2C+Galvin+and+Gagne+book&qid=1608129726&sr=8-1"
    },
    {
      name: "Operating Systems",
      author: "Deitel, Deitel, and Choffnes",
      edition: "3rd Edition",
      link:
        "https://www.amazon.in/Valuepack-Concurrent-Programming-Principles-Operating/dp/1405858540/ref=sr_1_1?dchild=1&keywords=Deitel%2C+Deitel%2C+and+Choffnes+book&qid=1608130299&sr=8-1"
    }
  ],

  "Data Structure and Algorithm": [
    {
      name: "Data Structures and Algorithms Made Easy",
      author: "Narasimha Karumanchi ",
      edition: "4th Edition",
      link:
        "https://www.amazon.in/Data-Structures-Algorithms-Made-Easy/dp/819324527X/ref=sr_1_1?dchild=1&keywords=data+structure+algorithms+made+easy&qid=1608133780&sr=8-1"
    },
    {
      name: "Data Structures using C & C++",
      author: "Rajesh K. Shukl",
      edition: "8th Edition",
      link:
        "https://www.amazon.in/Data-Structures-using-Rajesh-Shukla/dp/8126519975/ref=sr_1_2?dchild=1&keywords=data+structure+rajesh+k+shukla&qid=1608147497&sr=8-2"
    }
  ],

  "Database Management Systems": [
    {
      name: "Database System Concepts",
      author: "Abraham Silberschatz ",
      edition: "6th Edition",
      link:
        "https://www.amazon.in/Database-System-Concepts-Silberschatz/dp/9332901384/ref=sr_1_6?dchild=1&keywords=dbms+books&qid=1608134547&s=books&sr=1-6"
    },
    {
      name: "Fundamentals of Database System ",
      author: "Elmasri Ramezl",
      edition: "7th Edition",
      link:
        "https://www.amazon.in/Fundamentals-Database-System-Elmasri-Ramez/dp/933258270X/ref=sr_1_7?dchild=1&keywords=dbms+books&qid=1608134547&s=books&sr=1-7"
    }
  ],

  "Software Engineering": [
    {
      name: "Hands-On Software Engineering with Golang",
      author: "Achilleas Anagnostopoulos",
      edition: "6th Edition",
      link:
        "https://www.amazon.in/Hands-Software-Engineering-Golang-programming/dp/1838554491/ref=sr_1_2_sspa?crid=31AWIRKB0LHXY&dchild=1&keywords=software+engineering+books&qid=1608135672&s=books&sprefix=software+e%2Cstripbooks%2C693&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyQlZUSk1YNUo5MDFPJmVuY3J5cHRlZElkPUEwOTcyNDY1MTI5TUNBTkpDSlJDVSZlbmNyeXB0ZWRBZElkPUEwNjg0NTE0MzlEVDZXS1hJR1ZEWiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
    },
    {
      name: "Software Engineering",
      author: "Ian Sommerville",
      edition: "10th Edition",
      link:
        "https://www.amazon.in/Software-Engineering-Ian-Sommerville/dp/9332582696/ref=sr_1_3?crid=31AWIRKB0LHXY&dchild=1&keywords=software+engineering+books&qid=1608135672&s=books&sprefix=software+e%2Cstripbooks%2C693&sr=1-3"
    }
  ],

  "Graph Theory": [
    {
      name:
        "Graph Theory with Applications to Engineering and Computer Science",
      author: "Deo, Narsingh ",
      edition: "6th Edition",
      link:
        "https://www.amazon.in/Theory-Applications-Engineering-Computer-Science/dp/8120301455/ref=sr_1_1?dchild=1&keywords=graph+theory+books&qid=1608136497&s=books&sr=1-1"
    },
    {
      name: "Graph Theory and its Applications ",
      author: "R. Balakrishnan, R.J. Wilson, G. Sethuraman",
      edition: "10th Edition",
      link:
        "https://www.amazon.in/Graph-Theory-Its-Applications-Balakrishnan/dp/8173195692/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1608136497&sr=1-12"
    }
  ]
};

export default function App() {
  var [recommendedBooks, setUserBooks] = useState("OperatingSystem");
  function onClickBook(books) {
    setUserBooks(books);
  }

  var lkm = Object.keys(bookList);

  return (
    <div className="App">
      <header>
        <h1 className="heading">Computer Fundamentals 📚</h1>
      </header>
      <section className="section">
        <div>
          {lkm.map((books) => (
            <button
              className="container"
              key={books}
              onClick={() => onClickBook(books)}
            >
              {books}
            </button>
          ))}{" "}
        </div>
      </section>
      <div>
        {bookList[recommendedBooks].map((books) => {
          return (
            <ul className="container-Right">
              <li> {books.name} </li>
              <li>Author: {books.author} </li>
              <li>Edition: {books.edition} </li>
              <a className="primary-link" href={books.link}>
                {" "}
                Order{" "}
              </a>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
