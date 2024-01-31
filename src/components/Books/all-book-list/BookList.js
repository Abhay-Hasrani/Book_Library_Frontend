import Book from "./Book";
import styles from "./BookList.module.css";

const books = [
  {
    bookId: 1,
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVzWzrz-HW9e1PjQ_vPrZmWKgkrf2OQyg3qf6J4zBTlt82BF_s",
    title: "The Great Gatsby",
    description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby.",
    author: "F. Scott Fitzgerald",
    launched: "April 10, 1925",
    rating: 5
  },
  {
    bookId: 2,
    imageUrl: "http://bit.ly/2tMBBTd",
    title: "To Kill a Mockingbird",
    description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature.",
    author: "Harper Lee",
    launched: "July 11, 1960",
    rating: 4.5
  },
  {
    bookId: 3,
    imageUrl: "https://example.com/book3.jpg",
    title: "1984",
    description: "1984 is a dystopian social science fiction novel by English novelist George Orwell. 1984 is a dystopian social science fiction novel by English novelist George Orwell. 1984 is a dystopian social science fiction novel by English novelist George Orwell. 1984 is a dystopian social science fiction novel by English novelist George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime.",
    author: "George Orwell",
    launched: "June 8, 1949",
    rating: 3.8
  },
  {
    bookId: 4,
    imageUrl: "http://bit.ly/2tMBBTd",
    title: "Pride and Prejudice",
    description: "Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and eventually comes to appreciate the difference between superficial goodness and actual goodness.",
    author: "Jane Austen",
    launched: "January 28, 1813",
    rating: 2.6
  },
  {
    bookId: 5,
    imageUrl: "http://bit.ly/2tMBBTd",
    title: "The Catcher in the Rye",
    description: "The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951. It was originally intended for adults, but is often read by adolescents for its themes of angst, alienation, and as a critique on superficiality in society.",
    author: "J. D. Salinger",
    launched: "July 16, 1951",
    rating: 4.3
  },
  {
    bookId: 6,
    imageUrl: "http://bit.ly/2tMBBTd",
    title: "Moby-Dick",
    description: "Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the giant white sperm whale that on the ship's previous voyage bit off Ahab's leg at the knee.",
    author: "Herman Melville",
    launched: "October 18, 1851",
    rating: 4.0
  },
  {
    bookId: 7,
    imageUrl: "http://bit.ly/2tMBBTd",
    title: "War and Peace",
    description: "War and Peace is a novel by the Russian author Leo Tolstoy, first published serially, then published in its entirety in 1869. It is regarded as one of Tolstoy's finest literary achievements and remains a classic of world literature.",
    author: "Leo Tolstoy",
    launched: "1869",
    rating: 4.7
  },
  {
    bookId: 8,
    imageUrl: "http://bit.ly/2tMBBTd",
    title: "The Lord of the Rings",
    description: "The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the world at some distant time in the past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work.",
    author: "J. R. R. Tolkien",
    launched: "July 29, 1954",
    rating: 4.9
  },
  {
    bookId: 9,
    imageUrl: "http://bit.ly/2tMBBTd",
    title: "The Hobbit",
    description: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.",
    author: "J. R. R. Tolkien",
    launched: "September 21, 1937",
    rating: 4.4
  },
  {
    bookId: 10,
    imageUrl: "http://bit.ly/2tMBBTd",
    title: "The Alchemist",
    description: "The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.",
    author: "Paulo Coelho",
    launched: "1988",
    rating: 4.1
  }
];

const BookList = () => {
  const bookList = books.map((book) => {
    return (
      <li key={Math.random()} className="m-2">
        <Book book={book} />
      </li>
    );
  });
  return <ul className={styles["book-list"]}>{bookList}</ul>;
};

export default BookList;
