// Libraries
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

// Components
import Article from './Article';

// Testing Articles
const exampleArticle = {
  id: 1,
  headline: "Game of Thrones Season 9?",
  author: "Samson Caviar",
  createdOn: "2021-08-09T18:02:38-04:00",
  summary: "You wish.",
  body: "The cake is a lie"
};

const anonymousArticle = {
  ...exampleArticle,
  author: "",
};


test('renders component without errors', () => {
  render(<Article article={exampleArticle} />);
});

test('renders headline, author from the article when passed in through props', () => {
  render(<Article article={exampleArticle} />);
  const headline = screen.getByText(/Game of Thrones Season 9/i);
  const author = screen.getByText(/Samson Caviar/i);
  const summary = screen.getByText(/You wish/i);
  const body = screen.getByText(/The cake is a lie/i);
  expect(headline).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(summary).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', () => {
  render(<Article article={anonymousArticle} />);
  const anonymousResponse = screen.getByText(/Associated Press/i);
  expect(anonymousResponse).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', () => {
  const handleDeleteMock = jest.fn();
  render(<Article article={exampleArticle} handleDelete={handleDeleteMock} />);
  const deleteButton = screen.getByTestId("deleteButton");
  userEvent.click(deleteButton);
  expect(handleDeleteMock).toBeCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.
