const quotes = [
    {
        quote: "To want to be what one can be is purpose in life.",
        author: "Cynthia Ozick",
    },
    {
        quote: "In this life he laughs longest who laughs last.",
        author: "John Masefield",
    },
    {
        quote: "Great minds have purposes, others have wishes.",
        author: "Washington Irving",
    },
    {
        quote: "It is possible to fail in many ways...while to succeed is possible only in one way.",
        author: "Aristotle",
    },
    {
        quote: "People fail forward to success.",
        author: "Mary Kay Ash",
    },
    {
        quote: "Underpromise; overdeliver.",
        author: "Tom Peters",
    },
    {
        quote: "Better a diamond with a flaw than a pebble without.",
        author: "Confucius",
    },
    {
        quote: "With regard to excellence, it is not enough to know, but we must try to have and use it.",
        author: "Aristotle",
    },
    {
        quote: "You need chaos in your soul to give birth to a dancing star.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "Love all, trust a few. Do wrong to none.",
        author: "William Shakespeare",
    },
    {
        quote: "At 20 years of age the will reigns, at 30 the wit, at 40 the judgment.",
        author: "Benjamin Franklin",
    },
    {
        quote: "I suppose that's one of the ironies of life doing the wrong thing at the right moment.",
        author: "Charlie Chaplin",
    },
    {
        quote: "Life's a voyage that's homeward bound.",
        author: "Herman Melville",
    },
    {
        quote: "If youth only knew: if age only could.",
        author: "Henri Estienne",
    },
    {
        quote: "If you would win a man to your cause, first convince him that you are his sincere friend.",
        author: "Abraham Lincoln",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = '" ' + todaysQuote.quote + ' "';
author.innerText = todaysQuote.author;