import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import AuthProvider from '../../providers/Auth';
import SearchBar from './SearchBar/SearchBar.component';
import UserDropdown from './UserDropdown/UserDropdown.component';

describe('Navbar component tests', () => {
  describe('SearchBar component', () => {
    it('Should render correctly with a title', () => {
      const { getByText } = render(
        <BrowserRouter>
          <SearchBar />
        </BrowserRouter>
      );

      expect(getByText('TochoTube')).toBeInTheDocument();
    });

    it('Should have a search input', () => {
      const { getByPlaceholderText } = render(
        <BrowserRouter>
          <SearchBar />
        </BrowserRouter>
      );

      expect(getByPlaceholderText('Search…')).toBeInTheDocument();
    });

    it('Should call search function on key pressed event', () => {
      const { getByPlaceholderText } = render(
        <BrowserRouter>
          <SearchBar />
        </BrowserRouter>
      );
      fireEvent.keyDown(getByPlaceholderText('Search…'));
    });
  });

  describe('UserDropdown component', () => {
    it('Should render correctly when no one is logged in', () => {
      const { getByText } = render(
        <BrowserRouter>
          <AuthProvider>
            <UserDropdown />
          </AuthProvider>
        </BrowserRouter>
      );

      expect(getByText('Log in')).toBeInTheDocument();
    });
  });
});
