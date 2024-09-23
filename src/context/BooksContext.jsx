import React, { createContext, useState } from "react";

export const BooksContext = createContext();

const defaultBooks = [
  {
    id: 1,
    title: "Anna Karenina",
    isbn: "	001",
    published: "2023-05-01",
    coverImage:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRyud3qAnB_FAjkkQz5ypKq5wYh-eQrh7_6MKSZF-J5hym-NjuV",
    about:
      "Anna Karenina (Russian: Анна Каренина, IPA: [ˈanːə kɐˈrʲenʲɪnə])[1] is a novel by the Russian author Leo Tolstoy, first published in book form in 1878. Considered to be among the greatest works of literature ever written,[2] Tolstoy himself called it his first true novel. It was initially released in serial installments from 1875 to 1877, all but the last part appearing in the periodical The Russian Messenger.[3] ",
    author: {
      name: "Mark Haddon",
      birth: "1970-01-01",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTSGPSIYWlND2C0xSdh4YrSUcr00TGyFGk8KymYDxIJZQ_Rkb73",
      biography:
        "Count Lev Nikolayevich Tolstoy (9 September 1828 – 20 November 1910) was a Russian novelist and anarchist, famous for writing the books War and Peace and Anna Karenina, and many other works. He was a Christian and believed in non-violence and practiced simple living. His work The Kingdom of God is within you has influenced people like Mahatma Gandhi and Martin Luther King. ",
    },
  }
];

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(defaultBooks);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  const editBook = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BooksContext.Provider value={{ books, addBook, editBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  );
};
