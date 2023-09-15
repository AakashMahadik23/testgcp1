import { useEffect, useState } from "react";
import "./App.css";
type book={
  title:string
}
function App() {
  const [books, setBooks] = useState<Array<book>>([]);
  const findBook = async () => {
    const response = await fetch(
      "https://server-dot-rollingslate-web.el.r.appspot.com/api/v1/book/getBooks",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const books = await response.json();
    if (books) {
      setBooks(books);
    }
    //console.log(books);
  };

  useEffect(() => {
    findBook();
  }, []);
  return (
    <>
      <div className="container">
        <h1>Welcome to Rolling slate from node version 18</h1>
        <h2>Some of Popular books</h2>
        {books?.map((book:book, index) => {
          return <h4 key={index}>{book.title}</h4>;
        })}
      </div>
    </>
  );
}

export default App;